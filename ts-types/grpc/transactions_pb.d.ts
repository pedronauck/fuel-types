// package: transactions
// file: transactions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as pointers_pb from "./pointers_pb";
import * as inputs_pb from "./inputs_pb";
import * as outputs_pb from "./outputs_pb";
import * as receipts_pb from "./receipts_pb";

export class Transaction extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Transaction;
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): Transaction;
    getScriptGasLimit(): number;
    setScriptGasLimit(value: number): Transaction;

    hasTxPointer(): boolean;
    clearTxPointer(): void;
    getTxPointer(): pointers_pb.TxPointer | undefined;
    setTxPointer(value?: pointers_pb.TxPointer): Transaction;
    clearInputAssetIdsList(): void;
    getInputAssetIdsList(): Array<Uint8Array | string>;
    getInputAssetIdsList_asU8(): Array<Uint8Array>;
    getInputAssetIdsList_asB64(): Array<string>;
    setInputAssetIdsList(value: Array<Uint8Array | string>): Transaction;
    addInputAssetIds(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearInputContractsList(): void;
    getInputContractsList(): Array<Uint8Array | string>;
    getInputContractsList_asU8(): Array<Uint8Array>;
    getInputContractsList_asB64(): Array<string>;
    setInputContractsList(value: Array<Uint8Array | string>): Transaction;
    addInputContracts(value: Uint8Array | string, index?: number): Uint8Array | string;

    hasInputContract(): boolean;
    clearInputContract(): void;
    getInputContract(): inputs_pb.InputContract | undefined;
    setInputContract(value?: inputs_pb.InputContract): Transaction;
    clearInputsList(): void;
    getInputsList(): Array<inputs_pb.Input>;
    setInputsList(value: Array<inputs_pb.Input>): Transaction;
    addInputs(value?: inputs_pb.Input, index?: number): inputs_pb.Input;
    getIsScript(): boolean;
    setIsScript(value: boolean): Transaction;
    getIsCreate(): boolean;
    setIsCreate(value: boolean): Transaction;
    getIsMint(): boolean;
    setIsMint(value: boolean): Transaction;
    getIsUpgrade(): boolean;
    setIsUpgrade(value: boolean): Transaction;
    getIsUpload(): boolean;
    setIsUpload(value: boolean): Transaction;
    getIsBlob(): boolean;
    setIsBlob(value: boolean): Transaction;
    clearOutputsList(): void;
    getOutputsList(): Array<outputs_pb.Output>;
    setOutputsList(value: Array<outputs_pb.Output>): Transaction;
    addOutputs(value?: outputs_pb.Output, index?: number): outputs_pb.Output;

    hasOutputContract(): boolean;
    clearOutputContract(): void;
    getOutputContract(): outputs_pb.OutputContract | undefined;
    setOutputContract(value?: outputs_pb.OutputContract): Transaction;
    getMintAmount(): number;
    setMintAmount(value: number): Transaction;
    getMintAssetId(): Uint8Array | string;
    getMintAssetId_asU8(): Uint8Array;
    getMintAssetId_asB64(): string;
    setMintAssetId(value: Uint8Array | string): Transaction;
    getMintGasPrice(): number;
    setMintGasPrice(value: number): Transaction;
    getReceiptsRoot(): Uint8Array | string;
    getReceiptsRoot_asU8(): Uint8Array;
    getReceiptsRoot_asB64(): string;
    setReceiptsRoot(value: Uint8Array | string): Transaction;
    getStatus(): TransactionStatus;
    setStatus(value: TransactionStatus): Transaction;
    clearWitnessesList(): void;
    getWitnessesList(): Array<Uint8Array | string>;
    getWitnessesList_asU8(): Array<Uint8Array>;
    getWitnessesList_asB64(): Array<string>;
    setWitnessesList(value: Array<Uint8Array | string>): Transaction;
    addWitnesses(value: Uint8Array | string, index?: number): Uint8Array | string;
    getScript(): Uint8Array | string;
    getScript_asU8(): Uint8Array;
    getScript_asB64(): string;
    setScript(value: Uint8Array | string): Transaction;
    getScriptData(): Uint8Array | string;
    getScriptData_asU8(): Uint8Array;
    getScriptData_asB64(): string;
    setScriptData(value: Uint8Array | string): Transaction;

    hasPolicies(): boolean;
    clearPolicies(): void;
    getPolicies(): Policy | undefined;
    setPolicies(value?: Policy): Transaction;
    getSalt(): Uint8Array | string;
    getSalt_asU8(): Uint8Array;
    getSalt_asB64(): string;
    setSalt(value: Uint8Array | string): Transaction;
    clearStorageSlotsList(): void;
    getStorageSlotsList(): Array<Uint8Array | string>;
    getStorageSlotsList_asU8(): Array<Uint8Array>;
    getStorageSlotsList_asB64(): Array<string>;
    setStorageSlotsList(value: Array<Uint8Array | string>): Transaction;
    addStorageSlots(value: Uint8Array | string, index?: number): Uint8Array | string;
    getBytecodeWitnessIndex(): number;
    setBytecodeWitnessIndex(value: number): Transaction;
    getBytecodeRoot(): Uint8Array | string;
    getBytecodeRoot_asU8(): Uint8Array;
    getBytecodeRoot_asB64(): string;
    setBytecodeRoot(value: Uint8Array | string): Transaction;
    getSubsectionIndex(): number;
    setSubsectionIndex(value: number): Transaction;
    getSubsectionsNumber(): number;
    setSubsectionsNumber(value: number): Transaction;
    clearProofSetList(): void;
    getProofSetList(): Array<Uint8Array | string>;
    getProofSetList_asU8(): Array<Uint8Array>;
    getProofSetList_asB64(): Array<string>;
    setProofSetList(value: Array<Uint8Array | string>): Transaction;
    addProofSet(value: Uint8Array | string, index?: number): Uint8Array | string;
    getUpgradePurpose(): number;
    setUpgradePurpose(value: number): Transaction;
    getBlobId(): Uint8Array | string;
    getBlobId_asU8(): Uint8Array;
    getBlobId_asB64(): string;
    setBlobId(value: Uint8Array | string): Transaction;
    getMaturity(): number;
    setMaturity(value: number): Transaction;
    getPolicyType(): number;
    setPolicyType(value: number): Transaction;
    getRawPayload(): Uint8Array | string;
    getRawPayload_asU8(): Uint8Array;
    getRawPayload_asB64(): string;
    setRawPayload(value: Uint8Array | string): Transaction;
    getScriptLength(): number;
    setScriptLength(value: number): Transaction;
    getScriptDataLength(): number;
    setScriptDataLength(value: number): Transaction;
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

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Transaction;

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
        id: Uint8Array | string,
        scriptGasLimit: number,
        txPointer?: pointers_pb.TxPointer.AsObject,
        inputAssetIdsList: Array<Uint8Array | string>,
        inputContractsList: Array<Uint8Array | string>,
        inputContract?: inputs_pb.InputContract.AsObject,
        inputsList: Array<inputs_pb.Input.AsObject>,
        isScript: boolean,
        isCreate: boolean,
        isMint: boolean,
        isUpgrade: boolean,
        isUpload: boolean,
        isBlob: boolean,
        outputsList: Array<outputs_pb.Output.AsObject>,
        outputContract?: outputs_pb.OutputContract.AsObject,
        mintAmount: number,
        mintAssetId: Uint8Array | string,
        mintGasPrice: number,
        receiptsRoot: Uint8Array | string,
        status: TransactionStatus,
        witnessesList: Array<Uint8Array | string>,
        script: Uint8Array | string,
        scriptData: Uint8Array | string,
        policies?: Policy.AsObject,
        salt: Uint8Array | string,
        storageSlotsList: Array<Uint8Array | string>,
        bytecodeWitnessIndex: number,
        bytecodeRoot: Uint8Array | string,
        subsectionIndex: number,
        subsectionsNumber: number,
        proofSetList: Array<Uint8Array | string>,
        upgradePurpose: number,
        blobId: Uint8Array | string,
        maturity: number,
        policyType: number,
        rawPayload: Uint8Array | string,
        scriptLength: number,
        scriptDataLength: number,
        storageSlotsCount: number,
        proofSetCount: number,
        witnessesCount: number,
        inputsCount: number,
        outputsCount: number,
        metadata?: common_pb.Metadata.AsObject,
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
    }
}

export enum TransactionType {
    UNKNOWN_TRANSACTION_TYPE = 0,
    SCRIPT = 1,
    CREATE = 2,
    MINT = 3,
    UPGRADE = 4,
    UPLOAD = 5,
    BLOB = 6,
}

export enum TransactionStatus {
    UNKNOWN_TRANSACTION_STATUS = 0,
    FAILED = 1,
    SUBMITTED = 2,
    SQUEEZED_OUT = 3,
    SUCCESS = 4,
    NONE = 5,
}

export enum PolicyType {
    UNKNOWN_POLICY_TYPE = 0,
    TIP = 1,
    WITNESS_LIMIT = 2,
    MATURITY = 3,
    MAX_FEE = 4,
}
