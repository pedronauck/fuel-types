CREATE SCHEMA "receipts";

CREATE TYPE "ReceiptType" AS ENUM ('Call', 'Return', 'ReturnData', 'Panic', 'Revert', 'Log', 'LogData', 'Transfer', 'TransferOut', 'ScriptResult', 'MessageOut', 'Mint', 'Burn');
CREATE TYPE "ScriptResultType" AS ENUM ('Success', 'Failure');

-- ------------------------------------------------------------------------------
-- Call data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_calls" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "to_contract_id" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "gas" BIGINT NOT NULL,
  "param1" BIGINT NOT NULL,
  "param2" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_calls" ("subject");
CREATE INDEX ON "receipt_calls" ("tx_id");
CREATE INDEX ON "receipt_calls" ("block_height");
CREATE INDEX ON "receipt_calls" ("receipt_index");
CREATE INDEX ON "receipt_calls" ("receipt_type");
CREATE INDEX ON "receipt_calls" ("contract_id");
CREATE INDEX ON "receipt_calls" ("to_contract_id");
CREATE INDEX ON "receipt_calls" ("asset_id");

ALTER TABLE "receipt_calls" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_calls" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Return data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_returns" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_returns" ("subject");
CREATE INDEX ON "receipt_returns" ("tx_id");
CREATE INDEX ON "receipt_returns" ("block_height");
CREATE INDEX ON "receipt_returns" ("receipt_index");
CREATE INDEX ON "receipt_returns" ("receipt_type");
CREATE INDEX ON "receipt_returns" ("contract_id");

ALTER TABLE "receipt_returns" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_returns" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Return data data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_return_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "ptr" BIGINT NOT NULL,
  "len" BIGINT NOT NULL,
  "digest" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_return_data" ("subject");
CREATE INDEX ON "receipt_return_data" ("tx_id");
CREATE INDEX ON "receipt_return_data" ("block_height");
CREATE INDEX ON "receipt_return_data" ("receipt_index");
CREATE INDEX ON "receipt_return_data" ("receipt_type");
CREATE INDEX ON "receipt_return_data" ("contract_id");

ALTER TABLE "receipt_return_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_return_data" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Panic data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_panics" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "reason" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  "panic_contract_id" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_panics" ("subject");
CREATE INDEX ON "receipt_panics" ("tx_id");
CREATE INDEX ON "receipt_panics" ("block_height");
CREATE INDEX ON "receipt_panics" ("receipt_index");
CREATE INDEX ON "receipt_panics" ("receipt_type");
CREATE INDEX ON "receipt_panics" ("contract_id");

ALTER TABLE "receipt_panics" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_panics" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Revert data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_reverts" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_reverts" ("subject");
CREATE INDEX ON "receipt_reverts" ("tx_id");
CREATE INDEX ON "receipt_reverts" ("block_height");
CREATE INDEX ON "receipt_reverts" ("receipt_index");
CREATE INDEX ON "receipt_reverts" ("receipt_type");
CREATE INDEX ON "receipt_reverts" ("contract_id");

ALTER TABLE "receipt_reverts" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_reverts" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Log data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_logs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "ra" BIGINT NOT NULL,
  "rb" BIGINT NOT NULL,
  "rc" BIGINT NOT NULL,
  "rd" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_logs" ("subject");
CREATE INDEX ON "receipt_logs" ("tx_id");
CREATE INDEX ON "receipt_logs" ("block_height");
CREATE INDEX ON "receipt_logs" ("receipt_index");
CREATE INDEX ON "receipt_logs" ("receipt_type");
CREATE INDEX ON "receipt_logs" ("contract_id");

ALTER TABLE "receipt_logs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_logs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Log data data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_log_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "ra" BIGINT NOT NULL,
  "rb" BIGINT NOT NULL,
  "ptr" BIGINT NOT NULL,
  "len" BIGINT NOT NULL,
  "digest" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_log_data" ("subject");
CREATE INDEX ON "receipt_log_data" ("tx_id");
CREATE INDEX ON "receipt_log_data" ("block_height");
CREATE INDEX ON "receipt_log_data" ("receipt_index");
CREATE INDEX ON "receipt_log_data" ("receipt_type");
CREATE INDEX ON "receipt_log_data" ("contract_id");

