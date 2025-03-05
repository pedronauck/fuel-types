use std::io::Result;
use std::path::Path;
use std::process::Command;

use proto_builder_trait::prost::BuilderAttributes;

fn build_rust() -> Result<()> {
    let rust_out_dir = Path::new("src/proto");
    std::fs::create_dir_all(rust_out_dir)?;
    let proto_files = [
        "proto/accounts.proto",
        "proto/assets.proto",
        "proto/blocks.proto",
        "proto/common.proto",
        "proto/inputs.proto",
        "proto/outputs.proto",
        "proto/pointers.proto",
        "proto/receipts.proto",
        "proto/transactions.proto",
        "proto/utxos.proto",
    ];

    // Create new prost config with serde derives
    let mut config = prost_build::Config::new();

    // Only add serde derives and the macro call
    config
        .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
        .message_attribute(".", "#[serde(rename_all = \"camelCase\")]")
        .enum_attribute(".", "#[serde(rename_all = \"SCREAMING_SNAKE_CASE\")]")
        .with_field_attributes(
            &[
                "accounts.Predicate.type",
                "accounts.Contract.type",
                "accounts.Script.type",
                "blocks.BlockConsensusGenesis.type",
                "blocks.BlockConsensusPoa.type",
                "assets.Asset.type",
                "inputs.Input.type",
                "outputs.Output.type",
                "receipts.Receipt.type",
                "transactions.Transaction.type",
                "utxos.Utxo.type",
            ],
            &["#[serde(rename = \"type\")]"],
        )
        .with_field_attributes(
            &[
                "accounts.Predicate.data",
                "accounts.Contract.data",
                "accounts.Script.data",
                "assets.Asset.data",
                "blocks.Block.data",
                "inputs.Input.data",
                "outputs.Output.data",
                "receipts.Receipt.data",
                "transactions.Transaction.data",
                "utxos.Utxo.data",
            ],
            &["#[serde(flatten)]"],
        )
        .out_dir(rust_out_dir)
        .compile_protos(&proto_files, &["proto/"])?;

    Ok(())
}

fn _build_ts() -> Result<()> {
    // Check if bun is installed
    let bun_check = Command::new("bun").arg("--version").status();
    if bun_check.is_err() || !bun_check.unwrap().success() {
        panic!("Bun is not installed. Please install it first: https://bun.sh");
    }

    // Generate TypeScript types using multiple generators
    let ts_base_dir = Path::new("ts-types");
    let generators = ["pbjs", "ts-proto", "buf", "grpc"];

    // Create base directory and all subdirectories
    std::fs::create_dir_all(ts_base_dir)?;
    for generator in generators.iter() {
        std::fs::create_dir_all(ts_base_dir.join(generator))?;
    }

    // Run each TypeScript generation script separately to better handle errors
    for script in [
        "build:proto-pbjs",
        "build:proto-tsproto",
        "build:proto-buf",
        "build:proto-grpc",
    ] {
        let status = Command::new("bun").args(["run", script]).status()?;

        if !status.success() {
            panic!(
                "Failed to generate TypeScript types with script: {}",
                script
            );
        }
    }

    Ok(())
}

fn main() -> Result<()> {
    build_rust()?;
    // build_ts()?;
    Ok(())
}
