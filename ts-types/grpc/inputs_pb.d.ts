// package: inputs
// file: inputs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Input extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): Input;
    getType(): InputType;
    setType(value: InputType): Input;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): InputCoin | undefined;
    setCoin(value?: InputCoin): Input;

    hasContract(): boolean;
    clearContract(): void;
    getContract(): InputContract | undefined;
    setContract(value?: InputContract): Input;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): InputMessage | undefined;
    setMessage(value?: InputMessage): Input;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.Metadata | undefined;
    setMetadata(value?: common_pb.Metadata): Input;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.InputPointer | undefined;
    setPointer(value?: pointers_pb.InputPointer): Input;

    getInputCase(): Input.InputCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
    export type AsObject = {
        subject: string,
        type: InputType,
        coin?: InputCoin.AsObject,
        contract?: InputContract.AsObject,
        message?: InputMessage.AsObject,
        metadata?: common_pb.Metadata.AsObject,
        pointer?: pointers_pb.InputPointer.AsObject,
    }

    export enum InputCase {
        INPUT_NOT_SET = 0,
        COIN = 3,
        CONTRACT = 4,
        MESSAGE = 5,
    }

}

export class InputCoin extends jspb.Message { 
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): InputCoin;
    getOwner(): Uint8Array | string;
    getOwner_asU8(): Uint8Array;
    getOwner_asB64(): string;
    setOwner(value: Uint8Array | string): InputCoin;
    getAmount(): number;
    setAmount(value: number): InputCoin;
    getAssetId(): Uint8Array | string;
    getAssetId_asU8(): Uint8Array;
    getAssetId_asB64(): string;
    setAssetId(value: Uint8Array | string): InputCoin;

    hasTxPointer(): boolean;
    clearTxPointer(): void;
    getTxPointer(): pointers_pb.TxPointer | undefined;
    setTxPointer(value?: pointers_pb.TxPointer): InputCoin;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputCoin;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputCoin;
    getPredicate(): Uint8Array | string;
    getPredicate_asU8(): Uint8Array;
    getPredicate_asB64(): string;
    setPredicate(value: Uint8Array | string): InputCoin;
    getPredicateData(): Uint8Array | string;
    getPredicateData_asU8(): Uint8Array;
    getPredicateData_asB64(): string;
    setPredicateData(value: Uint8Array | string): InputCoin;
    getPredicateLength(): number;
    setPredicateLength(value: number): InputCoin;
    getPredicateDataLength(): number;
    setPredicateDataLength(value: number): InputCoin;
    getOutputIndex(): number;
    setOutputIndex(value: number): InputCoin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputCoin.AsObject;
    static toObject(includeInstance: boolean, msg: InputCoin): InputCoin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputCoin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputCoin;
    static deserializeBinaryFromReader(message: InputCoin, reader: jspb.BinaryReader): InputCoin;
}

export namespace InputCoin {
    export type AsObject = {
        utxoId: Uint8Array | string,
        owner: Uint8Array | string,
        amount: number,
        assetId: Uint8Array | string,
        txPointer?: pointers_pb.TxPointer.AsObject,
        witnessIndex: number,
        predicateGasUsed: number,
        predicate: Uint8Array | string,
        predicateData: Uint8Array | string,
        predicateLength: number,
        predicateDataLength: number,
        outputIndex: number,
    }
}

export class InputContract extends jspb.Message { 
    getUtxoId(): Uint8Array | string;
    getUtxoId_asU8(): Uint8Array;
    getUtxoId_asB64(): string;
    setUtxoId(value: Uint8Array | string): InputContract;
    getBalanceRoot(): Uint8Array | string;
    getBalanceRoot_asU8(): Uint8Array;
    getBalanceRoot_asB64(): string;
    setBalanceRoot(value: Uint8Array | string): InputContract;
    getStateRoot(): Uint8Array | string;
    getStateRoot_asU8(): Uint8Array;
    getStateRoot_asB64(): string;
    setStateRoot(value: Uint8Array | string): InputContract;

    hasTxPointer(): boolean;
    clearTxPointer(): void;
    getTxPointer(): pointers_pb.TxPointer | undefined;
    setTxPointer(value?: pointers_pb.TxPointer): InputContract;
    getContractId(): Uint8Array | string;
    getContractId_asU8(): Uint8Array;
    getContractId_asB64(): string;
    setContractId(value: Uint8Array | string): InputContract;
    getOutputIndex(): number;
    setOutputIndex(value: number): InputContract;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputContract.AsObject;
    static toObject(includeInstance: boolean, msg: InputContract): InputContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputContract;
    static deserializeBinaryFromReader(message: InputContract, reader: jspb.BinaryReader): InputContract;
}

export namespace InputContract {
    export type AsObject = {
        utxoId: Uint8Array | string,
        balanceRoot: Uint8Array | string,
        stateRoot: Uint8Array | string,
        txPointer?: pointers_pb.TxPointer.AsObject,
        contractId: Uint8Array | string,
        outputIndex: number,
    }
}

export class InputMessage extends jspb.Message { 
    getSender(): Uint8Array | string;
    getSender_asU8(): Uint8Array;
    getSender_asB64(): string;
    setSender(value: Uint8Array | string): InputMessage;
    getRecipient(): Uint8Array | string;
    getRecipient_asU8(): Uint8Array;
    getRecipient_asB64(): string;
    setRecipient(value: Uint8Array | string): InputMessage;
    getAmount(): number;
    setAmount(value: number): InputMessage;
    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): InputMessage;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputMessage;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputMessage;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): InputMessage;
    getPredicate(): Uint8Array | string;
    getPredicate_asU8(): Uint8Array;
    getPredicate_asB64(): string;
    setPredicate(value: Uint8Array | string): InputMessage;
    getPredicateData(): Uint8Array | string;
    getPredicateData_asU8(): Uint8Array;
    getPredicateData_asB64(): string;
    setPredicateData(value: Uint8Array | string): InputMessage;
    getDataLength(): number;
    setDataLength(value: number): InputMessage;
    getPredicateLength(): number;
    setPredicateLength(value: number): InputMessage;
    getPredicateDataLength(): number;
    setPredicateDataLength(value: number): InputMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputMessage.AsObject;
    static toObject(includeInstance: boolean, msg: InputMessage): InputMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputMessage;
    static deserializeBinaryFromReader(message: InputMessage, reader: jspb.BinaryReader): InputMessage;
}

export namespace InputMessage {
    export type AsObject = {
        sender: Uint8Array | string,
        recipient: Uint8Array | string,
        amount: number,
        nonce: Uint8Array | string,
        witnessIndex: number,
        predicateGasUsed: number,
        data: Uint8Array | string,
        predicate: Uint8Array | string,
        predicateData: Uint8Array | string,
        dataLength: number,
        predicateLength: number,
        predicateDataLength: number,
    }
}

export enum InputType {
    UNKNOWN_INPUT_TYPE = 0,
    CONTRACT = 1,
    COIN = 2,
    MESSAGE = 3,
}
