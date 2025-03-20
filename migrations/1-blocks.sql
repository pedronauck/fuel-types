CREATE TYPE "ConsensusType" AS ENUM ('GENESIS', 'POA_CONSENSUS');

CREATE TABLE "blocks_data" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    FOREIGN KEY ("id") REFERENCES "blocks" ("_id")
);

CREATE INDEX ON "blocks_data" ("id");

-- ------------------------------------------------------------------------------
-- Blocks table
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
    
    "header_application_hash" TEXT NOT NULL,
    "header_consensus_parameters_version" INTEGER NOT NULL,
    "header_da_height" BIGINT NOT NULL,
    "header_event_inbox_root" TEXT NOT NULL,
    "header_message_outbox_root" TEXT NOT NULL,
    "header_message_receipt_count" INTEGER NOT NULL,
    "header_prev_root" TEXT NOT NULL,
    "header_state_transition_bytecode_version" INTEGER NOT NULL,
    "header_time" BIGINT NOT NULL,
    "header_transactions_count" SMALLINT NOT NULL,
    "header_transactions_root" TEXT NOT NULL,
    "header_version" INTEGER NOT NULL,

    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL, -- From block header timestamp
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),
    "block_propagation_ms" TIMESTAMPTZ NOT NULL,

    -- constraints
    FOREIGN KEY ("header_id") REFERENCES "block_headers" ("_id"),
    FOREIGN KEY ("consensus_id") REFERENCES "block_consensus" ("_id")
);

CREATE INDEX ON "blocks" ("block_height");
CREATE INDEX ON "blocks" ("block_id");
CREATE INDEX ON "blocks" ("consensus_id");
CREATE INDEX ON "blocks" ("header_id");
CREATE INDEX ON "blocks" ("subject");

-- ------------------------------------------------------------------------------
-- Consensus table
-- ------------------------------------------------------------------------------
CREATE TABLE "block_consensus" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT UNIQUE NOT NULL,
    -- props
    "chain_config_hash" TEXT,
    "chain_id" BIGINT NOT NULL,
    "coins_root" TEXT,
    "consensus_type" ConsensusType NOT NULL,
    "contracts_root" TEXT,
    "messages_root" TEXT,
    "producer" TEXT NOT NULL,
    "signature" TEXT,
    "transactions_root" TEXT,
    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height")
);

CREATE INDEX ON "block_consensus" ("block_height");
CREATE INDEX ON "block_consensus" ("producer");
CREATE INDEX ON "block_consensus" ("subject");
