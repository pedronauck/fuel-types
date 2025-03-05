#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Utxo {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "bytes", tag = "2")]
    pub utxo_id: ::prost::bytes::Bytes,
    #[prost(enumeration = "UtxoType", tag = "3")]
    pub r#type: i32,
    #[prost(enumeration = "UtxoStatus", tag = "4")]
    pub status: i32,
    #[prost(message, optional, tag = "8")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
    #[prost(message, optional, tag = "9")]
    pub pointer: ::core::option::Option<super::pointers::UtxoPointer>,
    #[prost(oneof = "utxo::UtxoData", tags = "5, 6, 7")]
    pub utxo_data: ::core::option::Option<utxo::UtxoData>,
}
/// Nested message and enum types in `Utxo`.
pub mod utxo {
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum UtxoData {
        #[prost(message, tag = "5")]
        Coin(super::UtxoCoin),
        #[prost(message, tag = "6")]
        Contract(super::UtxoContract),
        #[prost(message, tag = "7")]
        Message(super::UtxoMessage),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UtxoCoin {
    #[prost(int64, tag = "1")]
    pub amount: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UtxoContract {
    #[prost(bytes = "bytes", tag = "1")]
    pub contract_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub value: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UtxoMessage {
    #[prost(bytes = "bytes", tag = "1")]
    pub sender_address: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub recipient_address: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub nonce: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "4")]
    pub data: ::prost::bytes::Bytes,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum UtxoStatus {
    UnknownUtxoStatus = 0,
    Unspent = 1,
    Spent = 2,
}
impl UtxoStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            UtxoStatus::UnknownUtxoStatus => "UNKNOWN_UTXO_STATUS",
            UtxoStatus::Unspent => "UNSPENT",
            UtxoStatus::Spent => "SPENT",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_UTXO_STATUS" => Some(Self::UnknownUtxoStatus),
            "UNSPENT" => Some(Self::Unspent),
            "SPENT" => Some(Self::Spent),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum UtxoType {
    UnknownUxtoType = 0,
    Contract = 1,
    Coin = 2,
    Message = 3,
}
impl UtxoType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            UtxoType::UnknownUxtoType => "UNKNOWN_UXTO_TYPE",
            UtxoType::Contract => "CONTRACT",
            UtxoType::Coin => "COIN",
            UtxoType::Message => "MESSAGE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_UXTO_TYPE" => Some(Self::UnknownUxtoType),
            "CONTRACT" => Some(Self::Contract),
            "COIN" => Some(Self::Coin),
            "MESSAGE" => Some(Self::Message),
            _ => None,
        }
    }
}
