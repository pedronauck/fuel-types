// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file transactions.proto (package transactions, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { TxPointer } from "./pointers_pb";
import { file_pointers } from "./pointers_pb";
import type { Input, InputContract } from "./inputs_pb";
import { file_inputs } from "./inputs_pb";
import type { Output, OutputContract } from "./outputs_pb";
import { file_outputs } from "./outputs_pb";
import { file_receipts } from "./receipts_pb";
import type { Metadata } from "./common_pb";
import { file_common } from "./common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file transactions.proto.
 */
export const file_transactions: GenFile = /*@__PURE__*/
  fileDesc("ChJ0cmFuc2FjdGlvbnMucHJvdG8SDHRyYW5zYWN0aW9ucyKxAQoLVHJhbnNhY3Rpb24SKwoEdHlwZRgBIAEoDjIdLnRyYW5zYWN0aW9ucy5UcmFuc2FjdGlvblR5cGUSJAoHcG9pbnRlchgCIAEoCzITLnBvaW50ZXJzLlR4UG9pbnRlchIrCgRkYXRhGAMgASgLMh0udHJhbnNhY3Rpb25zLlRyYW5zYWN0aW9uRGF0YRIiCghtZXRhZGF0YRgEIAEoCzIQLmNvbW1vbi5NZXRhZGF0YSKgCAoPVHJhbnNhY3Rpb25EYXRhEgoKAmlkGAEgASgJEhgKEHNjcmlwdF9nYXNfbGltaXQYAiABKAMSFwoPaW5wdXRfYXNzZXRfaWRzGAMgAygJEhcKD2lucHV0X2NvbnRyYWN0cxgEIAMoCRItCg5pbnB1dF9jb250cmFjdBgFIAEoCzIVLmlucHV0cy5JbnB1dENvbnRyYWN0Eh0KBmlucHV0cxgGIAMoCzINLmlucHV0cy5JbnB1dBIRCglpc19zY3JpcHQYByABKAgSEQoJaXNfY3JlYXRlGAggASgIEg8KB2lzX21pbnQYCSABKAgSEgoKaXNfdXBncmFkZRgKIAEoCBIRCglpc191cGxvYWQYCyABKAgSDwoHaXNfYmxvYhgMIAEoCBIgCgdvdXRwdXRzGA0gAygLMg8ub3V0cHV0cy5PdXRwdXQSMAoPb3V0cHV0X2NvbnRyYWN0GA4gASgLMhcub3V0cHV0cy5PdXRwdXRDb250cmFjdBITCgttaW50X2Ftb3VudBgPIAEoAxIVCg1taW50X2Fzc2V0X2lkGBAgASgJEhYKDm1pbnRfZ2FzX3ByaWNlGBEgASgDEhUKDXJlY2VpcHRzX3Jvb3QYEiABKAkSLwoGc3RhdHVzGBMgASgOMh8udHJhbnNhY3Rpb25zLlRyYW5zYWN0aW9uU3RhdHVzEhEKCXdpdG5lc3NlcxgUIAMoCRIOCgZzY3JpcHQYFSABKAkSEwoLc2NyaXB0X2RhdGEYFiABKAkSJgoIcG9saWNpZXMYFyABKAsyFC50cmFuc2FjdGlvbnMuUG9saWN5EgwKBHNhbHQYGCABKAkSFQoNc3RvcmFnZV9zbG90cxgZIAMoCRIeChZieXRlY29kZV93aXRuZXNzX2luZGV4GBogASgFEhUKDWJ5dGVjb2RlX3Jvb3QYGyABKAkSGAoQc3Vic2VjdGlvbl9pbmRleBgcIAEoBRIaChJzdWJzZWN0aW9uc19udW1iZXIYHSABKAUSEQoJcHJvb2Zfc2V0GB4gAygJEhcKD3VwZ3JhZGVfcHVycG9zZRgfIAEoBRIPCgdibG9iX2lkGCAgASgJEhAKCG1hdHVyaXR5GCEgASgFEhMKC3BvbGljeV90eXBlGCIgASgFEhMKC3Jhd19wYXlsb2FkGCMgASgJEhUKDXNjcmlwdF9sZW5ndGgYJCABKAMSGgoSc2NyaXB0X2RhdGFfbGVuZ3RoGCUgASgDEhsKE3N0b3JhZ2Vfc2xvdHNfY291bnQYJiABKAMSFwoPcHJvb2Zfc2V0X2NvdW50GCcgASgFEhcKD3dpdG5lc3Nlc19jb3VudBgoIAEoBRIUCgxpbnB1dHNfY291bnQYKSABKAUSFQoNb3V0cHV0c19jb3VudBgqIAEoBSJJCgtTdG9yYWdlU2xvdBIPCgdzdWJqZWN0GAEgASgJEg0KBXR4X2lkGAIgASgJEgsKA2tleRgDIAEoCRINCgV2YWx1ZRgEIAEoCSJcCgdXaXRuZXNzEg8KB3N1YmplY3QYASABKAkSDQoFdHhfaWQYAiABKAkSFAoMd2l0bmVzc19kYXRhGAMgASgJEhsKE3dpdG5lc3NfZGF0YV9sZW5ndGgYBCABKAUiPgoIUHJvb2ZTZXQSDwoHc3ViamVjdBgBIAEoCRINCgV0eF9pZBgCIAEoCRISCgpwcm9vZl9oYXNoGAMgASgJIl4KBlBvbGljeRIPCgdzdWJqZWN0GAEgASgJEg0KBXR4X2lkGAIgASgJEiYKBHR5cGUYAyABKA4yGC50cmFuc2FjdGlvbnMuUG9saWN5VHlwZRIMCgRkYXRhGAQgASgDKnQKD1RyYW5zYWN0aW9uVHlwZRIcChhVTktOT1dOX1RSQU5TQUNUSU9OX1RZUEUQABIKCgZTQ1JJUFQQARIKCgZDUkVBVEUQAhIICgRNSU5UEAMSCwoHVVBHUkFERRAEEgoKBlVQTE9BRBAFEggKBEJMT0IQBip3ChFUcmFuc2FjdGlvblN0YXR1cxIeChpVTktOT1dOX1RSQU5TQUNUSU9OX1NUQVRVUxAAEgoKBkZBSUxFRBABEg0KCVNVQk1JVFRFRBACEhAKDFNRVUVFWkVEX09VVBADEgsKB1NVQ0NFU1MQBBIICgROT05FEAUqXAoKUG9saWN5VHlwZRIXChNVTktOT1dOX1BPTElDWV9UWVBFEAASBwoDVElQEAESEQoNV0lUTkVTU19MSU1JVBACEgwKCE1BVFVSSVRZEAMSCwoHTUFYX0ZFRRAEYgZwcm90bzM", [file_pointers, file_inputs, file_outputs, file_receipts, file_common]);

