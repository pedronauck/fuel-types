use bytes::Bytes;
use std::fmt::Debug;

/// Serialization/Deserialization error types
#[derive(Debug, thiserror::Error)]
pub enum SerdeError {
    #[error("Failed to encode Protobuf message: {0}")]
    ProstEncode(#[from] prost::EncodeError),
    #[error("Failed to decode Protobuf message: {0}")]
    ProstDecode(#[from] prost::DecodeError),
    #[error("Failed to serialize JSON: {0}")]
    JsonSerialize(#[from] serde_json::Error),
}

/// Data parser error types
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error(transparent)]
    Serde(#[from] SerdeError),
}

/// Trait for types that can be serialized/deserialized using Protobuf
pub trait ProtobufSerializable:
    prost::Message + std::default::Default + Clone + Send + Sync + Debug
{
    /// Encodes the data using Protobuf serialization
    fn encode_proto(&self) -> Result<Vec<u8>, Error> {
        let mut buf = Vec::new();
        prost::Message::encode(self, &mut buf)
            .map_err(|e| Error::Serde(SerdeError::ProstEncode(e)))?;
        Ok(buf)
    }

    /// Decodes the data using Protobuf deserialization
    fn decode_proto(data: &[u8]) -> Result<Self, Error>
    where
        Self: Sized,
    {
        prost::Message::decode(Bytes::from(data.to_vec()))
            .map_err(|e| Error::Serde(SerdeError::ProstDecode(e)))
    }
}

/// Trait for types that can be serialized/deserialized using JSON
pub trait JsonSerializable:
    serde::Serialize + serde::de::DeserializeOwned + Send + Sync + Debug
{
    /// Encodes the data using JSON serialization
    fn encode_json(&self) -> Result<Vec<u8>, Error> {
        serde_json::to_vec(self).map_err(|e| Error::Serde(SerdeError::JsonSerialize(e)))
    }

    /// Decodes the data using JSON deserialization
    fn decode_json(data: &[u8]) -> Result<Self, Error>
    where
        Self: Sized,
    {
        serde_json::from_slice(data).map_err(|e| Error::Serde(SerdeError::JsonSerialize(e)))
    }
}

/// Trait for types that can be serialized/deserialized
pub trait Serializable:
    ProtobufSerializable + JsonSerializable + std::default::Default + Clone + Send + Sync + Debug
{
    /// Encodes the data using Protobuf serialization
    fn encode_proto(&self) -> Result<Vec<u8>, Error> {
        let mut buf = Vec::new();
        prost::Message::encode(self, &mut buf)
            .map_err(|e| Error::Serde(SerdeError::ProstEncode(e)))?;
        Ok(buf)
    }

    /// Decodes the data using Protobuf deserialization
    fn decode_proto(data: &[u8]) -> Result<Self, Error>
    where
        Self: Sized,
    {
        prost::Message::decode(Bytes::from(data.to_vec()))
            .map_err(|e| Error::Serde(SerdeError::ProstDecode(e)))
    }

    /// Encodes the data using JSON serialization
    fn encode_json(&self) -> Result<Vec<u8>, Error> {
        serde_json::to_vec(self).map_err(|e| Error::Serde(SerdeError::JsonSerialize(e)))
    }

    /// Decodes the data using JSON deserialization
    fn decode_json(data: &[u8]) -> Result<Self, Error>
    where
        Self: Sized,
    {
        serde_json::from_slice(data).map_err(|e| Error::Serde(SerdeError::JsonSerialize(e)))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde::{Deserialize, Serialize};

    #[derive(prost::Message, Clone, PartialEq, Serialize, Deserialize)]
    struct TestData {
        #[prost(string, tag = "1")]
        field: String,
    }

    // Implement both traits for TestData
    impl ProtobufSerializable for TestData {}
    impl JsonSerializable for TestData {}

    #[test]
    fn test_proto_encode_decode() {
        let original_data = TestData {
            field: "test".to_string(),
        };
        let encoded = original_data.encode_proto().unwrap();
        let decoded = TestData::decode_proto(&encoded).unwrap();
        assert_eq!(original_data.field, decoded.field);
    }

    #[test]
    fn test_json_encode_decode() {
        let original_data = TestData {
            field: "test".to_string(),
        };
        let encoded = original_data.encode_json().unwrap();
        let decoded = TestData::decode_json(&encoded).unwrap();
        assert_eq!(original_data.field, decoded.field);
    }
}

#[macro_export]
macro_rules! impl_serializable {
    ($type:ty) => {
        impl crate::data_parser::ProtobufSerializable for $type {}
        impl crate::data_parser::JsonSerializable for $type {}
    };
}
