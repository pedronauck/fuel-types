CREATE SCHEMA "utxos";

CREATE TYPE "UtxoType" AS ENUM ('Contract', 'Coin', 'Message');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "utxos"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  -- props
  "input_index" INTEGER NOT NULL,
  "utxo_type" UtxoType NOT NULL,
  "utxo_id" BYTEA NOT NULL,
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "utxos"."lookup" ("subject");
CREATE INDEX ON "utxos"."lookup" ("block_height");
CREATE INDEX ON "utxos"."lookup" ("tx_id");
CREATE INDEX ON "utxos"."lookup" ("utxo_id");
CREATE INDEX ON "utxos"."lookup" ("utxo_type");

ALTER TABLE "utxos"."lookup" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."lookup" ("block_height");
ALTER TABLE "utxos"."lookup" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."lookup" ("tx_id");

-- ------------------------------------------------------------------------------
-- Data table
-- ------------------------------------------------------------------------------

CREATE TABLE "utxos"."data" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "utxo_id" BYTEA NOT NULL,
  -- props
  "sender_address" BYTEA,
  "recipient_address" BYTEA,
  "nonce" BYTEA,
  "amount" BIGINT,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "utxos"."data" ("subject");
CREATE INDEX ON "utxos"."data" ("utxo_id");
CREATE INDEX ON "utxos"."data" ("sender_address");
CREATE INDEX ON "utxos"."data" ("recipient_address");

ALTER TABLE "utxos"."data" ADD FOREIGN KEY ("subject") REFERENCES "utxos"."lookup" ("subject");
ALTER TABLE "utxos"."data" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions"."lookup" ("tx_id");