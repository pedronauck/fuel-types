// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file pointers.proto (package pointers, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file pointers.proto.
 */
export const file_pointers: GenFile = /*@__PURE__*/
  fileDesc("Cg5wb2ludGVycy5wcm90bxIIcG9pbnRlcnMiJAoMQmxvY2tQb2ludGVyEhQKDGJsb2NrX2hlaWdodBgBIAEoAyJLChJUcmFuc2FjdGlvblBvaW50ZXISFAoMYmxvY2tfaGVpZ2h0GAEgASgDEg0KBXR4X2lkGAIgASgFEhAKCHR4X2luZGV4GAMgASgFIloKDElucHV0UG9pbnRlchIUCgxibG9ja19oZWlnaHQYASABKAMSDQoFdHhfaWQYAiABKAUSEAoIdHhfaW5kZXgYAyABKAUSEwoLaW5wdXRfaW5kZXgYBCABKAUiXAoNT3V0cHV0UG9pbnRlchIUCgxibG9ja19oZWlnaHQYASABKAMSDQoFdHhfaWQYAiABKAUSEAoIdHhfaW5kZXgYAyABKAUSFAoMb3V0cHV0X2luZGV4GAQgASgFIl4KDlJlY2VpcHRQb2ludGVyEhQKDGJsb2NrX2hlaWdodBgBIAEoAxINCgV0eF9pZBgCIAEoBRIQCgh0eF9pbmRleBgDIAEoBRIVCg1yZWNlaXB0X2luZGV4GAQgASgFIlUKC1V0eG9Qb2ludGVyEhQKDGJsb2NrX2hlaWdodBgBIAEoAxINCgV0eF9pZBgCIAEoBRIQCgh0eF9pbmRleBgDIAEoBRIPCgd1dHhvX2lkGAQgASgFYgZwcm90bzM");

/**
 * @generated from message pointers.BlockPointer
 */
export type BlockPointer = Message<"pointers.BlockPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;
};

/**
 * Describes the message pointers.BlockPointer.
 * Use `create(BlockPointerSchema)` to create a new message.
 */
export const BlockPointerSchema: GenMessage<BlockPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 0);

/**
 * @generated from message pointers.TransactionPointer
 */
export type TransactionPointer = Message<"pointers.TransactionPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 tx_id = 2;
   */
  txId: number;

  /**
   * @generated from field: int32 tx_index = 3;
   */
  txIndex: number;
};

/**
 * Describes the message pointers.TransactionPointer.
 * Use `create(TransactionPointerSchema)` to create a new message.
 */
export const TransactionPointerSchema: GenMessage<TransactionPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 1);

/**
 * @generated from message pointers.InputPointer
 */
export type InputPointer = Message<"pointers.InputPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 tx_id = 2;
   */
  txId: number;

  /**
   * @generated from field: int32 tx_index = 3;
   */
  txIndex: number;

  /**
   * @generated from field: int32 input_index = 4;
   */
  inputIndex: number;
};

/**
 * Describes the message pointers.InputPointer.
 * Use `create(InputPointerSchema)` to create a new message.
 */
export const InputPointerSchema: GenMessage<InputPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 2);

/**
 * @generated from message pointers.OutputPointer
 */
export type OutputPointer = Message<"pointers.OutputPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 tx_id = 2;
   */
  txId: number;

  /**
   * @generated from field: int32 tx_index = 3;
   */
  txIndex: number;

  /**
   * @generated from field: int32 output_index = 4;
   */
  outputIndex: number;
};

/**
 * Describes the message pointers.OutputPointer.
 * Use `create(OutputPointerSchema)` to create a new message.
 */
export const OutputPointerSchema: GenMessage<OutputPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 3);

/**
 * @generated from message pointers.ReceiptPointer
 */
export type ReceiptPointer = Message<"pointers.ReceiptPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 tx_id = 2;
   */
  txId: number;

  /**
   * @generated from field: int32 tx_index = 3;
   */
  txIndex: number;

  /**
   * @generated from field: int32 receipt_index = 4;
   */
  receiptIndex: number;
};

/**
 * Describes the message pointers.ReceiptPointer.
 * Use `create(ReceiptPointerSchema)` to create a new message.
 */
export const ReceiptPointerSchema: GenMessage<ReceiptPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 4);

/**
 * @generated from message pointers.UtxoPointer
 */
export type UtxoPointer = Message<"pointers.UtxoPointer"> & {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight: bigint;

  /**
   * @generated from field: int32 tx_id = 2;
   */
  txId: number;

  /**
   * @generated from field: int32 tx_index = 3;
   */
  txIndex: number;

  /**
   * @generated from field: int32 utxo_id = 4;
   */
  utxoId: number;
};

/**
 * Describes the message pointers.UtxoPointer.
 * Use `create(UtxoPointerSchema)` to create a new message.
 */
export const UtxoPointerSchema: GenMessage<UtxoPointer> = /*@__PURE__*/
  messageDesc(file_pointers, 5);

