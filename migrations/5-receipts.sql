CREATE SCHEMA "receipts";

CREATE TYPE "ReceiptType" AS ENUM ('Call', 'Return', 'ReturnData', 'Panic', 'Revert', 'Log', 'LogData', 'Transfer', 'TransferOut', 'ScriptResult', 'MessageOut', 'Mint', 'Burn');
CREATE TYPE "ScriptResultType" AS ENUM ('Success', 'Failure');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "receipt_index" INTEGER NOT NULL,
  "receipt_type" ReceiptType NOT NULL,
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."lookup" ("subject");
CREATE INDEX ON "receipts"."lookup" ("block_height");
CREATE INDEX ON "receipts"."lookup" ("tx_id");
CREATE INDEX ON "receipts"."lookup" ("receipt_index");
CREATE INDEX ON "receipts"."lookup" ("receipt_type");

ALTER TABLE "receipts"."lookup" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."lookup" ("block_height");
ALTER TABLE "receipts"."lookup" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."lookup" ("tx_id");

-- ------------------------------------------------------------------------------
-- Call data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."call_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
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
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."call_data" ("subject");
CREATE INDEX ON "receipts"."call_data" ("contract_id");
CREATE INDEX ON "receipts"."call_data" ("to_contract_id");
CREATE INDEX ON "receipts"."call_data" ("asset_id");

ALTER TABLE "receipts"."call_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."call_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Return data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."return_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."return_data" ("subject");
CREATE INDEX ON "receipts"."return_data" ("contract_id");

ALTER TABLE "receipts"."return_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."return_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Return data data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."return_data_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "ptr" BIGINT NOT NULL,
  "len" BIGINT NOT NULL,
  "digest" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."return_data_data" ("subject");
CREATE INDEX ON "receipts"."return_data_data" ("contract_id");

ALTER TABLE "receipts"."return_data_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."return_data_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Panic data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."panic_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "reason" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  "panic_contract_id" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."panic_data" ("subject");
CREATE INDEX ON "receipts"."panic_data" ("contract_id");

ALTER TABLE "receipts"."panic_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."panic_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Revert data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."revert_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."revert_data" ("subject");
CREATE INDEX ON "receipts"."revert_data" ("contract_id");

ALTER TABLE "receipts"."revert_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."revert_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Log data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."log_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "ra" BIGINT NOT NULL,
  "rb" BIGINT NOT NULL,
  "rc" BIGINT NOT NULL,
  "rd" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."log_data" ("subject");
CREATE INDEX ON "receipts"."log_data" ("contract_id");

ALTER TABLE "receipts"."log_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."log_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Log data data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."log_data_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
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
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."log_data_data" ("subject");
CREATE INDEX ON "receipts"."log_data_data" ("contract_id");

ALTER TABLE "receipts"."log_data_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."log_data_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Transfer data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."transfer_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "to_contract_id" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."transfer_data" ("subject");
CREATE INDEX ON "receipts"."transfer_data" ("contract_id");
CREATE INDEX ON "receipts"."transfer_data" ("to_contract_id");
CREATE INDEX ON "receipts"."transfer_data" ("asset_id");

ALTER TABLE "receipts"."transfer_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."transfer_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Transfer out data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."transfer_out_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."transfer_out_data" ("subject");
CREATE INDEX ON "receipts"."transfer_out_data" ("contract_id");
CREATE INDEX ON "receipts"."transfer_out_data" ("to_address");
CREATE INDEX ON "receipts"."transfer_out_data" ("asset_id");

ALTER TABLE "receipts"."transfer_out_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."transfer_out_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Script result data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."script_result_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "result" ScriptResultType NOT NULL,
  "gas_used" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."script_result_data" ("subject");
CREATE INDEX ON "receipts"."script_result_data" ("result");
CREATE INDEX ON "receipts"."script_result_data" ("gas_used");

ALTER TABLE "receipts"."script_result_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."script_result_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Message out data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."message_out_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
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
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."message_out_data" ("subject");
CREATE INDEX ON "receipts"."message_out_data" ("message_id");
CREATE INDEX ON "receipts"."message_out_data" ("sender_address");
CREATE INDEX ON "receipts"."message_out_data" ("recipient_address");
CREATE INDEX ON "receipts"."message_out_data" ("nonce");

ALTER TABLE "receipts"."message_out_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."message_out_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Mint data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."mint_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "sub_id" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."mint_data" ("subject");
CREATE INDEX ON "receipts"."mint_data" ("contract_id");
CREATE INDEX ON "receipts"."mint_data" ("sub_id");
CREATE INDEX ON "receipts"."mint_data" ("asset_id");

ALTER TABLE "receipts"."mint_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."mint_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Burn data table
-- ------------------------------------------------------------------------------

CREATE TABLE "receipts"."burn_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "sub_id" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "val" BIGINT NOT NULL,
  "pc" BIGINT NOT NULL,
  "is" BIGINT NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "receipts"."burn_data" ("subject");
CREATE INDEX ON "receipts"."burn_data" ("contract_id");
CREATE INDEX ON "receipts"."burn_data" ("sub_id");
CREATE INDEX ON "receipts"."burn_data" ("asset_id");

ALTER TABLE "receipts"."burn_data" ADD FOREIGN KEY ("subject") REFERENCES "receipts"."lookup" ("subject");
ALTER TABLE "receipts"."burn_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");