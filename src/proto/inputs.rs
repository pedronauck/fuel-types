#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Input {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(enumeration = "InputType", tag = "2")]
    pub r#type: i32,
    /// Metadata
    #[prost(message, optional, tag = "7")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
    #[prost(message, optional, tag = "8")]
    pub pointer: ::core::option::Option<super::pointers::InputPointer>,
    #[prost(oneof = "input::Input", tags = "3, 4, 5")]
    pub input: ::core::option::Option<input::Input>,
}
/// Nested message and enum types in `Input`.
pub mod input {
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Input {
        #[prost(message, tag = "3")]
        Coin(super::InputCoin),
        #[prost(message, tag = "4")]
        Contract(super::InputContract),
        #[prost(message, tag = "5")]
        Message(super::InputMessage),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputCoin {
    /// Fields matching fuel-core
    #[prost(bytes = "bytes", tag = "1")]
    pub utxo_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub owner: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(message, optional, tag = "5")]
    pub tx_pointer: ::core::option::Option<super::pointers::TxPointer>,
    #[prost(int32, tag = "6")]
    pub witness_index: i32,
    #[prost(int64, tag = "7")]
    pub predicate_gas_used: i64,
    #[prost(bytes = "bytes", tag = "8")]
    pub predicate: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "9")]
    pub predicate_data: ::prost::bytes::Bytes,
    /// Extra fields (not in fuel-core)
    #[prost(int64, tag = "10")]
    pub predicate_length: i64,
    #[prost(int64, tag = "11")]
    pub predicate_data_length: i64,
    #[prost(int32, tag = "12")]
    pub output_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputContract {
    /// Fields matching fuel-core
    #[prost(bytes = "bytes", tag = "1")]
    pub utxo_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub balance_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub state_root: ::prost::bytes::Bytes,
    #[prost(message, optional, tag = "4")]
    pub tx_pointer: ::core::option::Option<super::pointers::TxPointer>,
    #[prost(bytes = "bytes", tag = "5")]
    pub contract_id: ::prost::bytes::Bytes,
    /// Extra fields (not in fuel-core)
    #[prost(int32, tag = "6")]
    pub output_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputMessage {
    /// Fields matching fuel-core
    #[prost(bytes = "bytes", tag = "1")]
    pub sender: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub recipient: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub nonce: ::prost::bytes::Bytes,
    #[prost(int32, tag = "5")]
    pub witness_index: i32,
    #[prost(int64, tag = "6")]
    pub predicate_gas_used: i64,
    #[prost(bytes = "bytes", tag = "7")]
    pub data: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "8")]
    pub predicate: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "9")]
    pub predicate_data: ::prost::bytes::Bytes,
    /// Extra fields (not in fuel-core)
    #[prost(int32, tag = "10")]
    pub data_length: i32,
    #[prost(int32, tag = "11")]
    pub predicate_length: i32,
    #[prost(int32, tag = "12")]
    pub predicate_data_length: i32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum InputType {
    UnknownInputType = 0,
    Contract = 1,
    Coin = 2,
    Message = 3,
}
impl InputType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            InputType::UnknownInputType => "UNKNOWN_INPUT_TYPE",
            InputType::Contract => "CONTRACT",
            InputType::Coin => "COIN",
            InputType::Message => "MESSAGE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_INPUT_TYPE" => Some(Self::UnknownInputType),
            "CONTRACT" => Some(Self::Contract),
            "COIN" => Some(Self::Coin),
            "MESSAGE" => Some(Self::Message),
            _ => None,
        }
    }
}
