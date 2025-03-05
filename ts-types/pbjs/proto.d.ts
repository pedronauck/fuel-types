import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace blocks. */
export namespace blocks {

    /** ConsensusType enum. */
    enum ConsensusType {
        UNKNOWN_CONSENSUS_TYPE = 0,
        GENESIS = 1,
        POA_CONSENSUS = 2
    }

    /** Properties of a Block. */
    interface IBlock {

        /** Block blockHeight */
        blockHeight?: (number|Long|null);

        /** Block blockId */
        blockId?: (number|null);

        /** Block version */
        version?: (string|null);

        /** Block header */
        header?: (blocks.IBlockHeader|null);

        /** Block consensus */
        consensus?: (blocks.IBlockConsensus|null);

        /** Block transactionIds */
        transactionIds?: (Uint8Array[]|null);

        /** Block metadata */
        metadata?: (common.IMetadata|null);

        /** Block pointer */
        pointer?: (pointers.IBlockPointer|null);
    }

    /** Represents a Block. */
    class Block implements IBlock {

        /**
         * Constructs a new Block.
         * @param [properties] Properties to set
         */
        constructor(properties?: blocks.IBlock);

        /** Block blockHeight. */
        public blockHeight: (number|Long);

        /** Block blockId. */
        public blockId: number;

        /** Block version. */
        public version: string;

        /** Block header. */
        public header?: (blocks.IBlockHeader|null);

        /** Block consensus. */
        public consensus?: (blocks.IBlockConsensus|null);

        /** Block transactionIds. */
        public transactionIds: Uint8Array[];

        /** Block metadata. */
        public metadata?: (common.IMetadata|null);

        /** Block pointer. */
        public pointer?: (pointers.IBlockPointer|null);

        /**
         * Creates a new Block instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Block instance
         */
        public static create(properties?: blocks.IBlock): blocks.Block;

        /**
         * Encodes the specified Block message. Does not implicitly {@link blocks.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: blocks.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link blocks.Block.verify|verify} messages.
         * @param message Block message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: blocks.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blocks.Block;

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blocks.Block;

        /**
         * Verifies a Block message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Block
         */
        public static fromObject(object: { [k: string]: any }): blocks.Block;

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @param message Block
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: blocks.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Block to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Block
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BlockHeader. */
    interface IBlockHeader {

        /** BlockHeader blockHeight */
        blockHeight?: (number|Long|null);

        /** BlockHeader applicationHash */
        applicationHash?: (Uint8Array|null);

        /** BlockHeader consensusParametersVersion */
        consensusParametersVersion?: (number|null);

        /** BlockHeader daHeight */
        daHeight?: (number|Long|null);

        /** BlockHeader eventInboxRoot */
        eventInboxRoot?: (Uint8Array|null);

        /** BlockHeader messageOutboxRoot */
        messageOutboxRoot?: (Uint8Array|null);

        /** BlockHeader messageReceiptCount */
        messageReceiptCount?: (number|null);

        /** BlockHeader prevRoot */
        prevRoot?: (Uint8Array|null);

        /** BlockHeader stateTransitionBytecodeVersion */
        stateTransitionBytecodeVersion?: (number|null);

        /** BlockHeader time */
        time?: (number|Long|null);

        /** BlockHeader transactionsCount */
        transactionsCount?: (number|null);

        /** BlockHeader transactionsRoot */
        transactionsRoot?: (Uint8Array|null);

        /** BlockHeader version */
        version?: (number|null);
    }

    /** Represents a BlockHeader. */
    class BlockHeader implements IBlockHeader {

        /**
         * Constructs a new BlockHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: blocks.IBlockHeader);

        /** BlockHeader blockHeight. */
        public blockHeight: (number|Long);

        /** BlockHeader applicationHash. */
        public applicationHash: Uint8Array;

        /** BlockHeader consensusParametersVersion. */
        public consensusParametersVersion: number;

        /** BlockHeader daHeight. */
        public daHeight: (number|Long);

        /** BlockHeader eventInboxRoot. */
        public eventInboxRoot: Uint8Array;

        /** BlockHeader messageOutboxRoot. */
        public messageOutboxRoot: Uint8Array;

        /** BlockHeader messageReceiptCount. */
        public messageReceiptCount: number;

        /** BlockHeader prevRoot. */
        public prevRoot: Uint8Array;

        /** BlockHeader stateTransitionBytecodeVersion. */
        public stateTransitionBytecodeVersion: number;

        /** BlockHeader time. */
        public time: (number|Long);

        /** BlockHeader transactionsCount. */
        public transactionsCount: number;

        /** BlockHeader transactionsRoot. */
        public transactionsRoot: Uint8Array;

        /** BlockHeader version. */
        public version: number;

        /**
         * Creates a new BlockHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockHeader instance
         */
        public static create(properties?: blocks.IBlockHeader): blocks.BlockHeader;

        /**
         * Encodes the specified BlockHeader message. Does not implicitly {@link blocks.BlockHeader.verify|verify} messages.
         * @param message BlockHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: blocks.IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link blocks.BlockHeader.verify|verify} messages.
         * @param message BlockHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: blocks.IBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blocks.BlockHeader;

        /**
         * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blocks.BlockHeader;

        /**
         * Verifies a BlockHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockHeader
         */
        public static fromObject(object: { [k: string]: any }): blocks.BlockHeader;

        /**
         * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
         * @param message BlockHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: blocks.BlockHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BlockHeader
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BlockConsensus. */
    interface IBlockConsensus {

        /** BlockConsensus chainId */
        chainId?: (number|Long|null);

        /** BlockConsensus producer */
        producer?: (Uint8Array|null);

        /** BlockConsensus blockHeight */
        blockHeight?: (number|Long|null);

        /** BlockConsensus consensusType */
        consensusType?: (blocks.ConsensusType|null);

        /** BlockConsensus chainConfigHash */
        chainConfigHash?: (Uint8Array|null);

        /** BlockConsensus coinsRoot */
        coinsRoot?: (Uint8Array|null);

        /** BlockConsensus contractsRoot */
        contractsRoot?: (Uint8Array|null);

        /** BlockConsensus messagesRoot */
        messagesRoot?: (Uint8Array|null);

        /** BlockConsensus transactionsRoot */
        transactionsRoot?: (Uint8Array|null);

        /** BlockConsensus signature */
        signature?: (Uint8Array|null);
    }

    /** Represents a BlockConsensus. */
    class BlockConsensus implements IBlockConsensus {

        /**
         * Constructs a new BlockConsensus.
         * @param [properties] Properties to set
         */
        constructor(properties?: blocks.IBlockConsensus);

        /** BlockConsensus chainId. */
        public chainId: (number|Long);

        /** BlockConsensus producer. */
        public producer: Uint8Array;

        /** BlockConsensus blockHeight. */
        public blockHeight: (number|Long);

        /** BlockConsensus consensusType. */
        public consensusType: blocks.ConsensusType;

        /** BlockConsensus chainConfigHash. */
        public chainConfigHash: Uint8Array;

        /** BlockConsensus coinsRoot. */
        public coinsRoot: Uint8Array;

        /** BlockConsensus contractsRoot. */
        public contractsRoot: Uint8Array;

        /** BlockConsensus messagesRoot. */
        public messagesRoot: Uint8Array;

        /** BlockConsensus transactionsRoot. */
        public transactionsRoot: Uint8Array;

        /** BlockConsensus signature. */
        public signature: Uint8Array;

        /**
         * Creates a new BlockConsensus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockConsensus instance
         */
        public static create(properties?: blocks.IBlockConsensus): blocks.BlockConsensus;

        /**
         * Encodes the specified BlockConsensus message. Does not implicitly {@link blocks.BlockConsensus.verify|verify} messages.
         * @param message BlockConsensus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: blocks.IBlockConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockConsensus message, length delimited. Does not implicitly {@link blocks.BlockConsensus.verify|verify} messages.
         * @param message BlockConsensus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: blocks.IBlockConsensus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockConsensus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockConsensus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blocks.BlockConsensus;

        /**
         * Decodes a BlockConsensus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockConsensus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blocks.BlockConsensus;

        /**
         * Verifies a BlockConsensus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockConsensus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockConsensus
         */
        public static fromObject(object: { [k: string]: any }): blocks.BlockConsensus;

        /**
         * Creates a plain object from a BlockConsensus message. Also converts values to other types if specified.
         * @param message BlockConsensus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: blocks.BlockConsensus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockConsensus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BlockConsensus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace pointers. */
export namespace pointers {

    /** Properties of a BlockPointer. */
    interface IBlockPointer {

        /** BlockPointer blockHeight */
        blockHeight?: (number|Long|null);
    }

    /** Represents a BlockPointer. */
    class BlockPointer implements IBlockPointer {

        /**
         * Constructs a new BlockPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.IBlockPointer);

        /** BlockPointer blockHeight. */
        public blockHeight: (number|Long);

        /**
         * Creates a new BlockPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockPointer instance
         */
        public static create(properties?: pointers.IBlockPointer): pointers.BlockPointer;

        /**
         * Encodes the specified BlockPointer message. Does not implicitly {@link pointers.BlockPointer.verify|verify} messages.
         * @param message BlockPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.IBlockPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockPointer message, length delimited. Does not implicitly {@link pointers.BlockPointer.verify|verify} messages.
         * @param message BlockPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.IBlockPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.BlockPointer;

        /**
         * Decodes a BlockPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.BlockPointer;

        /**
         * Verifies a BlockPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.BlockPointer;

        /**
         * Creates a plain object from a BlockPointer message. Also converts values to other types if specified.
         * @param message BlockPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.BlockPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BlockPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TxPointer. */
    interface ITxPointer {

        /** TxPointer blockHeight */
        blockHeight?: (number|Long|null);

        /** TxPointer txId */
        txId?: (number|null);

        /** TxPointer txIndex */
        txIndex?: (number|null);
    }

    /** Represents a TxPointer. */
    class TxPointer implements ITxPointer {

        /**
         * Constructs a new TxPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.ITxPointer);

        /** TxPointer blockHeight. */
        public blockHeight: (number|Long);

        /** TxPointer txId. */
        public txId: number;

        /** TxPointer txIndex. */
        public txIndex: number;

        /**
         * Creates a new TxPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxPointer instance
         */
        public static create(properties?: pointers.ITxPointer): pointers.TxPointer;

        /**
         * Encodes the specified TxPointer message. Does not implicitly {@link pointers.TxPointer.verify|verify} messages.
         * @param message TxPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.ITxPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxPointer message, length delimited. Does not implicitly {@link pointers.TxPointer.verify|verify} messages.
         * @param message TxPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.ITxPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.TxPointer;

        /**
         * Decodes a TxPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.TxPointer;

        /**
         * Verifies a TxPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.TxPointer;

        /**
         * Creates a plain object from a TxPointer message. Also converts values to other types if specified.
         * @param message TxPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.TxPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TxPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InputPointer. */
    interface IInputPointer {

        /** InputPointer blockHeight */
        blockHeight?: (number|Long|null);

