// package: outputs
// file: outputs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as pointers_pb from "./pointers_pb";

export class Output extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Output;
    getBlockHeight(): number;
    setBlockHeight(value: number): Output;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Output;
    getTxIndex(): number;
    setTxIndex(value: number): Output;
    getOutputIndex(): number;
    setOutputIndex(value: number): Output;
    getOutputType(): OutputType;
    setOutputType(value: OutputType): Output;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): OutputCoin | undefined;
    setCoin(value?: OutputCoin): Output;

    hasContract(): boolean;
    clearContract(): void;
    getContract(): OutputContract | undefined;
    setContract(value?: OutputContract): Output;

    hasChange(): boolean;
    clearChange(): void;
    getChange(): OutputChange | undefined;
    setChange(value?: OutputChange): Output;

    hasVariable(): boolean;
    clearVariable(): void;
    getVariable(): OutputVariable | undefined;
    setVariable(value?: OutputVariable): Output;

    hasContractCreated(): boolean;
    clearContractCreated(): void;
    getContractCreated(): OutputContractCreated | undefined;
    setContractCreated(value?: OutputContractCreated): Output;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Output;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Output;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.OutputPointer | undefined;
    setPointer(value?: pointers_pb.OutputPointer): Output;

    getOutputCase(): Output.OutputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: Uint8Array | string,
        txIndex: number,
        outputIndex: number,
        outputType: OutputType,
        coin?: OutputCoin.AsObject,
        contract?: OutputContract.AsObject,
        change?: OutputChange.AsObject,
        variable?: OutputVariable.AsObject,
        contractCreated?: OutputContractCreated.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointer?: pointers_pb.OutputPointer.AsObject,
    }

    export enum OutputCase {
        OUTPUT_NOT_SET = 0,
        COIN = 7,
        CONTRACT = 8,
        CHANGE = 9,
        VARIABLE = 10,
        CONTRACT_CREATED = 11,
    }

}

export class OutputCoin extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputCoin;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): OutputCoin;
    getAmount(): number;
    setAmount(value: number): OutputCoin;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): OutputCoin;
    getToAddress(): Uint8Array | string;
    getToAddress_asU8(): Uint8Array;
    getToAddress_asB64(): string;
    setToAddress(value: Uint8Array | string): OutputCoin;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputCoin;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputCoin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputCoin.AsObject;
    static toObject(includeInstance: boolean, msg: OutputCoin): OutputCoin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputCoin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputCoin;
    static deserializeBinaryFromReader(message: OutputCoin, reader: jspb.BinaryReader): OutputCoin;
}

export namespace OutputCoin {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        toAddress: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OutputContract extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputContract;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): OutputContract;
    getBalanceRoot(): Uint8Array | string;
    getBalanceRoot_asU8(): Uint8Array;
    getBalanceRoot_asB64(): string;
    setBalanceRoot(value: Uint8Array | string): OutputContract;
    getStateRoot(): Uint8Array | string;
    getStateRoot_asU8(): Uint8Array;
    getStateRoot_asB64(): string;
    setStateRoot(value: Uint8Array | string): OutputContract;
    getInputIndex(): number;
    setInputIndex(value: number): OutputContract;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputContract;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputContract.AsObject;
    static toObject(includeInstance: boolean, msg: OutputContract): OutputContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputContract;
    static deserializeBinaryFromReader(message: OutputContract, reader: jspb.BinaryReader): OutputContract;
}

export namespace OutputContract {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        balanceRoot: Uint8Array | string,
        stateRoot: Uint8Array | string,
        inputIndex: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OutputContractCreated extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputContractCreated;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): OutputContractCreated;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): OutputContractCreated;
    getStateRoot(): Uint8Array | string;
    getStateRoot_asU8(): Uint8Array;
    getStateRoot_asB64(): string;
    setStateRoot(value: Uint8Array | string): OutputContractCreated;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputContractCreated;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputContractCreated;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputContractCreated.AsObject;
    static toObject(includeInstance: boolean, msg: OutputContractCreated): OutputContractCreated.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputContractCreated, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputContractCreated;
    static deserializeBinaryFromReader(message: OutputContractCreated, reader: jspb.BinaryReader): OutputContractCreated;
}

export namespace OutputContractCreated {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        stateRoot: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OutputChange extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputChange;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): OutputChange;
    getAmount(): number;
    setAmount(value: number): OutputChange;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): OutputChange;
    getToAddress(): Uint8Array | string;
    getToAddress_asU8(): Uint8Array;
    getToAddress_asB64(): string;
    setToAddress(value: Uint8Array | string): OutputChange;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputChange;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputChange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputChange.AsObject;
    static toObject(includeInstance: boolean, msg: OutputChange): OutputChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputChange;
    static deserializeBinaryFromReader(message: OutputChange, reader: jspb.BinaryReader): OutputChange;
}

export namespace OutputChange {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        toAddress: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OutputVariable extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputVariable;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): OutputVariable;
    getAmount(): number;
    setAmount(value: number): OutputVariable;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): OutputVariable;
    getToAddress(): Uint8Array | string;
    getToAddress_asU8(): Uint8Array;
    getToAddress_asB64(): string;
    setToAddress(value: Uint8Array | string): OutputVariable;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputVariable;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): OutputVariable;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputVariable.AsObject;
    static toObject(includeInstance: boolean, msg: OutputVariable): OutputVariable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputVariable;
    static deserializeBinaryFromReader(message: OutputVariable, reader: jspb.BinaryReader): OutputVariable;
}

export namespace OutputVariable {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        toAddress: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum OutputType {
    COIN = 0,
    CONTRACT = 1,
    CHANGE = 2,
    VARIABLE = 3,
    CONTRACT_CREATED = 4,
}
