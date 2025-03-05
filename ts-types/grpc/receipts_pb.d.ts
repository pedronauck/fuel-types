// package: receipts
// file: receipts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as pointers_pb from "./pointers_pb";

export class Receipt extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Receipt;
    getBlockHeight(): number;
    setBlockHeight(value: number): Receipt;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): Receipt;
    getTxIndex(): number;
    setTxIndex(value: number): Receipt;
    getReceiptIndex(): number;
    setReceiptIndex(value: number): Receipt;
    getReceiptType(): ReceiptType;
    setReceiptType(value: ReceiptType): Receipt;

    hasCall(): boolean;
    clearCall(): void;
    getCall(): ReceiptCall | undefined;
    setCall(value?: ReceiptCall): Receipt;

    hasReturn(): boolean;
    clearReturn(): void;
    getReturn(): ReceiptReturn | undefined;
    setReturn(value?: ReceiptReturn): Receipt;

    hasReturnData(): boolean;
    clearReturnData(): void;
    getReturnData(): ReceiptReturnData | undefined;
    setReturnData(value?: ReceiptReturnData): Receipt;

    hasPanic(): boolean;
    clearPanic(): void;
    getPanic(): ReceiptPanic | undefined;
    setPanic(value?: ReceiptPanic): Receipt;

    hasRevert(): boolean;
    clearRevert(): void;
    getRevert(): ReceiptRevert | undefined;
    setRevert(value?: ReceiptRevert): Receipt;

    hasLog(): boolean;
    clearLog(): void;
    getLog(): ReceiptLog | undefined;
    setLog(value?: ReceiptLog): Receipt;

    hasLogData(): boolean;
    clearLogData(): void;
    getLogData(): ReceiptLogData | undefined;
    setLogData(value?: ReceiptLogData): Receipt;

    hasTransfer(): boolean;
    clearTransfer(): void;
    getTransfer(): ReceiptTransfer | undefined;
    setTransfer(value?: ReceiptTransfer): Receipt;

    hasTransferOut(): boolean;
    clearTransferOut(): void;
    getTransferOut(): ReceiptTransferOut | undefined;
    setTransferOut(value?: ReceiptTransferOut): Receipt;

    hasScriptResult(): boolean;
    clearScriptResult(): void;
    getScriptResult(): ReceiptScriptResult | undefined;
    setScriptResult(value?: ReceiptScriptResult): Receipt;

    hasMessageOut(): boolean;
    clearMessageOut(): void;
    getMessageOut(): ReceiptMessageOut | undefined;
    setMessageOut(value?: ReceiptMessageOut): Receipt;

    hasMint(): boolean;
    clearMint(): void;
    getMint(): ReceiptMint | undefined;
    setMint(value?: ReceiptMint): Receipt;

    hasBurn(): boolean;
    clearBurn(): void;
    getBurn(): ReceiptBurn | undefined;
    setBurn(value?: ReceiptBurn): Receipt;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Receipt;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Receipt;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.ReceiptPointer | undefined;
    setPointer(value?: pointers_pb.ReceiptPointer): Receipt;

    getReceiptCase(): Receipt.ReceiptCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Receipt.AsObject;
    static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Receipt;
    static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
    export type AsObject = {
        subject: string,
        blockHeight: number,
        txId: Uint8Array | string,
        txIndex: number,
        receiptIndex: number,
        receiptType: ReceiptType,
        call?: ReceiptCall.AsObject,
        pb_return?: ReceiptReturn.AsObject,
        returnData?: ReceiptReturnData.AsObject,
        panic?: ReceiptPanic.AsObject,
        revert?: ReceiptRevert.AsObject,
        log?: ReceiptLog.AsObject,
        logData?: ReceiptLogData.AsObject,
        transfer?: ReceiptTransfer.AsObject,
        transferOut?: ReceiptTransferOut.AsObject,
        scriptResult?: ReceiptScriptResult.AsObject,
        messageOut?: ReceiptMessageOut.AsObject,
        mint?: ReceiptMint.AsObject,
        burn?: ReceiptBurn.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        pointer?: pointers_pb.ReceiptPointer.AsObject,
    }

    export enum ReceiptCase {
        RECEIPT_NOT_SET = 0,
        CALL = 7,
        RETURN = 8,
        RETURN_DATA = 9,
        PANIC = 10,
        REVERT = 11,
        LOG = 12,
        LOG_DATA = 13,
        TRANSFER = 14,
        TRANSFER_OUT = 15,
        SCRIPT_RESULT = 16,
        MESSAGE_OUT = 17,
        MINT = 18,
        BURN = 19,
    }

}

