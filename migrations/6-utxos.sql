CREATE TYPE "UtxoType" AS ENUM ('CONTRACT', 'COIN', 'MESSAGE');

CREATE TYPE "UtxoStatus" AS ENUM ('UNSPENT', 'SPENT');

-- ------------------------------------------------------------------------------
-- UTXOs data table
-- ------------------------------------------------------------------------------
CREATE TABLE "utxos_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "utxos" ("_id")
);

CREATE INDEX ON "utxos_data" ("id");

-- ------------------------------------------------------------------------------
-- UTXO table
-- ------------------------------------------------------------------------------
CREATE TABLE "utxos" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "utxo_id" TEXT NOT NULL,
    "type" UtxoType NOT NULL,
    "status" UtxoStatus NOT NULL,
    -- cursor
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{utxo_id}
    -- pointer fields
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "input_index" INTEGER,
    "output_index" INTEGER,
    "input_id" INTEGER,
    "output_id" INTEGER,
    -- coin specific props
    "amount" BIGINT,
    -- contract specific props
    "contract_id" TEXT,
    "value" TEXT,
    -- message specific props
    "sender" TEXT,
    "recipient" TEXT,
    "nonce" TEXT,
    "data" TEXT,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("input_id") REFERENCES "inputs" ("_id"),
    FOREIGN KEY ("output_id") REFERENCES "outputs" ("_id")
);

CREATE INDEX ON "utxos" ("cursor");
CREATE INDEX ON "utxos" ("block_height");
CREATE INDEX ON "utxos" ("tx_id");
CREATE INDEX ON "utxos" ("input_id");
CREATE INDEX ON "utxos" ("output_id");
CREATE INDEX ON "utxos" ("subject");
CREATE INDEX ON "utxos" ("utxo_id");
CREATE INDEX ON "utxos" ("type");
CREATE INDEX ON "utxos" ("status");
CREATE INDEX ON "utxos" ("contract_id");
CREATE INDEX ON "utxos" ("sender");
CREATE INDEX ON "utxos" ("recipient");
