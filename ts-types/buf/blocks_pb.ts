// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file blocks.proto (package blocks, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BlockPointer } from "./pointers_pb";
import { file_pointers } from "./pointers_pb";
import type { BlockMetadata } from "./common_pb";
import { file_common } from "./common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file blocks.proto.
 */
export const file_blocks: GenFile = /*@__PURE__*/
  fileDesc("CgxibG9ja3MucHJvdG8SBmJsb2NrcyJ6CgVCbG9jaxInCgdwb2ludGVyGAEgASgLMhYucG9pbnRlcnMuQmxvY2tQb2ludGVyEh8KBGRhdGEYAiABKAsyES5ibG9ja3MuQmxvY2tEYXRhEicKCG1ldGFkYXRhGAMgASgLMhUuY29tbW9uLkJsb2NrTWV0YWRhdGEi/gEKCUJsb2NrRGF0YRIPCgd2ZXJzaW9uGAEgASgJEgoKAmlkGAIgASgFEiMKBmhlYWRlchgEIAEoCzITLmJsb2Nrcy5CbG9ja0hlYWRlchItCg5jb25zZW5zdXNfdHlwZRgFIAEoDjIVLmJsb2Nrcy5Db25zZW5zdXNUeXBlEjAKB2dlbmVzaXMYBiABKAsyHS5ibG9ja3MuQmxvY2tDb25zZW5zdXNHZW5lc2lzSAASKAoDcG9hGAcgASgLMhkuYmxvY2tzLkJsb2NrQ29uc2Vuc3VzUG9hSAASFwoPdHJhbnNhY3Rpb25faWRzGAggAygJQgsKCWNvbnNlbnN1cyKKAwoLQmxvY2tIZWFkZXISDwoHdmVyc2lvbhgBIAEoCRIKCgJpZBgCIAEoCRIQCghjaGFpbl9pZBgDIAEoAxIQCghwcm9kdWNlchgEIAEoCRIOCgZoZWlnaHQYBSABKAMSEQoJZGFfaGVpZ2h0GAYgASgDEiQKHGNvbnNlbnN1c19wYXJhbWV0ZXJzX3ZlcnNpb24YByABKAUSKQohc3RhdGVfdHJhbnNpdGlvbl9ieXRlY29kZV92ZXJzaW9uGAggASgFEhoKEnRyYW5zYWN0aW9uc19jb3VudBgJIAEoBRIdChVtZXNzYWdlX3JlY2VpcHRfY291bnQYCiABKAUSGQoRdHJhbnNhY3Rpb25zX3Jvb3QYCyABKAkSGwoTbWVzc2FnZV9vdXRib3hfcm9vdBgMIAEoCRIYChBldmVudF9pbmJveF9yb290GA0gASgJEhEKCXByZXZfcm9vdBgOIAEoCRIMCgR0aW1lGA8gASgDEhgKEGFwcGxpY2F0aW9uX2hhc2gYECABKAkikAEKFUJsb2NrQ29uc2Vuc3VzR2VuZXNpcxIZChFjaGFpbl9jb25maWdfaGFzaBgBIAEoCRISCgpjb2luc19yb290GAIgASgJEhYKDmNvbnRyYWN0c19yb290GAMgASgJEhUKDW1lc3NhZ2VzX3Jvb3QYBCABKAkSGQoRdHJhbnNhY3Rpb25zX3Jvb3QYBSABKAkiJgoRQmxvY2tDb25zZW5zdXNQb2ESEQoJc2lnbmF0dXJlGAEgASgJKksKDUNvbnNlbnN1c1R5cGUSGgoWVU5LTk9XTl9DT05TRU5TVVNfVFlQRRAAEgsKB0dFTkVTSVMQARIRCg1QT0FfQ09OU0VOU1VTEAJiBnByb3RvMw", [file_pointers, file_common]);

/**
 * @generated from message blocks.Block
 */
export type Block = Message<"blocks.Block"> & {
  /**
   * @generated from field: pointers.BlockPointer pointer = 1;
   */
  pointer?: BlockPointer;

  /**
   * @generated from field: blocks.BlockData data = 2;
   */
  data?: BlockData;

  /**
   * @generated from field: common.BlockMetadata metadata = 3;
   */
  metadata?: BlockMetadata;
};

/**
 * Describes the message blocks.Block.
 * Use `create(BlockSchema)` to create a new message.
 */
export const BlockSchema: GenMessage<Block> = /*@__PURE__*/
  messageDesc(file_blocks, 0);

/**
 * @generated from message blocks.BlockData
 */
