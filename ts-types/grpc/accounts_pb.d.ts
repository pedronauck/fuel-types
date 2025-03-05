// package: accounts
// file: accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Predicate extends jspb.Message { 
    getType(): AccountType;
    setType(value: AccountType): Predicate;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.PredicatePointer | undefined;
    setPointer(value?: pointers_pb.PredicatePointer): Predicate;

    hasData(): boolean;
    clearData(): void;
    getData(): PredicateData | undefined;
    setData(value?: PredicateData): Predicate;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Predicate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Predicate.AsObject;
    static toObject(includeInstance: boolean, msg: Predicate): Predicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Predicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Predicate;
    static deserializeBinaryFromReader(message: Predicate, reader: jspb.BinaryReader): Predicate;
}

export namespace Predicate {
    export type AsObject = {
        type: AccountType,
        pointer?: pointers_pb.PredicatePointer.AsObject,
        data?: PredicateData.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }
}

export class PredicateData extends jspb.Message { 
    getBytecode(): string;
    setBytecode(value: string): PredicateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PredicateData.AsObject;
    static toObject(includeInstance: boolean, msg: PredicateData): PredicateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PredicateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PredicateData;
    static deserializeBinaryFromReader(message: PredicateData, reader: jspb.BinaryReader): PredicateData;
}

export namespace PredicateData {
    export type AsObject = {
        bytecode: string,
    }
}

export class Contract extends jspb.Message { 
    getType(): AccountType;
    setType(value: AccountType): Contract;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.ContractPointer | undefined;
    setPointer(value?: pointers_pb.ContractPointer): Contract;

    hasData(): boolean;
    clearData(): void;
    getData(): ContractData | undefined;
    setData(value?: ContractData): Contract;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Contract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
    export type AsObject = {
        type: AccountType,
        pointer?: pointers_pb.ContractPointer.AsObject,
        data?: ContractData.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }
}

export class ContractData extends jspb.Message { 
    getBytecode(): string;
    setBytecode(value: string): ContractData;
    getAbi(): string;
    setAbi(value: string): ContractData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContractData.AsObject;
    static toObject(includeInstance: boolean, msg: ContractData): ContractData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContractData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContractData;
    static deserializeBinaryFromReader(message: ContractData, reader: jspb.BinaryReader): ContractData;
}

export namespace ContractData {
    export type AsObject = {
        bytecode: string,
        abi: string,
    }
}

export class Script extends jspb.Message { 
    getType(): AccountType;
    setType(value: AccountType): Script;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.ScriptPointer | undefined;
    setPointer(value?: pointers_pb.ScriptPointer): Script;

    hasData(): boolean;
    clearData(): void;
    getData(): ScriptData | undefined;
    setData(value?: ScriptData): Script;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Script;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Script.AsObject;
    static toObject(includeInstance: boolean, msg: Script): Script.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Script, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Script;
    static deserializeBinaryFromReader(message: Script, reader: jspb.BinaryReader): Script;
}

export namespace Script {
    export type AsObject = {
        type: AccountType,
        pointer?: pointers_pb.ScriptPointer.AsObject,
        data?: ScriptData.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }
}

export class ScriptData extends jspb.Message { 
    getBytecode(): string;
    setBytecode(value: string): ScriptData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScriptData.AsObject;
    static toObject(includeInstance: boolean, msg: ScriptData): ScriptData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScriptData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScriptData;
    static deserializeBinaryFromReader(message: ScriptData, reader: jspb.BinaryReader): ScriptData;
}

export namespace ScriptData {
    export type AsObject = {
        bytecode: string,
    }
}

export enum AccountType {
    UNKNOWN_ACCOUNT_TYPE = 0,
    PREDICATE = 1,
    CONTRACT = 2,
    SCRIPT = 3,
}
