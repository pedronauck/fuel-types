CREATE TYPE "OutputType" AS ENUM ('Coin', 'Contract', 'Change', 'Variable', 'ContractCreated');

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
  "output_type" OutputType NOT NULL,
  -- coin/change specific props
  "amount" BIGINT,
  "asset_id" BYTEA,
  "to_address" BYTEA,
  -- contract/contract created specific props
  "balance_root" BYTEA,
  "state_root" BYTEA,
  "contract_id" BYTEA,
  -- contract specific prop
  "input_index" INTEGER,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs" ("subject");
CREATE INDEX ON "outputs" ("tx_id");
CREATE INDEX ON "outputs" ("block_height");
CREATE INDEX ON "outputs" ("output_type");
CREATE INDEX ON "outputs" ("output_index");
-- coin/change specific indexes
CREATE INDEX ON "outputs" ("to_address");
CREATE INDEX ON "outputs" ("asset_id");
-- contract specific index
CREATE INDEX ON "outputs" ("input_index");
-- contract created specific index
CREATE INDEX ON "outputs" ("contract_id");

ALTER TABLE "outputs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "outputs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");
CREATE INDEX ON "coin_outputs" ("subject");
CREATE INDEX ON "coin_outputs" ("tx_id");
CREATE INDEX ON "coin_outputs" ("block_height");
CREATE INDEX ON "coin_outputs" ("output_type");
CREATE INDEX ON "coin_outputs" ("output_index");
CREATE INDEX ON "coin_outputs" ("to_address");
CREATE INDEX ON "coin_outputs" ("asset_id");

ALTER TABLE "coin_outputs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "coin_outputs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Contract data table
-- ------------------------------------------------------------------------------

CREATE TABLE "contract_outputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "output_index" INTEGER NOT NULL,
  "output_type" OutputType NOT NULL,
  -- props
  "balance_root" BYTEA NOT NULL,
  "state_root" BYTEA NOT NULL,
  "input_index" INTEGER NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "contract_outputs" ("subject");
CREATE INDEX ON "contract_outputs" ("tx_id");
CREATE INDEX ON "contract_outputs" ("block_height");
CREATE INDEX ON "contract_outputs" ("output_type");
CREATE INDEX ON "contract_outputs" ("output_index");
CREATE INDEX ON "contract_outputs" ("input_index");

ALTER TABLE "contract_outputs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "contract_outputs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");

-- ------------------------------------------------------------------------------
-- Contract created data table
-- ------------------------------------------------------------------------------

CREATE TABLE "contract_created_outputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "output_index" INTEGER NOT NULL,
  "output_type" OutputType NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "state_root" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "contract_created_outputs" ("subject");
CREATE INDEX ON "contract_created_outputs" ("tx_id");
CREATE INDEX ON "contract_created_outputs" ("block_height");
CREATE INDEX ON "contract_created_outputs" ("output_type");
CREATE INDEX ON "contract_created_outputs" ("output_index");
CREATE INDEX ON "contract_created_outputs" ("contract_id");

ALTER TABLE "contract_created_outputs" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "contract_created_outputs" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");