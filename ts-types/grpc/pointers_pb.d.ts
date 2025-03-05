// package: pointers
// file: pointers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BlockPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): BlockPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockPointer.AsObject;
    static toObject(includeInstance: boolean, msg: BlockPointer): BlockPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockPointer;
    static deserializeBinaryFromReader(message: BlockPointer, reader: jspb.BinaryReader): BlockPointer;
}

export namespace BlockPointer {
    export type AsObject = {
        subject: string,
    }
}

export class TxPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): TxPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): TxPointer;
    getTxId(): string;
    setTxId(value: string): TxPointer;
    getTxIndex(): number;
    setTxIndex(value: number): TxPointer;
    getCursor(): string;
    setCursor(value: string): TxPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TxPointer.AsObject;
    static toObject(includeInstance: boolean, msg: TxPointer): TxPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TxPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TxPointer;
    static deserializeBinaryFromReader(message: TxPointer, reader: jspb.BinaryReader): TxPointer;
}

export namespace TxPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        cursor: string,
    }
}

export class InputPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): InputPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): InputPointer;
    getTxId(): string;
    setTxId(value: string): InputPointer;
    getTxIndex(): number;
    setTxIndex(value: number): InputPointer;
    getInputIndex(): number;
    setInputIndex(value: number): InputPointer;
    getCursor(): string;
    setCursor(value: string): InputPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputPointer.AsObject;
    static toObject(includeInstance: boolean, msg: InputPointer): InputPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputPointer;
    static deserializeBinaryFromReader(message: InputPointer, reader: jspb.BinaryReader): InputPointer;
}

export namespace InputPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        inputIndex: number,
        cursor: string,
    }
}

export class OutputPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): OutputPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): OutputPointer;
    getTxId(): string;
    setTxId(value: string): OutputPointer;
    getTxIndex(): number;
    setTxIndex(value: number): OutputPointer;
    getOutputIndex(): number;
    setOutputIndex(value: number): OutputPointer;
    getCursor(): string;
    setCursor(value: string): OutputPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputPointer.AsObject;
    static toObject(includeInstance: boolean, msg: OutputPointer): OutputPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputPointer;
    static deserializeBinaryFromReader(message: OutputPointer, reader: jspb.BinaryReader): OutputPointer;
}

export namespace OutputPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        outputIndex: number,
        cursor: string,
    }
}

export class ReceiptPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): ReceiptPointer;
    getTxId(): string;
    setTxId(value: string): ReceiptPointer;
    getTxIndex(): number;
    setTxIndex(value: number): ReceiptPointer;
    getReceiptIndex(): number;
    setReceiptIndex(value: number): ReceiptPointer;
    getCursor(): string;
    setCursor(value: string): ReceiptPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptPointer.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptPointer): ReceiptPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptPointer;
    static deserializeBinaryFromReader(message: ReceiptPointer, reader: jspb.BinaryReader): ReceiptPointer;
}

export namespace ReceiptPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        receiptIndex: number,
        cursor: string,
    }
}

export class UtxoPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): UtxoPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): UtxoPointer;
    getTxId(): string;
    setTxId(value: string): UtxoPointer;
    getTxIndex(): number;
    setTxIndex(value: number): UtxoPointer;
    getUtxoId(): number;
    setUtxoId(value: number): UtxoPointer;
    getInputIndex(): number;
    setInputIndex(value: number): UtxoPointer;
    getOutputIndex(): number;
    setOutputIndex(value: number): UtxoPointer;
    getCursor(): string;
    setCursor(value: string): UtxoPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UtxoPointer.AsObject;
    static toObject(includeInstance: boolean, msg: UtxoPointer): UtxoPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UtxoPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UtxoPointer;
    static deserializeBinaryFromReader(message: UtxoPointer, reader: jspb.BinaryReader): UtxoPointer;
}

export namespace UtxoPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        utxoId: number,
        inputIndex: number,
        outputIndex: number,
        cursor: string,
    }
}

export class PredicatePointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): PredicatePointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): PredicatePointer;
    getTxId(): string;
    setTxId(value: string): PredicatePointer;
    getTxIndex(): number;
    setTxIndex(value: number): PredicatePointer;
    getInputIndex(): number;
    setInputIndex(value: number): PredicatePointer;
    getCursor(): string;
    setCursor(value: string): PredicatePointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredicatePointer.AsObject;
    static toObject(includeInstance: boolean, msg: PredicatePointer): PredicatePointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredicatePointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredicatePointer;
    static deserializeBinaryFromReader(message: PredicatePointer, reader: jspb.BinaryReader): PredicatePointer;
}

export namespace PredicatePointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        inputIndex: number,
        cursor: string,
    }
}

export class ContractPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ContractPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): ContractPointer;
    getTxId(): string;
    setTxId(value: string): ContractPointer;
    getTxIndex(): number;
    setTxIndex(value: number): ContractPointer;
    getOutputIndex(): number;
    setOutputIndex(value: number): ContractPointer;
    getCursor(): string;
    setCursor(value: string): ContractPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractPointer.AsObject;
    static toObject(includeInstance: boolean, msg: ContractPointer): ContractPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractPointer;
    static deserializeBinaryFromReader(message: ContractPointer, reader: jspb.BinaryReader): ContractPointer;
}

export namespace ContractPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        outputIndex: number,
        cursor: string,
    }
}

export class ScriptPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ScriptPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): ScriptPointer;
    getTxId(): string;
    setTxId(value: string): ScriptPointer;
    getTxIndex(): number;
    setTxIndex(value: number): ScriptPointer;
    getCursor(): string;
    setCursor(value: string): ScriptPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScriptPointer.AsObject;
    static toObject(includeInstance: boolean, msg: ScriptPointer): ScriptPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScriptPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScriptPointer;
    static deserializeBinaryFromReader(message: ScriptPointer, reader: jspb.BinaryReader): ScriptPointer;
}

export namespace ScriptPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        cursor: string,
    }
}

export class AssetPointer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): AssetPointer;
    getBlockHeight(): number;
    setBlockHeight(value: number): AssetPointer;
    getTxId(): string;
    setTxId(value: string): AssetPointer;
    getTxIndex(): number;
    setTxIndex(value: number): AssetPointer;
    getContractId(): string;
    setContractId(value: string): AssetPointer;
    getAssetId(): string;
    setAssetId(value: string): AssetPointer;
    getCursor(): string;
    setCursor(value: string): AssetPointer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetPointer.AsObject;
    static toObject(includeInstance: boolean, msg: AssetPointer): AssetPointer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetPointer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetPointer;
    static deserializeBinaryFromReader(message: AssetPointer, reader: jspb.BinaryReader): AssetPointer;
}

export namespace AssetPointer {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: string,
        txIndex: number,
        contractId: string,
        assetId: string,
        cursor: string,
    }
}
