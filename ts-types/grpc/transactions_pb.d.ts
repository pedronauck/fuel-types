// package: transactions
// file: transactions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as pointers_pb from "./pointers_pb";
import * as inputs_pb from "./inputs_pb";
import * as outputs_pb from "./outputs_pb";
import * as receipts_pb from "./receipts_pb";

export class Transaction extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Transaction;
    getBlockHeight(): number;
    setBlockHeight(value: number): Transaction;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Transaction;
    getTxIndex(): number;
    setTxIndex(value: number): Transaction;
    getType(): TransactionType;
    setType(value: TransactionType): Transaction;
    getStatus(): TransactionStatus;
    setStatus(value: TransactionStatus): Transaction;
    getRoot(): Uint8Array | string;
    getRoot_asU8(): Uint8Array;
    getRoot_asB64(): string;
    setRoot(value: Uint8Array | string): Transaction;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): Transaction;
    getBlobId(): Uint8Array | string;
    getBlobId_asU8(): Uint8Array;
    getBlobId_asB64(): string;
    setBlobId(value: Uint8Array | string): Transaction;
    clearInputAssetIdsList(): void;
    getInputAssetIdsList(): Array<Uint8Array | string>;
    getInputAssetIdsList_asU8(): Array<Uint8Array>;
    getInputAssetIdsList_asB64(): Array<string>;
    setInputAssetIdsList(value: Array<Uint8Array | string>): Transaction;
    addInputAssetIds(value: Uint8Array | string, index?: number): Uint8Array | string;
    getIsCreate(): boolean;
    setIsCreate(value: boolean): Transaction;
    getIsMint(): boolean;
    setIsMint(value: boolean): Transaction;
    getIsScript(): boolean;
    setIsScript(value: boolean): Transaction;
    getIsUpgrade(): boolean;
    setIsUpgrade(value: boolean): Transaction;
    getIsUpload(): boolean;
    setIsUpload(value: boolean): Transaction;
    getMaturity(): number;
    setMaturity(value: number): Transaction;
    getMintAmount(): number;
    setMintAmount(value: number): Transaction;
    getMintAssetId(): Uint8Array | string;
    getMintAssetId_asU8(): Uint8Array;
    getMintAssetId_asB64(): string;
    setMintAssetId(value: Uint8Array | string): Transaction;
    getMintGasPrice(): number;
    setMintGasPrice(value: number): Transaction;
    getPolicyType(): number;
    setPolicyType(value: number): Transaction;
    getRawPayload(): Uint8Array | string;
    getRawPayload_asU8(): Uint8Array;
    getRawPayload_asB64(): string;
    setRawPayload(value: Uint8Array | string): Transaction;
    getReceiptsRoot(): Uint8Array | string;
    getReceiptsRoot_asU8(): Uint8Array;
    getReceiptsRoot_asB64(): string;
    setReceiptsRoot(value: Uint8Array | string): Transaction;
    getSalt(): Uint8Array | string;
    getSalt_asU8(): Uint8Array;
    getSalt_asB64(): string;
    setSalt(value: Uint8Array | string): Transaction;
    getScript(): Uint8Array | string;
    getScript_asU8(): Uint8Array;
    getScript_asB64(): string;
    setScript(value: Uint8Array | string): Transaction;
    getScriptLength(): number;
    setScriptLength(value: number): Transaction;
    getScriptData(): Uint8Array | string;
    getScriptData_asU8(): Uint8Array;
    getScriptData_asB64(): string;
    setScriptData(value: Uint8Array | string): Transaction;
    getScriptDataLength(): number;
    setScriptDataLength(value: number): Transaction;
    getScriptGasLimit(): number;
    setScriptGasLimit(value: number): Transaction;
    getSubsectionIndex(): number;
    setSubsectionIndex(value: number): Transaction;
    getSubsectionsNumber(): number;
    setSubsectionsNumber(value: number): Transaction;
    getUpgradePurpose(): number;
    setUpgradePurpose(value: number): Transaction;
    getStorageSlotsCount(): number;
    setStorageSlotsCount(value: number): Transaction;
    getProofSetCount(): number;
    setProofSetCount(value: number): Transaction;
    getWitnessesCount(): number;
    setWitnessesCount(value: number): Transaction;
    getInputsCount(): number;
    setInputsCount(value: number): Transaction;
    getOutputsCount(): number;
    setOutputsCount(value: number): Transaction;

    hasInputContract(): boolean;
    clearInputContract(): void;
    getInputContract(): inputs_pb.InputContract | undefined;
    setInputContract(value?: inputs_pb.InputContract): Transaction;
    clearInputContractsList(): void;
    getInputContractsList(): Array<Uint8Array | string>;
    getInputContractsList_asU8(): Array<Uint8Array>;
    getInputContractsList_asB64(): Array<string>;
    setInputContractsList(value: Array<Uint8Array | string>): Transaction;
    addInputContracts(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearInputsList(): void;
    getInputsList(): Array<inputs_pb.Input>;
    setInputsList(value: Array<inputs_pb.Input>): Transaction;
    addInputs(value?: inputs_pb.Input, index?: number): inputs_pb.Input;

    hasOutputContract(): boolean;
    clearOutputContract(): void;
    getOutputContract(): outputs_pb.OutputContract | undefined;
    setOutputContract(value?: outputs_pb.OutputContract): Transaction;
    clearOutputsList(): void;
    getOutputsList(): Array<outputs_pb.Output>;
    setOutputsList(value: Array<outputs_pb.Output>): Transaction;
    addOutputs(value?: outputs_pb.Output, index?: number): outputs_pb.Output;
    clearProofSetList(): void;
    getProofSetList(): Array<Uint8Array | string>;
    getProofSetList_asU8(): Array<Uint8Array>;
    getProofSetList_asB64(): Array<string>;
    setProofSetList(value: Array<Uint8Array | string>): Transaction;
    addProofSet(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearReceiptsList(): void;
    getReceiptsList(): Array<receipts_pb.Receipt>;
    setReceiptsList(value: Array<receipts_pb.Receipt>): Transaction;
    addReceipts(value?: receipts_pb.Receipt, index?: number): receipts_pb.Receipt;
    clearStorageSlotsList(): void;
    getStorageSlotsList(): Array<StorageSlot>;
    setStorageSlotsList(value: Array<StorageSlot>): Transaction;
    addStorageSlots(value?: StorageSlot, index?: number): StorageSlot;
    clearWitnessesList(): void;
    getWitnessesList(): Array<Uint8Array | string>;
    getWitnessesList_asU8(): Array<Uint8Array>;
    getWitnessesList_asB64(): Array<string>;
    setWitnessesList(value: Array<Uint8Array | string>): Transaction;
    addWitnesses(value: Uint8Array | string, index?: number): Uint8Array | string;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.TransactionPointer | undefined;
    setPointer(value?: pointers_pb.TransactionPointer): Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: Uint8Array | string,
        txIndex: number,
        type: TransactionType,
        status: TransactionStatus,
        root: Uint8Array | string,
        witnessIndex: number,
        blobId: Uint8Array | string,
        inputAssetIdsList: Array<Uint8Array | string>,
        isCreate: boolean,
        isMint: boolean,
        isScript: boolean,
        isUpgrade: boolean,
        isUpload: boolean,
        maturity: number,
        mintAmount: number,
        mintAssetId: Uint8Array | string,
        mintGasPrice: number,
        policyType: number,
        rawPayload: Uint8Array | string,
        receiptsRoot: Uint8Array | string,
        salt: Uint8Array | string,
        script: Uint8Array | string,
        scriptLength: number,
        scriptData: Uint8Array | string,
        scriptDataLength: number,
        scriptGasLimit: number,
        subsectionIndex: number,
        subsectionsNumber: number,
        upgradePurpose: number,
        storageSlotsCount: number,
        proofSetCount: number,
        witnessesCount: number,
        inputsCount: number,
        outputsCount: number,
        inputContract?: inputs_pb.InputContract.AsObject,
        inputContractsList: Array<Uint8Array | string>,
        inputsList: Array<inputs_pb.Input.AsObject>,
        outputContract?: outputs_pb.OutputContract.AsObject,
        outputsList: Array<outputs_pb.Output.AsObject>,
        proofSetList: Array<Uint8Array | string>,
        receiptsList: Array<receipts_pb.Receipt.AsObject>,
        storageSlotsList: Array<StorageSlot.AsObject>,
        witnessesList: Array<Uint8Array | string>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointer?: pointers_pb.TransactionPointer.AsObject,
    }
}

