CREATE TYPE "OutputType" AS ENUM ('Coin', 'Contract', 'Change', 'Variable', 'ContractCreated');

-- ------------------------------------------------------------------------------
-- Coin data table
-- ------------------------------------------------------------------------------

CREATE TABLE "coin_outputs" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "output_index" INTEGER NOT NULL,
  "output_type" OutputType NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL
);

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