export type BlockData = Message<"blocks.BlockData"> & {
  /**
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * @generated from field: int32 id = 2;
   */
  id: number;

  /**
   * @generated from field: blocks.BlockHeader header = 4;
   */
  header?: BlockHeader;

  /**
   * @generated from field: blocks.ConsensusType consensus_type = 5;
   */
  consensusType: ConsensusType;

  /**
   * @generated from oneof blocks.BlockData.consensus
   */
  consensus: {
    /**
     * @generated from field: blocks.BlockConsensusGenesis genesis = 6;
     */
    value: BlockConsensusGenesis;
    case: "genesis";
  } | {
    /**
     * @generated from field: blocks.BlockConsensusPoa poa = 7;
     */
    value: BlockConsensusPoa;
    case: "poa";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: repeated string transaction_ids = 8;
   */
  transactionIds: string[];
};

/**
 * Describes the message blocks.BlockData.
 * Use `create(BlockDataSchema)` to create a new message.
 */
export const BlockDataSchema: GenMessage<BlockData> = /*@__PURE__*/
  messageDesc(file_blocks, 1);

/**
 * @generated from message blocks.BlockHeader
 */
export type BlockHeader = Message<"blocks.BlockHeader"> & {
  /**
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: int64 chain_id = 3;
   */
  chainId: bigint;

  /**
   * @generated from field: string producer = 4;
   */
  producer: string;

  /**
   * @generated from field: int64 height = 5;
   */
  height: bigint;

  /**
   * @generated from field: int64 da_height = 6;
   */
  daHeight: bigint;

  /**
   * @generated from field: int32 consensus_parameters_version = 7;
   */
  consensusParametersVersion: number;

  /**
   * @generated from field: int32 state_transition_bytecode_version = 8;
   */
  stateTransitionBytecodeVersion: number;

  /**
   * @generated from field: int32 transactions_count = 9;
   */
  transactionsCount: number;

  /**
   * @generated from field: int32 message_receipt_count = 10;
   */
  messageReceiptCount: number;

  /**
   * @generated from field: string transactions_root = 11;
   */
  transactionsRoot: string;

  /**
   * @generated from field: string message_outbox_root = 12;
   */
  messageOutboxRoot: string;

  /**
   * @generated from field: string event_inbox_root = 13;
   */
  eventInboxRoot: string;

  /**
   * @generated from field: string prev_root = 14;
   */
  prevRoot: string;

  /**
   * @generated from field: int64 time = 15;
   */
  time: bigint;

  /**
   * @generated from field: string application_hash = 16;
   */
  applicationHash: string;
};

/**
 * Describes the message blocks.BlockHeader.
 * Use `create(BlockHeaderSchema)` to create a new message.
 */
export const BlockHeaderSchema: GenMessage<BlockHeader> = /*@__PURE__*/
  messageDesc(file_blocks, 2);

/**
 * @generated from message blocks.BlockConsensusGenesis
 */
export type BlockConsensusGenesis = Message<"blocks.BlockConsensusGenesis"> & {
  /**
   * @generated from field: string chain_config_hash = 1;
   */
  chainConfigHash: string;

  /**
   * @generated from field: string coins_root = 2;
   */
  coinsRoot: string;

  /**
   * @generated from field: string contracts_root = 3;
   */
  contractsRoot: string;

  /**
   * @generated from field: string messages_root = 4;
   */
  messagesRoot: string;

  /**
   * @generated from field: string transactions_root = 5;
   */
  transactionsRoot: string;
};

/**
 * Describes the message blocks.BlockConsensusGenesis.
 * Use `create(BlockConsensusGenesisSchema)` to create a new message.
 */
export const BlockConsensusGenesisSchema: GenMessage<BlockConsensusGenesis> = /*@__PURE__*/
  messageDesc(file_blocks, 3);

/**
 * @generated from message blocks.BlockConsensusPoa
 */
export type BlockConsensusPoa = Message<"blocks.BlockConsensusPoa"> & {
  /**
   * @generated from field: string signature = 1;
   */
  signature: string;
};

/**
 * Describes the message blocks.BlockConsensusPoa.
 * Use `create(BlockConsensusPoaSchema)` to create a new message.
 */
export const BlockConsensusPoaSchema: GenMessage<BlockConsensusPoa> = /*@__PURE__*/
  messageDesc(file_blocks, 4);

/**
 * @generated from enum blocks.ConsensusType
 */
export enum ConsensusType {
  /**
   * @generated from enum value: UNKNOWN_CONSENSUS_TYPE = 0;
   */
  UNKNOWN_CONSENSUS_TYPE = 0,

  /**
   * @generated from enum value: GENESIS = 1;
   */
  GENESIS = 1,

  /**
   * @generated from enum value: POA_CONSENSUS = 2;
   */
  POA_CONSENSUS = 2,
}

/**
 * Describes the enum blocks.ConsensusType.
 */
export const ConsensusTypeSchema: GenEnum<ConsensusType> = /*@__PURE__*/
  enumDesc(file_blocks, 0);

