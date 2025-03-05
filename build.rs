use prost_build_config::{BuildConfig, Builder};
use std::io::Result;
use std::path::Path;
use std::process::Command;

fn build_rust() -> Result<()> {
    let config: BuildConfig = serde_yaml::from_str(include_str!("build_config.yaml")).unwrap();
    Builder::from(config).build_protos();
    Ok(())
}

fn build_ts() -> Result<()> {
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
    // build_rust()?;
    build_ts()?;
    Ok(())
}