        /** InputPointer txId */
        txId?: (number|null);

        /** InputPointer txIndex */
        txIndex?: (number|null);

        /** InputPointer inputIndex */
        inputIndex?: (number|null);
    }

    /** Represents an InputPointer. */
    class InputPointer implements IInputPointer {

        /**
         * Constructs a new InputPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.IInputPointer);

        /** InputPointer blockHeight. */
        public blockHeight: (number|Long);

        /** InputPointer txId. */
        public txId: number;

        /** InputPointer txIndex. */
        public txIndex: number;

        /** InputPointer inputIndex. */
        public inputIndex: number;

        /**
         * Creates a new InputPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputPointer instance
         */
        public static create(properties?: pointers.IInputPointer): pointers.InputPointer;

        /**
         * Encodes the specified InputPointer message. Does not implicitly {@link pointers.InputPointer.verify|verify} messages.
         * @param message InputPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.IInputPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputPointer message, length delimited. Does not implicitly {@link pointers.InputPointer.verify|verify} messages.
         * @param message InputPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.IInputPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.InputPointer;

        /**
         * Decodes an InputPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.InputPointer;

        /**
         * Verifies an InputPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.InputPointer;

        /**
         * Creates a plain object from an InputPointer message. Also converts values to other types if specified.
         * @param message InputPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.InputPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InputPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputPointer. */
    interface IOutputPointer {

        /** OutputPointer blockHeight */
        blockHeight?: (number|Long|null);

        /** OutputPointer txId */
        txId?: (number|null);

        /** OutputPointer txIndex */
        txIndex?: (number|null);

        /** OutputPointer outputIndex */
        outputIndex?: (number|null);
    }

    /** Represents an OutputPointer. */
    class OutputPointer implements IOutputPointer {

        /**
         * Constructs a new OutputPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.IOutputPointer);

        /** OutputPointer blockHeight. */
        public blockHeight: (number|Long);

        /** OutputPointer txId. */
        public txId: number;

        /** OutputPointer txIndex. */
        public txIndex: number;

        /** OutputPointer outputIndex. */
        public outputIndex: number;

        /**
         * Creates a new OutputPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputPointer instance
         */
        public static create(properties?: pointers.IOutputPointer): pointers.OutputPointer;

        /**
         * Encodes the specified OutputPointer message. Does not implicitly {@link pointers.OutputPointer.verify|verify} messages.
         * @param message OutputPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.IOutputPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputPointer message, length delimited. Does not implicitly {@link pointers.OutputPointer.verify|verify} messages.
         * @param message OutputPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.IOutputPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.OutputPointer;

        /**
         * Decodes an OutputPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.OutputPointer;

        /**
         * Verifies an OutputPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.OutputPointer;

        /**
         * Creates a plain object from an OutputPointer message. Also converts values to other types if specified.
         * @param message OutputPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.OutputPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptPointer. */
    interface IReceiptPointer {

        /** ReceiptPointer blockHeight */
        blockHeight?: (number|Long|null);

        /** ReceiptPointer txId */
        txId?: (number|null);

        /** ReceiptPointer txIndex */
        txIndex?: (number|null);

        /** ReceiptPointer receiptIndex */
        receiptIndex?: (number|null);
    }

    /** Represents a ReceiptPointer. */
    class ReceiptPointer implements IReceiptPointer {

        /**
         * Constructs a new ReceiptPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.IReceiptPointer);

        /** ReceiptPointer blockHeight. */
        public blockHeight: (number|Long);

        /** ReceiptPointer txId. */
        public txId: number;

        /** ReceiptPointer txIndex. */
        public txIndex: number;

        /** ReceiptPointer receiptIndex. */
        public receiptIndex: number;

        /**
         * Creates a new ReceiptPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptPointer instance
         */
        public static create(properties?: pointers.IReceiptPointer): pointers.ReceiptPointer;

        /**
         * Encodes the specified ReceiptPointer message. Does not implicitly {@link pointers.ReceiptPointer.verify|verify} messages.
         * @param message ReceiptPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.IReceiptPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptPointer message, length delimited. Does not implicitly {@link pointers.ReceiptPointer.verify|verify} messages.
         * @param message ReceiptPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.IReceiptPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.ReceiptPointer;

        /**
         * Decodes a ReceiptPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.ReceiptPointer;

        /**
         * Verifies a ReceiptPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.ReceiptPointer;

        /**
         * Creates a plain object from a ReceiptPointer message. Also converts values to other types if specified.
         * @param message ReceiptPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.ReceiptPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UtxoPointer. */
    interface IUtxoPointer {

        /** UtxoPointer blockHeight */
        blockHeight?: (number|Long|null);

        /** UtxoPointer txId */
        txId?: (number|null);

        /** UtxoPointer txIndex */
        txIndex?: (number|null);

        /** UtxoPointer utxoId */
        utxoId?: (number|null);

        /** UtxoPointer inputIndex */
        inputIndex?: (number|null);

        /** UtxoPointer outputIndex */
        outputIndex?: (number|null);
    }

    /** Represents an UtxoPointer. */
    class UtxoPointer implements IUtxoPointer {

        /**
         * Constructs a new UtxoPointer.
         * @param [properties] Properties to set
         */
        constructor(properties?: pointers.IUtxoPointer);

        /** UtxoPointer blockHeight. */
        public blockHeight: (number|Long);

        /** UtxoPointer txId. */
        public txId: number;

        /** UtxoPointer txIndex. */
        public txIndex: number;

        /** UtxoPointer utxoId. */
        public utxoId: number;

        /** UtxoPointer inputIndex. */
        public inputIndex: number;

        /** UtxoPointer outputIndex. */
        public outputIndex: number;

        /**
         * Creates a new UtxoPointer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UtxoPointer instance
         */
        public static create(properties?: pointers.IUtxoPointer): pointers.UtxoPointer;

        /**
         * Encodes the specified UtxoPointer message. Does not implicitly {@link pointers.UtxoPointer.verify|verify} messages.
         * @param message UtxoPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pointers.IUtxoPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UtxoPointer message, length delimited. Does not implicitly {@link pointers.UtxoPointer.verify|verify} messages.
         * @param message UtxoPointer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pointers.IUtxoPointer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UtxoPointer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UtxoPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pointers.UtxoPointer;

        /**
         * Decodes an UtxoPointer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UtxoPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pointers.UtxoPointer;

        /**
         * Verifies an UtxoPointer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UtxoPointer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UtxoPointer
         */
        public static fromObject(object: { [k: string]: any }): pointers.UtxoPointer;

        /**
         * Creates a plain object from an UtxoPointer message. Also converts values to other types if specified.
         * @param message UtxoPointer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pointers.UtxoPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UtxoPointer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UtxoPointer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata blockTime */
        blockTime?: (google.protobuf.ITimestamp|null);

        /** Metadata publishedAt */
        publishedAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IMetadata);

        /** Metadata blockTime. */
        public blockTime?: (google.protobuf.ITimestamp|null);

        /** Metadata publishedAt. */
        public publishedAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: common.IMetadata): common.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link common.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link common.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): common.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Metadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace inputs. */
export namespace inputs {

    /** InputType enum. */
    enum InputType {
        UNKNOWN_INPUT_TYPE = 0,
        CONTRACT = 1,
        COIN = 2,
        MESSAGE = 3
    }

    /** Properties of an Input. */
    interface IInput {

        /** Input subject */
        subject?: (string|null);

        /** Input type */
        type?: (inputs.InputType|null);

        /** Input coin */
        coin?: (inputs.IInputCoin|null);

        /** Input contract */
        contract?: (inputs.IInputContract|null);

        /** Input message */
        message?: (inputs.IInputMessage|null);

        /** Input metadata */
        metadata?: (common.IMetadata|null);

        /** Input pointer */
        pointer?: (pointers.IInputPointer|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: inputs.IInput);

        /** Input subject. */
        public subject: string;

        /** Input type. */
        public type: inputs.InputType;

        /** Input coin. */
        public coin?: (inputs.IInputCoin|null);

        /** Input contract. */
        public contract?: (inputs.IInputContract|null);

        /** Input message. */
        public message?: (inputs.IInputMessage|null);

        /** Input metadata. */
        public metadata?: (common.IMetadata|null);

        /** Input pointer. */
        public pointer?: (pointers.IInputPointer|null);

        /** Input input. */
        public input?: ("coin"|"contract"|"message");

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: inputs.IInput): inputs.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link inputs.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inputs.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link inputs.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inputs.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inputs.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inputs.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): inputs.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inputs.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Input
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InputCoin. */
    interface IInputCoin {

        /** InputCoin utxoId */
        utxoId?: (Uint8Array|null);

        /** InputCoin owner */
        owner?: (Uint8Array|null);

        /** InputCoin amount */
        amount?: (number|Long|null);

        /** InputCoin assetId */
        assetId?: (Uint8Array|null);

        /** InputCoin txPointer */
        txPointer?: (pointers.ITxPointer|null);

        /** InputCoin witnessIndex */
        witnessIndex?: (number|null);

        /** InputCoin predicateGasUsed */
        predicateGasUsed?: (number|Long|null);

        /** InputCoin predicate */
        predicate?: (Uint8Array|null);

        /** InputCoin predicateData */
        predicateData?: (Uint8Array|null);

        /** InputCoin predicateLength */
        predicateLength?: (number|Long|null);

        /** InputCoin predicateDataLength */
        predicateDataLength?: (number|Long|null);

        /** InputCoin outputIndex */
        outputIndex?: (number|null);
    }

    /** Represents an InputCoin. */
    class InputCoin implements IInputCoin {

        /**
         * Constructs a new InputCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: inputs.IInputCoin);

        /** InputCoin utxoId. */
        public utxoId: Uint8Array;

        /** InputCoin owner. */
        public owner: Uint8Array;

        /** InputCoin amount. */
        public amount: (number|Long);

        /** InputCoin assetId. */
        public assetId: Uint8Array;

        /** InputCoin txPointer. */
        public txPointer?: (pointers.ITxPointer|null);

        /** InputCoin witnessIndex. */
        public witnessIndex: number;

        /** InputCoin predicateGasUsed. */
        public predicateGasUsed: (number|Long);

        /** InputCoin predicate. */
        public predicate: Uint8Array;

        /** InputCoin predicateData. */
        public predicateData: Uint8Array;

        /** InputCoin predicateLength. */
        public predicateLength: (number|Long);

        /** InputCoin predicateDataLength. */
        public predicateDataLength: (number|Long);

        /** InputCoin outputIndex. */
        public outputIndex: number;

        /**
         * Creates a new InputCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputCoin instance
         */
        public static create(properties?: inputs.IInputCoin): inputs.InputCoin;

        /**
         * Encodes the specified InputCoin message. Does not implicitly {@link inputs.InputCoin.verify|verify} messages.
         * @param message InputCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inputs.IInputCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputCoin message, length delimited. Does not implicitly {@link inputs.InputCoin.verify|verify} messages.
         * @param message InputCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inputs.IInputCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inputs.InputCoin;

        /**
         * Decodes an InputCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inputs.InputCoin;

        /**
         * Verifies an InputCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputCoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputCoin
         */
        public static fromObject(object: { [k: string]: any }): inputs.InputCoin;

