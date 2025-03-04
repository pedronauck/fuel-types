CREATE SCHEMA "blocks";

CREATE TYPE "ConsensusType" AS ENUM ('Genesis', 'PoAConsensus');

-- ------------------------------------------------------------------------------
-- Lookup table
-- ------------------------------------------------------------------------------

CREATE TABLE "blocks"."lookup" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,
  -- props
  "value" BYTEA NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL,
  "block_propagation_ms" INTEGER NOT NULL
);

CREATE INDEX ON "blocks"."lookup" ("subject");
CREATE INDEX ON "blocks"."lookup" ("block_height");
CREATE INDEX ON "blocks"."lookup" ("producer_address");

-- ------------------------------------------------------------------------------
-- Data table
-- ------------------------------------------------------------------------------

CREATE TABLE "blocks"."data" (
  -- uniques  
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,
  -- props
  "producer_address" BYTEA NOT NULL,
  "block_id" INTEGER NOT NULL,
  "version" VARCHAR(10) NOT NULL,
  "header_id" INTEGER,
  "consensus_id" INTEGER,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "blocks"."data" ("subject");
CREATE INDEX ON "blocks"."data" ("block_height");
CREATE INDEX ON "blocks"."data" ("producer_address");
CREATE INDEX ON "blocks"."data" ("block_id");
CREATE INDEX ON "blocks"."data" ("header_id");
CREATE INDEX ON "blocks"."data" ("consensus_id");
ALTER TABLE "blocks"."data" ADD FOREIGN KEY ("subject") REFERENCES "blocks"."lookup" ("subject");
ALTER TABLE "blocks"."data" ADD FOREIGN KEY ("header_id") REFERENCES "blocks"."headers" ("_id");
ALTER TABLE "blocks"."data" ADD FOREIGN KEY ("consensus_id") REFERENCES "blocks"."consensus" ("_id");

-- ------------------------------------------------------------------------------
-- Headers table
-- ------------------------------------------------------------------------------

CREATE TABLE "blocks"."headers" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,
  -- props
  "application_hash" BYTEA NOT NULL,
  "consensus_parameters_version" INTEGER NOT NULL,
  "da_height" BIGINT NOT NULL,
  "event_inbox_root" BYTEA NOT NULL,
  "message_outbox_root" BYTEA NOT NULL,
  "message_receipt_count" INTEGER NOT NULL,
  "prev_root" BYTEA NOT NULL,
  "state_transition_bytecode_version" INTEGER NOT NULL,
  "time" BIGINT NOT NULL,
  "transactions_count" SMALLINT NOT NULL,
  "transactions_root" BYTEA NOT NULL,
  "version" INTEGER NOT NULL,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "blocks"."headers" ("subject");
CREATE INDEX ON "blocks"."headers" ("block_height");
CREATE INDEX ON "blocks"."headers" ("da_height");

ALTER TABLE "blocks"."headers" ADD FOREIGN KEY ("subject") REFERENCES "blocks"."lookup" ("subject");
ALTER TABLE "blocks"."headers" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."data" ("block_height");

-- ------------------------------------------------------------------------------
-- Consensus table
-- ------------------------------------------------------------------------------

CREATE TABLE "blocks"."consensus" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,
  -- props
  "consensus_type" ConsensusType NOT NULL,
  "chain_config_hash" BYTEA,
  "coins_root" BYTEA,
  "contracts_root" BYTEA,
  "messages_root" BYTEA,
  "transactions_root" BYTEA,
  "signature" BYTEA,
  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
);

CREATE INDEX ON "blocks"."consensus" ("subject");
CREATE INDEX ON "blocks"."consensus" ("block_height");
CREATE INDEX ON "blocks"."consensus" ("producer_address");

ALTER TABLE "blocks"."consensus" ADD FOREIGN KEY ("subject") REFERENCES "blocks"."lookup" ("subject");
ALTER TABLE "blocks"."consensus" ADD FOREIGN KEY ("block_height") REFERENCES "blocks"."data" ("block_height");