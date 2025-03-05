CREATE TYPE "AccountType" AS ENUM (
    'CONTRACT',
    'PREDICATE',
    'SCRIPT'
);

-- ------------------------------------------------------------------------------
-- Predicates table
-- ------------------------------------------------------------------------------

CREATE TABLE "predicates" (
    -- uniques
    "_id" TEXT NOT NULL,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "input_id" INTEGER NOT NULL,
    "address" TEXT UNIQUE NOT NULL,
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{input_index}
    
    --props
    "type" AccountType NOT NULL,
    "data" TEXT NOT NULL,

    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),

    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("input_id") REFERENCES "inputs" ("_id")
);

CREATE INDEX ON "predicates" ("cursor");
CREATE INDEX ON "predicates" ("subject");
CREATE INDEX ON "predicates" ("block_height");
CREATE INDEX ON "predicates" ("tx_id");
CREATE INDEX ON "predicates" ("type");
CREATE INDEX ON "predicates" ("address");
CREATE INDEX ON "predicates" ("input_id");

-- ------------------------------------------------------------------------------
-- Contracts table
-- ------------------------------------------------------------------------------

CREATE TABLE "contracts" (
    -- uniques
    "_id" TEXT NOT NULL,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "output_id" INTEGER NOT NULL,
    "address" TEXT UNIQUE NOT NULL,
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{output_index}

    -- props
    "type" AccountType NOT NULL,
    "data" TEXT NOT NULL,
    "abi" JSONB,

    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),

    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("output_id") REFERENCES "outputs" ("_id"),
);

CREATE INDEX ON "contracts" ("cursor");
CREATE INDEX ON "contracts" ("subject");
CREATE INDEX ON "contracts" ("block_height");
CREATE INDEX ON "contracts" ("tx_id");
CREATE INDEX ON "contracts" ("type");
CREATE INDEX ON "contracts" ("address");
CREATE INDEX ON "contracts" ("output_id");

-- ------------------------------------------------------------------------------
-- Scripts table
-- ------------------------------------------------------------------------------

CREATE TABLE "scripts" (
    -- uniques
    "_id" TEXT NOT NULL,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_id" TEXT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "address" TEXT UNIQUE NOT NULL,
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}

    -- props
    "type" AccountType NOT NULL,
    "data" TEXT NOT NULL,

    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),

    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),  
);

CREATE INDEX ON "scripts" ("cursor");
CREATE INDEX ON "scripts" ("subject");
CREATE INDEX ON "scripts" ("block_height");
CREATE INDEX ON "scripts" ("tx_id");
CREATE INDEX ON "scripts" ("type");
CREATE INDEX ON "scripts" ("address");
