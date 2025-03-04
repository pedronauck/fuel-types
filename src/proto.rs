pub mod blocks {
    include!("./generated/blocks.rs");
}

pub mod transactions {
    include!("./generated/transactions.rs");
}

pub mod inputs {
    include!("./generated/inputs.rs");
}

pub mod outputs {
    include!("./generated/outputs.rs");
}

pub mod receipts {
    include!("./generated/receipts.rs");
}

pub mod utxos {
    include!("./generated/utxos.rs");
}

pub mod pointers {
    include!("./generated/pointers.rs");
}