        /**
         * Creates a plain object from an InputCoin message. Also converts values to other types if specified.
         * @param message InputCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inputs.InputCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InputCoin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InputContract. */
    interface IInputContract {

        /** InputContract utxoId */
        utxoId?: (Uint8Array|null);

        /** InputContract balanceRoot */
        balanceRoot?: (Uint8Array|null);

        /** InputContract stateRoot */
        stateRoot?: (Uint8Array|null);

        /** InputContract txPointer */
        txPointer?: (pointers.ITxPointer|null);

        /** InputContract contractId */
        contractId?: (Uint8Array|null);

        /** InputContract outputIndex */
        outputIndex?: (number|null);
    }

    /** Represents an InputContract. */
    class InputContract implements IInputContract {

        /**
         * Constructs a new InputContract.
         * @param [properties] Properties to set
         */
        constructor(properties?: inputs.IInputContract);

        /** InputContract utxoId. */
        public utxoId: Uint8Array;

        /** InputContract balanceRoot. */
        public balanceRoot: Uint8Array;

        /** InputContract stateRoot. */
        public stateRoot: Uint8Array;

        /** InputContract txPointer. */
        public txPointer?: (pointers.ITxPointer|null);

        /** InputContract contractId. */
        public contractId: Uint8Array;

        /** InputContract outputIndex. */
        public outputIndex: number;

        /**
         * Creates a new InputContract instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputContract instance
         */
        public static create(properties?: inputs.IInputContract): inputs.InputContract;

        /**
         * Encodes the specified InputContract message. Does not implicitly {@link inputs.InputContract.verify|verify} messages.
         * @param message InputContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inputs.IInputContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputContract message, length delimited. Does not implicitly {@link inputs.InputContract.verify|verify} messages.
         * @param message InputContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inputs.IInputContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputContract message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inputs.InputContract;

        /**
         * Decodes an InputContract message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inputs.InputContract;

        /**
         * Verifies an InputContract message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputContract message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputContract
         */
        public static fromObject(object: { [k: string]: any }): inputs.InputContract;

        /**
         * Creates a plain object from an InputContract message. Also converts values to other types if specified.
         * @param message InputContract
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inputs.InputContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputContract to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InputContract
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an InputMessage. */
    interface IInputMessage {

        /** InputMessage sender */
        sender?: (Uint8Array|null);

        /** InputMessage recipient */
        recipient?: (Uint8Array|null);

        /** InputMessage amount */
        amount?: (number|Long|null);

        /** InputMessage nonce */
        nonce?: (Uint8Array|null);

        /** InputMessage witnessIndex */
        witnessIndex?: (number|null);

        /** InputMessage predicateGasUsed */
        predicateGasUsed?: (number|Long|null);

        /** InputMessage data */
        data?: (Uint8Array|null);

        /** InputMessage predicate */
        predicate?: (Uint8Array|null);

        /** InputMessage predicateData */
        predicateData?: (Uint8Array|null);

        /** InputMessage dataLength */
        dataLength?: (number|null);

        /** InputMessage predicateLength */
        predicateLength?: (number|null);

        /** InputMessage predicateDataLength */
        predicateDataLength?: (number|null);
    }

    /** Represents an InputMessage. */
    class InputMessage implements IInputMessage {

        /**
         * Constructs a new InputMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: inputs.IInputMessage);

        /** InputMessage sender. */
        public sender: Uint8Array;

        /** InputMessage recipient. */
        public recipient: Uint8Array;

        /** InputMessage amount. */
        public amount: (number|Long);

        /** InputMessage nonce. */
        public nonce: Uint8Array;

        /** InputMessage witnessIndex. */
        public witnessIndex: number;

        /** InputMessage predicateGasUsed. */
        public predicateGasUsed: (number|Long);

        /** InputMessage data. */
        public data: Uint8Array;

        /** InputMessage predicate. */
        public predicate: Uint8Array;

        /** InputMessage predicateData. */
        public predicateData: Uint8Array;

        /** InputMessage dataLength. */
        public dataLength: number;

        /** InputMessage predicateLength. */
        public predicateLength: number;

        /** InputMessage predicateDataLength. */
        public predicateDataLength: number;

        /**
         * Creates a new InputMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InputMessage instance
         */
        public static create(properties?: inputs.IInputMessage): inputs.InputMessage;

        /**
         * Encodes the specified InputMessage message. Does not implicitly {@link inputs.InputMessage.verify|verify} messages.
         * @param message InputMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: inputs.IInputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InputMessage message, length delimited. Does not implicitly {@link inputs.InputMessage.verify|verify} messages.
         * @param message InputMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: inputs.IInputMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InputMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InputMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): inputs.InputMessage;

        /**
         * Decodes an InputMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InputMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): inputs.InputMessage;

        /**
         * Verifies an InputMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InputMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InputMessage
         */
        public static fromObject(object: { [k: string]: any }): inputs.InputMessage;

        /**
         * Creates a plain object from an InputMessage message. Also converts values to other types if specified.
         * @param message InputMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: inputs.InputMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InputMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for InputMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace outputs. */
export namespace outputs {

    /** OutputType enum. */
    enum OutputType {
        UNKNOWN_OUTPUT_TYPE = 0,
        COIN = 1,
        CONTRACT = 2,
        CHANGE = 3,
        VARIABLE = 4,
        CONTRACT_CREATED = 5
    }

    /** Properties of an Output. */
    interface IOutput {

        /** Output subject */
        subject?: (string|null);

        /** Output type */
        type?: (outputs.OutputType|null);

        /** Output coin */
        coin?: (outputs.IOutputCoin|null);

        /** Output contract */
        contract?: (outputs.IOutputContract|null);

        /** Output change */
        change?: (outputs.IOutputChange|null);

        /** Output variable */
        variable?: (outputs.IOutputVariable|null);

        /** Output contractCreated */
        contractCreated?: (outputs.IOutputContractCreated|null);

        /** Output metadata */
        metadata?: (common.IMetadata|null);

        /** Output pointer */
        pointer?: (pointers.IOutputPointer|null);
    }

    /** Represents an Output. */
    class Output implements IOutput {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutput);

        /** Output subject. */
        public subject: string;

        /** Output type. */
        public type: outputs.OutputType;

        /** Output coin. */
        public coin?: (outputs.IOutputCoin|null);

        /** Output contract. */
        public contract?: (outputs.IOutputContract|null);

        /** Output change. */
        public change?: (outputs.IOutputChange|null);

        /** Output variable. */
        public variable?: (outputs.IOutputVariable|null);

        /** Output contractCreated. */
        public contractCreated?: (outputs.IOutputContractCreated|null);

        /** Output metadata. */
        public metadata?: (common.IMetadata|null);

        /** Output pointer. */
        public pointer?: (pointers.IOutputPointer|null);

        /** Output output. */
        public output?: ("coin"|"contract"|"change"|"variable"|"contractCreated");

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: outputs.IOutput): outputs.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link outputs.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link outputs.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.Output;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.Output;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        public static fromObject(object: { [k: string]: any }): outputs.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Output
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputCoin. */
    interface IOutputCoin {

        /** OutputCoin to */
        to?: (Uint8Array|null);

        /** OutputCoin amount */
        amount?: (number|Long|null);

        /** OutputCoin assetId */
        assetId?: (Uint8Array|null);
    }

    /** Represents an OutputCoin. */
    class OutputCoin implements IOutputCoin {

        /**
         * Constructs a new OutputCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutputCoin);

        /** OutputCoin to. */
        public to: Uint8Array;

        /** OutputCoin amount. */
        public amount: (number|Long);

        /** OutputCoin assetId. */
        public assetId: Uint8Array;

        /**
         * Creates a new OutputCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputCoin instance
         */
        public static create(properties?: outputs.IOutputCoin): outputs.OutputCoin;

        /**
         * Encodes the specified OutputCoin message. Does not implicitly {@link outputs.OutputCoin.verify|verify} messages.
         * @param message OutputCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutputCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputCoin message, length delimited. Does not implicitly {@link outputs.OutputCoin.verify|verify} messages.
         * @param message OutputCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutputCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.OutputCoin;

        /**
         * Decodes an OutputCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.OutputCoin;

        /**
         * Verifies an OutputCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputCoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputCoin
         */
        public static fromObject(object: { [k: string]: any }): outputs.OutputCoin;

        /**
         * Creates a plain object from an OutputCoin message. Also converts values to other types if specified.
         * @param message OutputCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.OutputCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputCoin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputContract. */
    interface IOutputContract {

        /** OutputContract balanceRoot */
        balanceRoot?: (Uint8Array|null);

        /** OutputContract stateRoot */
        stateRoot?: (Uint8Array|null);

        /** OutputContract inputIndex */
        inputIndex?: (number|null);
    }

    /** Represents an OutputContract. */
    class OutputContract implements IOutputContract {

        /**
         * Constructs a new OutputContract.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutputContract);

        /** OutputContract balanceRoot. */
        public balanceRoot: Uint8Array;

        /** OutputContract stateRoot. */
        public stateRoot: Uint8Array;

        /** OutputContract inputIndex. */
        public inputIndex: number;

        /**
         * Creates a new OutputContract instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputContract instance
         */
        public static create(properties?: outputs.IOutputContract): outputs.OutputContract;

        /**
         * Encodes the specified OutputContract message. Does not implicitly {@link outputs.OutputContract.verify|verify} messages.
         * @param message OutputContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutputContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputContract message, length delimited. Does not implicitly {@link outputs.OutputContract.verify|verify} messages.
         * @param message OutputContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutputContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputContract message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.OutputContract;

        /**
         * Decodes an OutputContract message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.OutputContract;

        /**
         * Verifies an OutputContract message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputContract message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputContract
         */
        public static fromObject(object: { [k: string]: any }): outputs.OutputContract;

        /**
         * Creates a plain object from an OutputContract message. Also converts values to other types if specified.
         * @param message OutputContract
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.OutputContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputContract to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputContract
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputContractCreated. */
    interface IOutputContractCreated {

        /** OutputContractCreated contractId */
        contractId?: (Uint8Array|null);

        /** OutputContractCreated stateRoot */
        stateRoot?: (Uint8Array|null);
    }

    /** Represents an OutputContractCreated. */
    class OutputContractCreated implements IOutputContractCreated {

        /**
         * Constructs a new OutputContractCreated.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutputContractCreated);

        /** OutputContractCreated contractId. */
        public contractId: Uint8Array;

        /** OutputContractCreated stateRoot. */
        public stateRoot: Uint8Array;

        /**
         * Creates a new OutputContractCreated instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputContractCreated instance
         */
        public static create(properties?: outputs.IOutputContractCreated): outputs.OutputContractCreated;

