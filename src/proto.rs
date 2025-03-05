pub mod blocks;
pub mod common;
pub mod inputs;
pub mod outputs;
pub mod pointers;
pub mod receipts;
pub mod transactions;
pub mod utxos;

pub use blocks::*;
pub use common::*;
pub use inputs::*;
pub use outputs::*;
pub use pointers::*;
pub use receipts::*;
pub use transactions::*;
pub use utxos::*;

use crate::data_parser::ProtobufSerializable;

impl ProtobufSerializable for Block {}
impl ProtobufSerializable for BlockConsensus {}
impl ProtobufSerializable for BlockHeader {}
impl ProtobufSerializable for Transaction {}
impl ProtobufSerializable for Input {}
impl ProtobufSerializable for Output {}
impl ProtobufSerializable for Receipt {}
impl ProtobufSerializable for Utxo {}