export class StorageSlot extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): StorageSlot;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): StorageSlot;
    getKey(): Uint8Array | string;
    getKey_asU8(): Uint8Array;
    getKey_asB64(): string;
    setKey(value: Uint8Array | string): StorageSlot;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): StorageSlot;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StorageSlot;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): StorageSlot;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageSlot.AsObject;
    static toObject(includeInstance: boolean, msg: StorageSlot): StorageSlot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageSlot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageSlot;
    static deserializeBinaryFromReader(message: StorageSlot, reader: jspb.BinaryReader): StorageSlot;
}

export namespace StorageSlot {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        key: Uint8Array | string,
        value: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Witness extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Witness;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Witness;
    getWitnessData(): Uint8Array | string;
    getWitnessData_asU8(): Uint8Array;
    getWitnessData_asB64(): string;
    setWitnessData(value: Uint8Array | string): Witness;
    getWitnessDataLength(): number;
    setWitnessDataLength(value: number): Witness;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Witness;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Witness;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Witness.AsObject;
    static toObject(includeInstance: boolean, msg: Witness): Witness.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Witness, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Witness;
    static deserializeBinaryFromReader(message: Witness, reader: jspb.BinaryReader): Witness;
}

export namespace Witness {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        witnessData: Uint8Array | string,
        witnessDataLength: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ProofSet extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ProofSet;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ProofSet;
    getProofHash(): Uint8Array | string;
    getProofHash_asU8(): Uint8Array;
    getProofHash_asB64(): string;
    setProofHash(value: Uint8Array | string): ProofSet;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProofSet;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProofSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProofSet.AsObject;
    static toObject(includeInstance: boolean, msg: ProofSet): ProofSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProofSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProofSet;
    static deserializeBinaryFromReader(message: ProofSet, reader: jspb.BinaryReader): ProofSet;
}

export namespace ProofSet {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        proofHash: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Policy extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Policy;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Policy;
    getType(): PolicyType;
    setType(value: PolicyType): Policy;
    getData(): number;
    setData(value: number): Policy;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Policy;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Policy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Policy.AsObject;
    static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Policy;
    static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        type: PolicyType,
        data: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum TransactionType {
    SCRIPT = 0,
    CREATE = 1,
    MINT = 2,
    UPGRADE = 3,
    UPLOAD = 4,
    BLOB = 5,
}

export enum TransactionStatus {
    SUCCESS = 0,
    FAILURE = 1,
    SUBMITTED = 2,
}

export enum PolicyType {
    TIP = 0,
    WITNESS_LIMIT = 1,
    MATURITY = 2,
    MAX_FEE = 3,
}
