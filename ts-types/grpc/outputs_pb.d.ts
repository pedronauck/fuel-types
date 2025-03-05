// package: outputs
// file: outputs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Output extends jspb.Message { 
    getType(): OutputType;
    setType(value: OutputType): Output;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.OutputPointer | undefined;
    setPointer(value?: pointers_pb.OutputPointer): Output;

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

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Output;

    getDataCase(): Output.DataCase;

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
        type: OutputType,
        pointer?: pointers_pb.OutputPointer.AsObject,
        coin?: OutputCoin.AsObject,
        contract?: OutputContract.AsObject,
        change?: OutputChange.AsObject,
        variable?: OutputVariable.AsObject,
        contractCreated?: OutputContractCreated.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        COIN = 3,
        CONTRACT = 4,
        CHANGE = 5,
        VARIABLE = 6,
        CONTRACT_CREATED = 7,
    }

}

export class OutputCoin extends jspb.Message { 
    getTo(): string;
    setTo(value: string): OutputCoin;
    getAmount(): number;
    setAmount(value: number): OutputCoin;
    getAssetId(): string;
    setAssetId(value: string): OutputCoin;

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
        to: string,
        amount: number,
        assetId: string,
    }
}

export class OutputContract extends jspb.Message { 
    getBalanceRoot(): string;
    setBalanceRoot(value: string): OutputContract;
    getStateRoot(): string;
    setStateRoot(value: string): OutputContract;
    getInputIndex(): number;
    setInputIndex(value: number): OutputContract;

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
        balanceRoot: string,
        stateRoot: string,
        inputIndex: number,
    }
}

export class OutputContractCreated extends jspb.Message { 
    getContractId(): string;
    setContractId(value: string): OutputContractCreated;
    getStateRoot(): string;
    setStateRoot(value: string): OutputContractCreated;

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
        contractId: string,
        stateRoot: string,
    }
}

export class OutputChange extends jspb.Message { 
    getTo(): string;
    setTo(value: string): OutputChange;
    getAmount(): number;
    setAmount(value: number): OutputChange;
    getAssetId(): string;
    setAssetId(value: string): OutputChange;

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
        to: string,
        amount: number,
        assetId: string,
    }
}

export class OutputVariable extends jspb.Message { 
    getTo(): string;
    setTo(value: string): OutputVariable;
    getAmount(): number;
    setAmount(value: number): OutputVariable;
    getAssetId(): string;
    setAssetId(value: string): OutputVariable;

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
        to: string,
        amount: number,
        assetId: string,
    }
}

export enum OutputType {
    UNKNOWN_OUTPUT_TYPE = 0,
    COIN = 1,
    CONTRACT = 2,
    CHANGE = 3,
    VARIABLE = 4,
    CONTRACT_CREATED = 5,
}