        /**
         * Encodes the specified OutputContractCreated message. Does not implicitly {@link outputs.OutputContractCreated.verify|verify} messages.
         * @param message OutputContractCreated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutputContractCreated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputContractCreated message, length delimited. Does not implicitly {@link outputs.OutputContractCreated.verify|verify} messages.
         * @param message OutputContractCreated message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutputContractCreated, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputContractCreated message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputContractCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.OutputContractCreated;

        /**
         * Decodes an OutputContractCreated message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputContractCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.OutputContractCreated;

        /**
         * Verifies an OutputContractCreated message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputContractCreated message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputContractCreated
         */
        public static fromObject(object: { [k: string]: any }): outputs.OutputContractCreated;

        /**
         * Creates a plain object from an OutputContractCreated message. Also converts values to other types if specified.
         * @param message OutputContractCreated
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.OutputContractCreated, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputContractCreated to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputContractCreated
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputChange. */
    interface IOutputChange {

        /** OutputChange to */
        to?: (Uint8Array|null);

        /** OutputChange amount */
        amount?: (number|Long|null);

        /** OutputChange assetId */
        assetId?: (Uint8Array|null);
    }

    /** Represents an OutputChange. */
    class OutputChange implements IOutputChange {

        /**
         * Constructs a new OutputChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutputChange);

        /** OutputChange to. */
        public to: Uint8Array;

        /** OutputChange amount. */
        public amount: (number|Long);

        /** OutputChange assetId. */
        public assetId: Uint8Array;

        /**
         * Creates a new OutputChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputChange instance
         */
        public static create(properties?: outputs.IOutputChange): outputs.OutputChange;

        /**
         * Encodes the specified OutputChange message. Does not implicitly {@link outputs.OutputChange.verify|verify} messages.
         * @param message OutputChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutputChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputChange message, length delimited. Does not implicitly {@link outputs.OutputChange.verify|verify} messages.
         * @param message OutputChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutputChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.OutputChange;

        /**
         * Decodes an OutputChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.OutputChange;

        /**
         * Verifies an OutputChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputChange
         */
        public static fromObject(object: { [k: string]: any }): outputs.OutputChange;

        /**
         * Creates a plain object from an OutputChange message. Also converts values to other types if specified.
         * @param message OutputChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.OutputChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputChange
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputVariable. */
    interface IOutputVariable {

        /** OutputVariable to */
        to?: (Uint8Array|null);

        /** OutputVariable amount */
        amount?: (number|Long|null);

        /** OutputVariable assetId */
        assetId?: (Uint8Array|null);
    }

    /** Represents an OutputVariable. */
    class OutputVariable implements IOutputVariable {

        /**
         * Constructs a new OutputVariable.
         * @param [properties] Properties to set
         */
        constructor(properties?: outputs.IOutputVariable);

        /** OutputVariable to. */
        public to: Uint8Array;

        /** OutputVariable amount. */
        public amount: (number|Long);

        /** OutputVariable assetId. */
        public assetId: Uint8Array;

        /**
         * Creates a new OutputVariable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputVariable instance
         */
        public static create(properties?: outputs.IOutputVariable): outputs.OutputVariable;

        /**
         * Encodes the specified OutputVariable message. Does not implicitly {@link outputs.OutputVariable.verify|verify} messages.
         * @param message OutputVariable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: outputs.IOutputVariable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputVariable message, length delimited. Does not implicitly {@link outputs.OutputVariable.verify|verify} messages.
         * @param message OutputVariable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: outputs.IOutputVariable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputVariable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputVariable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): outputs.OutputVariable;

        /**
         * Decodes an OutputVariable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputVariable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): outputs.OutputVariable;

        /**
         * Verifies an OutputVariable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputVariable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputVariable
         */
        public static fromObject(object: { [k: string]: any }): outputs.OutputVariable;

        /**
         * Creates a plain object from an OutputVariable message. Also converts values to other types if specified.
         * @param message OutputVariable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: outputs.OutputVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputVariable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputVariable
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace receipts. */
export namespace receipts {

    /** ReceiptType enum. */
    enum ReceiptType {
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
        BURN = 13
    }

    /** ScriptResultType enum. */
    enum ScriptResultType {
        UNKNOWN_SCRIPT_RESULT_TYPE = 0,
        SUCCESS = 1,
        SCRIPT_REVERT = 2,
        SCRIPT_PANIC = 3,
        GENERIC_FAILURE = 4
    }

    /** Properties of a Receipt. */
    interface IReceipt {

        /** Receipt subject */
        subject?: (string|null);

        /** Receipt type */
        type?: (receipts.ReceiptType|null);

        /** Receipt call */
        call?: (receipts.IReceiptCall|null);

        /** Receipt return */
        "return"?: (receipts.IReceiptReturn|null);

        /** Receipt returnData */
        returnData?: (receipts.IReceiptReturnData|null);

        /** Receipt panic */
        panic?: (receipts.IReceiptPanic|null);

        /** Receipt revert */
        revert?: (receipts.IReceiptRevert|null);

        /** Receipt log */
        log?: (receipts.IReceiptLog|null);

        /** Receipt logData */
        logData?: (receipts.IReceiptLogData|null);

        /** Receipt transfer */
        transfer?: (receipts.IReceiptTransfer|null);

        /** Receipt transferOut */
        transferOut?: (receipts.IReceiptTransferOut|null);

        /** Receipt scriptResult */
        scriptResult?: (receipts.IReceiptScriptResult|null);

        /** Receipt messageOut */
        messageOut?: (receipts.IReceiptMessageOut|null);

        /** Receipt mint */
        mint?: (receipts.IReceiptMint|null);

        /** Receipt burn */
        burn?: (receipts.IReceiptBurn|null);

        /** Receipt metadata */
        metadata?: (common.IMetadata|null);

        /** Receipt pointer */
        pointer?: (pointers.IReceiptPointer|null);
    }

    /** Represents a Receipt. */
    class Receipt implements IReceipt {

        /**
         * Constructs a new Receipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceipt);

        /** Receipt subject. */
        public subject: string;

        /** Receipt type. */
        public type: receipts.ReceiptType;

        /** Receipt call. */
        public call?: (receipts.IReceiptCall|null);

        /** Receipt return. */
        public return?: (receipts.IReceiptReturn|null);

        /** Receipt returnData. */
        public returnData?: (receipts.IReceiptReturnData|null);

        /** Receipt panic. */
        public panic?: (receipts.IReceiptPanic|null);

        /** Receipt revert. */
        public revert?: (receipts.IReceiptRevert|null);

        /** Receipt log. */
        public log?: (receipts.IReceiptLog|null);

        /** Receipt logData. */
        public logData?: (receipts.IReceiptLogData|null);

        /** Receipt transfer. */
        public transfer?: (receipts.IReceiptTransfer|null);

        /** Receipt transferOut. */
        public transferOut?: (receipts.IReceiptTransferOut|null);

        /** Receipt scriptResult. */
        public scriptResult?: (receipts.IReceiptScriptResult|null);

        /** Receipt messageOut. */
        public messageOut?: (receipts.IReceiptMessageOut|null);

        /** Receipt mint. */
        public mint?: (receipts.IReceiptMint|null);

        /** Receipt burn. */
        public burn?: (receipts.IReceiptBurn|null);

        /** Receipt metadata. */
        public metadata?: (common.IMetadata|null);

        /** Receipt pointer. */
        public pointer?: (pointers.IReceiptPointer|null);

        /** Receipt receipt. */
        public receipt?: ("call"|"return"|"returnData"|"panic"|"revert"|"log"|"logData"|"transfer"|"transferOut"|"scriptResult"|"messageOut"|"mint"|"burn");

        /**
         * Creates a new Receipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Receipt instance
         */
        public static create(properties?: receipts.IReceipt): receipts.Receipt;

        /**
         * Encodes the specified Receipt message. Does not implicitly {@link receipts.Receipt.verify|verify} messages.
         * @param message Receipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Receipt message, length delimited. Does not implicitly {@link receipts.Receipt.verify|verify} messages.
         * @param message Receipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Receipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.Receipt;

        /**
         * Decodes a Receipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.Receipt;

        /**
         * Verifies a Receipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Receipt
         */
        public static fromObject(object: { [k: string]: any }): receipts.Receipt;

        /**
         * Creates a plain object from a Receipt message. Also converts values to other types if specified.
         * @param message Receipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.Receipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Receipt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Receipt
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptCall. */
    interface IReceiptCall {

        /** ReceiptCall id */
        id?: (Uint8Array|null);

        /** ReceiptCall to */
        to?: (Uint8Array|null);

        /** ReceiptCall amount */
        amount?: (number|Long|null);

        /** ReceiptCall assetId */
        assetId?: (Uint8Array|null);

        /** ReceiptCall gas */
        gas?: (number|Long|null);

        /** ReceiptCall param1 */
        param1?: (number|Long|null);

        /** ReceiptCall param2 */
        param2?: (number|Long|null);

        /** ReceiptCall pc */
        pc?: (number|Long|null);

        /** ReceiptCall is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptCall. */
    class ReceiptCall implements IReceiptCall {

        /**
         * Constructs a new ReceiptCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptCall);

        /** ReceiptCall id. */
        public id: Uint8Array;

        /** ReceiptCall to. */
        public to: Uint8Array;

        /** ReceiptCall amount. */
        public amount: (number|Long);

        /** ReceiptCall assetId. */
        public assetId: Uint8Array;

        /** ReceiptCall gas. */
        public gas: (number|Long);

        /** ReceiptCall param1. */
        public param1: (number|Long);

        /** ReceiptCall param2. */
        public param2: (number|Long);

        /** ReceiptCall pc. */
        public pc: (number|Long);

        /** ReceiptCall is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptCall instance
         */
        public static create(properties?: receipts.IReceiptCall): receipts.ReceiptCall;

        /**
         * Encodes the specified ReceiptCall message. Does not implicitly {@link receipts.ReceiptCall.verify|verify} messages.
         * @param message ReceiptCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptCall message, length delimited. Does not implicitly {@link receipts.ReceiptCall.verify|verify} messages.
         * @param message ReceiptCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptCall;

        /**
         * Decodes a ReceiptCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptCall;

        /**
         * Verifies a ReceiptCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptCall
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptCall;

        /**
         * Creates a plain object from a ReceiptCall message. Also converts values to other types if specified.
         * @param message ReceiptCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptCall
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptReturn. */
    interface IReceiptReturn {

        /** ReceiptReturn id */
        id?: (Uint8Array|null);

        /** ReceiptReturn val */
        val?: (number|Long|null);

        /** ReceiptReturn pc */
        pc?: (number|Long|null);

        /** ReceiptReturn is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptReturn. */
    class ReceiptReturn implements IReceiptReturn {

        /**
         * Constructs a new ReceiptReturn.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptReturn);

        /** ReceiptReturn id. */
        public id: Uint8Array;

        /** ReceiptReturn val. */
        public val: (number|Long);

        /** ReceiptReturn pc. */
        public pc: (number|Long);

        /** ReceiptReturn is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptReturn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptReturn instance
         */
        public static create(properties?: receipts.IReceiptReturn): receipts.ReceiptReturn;

