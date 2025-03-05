#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Transaction {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    /// Fields matching fuel-core
    #[prost(bytes = "bytes", tag = "2")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub script_gas_limit: i64,
    #[prost(message, optional, tag = "4")]
    pub tx_pointer: ::core::option::Option<super::pointers::TxPointer>,
    #[prost(bytes = "bytes", repeated, tag = "5")]
    pub input_asset_ids: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    #[prost(bytes = "bytes", repeated, tag = "6")]
    pub input_contracts: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    #[prost(message, optional, tag = "7")]
    pub input_contract: ::core::option::Option<super::inputs::InputContract>,
    #[prost(message, repeated, tag = "8")]
    pub inputs: ::prost::alloc::vec::Vec<super::inputs::Input>,
    #[prost(bool, tag = "9")]
    pub is_script: bool,
    #[prost(bool, tag = "10")]
    pub is_create: bool,
    #[prost(bool, tag = "11")]
    pub is_mint: bool,
    #[prost(bool, tag = "12")]
    pub is_upgrade: bool,
    #[prost(bool, tag = "13")]
    pub is_upload: bool,
    #[prost(bool, tag = "14")]
    pub is_blob: bool,
    #[prost(message, repeated, tag = "15")]
    pub outputs: ::prost::alloc::vec::Vec<super::outputs::Output>,
    #[prost(message, optional, tag = "16")]
    pub output_contract: ::core::option::Option<super::outputs::OutputContract>,
    #[prost(int64, tag = "17")]
    pub mint_amount: i64,
    #[prost(bytes = "bytes", tag = "18")]
    pub mint_asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "19")]
    pub mint_gas_price: i64,
    #[prost(bytes = "bytes", tag = "20")]
    pub receipts_root: ::prost::bytes::Bytes,
    #[prost(enumeration = "TransactionStatus", tag = "21")]
    pub status: i32,
    #[prost(bytes = "bytes", repeated, tag = "22")]
    pub witnesses: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    #[prost(bytes = "bytes", tag = "23")]
    pub script: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "24")]
    pub script_data: ::prost::bytes::Bytes,
    #[prost(message, optional, tag = "25")]
    pub policies: ::core::option::Option<Policy>,
    #[prost(bytes = "bytes", tag = "26")]
    pub salt: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", repeated, tag = "27")]
    pub storage_slots: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    #[prost(int32, tag = "28")]
    pub bytecode_witness_index: i32,
    #[prost(bytes = "bytes", tag = "29")]
    pub bytecode_root: ::prost::bytes::Bytes,
    #[prost(int32, tag = "30")]
    pub subsection_index: i32,
    #[prost(int32, tag = "31")]
    pub subsections_number: i32,
    #[prost(bytes = "bytes", repeated, tag = "32")]
    pub proof_set: ::prost::alloc::vec::Vec<::prost::bytes::Bytes>,
    #[prost(int32, tag = "33")]
    pub upgrade_purpose: i32,
    #[prost(bytes = "bytes", tag = "34")]
    pub blob_id: ::prost::bytes::Bytes,
    /// Extra fields (not in fuel-core)
    #[prost(int32, tag = "35")]
    pub maturity: i32,
    #[prost(int32, tag = "36")]
    pub policy_type: i32,
    #[prost(bytes = "bytes", tag = "37")]
    pub raw_payload: ::prost::bytes::Bytes,
    #[prost(int64, tag = "38")]
    pub script_length: i64,
    #[prost(int64, tag = "39")]
    pub script_data_length: i64,
    #[prost(int64, tag = "40")]
    pub storage_slots_count: i64,
    #[prost(int32, tag = "41")]
    pub proof_set_count: i32,
    #[prost(int32, tag = "42")]
    pub witnesses_count: i32,
    #[prost(int32, tag = "43")]
    pub inputs_count: i32,
    #[prost(int32, tag = "44")]
    pub outputs_count: i32,
    /// Metadata
    #[prost(message, optional, tag = "45")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct StorageSlot {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "bytes", tag = "2")]
    pub tx_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub key: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "4")]
    pub value: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Witness {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "bytes", tag = "2")]
    pub tx_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub witness_data: ::prost::bytes::Bytes,
    #[prost(int32, tag = "4")]
    pub witness_data_length: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProofSet {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "bytes", tag = "2")]
    pub tx_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub proof_hash: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Policy {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(bytes = "bytes", tag = "2")]
    pub tx_id: ::prost::bytes::Bytes,
    #[prost(enumeration = "PolicyType", tag = "3")]
    pub r#type: i32,
    #[prost(int64, tag = "4")]
    pub data: i64,
}
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
            TransactionType::UnknownTransactionType => "UNKNOWN_TRANSACTION_TYPE",
            TransactionType::Script => "SCRIPT",
            TransactionType::Create => "CREATE",
            TransactionType::Mint => "MINT",
            TransactionType::Upgrade => "UPGRADE",
            TransactionType::Upload => "UPLOAD",
            TransactionType::Blob => "BLOB",
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
            TransactionStatus::UnknownTransactionStatus => "UNKNOWN_TRANSACTION_STATUS",
            TransactionStatus::Failed => "FAILED",
            TransactionStatus::Submitted => "SUBMITTED",
            TransactionStatus::SqueezedOut => "SQUEEZED_OUT",
            TransactionStatus::Success => "SUCCESS",
            TransactionStatus::None => "NONE",
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
            PolicyType::UnknownPolicyType => "UNKNOWN_POLICY_TYPE",
            PolicyType::Tip => "TIP",
            PolicyType::WitnessLimit => "WITNESS_LIMIT",
            PolicyType::Maturity => "MATURITY",
            PolicyType::MaxFee => "MAX_FEE",
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
