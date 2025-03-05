CREATE TYPE "TransactionType" AS ENUM (
  'SCRIPT',
  'CREATE', 
  'MINT',
  'UPGRADE',
  'UPLOAD',
  'BLOB'
);

CREATE TYPE "TransactionStatus" AS ENUM (
  'FAILED',
  'SUBMITTED',
  'SQUEEZED_OUT', 
  'SUCCESS',
  'NONE'
);

CREATE TYPE "PolicyType" AS ENUM (
  'TIP',
  'WITNESS_LIMIT',
  'MATURITY',
  'MAX_FEE'
);

-- ------------------------------------------------------------------------------
-- Transactions table (renamed from data)
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA UNIQUE NOT NULL,
  "tx_index" INTEGER NOT NULL,

  -- fields matching fuel-core
  "type" TransactionType NOT NULL,
  "script_gas_limit" BIGINT,
  "is_create" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_mint" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_script" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_upgrade" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_upload" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_blob" BOOLEAN NOT NULL DEFAULT FALSE,
  "mint_amount" BIGINT,
  "mint_asset_id" BYTEA,
  "mint_gas_price" BIGINT,
  "receipts_root" BYTEA,
  "status" TransactionStatus NOT NULL,
  "script" BYTEA,
  "script_data" BYTEA,
  "salt" BYTEA,
  "bytecode_witness_index" INTEGER,
  "bytecode_root" BYTEA,
  "subsection_index" INTEGER,
  "subsections_number" INTEGER,
  "upgrade_purpose" INTEGER,
  "blob_id" BYTEA,
  "tx_pointer" BYTEA,
  "input_asset_ids" BYTEA[],
  "input_contracts" BYTEA[],
  "input_contract" BYTEA,
  "inputs" BYTEA[],
  "outputs" BYTEA[],
  "output_contract" BYTEA,
  "witnesses" BYTEA[],

  -- extra fields (not in fuel-core)
  "maturity" INTEGER,
  "policy_type" INTEGER,
  "raw_payload" BYTEA,
  "script_length" BIGINT,
  "script_data_length" BIGINT,
  "storage_slots_count" BIGINT,
  "proof_set_count" INTEGER,
  "witnesses_count" INTEGER,
  "inputs_count" INTEGER,
  "outputs_count" INTEGER,
  
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "transactions" ("subject");
CREATE INDEX ON "transactions" ("block_height");
CREATE INDEX ON "transactions" ("tx_id");
CREATE INDEX ON "transactions" ("tx_index");
CREATE INDEX ON "transactions" ("type");
CREATE INDEX ON "transactions" ("status");
CREATE INDEX ON "transactions" ("blob_id");
CREATE INDEX ON "transactions" ("script");
CREATE INDEX ON "transactions" ("is_create");
CREATE INDEX ON "transactions" ("is_mint");
CREATE INDEX ON "transactions" ("is_script");
CREATE INDEX ON "transactions" ("is_upgrade");
CREATE INDEX ON "transactions" ("is_upload");
CREATE INDEX ON "transactions" ("script_length");
CREATE INDEX ON "transactions" ("witness_index");
CREATE INDEX ON "transactions" ("root");
CREATE INDEX ON "transactions" ("bytecode_witness_index");
CREATE INDEX ON "transactions" ("bytecode_root");
CREATE INDEX ON "transactions" ("tx_pointer");
CREATE INDEX ON "transactions" ("input_contract");

-- ------------------------------------------------------------------------------
-- Storage slots table
-- ------------------------------------------------------------------------------

CREATE TABLE "storage_slots" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,

  -- props
  "key" BYTEA NOT NULL,
  "value" BYTEA NOT NULL,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("subject") REFERENCES "lookup" ("subject")
);

CREATE INDEX ON "storage_slots" ("subject");
CREATE INDEX ON "storage_slots" ("tx_id");
CREATE INDEX ON "storage_slots" ("key");
CREATE INDEX ON "storage_slots" ("value");

-- ------------------------------------------------------------------------------
-- Witnesses table
-- ------------------------------------------------------------------------------

