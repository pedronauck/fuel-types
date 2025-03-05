CREATE TYPE "InputType" AS ENUM (
  'CONTRACT',
  'COIN',
  'MESSAGE'
);

-- ------------------------------------------------------------------------------
-- Unified inputs table
-- ------------------------------------------------------------------------------

CREATE TABLE "inputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  "type" InputType NOT NULL,

  -- common props
  "utxo_id" BYTEA,
  "output_index" INTEGER,
  "tx_pointer_block_height" BIGINT,
  "tx_pointer_tx_index" INTEGER,
  
  -- coin specific props
  "amount" BIGINT,
  "asset_id" BYTEA,
  "owner" BYTEA,
  
  -- contract specific props
  "balance_root" BYTEA,
  "contract_id" BYTEA,
  "state_root" BYTEA,
  
  -- message specific props
  "sender" BYTEA,
  "recipient" BYTEA,
  "nonce" BYTEA,
  "data" BYTEA,
  "data_length" INTEGER,
  
  -- predicate related props (shared between coin and message)
  "witness_index" INTEGER,
  "predicate_gas_used" BIGINT,
  "predicate" BYTEA,
  "predicate_data" BYTEA,
  "predicate_length" INTEGER,
  "predicate_data_length" INTEGER,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

-- common indexes
CREATE INDEX ON "inputs" ("subject");
CREATE INDEX ON "inputs" ("tx_id");
CREATE INDEX ON "inputs" ("block_height");
CREATE INDEX ON "inputs" ("input_type");
CREATE INDEX ON "inputs" ("input_index");
CREATE INDEX ON "inputs" ("utxo_id");
CREATE INDEX ON "inputs" ("output_index");

-- coin specific indexes
CREATE INDEX ON "inputs" ("asset_id");
CREATE INDEX ON "inputs" ("owner");

-- contract specific index
CREATE INDEX ON "inputs" ("contract_id");

-- message specific indexes
CREATE INDEX ON "inputs" ("sender");
CREATE INDEX ON "inputs" ("recipient");
CREATE INDEX ON "inputs" ("nonce");

-- shared indexes
CREATE INDEX ON "inputs" ("predicate");