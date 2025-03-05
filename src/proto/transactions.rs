// This file is @generated by prost-build.
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transaction {
    #[prost(enumeration = "TransactionType", tag = "1")]
    #[serde(rename = "type")]
    pub r#type: i32,
    #[prost(message, optional, tag = "2")]
    pub pointer: ::core::option::Option<super::pointers::TxPointer>,
    #[prost(message, optional, tag = "3")]
    #[serde(flatten)]
    pub data: ::core::option::Option<TransactionData>,
    #[prost(message, optional, tag = "4")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TransactionData {
    #[prost(string, tag = "1")]
    pub id: ::prost::alloc::string::String,
    #[prost(int64, tag = "2")]
    pub script_gas_limit: i64,
    #[prost(string, repeated, tag = "3")]
    pub input_asset_ids: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, repeated, tag = "4")]
    pub input_contracts: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(message, optional, tag = "5")]
    pub input_contract: ::core::option::Option<super::inputs::InputContract>,
    #[prost(message, repeated, tag = "6")]
    pub inputs: ::prost::alloc::vec::Vec<super::inputs::Input>,
    #[prost(bool, tag = "7")]
    pub is_script: bool,
    #[prost(bool, tag = "8")]
    pub is_create: bool,
    #[prost(bool, tag = "9")]
    pub is_mint: bool,
    #[prost(bool, tag = "10")]
    pub is_upgrade: bool,
    #[prost(bool, tag = "11")]
    pub is_upload: bool,
    #[prost(bool, tag = "12")]
    pub is_blob: bool,
    #[prost(message, repeated, tag = "13")]
    pub outputs: ::prost::alloc::vec::Vec<super::outputs::Output>,
    #[prost(message, optional, tag = "14")]
    pub output_contract: ::core::option::Option<super::outputs::OutputContract>,
    #[prost(int64, tag = "15")]
    pub mint_amount: i64,
    #[prost(string, tag = "16")]
    pub mint_asset_id: ::prost::alloc::string::String,
    #[prost(int64, tag = "17")]
    pub mint_gas_price: i64,
    #[prost(string, tag = "18")]
    pub receipts_root: ::prost::alloc::string::String,
    #[prost(enumeration = "TransactionStatus", tag = "19")]
    pub status: i32,
    #[prost(string, repeated, tag = "20")]
    pub witnesses: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(string, tag = "21")]
    pub script: ::prost::alloc::string::String,
    #[prost(string, tag = "22")]
    pub script_data: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "23")]
    pub policies: ::core::option::Option<Policy>,
    #[prost(string, tag = "24")]
    pub salt: ::prost::alloc::string::String,
    #[prost(string, repeated, tag = "25")]
    pub storage_slots: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(int32, tag = "26")]
    pub bytecode_witness_index: i32,
    #[prost(string, tag = "27")]
    pub bytecode_root: ::prost::alloc::string::String,
    #[prost(int32, tag = "28")]
    pub subsection_index: i32,
    #[prost(int32, tag = "29")]
    pub subsections_number: i32,
    #[prost(string, repeated, tag = "30")]
    pub proof_set: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
    #[prost(int32, tag = "31")]
    pub upgrade_purpose: i32,
    #[prost(string, tag = "32")]
    pub blob_id: ::prost::alloc::string::String,
    /// Extra fields (not in fuel-core)
    #[prost(int32, tag = "33")]
    pub maturity: i32,
    #[prost(int32, tag = "34")]
    pub policy_type: i32,
    #[prost(string, tag = "35")]
    pub raw_payload: ::prost::alloc::string::String,
    #[prost(int64, tag = "36")]
    pub script_length: i64,
    #[prost(int64, tag = "37")]
    pub script_data_length: i64,
    #[prost(int64, tag = "38")]
    pub storage_slots_count: i64,
    #[prost(int32, tag = "39")]
    pub proof_set_count: i32,
    #[prost(int32, tag = "40")]
    pub witnesses_count: i32,
    #[prost(int32, tag = "41")]
    pub inputs_count: i32,
    #[prost(int32, tag = "42")]
    pub outputs_count: i32,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StorageSlot {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub tx_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub key: ::prost::alloc::string::String,
    #[prost(string, tag = "4")]
    pub value: ::prost::alloc::string::String,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Witness {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub tx_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub witness_data: ::prost::alloc::string::String,
    #[prost(int32, tag = "4")]
    pub witness_data_length: i32,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProofSet {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub tx_id: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub proof_hash: ::prost::alloc::string::String,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Policy {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub tx_id: ::prost::alloc::string::String,
    #[prost(enumeration = "PolicyType", tag = "3")]
    pub r#type: i32,
    #[prost(int64, tag = "4")]
    pub data: i64,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TransactionType {
    UnknownTransactionType = 0,
    Script = 1,
    Create = 2,
    Mint = 3,
    Upgrade = 4,
    Upload = 5,
    Blob = 6,
}
impl TransactionType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Self::UnknownTransactionType => "UNKNOWN_TRANSACTION_TYPE",
            Self::Script => "SCRIPT",
            Self::Create => "CREATE",
            Self::Mint => "MINT",
            Self::Upgrade => "UPGRADE",
            Self::Upload => "UPLOAD",
            Self::Blob => "BLOB",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_TRANSACTION_TYPE" => Some(Self::UnknownTransactionType),
            "SCRIPT" => Some(Self::Script),
            "CREATE" => Some(Self::Create),
            "MINT" => Some(Self::Mint),
            "UPGRADE" => Some(Self::Upgrade),
            "UPLOAD" => Some(Self::Upload),
            "BLOB" => Some(Self::Blob),
            _ => None,
        }
    }
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum TransactionStatus {
    UnknownTransactionStatus = 0,
    Failed = 1,
    Submitted = 2,
    SqueezedOut = 3,
    Success = 4,
    None = 5,
}
impl TransactionStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Self::UnknownTransactionStatus => "UNKNOWN_TRANSACTION_STATUS",
            Self::Failed => "FAILED",
            Self::Submitted => "SUBMITTED",
            Self::SqueezedOut => "SQUEEZED_OUT",
            Self::Success => "SUCCESS",
            Self::None => "NONE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_TRANSACTION_STATUS" => Some(Self::UnknownTransactionStatus),
            "FAILED" => Some(Self::Failed),
            "SUBMITTED" => Some(Self::Submitted),
            "SQUEEZED_OUT" => Some(Self::SqueezedOut),
            "SUCCESS" => Some(Self::Success),
            "NONE" => Some(Self::None),
            _ => None,
        }
    }
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum PolicyType {
    UnknownPolicyType = 0,
    Tip = 1,
    WitnessLimit = 2,
    Maturity = 3,
    MaxFee = 4,
}
impl PolicyType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Self::UnknownPolicyType => "UNKNOWN_POLICY_TYPE",
            Self::Tip => "TIP",
            Self::WitnessLimit => "WITNESS_LIMIT",
            Self::Maturity => "MATURITY",
            Self::MaxFee => "MAX_FEE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_POLICY_TYPE" => Some(Self::UnknownPolicyType),
            "TIP" => Some(Self::Tip),
            "WITNESS_LIMIT" => Some(Self::WitnessLimit),
            "MATURITY" => Some(Self::Maturity),
            "MAX_FEE" => Some(Self::MaxFee),
            _ => None,
        }
    }
}