CREATE TABLE "witnesses" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,

  -- props
  "witness_data" BYTEA NOT NULL,
  "witness_data_length" INTEGER NOT NULL,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("subject") REFERENCES "lookup" ("subject")
);

CREATE INDEX ON "witnesses" ("subject");
CREATE INDEX ON "witnesses" ("tx_id");
CREATE INDEX ON "witnesses" ("witness_data");

-- ------------------------------------------------------------------------------
-- Proof set table
-- ------------------------------------------------------------------------------

CREATE TABLE "proof_set" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,

  -- props
  "proof_hash" BYTEA NOT NULL,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("subject") REFERENCES "lookup" ("subject")
);

CREATE INDEX ON "proof_set" ("subject");
CREATE INDEX ON "proof_set" ("tx_id");

-- ------------------------------------------------------------------------------
-- Policies table
-- ------------------------------------------------------------------------------

CREATE TABLE "policies" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT NOT NULL,
  "tx_id" BYTEA NOT NULL,

  -- props
  "type" PolicyType NOT NULL,
  "data" BYTEA NOT NULL,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("subject") REFERENCES "lookup" ("subject")
);

CREATE INDEX ON "policies" ("subject");
CREATE INDEX ON "policies" ("tx_id");
CREATE INDEX ON "policies" ("type");

-- ------------------------------------------------------------------------------
-- Transaction inputs join table
-- ------------------------------------------------------------------------------

CREATE TABLE "transaction_inputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "transaction_id" BYTEA NOT NULL,
  "input_id" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,

  -- constraints
  FOREIGN KEY ("transaction_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("input_id") REFERENCES "inputs" ("_id"),
  UNIQUE ("transaction_id", "input_index")
);

CREATE INDEX ON "transaction_inputs" ("transaction_id");
CREATE INDEX ON "transaction_inputs" ("input_id");
CREATE INDEX ON "transaction_inputs" ("input_index");

-- ------------------------------------------------------------------------------
-- Transaction outputs join table
-- ------------------------------------------------------------------------------

CREATE TABLE "transaction_outputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "transaction_id" BYTEA NOT NULL,
  "output_id" INTEGER NOT NULL,
  "output_index" INTEGER NOT NULL,
  
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,

  -- constraints
  FOREIGN KEY ("transaction_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("output_id") REFERENCES "outputs" ("_id"),
  UNIQUE ("transaction_id", "output_index")
);

CREATE INDEX ON "transaction_outputs" ("transaction_id");
CREATE INDEX ON "transaction_outputs" ("output_id");
CREATE INDEX ON "transaction_outputs" ("output_index");

-- ------------------------------------------------------------------------------
-- Transaction receipts join table
-- ------------------------------------------------------------------------------

CREATE TABLE "transaction_receipts" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "transaction_id" BYTEA NOT NULL,
  "receipt_id" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,

  -- constraints
  FOREIGN KEY ("transaction_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("receipt_id") REFERENCES "receipts" ("_id"),
  UNIQUE ("transaction_id", "receipt_index")
);

CREATE INDEX ON "transaction_receipts" ("transaction_id");
CREATE INDEX ON "transaction_receipts" ("receipt_id");
CREATE INDEX ON "transaction_receipts" ("receipt_index");

-- ------------------------------------------------------------------------------
-- Transaction UTXOs join table
-- ------------------------------------------------------------------------------

CREATE TABLE "transaction_utxos" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "transaction_id" BYTEA NOT NULL,
  "utxo_id" INTEGER NOT NULL,
  "utxo_index" INTEGER NOT NULL,
  
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,

  -- constraints
  FOREIGN KEY ("transaction_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("utxo_id") REFERENCES "utxos" ("_id"),
  UNIQUE ("transaction_id", "utxo_index")
);

CREATE INDEX ON "transaction_utxos" ("transaction_id");
CREATE INDEX ON "transaction_utxos" ("utxo_id");
CREATE INDEX ON "transaction_utxos" ("utxo_index");