// Re-export all generated protobuf modules from the proto directory
mod accounts {
    include!("proto/accounts.rs");
}
mod assets {
    include!("proto/assets.rs");
}
mod blocks {
    include!("proto/blocks.rs");
}
mod common {
    include!("proto/common.rs");
}
mod inputs {
    include!("proto/inputs.rs");
}
mod outputs {
    include!("proto/outputs.rs");
}
mod pointers {
    include!("proto/pointers.rs");
}
mod receipts {
    include!("proto/receipts.rs");
}
mod transactions {
    include!("proto/transactions.rs");
}
mod utxos {
    include!("proto/utxos.rs");
}

// Re-export all types
pub use accounts::*;
pub use assets::*;
pub use blocks::*;
pub use common::*;
pub use inputs::*;
pub use outputs::*;
pub use pointers::*;
pub use receipts::*;
pub use transactions::*;
pub use utxos::*;

use crate::impl_serializable;

impl_serializable!(Asset);
impl_serializable!(Predicate);
impl_serializable!(Contract);
impl_serializable!(Script);
impl_serializable!(Block);
impl_serializable!(Transaction);
impl_serializable!(Input);
impl_serializable!(Output);
impl_serializable!(Receipt);
impl_serializable!(Utxo);
