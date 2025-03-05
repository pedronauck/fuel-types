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
-- Receipts data table
-- ------------------------------------------------------------------------------
CREATE TABLE "receipts_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "receipts" ("_id")
);

CREATE INDEX ON "receipts_data" ("id");

-- ------------------------------------------------------------------------------
-- Unified receipts table
-- ------------------------------------------------------------------------------
CREATE TABLE "receipts" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "receipt_index" INTEGER NOT NULL,
    "receipt_type" ReceiptType NOT NULL,
    -- cursor
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{receipt_index}
    -- common contract fields
    "id" TEXT,
    "pc" BIGINT,
    "is" BIGINT,
    -- call specific
    "to" TEXT,
    "amount" BIGINT,
    "asset_id" TEXT,
    "gas" BIGINT,
    "param1" BIGINT,
    "param2" BIGINT,
    -- return/revert specific
    "val" BIGINT,
    -- return data/log data specific
    "ptr" BIGINT,
    "len" BIGINT,
    "digest" TEXT,
    "data" TEXT,
    -- log specific
    "ra" BIGINT,
    "rb" BIGINT,
    "rc" BIGINT,
    "rd" BIGINT,
    -- panic specific
    "reason" BIGINT,
    "contract_id" TEXT,
    -- transfer out specific
    "to_address" TEXT,
    -- script result specific
    "result" ScriptResultType,
    "gas_used" BIGINT,
    -- message out specific
    "sender" TEXT,
    "recipient" TEXT,
    "nonce" TEXT,
    -- mint/burn specific
    "sub_id" TEXT,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

-- Common indexes
CREATE INDEX ON "receipts" ("cursor");
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
