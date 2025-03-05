// package: blocks
// file: blocks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Block extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): Block;
    getBlockId(): number;
    setBlockId(value: number): Block;
    getVersion(): string;
    setVersion(value: string): Block;

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): BlockHeader | undefined;
    setHeader(value?: BlockHeader): Block;

    hasConsensus(): boolean;
    clearConsensus(): void;
    getConsensus(): BlockConsensus | undefined;
    setConsensus(value?: BlockConsensus): Block;
    clearTransactionIdsList(): void;
    getTransactionIdsList(): Array<Uint8Array | string>;
    getTransactionIdsList_asU8(): Array<Uint8Array>;
    getTransactionIdsList_asB64(): Array<string>;
    setTransactionIdsList(value: Array<Uint8Array | string>): Block;
    addTransactionIds(value: Uint8Array | string, index?: number): Uint8Array | string;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Block;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.BlockPointer | undefined;
    setPointer(value?: pointers_pb.BlockPointer): Block;

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
        blockHeight: number,
        blockId: number,
        version: string,
        header?: BlockHeader.AsObject,
        consensus?: BlockConsensus.AsObject,
        transactionIdsList: Array<Uint8Array | string>,
        metadata?: common_pb.Metadata.AsObject,
        pointer?: pointers_pb.BlockPointer.AsObject,
    }
}

export class BlockHeader extends jspb.Message { 
    getBlockHeight(): number;
    setBlockHeight(value: number): BlockHeader;
    getApplicationHash(): Uint8Array | string;
    getApplicationHash_asU8(): Uint8Array;
    getApplicationHash_asB64(): string;
    setApplicationHash(value: Uint8Array | string): BlockHeader;
    getConsensusParametersVersion(): number;
    setConsensusParametersVersion(value: number): BlockHeader;
    getDaHeight(): number;
    setDaHeight(value: number): BlockHeader;
    getEventInboxRoot(): Uint8Array | string;
    getEventInboxRoot_asU8(): Uint8Array;
    getEventInboxRoot_asB64(): string;
    setEventInboxRoot(value: Uint8Array | string): BlockHeader;
    getMessageOutboxRoot(): Uint8Array | string;
    getMessageOutboxRoot_asU8(): Uint8Array;
    getMessageOutboxRoot_asB64(): string;
    setMessageOutboxRoot(value: Uint8Array | string): BlockHeader;
    getMessageReceiptCount(): number;
    setMessageReceiptCount(value: number): BlockHeader;
    getPrevRoot(): Uint8Array | string;
    getPrevRoot_asU8(): Uint8Array;
    getPrevRoot_asB64(): string;
    setPrevRoot(value: Uint8Array | string): BlockHeader;
    getStateTransitionBytecodeVersion(): number;
    setStateTransitionBytecodeVersion(value: number): BlockHeader;
    getTime(): number;
    setTime(value: number): BlockHeader;
    getTransactionsCount(): number;
    setTransactionsCount(value: number): BlockHeader;
    getTransactionsRoot(): Uint8Array | string;
    getTransactionsRoot_asU8(): Uint8Array;
    getTransactionsRoot_asB64(): string;
    setTransactionsRoot(value: Uint8Array | string): BlockHeader;
    getVersion(): number;
    setVersion(value: number): BlockHeader;

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
        blockHeight: number,
        applicationHash: Uint8Array | string,
        consensusParametersVersion: number,
        daHeight: number,
        eventInboxRoot: Uint8Array | string,
        messageOutboxRoot: Uint8Array | string,
        messageReceiptCount: number,
        prevRoot: Uint8Array | string,
        stateTransitionBytecodeVersion: number,
        time: number,
        transactionsCount: number,
        transactionsRoot: Uint8Array | string,
        version: number,
    }
}

export class BlockConsensus extends jspb.Message { 
    getChainId(): number;
    setChainId(value: number): BlockConsensus;
    getProducer(): Uint8Array | string;
    getProducer_asU8(): Uint8Array;
    getProducer_asB64(): string;
    setProducer(value: Uint8Array | string): BlockConsensus;
    getBlockHeight(): number;
    setBlockHeight(value: number): BlockConsensus;
    getConsensusType(): ConsensusType;
    setConsensusType(value: ConsensusType): BlockConsensus;
    getChainConfigHash(): Uint8Array | string;
    getChainConfigHash_asU8(): Uint8Array;
    getChainConfigHash_asB64(): string;
    setChainConfigHash(value: Uint8Array | string): BlockConsensus;
    getCoinsRoot(): Uint8Array | string;
    getCoinsRoot_asU8(): Uint8Array;
    getCoinsRoot_asB64(): string;
    setCoinsRoot(value: Uint8Array | string): BlockConsensus;
    getContractsRoot(): Uint8Array | string;
    getContractsRoot_asU8(): Uint8Array;
    getContractsRoot_asB64(): string;
    setContractsRoot(value: Uint8Array | string): BlockConsensus;
    getMessagesRoot(): Uint8Array | string;
    getMessagesRoot_asU8(): Uint8Array;
    getMessagesRoot_asB64(): string;
    setMessagesRoot(value: Uint8Array | string): BlockConsensus;
    getTransactionsRoot(): Uint8Array | string;
    getTransactionsRoot_asU8(): Uint8Array;
    getTransactionsRoot_asB64(): string;
    setTransactionsRoot(value: Uint8Array | string): BlockConsensus;
    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): BlockConsensus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockConsensus.AsObject;
    static toObject(includeInstance: boolean, msg: BlockConsensus): BlockConsensus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockConsensus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockConsensus;
    static deserializeBinaryFromReader(message: BlockConsensus, reader: jspb.BinaryReader): BlockConsensus;
}

export namespace BlockConsensus {
    export type AsObject = {
        chainId: number,
        producer: Uint8Array | string,
        blockHeight: number,
        consensusType: ConsensusType,
        chainConfigHash: Uint8Array | string,
        coinsRoot: Uint8Array | string,
        contractsRoot: Uint8Array | string,
        messagesRoot: Uint8Array | string,
        transactionsRoot: Uint8Array | string,
        signature: Uint8Array | string,
    }
}

export enum ConsensusType {
    UNKNOWN_CONSENSUS_TYPE = 0,
    GENESIS = 1,
    POA_CONSENSUS = 2,
}