/**
 * @generated from message transactions.Transaction
 */
export type Transaction = Message<"transactions.Transaction"> & {
  /**
   * @generated from field: transactions.TransactionType type = 1;
   */
  type: TransactionType;

  /**
   * @generated from field: pointers.TxPointer pointer = 2;
   */
  pointer?: TxPointer;

  /**
   * @generated from field: transactions.TransactionData data = 3;
   */
  data?: TransactionData;

  /**
   * @generated from field: common.Metadata metadata = 4;
   */
  metadata?: Metadata;
};

/**
 * Describes the message transactions.Transaction.
 * Use `create(TransactionSchema)` to create a new message.
 */
export const TransactionSchema: GenMessage<Transaction> = /*@__PURE__*/
  messageDesc(file_transactions, 0);

/**
 * @generated from message transactions.TransactionData
 */
export type TransactionData = Message<"transactions.TransactionData"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: int64 script_gas_limit = 2;
   */
  scriptGasLimit: bigint;

  /**
   * @generated from field: repeated string input_asset_ids = 3;
   */
  inputAssetIds: string[];

  /**
   * @generated from field: repeated string input_contracts = 4;
   */
  inputContracts: string[];

  /**
   * @generated from field: inputs.InputContract input_contract = 5;
   */
  inputContract?: InputContract;

  /**
   * @generated from field: repeated inputs.Input inputs = 6;
   */
  inputs: Input[];

  /**
   * @generated from field: bool is_script = 7;
   */
  isScript: boolean;

  /**
   * @generated from field: bool is_create = 8;
   */
  isCreate: boolean;

  /**
   * @generated from field: bool is_mint = 9;
   */
  isMint: boolean;

  /**
   * @generated from field: bool is_upgrade = 10;
   */
  isUpgrade: boolean;

  /**
   * @generated from field: bool is_upload = 11;
   */
  isUpload: boolean;

  /**
   * @generated from field: bool is_blob = 12;
   */
  isBlob: boolean;

  /**
   * @generated from field: repeated outputs.Output outputs = 13;
   */
  outputs: Output[];

  /**
   * @generated from field: outputs.OutputContract output_contract = 14;
   */
  outputContract?: OutputContract;

  /**
   * @generated from field: int64 mint_amount = 15;
   */
  mintAmount: bigint;

  /**
   * @generated from field: string mint_asset_id = 16;
   */
  mintAssetId: string;

  /**
   * @generated from field: int64 mint_gas_price = 17;
   */
  mintGasPrice: bigint;

  /**
   * @generated from field: string receipts_root = 18;
   */
  receiptsRoot: string;

  /**
   * @generated from field: transactions.TransactionStatus status = 19;
   */
  status: TransactionStatus;

  /**
   * @generated from field: repeated string witnesses = 20;
   */
  witnesses: string[];

  /**
   * @generated from field: string script = 21;
   */
  script: string;

  /**
   * @generated from field: string script_data = 22;
   */
  scriptData: string;

  /**
   * @generated from field: transactions.Policy policies = 23;
   */
  policies?: Policy;

  /**
   * @generated from field: string salt = 24;
   */
  salt: string;

  /**
   * @generated from field: repeated string storage_slots = 25;
   */
  storageSlots: string[];

  /**
   * @generated from field: int32 bytecode_witness_index = 26;
   */
  bytecodeWitnessIndex: number;

  /**
   * @generated from field: string bytecode_root = 27;
   */
  bytecodeRoot: string;

  /**
   * @generated from field: int32 subsection_index = 28;
   */
  subsectionIndex: number;

  /**
   * @generated from field: int32 subsections_number = 29;
   */
  subsectionsNumber: number;

  /**
   * @generated from field: repeated string proof_set = 30;
   */
  proofSet: string[];

  /**
   * @generated from field: int32 upgrade_purpose = 31;
   */
  upgradePurpose: number;

  /**
   * @generated from field: string blob_id = 32;
   */
  blobId: string;

  /**
   * Extra fields (not in fuel-core)
   *
   * @generated from field: int32 maturity = 33;
   */
  maturity: number;

  /**
   * @generated from field: int32 policy_type = 34;
   */
  policyType: number;

  /**
   * @generated from field: string raw_payload = 35;
   */
  rawPayload: string;

  /**
   * @generated from field: int64 script_length = 36;
   */
  scriptLength: bigint;

  /**
   * @generated from field: int64 script_data_length = 37;
   */
  scriptDataLength: bigint;

  /**
   * @generated from field: int64 storage_slots_count = 38;
   */
  storageSlotsCount: bigint;

  /**
   * @generated from field: int32 proof_set_count = 39;
   */
  proofSetCount: number;

  /**
   * @generated from field: int32 witnesses_count = 40;
   */
  witnessesCount: number;

  /**
   * @generated from field: int32 inputs_count = 41;
   */
  inputsCount: number;

  /**
   * @generated from field: int32 outputs_count = 42;
   */
  outputsCount: number;
};

