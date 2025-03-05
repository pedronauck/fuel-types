CREATE TYPE "UtxoType" AS ENUM ('Contract', 'Coin', 'Message');

-- ------------------------------------------------------------------------------
-- UTXO table
-- ------------------------------------------------------------------------------

CREATE TABLE "utxos" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT NOT NULL,
  "tx_id" BYTEA NOT NULL,
  "tx_index" INTEGER NOT NULL,
  "input_index" INTEGER NOT NULL,
  "utxo_type" UtxoType NOT NULL,
  "utxo_id" BYTEA NOT NULL,
  -- props
  "sender_address" BYTEA,
  "recipient_address" BYTEA,
  "nonce" BYTEA,
  "amount" BIGINT,
  "data" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL,
  "published_at" TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "utxos" ("subject");
CREATE INDEX ON "utxos" ("block_height");
CREATE INDEX ON "utxos" ("tx_id");
CREATE INDEX ON "utxos" ("utxo_id");
CREATE INDEX ON "utxos" ("utxo_type");
CREATE INDEX ON "utxos" ("sender_address");
CREATE INDEX ON "utxos" ("recipient_address");

ALTER TABLE "utxos" ADD FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id");
ALTER TABLE "utxos" ADD FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height");