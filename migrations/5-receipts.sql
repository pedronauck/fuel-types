CREATE SCHEMA "receipts";

CREATE TYPE "ReceiptType" AS ENUM ('Call', 'Return', 'ReturnData', 'Panic', 'Revert', 'Log', 'LogData', 'Transfer', 'TransferOut', 'ScriptResult', 'MessageOut', 'Mint', 'Burn');
CREATE TYPE "ScriptResultType" AS ENUM ('Success', 'Failure');

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
  "contract_id" BYTEA,
  "pc" BIGINT,
  "is" BIGINT,
  -- call specific
  "to_contract_id" BYTEA,
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
  -- transfer/transfer out specific
  "amount" BIGINT,
  "asset_id" BYTEA,
  "to_address" BYTEA,
  -- script result specific
  "result" ScriptResultType,
  "gas_used" BIGINT,
  -- message out specific
  "message_id" BYTEA,
  "sender_address" BYTEA,
  "recipient_address" BYTEA,
  "nonce" BYTEA,
  -- mint/burn specific
  "sub_id" BYTEA,
  -- panic specific
  "reason" BIGINT,
  "panic_contract_id" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

-- Common indexes
CREATE INDEX ON "receipts" ("subject");
CREATE INDEX ON "receipts" ("tx_id");
CREATE INDEX ON "receipts" ("block_height");
CREATE INDEX ON "receipts" ("receipt_index");
CREATE INDEX ON "receipts" ("receipt_type");
-- Contract related indexes
CREATE INDEX ON "receipts" ("contract_id");
CREATE INDEX ON "receipts" ("to_contract_id");
-- Transfer related indexes
CREATE INDEX ON "receipts" ("asset_id");
CREATE INDEX ON "receipts" ("to_address");
-- Message related indexes
CREATE INDEX ON "receipts" ("message_id");
CREATE INDEX ON "receipts" ("sender_address");
CREATE INDEX ON "receipts" ("recipient_address");
CREATE INDEX ON "receipts" ("nonce");
-- Mint/Burn related index
CREATE INDEX ON "receipts" ("sub_id");
-- Script result related indexes
CREATE INDEX ON "receipts" ("result");
CREATE INDEX ON "receipts" ("gas_used");

ALTER TABLE "receipts" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipts" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");