        /**
         * Encodes the specified ReceiptReturn message. Does not implicitly {@link receipts.ReceiptReturn.verify|verify} messages.
         * @param message ReceiptReturn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptReturn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptReturn message, length delimited. Does not implicitly {@link receipts.ReceiptReturn.verify|verify} messages.
         * @param message ReceiptReturn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptReturn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptReturn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptReturn;

        /**
         * Decodes a ReceiptReturn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptReturn;

        /**
         * Verifies a ReceiptReturn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptReturn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptReturn
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptReturn;

        /**
         * Creates a plain object from a ReceiptReturn message. Also converts values to other types if specified.
         * @param message ReceiptReturn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptReturn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptReturn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptReturn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptReturnData. */
    interface IReceiptReturnData {

        /** ReceiptReturnData id */
        id?: (Uint8Array|null);

        /** ReceiptReturnData ptr */
        ptr?: (number|Long|null);

        /** ReceiptReturnData len */
        len?: (number|Long|null);

        /** ReceiptReturnData digest */
        digest?: (Uint8Array|null);

        /** ReceiptReturnData data */
        data?: (Uint8Array|null);

        /** ReceiptReturnData pc */
        pc?: (number|Long|null);

        /** ReceiptReturnData is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptReturnData. */
    class ReceiptReturnData implements IReceiptReturnData {

        /**
         * Constructs a new ReceiptReturnData.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptReturnData);

        /** ReceiptReturnData id. */
        public id: Uint8Array;

        /** ReceiptReturnData ptr. */
        public ptr: (number|Long);

        /** ReceiptReturnData len. */
        public len: (number|Long);

        /** ReceiptReturnData digest. */
        public digest: Uint8Array;

        /** ReceiptReturnData data. */
        public data: Uint8Array;

        /** ReceiptReturnData pc. */
        public pc: (number|Long);

        /** ReceiptReturnData is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptReturnData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptReturnData instance
         */
        public static create(properties?: receipts.IReceiptReturnData): receipts.ReceiptReturnData;

        /**
         * Encodes the specified ReceiptReturnData message. Does not implicitly {@link receipts.ReceiptReturnData.verify|verify} messages.
         * @param message ReceiptReturnData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptReturnData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptReturnData message, length delimited. Does not implicitly {@link receipts.ReceiptReturnData.verify|verify} messages.
         * @param message ReceiptReturnData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptReturnData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptReturnData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptReturnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptReturnData;

        /**
         * Decodes a ReceiptReturnData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptReturnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptReturnData;

        /**
         * Verifies a ReceiptReturnData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptReturnData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptReturnData
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptReturnData;

        /**
         * Creates a plain object from a ReceiptReturnData message. Also converts values to other types if specified.
         * @param message ReceiptReturnData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptReturnData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptReturnData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptReturnData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptPanic. */
    interface IReceiptPanic {

        /** ReceiptPanic id */
        id?: (Uint8Array|null);

        /** ReceiptPanic reason */
        reason?: (number|Long|null);

        /** ReceiptPanic pc */
        pc?: (number|Long|null);

        /** ReceiptPanic is */
        is?: (number|Long|null);

        /** ReceiptPanic contractId */
        contractId?: (Uint8Array|null);
    }

    /** Represents a ReceiptPanic. */
    class ReceiptPanic implements IReceiptPanic {

        /**
         * Constructs a new ReceiptPanic.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptPanic);

        /** ReceiptPanic id. */
        public id: Uint8Array;

        /** ReceiptPanic reason. */
        public reason: (number|Long);

        /** ReceiptPanic pc. */
        public pc: (number|Long);

        /** ReceiptPanic is. */
        public is: (number|Long);

        /** ReceiptPanic contractId. */
        public contractId: Uint8Array;

        /**
         * Creates a new ReceiptPanic instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptPanic instance
         */
        public static create(properties?: receipts.IReceiptPanic): receipts.ReceiptPanic;

        /**
         * Encodes the specified ReceiptPanic message. Does not implicitly {@link receipts.ReceiptPanic.verify|verify} messages.
         * @param message ReceiptPanic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptPanic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptPanic message, length delimited. Does not implicitly {@link receipts.ReceiptPanic.verify|verify} messages.
         * @param message ReceiptPanic message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptPanic, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptPanic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptPanic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptPanic;

        /**
         * Decodes a ReceiptPanic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptPanic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptPanic;

        /**
         * Verifies a ReceiptPanic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptPanic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptPanic
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptPanic;

        /**
         * Creates a plain object from a ReceiptPanic message. Also converts values to other types if specified.
         * @param message ReceiptPanic
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptPanic, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptPanic to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptPanic
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptRevert. */
    interface IReceiptRevert {

        /** ReceiptRevert id */
        id?: (Uint8Array|null);

        /** ReceiptRevert ra */
        ra?: (number|Long|null);

        /** ReceiptRevert pc */
        pc?: (number|Long|null);

        /** ReceiptRevert is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptRevert. */
    class ReceiptRevert implements IReceiptRevert {

        /**
         * Constructs a new ReceiptRevert.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptRevert);

        /** ReceiptRevert id. */
        public id: Uint8Array;

        /** ReceiptRevert ra. */
        public ra: (number|Long);

        /** ReceiptRevert pc. */
        public pc: (number|Long);

        /** ReceiptRevert is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptRevert instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptRevert instance
         */
        public static create(properties?: receipts.IReceiptRevert): receipts.ReceiptRevert;

        /**
         * Encodes the specified ReceiptRevert message. Does not implicitly {@link receipts.ReceiptRevert.verify|verify} messages.
         * @param message ReceiptRevert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptRevert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptRevert message, length delimited. Does not implicitly {@link receipts.ReceiptRevert.verify|verify} messages.
         * @param message ReceiptRevert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptRevert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptRevert message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptRevert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptRevert;

        /**
         * Decodes a ReceiptRevert message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptRevert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptRevert;

        /**
         * Verifies a ReceiptRevert message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptRevert message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptRevert
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptRevert;

        /**
         * Creates a plain object from a ReceiptRevert message. Also converts values to other types if specified.
         * @param message ReceiptRevert
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptRevert, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptRevert to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptRevert
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptLog. */
    interface IReceiptLog {

        /** ReceiptLog id */
        id?: (Uint8Array|null);

        /** ReceiptLog ra */
        ra?: (number|Long|null);

        /** ReceiptLog rb */
        rb?: (number|Long|null);

        /** ReceiptLog rc */
        rc?: (number|Long|null);

        /** ReceiptLog rd */
        rd?: (number|Long|null);

        /** ReceiptLog pc */
        pc?: (number|Long|null);

        /** ReceiptLog is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptLog. */
    class ReceiptLog implements IReceiptLog {

        /**
         * Constructs a new ReceiptLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptLog);

        /** ReceiptLog id. */
        public id: Uint8Array;

        /** ReceiptLog ra. */
        public ra: (number|Long);

        /** ReceiptLog rb. */
        public rb: (number|Long);

        /** ReceiptLog rc. */
        public rc: (number|Long);

        /** ReceiptLog rd. */
        public rd: (number|Long);

        /** ReceiptLog pc. */
        public pc: (number|Long);

        /** ReceiptLog is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptLog instance
         */
        public static create(properties?: receipts.IReceiptLog): receipts.ReceiptLog;

        /**
         * Encodes the specified ReceiptLog message. Does not implicitly {@link receipts.ReceiptLog.verify|verify} messages.
         * @param message ReceiptLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptLog message, length delimited. Does not implicitly {@link receipts.ReceiptLog.verify|verify} messages.
         * @param message ReceiptLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptLog;

        /**
         * Decodes a ReceiptLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptLog;

        /**
         * Verifies a ReceiptLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptLog
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptLog;

        /**
         * Creates a plain object from a ReceiptLog message. Also converts values to other types if specified.
         * @param message ReceiptLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptLogData. */
    interface IReceiptLogData {

        /** ReceiptLogData id */
        id?: (Uint8Array|null);

        /** ReceiptLogData ra */
        ra?: (number|Long|null);

        /** ReceiptLogData rb */
        rb?: (number|Long|null);

        /** ReceiptLogData ptr */
        ptr?: (number|Long|null);

        /** ReceiptLogData len */
        len?: (number|Long|null);

        /** ReceiptLogData digest */
        digest?: (Uint8Array|null);

        /** ReceiptLogData data */
        data?: (Uint8Array|null);

        /** ReceiptLogData pc */
        pc?: (number|Long|null);

        /** ReceiptLogData is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptLogData. */
    class ReceiptLogData implements IReceiptLogData {

        /**
         * Constructs a new ReceiptLogData.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptLogData);

        /** ReceiptLogData id. */
        public id: Uint8Array;

        /** ReceiptLogData ra. */
        public ra: (number|Long);

        /** ReceiptLogData rb. */
        public rb: (number|Long);

        /** ReceiptLogData ptr. */
        public ptr: (number|Long);

        /** ReceiptLogData len. */
        public len: (number|Long);

        /** ReceiptLogData digest. */
        public digest: Uint8Array;

        /** ReceiptLogData data. */
        public data: Uint8Array;

        /** ReceiptLogData pc. */
        public pc: (number|Long);

        /** ReceiptLogData is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptLogData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptLogData instance
         */
        public static create(properties?: receipts.IReceiptLogData): receipts.ReceiptLogData;

        /**
         * Encodes the specified ReceiptLogData message. Does not implicitly {@link receipts.ReceiptLogData.verify|verify} messages.
         * @param message ReceiptLogData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptLogData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptLogData message, length delimited. Does not implicitly {@link receipts.ReceiptLogData.verify|verify} messages.
         * @param message ReceiptLogData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptLogData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptLogData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptLogData;

        /**
         * Decodes a ReceiptLogData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptLogData;

        /**
         * Verifies a ReceiptLogData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptLogData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptLogData
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptLogData;

        /**
         * Creates a plain object from a ReceiptLogData message. Also converts values to other types if specified.
         * @param message ReceiptLogData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptLogData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptLogData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptLogData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptTransfer. */
    interface IReceiptTransfer {

        /** ReceiptTransfer id */
        id?: (Uint8Array|null);

        /** ReceiptTransfer to */
        to?: (Uint8Array|null);

        /** ReceiptTransfer amount */
        amount?: (number|Long|null);

        /** ReceiptTransfer assetId */
        assetId?: (Uint8Array|null);

        /** ReceiptTransfer pc */
        pc?: (number|Long|null);

        /** ReceiptTransfer is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptTransfer. */
    class ReceiptTransfer implements IReceiptTransfer {

        /**
         * Constructs a new ReceiptTransfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptTransfer);

        /** ReceiptTransfer id. */
        public id: Uint8Array;

        /** ReceiptTransfer to. */
        public to: Uint8Array;

        /** ReceiptTransfer amount. */
        public amount: (number|Long);

