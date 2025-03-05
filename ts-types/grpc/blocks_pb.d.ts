// package: blocks
// file: blocks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Block extends jspb.Message { 

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.BlockPointer | undefined;
    setPointer(value?: pointers_pb.BlockPointer): Block;

    hasData(): boolean;
    clearData(): void;
    getData(): BlockData | undefined;
    setData(value?: BlockData): Block;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.BlockMetadata | undefined;
    setMetadata(value?: common_pb.BlockMetadata): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        pointer?: pointers_pb.BlockPointer.AsObject,
        data?: BlockData.AsObject,
        metadata?: common_pb.BlockMetadata.AsObject,
    }
}

export class BlockData extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): BlockData;
    getId(): number;
    setId(value: number): BlockData;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): BlockHeader | undefined;
    setHeader(value?: BlockHeader): BlockData;
    getConsensusType(): ConsensusType;
    setConsensusType(value: ConsensusType): BlockData;

    hasGenesis(): boolean;
    clearGenesis(): void;
    getGenesis(): BlockConsensusGenesis | undefined;
    setGenesis(value?: BlockConsensusGenesis): BlockData;

    hasPoa(): boolean;
    clearPoa(): void;
    getPoa(): BlockConsensusPoa | undefined;
    setPoa(value?: BlockConsensusPoa): BlockData;
    clearTransactionIdsList(): void;
    getTransactionIdsList(): Array<string>;
    setTransactionIdsList(value: Array<string>): BlockData;
    addTransactionIds(value: string, index?: number): string;

    getConsensusCase(): BlockData.ConsensusCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockData.AsObject;
    static toObject(includeInstance: boolean, msg: BlockData): BlockData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockData;
    static deserializeBinaryFromReader(message: BlockData, reader: jspb.BinaryReader): BlockData;
}

export namespace BlockData {
    export type AsObject = {
        version: string,
        id: number,
        header?: BlockHeader.AsObject,
        consensusType: ConsensusType,
        genesis?: BlockConsensusGenesis.AsObject,
        poa?: BlockConsensusPoa.AsObject,
        transactionIdsList: Array<string>,
    }

    export enum ConsensusCase {
        CONSENSUS_NOT_SET = 0,
        GENESIS = 6,
        POA = 7,
    }

}

export class BlockHeader extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): BlockHeader;
    getId(): string;
    setId(value: string): BlockHeader;
    getChainId(): number;
    setChainId(value: number): BlockHeader;
    getProducer(): string;
    setProducer(value: string): BlockHeader;
    getHeight(): number;
    setHeight(value: number): BlockHeader;
    getDaHeight(): number;
    setDaHeight(value: number): BlockHeader;
    getConsensusParametersVersion(): number;
    setConsensusParametersVersion(value: number): BlockHeader;
    getStateTransitionBytecodeVersion(): number;
    setStateTransitionBytecodeVersion(value: number): BlockHeader;
    getTransactionsCount(): number;
    setTransactionsCount(value: number): BlockHeader;
    getMessageReceiptCount(): number;
    setMessageReceiptCount(value: number): BlockHeader;
    getTransactionsRoot(): string;
    setTransactionsRoot(value: string): BlockHeader;
    getMessageOutboxRoot(): string;
    setMessageOutboxRoot(value: string): BlockHeader;
    getEventInboxRoot(): string;
    setEventInboxRoot(value: string): BlockHeader;
    getPrevRoot(): string;
    setPrevRoot(value: string): BlockHeader;
    getTime(): number;
    setTime(value: number): BlockHeader;
    getApplicationHash(): string;
    setApplicationHash(value: string): BlockHeader;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockHeader.AsObject;
    static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockHeader;
    static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
    export type AsObject = {
        version: string,
        id: string,
        chainId: number,
        producer: string,
        height: number,
        daHeight: number,
        consensusParametersVersion: number,
        stateTransitionBytecodeVersion: number,
        transactionsCount: number,
        messageReceiptCount: number,
        transactionsRoot: string,
        messageOutboxRoot: string,
        eventInboxRoot: string,
        prevRoot: string,
        time: number,
        applicationHash: string,
    }
}

export class BlockConsensusGenesis extends jspb.Message { 
    getChainConfigHash(): string;
    setChainConfigHash(value: string): BlockConsensusGenesis;
    getCoinsRoot(): string;
    setCoinsRoot(value: string): BlockConsensusGenesis;
    getContractsRoot(): string;
    setContractsRoot(value: string): BlockConsensusGenesis;
    getMessagesRoot(): string;
    setMessagesRoot(value: string): BlockConsensusGenesis;
    getTransactionsRoot(): string;
    setTransactionsRoot(value: string): BlockConsensusGenesis;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockConsensusGenesis.AsObject;
    static toObject(includeInstance: boolean, msg: BlockConsensusGenesis): BlockConsensusGenesis.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockConsensusGenesis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockConsensusGenesis;
    static deserializeBinaryFromReader(message: BlockConsensusGenesis, reader: jspb.BinaryReader): BlockConsensusGenesis;
}

export namespace BlockConsensusGenesis {
    export type AsObject = {
        chainConfigHash: string,
        coinsRoot: string,
        contractsRoot: string,
        messagesRoot: string,
        transactionsRoot: string,
    }
}

export class BlockConsensusPoa extends jspb.Message { 
    getSignature(): string;
    setSignature(value: string): BlockConsensusPoa;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockConsensusPoa.AsObject;
    static toObject(includeInstance: boolean, msg: BlockConsensusPoa): BlockConsensusPoa.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockConsensusPoa, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockConsensusPoa;
    static deserializeBinaryFromReader(message: BlockConsensusPoa, reader: jspb.BinaryReader): BlockConsensusPoa;
}

export namespace BlockConsensusPoa {
    export type AsObject = {
        signature: string,
    }
}

export enum ConsensusType {
    UNKNOWN_CONSENSUS_TYPE = 0,
    GENESIS = 1,
    POA_CONSENSUS = 2,
}
