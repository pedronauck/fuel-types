// package: assets
// file: assets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Asset extends jspb.Message { 
    getType(): string;
    setType(value: string): Asset;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.AssetPointer | undefined;
    setPointer(value?: pointers_pb.AssetPointer): Asset;

    hasData(): boolean;
    clearData(): void;
    getData(): AssetData | undefined;
    setData(value?: AssetData): Asset;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
    export type AsObject = {
        type: string,
        pointer?: pointers_pb.AssetPointer.AsObject,
        data?: AssetData.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }
}

export class AssetData extends jspb.Message { 
    getSubId(): string;
    setSubId(value: string): AssetData;
    getName(): string;
    setName(value: string): AssetData;
    getSymbol(): string;
    setSymbol(value: string): AssetData;
    getDecimals(): number;
    setDecimals(value: number): AssetData;
    getTotalSupply(): number;
    setTotalSupply(value: number): AssetData;
    getOwner(): string;
    setOwner(value: string): AssetData;
    getMetadata(): string;
    setMetadata(value: string): AssetData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetData.AsObject;
    static toObject(includeInstance: boolean, msg: AssetData): AssetData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetData;
    static deserializeBinaryFromReader(message: AssetData, reader: jspb.BinaryReader): AssetData;
}

export namespace AssetData {
    export type AsObject = {
        subId: string,
        name: string,
        symbol: string,
        decimals: number,
        totalSupply: number,
        owner: string,
        metadata: string,
    }
}
