// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Metadata extends jspb.Message { 
    getBlockTime(): string;
    setBlockTime(value: string): Metadata;
    getPublishedAt(): string;
    setPublishedAt(value: string): Metadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
    export type AsObject = {
        blockTime: string,
        publishedAt: string,
    }
}

export class BlockMetadata extends jspb.Message { 
    getBlockTime(): string;
    setBlockTime(value: string): BlockMetadata;
    getPublishedAt(): string;
    setPublishedAt(value: string): BlockMetadata;
    getBlockPropagationMs(): string;
    setBlockPropagationMs(value: string): BlockMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BlockMetadata): BlockMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockMetadata;
    static deserializeBinaryFromReader(message: BlockMetadata, reader: jspb.BinaryReader): BlockMetadata;
}

export namespace BlockMetadata {
    export type AsObject = {
        blockTime: string,
        publishedAt: string,
        blockPropagationMs: string,
    }
}
