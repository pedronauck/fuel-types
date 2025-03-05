// package: inputs
// file: inputs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as pointers_pb from "./pointers_pb";
import * as common_pb from "./common_pb";

export class Input extends jspb.Message { 
    getType(): InputType;
    setType(value: InputType): Input;

    hasPointer(): boolean;
    clearPointer(): void;
    getPointer(): pointers_pb.InputPointer | undefined;
    setPointer(value?: pointers_pb.InputPointer): Input;

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

    getDataCase(): Input.DataCase;

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
        type: InputType,
        pointer?: pointers_pb.InputPointer.AsObject,
        coin?: InputCoin.AsObject,
        contract?: InputContract.AsObject,
        message?: InputMessage.AsObject,
        metadata?: common_pb.Metadata.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        COIN = 3,
        CONTRACT = 4,
        MESSAGE = 5,
    }

}

export class InputCoin extends jspb.Message { 
    getUtxoId(): string;
    setUtxoId(value: string): InputCoin;
    getOwner(): string;
    setOwner(value: string): InputCoin;
    getAmount(): number;
    setAmount(value: number): InputCoin;
    getAssetId(): string;
    setAssetId(value: string): InputCoin;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputCoin;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputCoin;
    getPredicate(): string;
    setPredicate(value: string): InputCoin;
    getPredicateData(): string;
    setPredicateData(value: string): InputCoin;
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
        utxoId: string,
        owner: string,
        amount: number,
        assetId: string,
        witnessIndex: number,
        predicateGasUsed: number,
        predicate: string,
        predicateData: string,
        predicateLength: number,
        predicateDataLength: number,
        outputIndex: number,
    }
}

export class InputContract extends jspb.Message { 
    getUtxoId(): string;
    setUtxoId(value: string): InputContract;
    getBalanceRoot(): string;
    setBalanceRoot(value: string): InputContract;
    getStateRoot(): string;
    setStateRoot(value: string): InputContract;
    getContractId(): string;
    setContractId(value: string): InputContract;
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
        utxoId: string,
        balanceRoot: string,
        stateRoot: string,
        contractId: string,
        outputIndex: number,
    }
}

export class InputMessage extends jspb.Message { 
    getSender(): string;
    setSender(value: string): InputMessage;
    getRecipient(): string;
    setRecipient(value: string): InputMessage;
    getAmount(): number;
    setAmount(value: number): InputMessage;
    getNonce(): string;
    setNonce(value: string): InputMessage;
    getWitnessIndex(): number;
    setWitnessIndex(value: number): InputMessage;
    getPredicateGasUsed(): number;
    setPredicateGasUsed(value: number): InputMessage;
    getData(): string;
    setData(value: string): InputMessage;
    getPredicate(): string;
    setPredicate(value: string): InputMessage;
    getPredicateData(): string;
    setPredicateData(value: string): InputMessage;
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
        sender: string,
        recipient: string,
        amount: number,
        nonce: string,
        witnessIndex: number,
        predicateGasUsed: number,
        data: string,
        predicate: string,
        predicateData: string,
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
