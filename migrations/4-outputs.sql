CREATE TYPE "OutputType" AS ENUM (
    'COIN',
    'CONTRACT',
    'CHANGE',
    'VARIABLE',
    'CONTRACT_CREATED'
);

-- ------------------------------------------------------------------------------
-- Outputs data table
-- ------------------------------------------------------------------------------
CREATE TABLE "outputs_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "outputs" ("_id")
);

CREATE INDEX ON "outputs_data" ("id");

-- ------------------------------------------------------------------------------
-- Unified outputs table
-- ------------------------------------------------------------------------------
CREATE TABLE "outputs" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "tx_id" TEXT NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "output_index" INTEGER NOT NULL,
    "type" OutputType NOT NULL,
    -- cursor
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{output_index}
    -- common props for coin/change/variable
    "to" TEXT,
    "amount" BIGINT,
    "asset_id" TEXT,
    "utxo_id" TEXT,
    -- contract/contract created shared props
    "state_root" TEXT,
    -- contract specific props
    "balance_root" TEXT,
    "input_index" INTEGER,
    -- contract created specific props
    "contract_id" TEXT,
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    -- constraints
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("utxo_id") REFERENCES "utxos" ("utxo_id")
);

CREATE INDEX ON "outputs" ("cursor");
CREATE INDEX ON "outputs" ("subject");
CREATE INDEX ON "outputs" ("tx_id");
CREATE INDEX ON "outputs" ("block_height");
CREATE INDEX ON "outputs" ("output_type");

-- coin/change/variable specific indexes
CREATE INDEX ON "outputs" ("to");
CREATE INDEX ON "outputs" ("asset_id");
CREATE INDEX ON "outputs" ("utxo_id");

-- contract created specific index
CREATE INDEX ON "outputs" ("contract_id");
