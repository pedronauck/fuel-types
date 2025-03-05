use bytes::Bytes;
use std::fmt::Debug;

/// Serialization/Deserialization error types
#[derive(Debug, thiserror::Error)]
pub enum SerdeError {
    #[error("Failed to encode Protobuf message: {0}")]
    ProstEncode(#[from] prost::EncodeError),
    #[error("Failed to decode Protobuf message: {0}")]
    ProstDecode(#[from] prost::DecodeError),
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

/// `DataParser` is a utility struct for serializing and deserializing data using Protobuf.
///
/// # Examples
///
/// ```
/// use fuel_data_parser::DataParser;
///
/// #[derive(prost::Message, Clone, Debug, Default)]
/// struct TestData {
///     #[prost(string, tag = "1")]
///     field: String,
/// }
///
/// #[tokio::main]
/// async fn main() -> Result<(), Box<dyn std::error::Error>> {
///     let parser = DataParser;
///     let original_data = TestData { field: "test".to_string() };
///     let encoded = parser.encode(&original_data).await?;
///     let decoded: TestData = parser.decode(&encoded).await?;
///     assert_eq!(original_data.field, decoded.field);
///     Ok(())
/// }
/// ```
pub struct DataParser;

impl DataParser {
    /// Encodes the provided data using Protobuf serialization
    pub async fn encode<T: ProtobufSerializable>(&self, data: &T) -> Result<Vec<u8>, Error> {
        data.encode_proto()
    }

    /// Decodes the provided data using Protobuf deserialization
    pub async fn decode<T: ProtobufSerializable>(&self, data: &[u8]) -> Result<T, Error> {
        T::decode_proto(data)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[derive(prost::Message, Clone, PartialEq)]
    struct TestData {
        #[prost(string, tag = "1")]
        field: String,
    }

    impl ProtobufSerializable for TestData {}

    #[tokio::test]
    async fn test_encode_decode() {
        let parser = DataParser;
        let original_data = TestData {
            field: "test".to_string(),
        };
        let encoded = parser.encode(&original_data).await.unwrap();
        let decoded: TestData = parser.decode(&encoded).await.unwrap();
        assert_eq!(original_data.field, decoded.field);
    }

    #[tokio::test]
    async fn test_trait_directly() {
        let original_data = TestData {
            field: "test".to_string(),
        };
        let encoded = original_data.encode_proto().unwrap();
        let decoded = TestData::decode_proto(&encoded).unwrap();
        assert_eq!(original_data.field, decoded.field);
    }
}
