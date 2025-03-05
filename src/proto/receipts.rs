#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Receipt {
    #[prost(string, tag = "1")]
    pub subject: ::prost::alloc::string::String,
    #[prost(enumeration = "ReceiptType", tag = "2")]
    pub r#type: i32,
    /// Metadata
    #[prost(message, optional, tag = "16")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
    #[prost(message, optional, tag = "17")]
    pub pointer: ::core::option::Option<super::pointers::ReceiptPointer>,
    #[prost(
        oneof = "receipt::Receipt",
        tags = "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    )]
    pub receipt: ::core::option::Option<receipt::Receipt>,
}
/// Nested message and enum types in `Receipt`.
pub mod receipt {
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Receipt {
        #[prost(message, tag = "3")]
        Call(super::ReceiptCall),
        #[prost(message, tag = "4")]
        Return(super::ReceiptReturn),
        #[prost(message, tag = "5")]
        ReturnData(super::ReceiptReturnData),
        #[prost(message, tag = "6")]
        Panic(super::ReceiptPanic),
        #[prost(message, tag = "7")]
        Revert(super::ReceiptRevert),
        #[prost(message, tag = "8")]
        Log(super::ReceiptLog),
        #[prost(message, tag = "9")]
        LogData(super::ReceiptLogData),
        #[prost(message, tag = "10")]
        Transfer(super::ReceiptTransfer),
        #[prost(message, tag = "11")]
        TransferOut(super::ReceiptTransferOut),
        #[prost(message, tag = "12")]
        ScriptResult(super::ReceiptScriptResult),
        #[prost(message, tag = "13")]
        MessageOut(super::ReceiptMessageOut),
        #[prost(message, tag = "14")]
        Mint(super::ReceiptMint),
        #[prost(message, tag = "15")]
        Burn(super::ReceiptBurn),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptCall {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub to: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "5")]
    pub gas: i64,
    #[prost(int64, tag = "6")]
    pub param1: i64,
    #[prost(int64, tag = "7")]
    pub param2: i64,
    #[prost(int64, tag = "8")]
    pub pc: i64,
    #[prost(int64, tag = "9")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptReturn {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub val: i64,
    #[prost(int64, tag = "3")]
    pub pc: i64,
    #[prost(int64, tag = "4")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptReturnData {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub ptr: i64,
    #[prost(int64, tag = "3")]
    pub len: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub digest: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "5")]
    pub data: ::prost::bytes::Bytes,
    #[prost(int64, tag = "6")]
    pub pc: i64,
    #[prost(int64, tag = "7")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptPanic {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub reason: i64,
    #[prost(int64, tag = "3")]
    pub pc: i64,
    #[prost(int64, tag = "4")]
    pub is: i64,
    #[prost(bytes = "bytes", tag = "5")]
    pub contract_id: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptRevert {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub ra: i64,
    #[prost(int64, tag = "3")]
    pub pc: i64,
    #[prost(int64, tag = "4")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptLog {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub ra: i64,
    #[prost(int64, tag = "3")]
    pub rb: i64,
    #[prost(int64, tag = "4")]
    pub rc: i64,
    #[prost(int64, tag = "5")]
    pub rd: i64,
    #[prost(int64, tag = "6")]
    pub pc: i64,
    #[prost(int64, tag = "7")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptLogData {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "2")]
    pub ra: i64,
    #[prost(int64, tag = "3")]
    pub rb: i64,
    #[prost(int64, tag = "4")]
    pub ptr: i64,
    #[prost(int64, tag = "5")]
    pub len: i64,
    #[prost(bytes = "bytes", tag = "6")]
    pub digest: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "7")]
    pub data: ::prost::bytes::Bytes,
    #[prost(int64, tag = "8")]
    pub pc: i64,
    #[prost(int64, tag = "9")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptTransfer {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub to: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "5")]
    pub pc: i64,
    #[prost(int64, tag = "6")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptTransferOut {
    #[prost(bytes = "bytes", tag = "1")]
    pub id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub to_address: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "5")]
    pub pc: i64,
    #[prost(int64, tag = "6")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptScriptResult {
    #[prost(enumeration = "ScriptResultType", tag = "1")]
    pub result: i32,
    #[prost(int64, tag = "2")]
    pub gas_used: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptMessageOut {
    #[prost(bytes = "bytes", tag = "1")]
    pub sender: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub recipient: ::prost::bytes::Bytes,
    #[prost(int64, tag = "3")]
    pub amount: i64,
    #[prost(bytes = "bytes", tag = "4")]
    pub nonce: ::prost::bytes::Bytes,
    #[prost(int64, tag = "5")]
    pub len: i64,
    #[prost(bytes = "bytes", tag = "6")]
    pub digest: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "7")]
    pub data: ::prost::bytes::Bytes,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptMint {
    #[prost(bytes = "bytes", tag = "1")]
    pub sub_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "4")]
    pub val: i64,
    #[prost(int64, tag = "5")]
    pub pc: i64,
    #[prost(int64, tag = "6")]
    pub is: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptBurn {
    #[prost(bytes = "bytes", tag = "1")]
    pub sub_id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "2")]
    pub id: ::prost::bytes::Bytes,
    #[prost(bytes = "bytes", tag = "3")]
    pub asset_id: ::prost::bytes::Bytes,
    #[prost(int64, tag = "4")]
    pub val: i64,
    #[prost(int64, tag = "5")]
    pub pc: i64,
    #[prost(int64, tag = "6")]
    pub is: i64,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ReceiptType {
    UnknownReceiptType = 0,
    Call = 1,
    Return = 2,
    ReturnData = 3,
    Panic = 4,
    Revert = 5,
    Log = 6,
    LogData = 7,
    Transfer = 8,
    TransferOut = 9,
    ScriptResult = 10,
    MessageOut = 11,
    Mint = 12,
    Burn = 13,
}
impl ReceiptType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ReceiptType::UnknownReceiptType => "UNKNOWN_RECEIPT_TYPE",
            ReceiptType::Call => "CALL",
            ReceiptType::Return => "RETURN",
            ReceiptType::ReturnData => "RETURN_DATA",
            ReceiptType::Panic => "PANIC",
            ReceiptType::Revert => "REVERT",
            ReceiptType::Log => "LOG",
            ReceiptType::LogData => "LOG_DATA",
            ReceiptType::Transfer => "TRANSFER",
            ReceiptType::TransferOut => "TRANSFER_OUT",
            ReceiptType::ScriptResult => "SCRIPT_RESULT",
            ReceiptType::MessageOut => "MESSAGE_OUT",
            ReceiptType::Mint => "MINT",
            ReceiptType::Burn => "BURN",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_RECEIPT_TYPE" => Some(Self::UnknownReceiptType),
            "CALL" => Some(Self::Call),
            "RETURN" => Some(Self::Return),
            "RETURN_DATA" => Some(Self::ReturnData),
            "PANIC" => Some(Self::Panic),
            "REVERT" => Some(Self::Revert),
            "LOG" => Some(Self::Log),
            "LOG_DATA" => Some(Self::LogData),
            "TRANSFER" => Some(Self::Transfer),
            "TRANSFER_OUT" => Some(Self::TransferOut),
            "SCRIPT_RESULT" => Some(Self::ScriptResult),
            "MESSAGE_OUT" => Some(Self::MessageOut),
            "MINT" => Some(Self::Mint),
            "BURN" => Some(Self::Burn),
            _ => None,
        }
    }
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ScriptResultType {
    UnknownScriptResultType = 0,
    Success = 1,
    ScriptRevert = 2,
    ScriptPanic = 3,
    GenericFailure = 4,
}
impl ScriptResultType {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ScriptResultType::UnknownScriptResultType => "UNKNOWN_SCRIPT_RESULT_TYPE",
            ScriptResultType::Success => "SUCCESS",
            ScriptResultType::ScriptRevert => "SCRIPT_REVERT",
            ScriptResultType::ScriptPanic => "SCRIPT_PANIC",
            ScriptResultType::GenericFailure => "GENERIC_FAILURE",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "UNKNOWN_SCRIPT_RESULT_TYPE" => Some(Self::UnknownScriptResultType),
            "SUCCESS" => Some(Self::Success),
            "SCRIPT_REVERT" => Some(Self::ScriptRevert),
            "SCRIPT_PANIC" => Some(Self::ScriptPanic),
            "GENERIC_FAILURE" => Some(Self::GenericFailure),
            _ => None,
        }
    }
}
