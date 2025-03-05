CREATE TYPE "InputType" AS ENUM ('Contract', 'Coin', 'Message');

-- ------------------------------------------------------------------------------
-- Coin data table
-- ------------------------------------------------------------------------------

CREATE TABLE "input_coins" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  "input_type" InputType NOT NULL,
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
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "input_coins" ("subject");
CREATE INDEX ON "input_coins" ("tx_id");
CREATE INDEX ON "input_coins" ("block_height");
CREATE INDEX ON "input_coins" ("input_type");
CREATE INDEX ON "input_coins" ("input_index");
CREATE INDEX ON "input_coins" ("asset_id");
CREATE INDEX ON "input_coins" ("owner_address");
CREATE INDEX ON "input_coins" ("utxo_id");
CREATE INDEX ON "input_coins" ("predicate");
CREATE INDEX ON "input_coins" ("output_index");

ALTER TABLE "input_coins" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "input_coins" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Contract data table
-- ------------------------------------------------------------------------------

CREATE TABLE "input_contracts" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  "input_type" InputType NOT NULL,
  -- props
  "balance_root" BYTEA NOT NULL,
  "contract_id" BYTEA NOT NULL,
  "output_index" INTEGER NOT NULL,
  "state_root" BYTEA NOT NULL,
  "tx_pointer_block_height" BIGINT,
  "tx_pointer_tx_index" INTEGER,
  "utxo_id" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "input_contracts" ("subject");
CREATE INDEX ON "input_contracts" ("tx_id");
CREATE INDEX ON "input_contracts" ("block_height");
CREATE INDEX ON "input_contracts" ("input_type");
CREATE INDEX ON "input_contracts" ("input_index");
CREATE INDEX ON "input_contracts" ("contract_id");
CREATE INDEX ON "input_contracts" ("utxo_id");
CREATE INDEX ON "input_contracts" ("output_index");

ALTER TABLE "input_contracts" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "input_contracts" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Message data table
-- ------------------------------------------------------------------------------

CREATE TABLE "input_messages" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  "input_type" InputType NOT NULL,
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
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "input_messages" ("subject");
CREATE INDEX ON "input_messages" ("tx_id");
CREATE INDEX ON "input_messages" ("block_height");
CREATE INDEX ON "input_messages" ("input_type");
CREATE INDEX ON "input_messages" ("input_index");
CREATE INDEX ON "input_messages" ("sender_address");
CREATE INDEX ON "input_messages" ("recipient_address");
CREATE INDEX ON "input_messages" ("nonce");
CREATE INDEX ON "input_messages" ("predicate");

ALTER TABLE "input_messages" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "input_messages" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");