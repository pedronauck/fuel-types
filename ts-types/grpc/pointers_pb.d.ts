// package: pointers
// file: pointers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BlockPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): BlockPointer;

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
        blockHeight: number,
    }
}

export class TxPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): TxPointer;
    getTxId(): number;
    setTxId(value: number): TxPointer;
    getTxIndex(): number;
    setTxIndex(value: number): TxPointer;

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
        blockHeight: number,
        txId: number,
        txIndex: number,
    }
}

export class InputPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): InputPointer;
    getTxId(): number;
    setTxId(value: number): InputPointer;
    getTxIndex(): number;
    setTxIndex(value: number): InputPointer;
    getInputIndex(): number;
    setInputIndex(value: number): InputPointer;

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
        blockHeight: number,
        txId: number,
        txIndex: number,
        inputIndex: number,
    }
}

export class OutputPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): OutputPointer;
    getTxId(): number;
    setTxId(value: number): OutputPointer;
    getTxIndex(): number;
    setTxIndex(value: number): OutputPointer;
    getOutputIndex(): number;
    setOutputIndex(value: number): OutputPointer;

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
        blockHeight: number,
        txId: number,
        txIndex: number,
        outputIndex: number,
    }
}

export class ReceiptPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): ReceiptPointer;
    getTxId(): number;
    setTxId(value: number): ReceiptPointer;
    getTxIndex(): number;
    setTxIndex(value: number): ReceiptPointer;
    getReceiptIndex(): number;
    setReceiptIndex(value: number): ReceiptPointer;

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
        blockHeight: number,
        txId: number,
        txIndex: number,
        receiptIndex: number,
    }
}

export class UtxoPointer extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): UtxoPointer;
    getTxId(): number;
    setTxId(value: number): UtxoPointer;
    getTxIndex(): number;
    setTxIndex(value: number): UtxoPointer;
    getUtxoId(): number;
    setUtxoId(value: number): UtxoPointer;
    getInputIndex(): number;
    setInputIndex(value: number): UtxoPointer;
    getOutputIndex(): number;
    setOutputIndex(value: number): UtxoPointer;

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
        blockHeight: number,
        txId: number,
        txIndex: number,
        utxoId: number,
        inputIndex: number,
        outputIndex: number,
    }
}