        /** ReceiptTransfer assetId. */
        public assetId: Uint8Array;

        /** ReceiptTransfer pc. */
        public pc: (number|Long);

        /** ReceiptTransfer is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptTransfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptTransfer instance
         */
        public static create(properties?: receipts.IReceiptTransfer): receipts.ReceiptTransfer;

        /**
         * Encodes the specified ReceiptTransfer message. Does not implicitly {@link receipts.ReceiptTransfer.verify|verify} messages.
         * @param message ReceiptTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptTransfer message, length delimited. Does not implicitly {@link receipts.ReceiptTransfer.verify|verify} messages.
         * @param message ReceiptTransfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptTransfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptTransfer;

        /**
         * Decodes a ReceiptTransfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptTransfer;

        /**
         * Verifies a ReceiptTransfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptTransfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptTransfer
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptTransfer;

        /**
         * Creates a plain object from a ReceiptTransfer message. Also converts values to other types if specified.
         * @param message ReceiptTransfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptTransfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptTransfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptTransfer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptTransferOut. */
    interface IReceiptTransferOut {

        /** ReceiptTransferOut id */
        id?: (Uint8Array|null);

        /** ReceiptTransferOut toAddress */
        toAddress?: (Uint8Array|null);

        /** ReceiptTransferOut amount */
        amount?: (number|Long|null);

        /** ReceiptTransferOut assetId */
        assetId?: (Uint8Array|null);

        /** ReceiptTransferOut pc */
        pc?: (number|Long|null);

        /** ReceiptTransferOut is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptTransferOut. */
    class ReceiptTransferOut implements IReceiptTransferOut {

        /**
         * Constructs a new ReceiptTransferOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptTransferOut);

        /** ReceiptTransferOut id. */
        public id: Uint8Array;

        /** ReceiptTransferOut toAddress. */
        public toAddress: Uint8Array;

        /** ReceiptTransferOut amount. */
        public amount: (number|Long);

        /** ReceiptTransferOut assetId. */
        public assetId: Uint8Array;

        /** ReceiptTransferOut pc. */
        public pc: (number|Long);

        /** ReceiptTransferOut is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptTransferOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptTransferOut instance
         */
        public static create(properties?: receipts.IReceiptTransferOut): receipts.ReceiptTransferOut;

        /**
         * Encodes the specified ReceiptTransferOut message. Does not implicitly {@link receipts.ReceiptTransferOut.verify|verify} messages.
         * @param message ReceiptTransferOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptTransferOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptTransferOut message, length delimited. Does not implicitly {@link receipts.ReceiptTransferOut.verify|verify} messages.
         * @param message ReceiptTransferOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptTransferOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptTransferOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptTransferOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptTransferOut;

        /**
         * Decodes a ReceiptTransferOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptTransferOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptTransferOut;

        /**
         * Verifies a ReceiptTransferOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptTransferOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptTransferOut
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptTransferOut;

        /**
         * Creates a plain object from a ReceiptTransferOut message. Also converts values to other types if specified.
         * @param message ReceiptTransferOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptTransferOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptTransferOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptTransferOut
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptScriptResult. */
    interface IReceiptScriptResult {

        /** ReceiptScriptResult result */
        result?: (receipts.ScriptResultType|null);

        /** ReceiptScriptResult gasUsed */
        gasUsed?: (number|Long|null);
    }

    /** Represents a ReceiptScriptResult. */
    class ReceiptScriptResult implements IReceiptScriptResult {

        /**
         * Constructs a new ReceiptScriptResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptScriptResult);

        /** ReceiptScriptResult result. */
        public result: receipts.ScriptResultType;

        /** ReceiptScriptResult gasUsed. */
        public gasUsed: (number|Long);

        /**
         * Creates a new ReceiptScriptResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptScriptResult instance
         */
        public static create(properties?: receipts.IReceiptScriptResult): receipts.ReceiptScriptResult;

        /**
         * Encodes the specified ReceiptScriptResult message. Does not implicitly {@link receipts.ReceiptScriptResult.verify|verify} messages.
         * @param message ReceiptScriptResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptScriptResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptScriptResult message, length delimited. Does not implicitly {@link receipts.ReceiptScriptResult.verify|verify} messages.
         * @param message ReceiptScriptResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptScriptResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptScriptResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptScriptResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptScriptResult;

        /**
         * Decodes a ReceiptScriptResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptScriptResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptScriptResult;

        /**
         * Verifies a ReceiptScriptResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptScriptResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptScriptResult
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptScriptResult;

        /**
         * Creates a plain object from a ReceiptScriptResult message. Also converts values to other types if specified.
         * @param message ReceiptScriptResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptScriptResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptScriptResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptScriptResult
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptMessageOut. */
    interface IReceiptMessageOut {

        /** ReceiptMessageOut sender */
        sender?: (Uint8Array|null);

        /** ReceiptMessageOut recipient */
        recipient?: (Uint8Array|null);

        /** ReceiptMessageOut amount */
        amount?: (number|Long|null);

        /** ReceiptMessageOut nonce */
        nonce?: (Uint8Array|null);

        /** ReceiptMessageOut len */
        len?: (number|Long|null);

        /** ReceiptMessageOut digest */
        digest?: (Uint8Array|null);

        /** ReceiptMessageOut data */
        data?: (Uint8Array|null);
    }

    /** Represents a ReceiptMessageOut. */
    class ReceiptMessageOut implements IReceiptMessageOut {

        /**
         * Constructs a new ReceiptMessageOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptMessageOut);

        /** ReceiptMessageOut sender. */
        public sender: Uint8Array;

        /** ReceiptMessageOut recipient. */
        public recipient: Uint8Array;

        /** ReceiptMessageOut amount. */
        public amount: (number|Long);

        /** ReceiptMessageOut nonce. */
        public nonce: Uint8Array;

        /** ReceiptMessageOut len. */
        public len: (number|Long);

        /** ReceiptMessageOut digest. */
        public digest: Uint8Array;

        /** ReceiptMessageOut data. */
        public data: Uint8Array;

        /**
         * Creates a new ReceiptMessageOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptMessageOut instance
         */
        public static create(properties?: receipts.IReceiptMessageOut): receipts.ReceiptMessageOut;

        /**
         * Encodes the specified ReceiptMessageOut message. Does not implicitly {@link receipts.ReceiptMessageOut.verify|verify} messages.
         * @param message ReceiptMessageOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptMessageOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptMessageOut message, length delimited. Does not implicitly {@link receipts.ReceiptMessageOut.verify|verify} messages.
         * @param message ReceiptMessageOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptMessageOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptMessageOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptMessageOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptMessageOut;

        /**
         * Decodes a ReceiptMessageOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptMessageOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptMessageOut;

        /**
         * Verifies a ReceiptMessageOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptMessageOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptMessageOut
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptMessageOut;

        /**
         * Creates a plain object from a ReceiptMessageOut message. Also converts values to other types if specified.
         * @param message ReceiptMessageOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptMessageOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptMessageOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptMessageOut
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptMint. */
    interface IReceiptMint {

        /** ReceiptMint subId */
        subId?: (Uint8Array|null);

        /** ReceiptMint id */
        id?: (Uint8Array|null);

        /** ReceiptMint assetId */
        assetId?: (Uint8Array|null);

        /** ReceiptMint val */
        val?: (number|Long|null);

        /** ReceiptMint pc */
        pc?: (number|Long|null);

        /** ReceiptMint is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptMint. */
    class ReceiptMint implements IReceiptMint {

        /**
         * Constructs a new ReceiptMint.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptMint);

        /** ReceiptMint subId. */
        public subId: Uint8Array;

        /** ReceiptMint id. */
        public id: Uint8Array;

        /** ReceiptMint assetId. */
        public assetId: Uint8Array;

        /** ReceiptMint val. */
        public val: (number|Long);

        /** ReceiptMint pc. */
        public pc: (number|Long);

        /** ReceiptMint is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptMint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptMint instance
         */
        public static create(properties?: receipts.IReceiptMint): receipts.ReceiptMint;

        /**
         * Encodes the specified ReceiptMint message. Does not implicitly {@link receipts.ReceiptMint.verify|verify} messages.
         * @param message ReceiptMint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptMint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptMint message, length delimited. Does not implicitly {@link receipts.ReceiptMint.verify|verify} messages.
         * @param message ReceiptMint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptMint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptMint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptMint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptMint;

        /**
         * Decodes a ReceiptMint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptMint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptMint;

        /**
         * Verifies a ReceiptMint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptMint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptMint
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptMint;

        /**
         * Creates a plain object from a ReceiptMint message. Also converts values to other types if specified.
         * @param message ReceiptMint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptMint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptMint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptMint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReceiptBurn. */
    interface IReceiptBurn {

        /** ReceiptBurn subId */
        subId?: (Uint8Array|null);

        /** ReceiptBurn id */
        id?: (Uint8Array|null);

        /** ReceiptBurn assetId */
        assetId?: (Uint8Array|null);

        /** ReceiptBurn val */
        val?: (number|Long|null);

        /** ReceiptBurn pc */
        pc?: (number|Long|null);

        /** ReceiptBurn is */
        is?: (number|Long|null);
    }

    /** Represents a ReceiptBurn. */
    class ReceiptBurn implements IReceiptBurn {

        /**
         * Constructs a new ReceiptBurn.
         * @param [properties] Properties to set
         */
        constructor(properties?: receipts.IReceiptBurn);

        /** ReceiptBurn subId. */
        public subId: Uint8Array;

        /** ReceiptBurn id. */
        public id: Uint8Array;

        /** ReceiptBurn assetId. */
        public assetId: Uint8Array;

        /** ReceiptBurn val. */
        public val: (number|Long);

        /** ReceiptBurn pc. */
        public pc: (number|Long);

        /** ReceiptBurn is. */
        public is: (number|Long);

        /**
         * Creates a new ReceiptBurn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiptBurn instance
         */
        public static create(properties?: receipts.IReceiptBurn): receipts.ReceiptBurn;

        /**
         * Encodes the specified ReceiptBurn message. Does not implicitly {@link receipts.ReceiptBurn.verify|verify} messages.
         * @param message ReceiptBurn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: receipts.IReceiptBurn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiptBurn message, length delimited. Does not implicitly {@link receipts.ReceiptBurn.verify|verify} messages.
         * @param message ReceiptBurn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: receipts.IReceiptBurn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiptBurn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiptBurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): receipts.ReceiptBurn;

        /**
         * Decodes a ReceiptBurn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiptBurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): receipts.ReceiptBurn;

        /**
         * Verifies a ReceiptBurn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiptBurn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiptBurn
         */
        public static fromObject(object: { [k: string]: any }): receipts.ReceiptBurn;