export class ReceiptCall extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptCall;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptCall;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptCall;
    getToContractId(): Uint8Array | string;
    getToContractId_asU8(): Uint8Array;
    getToContractId_asB64(): string;
    setToContractId(value: Uint8Array | string): ReceiptCall;
    getAmount(): number;
    setAmount(value: number): ReceiptCall;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): ReceiptCall;
    getGas(): number;
    setGas(value: number): ReceiptCall;
    getParam1(): number;
    setParam1(value: number): ReceiptCall;
    getParam2(): number;
    setParam2(value: number): ReceiptCall;
    getPc(): number;
    setPc(value: number): ReceiptCall;
    getIs(): number;
    setIs(value: number): ReceiptCall;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptCall;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptCall;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptCall.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptCall): ReceiptCall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptCall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptCall;
    static deserializeBinaryFromReader(message: ReceiptCall, reader: jspb.BinaryReader): ReceiptCall;
}

export namespace ReceiptCall {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        toContractId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        gas: number,
        param1: number,
        param2: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptReturn extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptReturn;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptReturn;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptReturn;
    getVal(): number;
    setVal(value: number): ReceiptReturn;
    getPc(): number;
    setPc(value: number): ReceiptReturn;
    getIs(): number;
    setIs(value: number): ReceiptReturn;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptReturn;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptReturn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptReturn.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptReturn): ReceiptReturn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptReturn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptReturn;
    static deserializeBinaryFromReader(message: ReceiptReturn, reader: jspb.BinaryReader): ReceiptReturn;
}

export namespace ReceiptReturn {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptReturnData extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptReturnData;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptReturnData;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptReturnData;
    getPtr(): number;
    setPtr(value: number): ReceiptReturnData;
    getLen(): number;
    setLen(value: number): ReceiptReturnData;
    getDigest(): Uint8Array | string;
    getDigest_asU8(): Uint8Array;
    getDigest_asB64(): string;
    setDigest(value: Uint8Array | string): ReceiptReturnData;
    getPc(): number;
    setPc(value: number): ReceiptReturnData;
    getIs(): number;
    setIs(value: number): ReceiptReturnData;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ReceiptReturnData;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptReturnData;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptReturnData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptReturnData.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptReturnData): ReceiptReturnData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptReturnData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptReturnData;
    static deserializeBinaryFromReader(message: ReceiptReturnData, reader: jspb.BinaryReader): ReceiptReturnData;
}

export namespace ReceiptReturnData {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        ptr: number,
        len: number,
        digest: Uint8Array | string,
        pc: number,
        is: number,
        data: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptPanic extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptPanic;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptPanic;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptPanic;
    getReason(): number;
    setReason(value: number): ReceiptPanic;
    getPc(): number;
    setPc(value: number): ReceiptPanic;
    getIs(): number;
    setIs(value: number): ReceiptPanic;
    getPanicContractId(): Uint8Array | string;
    getPanicContractId_asU8(): Uint8Array;
    getPanicContractId_asB64(): string;
    setPanicContractId(value: Uint8Array | string): ReceiptPanic;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptPanic;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptPanic;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptPanic.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptPanic): ReceiptPanic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptPanic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptPanic;
    static deserializeBinaryFromReader(message: ReceiptPanic, reader: jspb.BinaryReader): ReceiptPanic;
}

export namespace ReceiptPanic {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        reason: number,
        pc: number,
        is: number,
        panicContractId: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptRevert extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptRevert;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptRevert;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptRevert;
    getVal(): number;
    setVal(value: number): ReceiptRevert;
    getPc(): number;
    setPc(value: number): ReceiptRevert;
    getIs(): number;
    setIs(value: number): ReceiptRevert;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptRevert;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptRevert;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptRevert.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptRevert): ReceiptRevert.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptRevert, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptRevert;
    static deserializeBinaryFromReader(message: ReceiptRevert, reader: jspb.BinaryReader): ReceiptRevert;
}

