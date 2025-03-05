#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct TxPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub tx_id: i32,
    #[prost(int32, tag = "3")]
    pub tx_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct InputPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub tx_id: i32,
    #[prost(int32, tag = "3")]
    pub tx_index: i32,
    #[prost(int32, tag = "4")]
    pub input_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OutputPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub tx_id: i32,
    #[prost(int32, tag = "3")]
    pub tx_index: i32,
    #[prost(int32, tag = "4")]
    pub output_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ReceiptPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub tx_id: i32,
    #[prost(int32, tag = "3")]
    pub tx_index: i32,
    #[prost(int32, tag = "4")]
    pub receipt_index: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UtxoPointer {
    #[prost(int64, tag = "1")]
    pub block_height: i64,
    #[prost(int32, tag = "2")]
    pub tx_id: i32,
    #[prost(int32, tag = "3")]
    pub tx_index: i32,
    #[prost(int32, tag = "4")]
    pub utxo_id: i32,
    #[prost(int32, tag = "5")]
    pub input_index: i32,
    #[prost(int32, tag = "6")]
    pub output_index: i32,
}
