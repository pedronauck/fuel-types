#[macro_export]
macro_rules! declare_integer_wrapper {
    ($name:ident, $inner_type:ty) => {
        #[derive(
            // Basic derives
            Debug,
            Clone,
            Eq,
            PartialEq,
            Hash,
            Copy,
            // Core derive_more traits
            derive_more::From,
            derive_more::Into,
            derive_more::Deref,
            derive_more::AsRef,
            derive_more::Display,
            derive_more::FromStr,
            derive_more::Constructor,
            // Arithmetic operations
            derive_more::Add,
            derive_more::Sub,
            derive_more::Mul,
            derive_more::Div,
        )]
        #[display("{:?}", _0)]
        pub struct $name($inner_type);

        impl<'de> serde::Deserialize<'de> for $name {
            fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
            where
                D: serde::Deserializer<'de>,
            {
                Option::deserialize(deserializer).map(|opt| opt.map(Self::new).unwrap_or_default())
            }
        }

        impl serde::Serialize for $name {
            fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
            where
                S: serde::Serializer,
            {
                self.0.serialize(serializer)
            }
        }

        impl $name {
            pub fn into_inner(&self) -> $inner_type {
                self.0
            }
        }

        impl Default for $name {
            fn default() -> Self {
                0.into()
            }
        }

        impl TryFrom<&str> for $name {
            type Error = <$inner_type as std::str::FromStr>::Err;
            fn try_from(value: &str) -> Result<Self, Self::Error> {
                Ok($name(value.parse::<$inner_type>()?))
            }
        }

        impl PartialOrd for $name {
            fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
                Some(self.cmp(other))
            }
        }

        impl Ord for $name {
            fn cmp(&self, other: &Self) -> std::cmp::Ordering {
                self.into_inner().cmp(&other.into_inner())
            }
        }

        impl From<Option<$inner_type>> for $name {
            fn from(value: Option<$inner_type>) -> Self {
                match value {
                    Some(v) => Self(v),
                    None => Self::default(),
                }
            }
        }

        impl From<$name> for Option<$inner_type> {
            fn from(value: $name) -> Self {
                Some(value.0)
            }
        }

        impl sqlx::Type<sqlx::Postgres> for $name {
            fn type_info() -> sqlx::postgres::PgTypeInfo {
                match std::any::TypeId::of::<$inner_type>() {
                    id if id == std::any::TypeId::of::<u32>() => {
                        <i32 as sqlx::Type<sqlx::Postgres>>::type_info()
                    }
                    id if id == std::any::TypeId::of::<u64>() => {
                        <i64 as sqlx::Type<sqlx::Postgres>>::type_info()
                    }
                    _ => {
                        panic!(
                            "Unsupported inner type: {:?}",
                            std::any::TypeId::of::<$inner_type>()
                        );
                    }
                }
            }
        }

        impl<'r> sqlx::Decode<'r, sqlx::Postgres> for $name {
            fn decode(
                value: sqlx::postgres::PgValueRef<'r>,
            ) -> Result<Self, sqlx::error::BoxDynError> {
                match std::any::TypeId::of::<$inner_type>() {
                    id if id == std::any::TypeId::of::<u32>() => {
                        let value = <i32 as sqlx::Decode<sqlx::Postgres>>::decode(value)?;
                        Ok($name::new(value as $inner_type))
                    }
                    id if id == std::any::TypeId::of::<u64>() => {
                        let value = <i64 as sqlx::Decode<sqlx::Postgres>>::decode(value)?;
                        Ok($name::new(value as $inner_type))
                    }
                    _ => {
                        panic!(
                            "Unsupported inner type: {:?}",
                            std::any::TypeId::of::<$inner_type>()
                        );
                    }
                }
            }
        }

        impl sqlx::Encode<'_, sqlx::Postgres> for $name {
            fn encode_by_ref(
                &self,
                buf: &mut sqlx::postgres::PgArgumentBuffer,
            ) -> Result<sqlx::encode::IsNull, sqlx::error::BoxDynError> {
                match std::any::TypeId::of::<$inner_type>() {
                    id if id == std::any::TypeId::of::<u32>() => {
                        <i32 as sqlx::Encode<sqlx::Postgres>>::encode_by_ref(&(self.0 as i32), buf)
                    }
                    id if id == std::any::TypeId::of::<u64>() => {
                        <i64 as sqlx::Encode<sqlx::Postgres>>::encode_by_ref(&(self.0 as i64), buf)
                    }
                    _ => {
                        panic!(
                            "Unsupported inner type: {:?}",
                            std::any::TypeId::of::<$inner_type>()
                        );
                    }
                }
            }
        }
    };
}

declare_integer_wrapper!(WrappedU32, u32);
declare_integer_wrapper!(WrappedU64, u64);