        /**
         * Creates a plain object from a ReceiptBurn message. Also converts values to other types if specified.
         * @param message ReceiptBurn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: receipts.ReceiptBurn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiptBurn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReceiptBurn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace transactions. */
export namespace transactions {

    /** TransactionType enum. */
    enum TransactionType {
        UNKNOWN_TRANSACTION_TYPE = 0,
        SCRIPT = 1,
        CREATE = 2,
        MINT = 3,
        UPGRADE = 4,
        UPLOAD = 5,
        BLOB = 6
    }

    /** TransactionStatus enum. */
    enum TransactionStatus {
        UNKNOWN_TRANSACTION_STATUS = 0,
        FAILED = 1,
        SUBMITTED = 2,
        SQUEEZED_OUT = 3,
        SUCCESS = 4,
        NONE = 5
    }

    /** PolicyType enum. */
    enum PolicyType {
        UNKNOWN_POLICY_TYPE = 0,
        TIP = 1,
        WITNESS_LIMIT = 2,
        MATURITY = 3,
        MAX_FEE = 4
    }

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction subject */
        subject?: (string|null);

        /** Transaction id */
        id?: (Uint8Array|null);

        /** Transaction scriptGasLimit */
        scriptGasLimit?: (number|Long|null);

        /** Transaction txPointer */
        txPointer?: (pointers.ITxPointer|null);

        /** Transaction inputAssetIds */
        inputAssetIds?: (Uint8Array[]|null);

        /** Transaction inputContracts */
        inputContracts?: (Uint8Array[]|null);

        /** Transaction inputContract */
        inputContract?: (inputs.IInputContract|null);

        /** Transaction inputs */
        inputs?: (inputs.IInput[]|null);

        /** Transaction isScript */
        isScript?: (boolean|null);

        /** Transaction isCreate */
        isCreate?: (boolean|null);

        /** Transaction isMint */
        isMint?: (boolean|null);

        /** Transaction isUpgrade */
        isUpgrade?: (boolean|null);

        /** Transaction isUpload */
        isUpload?: (boolean|null);

        /** Transaction isBlob */
        isBlob?: (boolean|null);

        /** Transaction outputs */
        outputs?: (outputs.IOutput[]|null);

        /** Transaction outputContract */
        outputContract?: (outputs.IOutputContract|null);

        /** Transaction mintAmount */
        mintAmount?: (number|Long|null);

        /** Transaction mintAssetId */
        mintAssetId?: (Uint8Array|null);

        /** Transaction mintGasPrice */
        mintGasPrice?: (number|Long|null);

        /** Transaction receiptsRoot */
        receiptsRoot?: (Uint8Array|null);

        /** Transaction status */
        status?: (transactions.TransactionStatus|null);

        /** Transaction witnesses */
        witnesses?: (Uint8Array[]|null);

        /** Transaction script */
        script?: (Uint8Array|null);

        /** Transaction scriptData */
        scriptData?: (Uint8Array|null);

        /** Transaction policies */
        policies?: (transactions.IPolicy|null);

        /** Transaction salt */
        salt?: (Uint8Array|null);

        /** Transaction storageSlots */
        storageSlots?: (Uint8Array[]|null);

        /** Transaction bytecodeWitnessIndex */
        bytecodeWitnessIndex?: (number|null);

        /** Transaction bytecodeRoot */
        bytecodeRoot?: (Uint8Array|null);

        /** Transaction subsectionIndex */
        subsectionIndex?: (number|null);

        /** Transaction subsectionsNumber */
        subsectionsNumber?: (number|null);

        /** Transaction proofSet */
        proofSet?: (Uint8Array[]|null);

        /** Transaction upgradePurpose */
        upgradePurpose?: (number|null);

        /** Transaction blobId */
        blobId?: (Uint8Array|null);

        /** Transaction maturity */
        maturity?: (number|null);

        /** Transaction policyType */
        policyType?: (number|null);

        /** Transaction rawPayload */
        rawPayload?: (Uint8Array|null);

        /** Transaction scriptLength */
        scriptLength?: (number|Long|null);

        /** Transaction scriptDataLength */
        scriptDataLength?: (number|Long|null);

        /** Transaction storageSlotsCount */
        storageSlotsCount?: (number|Long|null);

        /** Transaction proofSetCount */
        proofSetCount?: (number|null);

        /** Transaction witnessesCount */
        witnessesCount?: (number|null);

        /** Transaction inputsCount */
        inputsCount?: (number|null);

        /** Transaction outputsCount */
        outputsCount?: (number|null);

        /** Transaction metadata */
        metadata?: (common.IMetadata|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: transactions.ITransaction);

        /** Transaction subject. */
        public subject: string;

        /** Transaction id. */
        public id: Uint8Array;

        /** Transaction scriptGasLimit. */
        public scriptGasLimit: (number|Long);

        /** Transaction txPointer. */
        public txPointer?: (pointers.ITxPointer|null);

        /** Transaction inputAssetIds. */
        public inputAssetIds: Uint8Array[];

        /** Transaction inputContracts. */
        public inputContracts: Uint8Array[];

        /** Transaction inputContract. */
        public inputContract?: (inputs.IInputContract|null);

        /** Transaction inputs. */
        public inputs: inputs.IInput[];

        /** Transaction isScript. */
        public isScript: boolean;

        /** Transaction isCreate. */
        public isCreate: boolean;

        /** Transaction isMint. */
        public isMint: boolean;

        /** Transaction isUpgrade. */
        public isUpgrade: boolean;

        /** Transaction isUpload. */
        public isUpload: boolean;

        /** Transaction isBlob. */
        public isBlob: boolean;

        /** Transaction outputs. */
        public outputs: outputs.IOutput[];

        /** Transaction outputContract. */
        public outputContract?: (outputs.IOutputContract|null);

        /** Transaction mintAmount. */
        public mintAmount: (number|Long);

        /** Transaction mintAssetId. */
        public mintAssetId: Uint8Array;

        /** Transaction mintGasPrice. */
        public mintGasPrice: (number|Long);

        /** Transaction receiptsRoot. */
        public receiptsRoot: Uint8Array;

        /** Transaction status. */
        public status: transactions.TransactionStatus;

        /** Transaction witnesses. */
        public witnesses: Uint8Array[];

        /** Transaction script. */
        public script: Uint8Array;

        /** Transaction scriptData. */
        public scriptData: Uint8Array;

        /** Transaction policies. */
        public policies?: (transactions.IPolicy|null);

        /** Transaction salt. */
        public salt: Uint8Array;

        /** Transaction storageSlots. */
        public storageSlots: Uint8Array[];

        /** Transaction bytecodeWitnessIndex. */
        public bytecodeWitnessIndex: number;

        /** Transaction bytecodeRoot. */
        public bytecodeRoot: Uint8Array;

        /** Transaction subsectionIndex. */
        public subsectionIndex: number;

        /** Transaction subsectionsNumber. */
        public subsectionsNumber: number;

        /** Transaction proofSet. */
        public proofSet: Uint8Array[];

        /** Transaction upgradePurpose. */
        public upgradePurpose: number;

        /** Transaction blobId. */
        public blobId: Uint8Array;

        /** Transaction maturity. */
        public maturity: number;

        /** Transaction policyType. */
        public policyType: number;

        /** Transaction rawPayload. */
        public rawPayload: Uint8Array;

        /** Transaction scriptLength. */
        public scriptLength: (number|Long);

        /** Transaction scriptDataLength. */
        public scriptDataLength: (number|Long);

        /** Transaction storageSlotsCount. */
        public storageSlotsCount: (number|Long);

        /** Transaction proofSetCount. */
        public proofSetCount: number;

        /** Transaction witnessesCount. */
        public witnessesCount: number;

        /** Transaction inputsCount. */
        public inputsCount: number;

        /** Transaction outputsCount. */
        public outputsCount: number;

        /** Transaction metadata. */
        public metadata?: (common.IMetadata|null);

        /**
         * Creates a new Transaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transaction instance
         */
        public static create(properties?: transactions.ITransaction): transactions.Transaction;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link transactions.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transactions.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link transactions.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transactions.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transactions.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transactions.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): transactions.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transactions.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transaction
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StorageSlot. */
    interface IStorageSlot {

        /** StorageSlot subject */
        subject?: (string|null);

        /** StorageSlot txId */
        txId?: (Uint8Array|null);

        /** StorageSlot key */
        key?: (Uint8Array|null);

        /** StorageSlot value */
        value?: (Uint8Array|null);
    }

    /** Represents a StorageSlot. */
    class StorageSlot implements IStorageSlot {

        /**
         * Constructs a new StorageSlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: transactions.IStorageSlot);

        /** StorageSlot subject. */
        public subject: string;

        /** StorageSlot txId. */
        public txId: Uint8Array;

        /** StorageSlot key. */
        public key: Uint8Array;

        /** StorageSlot value. */
        public value: Uint8Array;

        /**
         * Creates a new StorageSlot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StorageSlot instance
         */
        public static create(properties?: transactions.IStorageSlot): transactions.StorageSlot;

        /**
         * Encodes the specified StorageSlot message. Does not implicitly {@link transactions.StorageSlot.verify|verify} messages.
         * @param message StorageSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transactions.IStorageSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StorageSlot message, length delimited. Does not implicitly {@link transactions.StorageSlot.verify|verify} messages.
         * @param message StorageSlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transactions.IStorageSlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StorageSlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StorageSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transactions.StorageSlot;

        /**
         * Decodes a StorageSlot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StorageSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transactions.StorageSlot;

        /**
         * Verifies a StorageSlot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StorageSlot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StorageSlot
         */
        public static fromObject(object: { [k: string]: any }): transactions.StorageSlot;

        /**
         * Creates a plain object from a StorageSlot message. Also converts values to other types if specified.
         * @param message StorageSlot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transactions.StorageSlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StorageSlot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StorageSlot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Witness. */
    interface IWitness {

        /** Witness subject */
        subject?: (string|null);

        /** Witness txId */
        txId?: (Uint8Array|null);

        /** Witness witnessData */
        witnessData?: (Uint8Array|null);

        /** Witness witnessDataLength */
        witnessDataLength?: (number|null);
    }

    /** Represents a Witness. */
    class Witness implements IWitness {

        /**
         * Constructs a new Witness.
         * @param [properties] Properties to set
         */
        constructor(properties?: transactions.IWitness);

        /** Witness subject. */
        public subject: string;

        /** Witness txId. */
        public txId: Uint8Array;

        /** Witness witnessData. */
        public witnessData: Uint8Array;

        /** Witness witnessDataLength. */
        public witnessDataLength: number;

        /**
         * Creates a new Witness instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Witness instance
         */
        public static create(properties?: transactions.IWitness): transactions.Witness;

        /**
         * Encodes the specified Witness message. Does not implicitly {@link transactions.Witness.verify|verify} messages.
         * @param message Witness message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transactions.IWitness, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Witness message, length delimited. Does not implicitly {@link transactions.Witness.verify|verify} messages.
         * @param message Witness message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transactions.IWitness, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Witness message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Witness
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transactions.Witness;

        /**
         * Decodes a Witness message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Witness
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transactions.Witness;

        /**
         * Verifies a Witness message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Witness message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Witness
         */
        public static fromObject(object: { [k: string]: any }): transactions.Witness;

