CREATE SCHEMA "receipts";

CREATE TYPE "ReceiptType" AS ENUM (
  'CALL',
  'RETURN',
  'RETURN_DATA',
  'PANIC',
  'REVERT',
  'LOG',
  'LOG_DATA',
  'TRANSFER',
  'TRANSFER_OUT',
  'SCRIPT_RESULT',
  'MESSAGE_OUT',
  'MINT',
  'BURN'
);

CREATE TYPE "ScriptResultType" AS ENUM (
  'SUCCESS',
  'SCRIPT_REVERT',
  'SCRIPT_PANIC',
  'GENERIC_FAILURE'
);

-- ------------------------------------------------------------------------------
-- Unified receipts table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,

  -- common contract fields
  "id" BYTEA,
  "pc" BIGINT,
  "is" BIGINT,

  -- call specific
  "to" BYTEA,
  "amount" BIGINT,
  "asset_id" BYTEA,
  "gas" BIGINT,
  "param1" BIGINT,
  "param2" BIGINT,

  -- return/revert specific
  "val" BIGINT,

  -- return data/log data specific
  "ptr" BIGINT,
  "len" BIGINT,
  "digest" BYTEA,
  "data" BYTEA,

  -- log specific
  "ra" BIGINT,
  "rb" BIGINT,
  "rc" BIGINT,
  "rd" BIGINT,

  -- panic specific
  "reason" BIGINT,
  "contract_id" BYTEA,
 
  -- transfer out specific
  "to_address" BYTEA,

  -- script result specific
  "result" ScriptResultType,
  "gas_used" BIGINT,

  -- message out specific
  "sender" BYTEA,
  "recipient" BYTEA,
  "nonce" BYTEA,

  -- mint/burn specific
  "sub_id" BYTEA,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

-- Common indexes
CREATE INDEX ON "receipts" ("subject");
CREATE INDEX ON "receipts" ("tx_id");
CREATE INDEX ON "receipts" ("block_height");
CREATE INDEX ON "receipts" ("receipt_index");
CREATE INDEX ON "receipts" ("receipt_type");

-- Contract related indexes
CREATE INDEX ON "receipts" ("id");
CREATE INDEX ON "receipts" ("contract_id");

-- Transfer related indexes
CREATE INDEX ON "receipts" ("asset_id");
CREATE INDEX ON "receipts" ("to");
CREATE INDEX ON "receipts" ("to_address");

-- Message related indexes
CREATE INDEX ON "receipts" ("sender");
CREATE INDEX ON "receipts" ("recipient");
CREATE INDEX ON "receipts" ("nonce");

-- Mint/Burn related index
CREATE INDEX ON "receipts" ("sub_id");

-- Script result related indexes
CREATE INDEX ON "receipts" ("result");
CREATE INDEX ON "receipts" ("gas_used");