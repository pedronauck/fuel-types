// This file is @generated by prost-build.
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Metadata {
    #[prost(string, tag = "1")]
    pub block_time: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub published_at: ::prost::alloc::string::String,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockMetadata {
    #[prost(string, tag = "1")]
    pub block_time: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub published_at: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub block_propagation_ms: ::prost::alloc::string::String,
}
