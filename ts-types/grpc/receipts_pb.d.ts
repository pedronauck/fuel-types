// package: receipts
// file: receipts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as pointers_pb from "./pointers_pb";

export class Receipt extends jspb.Message { 
    getType(): ReceiptType;
    setType(value: ReceiptType): Receipt;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.ReceiptPointer | undefined;
    setPointer(value?: pointers_pb.ReceiptPointer): Receipt;

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

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Receipt;

    getDataCase(): Receipt.DataCase;

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
        type: ReceiptType,
        pointer?: pointers_pb.ReceiptPointer.AsObject,
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
        metadata?: common_pb.Metadata.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        CALL = 3,
        RETURN = 4,
        RETURN_DATA = 5,
        PANIC = 6,
        REVERT = 7,
        LOG = 8,
        LOG_DATA = 9,
        TRANSFER = 10,
        TRANSFER_OUT = 11,
        SCRIPT_RESULT = 12,
        MESSAGE_OUT = 13,
        MINT = 14,
        BURN = 15,
    }

}

export class ReceiptCall extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptCall;
    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): ReceiptCall;
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
        id: Uint8Array | string,
        to: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        gas: number,
        param1: number,
        param2: number,
        pc: number,
        is: number,
    }
}

export class ReceiptReturn extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptReturn;
    getVal(): number;
    setVal(value: number): ReceiptReturn;
    getPc(): number;
    setPc(value: number): ReceiptReturn;
    getIs(): number;
    setIs(value: number): ReceiptReturn;

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
        id: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
    }
}

export class ReceiptReturnData extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptReturnData;
    getPtr(): number;
    setPtr(value: number): ReceiptReturnData;
    getLen(): number;
    setLen(value: number): ReceiptReturnData;
    getDigest(): Uint8Array | string;
    getDigest_asU8(): Uint8Array;
    getDigest_asB64(): string;
    setDigest(value: Uint8Array | string): ReceiptReturnData;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ReceiptReturnData;
    getPc(): number;
    setPc(value: number): ReceiptReturnData;
    getIs(): number;
    setIs(value: number): ReceiptReturnData;

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
        id: Uint8Array | string,
        ptr: number,
        len: number,
        digest: Uint8Array | string,
        data: Uint8Array | string,
        pc: number,
        is: number,
    }
}

export class ReceiptPanic extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptPanic;
    getReason(): number;
    setReason(value: number): ReceiptPanic;
    getPc(): number;
    setPc(value: number): ReceiptPanic;
    getIs(): number;
    setIs(value: number): ReceiptPanic;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): ReceiptPanic;

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
        id: Uint8Array | string,
        reason: number,
        pc: number,
        is: number,
        contractId: Uint8Array | string,
    }
}

export class ReceiptRevert extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptRevert;
    getRa(): number;
    setRa(value: number): ReceiptRevert;
    getPc(): number;
    setPc(value: number): ReceiptRevert;
    getIs(): number;
    setIs(value: number): ReceiptRevert;

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
        id: Uint8Array | string,
        ra: number,
        pc: number,
        is: number,
    }
}

export class ReceiptLog extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptLog;
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
        id: Uint8Array | string,
        ra: number,
        rb: number,
        rc: number,
        rd: number,
        pc: number,
        is: number,
    }
}

export class ReceiptLogData extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptLogData;
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
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): ReceiptLogData;
    getPc(): number;
    setPc(value: number): ReceiptLogData;
    getIs(): number;
    setIs(value: number): ReceiptLogData;

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
        id: Uint8Array | string,
        ra: number,
        rb: number,
        ptr: number,
        len: number,
        digest: Uint8Array | string,
        data: Uint8Array | string,
        pc: number,
        is: number,
    }
}

export class ReceiptTransfer extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptTransfer;
    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): ReceiptTransfer;
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
        id: Uint8Array | string,
        to: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        pc: number,
        is: number,
    }
}

export class ReceiptTransferOut extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptTransferOut;
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
        id: Uint8Array | string,
        toAddress: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        pc: number,
        is: number,
    }
}

export class ReceiptScriptResult extends jspb.Message { 
    getResult(): ScriptResultType;
    setResult(value: ScriptResultType): ReceiptScriptResult;
    getGasUsed(): number;
    setGasUsed(value: number): ReceiptScriptResult;

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
        result: ScriptResultType,
        gasUsed: number,
    }
}

export class ReceiptMessageOut extends jspb.Message { 
    getSender(): Uint8Array | string;
    getSender_asU8(): Uint8Array;
    getSender_asB64(): string;
    setSender(value: Uint8Array | string): ReceiptMessageOut;
    getRecipient(): Uint8Array | string;
    getRecipient_asU8(): Uint8Array;
    getRecipient_asB64(): string;
    setRecipient(value: Uint8Array | string): ReceiptMessageOut;
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
        sender: Uint8Array | string,
        recipient: Uint8Array | string,
        amount: number,
        nonce: Uint8Array | string,
        len: number,
        digest: Uint8Array | string,
        data: Uint8Array | string,
    }
}

export class ReceiptMint extends jspb.Message { 
    getSubId(): Uint8Array | string;
    getSubId_asU8(): Uint8Array;
    getSubId_asB64(): string;
    setSubId(value: Uint8Array | string): ReceiptMint;
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptMint;
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
        subId: Uint8Array | string,
        id: Uint8Array | string,
        assetId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
    }
}

export class ReceiptBurn extends jspb.Message { 
    getSubId(): Uint8Array | string;
    getSubId_asU8(): Uint8Array;
    getSubId_asB64(): string;
    setSubId(value: Uint8Array | string): ReceiptBurn;
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): ReceiptBurn;
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
        subId: Uint8Array | string,
        id: Uint8Array | string,
        assetId: Uint8Array | string,
        val: number,
        pc: number,
        is: number,
    }
}

export enum ReceiptType {
    UNKNOWN_RECEIPT_TYPE = 0,
    CALL = 1,
    RETURN = 2,
    RETURN_DATA = 3,
    PANIC = 4,
    REVERT = 5,
    LOG = 6,
    LOG_DATA = 7,
    TRANSFER = 8,
    TRANSFER_OUT = 9,
    SCRIPT_RESULT = 10,
    MESSAGE_OUT = 11,
    MINT = 12,
    BURN = 13,
}

export enum ScriptResultType {
    UNKNOWN_SCRIPT_RESULT_TYPE = 0,
    SUCCESS = 1,
    SCRIPT_REVERT = 2,
    SCRIPT_PANIC = 3,
    GENERIC_FAILURE = 4,
}