/**
 * Describes the message transactions.TransactionData.
 * Use `create(TransactionDataSchema)` to create a new message.
 */
export const TransactionDataSchema: GenMessage<TransactionData> = /*@__PURE__*/
  messageDesc(file_transactions, 1);

/**
 * @generated from message transactions.StorageSlot
 */
export type StorageSlot = Message<"transactions.StorageSlot"> & {
  /**
   * @generated from field: string subject = 1;
   */
  subject: string;

  /**
   * @generated from field: string tx_id = 2;
   */
  txId: string;

  /**
   * @generated from field: string key = 3;
   */
  key: string;

  /**
   * @generated from field: string value = 4;
   */
  value: string;
};

/**
 * Describes the message transactions.StorageSlot.
 * Use `create(StorageSlotSchema)` to create a new message.
 */
export const StorageSlotSchema: GenMessage<StorageSlot> = /*@__PURE__*/
  messageDesc(file_transactions, 2);

/**
 * @generated from message transactions.Witness
 */
export type Witness = Message<"transactions.Witness"> & {
  /**
   * @generated from field: string subject = 1;
   */
  subject: string;

  /**
   * @generated from field: string tx_id = 2;
   */
  txId: string;

  /**
   * @generated from field: string witness_data = 3;
   */
  witnessData: string;

  /**
   * @generated from field: int32 witness_data_length = 4;
   */
  witnessDataLength: number;
};