ALTER TABLE "receipt_log_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_log_data" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Transfer data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_transfers" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "to_contract_id" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_transfers" ("subject");
CREATE INDEX ON "receipt_transfers" ("tx_id");
CREATE INDEX ON "receipt_transfers" ("block_height");
CREATE INDEX ON "receipt_transfers" ("receipt_index");
CREATE INDEX ON "receipt_transfers" ("receipt_type");
CREATE INDEX ON "receipt_transfers" ("contract_id");
CREATE INDEX ON "receipt_transfers" ("to_contract_id");
CREATE INDEX ON "receipt_transfers" ("asset_id");

ALTER TABLE "receipt_transfers" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_transfers" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Transfer out data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_transfer_outs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_transfer_outs" ("subject");
CREATE INDEX ON "receipt_transfer_outs" ("tx_id");
CREATE INDEX ON "receipt_transfer_outs" ("block_height");
CREATE INDEX ON "receipt_transfer_outs" ("receipt_index");
CREATE INDEX ON "receipt_transfer_outs" ("receipt_type");
CREATE INDEX ON "receipt_transfer_outs" ("contract_id");
CREATE INDEX ON "receipt_transfer_outs" ("to_address");
CREATE INDEX ON "receipt_transfer_outs" ("asset_id");

ALTER TABLE "receipt_transfer_outs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_transfer_outs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Script result data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_script_results" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "result" ScriptResultType NOT NULL,
  "gas_used" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_script_results" ("subject");
CREATE INDEX ON "receipt_script_results" ("tx_id");
CREATE INDEX ON "receipt_script_results" ("block_height");
CREATE INDEX ON "receipt_script_results" ("receipt_index");
CREATE INDEX ON "receipt_script_results" ("receipt_type");
CREATE INDEX ON "receipt_script_results" ("result");
CREATE INDEX ON "receipt_script_results" ("gas_used");

ALTER TABLE "receipt_script_results" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_script_results" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Message out data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_message_outs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "message_id" BYTEA NOT NULL,
  "sender_address" BYTEA NOT NULL,
  "recipient_address" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "nonce" BYTEA NOT NULL,
  "len" INTEGER NOT NULL,
  "digest" BYTEA NOT NULL,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_message_outs" ("subject");
CREATE INDEX ON "receipt_message_outs" ("tx_id");
CREATE INDEX ON "receipt_message_outs" ("block_height");
CREATE INDEX ON "receipt_message_outs" ("receipt_index");
CREATE INDEX ON "receipt_message_outs" ("receipt_type");
CREATE INDEX ON "receipt_message_outs" ("message_id");
CREATE INDEX ON "receipt_message_outs" ("sender_address");
CREATE INDEX ON "receipt_message_outs" ("recipient_address");
CREATE INDEX ON "receipt_message_outs" ("nonce");

ALTER TABLE "receipt_message_outs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_message_outs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Mint data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_mints" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "sub_id" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_mints" ("subject");
CREATE INDEX ON "receipt_mints" ("tx_id");
CREATE INDEX ON "receipt_mints" ("block_height");
CREATE INDEX ON "receipt_mints" ("receipt_index");
CREATE INDEX ON "receipt_mints" ("receipt_type");
CREATE INDEX ON "receipt_mints" ("contract_id");
CREATE INDEX ON "receipt_mints" ("sub_id");
CREATE INDEX ON "receipt_mints" ("asset_id");

ALTER TABLE "receipt_mints" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_mints" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Burn data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipt_burns" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  -- props
  "sub_id" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipt_burns" ("subject");
CREATE INDEX ON "receipt_burns" ("tx_id");
CREATE INDEX ON "receipt_burns" ("block_height");
CREATE INDEX ON "receipt_burns" ("receipt_index");
CREATE INDEX ON "receipt_burns" ("receipt_type");
CREATE INDEX ON "receipt_burns" ("contract_id");
CREATE INDEX ON "receipt_burns" ("sub_id");
CREATE INDEX ON "receipt_burns" ("asset_id");

ALTER TABLE "receipt_burns" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "receipt_burns" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");