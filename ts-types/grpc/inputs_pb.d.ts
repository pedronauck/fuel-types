// package: inputs
// file: inputs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as pointers_pb from "./pointers_pb";

export class Input extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Input;
    getBlockHeight(): number;
    setBlockHeight(value: number): Input;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Input;
    getTxIndex(): number;
    setTxIndex(value: number): Input;
    getInputIndex(): number;
    setInputIndex(value: number): Input;
    getInputType(): InputType;
    setInputType(value: InputType): Input;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): InputCoin | undefined;
    setCoin(value?: InputCoin): Input;

    hasContract(): boolean;
    clearContract(): void;
    getContract(): InputContract | undefined;
    setContract(value?: InputContract): Input;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): InputMessage | undefined;
    setMessage(value?: InputMessage): Input;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Input;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.InputPointer | undefined;
    setPointer(value?: pointers_pb.InputPointer): Input;

    getInputCase(): Input.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: Uint8Array | string,
        txIndex: number,
        inputIndex: number,
        inputType: InputType,
        coin?: InputCoin.AsObject,
        contract?: InputContract.AsObject,
        message?: InputMessage.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointer?: pointers_pb.InputPointer.AsObject,
    }

    export enum InputCase {
        INPUT_NOT_SET = 0,
        COIN = 7,
        CONTRACT = 8,
        MESSAGE = 9,
    }

}

export class InputCoin extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): InputCoin;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): InputCoin;
    getAmount(): number;
    setAmount(value: number): InputCoin;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): InputCoin;
    getOwnerAddress(): Uint8Array | string;
    getOwnerAddress_asU8(): Uint8Array;
    getOwnerAddress_asB64(): string;
    setOwnerAddress(value: Uint8Array | string): InputCoin;
    getOutputIndex(): number;
    setOutputIndex(value: number): InputCoin;
    getPredicate(): Uint8Array | string;
    getPredicate_asU8(): Uint8Array;
    getPredicate_asB64(): string;
    setPredicate(value: Uint8Array | string): InputCoin;
    getPredicateData(): Uint8Array | string;
    getPredicateData_asU8(): Uint8Array;
    getPredicateData_asB64(): string;
    setPredicateData(value: Uint8Array | string): InputCoin;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputCoin;
    getPredicateLength(): number;
    setPredicateLength(value: number): InputCoin;
    getPredicateDataLength(): number;
    setPredicateDataLength(value: number): InputCoin;
    getTxPointerBlockHeight(): number;
    setTxPointerBlockHeight(value: number): InputCoin;
    getTxPointerTxIndex(): number;
    setTxPointerTxIndex(value: number): InputCoin;
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): InputCoin;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputCoin;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputCoin;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputCoin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputCoin.AsObject;
    static toObject(includeInstance: boolean, msg: InputCoin): InputCoin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputCoin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputCoin;
    static deserializeBinaryFromReader(message: InputCoin, reader: jspb.BinaryReader): InputCoin;
}

export namespace InputCoin {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        ownerAddress: Uint8Array | string,
        outputIndex: number,
        predicate: Uint8Array | string,
        predicateData: Uint8Array | string,
        predicateGasUsed: number,
        predicateLength: number,
        predicateDataLength: number,
        txPointerBlockHeight: number,
        txPointerTxIndex: number,
        utxoId: Uint8Array | string,
        witnessIndex: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class InputContract extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): InputContract;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): InputContract;
    getBalanceRoot(): Uint8Array | string;
    getBalanceRoot_asU8(): Uint8Array;
    getBalanceRoot_asB64(): string;
    setBalanceRoot(value: Uint8Array | string): InputContract;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): InputContract;
    getOutputIndex(): number;
    setOutputIndex(value: number): InputContract;
    getStateRoot(): Uint8Array | string;
    getStateRoot_asU8(): Uint8Array;
    getStateRoot_asB64(): string;
    setStateRoot(value: Uint8Array | string): InputContract;
    getTxPointerBlockHeight(): number;
    setTxPointerBlockHeight(value: number): InputContract;
    getTxPointerTxIndex(): number;
    setTxPointerTxIndex(value: number): InputContract;
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): InputContract;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputContract;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputContract.AsObject;
    static toObject(includeInstance: boolean, msg: InputContract): InputContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputContract;
    static deserializeBinaryFromReader(message: InputContract, reader: jspb.BinaryReader): InputContract;
}

export namespace InputContract {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        balanceRoot: Uint8Array | string,
        contractId: Uint8Array | string,
        outputIndex: number,
        stateRoot: Uint8Array | string,
        txPointerBlockHeight: number,
        txPointerTxIndex: number,
        utxoId: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class InputMessage extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): InputMessage;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): InputMessage;
    getAmount(): number;
    setAmount(value: number): InputMessage;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): InputMessage;
    getDataLength(): number;
    setDataLength(value: number): InputMessage;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): InputMessage;
    getPredicate(): Uint8Array | string;
    getPredicate_asU8(): Uint8Array;
    getPredicate_asB64(): string;
    setPredicate(value: Uint8Array | string): InputMessage;
    getPredicateLength(): number;
    setPredicateLength(value: number): InputMessage;
    getPredicateData(): Uint8Array | string;
    getPredicateData_asU8(): Uint8Array;
    getPredicateData_asB64(): string;
    setPredicateData(value: Uint8Array | string): InputMessage;
    getPredicateDataLength(): number;
    setPredicateDataLength(value: number): InputMessage;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputMessage;
    getRecipientAddress(): Uint8Array | string;
    getRecipientAddress_asU8(): Uint8Array;
    getRecipientAddress_asB64(): string;
    setRecipientAddress(value: Uint8Array | string): InputMessage;
    getSenderAddress(): Uint8Array | string;
    getSenderAddress_asU8(): Uint8Array;
    getSenderAddress_asB64(): string;
    setSenderAddress(value: Uint8Array | string): InputMessage;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputMessage;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputMessage;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): InputMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputMessage.AsObject;
    static toObject(includeInstance: boolean, msg: InputMessage): InputMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputMessage;
    static deserializeBinaryFromReader(message: InputMessage, reader: jspb.BinaryReader): InputMessage;
}

export namespace InputMessage {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        amount: number,
        data: Uint8Array | string,
        dataLength: number,
        nonce: Uint8Array | string,
        predicate: Uint8Array | string,
        predicateLength: number,
        predicateData: Uint8Array | string,
        predicateDataLength: number,
        predicateGasUsed: number,
        recipientAddress: Uint8Array | string,
        senderAddress: Uint8Array | string,
        witnessIndex: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum InputType {
    CONTRACT = 0,
    COIN = 1,
    MESSAGE = 2,
}
