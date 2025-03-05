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

CREATE TYPE "PolicyType" AS ENUM ('TIP', 'WITNESS_LIMIT', 'MATURITY', 'MAX_FEE');

-- ------------------------------------------------------------------------------
-- Transactions data table
-- ------------------------------------------------------------------------------
--
CREATE TABLE "transactions_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "transactions" ("_id")
);

CREATE INDEX ON "transactions_data" ("id");

-- ------------------------------------------------------------------------------
-- Transactions table (renamed from data)
-- ------------------------------------------------------------------------------
CREATE TABLE "transactions" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT UNIQUE NOT NULL,
    "tx_index" INTEGER NOT NULL,
    -- cursor
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}
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
    "mint_asset_id" TEXT,
    "mint_gas_price" BIGINT,
    "receipts_root" TEXT,
    "status" TransactionStatus NOT NULL,
    "script" TEXT,
    "script_data" TEXT,
    "salt" TEXT,
    "bytecode_witness_index" INTEGER,
    "bytecode_root" TEXT,
    "subsection_index" INTEGER,
    "subsections_number" INTEGER,
    "upgrade_purpose" INTEGER,
    "blob_id" TEXT,
    -- extra fields (not in fuel-core)
    "maturity" INTEGER,
    "policy_type" INTEGER,
    "script_length" BIGINT,
    "script_data_length" BIGINT,
    "storage_slots_count" BIGINT,
    "proof_set_count" INTEGER,
    "witnesses_count" INTEGER,
    "inputs_count" INTEGER,
    "outputs_count" INTEGER,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "transactions" ("cursor");
CREATE INDEX ON "transactions" ("subject");
CREATE INDEX ON "transactions" ("block_height");
CREATE INDEX ON "transactions" ("tx_id");
CREATE INDEX ON "transactions" ("tx_index");
CREATE INDEX ON "transactions" ("type");
CREATE INDEX ON "transactions" ("status");
CREATE INDEX ON "transactions" ("blob_id");
CREATE INDEX ON "transactions" ("script");

-- ------------------------------------------------------------------------------
-- Storage slots table
-- ------------------------------------------------------------------------------
CREATE TABLE "transaction_storage_slots" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    -- props
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id")
);

CREATE INDEX ON "transaction_storage_slots" ("subject");
CREATE INDEX ON "transaction_storage_slots" ("tx_id");
CREATE INDEX ON "transaction_storage_slots" ("key");
CREATE INDEX ON "transaction_storage_slots" ("value");

-- ------------------------------------------------------------------------------
-- Witnesses table
-- ------------------------------------------------------------------------------
CREATE TABLE "transaction_witnesses" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    -- props
    "witness_data" TEXT NOT NULL,
    "witness_data_length" INTEGER NOT NULL,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id")
);

CREATE INDEX ON "transaction_witnesses" ("subject");
CREATE INDEX ON "transaction_witnesses" ("tx_id");
CREATE INDEX ON "transaction_witnesses" ("witness_data");

-- ------------------------------------------------------------------------------
-- Proof set table
-- ------------------------------------------------------------------------------
CREATE TABLE "transaction_proof_set" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    -- props
    "proof_hash" TEXT NOT NULL,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id")
);

CREATE INDEX ON "transaction_proof_set" ("subject");
CREATE INDEX ON "transaction_proof_set" ("tx_id");
CREATE INDEX ON "transaction_proof_set" ("proof_hash");

-- ------------------------------------------------------------------------------
-- Policies table
-- ------------------------------------------------------------------------------
CREATE TABLE "transaction_policies" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "tx_id" TEXT NOT NULL,
    -- props
    "type" PolicyType NOT NULL,
    "data" TEXT NOT NULL,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("subject") REFERENCES "lookup" ("subject")
);

CREATE INDEX ON "transaction_policies" ("subject");
CREATE INDEX ON "transaction_policies" ("tx_id");
CREATE INDEX ON "transaction_policies" ("type");

-- ------------------------------------------------------------------------------
-- Transaction accounts table
-- ------------------------------------------------------------------------------

CREATE TYPE "TransactionAccountType" AS ENUM (
    'CONTRACT',
    'ADDRESS',
    'PREDICATE',
    'SCRIPT'
);

CREATE TABLE "transaction_accounts" (
    -- uniques
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT NOT NULL,
    "input_id" INTEGER,
    "output_id" INTEGER,
    "type" TransactionAccountType NOT NULL,
    "address" TEXT NOT NULL,

    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),

    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("input_id") REFERENCES "inputs" ("_id"),
    FOREIGN KEY ("output_id") REFERENCES "outputs" ("_id")
);

CREATE INDEX ON "transaction_accounts" ("block_height");
CREATE INDEX ON "transaction_accounts" ("tx_id");
CREATE INDEX ON "transaction_accounts" ("type");
CREATE INDEX ON "transaction_accounts" ("address");
CREATE INDEX ON "transaction_accounts" ("input_id");
CREATE INDEX ON "transaction_accounts" ("output_id");