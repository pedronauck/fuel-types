use sqlx::{postgres::PgRow, Result};

pub trait SqlxModel: Sized {
    fn from_row(row: PgRow) -> Result<Self, sqlx::Error>;
    fn to_params(&self) -> Result<sqlx::postgres::PgArguments, sqlx::Error>;

    fn table_name() -> &'static str
    where
        Self: Sized;

    fn primary_key() -> &'static str
    where
        Self: Sized;
}
