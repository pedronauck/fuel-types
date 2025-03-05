// package: utxos
// file: utxos.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as pointers_pb from "./pointers_pb";

export class Utxo extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Utxo;
    getBlockHeight(): number;
    setBlockHeight(value: number): Utxo;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Utxo;
    getTxIndex(): number;
    setTxIndex(value: number): Utxo;
    getInputIndex(): number;
    setInputIndex(value: number): Utxo;
    getUtxoType(): UtxoType;
    setUtxoType(value: UtxoType): Utxo;
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): Utxo;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): Utxo;
    getSenderAddress(): Uint8Array | string;
    getSenderAddress_asU8(): Uint8Array;
    getSenderAddress_asB64(): string;
    setSenderAddress(value: Uint8Array | string): Utxo;
    getRecipientAddress(): Uint8Array | string;
    getRecipientAddress_asU8(): Uint8Array;
    getRecipientAddress_asB64(): string;
    setRecipientAddress(value: Uint8Array | string): Utxo;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): Utxo;
    getAmount(): number;
    setAmount(value: number): Utxo;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): Utxo;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Utxo;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Utxo;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Utxo;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.UtxoPointer | undefined;
    setPointer(value?: pointers_pb.UtxoPointer): Utxo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Utxo.AsObject;
    static toObject(includeInstance: boolean, msg: Utxo): Utxo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Utxo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Utxo;
    static deserializeBinaryFromReader(message: Utxo, reader: jspb.BinaryReader): Utxo;
}

export namespace Utxo {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: Uint8Array | string,
        txIndex: number,
        inputIndex: number,
        utxoType: UtxoType,
        utxoId: Uint8Array | string,
        value: Uint8Array | string,
        senderAddress: Uint8Array | string,
        recipientAddress: Uint8Array | string,
        nonce: Uint8Array | string,
        amount: number,
        data: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointer?: pointers_pb.UtxoPointer.AsObject,
    }
}

export enum UtxoType {
    CONTRACT = 0,
    COIN = 1,
    MESSAGE = 2,
}
