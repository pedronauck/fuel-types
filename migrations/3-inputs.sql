CREATE TYPE "InputType" AS ENUM ('CONTRACT', 'COIN', 'MESSAGE');

-- ------------------------------------------------------------------------------
-- Inputs data table
-- ------------------------------------------------------------------------------
CREATE TABLE "inputs_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "inputs" ("_id")
);

CREATE INDEX ON "inputs_data" ("id");

-- ------------------------------------------------------------------------------
-- Inputs table
-- ------------------------------------------------------------------------------
CREATE TABLE "inputs" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "input_index" INTEGER NOT NULL,
    "type" InputType NOT NULL,
    -- cursor
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{input_index}
    -- common props
    "utxo_id" TEXT,
    "output_index" INTEGER,
    -- coin specific props
    "amount" BIGINT,
    "asset_id" TEXT,
    "owner" TEXT,
    -- contract specific props
    "balance_root" TEXT,
    "contract_id" TEXT,
    "state_root" TEXT,
    -- message specific props
    "sender" TEXT,
    "recipient" TEXT,
    "nonce" TEXT,
    "data" TEXT,
    "data_length" INTEGER,
    -- predicate related props (shared between coin and message)
    "witness_index" INTEGER,
    "predicate_gas_used" BIGINT,
    "predicate" TEXT,
    "predicate_data" TEXT,
    "predicate_length" INTEGER,
    "predicate_data_length" INTEGER,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

-- common indexes
CREATE INDEX ON "inputs" ("cursor");
CREATE INDEX ON "inputs" ("subject");
CREATE INDEX ON "inputs" ("tx_id");
CREATE INDEX ON "inputs" ("block_height");
CREATE INDEX ON "inputs" ("input_type");
CREATE INDEX ON "inputs" ("utxo_id");

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