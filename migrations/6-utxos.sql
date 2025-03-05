CREATE TYPE "UtxoType" AS ENUM (
  'CONTRACT',
  'COIN',
  'MESSAGE'
);

CREATE TYPE "UtxoStatus" AS ENUM (
  'UNSPENT',
  'SPENT'
);

-- ------------------------------------------------------------------------------
-- UTXO table
-- ------------------------------------------------------------------------------

CREATE TABLE "utxos" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "utxo_id" BYTEA NOT NULL,
  "type" UtxoType NOT NULL,
  "status" UtxoStatus NOT NULL,

  -- pointer fields
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER,
  "output_index" INTEGER,
  "input_id" INTEGER,
  "output_id" INTEGER,

  -- coin specific props
  "amount" BIGINT,

  -- contract specific props
  "contract_id" BYTEA,
  "value" BYTEA,

  -- message specific props
  "sender" BYTEA,
  "recipient" BYTEA,
  "nonce" BYTEA,
  "data" BYTEA,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,

  -- constraints
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
  FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
  FOREIGN KEY ("input_id") REFERENCES "inputs" ("_id"),
  FOREIGN KEY ("output_id") REFERENCES "outputs" ("_id")
);

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