export namespace ReceiptRevert {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptLog extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptLog;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptLog;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptLog;
    getRa(): number;
    setRa(value: number): ReceiptLog;
    getRb(): number;
    setRb(value: number): ReceiptLog;
    getRc(): number;
    setRc(value: number): ReceiptLog;
    getRd(): number;
    setRd(value: number): ReceiptLog;
    getPc(): number;
    setPc(value: number): ReceiptLog;
    getIs(): number;
    setIs(value: number): ReceiptLog;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptLog;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptLog;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptLog.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptLog): ReceiptLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptLog;
    static deserializeBinaryFromReader(message: ReceiptLog, reader: jspb.BinaryReader): ReceiptLog;
}

export namespace ReceiptLog {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        ra: number,
        rb: number,
        rc: number,
        rd: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptLogData extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptLogData;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptLogData;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptLogData;
    getRa(): number;
    setRa(value: number): ReceiptLogData;
    getRb(): number;
    setRb(value: number): ReceiptLogData;
    getPtr(): number;
    setPtr(value: number): ReceiptLogData;
    getLen(): number;
    setLen(value: number): ReceiptLogData;
    getDigest(): Uint8Array | string;
    getDigest_asU8(): Uint8Array;
    getDigest_asB64(): string;
    setDigest(value: Uint8Array | string): ReceiptLogData;
    getPc(): number;
    setPc(value: number): ReceiptLogData;
    getIs(): number;
    setIs(value: number): ReceiptLogData;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ReceiptLogData;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptLogData;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptLogData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptLogData.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptLogData): ReceiptLogData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptLogData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptLogData;
    static deserializeBinaryFromReader(message: ReceiptLogData, reader: jspb.BinaryReader): ReceiptLogData;
}

export namespace ReceiptLogData {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        ra: number,
        rb: number,
        ptr: number,
        len: number,
        digest: Uint8Array | string,
        pc: number,
        is: number,
        data: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptTransfer extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptTransfer;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptTransfer;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptTransfer;
    getToContractId(): Uint8Array | string;
    getToContractId_asU8(): Uint8Array;
    getToContractId_asB64(): string;
    setToContractId(value: Uint8Array | string): ReceiptTransfer;
    getAmount(): number;
    setAmount(value: number): ReceiptTransfer;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): ReceiptTransfer;
    getPc(): number;
    setPc(value: number): ReceiptTransfer;
    getIs(): number;
    setIs(value: number): ReceiptTransfer;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptTransfer;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptTransfer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptTransfer): ReceiptTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptTransfer;
    static deserializeBinaryFromReader(message: ReceiptTransfer, reader: jspb.BinaryReader): ReceiptTransfer;
}

export namespace ReceiptTransfer {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        toContractId: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptTransferOut extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptTransferOut;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptTransferOut;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptTransferOut;
    getToAddress(): Uint8Array | string;
    getToAddress_asU8(): Uint8Array;
    getToAddress_asB64(): string;
    setToAddress(value: Uint8Array | string): ReceiptTransferOut;
    getAmount(): number;
    setAmount(value: number): ReceiptTransferOut;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): ReceiptTransferOut;
    getPc(): number;
    setPc(value: number): ReceiptTransferOut;
    getIs(): number;
    setIs(value: number): ReceiptTransferOut;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptTransferOut;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptTransferOut;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptTransferOut.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptTransferOut): ReceiptTransferOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptTransferOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptTransferOut;
    static deserializeBinaryFromReader(message: ReceiptTransferOut, reader: jspb.BinaryReader): ReceiptTransferOut;
}

export namespace ReceiptTransferOut {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        contractId: Uint8Array | string,
        toAddress: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptScriptResult extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptScriptResult;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptScriptResult;
    getResult(): ScriptResultType;
    setResult(value: ScriptResultType): ReceiptScriptResult;
    getGasUsed(): number;
    setGasUsed(value: number): ReceiptScriptResult;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptScriptResult;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptScriptResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptScriptResult.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptScriptResult): ReceiptScriptResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptScriptResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptScriptResult;
    static deserializeBinaryFromReader(message: ReceiptScriptResult, reader: jspb.BinaryReader): ReceiptScriptResult;
}

