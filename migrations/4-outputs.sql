CREATE SCHEMA "outputs";

CREATE TYPE "OutputType" AS ENUM ('Coin', 'Contract', 'Change', 'Variable', 'ContractCreated');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "output_index" INTEGER NOT NULL,
  "output_type" OutputType NOT NULL,
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."lookup" ("subject");
CREATE INDEX ON "outputs"."lookup" ("block_height");
CREATE INDEX ON "outputs"."lookup" ("tx_id");
CREATE INDEX ON "outputs"."lookup" ("output_type");
CREATE INDEX ON "outputs"."lookup" ("output_index");

ALTER TABLE "outputs"."lookup" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."lookup" ("block_height");
ALTER TABLE "outputs"."lookup" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."lookup" ("tx_id");

-- ------------------------------------------------------------------------------
-- Coin data table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."coin_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."coin_data" ("subject");
CREATE INDEX ON "outputs"."coin_data" ("to_address");
CREATE INDEX ON "outputs"."coin_data" ("asset_id");

ALTER TABLE "outputs"."coin_data" ADD FOREIGN KEY ("subject") REFERENCES "outputs"."lookup" ("subject");
ALTER TABLE "outputs"."coin_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Contract data table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."contract_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "balance_root" BYTEA NOT NULL,
  "state_root" BYTEA NOT NULL,
  "input_index" INTEGER NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."contract_data" ("subject");
CREATE INDEX ON "outputs"."contract_data" ("input_index");

ALTER TABLE "outputs"."contract_data" ADD FOREIGN KEY ("subject") REFERENCES "outputs"."lookup" ("subject");
ALTER TABLE "outputs"."contract_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Contract created data table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."contract_created_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "contract_id" BYTEA NOT NULL,
  "state_root" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."contract_created_data" ("subject");
CREATE INDEX ON "outputs"."contract_created_data" ("contract_id");

ALTER TABLE "outputs"."contract_created_data" ADD FOREIGN KEY ("subject") REFERENCES "outputs"."lookup" ("subject");
ALTER TABLE "outputs"."contract_created_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Change data table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."change_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."change_data" ("subject");
CREATE INDEX ON "outputs"."change_data" ("to_address");
CREATE INDEX ON "outputs"."change_data" ("asset_id");

ALTER TABLE "outputs"."change_data" ADD FOREIGN KEY ("subject") REFERENCES "outputs"."lookup" ("subject");
ALTER TABLE "outputs"."change_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");

-- ------------------------------------------------------------------------------
-- Variable data table
-- ------------------------------------------------------------------------------

CREATE TABLE "outputs"."variable_data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  -- props
  "amount" BIGINT NOT NULL,
  "asset_id" BYTEA NOT NULL,
  "to_address" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "outputs"."variable_data" ("subject");
CREATE INDEX ON "outputs"."variable_data" ("to_address");
CREATE INDEX ON "outputs"."variable_data" ("asset_id");

ALTER TABLE "outputs"."variable_data" ADD FOREIGN KEY ("subject") REFERENCES "outputs"."lookup" ("subject");
ALTER TABLE "outputs"."variable_data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."data" ("tx_id");