/**
 * Describes the message transactions.Witness.
 * Use `create(WitnessSchema)` to create a new message.
 */
export const WitnessSchema: GenMessage<Witness> = /*@__PURE__*/
  messageDesc(file_transactions, 3);

/**
 * @generated from message transactions.ProofSet
 */
export type ProofSet = Message<"transactions.ProofSet"> & {
  /**
   * @generated from field: string subject = 1;
   */
  subject: string;

  /**
   * @generated from field: string tx_id = 2;
   */
  txId: string;

  /**
   * @generated from field: string proof_hash = 3;
   */
  proofHash: string;
};

/**
 * Describes the message transactions.ProofSet.
 * Use `create(ProofSetSchema)` to create a new message.
 */
export const ProofSetSchema: GenMessage<ProofSet> = /*@__PURE__*/
  messageDesc(file_transactions, 4);

/**
 * @generated from message transactions.Policy
 */
export type Policy = Message<"transactions.Policy"> & {
  /**
   * @generated from field: string subject = 1;
   */
  subject: string;

  /**
   * @generated from field: string tx_id = 2;
   */
  txId: string;

  /**
   * @generated from field: transactions.PolicyType type = 3;
   */
  type: PolicyType;

  /**
   * @generated from field: int64 data = 4;
   */
  data: bigint;
};

/**
 * Describes the message transactions.Policy.
 * Use `create(PolicySchema)` to create a new message.
 */
export const PolicySchema: GenMessage<Policy> = /*@__PURE__*/
  messageDesc(file_transactions, 5);

/**
 * @generated from enum transactions.TransactionType
 */
export enum TransactionType {
  /**
   * @generated from enum value: UNKNOWN_TRANSACTION_TYPE = 0;
   */
  UNKNOWN_TRANSACTION_TYPE = 0,

  /**
   * @generated from enum value: SCRIPT = 1;
   */
  SCRIPT = 1,

  /**
   * @generated from enum value: CREATE = 2;
   */
  CREATE = 2,

  /**
   * @generated from enum value: MINT = 3;
   */
  MINT = 3,

  /**
   * @generated from enum value: UPGRADE = 4;
   */
  UPGRADE = 4,

  /**
   * @generated from enum value: UPLOAD = 5;
   */
  UPLOAD = 5,

  /**
   * @generated from enum value: BLOB = 6;
   */
  BLOB = 6,
}

/**
 * Describes the enum transactions.TransactionType.
 */
export const TransactionTypeSchema: GenEnum<TransactionType> = /*@__PURE__*/
  enumDesc(file_transactions, 0);

/**
 * @generated from enum transactions.TransactionStatus
 */
export enum TransactionStatus {
  /**
   * @generated from enum value: UNKNOWN_TRANSACTION_STATUS = 0;
   */
  UNKNOWN_TRANSACTION_STATUS = 0,

  /**
   * @generated from enum value: FAILED = 1;
   */
  FAILED = 1,

  /**
   * @generated from enum value: SUBMITTED = 2;
   */
  SUBMITTED = 2,

  /**
   * @generated from enum value: SQUEEZED_OUT = 3;
   */
  SQUEEZED_OUT = 3,

  /**
   * @generated from enum value: SUCCESS = 4;
   */
  SUCCESS = 4,

  /**
   * @generated from enum value: NONE = 5;
   */
  NONE = 5,
}

/**
 * Describes the enum transactions.TransactionStatus.
 */
export const TransactionStatusSchema: GenEnum<TransactionStatus> = /*@__PURE__*/
  enumDesc(file_transactions, 1);

/**
 * @generated from enum transactions.PolicyType
 */
export enum PolicyType {
  /**
   * @generated from enum value: UNKNOWN_POLICY_TYPE = 0;
   */
  UNKNOWN_POLICY_TYPE = 0,

  /**
   * @generated from enum value: TIP = 1;
   */
  TIP = 1,

  /**
   * @generated from enum value: WITNESS_LIMIT = 2;
   */
  WITNESS_LIMIT = 2,

  /**
   * @generated from enum value: MATURITY = 3;
   */
  MATURITY = 3,

  /**
   * @generated from enum value: MAX_FEE = 4;
   */
  MAX_FEE = 4,
}

/**
 * Describes the enum transactions.PolicyType.
 */
export const PolicyTypeSchema: GenEnum<PolicyType> = /*@__PURE__*/
  enumDesc(file_transactions, 2);

