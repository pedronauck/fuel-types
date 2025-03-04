// This file is @generated by prost-build.
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Input {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(int64, tag = "2")]
    pub block_height: i64,
    #[prost(bytes = "vec", tag = "3")]
    pub tx_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "4")]
    pub tx_index: i32,
    #[prost(int32, tag = "5")]
    pub input_index: i32,
    #[prost(enumeration = "InputType", tag = "6")]
    pub input_type: i32,
    /// Metadata
    #[prost(message, optional, tag = "10")]
    pub created_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "11")]
    pub published_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "12")]
    pub pointer: ::core::option::Option<super::pointers::InputPointer>,
    /// Specific input type
    #[prost(oneof = "input::Input", tags = "7, 8, 9")]
    pub input: ::core::option::Option<input::Input>,
}
/// Nested message and enum types in `Input`.
pub mod input {
    /// Specific input type
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Input {
        #[prost(message, tag = "7")]
        Coin(super::InputCoin),
        #[prost(message, tag = "8")]
        Contract(super::InputContract),
        #[prost(message, tag = "9")]
        Message(super::InputMessage),
    }
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputCoin {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "2")]
    pub tx_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "vec", tag = "4")]
    pub asset_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "5")]
    pub owner_address: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "6")]
    pub output_index: i32,
    #[prost(bytes = "vec", tag = "7")]
    pub predicate: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "8")]
    pub predicate_data: ::prost::alloc::vec::Vec<u8>,
    #[prost(int64, tag = "9")]
    pub predicate_gas_used: i64,
    #[prost(int64, tag = "10")]
    pub predicate_length: i64,
    #[prost(int64, tag = "11")]
    pub predicate_data_length: i64,
    #[prost(int64, tag = "12")]
    pub tx_pointer_block_height: i64,
    #[prost(int32, tag = "13")]
    pub tx_pointer_tx_index: i32,
    #[prost(bytes = "vec", tag = "14")]
    pub utxo_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "15")]
    pub witness_index: i32,
    #[prost(message, optional, tag = "16")]
    pub created_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "17")]
    pub published_at: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputContract {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "2")]
    pub tx_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "3")]
    pub balance_root: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "4")]
    pub contract_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "5")]
    pub output_index: i32,
    #[prost(bytes = "vec", tag = "6")]
    pub state_root: ::prost::alloc::vec::Vec<u8>,
    #[prost(int64, tag = "7")]
    pub tx_pointer_block_height: i64,
    #[prost(int32, tag = "8")]
    pub tx_pointer_tx_index: i32,
    #[prost(bytes = "vec", tag = "9")]
    pub utxo_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(message, optional, tag = "10")]
    pub created_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "11")]
    pub published_at: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputMessage {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "vec", tag = "2")]
    pub tx_id: ::prost::alloc::vec::Vec<u8>,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "vec", tag = "4")]
    pub data: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "5")]
    pub data_length: i32,
    #[prost(bytes = "vec", tag = "6")]
    pub nonce: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "7")]
    pub predicate: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "8")]
    pub predicate_length: i32,
    #[prost(bytes = "vec", tag = "9")]
    pub predicate_data: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "10")]
    pub predicate_data_length: i32,
    #[prost(int64, tag = "11")]
    pub predicate_gas_used: i64,
    #[prost(bytes = "vec", tag = "12")]
    pub recipient_address: ::prost::alloc::vec::Vec<u8>,
    #[prost(bytes = "vec", tag = "13")]
    pub sender_address: ::prost::alloc::vec::Vec<u8>,
    #[prost(int32, tag = "14")]
    pub witness_index: i32,
    #[prost(message, optional, tag = "15")]
    pub created_at: ::core::option::Option<::prost_types::Timestamp>,
    #[prost(message, optional, tag = "16")]
    pub published_at: ::core::option::Option<::prost_types::Timestamp>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum InputType {
    Contract = 0,
    Coin = 1,
    Message = 2,
}
impl InputType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Self::Contract => "CONTRACT",
            Self::Coin => "COIN",
            Self::Message => "MESSAGE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "CONTRACT" => Some(Self::Contract),
            "COIN" => Some(Self::Coin),
            "MESSAGE" => Some(Self::Message),
            _ => None,
        }
    }
}
