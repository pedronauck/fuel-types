CREATE TYPE "OutputType" AS ENUM (
  'COIN',
  'CONTRACT',
  'CHANGE',
  'VARIABLE',
  'CONTRACT_CREATED'
);

-- ------------------------------------------------------------------------------
-- Unified outputs table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "output_index" INTEGER NOT NULL,
  "type" OutputType NOT NULL,

  -- common props for coin/change/variable
  "to" BYTEA,
  "amount" BIGINT,
  "asset_id" BYTEA,

  -- contract/contract created shared props
  "state_root" BYTEA,
  
  -- contract specific props
  "balance_root" BYTEA,
  "input_index" INTEGER,

  -- contract created specific props
  "contract_id" BYTEA,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "outputs" ("subject");
CREATE INDEX ON "outputs" ("tx_id");
CREATE INDEX ON "outputs" ("block_height");
CREATE INDEX ON "outputs" ("output_type");
CREATE INDEX ON "outputs" ("output_index");

-- coin/change/variable specific indexes
CREATE INDEX ON "outputs" ("to");
CREATE INDEX ON "outputs" ("asset_id");

-- contract specific index
CREATE INDEX ON "outputs" ("input_index");

-- contract created specific index
CREATE INDEX ON "outputs" ("contract_id");