export namespace ReceiptScriptResult {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        result: ScriptResultType,
        gasUsed: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptMessageOut extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptMessageOut;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptMessageOut;
    getSenderAddress(): Uint8Array | string;
    getSenderAddress_asU8(): Uint8Array;
    getSenderAddress_asB64(): string;
    setSenderAddress(value: Uint8Array | string): ReceiptMessageOut;
    getRecipientAddress(): Uint8Array | string;
    getRecipientAddress_asU8(): Uint8Array;
    getRecipientAddress_asB64(): string;
    setRecipientAddress(value: Uint8Array | string): ReceiptMessageOut;
    getAmount(): number;
    setAmount(value: number): ReceiptMessageOut;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): ReceiptMessageOut;
    getLen(): number;
    setLen(value: number): ReceiptMessageOut;
    getDigest(): Uint8Array | string;
    getDigest_asU8(): Uint8Array;
    getDigest_asB64(): string;
    setDigest(value: Uint8Array | string): ReceiptMessageOut;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ReceiptMessageOut;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptMessageOut;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptMessageOut;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptMessageOut.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptMessageOut): ReceiptMessageOut.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptMessageOut, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptMessageOut;
    static deserializeBinaryFromReader(message: ReceiptMessageOut, reader: jspb.BinaryReader): ReceiptMessageOut;
}

export namespace ReceiptMessageOut {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        senderAddress: Uint8Array | string,
        recipientAddress: Uint8Array | string,
        amount: number,
        nonce: Uint8Array | string,
        len: number,
        digest: Uint8Array | string,
        data: Uint8Array | string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptMint extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptMint;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptMint;
    getSubId(): Uint8Array | string;
    getSubId_asU8(): Uint8Array;
    getSubId_asB64(): string;
    setSubId(value: Uint8Array | string): ReceiptMint;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptMint;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): ReceiptMint;
    getVal(): number;
    setVal(value: number): ReceiptMint;
    getPc(): number;
    setPc(value: number): ReceiptMint;
    getIs(): number;
    setIs(value: number): ReceiptMint;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptMint;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptMint;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptMint.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptMint): ReceiptMint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptMint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptMint;
    static deserializeBinaryFromReader(message: ReceiptMint, reader: jspb.BinaryReader): ReceiptMint;
}

export namespace ReceiptMint {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        subId: Uint8Array | string,
        contractId: Uint8Array | string,
        assetId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReceiptBurn extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): ReceiptBurn;
    getTxId(): Uint8Array | string;
    getTxId_asU8(): Uint8Array;
    getTxId_asB64(): string;
    setTxId(value: Uint8Array | string): ReceiptBurn;
    getSubId(): Uint8Array | string;
    getSubId_asU8(): Uint8Array;
    getSubId_asB64(): string;
    setSubId(value: Uint8Array | string): ReceiptBurn;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptBurn;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): ReceiptBurn;
    getVal(): number;
    setVal(value: number): ReceiptBurn;
    getPc(): number;
    setPc(value: number): ReceiptBurn;
    getIs(): number;
    setIs(value: number): ReceiptBurn;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptBurn;

    hasPublishedAt(): boolean;
    clearPublishedAt(): void;
    getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): ReceiptBurn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiptBurn.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiptBurn): ReceiptBurn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiptBurn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiptBurn;
    static deserializeBinaryFromReader(message: ReceiptBurn, reader: jspb.BinaryReader): ReceiptBurn;
}

export namespace ReceiptBurn {
    export type AsObject = {
        subject: string,
        txId: Uint8Array | string,
        subId: Uint8Array | string,
        contractId: Uint8Array | string,
        assetId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export enum ReceiptType {
    CALL = 0,
    RETURN = 1,
    RETURN_DATA = 2,
    PANIC = 3,
    REVERT = 4,
    LOG = 5,
    LOG_DATA = 6,
    TRANSFER = 7,
    TRANSFER_OUT = 8,
    SCRIPT_RESULT = 9,
    MESSAGE_OUT = 10,
    MINT = 11,
    BURN = 12,
}

export enum ScriptResultType {
    SUCCESS = 0,
    FAILURE = 1,
}
