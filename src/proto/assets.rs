// This file is @generated by prost-build.
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Asset {
    #[prost(string, tag = "1")]
    #[serde(rename = "type")]
    pub r#type: ::prost::alloc::string::String,
    #[prost(message, optional, tag = "2")]
    pub pointer: ::core::option::Option<super::pointers::AssetPointer>,
    #[prost(message, optional, tag = "3")]
    #[serde(flatten)]
    pub data: ::core::option::Option<AssetData>,
    #[prost(message, optional, tag = "4")]
    pub metadata: ::core::option::Option<super::common::Metadata>,
}
#[derive(serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AssetData {
    #[prost(string, tag = "1")]
    pub sub_id: ::prost::alloc::string::String,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(string, tag = "3")]
    pub symbol: ::prost::alloc::string::String,
    #[prost(int64, tag = "4")]
    pub decimals: i64,
    #[prost(int64, tag = "5")]
    pub total_supply: i64,
    #[prost(string, tag = "6")]
    pub owner: ::prost::alloc::string::String,
    #[prost(string, tag = "7")]
    pub metadata: ::prost::alloc::string::String,
}
