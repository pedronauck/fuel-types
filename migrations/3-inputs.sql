CREATE SCHEMA "inputs";

CREATE TYPE "InputType" AS ENUM ('Contract', 'Coin', 'Message');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "inputs"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "input_index" INTEGER NOT NULL,
  "input_type" InputType NOT NULL,
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "inputs"."lookup" ("subject");
CREATE INDEX ON "inputs"."lookup" ("block_height");
CREATE INDEX ON "inputs"."lookup" ("tx_id");
CREATE INDEX ON "inputs"."lookup" ("input_type");
CREATE INDEX ON "inputs"."lookup" ("input_index");

ALTER TABLE "inputs"."lookup" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."lookup" ("block_height");
ALTER TABLE "inputs"."lookup" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."lookup" ("tx_id");

-- ------------------------------------------------------------------------------
-- Coin data table
-- ------------------------------------------------------------------------------

CREATE TABLE "inputs"."coin_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "owner_address" BYTEA NOT NULL,
  "output_index" INTEGER NOT NULL,
  "predicate" BYTEA,
  "predicate_data" BYTEA,
  "predicate_gas_used" BIGINT,
  "predicate_length" BIGINT,
  "predicate_data_length" BIGINT,
  "tx_pointer_block_height" BIGINT,
  "tx_pointer_tx_index" INTEGER,
  "utxo_id" BYTEA NOT NULL,
  "witness_index" INTEGER,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "inputs"."coin_data" ("subject");
CREATE INDEX ON "inputs"."coin_data" ("asset_id");
CREATE INDEX ON "inputs"."coin_data" ("owner_address");
CREATE INDEX ON "inputs"."coin_data" ("utxo_id");
CREATE INDEX ON "inputs"."coin_data" ("predicate");
CREATE INDEX ON "inputs"."coin_data" ("output_index");

ALTER TABLE "inputs"."coin_data" ADD FOREIGN KEY ("subject") REFERENCES "inputs"."lookup" ("subject");
ALTER TABLE "inputs"."coin_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Contract data table
-- ------------------------------------------------------------------------------

CREATE TABLE "inputs"."contract_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "balance_root" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "output_index" INTEGER NOT NULL,
  "state_root" BYTEA NOT NULL,
  "tx_pointer_block_height" BIGINT,
  "tx_pointer_tx_index" INTEGER,
  "utxo_id" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "inputs"."contract_data" ("subject");
CREATE INDEX ON "inputs"."contract_data" ("contract_id");
CREATE INDEX ON "inputs"."contract_data" ("utxo_id");
CREATE INDEX ON "inputs"."contract_data" ("output_index");

ALTER TABLE "inputs"."contract_data" ADD FOREIGN KEY ("subject") REFERENCES "inputs"."lookup" ("subject");
ALTER TABLE "inputs"."contract_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Message data table
-- ------------------------------------------------------------------------------

CREATE TABLE "inputs"."message_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "data" BYTEA,
  "data_length" INTEGER,
  "nonce" BYTEA NOT NULL,
  "predicate" BYTEA,
  "predicate_length" INTEGER,
  "predicate_data" BYTEA,
  "predicate_data_length" INTEGER,
  "predicate_gas_used" BIGINT,
  "recipient_address" BYTEA NOT NULL,
  "sender_address" BYTEA NOT NULL,
  "witness_index" INTEGER,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "inputs"."message_data" ("subject");
CREATE INDEX ON "inputs"."message_data" ("sender_address");
CREATE INDEX ON "inputs"."message_data" ("recipient_address");
CREATE INDEX ON "inputs"."message_data" ("nonce");
CREATE INDEX ON "inputs"."message_data" ("predicate");

ALTER TABLE "inputs"."message_data" ADD FOREIGN KEY ("subject") REFERENCES "inputs"."lookup" ("subject");
ALTER TABLE "inputs"."message_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");