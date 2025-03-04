CREATE SCHEMA "transactions";

CREATE TYPE "TransactionType" AS ENUM ('SCRIPT', 'CREATE', 'MINT', 'UPGRADE', 'UPLOAD', 'BLOB');
CREATE TYPE "TransactionStatus" AS ENUM ('SUCCESS', 'FAILURE', 'SUBMITTED');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA UNIQUE NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "type" TransactionType NOT NULL,
  "status" TransactionStatus NOT NULL,
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "transactions"."lookup" ("subject");
CREATE INDEX ON "transactions"."lookup" ("block_height");
CREATE INDEX ON "transactions"."lookup" ("tx_id");
CREATE INDEX ON "transactions"."lookup" ("type");
CREATE INDEX ON "transactions"."lookup" ("status");

ALTER TABLE "transactions"."lookup" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."lookup" ("block_height");

-- ------------------------------------------------------------------------------
-- Data table
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions"."data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA UNIQUE NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "type" TransactionType NOT NULL,
  "status" TransactionStatus NOT NULL,
  "root" BYTEA,
  "witness_index" INTEGER,
  "blob_id" BYTEA,
  "input_asset_ids" BYTEA[],
  "is_create" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_mint" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_script" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_upgrade" BOOLEAN NOT NULL DEFAULT FALSE,
  "is_upload" BOOLEAN NOT NULL DEFAULT FALSE,
  "maturity" INTEGER,
  "mint_amount" BIGINT,
  "mint_asset_id" BYTEA,
  "mint_gas_price" BIGINT,
  "policy_type" INTEGER,
  "raw_payload" BYTEA,
  "receipts_root" BYTEA,
  "salt" BYTEA,
  "script" BYTEA,
  "script_length" BIGINT,
  "script_data" BYTEA,
  "script_data_length" BIGINT,
  "script_gas_limit" BIGINT,
  "subsection_index" INTEGER,
  "subsections_number" INTEGER,
  "upgrade_purpose" INTEGER,
  "storage_slots_count" BIGINT,
  "proof_set_count" INTEGER,
  "witnesses_count" INTEGER,
  "inputs_count" INTEGER,
  "outputs_count" INTEGER,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "transactions"."data" ("subject");
CREATE INDEX ON "transactions"."data" ("block_height");
CREATE INDEX ON "transactions"."data" ("tx_id");
CREATE INDEX ON "transactions"."data" ("tx_index");
CREATE INDEX ON "transactions"."data" ("type");
CREATE INDEX ON "transactions"."data" ("status");
CREATE INDEX ON "transactions"."data" ("blob_id");
CREATE INDEX ON "transactions"."data" ("script");
CREATE INDEX ON "transactions"."data" ("is_create");
CREATE INDEX ON "transactions"."data" ("is_mint");
CREATE INDEX ON "transactions"."data" ("is_script");
CREATE INDEX ON "transactions"."data" ("is_upgrade");
CREATE INDEX ON "transactions"."data" ("is_upload");
CREATE INDEX ON "transactions"."data" ("script_length");
CREATE INDEX ON "transactions"."data" ("witness_index");
CREATE INDEX ON "transactions"."data" ("root");

ALTER TABLE "transactions"."data" ADD FOREIGN KEY ("subject") REFERENCES "transactions"."lookup" ("subject");
ALTER TABLE "transactions"."data" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."data" ("block_height");

-- ------------------------------------------------------------------------------
-- Storage slots table
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions"."storage_slots" (
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
);

CREATE INDEX ON "transactions"."storage_slots" ("subject");
CREATE INDEX ON "transactions"."storage_slots" ("tx_id");
CREATE INDEX ON "transactions"."storage_slots" ("key");
CREATE INDEX ON "transactions"."storage_slots" ("value");

ALTER TABLE "transactions"."storage_slots" ADD FOREIGN KEY ("subject") REFERENCES "transactions"."lookup" ("subject");
ALTER TABLE "transactions"."storage_slots" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Witnesses table
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions"."witnesses" (
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
);

CREATE INDEX ON "transactions"."witnesses" ("subject");
CREATE INDEX ON "transactions"."witnesses" ("tx_id");
CREATE INDEX ON "transactions"."witnesses" ("witness_data");

ALTER TABLE "transactions"."witnesses" ADD FOREIGN KEY ("subject") REFERENCES "transactions"."lookup" ("subject");
ALTER TABLE "transactions"."witnesses" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Proof set table
-- ------------------------------------------------------------------------------

CREATE TABLE "transactions"."proof_set" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "proof_hash" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "transactions"."proof_set" ("subject");
CREATE INDEX ON "transactions"."proof_set" ("tx_id");

ALTER TABLE "transactions"."proof_set" ADD FOREIGN KEY ("subject") REFERENCES "transactions"."lookup" ("subject");
ALTER TABLE "transactions"."proof_set" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Policies table
-- ------------------------------------------------------------------------------

CREATE TYPE "PolicyType" AS ENUM ('TIP', 'WITNESS_LIMIT', 'MATURITY', 'MAX_FEE');

CREATE TABLE "transactions"."policies" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "type" PolicyType NOT NULL,
  "data" BIGINT NOT NULL,  -- Will store all policy data as BIGINT (can handle both BN and number types)
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "transactions"."policies" ("subject");
CREATE INDEX ON "transactions"."policies" ("tx_id");
CREATE INDEX ON "transactions"."policies" ("type");

ALTER TABLE "transactions"."policies" ADD FOREIGN KEY ("subject") REFERENCES "transactions"."lookup" ("subject");
ALTER TABLE "transactions"."policies" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");