        /**
         * Creates a plain object from a Witness message. Also converts values to other types if specified.
         * @param message Witness
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transactions.Witness, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Witness to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Witness
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProofSet. */
    interface IProofSet {

        /** ProofSet subject */
        subject?: (string|null);

        /** ProofSet txId */
        txId?: (Uint8Array|null);

        /** ProofSet proofHash */
        proofHash?: (Uint8Array|null);
    }

    /** Represents a ProofSet. */
    class ProofSet implements IProofSet {

        /**
         * Constructs a new ProofSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: transactions.IProofSet);

        /** ProofSet subject. */
        public subject: string;

        /** ProofSet txId. */
        public txId: Uint8Array;

        /** ProofSet proofHash. */
        public proofHash: Uint8Array;

        /**
         * Creates a new ProofSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProofSet instance
         */
        public static create(properties?: transactions.IProofSet): transactions.ProofSet;

        /**
         * Encodes the specified ProofSet message. Does not implicitly {@link transactions.ProofSet.verify|verify} messages.
         * @param message ProofSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transactions.IProofSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProofSet message, length delimited. Does not implicitly {@link transactions.ProofSet.verify|verify} messages.
         * @param message ProofSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transactions.IProofSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProofSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProofSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transactions.ProofSet;

        /**
         * Decodes a ProofSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProofSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transactions.ProofSet;

        /**
         * Verifies a ProofSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProofSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProofSet
         */
        public static fromObject(object: { [k: string]: any }): transactions.ProofSet;

        /**
         * Creates a plain object from a ProofSet message. Also converts values to other types if specified.
         * @param message ProofSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transactions.ProofSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProofSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProofSet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Policy. */
    interface IPolicy {

        /** Policy subject */
        subject?: (string|null);

        /** Policy txId */
        txId?: (Uint8Array|null);

        /** Policy type */
        type?: (transactions.PolicyType|null);

        /** Policy data */
        data?: (number|Long|null);
    }

    /** Represents a Policy. */
    class Policy implements IPolicy {

        /**
         * Constructs a new Policy.
         * @param [properties] Properties to set
         */
        constructor(properties?: transactions.IPolicy);

        /** Policy subject. */
        public subject: string;

        /** Policy txId. */
        public txId: Uint8Array;

        /** Policy type. */
        public type: transactions.PolicyType;

        /** Policy data. */
        public data: (number|Long);

        /**
         * Creates a new Policy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Policy instance
         */
        public static create(properties?: transactions.IPolicy): transactions.Policy;

        /**
         * Encodes the specified Policy message. Does not implicitly {@link transactions.Policy.verify|verify} messages.
         * @param message Policy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: transactions.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Policy message, length delimited. Does not implicitly {@link transactions.Policy.verify|verify} messages.
         * @param message Policy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: transactions.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Policy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Policy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): transactions.Policy;

        /**
         * Decodes a Policy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Policy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): transactions.Policy;

        /**
         * Verifies a Policy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Policy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Policy
         */
        public static fromObject(object: { [k: string]: any }): transactions.Policy;

        /**
         * Creates a plain object from a Policy message. Also converts values to other types if specified.
         * @param message Policy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: transactions.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Policy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Policy
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace utxos. */
export namespace utxos {

    /** UtxoStatus enum. */
    enum UtxoStatus {
        UNSPENT = 0,
        SPENT = 2
    }

    /** UtxoType enum. */
    enum UtxoType {
        UNKNOWN = 0,
        CONTRACT = 1,
        COIN = 2,
        MESSAGE = 3
    }

    /** Properties of an Utxo. */
    interface IUtxo {

        /** Utxo subject */
        subject?: (string|null);

        /** Utxo utxoId */
        utxoId?: (Uint8Array|null);

        /** Utxo type */
        type?: (utxos.UtxoType|null);

        /** Utxo status */
        status?: (utxos.UtxoStatus|null);

        /** Utxo coin */
        coin?: (utxos.IUtxoCoin|null);

        /** Utxo contract */
        contract?: (utxos.IUtxoContract|null);

        /** Utxo message */
        message?: (utxos.IUtxoMessage|null);

        /** Utxo metadata */
        metadata?: (common.IMetadata|null);

        /** Utxo pointer */
        pointer?: (pointers.IUtxoPointer|null);
    }

    /** Represents an Utxo. */
    class Utxo implements IUtxo {

        /**
         * Constructs a new Utxo.
         * @param [properties] Properties to set
         */
        constructor(properties?: utxos.IUtxo);

        /** Utxo subject. */
        public subject: string;

        /** Utxo utxoId. */
        public utxoId: Uint8Array;

        /** Utxo type. */
        public type: utxos.UtxoType;

        /** Utxo status. */
        public status: utxos.UtxoStatus;

        /** Utxo coin. */
        public coin?: (utxos.IUtxoCoin|null);

        /** Utxo contract. */
        public contract?: (utxos.IUtxoContract|null);

        /** Utxo message. */
        public message?: (utxos.IUtxoMessage|null);

        /** Utxo metadata. */
        public metadata?: (common.IMetadata|null);

        /** Utxo pointer. */
        public pointer?: (pointers.IUtxoPointer|null);

        /** Utxo utxoData. */
        public utxoData?: ("coin"|"contract"|"message");

        /**
         * Creates a new Utxo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Utxo instance
         */
        public static create(properties?: utxos.IUtxo): utxos.Utxo;

        /**
         * Encodes the specified Utxo message. Does not implicitly {@link utxos.Utxo.verify|verify} messages.
         * @param message Utxo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: utxos.IUtxo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Utxo message, length delimited. Does not implicitly {@link utxos.Utxo.verify|verify} messages.
         * @param message Utxo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: utxos.IUtxo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Utxo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): utxos.Utxo;

        /**
         * Decodes an Utxo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): utxos.Utxo;

        /**
         * Verifies an Utxo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Utxo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Utxo
         */
        public static fromObject(object: { [k: string]: any }): utxos.Utxo;

        /**
         * Creates a plain object from an Utxo message. Also converts values to other types if specified.
         * @param message Utxo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: utxos.Utxo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Utxo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Utxo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UtxoCoin. */
    interface IUtxoCoin {

        /** UtxoCoin amount */
        amount?: (number|Long|null);
    }

    /** Represents an UtxoCoin. */
    class UtxoCoin implements IUtxoCoin {

        /**
         * Constructs a new UtxoCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: utxos.IUtxoCoin);

        /** UtxoCoin amount. */
        public amount: (number|Long);

        /**
         * Creates a new UtxoCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UtxoCoin instance
         */
        public static create(properties?: utxos.IUtxoCoin): utxos.UtxoCoin;

        /**
         * Encodes the specified UtxoCoin message. Does not implicitly {@link utxos.UtxoCoin.verify|verify} messages.
         * @param message UtxoCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: utxos.IUtxoCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UtxoCoin message, length delimited. Does not implicitly {@link utxos.UtxoCoin.verify|verify} messages.
         * @param message UtxoCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: utxos.IUtxoCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UtxoCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UtxoCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): utxos.UtxoCoin;

        /**
         * Decodes an UtxoCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UtxoCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): utxos.UtxoCoin;

        /**
         * Verifies an UtxoCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UtxoCoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UtxoCoin
         */
        public static fromObject(object: { [k: string]: any }): utxos.UtxoCoin;

        /**
         * Creates a plain object from an UtxoCoin message. Also converts values to other types if specified.
         * @param message UtxoCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: utxos.UtxoCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UtxoCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UtxoCoin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UtxoContract. */
    interface IUtxoContract {

        /** UtxoContract contractId */
        contractId?: (Uint8Array|null);

        /** UtxoContract value */
        value?: (Uint8Array|null);
    }

    /** Represents an UtxoContract. */
    class UtxoContract implements IUtxoContract {

        /**
         * Constructs a new UtxoContract.
         * @param [properties] Properties to set
         */
        constructor(properties?: utxos.IUtxoContract);

        /** UtxoContract contractId. */
        public contractId: Uint8Array;

        /** UtxoContract value. */
        public value: Uint8Array;

        /**
         * Creates a new UtxoContract instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UtxoContract instance
         */
        public static create(properties?: utxos.IUtxoContract): utxos.UtxoContract;

        /**
         * Encodes the specified UtxoContract message. Does not implicitly {@link utxos.UtxoContract.verify|verify} messages.
         * @param message UtxoContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: utxos.IUtxoContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UtxoContract message, length delimited. Does not implicitly {@link utxos.UtxoContract.verify|verify} messages.
         * @param message UtxoContract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: utxos.IUtxoContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UtxoContract message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UtxoContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): utxos.UtxoContract;

        /**
         * Decodes an UtxoContract message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UtxoContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): utxos.UtxoContract;

        /**
         * Verifies an UtxoContract message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UtxoContract message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UtxoContract
         */
        public static fromObject(object: { [k: string]: any }): utxos.UtxoContract;

        /**
         * Creates a plain object from an UtxoContract message. Also converts values to other types if specified.
         * @param message UtxoContract
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: utxos.UtxoContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UtxoContract to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UtxoContract
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UtxoMessage. */
    interface IUtxoMessage {

        /** UtxoMessage sender */
        sender?: (Uint8Array|null);

        /** UtxoMessage recipient */
        recipient?: (Uint8Array|null);

        /** UtxoMessage nonce */
        nonce?: (Uint8Array|null);

        /** UtxoMessage data */
        data?: (Uint8Array|null);
    }

    /** Represents an UtxoMessage. */
    class UtxoMessage implements IUtxoMessage {

        /**
         * Constructs a new UtxoMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: utxos.IUtxoMessage);

        /** UtxoMessage sender. */
        public sender: Uint8Array;

        /** UtxoMessage recipient. */
        public recipient: Uint8Array;

        /** UtxoMessage nonce. */
        public nonce: Uint8Array;

        /** UtxoMessage data. */
        public data: Uint8Array;

        /**
         * Creates a new UtxoMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UtxoMessage instance
         */
        public static create(properties?: utxos.IUtxoMessage): utxos.UtxoMessage;

        /**
         * Encodes the specified UtxoMessage message. Does not implicitly {@link utxos.UtxoMessage.verify|verify} messages.
         * @param message UtxoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: utxos.IUtxoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UtxoMessage message, length delimited. Does not implicitly {@link utxos.UtxoMessage.verify|verify} messages.
         * @param message UtxoMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: utxos.IUtxoMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UtxoMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UtxoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): utxos.UtxoMessage;

        /**
         * Decodes an UtxoMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UtxoMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): utxos.UtxoMessage;

        /**
         * Verifies an UtxoMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UtxoMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UtxoMessage
         */
        public static fromObject(object: { [k: string]: any }): utxos.UtxoMessage;

        /**
         * Creates a plain object from an UtxoMessage message. Also converts values to other types if specified.
         * @param message UtxoMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: utxos.UtxoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UtxoMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UtxoMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
