// Re-export all generated protobuf modules from the proto directory
pub mod accounts {
    include!("proto/accounts.rs");
}
pub mod assets {
    include!("proto/assets.rs");
}
pub mod blocks {
    include!("proto/blocks.rs");
}
pub mod common {
    include!("proto/common.rs");
}
pub mod inputs {
    include!("proto/inputs.rs");
}
pub mod outputs {
    include!("proto/outputs.rs");
}
pub mod pointers {
    include!("proto/pointers.rs");
}
pub mod receipts {
    include!("proto/receipts.rs");
}
pub mod transactions {
    include!("proto/transactions.rs");
}
pub mod utxos {
    include!("proto/utxos.rs");
}

use crate::impl_serializable;

impl_serializable!(assets::Asset);
impl_serializable!(accounts::Predicate);
impl_serializable!(accounts::Contract);
impl_serializable!(accounts::Script);
impl_serializable!(blocks::Block);
impl_serializable!(transactions::Transaction);
impl_serializable!(inputs::Input);
impl_serializable!(outputs::Output);
impl_serializable!(receipts::Receipt);
impl_serializable!(utxos::Utxo);
