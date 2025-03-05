// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file blocks.proto (package blocks, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BlockPointer } from "./pointers_pb";
import { file_pointers } from "./pointers_pb";
import type { Metadata } from "./common_pb";
import { file_common } from "./common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file blocks.proto.
 */
export const file_blocks: GenFile = /*@__PURE__*/
  fileDesc("CgxibG9ja3MucHJvdG8SBmJsb2NrcyL2AQoFQmxvY2sSFAoMYmxvY2tfaGVpZ2h0GAEgASgDEhAKCGJsb2NrX2lkGAIgASgFEg8KB3ZlcnNpb24YAyABKAkSIwoGaGVhZGVyGAQgASgLMhMuYmxvY2tzLkJsb2NrSGVhZGVyEikKCWNvbnNlbnN1cxgFIAEoCzIWLmJsb2Nrcy5CbG9ja0NvbnNlbnN1cxIXCg90cmFuc2FjdGlvbl9pZHMYBiADKAwSIgoIbWV0YWRhdGEYByABKAsyEC5jb21tb24uTWV0YWRhdGESJwoHcG9pbnRlchgIIAEoCzIWLnBvaW50ZXJzLkJsb2NrUG9pbnRlciLgAgoLQmxvY2tIZWFkZXISFAoMYmxvY2tfaGVpZ2h0GAEgASgDEhgKEGFwcGxpY2F0aW9uX2hhc2gYAiABKAwSJAocY29uc2Vuc3VzX3BhcmFtZXRlcnNfdmVyc2lvbhgDIAEoBRIRCglkYV9oZWlnaHQYBCABKAMSGAoQZXZlbnRfaW5ib3hfcm9vdBgFIAEoDBIbChNtZXNzYWdlX291dGJveF9yb290GAYgASgMEh0KFW1lc3NhZ2VfcmVjZWlwdF9jb3VudBgHIAEoBRIRCglwcmV2X3Jvb3QYCCABKAwSKQohc3RhdGVfdHJhbnNpdGlvbl9ieXRlY29kZV92ZXJzaW9uGAkgASgFEgwKBHRpbWUYCiABKAMSGgoSdHJhbnNhY3Rpb25zX2NvdW50GAsgASgFEhkKEXRyYW5zYWN0aW9uc19yb290GAwgASgMEg8KB3ZlcnNpb24YDSABKAUihQIKDkJsb2NrQ29uc2Vuc3VzEhAKCGNoYWluX2lkGAEgASgDEhAKCHByb2R1Y2VyGAIgASgMEhQKDGJsb2NrX2hlaWdodBgDIAEoAxItCg5jb25zZW5zdXNfdHlwZRgEIAEoDjIVLmJsb2Nrcy5Db25zZW5zdXNUeXBlEhkKEWNoYWluX2NvbmZpZ19oYXNoGAUgASgMEhIKCmNvaW5zX3Jvb3QYBiABKAwSFgoOY29udHJhY3RzX3Jvb3QYByABKAwSFQoNbWVzc2FnZXNfcm9vdBgIIAEoDBIZChF0cmFuc2FjdGlvbnNfcm9vdBgJIAEoDBIRCglzaWduYXR1cmUYCiABKAwqSwoNQ29uc2Vuc3VzVHlwZRIaChZVTktOT1dOX0NPTlNFTlNVU19UWVBFEAASCwoHR0VORVNJUxABEhEKDVBPQV9DT05TRU5TVVMQAmIGcHJvdG8z", [file_pointers, file_common]);

/**
 * @generated from message blocks.Block
 */
export type Block = Message<"blocks.Block"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 block_id = 2;
   */
  blockId: number;

  /**
   * @generated from field: string version = 3;
   */
  version: string;

  /**
   * Relationship fields
   *
   * @generated from field: blocks.BlockHeader header = 4;
   */
  header?: BlockHeader;

  /**
   * @generated from field: blocks.BlockConsensus consensus = 5;
   */
  consensus?: BlockConsensus;

  /**
   * @generated from field: repeated bytes transaction_ids = 6;
   */
  transactionIds: Uint8Array[];

  /**
   * Metadata
   *
   * @generated from field: common.Metadata metadata = 7;
   */
  metadata?: Metadata;

  /**
   * @generated from field: pointers.BlockPointer pointer = 8;
   */
  pointer?: BlockPointer;
};

/**
 * Describes the message blocks.Block.
 * Use `create(BlockSchema)` to create a new message.
 */
export const BlockSchema: GenMessage<Block> = /*@__PURE__*/
  messageDesc(file_blocks, 0);

/**
 * @generated from message blocks.BlockHeader
 */
export type BlockHeader = Message<"blocks.BlockHeader"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: bytes application_hash = 2;
   */
  applicationHash: Uint8Array;

  /**
   * @generated from field: int32 consensus_parameters_version = 3;
   */
  consensusParametersVersion: number;

  /**
   * @generated from field: int64 da_height = 4;
   */
  daHeight: bigint;

  /**
   * @generated from field: bytes event_inbox_root = 5;
   */
  eventInboxRoot: Uint8Array;

  /**
   * @generated from field: bytes message_outbox_root = 6;
   */
  messageOutboxRoot: Uint8Array;

  /**
   * @generated from field: int32 message_receipt_count = 7;
   */
  messageReceiptCount: number;

  /**
   * @generated from field: bytes prev_root = 8;
   */
  prevRoot: Uint8Array;

  /**
   * @generated from field: int32 state_transition_bytecode_version = 9;
   */
  stateTransitionBytecodeVersion: number;

  /**
   * @generated from field: int64 time = 10;
   */
  time: bigint;

  /**
   * @generated from field: int32 transactions_count = 11;
   */
  transactionsCount: number;

  /**
   * @generated from field: bytes transactions_root = 12;
   */
  transactionsRoot: Uint8Array;

  /**
   * @generated from field: int32 version = 13;
   */
  version: number;
};

/**
 * Describes the message blocks.BlockHeader.
 * Use `create(BlockHeaderSchema)` to create a new message.
 */
export const BlockHeaderSchema: GenMessage<BlockHeader> = /*@__PURE__*/
  messageDesc(file_blocks, 1);

/**
 * @generated from message blocks.BlockConsensus
 */
export type BlockConsensus = Message<"blocks.BlockConsensus"> & {
  /**
   * @generated from field: int64 chain_id = 1;
   */
  chainId: bigint;

  /**
   * @generated from field: bytes producer = 2;
   */
  producer: Uint8Array;

  /**
   * @generated from field: int64 block_height = 3;
   */
  blockHeight: bigint;

  /**
   * @generated from field: blocks.ConsensusType consensus_type = 4;
   */
  consensusType: ConsensusType;

  /**
   * @generated from field: bytes chain_config_hash = 5;
   */
  chainConfigHash: Uint8Array;

  /**
   * @generated from field: bytes coins_root = 6;
   */
  coinsRoot: Uint8Array;

  /**
   * @generated from field: bytes contracts_root = 7;
   */
  contractsRoot: Uint8Array;

  /**
   * @generated from field: bytes messages_root = 8;
   */
  messagesRoot: Uint8Array;

  /**
   * @generated from field: bytes transactions_root = 9;
   */
  transactionsRoot: Uint8Array;

  /**
   * @generated from field: bytes signature = 10;
   */
  signature: Uint8Array;
};

/**
 * Describes the message blocks.BlockConsensus.
 * Use `create(BlockConsensusSchema)` to create a new message.
 */
export const BlockConsensusSchema: GenMessage<BlockConsensus> = /*@__PURE__*/
  messageDesc(file_blocks, 2);

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

