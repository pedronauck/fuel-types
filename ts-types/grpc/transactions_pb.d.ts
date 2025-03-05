// package: transactions
// file: transactions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as inputs_pb from "./inputs_pb";
import * as outputs_pb from "./outputs_pb";
import * as receipts_pb from "./receipts_pb";
import * as common_pb from "./common_pb";

export class Transaction extends jspb.Message { 
    getType(): TransactionType;
    setType(value: TransactionType): Transaction;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.TxPointer | undefined;
    setPointer(value?: pointers_pb.TxPointer): Transaction;

    hasData(): boolean;
    clearData(): void;
    getData(): TransactionData | undefined;
    setData(value?: TransactionData): Transaction;

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
        type: TransactionType,
        pointer?: pointers_pb.TxPointer.AsObject,
        data?: TransactionData.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }
}

export class TransactionData extends jspb.Message { 
    getId(): string;
    setId(value: string): TransactionData;
    getScriptGasLimit(): number;
    setScriptGasLimit(value: number): TransactionData;
    clearInputAssetIdsList(): void;
    getInputAssetIdsList(): Array<string>;
    setInputAssetIdsList(value: Array<string>): TransactionData;
    addInputAssetIds(value: string, index?: number): string;
    clearInputContractsList(): void;
    getInputContractsList(): Array<string>;
    setInputContractsList(value: Array<string>): TransactionData;
    addInputContracts(value: string, index?: number): string;

    hasInputContract(): boolean;
    clearInputContract(): void;
    getInputContract(): inputs_pb.InputContract | undefined;
    setInputContract(value?: inputs_pb.InputContract): TransactionData;
    clearInputsList(): void;
    getInputsList(): Array<inputs_pb.Input>;
    setInputsList(value: Array<inputs_pb.Input>): TransactionData;
    addInputs(value?: inputs_pb.Input, index?: number): inputs_pb.Input;
    getIsScript(): boolean;
    setIsScript(value: boolean): TransactionData;
    getIsCreate(): boolean;
    setIsCreate(value: boolean): TransactionData;
    getIsMint(): boolean;
    setIsMint(value: boolean): TransactionData;
    getIsUpgrade(): boolean;
    setIsUpgrade(value: boolean): TransactionData;
    getIsUpload(): boolean;
    setIsUpload(value: boolean): TransactionData;
    getIsBlob(): boolean;
    setIsBlob(value: boolean): TransactionData;
    clearOutputsList(): void;
    getOutputsList(): Array<outputs_pb.Output>;
    setOutputsList(value: Array<outputs_pb.Output>): TransactionData;
    addOutputs(value?: outputs_pb.Output, index?: number): outputs_pb.Output;

    hasOutputContract(): boolean;
    clearOutputContract(): void;
    getOutputContract(): outputs_pb.OutputContract | undefined;
    setOutputContract(value?: outputs_pb.OutputContract): TransactionData;
    getMintAmount(): number;
    setMintAmount(value: number): TransactionData;
    getMintAssetId(): string;
    setMintAssetId(value: string): TransactionData;
    getMintGasPrice(): number;
    setMintGasPrice(value: number): TransactionData;
    getReceiptsRoot(): string;
    setReceiptsRoot(value: string): TransactionData;
    getStatus(): TransactionStatus;
    setStatus(value: TransactionStatus): TransactionData;
    clearWitnessesList(): void;
    getWitnessesList(): Array<string>;
    setWitnessesList(value: Array<string>): TransactionData;
    addWitnesses(value: string, index?: number): string;
    getScript(): string;
    setScript(value: string): TransactionData;
    getScriptData(): string;
    setScriptData(value: string): TransactionData;

    hasPolicies(): boolean;
    clearPolicies(): void;
    getPolicies(): Policy | undefined;
    setPolicies(value?: Policy): TransactionData;
    getSalt(): string;
    setSalt(value: string): TransactionData;
    clearStorageSlotsList(): void;
    getStorageSlotsList(): Array<string>;
    setStorageSlotsList(value: Array<string>): TransactionData;
    addStorageSlots(value: string, index?: number): string;
    getBytecodeWitnessIndex(): number;
    setBytecodeWitnessIndex(value: number): TransactionData;
    getBytecodeRoot(): string;
    setBytecodeRoot(value: string): TransactionData;
    getSubsectionIndex(): number;
    setSubsectionIndex(value: number): TransactionData;
    getSubsectionsNumber(): number;
    setSubsectionsNumber(value: number): TransactionData;
    clearProofSetList(): void;
    getProofSetList(): Array<string>;
    setProofSetList(value: Array<string>): TransactionData;
    addProofSet(value: string, index?: number): string;
    getUpgradePurpose(): number;
    setUpgradePurpose(value: number): TransactionData;
    getBlobId(): string;
    setBlobId(value: string): TransactionData;
    getMaturity(): number;
    setMaturity(value: number): TransactionData;
    getPolicyType(): number;
    setPolicyType(value: number): TransactionData;
    getRawPayload(): string;
    setRawPayload(value: string): TransactionData;
    getScriptLength(): number;
    setScriptLength(value: number): TransactionData;
    getScriptDataLength(): number;
    setScriptDataLength(value: number): TransactionData;
    getStorageSlotsCount(): number;
    setStorageSlotsCount(value: number): TransactionData;
    getProofSetCount(): number;
    setProofSetCount(value: number): TransactionData;
    getWitnessesCount(): number;
    setWitnessesCount(value: number): TransactionData;
    getInputsCount(): number;
    setInputsCount(value: number): TransactionData;
    getOutputsCount(): number;
    setOutputsCount(value: number): TransactionData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionData.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionData): TransactionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionData;
    static deserializeBinaryFromReader(message: TransactionData, reader: jspb.BinaryReader): TransactionData;
}

export namespace TransactionData {
    export type AsObject = {
        id: string,
        scriptGasLimit: number,
        inputAssetIdsList: Array<string>,
        inputContractsList: Array<string>,
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
        mintAssetId: string,
        mintGasPrice: number,
        receiptsRoot: string,
        status: TransactionStatus,
        witnessesList: Array<string>,
        script: string,
        scriptData: string,
        policies?: Policy.AsObject,
        salt: string,
        storageSlotsList: Array<string>,
        bytecodeWitnessIndex: number,
        bytecodeRoot: string,
        subsectionIndex: number,
        subsectionsNumber: number,
        proofSetList: Array<string>,
        upgradePurpose: number,
        blobId: string,
        maturity: number,
        policyType: number,
        rawPayload: string,
        scriptLength: number,
        scriptDataLength: number,
        storageSlotsCount: number,
        proofSetCount: number,
        witnessesCount: number,
        inputsCount: number,
        outputsCount: number,
    }
}

export class StorageSlot extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): StorageSlot;
    getTxId(): string;
    setTxId(value: string): StorageSlot;
    getKey(): string;
    setKey(value: string): StorageSlot;
    getValue(): string;
    setValue(value: string): StorageSlot;

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
        txId: string,
        key: string,
        value: string,
    }
}

export class Witness extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Witness;
    getTxId(): string;
    setTxId(value: string): Witness;
    getWitnessData(): string;
    setWitnessData(value: string): Witness;
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
        txId: string,
        witnessData: string,
        witnessDataLength: number,
    }
}

export class ProofSet extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ProofSet;
    getTxId(): string;
    setTxId(value: string): ProofSet;
    getProofHash(): string;
    setProofHash(value: string): ProofSet;

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
        txId: string,
        proofHash: string,
    }
}

export class Policy extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Policy;
    getTxId(): string;
    setTxId(value: string): Policy;
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
        txId: string,
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
