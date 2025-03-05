#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Block {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub block_id: i32,
    #[prost(string, tag = "3")]
    pub version: ::prost::alloc::string::String,
    /// Relationship fields
    #[prost(message, optional, tag = "4")]
    pub header: ::core::option::Option<BlockHeader>,
    #[prost(message, optional, tag = "5")]
    pub consensus: ::core::option::Option<BlockConsensus>,
    #[prost(bytes = "bytes", repeated, tag = "6")]
    pub transaction_ids: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    /// Metadata
    #[prost(message, optional, tag = "7")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
    #[prost(message, optional, tag = "8")]
    pub pointer: ::core::option::Option<super::pointers::BlockPointer>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockHeader {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(bytes = "bytes", tag = "2")]
    pub application_hash: ::prost::bytes::Bytes,
    #[prost(int32, tag = "3")]
    pub consensus_parameters_version: i32,
    #[prost(int64, tag = "4")]
    pub da_height: i64,
    #[prost(bytes = "bytes", tag = "5")]
    pub event_inbox_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "6")]
    pub message_outbox_root: ::prost::bytes::Bytes,
    #[prost(int32, tag = "7")]
    pub message_receipt_count: i32,
    #[prost(bytes = "bytes", tag = "8")]
    pub prev_root: ::prost::bytes::Bytes,
    #[prost(int32, tag = "9")]
    pub state_transition_bytecode_version: i32,
    #[prost(int64, tag = "10")]
    pub time: i64,
    #[prost(int32, tag = "11")]
    pub transactions_count: i32,
    #[prost(bytes = "bytes", tag = "12")]
    pub transactions_root: ::prost::bytes::Bytes,
    #[prost(int32, tag = "13")]
    pub version: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockConsensus {
    #[prost(int64, tag = "1")]
    pub chain_id: i64,
    #[prost(bytes = "bytes", tag = "2")]
    pub producer: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub block_height: i64,
    #[prost(enumeration = "ConsensusType", tag = "4")]
    pub consensus_type: i32,
    #[prost(bytes = "bytes", tag = "5")]
    pub chain_config_hash: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "6")]
    pub coins_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "7")]
    pub contracts_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "8")]
    pub messages_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "9")]
    pub transactions_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "10")]
    pub signature: ::prost::bytes::Bytes,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ConsensusType {
    UnknownConsensusType = 0,
    Genesis = 1,
    PoaConsensus = 2,
}
impl ConsensusType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ConsensusType::UnknownConsensusType => "UNKNOWN_CONSENSUS_TYPE",
            ConsensusType::Genesis => "GENESIS",
            ConsensusType::PoaConsensus => "POA_CONSENSUS",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_CONSENSUS_TYPE" => Some(Self::UnknownConsensusType),
            "GENESIS" => Some(Self::Genesis),
            "POA_CONSENSUS" => Some(Self::PoaConsensus),
            _ => None,
        }
    }
}
