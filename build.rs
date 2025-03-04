use std::io::Result;
use std::path::Path;
use std::process::Command;

fn main() -> Result<()> {
    let proto_files = [
        "proto/blocks.proto",
        "proto/transactions.proto",
        "proto/inputs.proto",
        "proto/outputs.proto",
        "proto/receipts.proto",
        "proto/utxos.proto",
        "proto/pointers.proto",
    ];

    // Check if bun is installed
    let bun_check = Command::new("bun").arg("--version").status();
    if bun_check.is_err() || !bun_check.unwrap().success() {
        panic!("Bun is not installed. Please install it first: https://bun.sh");
    }

    // Generate Rust types
    let rust_out_dir = Path::new("src/generated");
    std::fs::create_dir_all(rust_out_dir)?;

    prost_build::Config::new()
        .out_dir(rust_out_dir)
        .compile_protos(&proto_files, &["proto/"])?;

    // Generate TypeScript types using protobufjs
    let ts_out_dir = Path::new("ts-types");
    std::fs::create_dir_all(ts_out_dir)?;

    // Run the TypeScript generation script
    let status = Command::new("bun").args(["run", "build:proto"]).status()?;

    if !status.success() {
        panic!("Failed to generate TypeScript types");
    }

    Ok(())
}
