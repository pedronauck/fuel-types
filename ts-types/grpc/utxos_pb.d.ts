// package: utxos
// file: utxos.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Utxo extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Utxo;
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): Utxo;
    getType(): UtxoType;
    setType(value: UtxoType): Utxo;
    getStatus(): UtxoStatus;
    setStatus(value: UtxoStatus): Utxo;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): UtxoCoin | undefined;
    setCoin(value?: UtxoCoin): Utxo;

    hasContract(): boolean;
    clearContract(): void;
    getContract(): UtxoContract | undefined;
    setContract(value?: UtxoContract): Utxo;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): UtxoMessage | undefined;
    setMessage(value?: UtxoMessage): Utxo;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Utxo;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.UtxoPointer | undefined;
    setPointer(value?: pointers_pb.UtxoPointer): Utxo;

    getUtxoDataCase(): Utxo.UtxoDataCase;

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
        utxoId: Uint8Array | string,
        type: UtxoType,
        status: UtxoStatus,
        coin?: UtxoCoin.AsObject,
        contract?: UtxoContract.AsObject,
        message?: UtxoMessage.AsObject,
        metadata?: common_pb.Metadata.AsObject,
        pointer?: pointers_pb.UtxoPointer.AsObject,
    }

    export enum UtxoDataCase {
        UTXO_DATA_NOT_SET = 0,
        COIN = 5,
        CONTRACT = 6,
        MESSAGE = 7,
    }

}

export class UtxoCoin extends jspb.Message { 
    getAmount(): number;
    setAmount(value: number): UtxoCoin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtxoCoin.AsObject;
    static toObject(includeInstance: boolean, msg: UtxoCoin): UtxoCoin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtxoCoin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtxoCoin;
    static deserializeBinaryFromReader(message: UtxoCoin, reader: jspb.BinaryReader): UtxoCoin;
}

export namespace UtxoCoin {
    export type AsObject = {
        amount: number,
    }
}

export class UtxoContract extends jspb.Message { 
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): UtxoContract;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): UtxoContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtxoContract.AsObject;
    static toObject(includeInstance: boolean, msg: UtxoContract): UtxoContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtxoContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtxoContract;
    static deserializeBinaryFromReader(message: UtxoContract, reader: jspb.BinaryReader): UtxoContract;
}

export namespace UtxoContract {
    export type AsObject = {
        contractId: Uint8Array | string,
        value: Uint8Array | string,
    }
}

export class UtxoMessage extends jspb.Message { 
    getSender(): Uint8Array | string;
    getSender_asU8(): Uint8Array;
    getSender_asB64(): string;
    setSender(value: Uint8Array | string): UtxoMessage;
    getRecipient(): Uint8Array | string;
    getRecipient_asU8(): Uint8Array;
    getRecipient_asB64(): string;
    setRecipient(value: Uint8Array | string): UtxoMessage;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): UtxoMessage;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): UtxoMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtxoMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UtxoMessage): UtxoMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtxoMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtxoMessage;
    static deserializeBinaryFromReader(message: UtxoMessage, reader: jspb.BinaryReader): UtxoMessage;
}

export namespace UtxoMessage {
    export type AsObject = {
        sender: Uint8Array | string,
        recipient: Uint8Array | string,
        nonce: Uint8Array | string,
        data: Uint8Array | string,
    }
}

export enum UtxoStatus {
    UNSPENT = 0,
    SPENT = 2,
}

export enum UtxoType {
    UNKNOWN = 0,
    CONTRACT = 1,
    COIN = 2,
    MESSAGE = 3,
}
