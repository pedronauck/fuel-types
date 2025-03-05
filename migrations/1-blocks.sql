CREATE TYPE "ConsensusType" AS ENUM (
  'GENESIS',
  'POA_CONSENSUS'
);

-- ------------------------------------------------------------------------------
-- Blocks table (renamed from data)
-- ------------------------------------------------------------------------------

CREATE TABLE "blocks" (
  -- uniques  
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,

  -- props
  "block_id" INTEGER NOT NULL,
  "consensus_id" INTEGER,
  "header_id" INTEGER,
  "version" VARCHAR(10) NOT NULL,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("header_id") REFERENCES "headers" ("_id"),
  FOREIGN KEY ("consensus_id") REFERENCES "consensus" ("_id")
);

CREATE INDEX ON "blocks" ("block_height");
CREATE INDEX ON "blocks" ("block_id");
CREATE INDEX ON "blocks" ("consensus_id");
CREATE INDEX ON "blocks" ("header_id");
CREATE INDEX ON "blocks" ("subject");

-- ------------------------------------------------------------------------------
-- Headers table
-- ------------------------------------------------------------------------------

CREATE TABLE "headers" (
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
  
  -- constraints
  FOREIGN KEY ("subject") REFERENCES "blocks" ("subject"),
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "headers" ("block_height");
CREATE INDEX ON "headers" ("da_height");
CREATE INDEX ON "headers" ("subject");

-- ------------------------------------------------------------------------------
-- Consensus table
-- ------------------------------------------------------------------------------

CREATE TABLE "consensus" (
  -- uniques
  "_id" SERIAL PRIMARY KEY,
  "subject" TEXT UNIQUE NOT NULL,
  "block_height" BIGINT UNIQUE NOT NULL,

  -- props
  "chain_config_hash" BYTEA,
  "chain_id" BIGINT NOT NULL,
  "coins_root" BYTEA,
  "consensus_type" ConsensusType NOT NULL,
  "contracts_root" BYTEA,
  "messages_root" BYTEA,
  "producer" BYTEA NOT NULL,
  "signature" BYTEA,
  "transactions_root" BYTEA,

  -- timestamps
  "created_at" TIMESTAMP NOT NULL, -- From block header timestamp
  "published_at" TIMESTAMP NOT NULL
  
  -- constraints
  FOREIGN KEY ("subject") REFERENCES "blocks" ("subject"),
  FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "consensus" ("block_height");
CREATE INDEX ON "consensus" ("producer");
CREATE INDEX ON "consensus" ("subject");