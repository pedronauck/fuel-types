#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Output {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(enumeration = "OutputType", tag = "2")]
    pub r#type: i32,
    /// Metadata
    #[prost(message, optional, tag = "9")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
    #[prost(message, optional, tag = "10")]
    pub pointer: ::core::option::Option<super::pointers::OutputPointer>,
    #[prost(oneof = "output::Output", tags = "3, 4, 5, 6, 7")]
    pub output: ::core::option::Option<output::Output>,
}
/// Nested message and enum types in `Output`.
pub mod output {
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Output {
        #[prost(message, tag = "3")]
        Coin(super::OutputCoin),
        #[prost(message, tag = "4")]
        Contract(super::OutputContract),
        #[prost(message, tag = "5")]
        Change(super::OutputChange),
        #[prost(message, tag = "6")]
        Variable(super::OutputVariable),
        #[prost(message, tag = "7")]
        ContractCreated(super::OutputContractCreated),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputCoin {
    #[prost(bytes = "bytes", tag = "1")]
    pub to: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "3")]
    pub asset_id: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputContract {
    #[prost(bytes = "bytes", tag = "1")]
    pub balance_root: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub state_root: ::prost::bytes::Bytes,
    #[prost(int32, tag = "3")]
    pub input_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputContractCreated {
    #[prost(bytes = "bytes", tag = "1")]
    pub contract_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub state_root: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputChange {
    #[prost(bytes = "bytes", tag = "1")]
    pub to: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "3")]
    pub asset_id: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputVariable {
    #[prost(bytes = "bytes", tag = "1")]
    pub to: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "3")]
    pub asset_id: ::prost::bytes::Bytes,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum OutputType {
    UnknownOutputType = 0,
    Coin = 1,
    Contract = 2,
    Change = 3,
    Variable = 4,
    ContractCreated = 5,
}
impl OutputType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            OutputType::UnknownOutputType => "UNKNOWN_OUTPUT_TYPE",
            OutputType::Coin => "COIN",
            OutputType::Contract => "CONTRACT",
            OutputType::Change => "CHANGE",
            OutputType::Variable => "VARIABLE",
            OutputType::ContractCreated => "CONTRACT_CREATED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_OUTPUT_TYPE" => Some(Self::UnknownOutputType),
            "COIN" => Some(Self::Coin),
            "CONTRACT" => Some(Self::Contract),
            "CHANGE" => Some(Self::Change),
            "VARIABLE" => Some(Self::Variable),
            "CONTRACT_CREATED" => Some(Self::ContractCreated),
            _ => None,
        }
    }
}
