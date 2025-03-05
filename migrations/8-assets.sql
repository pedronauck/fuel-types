-- ------------------------------------------------------------------------------
-- Assets table
-- ------------------------------------------------------------------------------

CREATE TYPE "AssetType" AS ENUM (
    'COIN',
    'NFT'
);

CREATE TABLE "assets" (
    -- uniques
    "_id" SERIAL PRIMARY KEY,
    "subject" TEXT UNIQUE NOT NULL,
    "block_height" BIGINT NOT NULL,
    "tx_index" INTEGER NOT NULL,
    "tx_id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "asset_id" TEXT NOT NULL,
    "cursor" TEXT UNIQUE NOT NULL, -- {block_height}-{tx_index}-{<generated_id>}
    "type" AssetType NOT NULL,
    
    -- props
    "sub_id" TEXT,
    "name" TEXT,
    "symbol" TEXT,
    "decimals" INTEGER,
    "total_supply" BIGINT,
    "owner" TEXT,
    "metadata" JSONB,
    
    -- timestamps
    "block_time" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW (),

    -- constraints
    FOREIGN KEY ("block_height") REFERENCES "blocks" ("block_height"),
    FOREIGN KEY ("tx_id") REFERENCES "transactions" ("tx_id"),
    FOREIGN KEY ("contract_id") REFERENCES "contracts" ("_id"),
);

CREATE INDEX ON "assets" ("cursor");
CREATE INDEX ON "assets" ("subject");
CREATE INDEX ON "assets" ("block_height");
CREATE INDEX ON "assets" ("tx_id");
CREATE INDEX ON "assets" ("contract_id");
CREATE INDEX ON "assets" ("asset_id");
CREATE INDEX ON "assets" ("type");
CREATE INDEX ON "assets" ("sub_id");
CREATE INDEX ON "assets" ("owner");
CREATE INDEX ON "assets" ("name");
CREATE INDEX ON "assets" ("symbol");
