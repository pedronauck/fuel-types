/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const blocks = $root.blocks = (() => {

    /**
     * Namespace blocks.
     * @exports blocks
     * @namespace
     */
    const blocks = {};

    /**
     * ConsensusType enum.
     * @name blocks.ConsensusType
     * @enum {number}
     * @property {number} GENESIS=0 GENESIS value
     * @property {number} POA_CONSENSUS=1 POA_CONSENSUS value
     */
    blocks.ConsensusType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GENESIS"] = 0;
        values[valuesById[1] = "POA_CONSENSUS"] = 1;
        return values;
    })();

    blocks.Block = (function() {

        /**
         * Properties of a Block.
         * @memberof blocks
         * @interface IBlock
         * @property {string|null} [subject] Block subject
         * @property {number|Long|null} [blockHeight] Block blockHeight
         * @property {Uint8Array|null} [producerAddress] Block producerAddress
         * @property {number|null} [blockId] Block blockId
         * @property {string|null} [version] Block version
         * @property {blocks.IBlockHeader|null} [header] Block header
         * @property {blocks.IBlockConsensus|null} [consensus] Block consensus
         * @property {Array.<Uint8Array>|null} [transactionIds] Block transactionIds
         * @property {google.protobuf.ITimestamp|null} [createdAt] Block createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Block publishedAt
         * @property {pointers.IBlockPointer|null} [pointer] Block pointer
         */

        /**
         * Constructs a new Block.
         * @memberof blocks
         * @classdesc Represents a Block.
         * @implements IBlock
         * @constructor
         * @param {blocks.IBlock=} [properties] Properties to set
         */
        function Block(properties) {
            this.transactionIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Block subject.
         * @member {string} subject
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.subject = "";

        /**
         * Block blockHeight.
         * @member {number|Long} blockHeight
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Block producerAddress.
         * @member {Uint8Array} producerAddress
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.producerAddress = $util.newBuffer([]);

        /**
         * Block blockId.
         * @member {number} blockId
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.blockId = 0;

        /**
         * Block version.
         * @member {string} version
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.version = "";

        /**
         * Block header.
         * @member {blocks.IBlockHeader|null|undefined} header
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.header = null;

        /**
         * Block consensus.
         * @member {blocks.IBlockConsensus|null|undefined} consensus
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.consensus = null;

        /**
         * Block transactionIds.
         * @member {Array.<Uint8Array>} transactionIds
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.transactionIds = $util.emptyArray;

        /**
         * Block createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.createdAt = null;

        /**
         * Block publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.publishedAt = null;

        /**
         * Block pointer.
         * @member {pointers.IBlockPointer|null|undefined} pointer
         * @memberof blocks.Block
         * @instance
         */
        Block.prototype.pointer = null;

        /**
         * Creates a new Block instance using the specified properties.
         * @function create
         * @memberof blocks.Block
         * @static
         * @param {blocks.IBlock=} [properties] Properties to set
         * @returns {blocks.Block} Block instance
         */
        Block.create = function create(properties) {
            return new Block(properties);
        };

        /**
         * Encodes the specified Block message. Does not implicitly {@link blocks.Block.verify|verify} messages.
         * @function encode
         * @memberof blocks.Block
         * @static
         * @param {blocks.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.producerAddress != null && Object.hasOwnProperty.call(message, "producerAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.producerAddress);
            if (message.blockId != null && Object.hasOwnProperty.call(message, "blockId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.blockId);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.version);
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.blocks.BlockHeader.encode(message.header, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.consensus != null && Object.hasOwnProperty.call(message, "consensus"))
                $root.blocks.BlockConsensus.encode(message.consensus, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.transactionIds != null && message.transactionIds.length)
                for (let i = 0; i < message.transactionIds.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.transactionIds[i]);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.BlockPointer.encode(message.pointer, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Block message, length delimited. Does not implicitly {@link blocks.Block.verify|verify} messages.
         * @function encodeDelimited
         * @memberof blocks.Block
         * @static
         * @param {blocks.IBlock} message Block message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Block.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Block message from the specified reader or buffer.
         * @function decode
         * @memberof blocks.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {blocks.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blocks.Block();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.producerAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.blockId = reader.int32();
                        break;
                    }
                case 5: {
                        message.version = reader.string();
                        break;
                    }
                case 6: {
                        message.header = $root.blocks.BlockHeader.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.consensus = $root.blocks.BlockConsensus.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        if (!(message.transactionIds && message.transactionIds.length))
                            message.transactionIds = [];
                        message.transactionIds.push(reader.bytes());
                        break;
                    }
                case 9: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.pointer = $root.pointers.BlockPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Block message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof blocks.Block
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {blocks.Block} Block
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Block.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Block message.
         * @function verify
         * @memberof blocks.Block
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Block.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.producerAddress != null && message.hasOwnProperty("producerAddress"))
                if (!(message.producerAddress && typeof message.producerAddress.length === "number" || $util.isString(message.producerAddress)))
                    return "producerAddress: buffer expected";
            if (message.blockId != null && message.hasOwnProperty("blockId"))
                if (!$util.isInteger(message.blockId))
                    return "blockId: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.blocks.BlockHeader.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.consensus != null && message.hasOwnProperty("consensus")) {
                let error = $root.blocks.BlockConsensus.verify(message.consensus);
                if (error)
                    return "consensus." + error;
            }
            if (message.transactionIds != null && message.hasOwnProperty("transactionIds")) {
                if (!Array.isArray(message.transactionIds))
                    return "transactionIds: array expected";
                for (let i = 0; i < message.transactionIds.length; ++i)
                    if (!(message.transactionIds[i] && typeof message.transactionIds[i].length === "number" || $util.isString(message.transactionIds[i])))
                        return "transactionIds: buffer[] expected";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.BlockPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates a Block message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof blocks.Block
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {blocks.Block} Block
         */
        Block.fromObject = function fromObject(object) {
            if (object instanceof $root.blocks.Block)
                return object;
            let message = new $root.blocks.Block();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.producerAddress != null)
                if (typeof object.producerAddress === "string")
                    $util.base64.decode(object.producerAddress, message.producerAddress = $util.newBuffer($util.base64.length(object.producerAddress)), 0);
                else if (object.producerAddress.length >= 0)
                    message.producerAddress = object.producerAddress;
            if (object.blockId != null)
                message.blockId = object.blockId | 0;
            if (object.version != null)
                message.version = String(object.version);
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".blocks.Block.header: object expected");
                message.header = $root.blocks.BlockHeader.fromObject(object.header);
            }
            if (object.consensus != null) {
                if (typeof object.consensus !== "object")
                    throw TypeError(".blocks.Block.consensus: object expected");
                message.consensus = $root.blocks.BlockConsensus.fromObject(object.consensus);
            }
            if (object.transactionIds) {
                if (!Array.isArray(object.transactionIds))
                    throw TypeError(".blocks.Block.transactionIds: array expected");
                message.transactionIds = [];
                for (let i = 0; i < object.transactionIds.length; ++i)
                    if (typeof object.transactionIds[i] === "string")
                        $util.base64.decode(object.transactionIds[i], message.transactionIds[i] = $util.newBuffer($util.base64.length(object.transactionIds[i])), 0);
                    else if (object.transactionIds[i].length >= 0)
                        message.transactionIds[i] = object.transactionIds[i];
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".blocks.Block.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".blocks.Block.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".blocks.Block.pointer: object expected");
                message.pointer = $root.pointers.BlockPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from a Block message. Also converts values to other types if specified.
         * @function toObject
         * @memberof blocks.Block
         * @static
         * @param {blocks.Block} message Block
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Block.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.transactionIds = [];
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.producerAddress = "";
                else {
                    object.producerAddress = [];
                    if (options.bytes !== Array)
                        object.producerAddress = $util.newBuffer(object.producerAddress);
                }
                object.blockId = 0;
                object.version = "";
                object.header = null;
                object.consensus = null;
                object.createdAt = null;
                object.publishedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.producerAddress != null && message.hasOwnProperty("producerAddress"))
                object.producerAddress = options.bytes === String ? $util.base64.encode(message.producerAddress, 0, message.producerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.producerAddress) : message.producerAddress;
            if (message.blockId != null && message.hasOwnProperty("blockId"))
                object.blockId = message.blockId;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.blocks.BlockHeader.toObject(message.header, options);
            if (message.consensus != null && message.hasOwnProperty("consensus"))
                object.consensus = $root.blocks.BlockConsensus.toObject(message.consensus, options);
            if (message.transactionIds && message.transactionIds.length) {
                object.transactionIds = [];
                for (let j = 0; j < message.transactionIds.length; ++j)
                    object.transactionIds[j] = options.bytes === String ? $util.base64.encode(message.transactionIds[j], 0, message.transactionIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionIds[j]) : message.transactionIds[j];
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.BlockPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Block to JSON.
         * @function toJSON
         * @memberof blocks.Block
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Block.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Block
         * @function getTypeUrl
         * @memberof blocks.Block
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Block.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/blocks.Block";
        };

        return Block;
    })();

    blocks.BlockHeader = (function() {

        /**
         * Properties of a BlockHeader.
         * @memberof blocks
         * @interface IBlockHeader
         * @property {string|null} [subject] BlockHeader subject
         * @property {number|Long|null} [blockHeight] BlockHeader blockHeight
         * @property {Uint8Array|null} [applicationHash] BlockHeader applicationHash
         * @property {number|null} [consensusParametersVersion] BlockHeader consensusParametersVersion
         * @property {number|Long|null} [daHeight] BlockHeader daHeight
         * @property {Uint8Array|null} [eventInboxRoot] BlockHeader eventInboxRoot
         * @property {Uint8Array|null} [messageOutboxRoot] BlockHeader messageOutboxRoot
         * @property {number|null} [messageReceiptCount] BlockHeader messageReceiptCount
         * @property {Uint8Array|null} [prevRoot] BlockHeader prevRoot
         * @property {number|null} [stateTransitionBytecodeVersion] BlockHeader stateTransitionBytecodeVersion
         * @property {number|Long|null} [time] BlockHeader time
         * @property {number|null} [transactionsCount] BlockHeader transactionsCount
         * @property {Uint8Array|null} [transactionsRoot] BlockHeader transactionsRoot
         * @property {number|null} [version] BlockHeader version
         * @property {google.protobuf.ITimestamp|null} [createdAt] BlockHeader createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] BlockHeader publishedAt
         */

        /**
         * Constructs a new BlockHeader.
         * @memberof blocks
         * @classdesc Represents a BlockHeader.
         * @implements IBlockHeader
         * @constructor
         * @param {blocks.IBlockHeader=} [properties] Properties to set
         */
        function BlockHeader(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockHeader subject.
         * @member {string} subject
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.subject = "";

        /**
         * BlockHeader blockHeight.
         * @member {number|Long} blockHeight
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BlockHeader applicationHash.
         * @member {Uint8Array} applicationHash
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.applicationHash = $util.newBuffer([]);

        /**
         * BlockHeader consensusParametersVersion.
         * @member {number} consensusParametersVersion
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.consensusParametersVersion = 0;

        /**
         * BlockHeader daHeight.
         * @member {number|Long} daHeight
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.daHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BlockHeader eventInboxRoot.
         * @member {Uint8Array} eventInboxRoot
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.eventInboxRoot = $util.newBuffer([]);

        /**
         * BlockHeader messageOutboxRoot.
         * @member {Uint8Array} messageOutboxRoot
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.messageOutboxRoot = $util.newBuffer([]);

        /**
         * BlockHeader messageReceiptCount.
         * @member {number} messageReceiptCount
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.messageReceiptCount = 0;

        /**
         * BlockHeader prevRoot.
         * @member {Uint8Array} prevRoot
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.prevRoot = $util.newBuffer([]);

        /**
         * BlockHeader stateTransitionBytecodeVersion.
         * @member {number} stateTransitionBytecodeVersion
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.stateTransitionBytecodeVersion = 0;

        /**
         * BlockHeader time.
         * @member {number|Long} time
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BlockHeader transactionsCount.
         * @member {number} transactionsCount
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.transactionsCount = 0;

        /**
         * BlockHeader transactionsRoot.
         * @member {Uint8Array} transactionsRoot
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.transactionsRoot = $util.newBuffer([]);

        /**
         * BlockHeader version.
         * @member {number} version
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.version = 0;

        /**
         * BlockHeader createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.createdAt = null;

        /**
         * BlockHeader publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof blocks.BlockHeader
         * @instance
         */
        BlockHeader.prototype.publishedAt = null;

        /**
         * Creates a new BlockHeader instance using the specified properties.
         * @function create
         * @memberof blocks.BlockHeader
         * @static
         * @param {blocks.IBlockHeader=} [properties] Properties to set
         * @returns {blocks.BlockHeader} BlockHeader instance
         */
        BlockHeader.create = function create(properties) {
            return new BlockHeader(properties);
        };

        /**
         * Encodes the specified BlockHeader message. Does not implicitly {@link blocks.BlockHeader.verify|verify} messages.
         * @function encode
         * @memberof blocks.BlockHeader
         * @static
         * @param {blocks.IBlockHeader} message BlockHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockHeader.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.applicationHash != null && Object.hasOwnProperty.call(message, "applicationHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.applicationHash);
            if (message.consensusParametersVersion != null && Object.hasOwnProperty.call(message, "consensusParametersVersion"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.consensusParametersVersion);
            if (message.daHeight != null && Object.hasOwnProperty.call(message, "daHeight"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.daHeight);
            if (message.eventInboxRoot != null && Object.hasOwnProperty.call(message, "eventInboxRoot"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.eventInboxRoot);
            if (message.messageOutboxRoot != null && Object.hasOwnProperty.call(message, "messageOutboxRoot"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.messageOutboxRoot);
            if (message.messageReceiptCount != null && Object.hasOwnProperty.call(message, "messageReceiptCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.messageReceiptCount);
            if (message.prevRoot != null && Object.hasOwnProperty.call(message, "prevRoot"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.prevRoot);
            if (message.stateTransitionBytecodeVersion != null && Object.hasOwnProperty.call(message, "stateTransitionBytecodeVersion"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.stateTransitionBytecodeVersion);
            if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.time);
            if (message.transactionsCount != null && Object.hasOwnProperty.call(message, "transactionsCount"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.transactionsCount);
            if (message.transactionsRoot != null && Object.hasOwnProperty.call(message, "transactionsRoot"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.transactionsRoot);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.version);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BlockHeader message, length delimited. Does not implicitly {@link blocks.BlockHeader.verify|verify} messages.
         * @function encodeDelimited
         * @memberof blocks.BlockHeader
         * @static
         * @param {blocks.IBlockHeader} message BlockHeader message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockHeader.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockHeader message from the specified reader or buffer.
         * @function decode
         * @memberof blocks.BlockHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {blocks.BlockHeader} BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockHeader.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blocks.BlockHeader();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.applicationHash = reader.bytes();
                        break;
                    }
                case 4: {
                        message.consensusParametersVersion = reader.int32();
                        break;
                    }
                case 5: {
                        message.daHeight = reader.int64();
                        break;
                    }
                case 6: {
                        message.eventInboxRoot = reader.bytes();
                        break;
                    }
                case 7: {
                        message.messageOutboxRoot = reader.bytes();
                        break;
                    }
                case 8: {
                        message.messageReceiptCount = reader.int32();
                        break;
                    }
                case 9: {
                        message.prevRoot = reader.bytes();
                        break;
                    }
                case 10: {
                        message.stateTransitionBytecodeVersion = reader.int32();
                        break;
                    }
                case 11: {
                        message.time = reader.int64();
                        break;
                    }
                case 12: {
                        message.transactionsCount = reader.int32();
                        break;
                    }
                case 13: {
                        message.transactionsRoot = reader.bytes();
                        break;
                    }
                case 14: {
                        message.version = reader.int32();
                        break;
                    }
                case 15: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockHeader message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof blocks.BlockHeader
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {blocks.BlockHeader} BlockHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockHeader.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockHeader message.
         * @function verify
         * @memberof blocks.BlockHeader
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockHeader.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.applicationHash != null && message.hasOwnProperty("applicationHash"))
                if (!(message.applicationHash && typeof message.applicationHash.length === "number" || $util.isString(message.applicationHash)))
                    return "applicationHash: buffer expected";
            if (message.consensusParametersVersion != null && message.hasOwnProperty("consensusParametersVersion"))
                if (!$util.isInteger(message.consensusParametersVersion))
                    return "consensusParametersVersion: integer expected";
            if (message.daHeight != null && message.hasOwnProperty("daHeight"))
                if (!$util.isInteger(message.daHeight) && !(message.daHeight && $util.isInteger(message.daHeight.low) && $util.isInteger(message.daHeight.high)))
                    return "daHeight: integer|Long expected";
            if (message.eventInboxRoot != null && message.hasOwnProperty("eventInboxRoot"))
                if (!(message.eventInboxRoot && typeof message.eventInboxRoot.length === "number" || $util.isString(message.eventInboxRoot)))
                    return "eventInboxRoot: buffer expected";
            if (message.messageOutboxRoot != null && message.hasOwnProperty("messageOutboxRoot"))
                if (!(message.messageOutboxRoot && typeof message.messageOutboxRoot.length === "number" || $util.isString(message.messageOutboxRoot)))
                    return "messageOutboxRoot: buffer expected";
            if (message.messageReceiptCount != null && message.hasOwnProperty("messageReceiptCount"))
                if (!$util.isInteger(message.messageReceiptCount))
                    return "messageReceiptCount: integer expected";
            if (message.prevRoot != null && message.hasOwnProperty("prevRoot"))
                if (!(message.prevRoot && typeof message.prevRoot.length === "number" || $util.isString(message.prevRoot)))
                    return "prevRoot: buffer expected";
            if (message.stateTransitionBytecodeVersion != null && message.hasOwnProperty("stateTransitionBytecodeVersion"))
                if (!$util.isInteger(message.stateTransitionBytecodeVersion))
                    return "stateTransitionBytecodeVersion: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.transactionsCount != null && message.hasOwnProperty("transactionsCount"))
                if (!$util.isInteger(message.transactionsCount))
                    return "transactionsCount: integer expected";
            if (message.transactionsRoot != null && message.hasOwnProperty("transactionsRoot"))
                if (!(message.transactionsRoot && typeof message.transactionsRoot.length === "number" || $util.isString(message.transactionsRoot)))
                    return "transactionsRoot: buffer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a BlockHeader message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof blocks.BlockHeader
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {blocks.BlockHeader} BlockHeader
         */
        BlockHeader.fromObject = function fromObject(object) {
            if (object instanceof $root.blocks.BlockHeader)
                return object;
            let message = new $root.blocks.BlockHeader();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.applicationHash != null)
                if (typeof object.applicationHash === "string")
                    $util.base64.decode(object.applicationHash, message.applicationHash = $util.newBuffer($util.base64.length(object.applicationHash)), 0);
                else if (object.applicationHash.length >= 0)
                    message.applicationHash = object.applicationHash;
            if (object.consensusParametersVersion != null)
                message.consensusParametersVersion = object.consensusParametersVersion | 0;
            if (object.daHeight != null)
                if ($util.Long)
                    (message.daHeight = $util.Long.fromValue(object.daHeight)).unsigned = false;
                else if (typeof object.daHeight === "string")
                    message.daHeight = parseInt(object.daHeight, 10);
                else if (typeof object.daHeight === "number")
                    message.daHeight = object.daHeight;
                else if (typeof object.daHeight === "object")
                    message.daHeight = new $util.LongBits(object.daHeight.low >>> 0, object.daHeight.high >>> 0).toNumber();
            if (object.eventInboxRoot != null)
                if (typeof object.eventInboxRoot === "string")
                    $util.base64.decode(object.eventInboxRoot, message.eventInboxRoot = $util.newBuffer($util.base64.length(object.eventInboxRoot)), 0);
                else if (object.eventInboxRoot.length >= 0)
                    message.eventInboxRoot = object.eventInboxRoot;
            if (object.messageOutboxRoot != null)
                if (typeof object.messageOutboxRoot === "string")
                    $util.base64.decode(object.messageOutboxRoot, message.messageOutboxRoot = $util.newBuffer($util.base64.length(object.messageOutboxRoot)), 0);
                else if (object.messageOutboxRoot.length >= 0)
                    message.messageOutboxRoot = object.messageOutboxRoot;
            if (object.messageReceiptCount != null)
                message.messageReceiptCount = object.messageReceiptCount | 0;
            if (object.prevRoot != null)
                if (typeof object.prevRoot === "string")
                    $util.base64.decode(object.prevRoot, message.prevRoot = $util.newBuffer($util.base64.length(object.prevRoot)), 0);
                else if (object.prevRoot.length >= 0)
                    message.prevRoot = object.prevRoot;
            if (object.stateTransitionBytecodeVersion != null)
                message.stateTransitionBytecodeVersion = object.stateTransitionBytecodeVersion | 0;
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.transactionsCount != null)
                message.transactionsCount = object.transactionsCount | 0;
            if (object.transactionsRoot != null)
                if (typeof object.transactionsRoot === "string")
                    $util.base64.decode(object.transactionsRoot, message.transactionsRoot = $util.newBuffer($util.base64.length(object.transactionsRoot)), 0);
                else if (object.transactionsRoot.length >= 0)
                    message.transactionsRoot = object.transactionsRoot;
            if (object.version != null)
                message.version = object.version | 0;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".blocks.BlockHeader.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".blocks.BlockHeader.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a BlockHeader message. Also converts values to other types if specified.
         * @function toObject
         * @memberof blocks.BlockHeader
         * @static
         * @param {blocks.BlockHeader} message BlockHeader
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockHeader.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.applicationHash = "";
                else {
                    object.applicationHash = [];
                    if (options.bytes !== Array)
                        object.applicationHash = $util.newBuffer(object.applicationHash);
                }
                object.consensusParametersVersion = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.daHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.daHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.eventInboxRoot = "";
                else {
                    object.eventInboxRoot = [];
                    if (options.bytes !== Array)
                        object.eventInboxRoot = $util.newBuffer(object.eventInboxRoot);
                }
                if (options.bytes === String)
                    object.messageOutboxRoot = "";
                else {
                    object.messageOutboxRoot = [];
                    if (options.bytes !== Array)
                        object.messageOutboxRoot = $util.newBuffer(object.messageOutboxRoot);
                }
                object.messageReceiptCount = 0;
                if (options.bytes === String)
                    object.prevRoot = "";
                else {
                    object.prevRoot = [];
                    if (options.bytes !== Array)
                        object.prevRoot = $util.newBuffer(object.prevRoot);
                }
                object.stateTransitionBytecodeVersion = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.transactionsCount = 0;
                if (options.bytes === String)
                    object.transactionsRoot = "";
                else {
                    object.transactionsRoot = [];
                    if (options.bytes !== Array)
                        object.transactionsRoot = $util.newBuffer(object.transactionsRoot);
                }
                object.version = 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.applicationHash != null && message.hasOwnProperty("applicationHash"))
                object.applicationHash = options.bytes === String ? $util.base64.encode(message.applicationHash, 0, message.applicationHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.applicationHash) : message.applicationHash;
            if (message.consensusParametersVersion != null && message.hasOwnProperty("consensusParametersVersion"))
                object.consensusParametersVersion = message.consensusParametersVersion;
            if (message.daHeight != null && message.hasOwnProperty("daHeight"))
                if (typeof message.daHeight === "number")
                    object.daHeight = options.longs === String ? String(message.daHeight) : message.daHeight;
                else
                    object.daHeight = options.longs === String ? $util.Long.prototype.toString.call(message.daHeight) : options.longs === Number ? new $util.LongBits(message.daHeight.low >>> 0, message.daHeight.high >>> 0).toNumber() : message.daHeight;
            if (message.eventInboxRoot != null && message.hasOwnProperty("eventInboxRoot"))
                object.eventInboxRoot = options.bytes === String ? $util.base64.encode(message.eventInboxRoot, 0, message.eventInboxRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.eventInboxRoot) : message.eventInboxRoot;
            if (message.messageOutboxRoot != null && message.hasOwnProperty("messageOutboxRoot"))
                object.messageOutboxRoot = options.bytes === String ? $util.base64.encode(message.messageOutboxRoot, 0, message.messageOutboxRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageOutboxRoot) : message.messageOutboxRoot;
            if (message.messageReceiptCount != null && message.hasOwnProperty("messageReceiptCount"))
                object.messageReceiptCount = message.messageReceiptCount;
            if (message.prevRoot != null && message.hasOwnProperty("prevRoot"))
                object.prevRoot = options.bytes === String ? $util.base64.encode(message.prevRoot, 0, message.prevRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.prevRoot) : message.prevRoot;
            if (message.stateTransitionBytecodeVersion != null && message.hasOwnProperty("stateTransitionBytecodeVersion"))
                object.stateTransitionBytecodeVersion = message.stateTransitionBytecodeVersion;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.transactionsCount != null && message.hasOwnProperty("transactionsCount"))
                object.transactionsCount = message.transactionsCount;
            if (message.transactionsRoot != null && message.hasOwnProperty("transactionsRoot"))
                object.transactionsRoot = options.bytes === String ? $util.base64.encode(message.transactionsRoot, 0, message.transactionsRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionsRoot) : message.transactionsRoot;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this BlockHeader to JSON.
         * @function toJSON
         * @memberof blocks.BlockHeader
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockHeader.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BlockHeader
         * @function getTypeUrl
         * @memberof blocks.BlockHeader
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BlockHeader.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/blocks.BlockHeader";
        };

        return BlockHeader;
    })();

    blocks.BlockConsensus = (function() {

        /**
         * Properties of a BlockConsensus.
         * @memberof blocks
         * @interface IBlockConsensus
         * @property {string|null} [subject] BlockConsensus subject
         * @property {number|Long|null} [blockHeight] BlockConsensus blockHeight
         * @property {blocks.ConsensusType|null} [consensusType] BlockConsensus consensusType
         * @property {Uint8Array|null} [chainConfigHash] BlockConsensus chainConfigHash
         * @property {Uint8Array|null} [coinsRoot] BlockConsensus coinsRoot
         * @property {Uint8Array|null} [contractsRoot] BlockConsensus contractsRoot
         * @property {Uint8Array|null} [messagesRoot] BlockConsensus messagesRoot
         * @property {Uint8Array|null} [transactionsRoot] BlockConsensus transactionsRoot
         * @property {Uint8Array|null} [signature] BlockConsensus signature
         * @property {google.protobuf.ITimestamp|null} [createdAt] BlockConsensus createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] BlockConsensus publishedAt
         */

        /**
         * Constructs a new BlockConsensus.
         * @memberof blocks
         * @classdesc Represents a BlockConsensus.
         * @implements IBlockConsensus
         * @constructor
         * @param {blocks.IBlockConsensus=} [properties] Properties to set
         */
        function BlockConsensus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockConsensus subject.
         * @member {string} subject
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.subject = "";

        /**
         * BlockConsensus blockHeight.
         * @member {number|Long} blockHeight
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BlockConsensus consensusType.
         * @member {blocks.ConsensusType} consensusType
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.consensusType = 0;

        /**
         * BlockConsensus chainConfigHash.
         * @member {Uint8Array} chainConfigHash
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.chainConfigHash = $util.newBuffer([]);

        /**
         * BlockConsensus coinsRoot.
         * @member {Uint8Array} coinsRoot
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.coinsRoot = $util.newBuffer([]);

        /**
         * BlockConsensus contractsRoot.
         * @member {Uint8Array} contractsRoot
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.contractsRoot = $util.newBuffer([]);

        /**
         * BlockConsensus messagesRoot.
         * @member {Uint8Array} messagesRoot
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.messagesRoot = $util.newBuffer([]);

        /**
         * BlockConsensus transactionsRoot.
         * @member {Uint8Array} transactionsRoot
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.transactionsRoot = $util.newBuffer([]);

        /**
         * BlockConsensus signature.
         * @member {Uint8Array} signature
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.signature = $util.newBuffer([]);

        /**
         * BlockConsensus createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.createdAt = null;

        /**
         * BlockConsensus publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof blocks.BlockConsensus
         * @instance
         */
        BlockConsensus.prototype.publishedAt = null;

        /**
         * Creates a new BlockConsensus instance using the specified properties.
         * @function create
         * @memberof blocks.BlockConsensus
         * @static
         * @param {blocks.IBlockConsensus=} [properties] Properties to set
         * @returns {blocks.BlockConsensus} BlockConsensus instance
         */
        BlockConsensus.create = function create(properties) {
            return new BlockConsensus(properties);
        };

        /**
         * Encodes the specified BlockConsensus message. Does not implicitly {@link blocks.BlockConsensus.verify|verify} messages.
         * @function encode
         * @memberof blocks.BlockConsensus
         * @static
         * @param {blocks.IBlockConsensus} message BlockConsensus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockConsensus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.consensusType != null && Object.hasOwnProperty.call(message, "consensusType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.consensusType);
            if (message.chainConfigHash != null && Object.hasOwnProperty.call(message, "chainConfigHash"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.chainConfigHash);
            if (message.coinsRoot != null && Object.hasOwnProperty.call(message, "coinsRoot"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.coinsRoot);
            if (message.contractsRoot != null && Object.hasOwnProperty.call(message, "contractsRoot"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.contractsRoot);
            if (message.messagesRoot != null && Object.hasOwnProperty.call(message, "messagesRoot"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.messagesRoot);
            if (message.transactionsRoot != null && Object.hasOwnProperty.call(message, "transactionsRoot"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.transactionsRoot);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.signature);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BlockConsensus message, length delimited. Does not implicitly {@link blocks.BlockConsensus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof blocks.BlockConsensus
         * @static
         * @param {blocks.IBlockConsensus} message BlockConsensus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockConsensus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockConsensus message from the specified reader or buffer.
         * @function decode
         * @memberof blocks.BlockConsensus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {blocks.BlockConsensus} BlockConsensus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockConsensus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.blocks.BlockConsensus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.consensusType = reader.int32();
                        break;
                    }
                case 4: {
                        message.chainConfigHash = reader.bytes();
                        break;
                    }
                case 5: {
                        message.coinsRoot = reader.bytes();
                        break;
                    }
                case 6: {
                        message.contractsRoot = reader.bytes();
                        break;
                    }
                case 7: {
                        message.messagesRoot = reader.bytes();
                        break;
                    }
                case 8: {
                        message.transactionsRoot = reader.bytes();
                        break;
                    }
                case 9: {
                        message.signature = reader.bytes();
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockConsensus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof blocks.BlockConsensus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {blocks.BlockConsensus} BlockConsensus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockConsensus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockConsensus message.
         * @function verify
         * @memberof blocks.BlockConsensus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockConsensus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.consensusType != null && message.hasOwnProperty("consensusType"))
                switch (message.consensusType) {
                default:
                    return "consensusType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.chainConfigHash != null && message.hasOwnProperty("chainConfigHash"))
                if (!(message.chainConfigHash && typeof message.chainConfigHash.length === "number" || $util.isString(message.chainConfigHash)))
                    return "chainConfigHash: buffer expected";
            if (message.coinsRoot != null && message.hasOwnProperty("coinsRoot"))
                if (!(message.coinsRoot && typeof message.coinsRoot.length === "number" || $util.isString(message.coinsRoot)))
                    return "coinsRoot: buffer expected";
            if (message.contractsRoot != null && message.hasOwnProperty("contractsRoot"))
                if (!(message.contractsRoot && typeof message.contractsRoot.length === "number" || $util.isString(message.contractsRoot)))
                    return "contractsRoot: buffer expected";
            if (message.messagesRoot != null && message.hasOwnProperty("messagesRoot"))
                if (!(message.messagesRoot && typeof message.messagesRoot.length === "number" || $util.isString(message.messagesRoot)))
                    return "messagesRoot: buffer expected";
            if (message.transactionsRoot != null && message.hasOwnProperty("transactionsRoot"))
                if (!(message.transactionsRoot && typeof message.transactionsRoot.length === "number" || $util.isString(message.transactionsRoot)))
                    return "transactionsRoot: buffer expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a BlockConsensus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof blocks.BlockConsensus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {blocks.BlockConsensus} BlockConsensus
         */
        BlockConsensus.fromObject = function fromObject(object) {
            if (object instanceof $root.blocks.BlockConsensus)
                return object;
            let message = new $root.blocks.BlockConsensus();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            switch (object.consensusType) {
            default:
                if (typeof object.consensusType === "number") {
                    message.consensusType = object.consensusType;
                    break;
                }
                break;
            case "GENESIS":
            case 0:
                message.consensusType = 0;
                break;
            case "POA_CONSENSUS":
            case 1:
                message.consensusType = 1;
                break;
            }
            if (object.chainConfigHash != null)
                if (typeof object.chainConfigHash === "string")
                    $util.base64.decode(object.chainConfigHash, message.chainConfigHash = $util.newBuffer($util.base64.length(object.chainConfigHash)), 0);
                else if (object.chainConfigHash.length >= 0)
                    message.chainConfigHash = object.chainConfigHash;
            if (object.coinsRoot != null)
                if (typeof object.coinsRoot === "string")
                    $util.base64.decode(object.coinsRoot, message.coinsRoot = $util.newBuffer($util.base64.length(object.coinsRoot)), 0);
                else if (object.coinsRoot.length >= 0)
                    message.coinsRoot = object.coinsRoot;
            if (object.contractsRoot != null)
                if (typeof object.contractsRoot === "string")
                    $util.base64.decode(object.contractsRoot, message.contractsRoot = $util.newBuffer($util.base64.length(object.contractsRoot)), 0);
                else if (object.contractsRoot.length >= 0)
                    message.contractsRoot = object.contractsRoot;
            if (object.messagesRoot != null)
                if (typeof object.messagesRoot === "string")
                    $util.base64.decode(object.messagesRoot, message.messagesRoot = $util.newBuffer($util.base64.length(object.messagesRoot)), 0);
                else if (object.messagesRoot.length >= 0)
                    message.messagesRoot = object.messagesRoot;
            if (object.transactionsRoot != null)
                if (typeof object.transactionsRoot === "string")
                    $util.base64.decode(object.transactionsRoot, message.transactionsRoot = $util.newBuffer($util.base64.length(object.transactionsRoot)), 0);
                else if (object.transactionsRoot.length >= 0)
                    message.transactionsRoot = object.transactionsRoot;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".blocks.BlockConsensus.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".blocks.BlockConsensus.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a BlockConsensus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof blocks.BlockConsensus
         * @static
         * @param {blocks.BlockConsensus} message BlockConsensus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockConsensus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.consensusType = options.enums === String ? "GENESIS" : 0;
                if (options.bytes === String)
                    object.chainConfigHash = "";
                else {
                    object.chainConfigHash = [];
                    if (options.bytes !== Array)
                        object.chainConfigHash = $util.newBuffer(object.chainConfigHash);
                }
                if (options.bytes === String)
                    object.coinsRoot = "";
                else {
                    object.coinsRoot = [];
                    if (options.bytes !== Array)
                        object.coinsRoot = $util.newBuffer(object.coinsRoot);
                }
                if (options.bytes === String)
                    object.contractsRoot = "";
                else {
                    object.contractsRoot = [];
                    if (options.bytes !== Array)
                        object.contractsRoot = $util.newBuffer(object.contractsRoot);
                }
                if (options.bytes === String)
                    object.messagesRoot = "";
                else {
                    object.messagesRoot = [];
                    if (options.bytes !== Array)
                        object.messagesRoot = $util.newBuffer(object.messagesRoot);
                }
                if (options.bytes === String)
                    object.transactionsRoot = "";
                else {
                    object.transactionsRoot = [];
                    if (options.bytes !== Array)
                        object.transactionsRoot = $util.newBuffer(object.transactionsRoot);
                }
                if (options.bytes === String)
                    object.signature = "";
                else {
                    object.signature = [];
                    if (options.bytes !== Array)
                        object.signature = $util.newBuffer(object.signature);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.consensusType != null && message.hasOwnProperty("consensusType"))
                object.consensusType = options.enums === String ? $root.blocks.ConsensusType[message.consensusType] === undefined ? message.consensusType : $root.blocks.ConsensusType[message.consensusType] : message.consensusType;
            if (message.chainConfigHash != null && message.hasOwnProperty("chainConfigHash"))
                object.chainConfigHash = options.bytes === String ? $util.base64.encode(message.chainConfigHash, 0, message.chainConfigHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.chainConfigHash) : message.chainConfigHash;
            if (message.coinsRoot != null && message.hasOwnProperty("coinsRoot"))
                object.coinsRoot = options.bytes === String ? $util.base64.encode(message.coinsRoot, 0, message.coinsRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.coinsRoot) : message.coinsRoot;
            if (message.contractsRoot != null && message.hasOwnProperty("contractsRoot"))
                object.contractsRoot = options.bytes === String ? $util.base64.encode(message.contractsRoot, 0, message.contractsRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractsRoot) : message.contractsRoot;
            if (message.messagesRoot != null && message.hasOwnProperty("messagesRoot"))
                object.messagesRoot = options.bytes === String ? $util.base64.encode(message.messagesRoot, 0, message.messagesRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.messagesRoot) : message.messagesRoot;
            if (message.transactionsRoot != null && message.hasOwnProperty("transactionsRoot"))
                object.transactionsRoot = options.bytes === String ? $util.base64.encode(message.transactionsRoot, 0, message.transactionsRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionsRoot) : message.transactionsRoot;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this BlockConsensus to JSON.
         * @function toJSON
         * @memberof blocks.BlockConsensus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockConsensus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BlockConsensus
         * @function getTypeUrl
         * @memberof blocks.BlockConsensus
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BlockConsensus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/blocks.BlockConsensus";
        };

        return BlockConsensus;
    })();

    return blocks;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export const pointers = $root.pointers = (() => {

    /**
     * Namespace pointers.
     * @exports pointers
     * @namespace
     */
    const pointers = {};

    pointers.BlockPointer = (function() {

        /**
         * Properties of a BlockPointer.
         * @memberof pointers
         * @interface IBlockPointer
         * @property {number|Long|null} [blockHeight] BlockPointer blockHeight
         */

        /**
         * Constructs a new BlockPointer.
         * @memberof pointers
         * @classdesc Represents a BlockPointer.
         * @implements IBlockPointer
         * @constructor
         * @param {pointers.IBlockPointer=} [properties] Properties to set
         */
        function BlockPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.BlockPointer
         * @instance
         */
        BlockPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BlockPointer instance using the specified properties.
         * @function create
         * @memberof pointers.BlockPointer
         * @static
         * @param {pointers.IBlockPointer=} [properties] Properties to set
         * @returns {pointers.BlockPointer} BlockPointer instance
         */
        BlockPointer.create = function create(properties) {
            return new BlockPointer(properties);
        };

        /**
         * Encodes the specified BlockPointer message. Does not implicitly {@link pointers.BlockPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.BlockPointer
         * @static
         * @param {pointers.IBlockPointer} message BlockPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            return writer;
        };

        /**
         * Encodes the specified BlockPointer message, length delimited. Does not implicitly {@link pointers.BlockPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.BlockPointer
         * @static
         * @param {pointers.IBlockPointer} message BlockPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.BlockPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.BlockPointer} BlockPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.BlockPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.BlockPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.BlockPointer} BlockPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockPointer message.
         * @function verify
         * @memberof pointers.BlockPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            return null;
        };

        /**
         * Creates a BlockPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.BlockPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.BlockPointer} BlockPointer
         */
        BlockPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.BlockPointer)
                return object;
            let message = new $root.pointers.BlockPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BlockPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.BlockPointer
         * @static
         * @param {pointers.BlockPointer} message BlockPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            return object;
        };

        /**
         * Converts this BlockPointer to JSON.
         * @function toJSON
         * @memberof pointers.BlockPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BlockPointer
         * @function getTypeUrl
         * @memberof pointers.BlockPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BlockPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.BlockPointer";
        };

        return BlockPointer;
    })();

    pointers.TransactionPointer = (function() {

        /**
         * Properties of a TransactionPointer.
         * @memberof pointers
         * @interface ITransactionPointer
         * @property {number|Long|null} [blockHeight] TransactionPointer blockHeight
         * @property {number|null} [txId] TransactionPointer txId
         * @property {number|null} [txIndex] TransactionPointer txIndex
         */

        /**
         * Constructs a new TransactionPointer.
         * @memberof pointers
         * @classdesc Represents a TransactionPointer.
         * @implements ITransactionPointer
         * @constructor
         * @param {pointers.ITransactionPointer=} [properties] Properties to set
         */
        function TransactionPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransactionPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.TransactionPointer
         * @instance
         */
        TransactionPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TransactionPointer txId.
         * @member {number} txId
         * @memberof pointers.TransactionPointer
         * @instance
         */
        TransactionPointer.prototype.txId = 0;

        /**
         * TransactionPointer txIndex.
         * @member {number} txIndex
         * @memberof pointers.TransactionPointer
         * @instance
         */
        TransactionPointer.prototype.txIndex = 0;

        /**
         * Creates a new TransactionPointer instance using the specified properties.
         * @function create
         * @memberof pointers.TransactionPointer
         * @static
         * @param {pointers.ITransactionPointer=} [properties] Properties to set
         * @returns {pointers.TransactionPointer} TransactionPointer instance
         */
        TransactionPointer.create = function create(properties) {
            return new TransactionPointer(properties);
        };

        /**
         * Encodes the specified TransactionPointer message. Does not implicitly {@link pointers.TransactionPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.TransactionPointer
         * @static
         * @param {pointers.ITransactionPointer} message TransactionPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.txIndex);
            return writer;
        };

        /**
         * Encodes the specified TransactionPointer message, length delimited. Does not implicitly {@link pointers.TransactionPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.TransactionPointer
         * @static
         * @param {pointers.ITransactionPointer} message TransactionPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransactionPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransactionPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.TransactionPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.TransactionPointer} TransactionPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.TransactionPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 2: {
                        message.txId = reader.int32();
                        break;
                    }
                case 3: {
                        message.txIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransactionPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.TransactionPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.TransactionPointer} TransactionPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransactionPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransactionPointer message.
         * @function verify
         * @memberof pointers.TransactionPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransactionPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!$util.isInteger(message.txId))
                    return "txId: integer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            return null;
        };

        /**
         * Creates a TransactionPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.TransactionPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.TransactionPointer} TransactionPointer
         */
        TransactionPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.TransactionPointer)
                return object;
            let message = new $root.pointers.TransactionPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                message.txId = object.txId | 0;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a TransactionPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.TransactionPointer
         * @static
         * @param {pointers.TransactionPointer} message TransactionPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransactionPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.txId = 0;
                object.txIndex = 0;
            }
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            return object;
        };

        /**
         * Converts this TransactionPointer to JSON.
         * @function toJSON
         * @memberof pointers.TransactionPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransactionPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TransactionPointer
         * @function getTypeUrl
         * @memberof pointers.TransactionPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TransactionPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.TransactionPointer";
        };

        return TransactionPointer;
    })();

    pointers.InputPointer = (function() {

        /**
         * Properties of an InputPointer.
         * @memberof pointers
         * @interface IInputPointer
         * @property {number|Long|null} [blockHeight] InputPointer blockHeight
         * @property {number|null} [txId] InputPointer txId
         * @property {number|null} [txIndex] InputPointer txIndex
         * @property {number|null} [inputIndex] InputPointer inputIndex
         */

        /**
         * Constructs a new InputPointer.
         * @memberof pointers
         * @classdesc Represents an InputPointer.
         * @implements IInputPointer
         * @constructor
         * @param {pointers.IInputPointer=} [properties] Properties to set
         */
        function InputPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.InputPointer
         * @instance
         */
        InputPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputPointer txId.
         * @member {number} txId
         * @memberof pointers.InputPointer
         * @instance
         */
        InputPointer.prototype.txId = 0;

        /**
         * InputPointer txIndex.
         * @member {number} txIndex
         * @memberof pointers.InputPointer
         * @instance
         */
        InputPointer.prototype.txIndex = 0;

        /**
         * InputPointer inputIndex.
         * @member {number} inputIndex
         * @memberof pointers.InputPointer
         * @instance
         */
        InputPointer.prototype.inputIndex = 0;

        /**
         * Creates a new InputPointer instance using the specified properties.
         * @function create
         * @memberof pointers.InputPointer
         * @static
         * @param {pointers.IInputPointer=} [properties] Properties to set
         * @returns {pointers.InputPointer} InputPointer instance
         */
        InputPointer.create = function create(properties) {
            return new InputPointer(properties);
        };

        /**
         * Encodes the specified InputPointer message. Does not implicitly {@link pointers.InputPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.InputPointer
         * @static
         * @param {pointers.IInputPointer} message InputPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.txIndex);
            if (message.inputIndex != null && Object.hasOwnProperty.call(message, "inputIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.inputIndex);
            return writer;
        };

        /**
         * Encodes the specified InputPointer message, length delimited. Does not implicitly {@link pointers.InputPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.InputPointer
         * @static
         * @param {pointers.IInputPointer} message InputPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.InputPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.InputPointer} InputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.InputPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 2: {
                        message.txId = reader.int32();
                        break;
                    }
                case 3: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.inputIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.InputPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.InputPointer} InputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputPointer message.
         * @function verify
         * @memberof pointers.InputPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!$util.isInteger(message.txId))
                    return "txId: integer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                if (!$util.isInteger(message.inputIndex))
                    return "inputIndex: integer expected";
            return null;
        };

        /**
         * Creates an InputPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.InputPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.InputPointer} InputPointer
         */
        InputPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.InputPointer)
                return object;
            let message = new $root.pointers.InputPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                message.txId = object.txId | 0;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.inputIndex != null)
                message.inputIndex = object.inputIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from an InputPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.InputPointer
         * @static
         * @param {pointers.InputPointer} message InputPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.txId = 0;
                object.txIndex = 0;
                object.inputIndex = 0;
            }
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                object.inputIndex = message.inputIndex;
            return object;
        };

        /**
         * Converts this InputPointer to JSON.
         * @function toJSON
         * @memberof pointers.InputPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InputPointer
         * @function getTypeUrl
         * @memberof pointers.InputPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.InputPointer";
        };

        return InputPointer;
    })();

    pointers.OutputPointer = (function() {

        /**
         * Properties of an OutputPointer.
         * @memberof pointers
         * @interface IOutputPointer
         * @property {number|Long|null} [blockHeight] OutputPointer blockHeight
         * @property {number|null} [txId] OutputPointer txId
         * @property {number|null} [txIndex] OutputPointer txIndex
         * @property {number|null} [outputIndex] OutputPointer outputIndex
         */

        /**
         * Constructs a new OutputPointer.
         * @memberof pointers
         * @classdesc Represents an OutputPointer.
         * @implements IOutputPointer
         * @constructor
         * @param {pointers.IOutputPointer=} [properties] Properties to set
         */
        function OutputPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.OutputPointer
         * @instance
         */
        OutputPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OutputPointer txId.
         * @member {number} txId
         * @memberof pointers.OutputPointer
         * @instance
         */
        OutputPointer.prototype.txId = 0;

        /**
         * OutputPointer txIndex.
         * @member {number} txIndex
         * @memberof pointers.OutputPointer
         * @instance
         */
        OutputPointer.prototype.txIndex = 0;

        /**
         * OutputPointer outputIndex.
         * @member {number} outputIndex
         * @memberof pointers.OutputPointer
         * @instance
         */
        OutputPointer.prototype.outputIndex = 0;

        /**
         * Creates a new OutputPointer instance using the specified properties.
         * @function create
         * @memberof pointers.OutputPointer
         * @static
         * @param {pointers.IOutputPointer=} [properties] Properties to set
         * @returns {pointers.OutputPointer} OutputPointer instance
         */
        OutputPointer.create = function create(properties) {
            return new OutputPointer(properties);
        };

        /**
         * Encodes the specified OutputPointer message. Does not implicitly {@link pointers.OutputPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.OutputPointer
         * @static
         * @param {pointers.IOutputPointer} message OutputPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.txIndex);
            if (message.outputIndex != null && Object.hasOwnProperty.call(message, "outputIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.outputIndex);
            return writer;
        };

        /**
         * Encodes the specified OutputPointer message, length delimited. Does not implicitly {@link pointers.OutputPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.OutputPointer
         * @static
         * @param {pointers.IOutputPointer} message OutputPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.OutputPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.OutputPointer} OutputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.OutputPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 2: {
                        message.txId = reader.int32();
                        break;
                    }
                case 3: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.outputIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.OutputPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.OutputPointer} OutputPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputPointer message.
         * @function verify
         * @memberof pointers.OutputPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!$util.isInteger(message.txId))
                    return "txId: integer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                if (!$util.isInteger(message.outputIndex))
                    return "outputIndex: integer expected";
            return null;
        };

        /**
         * Creates an OutputPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.OutputPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.OutputPointer} OutputPointer
         */
        OutputPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.OutputPointer)
                return object;
            let message = new $root.pointers.OutputPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                message.txId = object.txId | 0;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.outputIndex != null)
                message.outputIndex = object.outputIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from an OutputPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.OutputPointer
         * @static
         * @param {pointers.OutputPointer} message OutputPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.txId = 0;
                object.txIndex = 0;
                object.outputIndex = 0;
            }
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                object.outputIndex = message.outputIndex;
            return object;
        };

        /**
         * Converts this OutputPointer to JSON.
         * @function toJSON
         * @memberof pointers.OutputPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputPointer
         * @function getTypeUrl
         * @memberof pointers.OutputPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.OutputPointer";
        };

        return OutputPointer;
    })();

    pointers.ReceiptPointer = (function() {

        /**
         * Properties of a ReceiptPointer.
         * @memberof pointers
         * @interface IReceiptPointer
         * @property {number|Long|null} [blockHeight] ReceiptPointer blockHeight
         * @property {number|null} [txId] ReceiptPointer txId
         * @property {number|null} [txIndex] ReceiptPointer txIndex
         * @property {number|null} [receiptIndex] ReceiptPointer receiptIndex
         */

        /**
         * Constructs a new ReceiptPointer.
         * @memberof pointers
         * @classdesc Represents a ReceiptPointer.
         * @implements IReceiptPointer
         * @constructor
         * @param {pointers.IReceiptPointer=} [properties] Properties to set
         */
        function ReceiptPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.ReceiptPointer
         * @instance
         */
        ReceiptPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptPointer txId.
         * @member {number} txId
         * @memberof pointers.ReceiptPointer
         * @instance
         */
        ReceiptPointer.prototype.txId = 0;

        /**
         * ReceiptPointer txIndex.
         * @member {number} txIndex
         * @memberof pointers.ReceiptPointer
         * @instance
         */
        ReceiptPointer.prototype.txIndex = 0;

        /**
         * ReceiptPointer receiptIndex.
         * @member {number} receiptIndex
         * @memberof pointers.ReceiptPointer
         * @instance
         */
        ReceiptPointer.prototype.receiptIndex = 0;

        /**
         * Creates a new ReceiptPointer instance using the specified properties.
         * @function create
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {pointers.IReceiptPointer=} [properties] Properties to set
         * @returns {pointers.ReceiptPointer} ReceiptPointer instance
         */
        ReceiptPointer.create = function create(properties) {
            return new ReceiptPointer(properties);
        };

        /**
         * Encodes the specified ReceiptPointer message. Does not implicitly {@link pointers.ReceiptPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {pointers.IReceiptPointer} message ReceiptPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.txIndex);
            if (message.receiptIndex != null && Object.hasOwnProperty.call(message, "receiptIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.receiptIndex);
            return writer;
        };

        /**
         * Encodes the specified ReceiptPointer message, length delimited. Does not implicitly {@link pointers.ReceiptPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {pointers.IReceiptPointer} message ReceiptPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.ReceiptPointer} ReceiptPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.ReceiptPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 2: {
                        message.txId = reader.int32();
                        break;
                    }
                case 3: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.receiptIndex = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.ReceiptPointer} ReceiptPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptPointer message.
         * @function verify
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!$util.isInteger(message.txId))
                    return "txId: integer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.receiptIndex != null && message.hasOwnProperty("receiptIndex"))
                if (!$util.isInteger(message.receiptIndex))
                    return "receiptIndex: integer expected";
            return null;
        };

        /**
         * Creates a ReceiptPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.ReceiptPointer} ReceiptPointer
         */
        ReceiptPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.ReceiptPointer)
                return object;
            let message = new $root.pointers.ReceiptPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                message.txId = object.txId | 0;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.receiptIndex != null)
                message.receiptIndex = object.receiptIndex | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReceiptPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {pointers.ReceiptPointer} message ReceiptPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.txId = 0;
                object.txIndex = 0;
                object.receiptIndex = 0;
            }
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.receiptIndex != null && message.hasOwnProperty("receiptIndex"))
                object.receiptIndex = message.receiptIndex;
            return object;
        };

        /**
         * Converts this ReceiptPointer to JSON.
         * @function toJSON
         * @memberof pointers.ReceiptPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptPointer
         * @function getTypeUrl
         * @memberof pointers.ReceiptPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.ReceiptPointer";
        };

        return ReceiptPointer;
    })();

    pointers.UtxoPointer = (function() {

        /**
         * Properties of an UtxoPointer.
         * @memberof pointers
         * @interface IUtxoPointer
         * @property {number|Long|null} [blockHeight] UtxoPointer blockHeight
         * @property {number|null} [txId] UtxoPointer txId
         * @property {number|null} [txIndex] UtxoPointer txIndex
         * @property {number|null} [utxoId] UtxoPointer utxoId
         */

        /**
         * Constructs a new UtxoPointer.
         * @memberof pointers
         * @classdesc Represents an UtxoPointer.
         * @implements IUtxoPointer
         * @constructor
         * @param {pointers.IUtxoPointer=} [properties] Properties to set
         */
        function UtxoPointer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UtxoPointer blockHeight.
         * @member {number|Long} blockHeight
         * @memberof pointers.UtxoPointer
         * @instance
         */
        UtxoPointer.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UtxoPointer txId.
         * @member {number} txId
         * @memberof pointers.UtxoPointer
         * @instance
         */
        UtxoPointer.prototype.txId = 0;

        /**
         * UtxoPointer txIndex.
         * @member {number} txIndex
         * @memberof pointers.UtxoPointer
         * @instance
         */
        UtxoPointer.prototype.txIndex = 0;

        /**
         * UtxoPointer utxoId.
         * @member {number} utxoId
         * @memberof pointers.UtxoPointer
         * @instance
         */
        UtxoPointer.prototype.utxoId = 0;

        /**
         * Creates a new UtxoPointer instance using the specified properties.
         * @function create
         * @memberof pointers.UtxoPointer
         * @static
         * @param {pointers.IUtxoPointer=} [properties] Properties to set
         * @returns {pointers.UtxoPointer} UtxoPointer instance
         */
        UtxoPointer.create = function create(properties) {
            return new UtxoPointer(properties);
        };

        /**
         * Encodes the specified UtxoPointer message. Does not implicitly {@link pointers.UtxoPointer.verify|verify} messages.
         * @function encode
         * @memberof pointers.UtxoPointer
         * @static
         * @param {pointers.IUtxoPointer} message UtxoPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UtxoPointer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.txIndex);
            if (message.utxoId != null && Object.hasOwnProperty.call(message, "utxoId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.utxoId);
            return writer;
        };

        /**
         * Encodes the specified UtxoPointer message, length delimited. Does not implicitly {@link pointers.UtxoPointer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pointers.UtxoPointer
         * @static
         * @param {pointers.IUtxoPointer} message UtxoPointer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UtxoPointer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UtxoPointer message from the specified reader or buffer.
         * @function decode
         * @memberof pointers.UtxoPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pointers.UtxoPointer} UtxoPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UtxoPointer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.pointers.UtxoPointer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 2: {
                        message.txId = reader.int32();
                        break;
                    }
                case 3: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.utxoId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UtxoPointer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pointers.UtxoPointer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pointers.UtxoPointer} UtxoPointer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UtxoPointer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UtxoPointer message.
         * @function verify
         * @memberof pointers.UtxoPointer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UtxoPointer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!$util.isInteger(message.txId))
                    return "txId: integer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                if (!$util.isInteger(message.utxoId))
                    return "utxoId: integer expected";
            return null;
        };

        /**
         * Creates an UtxoPointer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pointers.UtxoPointer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pointers.UtxoPointer} UtxoPointer
         */
        UtxoPointer.fromObject = function fromObject(object) {
            if (object instanceof $root.pointers.UtxoPointer)
                return object;
            let message = new $root.pointers.UtxoPointer();
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                message.txId = object.txId | 0;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.utxoId != null)
                message.utxoId = object.utxoId | 0;
            return message;
        };

        /**
         * Creates a plain object from an UtxoPointer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pointers.UtxoPointer
         * @static
         * @param {pointers.UtxoPointer} message UtxoPointer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UtxoPointer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                object.txId = 0;
                object.txIndex = 0;
                object.utxoId = 0;
            }
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                object.utxoId = message.utxoId;
            return object;
        };

        /**
         * Converts this UtxoPointer to JSON.
         * @function toJSON
         * @memberof pointers.UtxoPointer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UtxoPointer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UtxoPointer
         * @function getTypeUrl
         * @memberof pointers.UtxoPointer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UtxoPointer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pointers.UtxoPointer";
        };

        return UtxoPointer;
    })();

    return pointers;
})();

export const inputs = $root.inputs = (() => {

    /**
     * Namespace inputs.
     * @exports inputs
     * @namespace
     */
    const inputs = {};

    /**
     * InputType enum.
     * @name inputs.InputType
     * @enum {number}
     * @property {number} CONTRACT=0 CONTRACT value
     * @property {number} COIN=1 COIN value
     * @property {number} MESSAGE=2 MESSAGE value
     */
    inputs.InputType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONTRACT"] = 0;
        values[valuesById[1] = "COIN"] = 1;
        values[valuesById[2] = "MESSAGE"] = 2;
        return values;
    })();

    inputs.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof inputs
         * @interface IInput
         * @property {string|null} [subject] Input subject
         * @property {number|Long|null} [blockHeight] Input blockHeight
         * @property {Uint8Array|null} [txId] Input txId
         * @property {number|null} [txIndex] Input txIndex
         * @property {number|null} [inputIndex] Input inputIndex
         * @property {inputs.InputType|null} [inputType] Input inputType
         * @property {inputs.IInputCoin|null} [coin] Input coin
         * @property {inputs.IInputContract|null} [contract] Input contract
         * @property {inputs.IInputMessage|null} [message] Input message
         * @property {google.protobuf.ITimestamp|null} [createdAt] Input createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Input publishedAt
         * @property {pointers.IInputPointer|null} [pointer] Input pointer
         */

        /**
         * Constructs a new Input.
         * @memberof inputs
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {inputs.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input subject.
         * @member {string} subject
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.subject = "";

        /**
         * Input blockHeight.
         * @member {number|Long} blockHeight
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Input txId.
         * @member {Uint8Array} txId
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.txId = $util.newBuffer([]);

        /**
         * Input txIndex.
         * @member {number} txIndex
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.txIndex = 0;

        /**
         * Input inputIndex.
         * @member {number} inputIndex
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.inputIndex = 0;

        /**
         * Input inputType.
         * @member {inputs.InputType} inputType
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.inputType = 0;

        /**
         * Input coin.
         * @member {inputs.IInputCoin|null|undefined} coin
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.coin = null;

        /**
         * Input contract.
         * @member {inputs.IInputContract|null|undefined} contract
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.contract = null;

        /**
         * Input message.
         * @member {inputs.IInputMessage|null|undefined} message
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.message = null;

        /**
         * Input createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.createdAt = null;

        /**
         * Input publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.publishedAt = null;

        /**
         * Input pointer.
         * @member {pointers.IInputPointer|null|undefined} pointer
         * @memberof inputs.Input
         * @instance
         */
        Input.prototype.pointer = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Input input.
         * @member {"coin"|"contract"|"message"|undefined} input
         * @memberof inputs.Input
         * @instance
         */
        Object.defineProperty(Input.prototype, "input", {
            get: $util.oneOfGetter($oneOfFields = ["coin", "contract", "message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof inputs.Input
         * @static
         * @param {inputs.IInput=} [properties] Properties to set
         * @returns {inputs.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link inputs.Input.verify|verify} messages.
         * @function encode
         * @memberof inputs.Input
         * @static
         * @param {inputs.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.txIndex);
            if (message.inputIndex != null && Object.hasOwnProperty.call(message, "inputIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.inputIndex);
            if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.inputType);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                $root.inputs.InputCoin.encode(message.coin, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                $root.inputs.InputContract.encode(message.contract, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.inputs.InputMessage.encode(message.message, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.InputPointer.encode(message.pointer, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link inputs.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inputs.Input
         * @static
         * @param {inputs.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof inputs.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inputs.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.inputs.Input();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.inputIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.inputType = reader.int32();
                        break;
                    }
                case 7: {
                        message.coin = $root.inputs.InputCoin.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.contract = $root.inputs.InputContract.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.message = $root.inputs.InputMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.pointer = $root.pointers.InputPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inputs.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inputs.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof inputs.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                if (!$util.isInteger(message.inputIndex))
                    return "inputIndex: integer expected";
            if (message.inputType != null && message.hasOwnProperty("inputType"))
                switch (message.inputType) {
                default:
                    return "inputType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.coin != null && message.hasOwnProperty("coin")) {
                properties.input = 1;
                {
                    let error = $root.inputs.InputCoin.verify(message.coin);
                    if (error)
                        return "coin." + error;
                }
            }
            if (message.contract != null && message.hasOwnProperty("contract")) {
                if (properties.input === 1)
                    return "input: multiple values";
                properties.input = 1;
                {
                    let error = $root.inputs.InputContract.verify(message.contract);
                    if (error)
                        return "contract." + error;
                }
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                if (properties.input === 1)
                    return "input: multiple values";
                properties.input = 1;
                {
                    let error = $root.inputs.InputMessage.verify(message.message);
                    if (error)
                        return "message." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.InputPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inputs.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inputs.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.inputs.Input)
                return object;
            let message = new $root.inputs.Input();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.inputIndex != null)
                message.inputIndex = object.inputIndex | 0;
            switch (object.inputType) {
            default:
                if (typeof object.inputType === "number") {
                    message.inputType = object.inputType;
                    break;
                }
                break;
            case "CONTRACT":
            case 0:
                message.inputType = 0;
                break;
            case "COIN":
            case 1:
                message.inputType = 1;
                break;
            case "MESSAGE":
            case 2:
                message.inputType = 2;
                break;
            }
            if (object.coin != null) {
                if (typeof object.coin !== "object")
                    throw TypeError(".inputs.Input.coin: object expected");
                message.coin = $root.inputs.InputCoin.fromObject(object.coin);
            }
            if (object.contract != null) {
                if (typeof object.contract !== "object")
                    throw TypeError(".inputs.Input.contract: object expected");
                message.contract = $root.inputs.InputContract.fromObject(object.contract);
            }
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".inputs.Input.message: object expected");
                message.message = $root.inputs.InputMessage.fromObject(object.message);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".inputs.Input.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".inputs.Input.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".inputs.Input.pointer: object expected");
                message.pointer = $root.pointers.InputPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inputs.Input
         * @static
         * @param {inputs.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.txIndex = 0;
                object.inputIndex = 0;
                object.inputType = options.enums === String ? "CONTRACT" : 0;
                object.createdAt = null;
                object.publishedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                object.inputIndex = message.inputIndex;
            if (message.inputType != null && message.hasOwnProperty("inputType"))
                object.inputType = options.enums === String ? $root.inputs.InputType[message.inputType] === undefined ? message.inputType : $root.inputs.InputType[message.inputType] : message.inputType;
            if (message.coin != null && message.hasOwnProperty("coin")) {
                object.coin = $root.inputs.InputCoin.toObject(message.coin, options);
                if (options.oneofs)
                    object.input = "coin";
            }
            if (message.contract != null && message.hasOwnProperty("contract")) {
                object.contract = $root.inputs.InputContract.toObject(message.contract, options);
                if (options.oneofs)
                    object.input = "contract";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                object.message = $root.inputs.InputMessage.toObject(message.message, options);
                if (options.oneofs)
                    object.input = "message";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.InputPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof inputs.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof inputs.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/inputs.Input";
        };

        return Input;
    })();

    inputs.InputCoin = (function() {

        /**
         * Properties of an InputCoin.
         * @memberof inputs
         * @interface IInputCoin
         * @property {string|null} [subject] InputCoin subject
         * @property {Uint8Array|null} [txId] InputCoin txId
         * @property {number|Long|null} [amount] InputCoin amount
         * @property {Uint8Array|null} [assetId] InputCoin assetId
         * @property {Uint8Array|null} [ownerAddress] InputCoin ownerAddress
         * @property {number|null} [outputIndex] InputCoin outputIndex
         * @property {Uint8Array|null} [predicate] InputCoin predicate
         * @property {Uint8Array|null} [predicateData] InputCoin predicateData
         * @property {number|Long|null} [predicateGasUsed] InputCoin predicateGasUsed
         * @property {number|Long|null} [predicateLength] InputCoin predicateLength
         * @property {number|Long|null} [predicateDataLength] InputCoin predicateDataLength
         * @property {number|Long|null} [txPointerBlockHeight] InputCoin txPointerBlockHeight
         * @property {number|null} [txPointerTxIndex] InputCoin txPointerTxIndex
         * @property {Uint8Array|null} [utxoId] InputCoin utxoId
         * @property {number|null} [witnessIndex] InputCoin witnessIndex
         * @property {google.protobuf.ITimestamp|null} [createdAt] InputCoin createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] InputCoin publishedAt
         */

        /**
         * Constructs a new InputCoin.
         * @memberof inputs
         * @classdesc Represents an InputCoin.
         * @implements IInputCoin
         * @constructor
         * @param {inputs.IInputCoin=} [properties] Properties to set
         */
        function InputCoin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputCoin subject.
         * @member {string} subject
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.subject = "";

        /**
         * InputCoin txId.
         * @member {Uint8Array} txId
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.txId = $util.newBuffer([]);

        /**
         * InputCoin amount.
         * @member {number|Long} amount
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputCoin assetId.
         * @member {Uint8Array} assetId
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.assetId = $util.newBuffer([]);

        /**
         * InputCoin ownerAddress.
         * @member {Uint8Array} ownerAddress
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.ownerAddress = $util.newBuffer([]);

        /**
         * InputCoin outputIndex.
         * @member {number} outputIndex
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.outputIndex = 0;

        /**
         * InputCoin predicate.
         * @member {Uint8Array} predicate
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.predicate = $util.newBuffer([]);

        /**
         * InputCoin predicateData.
         * @member {Uint8Array} predicateData
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.predicateData = $util.newBuffer([]);

        /**
         * InputCoin predicateGasUsed.
         * @member {number|Long} predicateGasUsed
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.predicateGasUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputCoin predicateLength.
         * @member {number|Long} predicateLength
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.predicateLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputCoin predicateDataLength.
         * @member {number|Long} predicateDataLength
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.predicateDataLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputCoin txPointerBlockHeight.
         * @member {number|Long} txPointerBlockHeight
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.txPointerBlockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputCoin txPointerTxIndex.
         * @member {number} txPointerTxIndex
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.txPointerTxIndex = 0;

        /**
         * InputCoin utxoId.
         * @member {Uint8Array} utxoId
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.utxoId = $util.newBuffer([]);

        /**
         * InputCoin witnessIndex.
         * @member {number} witnessIndex
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.witnessIndex = 0;

        /**
         * InputCoin createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.createdAt = null;

        /**
         * InputCoin publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof inputs.InputCoin
         * @instance
         */
        InputCoin.prototype.publishedAt = null;

        /**
         * Creates a new InputCoin instance using the specified properties.
         * @function create
         * @memberof inputs.InputCoin
         * @static
         * @param {inputs.IInputCoin=} [properties] Properties to set
         * @returns {inputs.InputCoin} InputCoin instance
         */
        InputCoin.create = function create(properties) {
            return new InputCoin(properties);
        };

        /**
         * Encodes the specified InputCoin message. Does not implicitly {@link inputs.InputCoin.verify|verify} messages.
         * @function encode
         * @memberof inputs.InputCoin
         * @static
         * @param {inputs.IInputCoin} message InputCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.ownerAddress != null && Object.hasOwnProperty.call(message, "ownerAddress"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.ownerAddress);
            if (message.outputIndex != null && Object.hasOwnProperty.call(message, "outputIndex"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.outputIndex);
            if (message.predicate != null && Object.hasOwnProperty.call(message, "predicate"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.predicate);
            if (message.predicateData != null && Object.hasOwnProperty.call(message, "predicateData"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.predicateData);
            if (message.predicateGasUsed != null && Object.hasOwnProperty.call(message, "predicateGasUsed"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.predicateGasUsed);
            if (message.predicateLength != null && Object.hasOwnProperty.call(message, "predicateLength"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.predicateLength);
            if (message.predicateDataLength != null && Object.hasOwnProperty.call(message, "predicateDataLength"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.predicateDataLength);
            if (message.txPointerBlockHeight != null && Object.hasOwnProperty.call(message, "txPointerBlockHeight"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.txPointerBlockHeight);
            if (message.txPointerTxIndex != null && Object.hasOwnProperty.call(message, "txPointerTxIndex"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.txPointerTxIndex);
            if (message.utxoId != null && Object.hasOwnProperty.call(message, "utxoId"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.utxoId);
            if (message.witnessIndex != null && Object.hasOwnProperty.call(message, "witnessIndex"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.witnessIndex);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InputCoin message, length delimited. Does not implicitly {@link inputs.InputCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inputs.InputCoin
         * @static
         * @param {inputs.IInputCoin} message InputCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputCoin message from the specified reader or buffer.
         * @function decode
         * @memberof inputs.InputCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inputs.InputCoin} InputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.inputs.InputCoin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.int64();
                        break;
                    }
                case 4: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.ownerAddress = reader.bytes();
                        break;
                    }
                case 6: {
                        message.outputIndex = reader.int32();
                        break;
                    }
                case 7: {
                        message.predicate = reader.bytes();
                        break;
                    }
                case 8: {
                        message.predicateData = reader.bytes();
                        break;
                    }
                case 9: {
                        message.predicateGasUsed = reader.int64();
                        break;
                    }
                case 10: {
                        message.predicateLength = reader.int64();
                        break;
                    }
                case 11: {
                        message.predicateDataLength = reader.int64();
                        break;
                    }
                case 12: {
                        message.txPointerBlockHeight = reader.int64();
                        break;
                    }
                case 13: {
                        message.txPointerTxIndex = reader.int32();
                        break;
                    }
                case 14: {
                        message.utxoId = reader.bytes();
                        break;
                    }
                case 15: {
                        message.witnessIndex = reader.int32();
                        break;
                    }
                case 16: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inputs.InputCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inputs.InputCoin} InputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputCoin message.
         * @function verify
         * @memberof inputs.InputCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                if (!(message.ownerAddress && typeof message.ownerAddress.length === "number" || $util.isString(message.ownerAddress)))
                    return "ownerAddress: buffer expected";
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                if (!$util.isInteger(message.outputIndex))
                    return "outputIndex: integer expected";
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                if (!(message.predicate && typeof message.predicate.length === "number" || $util.isString(message.predicate)))
                    return "predicate: buffer expected";
            if (message.predicateData != null && message.hasOwnProperty("predicateData"))
                if (!(message.predicateData && typeof message.predicateData.length === "number" || $util.isString(message.predicateData)))
                    return "predicateData: buffer expected";
            if (message.predicateGasUsed != null && message.hasOwnProperty("predicateGasUsed"))
                if (!$util.isInteger(message.predicateGasUsed) && !(message.predicateGasUsed && $util.isInteger(message.predicateGasUsed.low) && $util.isInteger(message.predicateGasUsed.high)))
                    return "predicateGasUsed: integer|Long expected";
            if (message.predicateLength != null && message.hasOwnProperty("predicateLength"))
                if (!$util.isInteger(message.predicateLength) && !(message.predicateLength && $util.isInteger(message.predicateLength.low) && $util.isInteger(message.predicateLength.high)))
                    return "predicateLength: integer|Long expected";
            if (message.predicateDataLength != null && message.hasOwnProperty("predicateDataLength"))
                if (!$util.isInteger(message.predicateDataLength) && !(message.predicateDataLength && $util.isInteger(message.predicateDataLength.low) && $util.isInteger(message.predicateDataLength.high)))
                    return "predicateDataLength: integer|Long expected";
            if (message.txPointerBlockHeight != null && message.hasOwnProperty("txPointerBlockHeight"))
                if (!$util.isInteger(message.txPointerBlockHeight) && !(message.txPointerBlockHeight && $util.isInteger(message.txPointerBlockHeight.low) && $util.isInteger(message.txPointerBlockHeight.high)))
                    return "txPointerBlockHeight: integer|Long expected";
            if (message.txPointerTxIndex != null && message.hasOwnProperty("txPointerTxIndex"))
                if (!$util.isInteger(message.txPointerTxIndex))
                    return "txPointerTxIndex: integer expected";
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                if (!(message.utxoId && typeof message.utxoId.length === "number" || $util.isString(message.utxoId)))
                    return "utxoId: buffer expected";
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                if (!$util.isInteger(message.witnessIndex))
                    return "witnessIndex: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an InputCoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inputs.InputCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inputs.InputCoin} InputCoin
         */
        InputCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.inputs.InputCoin)
                return object;
            let message = new $root.inputs.InputCoin();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.ownerAddress != null)
                if (typeof object.ownerAddress === "string")
                    $util.base64.decode(object.ownerAddress, message.ownerAddress = $util.newBuffer($util.base64.length(object.ownerAddress)), 0);
                else if (object.ownerAddress.length >= 0)
                    message.ownerAddress = object.ownerAddress;
            if (object.outputIndex != null)
                message.outputIndex = object.outputIndex | 0;
            if (object.predicate != null)
                if (typeof object.predicate === "string")
                    $util.base64.decode(object.predicate, message.predicate = $util.newBuffer($util.base64.length(object.predicate)), 0);
                else if (object.predicate.length >= 0)
                    message.predicate = object.predicate;
            if (object.predicateData != null)
                if (typeof object.predicateData === "string")
                    $util.base64.decode(object.predicateData, message.predicateData = $util.newBuffer($util.base64.length(object.predicateData)), 0);
                else if (object.predicateData.length >= 0)
                    message.predicateData = object.predicateData;
            if (object.predicateGasUsed != null)
                if ($util.Long)
                    (message.predicateGasUsed = $util.Long.fromValue(object.predicateGasUsed)).unsigned = false;
                else if (typeof object.predicateGasUsed === "string")
                    message.predicateGasUsed = parseInt(object.predicateGasUsed, 10);
                else if (typeof object.predicateGasUsed === "number")
                    message.predicateGasUsed = object.predicateGasUsed;
                else if (typeof object.predicateGasUsed === "object")
                    message.predicateGasUsed = new $util.LongBits(object.predicateGasUsed.low >>> 0, object.predicateGasUsed.high >>> 0).toNumber();
            if (object.predicateLength != null)
                if ($util.Long)
                    (message.predicateLength = $util.Long.fromValue(object.predicateLength)).unsigned = false;
                else if (typeof object.predicateLength === "string")
                    message.predicateLength = parseInt(object.predicateLength, 10);
                else if (typeof object.predicateLength === "number")
                    message.predicateLength = object.predicateLength;
                else if (typeof object.predicateLength === "object")
                    message.predicateLength = new $util.LongBits(object.predicateLength.low >>> 0, object.predicateLength.high >>> 0).toNumber();
            if (object.predicateDataLength != null)
                if ($util.Long)
                    (message.predicateDataLength = $util.Long.fromValue(object.predicateDataLength)).unsigned = false;
                else if (typeof object.predicateDataLength === "string")
                    message.predicateDataLength = parseInt(object.predicateDataLength, 10);
                else if (typeof object.predicateDataLength === "number")
                    message.predicateDataLength = object.predicateDataLength;
                else if (typeof object.predicateDataLength === "object")
                    message.predicateDataLength = new $util.LongBits(object.predicateDataLength.low >>> 0, object.predicateDataLength.high >>> 0).toNumber();
            if (object.txPointerBlockHeight != null)
                if ($util.Long)
                    (message.txPointerBlockHeight = $util.Long.fromValue(object.txPointerBlockHeight)).unsigned = false;
                else if (typeof object.txPointerBlockHeight === "string")
                    message.txPointerBlockHeight = parseInt(object.txPointerBlockHeight, 10);
                else if (typeof object.txPointerBlockHeight === "number")
                    message.txPointerBlockHeight = object.txPointerBlockHeight;
                else if (typeof object.txPointerBlockHeight === "object")
                    message.txPointerBlockHeight = new $util.LongBits(object.txPointerBlockHeight.low >>> 0, object.txPointerBlockHeight.high >>> 0).toNumber();
            if (object.txPointerTxIndex != null)
                message.txPointerTxIndex = object.txPointerTxIndex | 0;
            if (object.utxoId != null)
                if (typeof object.utxoId === "string")
                    $util.base64.decode(object.utxoId, message.utxoId = $util.newBuffer($util.base64.length(object.utxoId)), 0);
                else if (object.utxoId.length >= 0)
                    message.utxoId = object.utxoId;
            if (object.witnessIndex != null)
                message.witnessIndex = object.witnessIndex | 0;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".inputs.InputCoin.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".inputs.InputCoin.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an InputCoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inputs.InputCoin
         * @static
         * @param {inputs.InputCoin} message InputCoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputCoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if (options.bytes === String)
                    object.ownerAddress = "";
                else {
                    object.ownerAddress = [];
                    if (options.bytes !== Array)
                        object.ownerAddress = $util.newBuffer(object.ownerAddress);
                }
                object.outputIndex = 0;
                if (options.bytes === String)
                    object.predicate = "";
                else {
                    object.predicate = [];
                    if (options.bytes !== Array)
                        object.predicate = $util.newBuffer(object.predicate);
                }
                if (options.bytes === String)
                    object.predicateData = "";
                else {
                    object.predicateData = [];
                    if (options.bytes !== Array)
                        object.predicateData = $util.newBuffer(object.predicateData);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.predicateGasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.predicateGasUsed = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.predicateLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.predicateLength = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.predicateDataLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.predicateDataLength = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.txPointerBlockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.txPointerBlockHeight = options.longs === String ? "0" : 0;
                object.txPointerTxIndex = 0;
                if (options.bytes === String)
                    object.utxoId = "";
                else {
                    object.utxoId = [];
                    if (options.bytes !== Array)
                        object.utxoId = $util.newBuffer(object.utxoId);
                }
                object.witnessIndex = 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.ownerAddress != null && message.hasOwnProperty("ownerAddress"))
                object.ownerAddress = options.bytes === String ? $util.base64.encode(message.ownerAddress, 0, message.ownerAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ownerAddress) : message.ownerAddress;
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                object.outputIndex = message.outputIndex;
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                object.predicate = options.bytes === String ? $util.base64.encode(message.predicate, 0, message.predicate.length) : options.bytes === Array ? Array.prototype.slice.call(message.predicate) : message.predicate;
            if (message.predicateData != null && message.hasOwnProperty("predicateData"))
                object.predicateData = options.bytes === String ? $util.base64.encode(message.predicateData, 0, message.predicateData.length) : options.bytes === Array ? Array.prototype.slice.call(message.predicateData) : message.predicateData;
            if (message.predicateGasUsed != null && message.hasOwnProperty("predicateGasUsed"))
                if (typeof message.predicateGasUsed === "number")
                    object.predicateGasUsed = options.longs === String ? String(message.predicateGasUsed) : message.predicateGasUsed;
                else
                    object.predicateGasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.predicateGasUsed) : options.longs === Number ? new $util.LongBits(message.predicateGasUsed.low >>> 0, message.predicateGasUsed.high >>> 0).toNumber() : message.predicateGasUsed;
            if (message.predicateLength != null && message.hasOwnProperty("predicateLength"))
                if (typeof message.predicateLength === "number")
                    object.predicateLength = options.longs === String ? String(message.predicateLength) : message.predicateLength;
                else
                    object.predicateLength = options.longs === String ? $util.Long.prototype.toString.call(message.predicateLength) : options.longs === Number ? new $util.LongBits(message.predicateLength.low >>> 0, message.predicateLength.high >>> 0).toNumber() : message.predicateLength;
            if (message.predicateDataLength != null && message.hasOwnProperty("predicateDataLength"))
                if (typeof message.predicateDataLength === "number")
                    object.predicateDataLength = options.longs === String ? String(message.predicateDataLength) : message.predicateDataLength;
                else
                    object.predicateDataLength = options.longs === String ? $util.Long.prototype.toString.call(message.predicateDataLength) : options.longs === Number ? new $util.LongBits(message.predicateDataLength.low >>> 0, message.predicateDataLength.high >>> 0).toNumber() : message.predicateDataLength;
            if (message.txPointerBlockHeight != null && message.hasOwnProperty("txPointerBlockHeight"))
                if (typeof message.txPointerBlockHeight === "number")
                    object.txPointerBlockHeight = options.longs === String ? String(message.txPointerBlockHeight) : message.txPointerBlockHeight;
                else
                    object.txPointerBlockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.txPointerBlockHeight) : options.longs === Number ? new $util.LongBits(message.txPointerBlockHeight.low >>> 0, message.txPointerBlockHeight.high >>> 0).toNumber() : message.txPointerBlockHeight;
            if (message.txPointerTxIndex != null && message.hasOwnProperty("txPointerTxIndex"))
                object.txPointerTxIndex = message.txPointerTxIndex;
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                object.utxoId = options.bytes === String ? $util.base64.encode(message.utxoId, 0, message.utxoId.length) : options.bytes === Array ? Array.prototype.slice.call(message.utxoId) : message.utxoId;
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                object.witnessIndex = message.witnessIndex;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this InputCoin to JSON.
         * @function toJSON
         * @memberof inputs.InputCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InputCoin
         * @function getTypeUrl
         * @memberof inputs.InputCoin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputCoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/inputs.InputCoin";
        };

        return InputCoin;
    })();

    inputs.InputContract = (function() {

        /**
         * Properties of an InputContract.
         * @memberof inputs
         * @interface IInputContract
         * @property {string|null} [subject] InputContract subject
         * @property {Uint8Array|null} [txId] InputContract txId
         * @property {Uint8Array|null} [balanceRoot] InputContract balanceRoot
         * @property {Uint8Array|null} [contractId] InputContract contractId
         * @property {number|null} [outputIndex] InputContract outputIndex
         * @property {Uint8Array|null} [stateRoot] InputContract stateRoot
         * @property {number|Long|null} [txPointerBlockHeight] InputContract txPointerBlockHeight
         * @property {number|null} [txPointerTxIndex] InputContract txPointerTxIndex
         * @property {Uint8Array|null} [utxoId] InputContract utxoId
         * @property {google.protobuf.ITimestamp|null} [createdAt] InputContract createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] InputContract publishedAt
         */

        /**
         * Constructs a new InputContract.
         * @memberof inputs
         * @classdesc Represents an InputContract.
         * @implements IInputContract
         * @constructor
         * @param {inputs.IInputContract=} [properties] Properties to set
         */
        function InputContract(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputContract subject.
         * @member {string} subject
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.subject = "";

        /**
         * InputContract txId.
         * @member {Uint8Array} txId
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.txId = $util.newBuffer([]);

        /**
         * InputContract balanceRoot.
         * @member {Uint8Array} balanceRoot
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.balanceRoot = $util.newBuffer([]);

        /**
         * InputContract contractId.
         * @member {Uint8Array} contractId
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.contractId = $util.newBuffer([]);

        /**
         * InputContract outputIndex.
         * @member {number} outputIndex
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.outputIndex = 0;

        /**
         * InputContract stateRoot.
         * @member {Uint8Array} stateRoot
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.stateRoot = $util.newBuffer([]);

        /**
         * InputContract txPointerBlockHeight.
         * @member {number|Long} txPointerBlockHeight
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.txPointerBlockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputContract txPointerTxIndex.
         * @member {number} txPointerTxIndex
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.txPointerTxIndex = 0;

        /**
         * InputContract utxoId.
         * @member {Uint8Array} utxoId
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.utxoId = $util.newBuffer([]);

        /**
         * InputContract createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.createdAt = null;

        /**
         * InputContract publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof inputs.InputContract
         * @instance
         */
        InputContract.prototype.publishedAt = null;

        /**
         * Creates a new InputContract instance using the specified properties.
         * @function create
         * @memberof inputs.InputContract
         * @static
         * @param {inputs.IInputContract=} [properties] Properties to set
         * @returns {inputs.InputContract} InputContract instance
         */
        InputContract.create = function create(properties) {
            return new InputContract(properties);
        };

        /**
         * Encodes the specified InputContract message. Does not implicitly {@link inputs.InputContract.verify|verify} messages.
         * @function encode
         * @memberof inputs.InputContract
         * @static
         * @param {inputs.IInputContract} message InputContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputContract.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.balanceRoot != null && Object.hasOwnProperty.call(message, "balanceRoot"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.balanceRoot);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.contractId);
            if (message.outputIndex != null && Object.hasOwnProperty.call(message, "outputIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.outputIndex);
            if (message.stateRoot != null && Object.hasOwnProperty.call(message, "stateRoot"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.stateRoot);
            if (message.txPointerBlockHeight != null && Object.hasOwnProperty.call(message, "txPointerBlockHeight"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.txPointerBlockHeight);
            if (message.txPointerTxIndex != null && Object.hasOwnProperty.call(message, "txPointerTxIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.txPointerTxIndex);
            if (message.utxoId != null && Object.hasOwnProperty.call(message, "utxoId"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.utxoId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InputContract message, length delimited. Does not implicitly {@link inputs.InputContract.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inputs.InputContract
         * @static
         * @param {inputs.IInputContract} message InputContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputContract.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputContract message from the specified reader or buffer.
         * @function decode
         * @memberof inputs.InputContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inputs.InputContract} InputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputContract.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.inputs.InputContract();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.balanceRoot = reader.bytes();
                        break;
                    }
                case 4: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.outputIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.stateRoot = reader.bytes();
                        break;
                    }
                case 7: {
                        message.txPointerBlockHeight = reader.int64();
                        break;
                    }
                case 8: {
                        message.txPointerTxIndex = reader.int32();
                        break;
                    }
                case 9: {
                        message.utxoId = reader.bytes();
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputContract message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inputs.InputContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inputs.InputContract} InputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputContract.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputContract message.
         * @function verify
         * @memberof inputs.InputContract
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputContract.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.balanceRoot != null && message.hasOwnProperty("balanceRoot"))
                if (!(message.balanceRoot && typeof message.balanceRoot.length === "number" || $util.isString(message.balanceRoot)))
                    return "balanceRoot: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                if (!$util.isInteger(message.outputIndex))
                    return "outputIndex: integer expected";
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                if (!(message.stateRoot && typeof message.stateRoot.length === "number" || $util.isString(message.stateRoot)))
                    return "stateRoot: buffer expected";
            if (message.txPointerBlockHeight != null && message.hasOwnProperty("txPointerBlockHeight"))
                if (!$util.isInteger(message.txPointerBlockHeight) && !(message.txPointerBlockHeight && $util.isInteger(message.txPointerBlockHeight.low) && $util.isInteger(message.txPointerBlockHeight.high)))
                    return "txPointerBlockHeight: integer|Long expected";
            if (message.txPointerTxIndex != null && message.hasOwnProperty("txPointerTxIndex"))
                if (!$util.isInteger(message.txPointerTxIndex))
                    return "txPointerTxIndex: integer expected";
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                if (!(message.utxoId && typeof message.utxoId.length === "number" || $util.isString(message.utxoId)))
                    return "utxoId: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an InputContract message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inputs.InputContract
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inputs.InputContract} InputContract
         */
        InputContract.fromObject = function fromObject(object) {
            if (object instanceof $root.inputs.InputContract)
                return object;
            let message = new $root.inputs.InputContract();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.balanceRoot != null)
                if (typeof object.balanceRoot === "string")
                    $util.base64.decode(object.balanceRoot, message.balanceRoot = $util.newBuffer($util.base64.length(object.balanceRoot)), 0);
                else if (object.balanceRoot.length >= 0)
                    message.balanceRoot = object.balanceRoot;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.outputIndex != null)
                message.outputIndex = object.outputIndex | 0;
            if (object.stateRoot != null)
                if (typeof object.stateRoot === "string")
                    $util.base64.decode(object.stateRoot, message.stateRoot = $util.newBuffer($util.base64.length(object.stateRoot)), 0);
                else if (object.stateRoot.length >= 0)
                    message.stateRoot = object.stateRoot;
            if (object.txPointerBlockHeight != null)
                if ($util.Long)
                    (message.txPointerBlockHeight = $util.Long.fromValue(object.txPointerBlockHeight)).unsigned = false;
                else if (typeof object.txPointerBlockHeight === "string")
                    message.txPointerBlockHeight = parseInt(object.txPointerBlockHeight, 10);
                else if (typeof object.txPointerBlockHeight === "number")
                    message.txPointerBlockHeight = object.txPointerBlockHeight;
                else if (typeof object.txPointerBlockHeight === "object")
                    message.txPointerBlockHeight = new $util.LongBits(object.txPointerBlockHeight.low >>> 0, object.txPointerBlockHeight.high >>> 0).toNumber();
            if (object.txPointerTxIndex != null)
                message.txPointerTxIndex = object.txPointerTxIndex | 0;
            if (object.utxoId != null)
                if (typeof object.utxoId === "string")
                    $util.base64.decode(object.utxoId, message.utxoId = $util.newBuffer($util.base64.length(object.utxoId)), 0);
                else if (object.utxoId.length >= 0)
                    message.utxoId = object.utxoId;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".inputs.InputContract.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".inputs.InputContract.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an InputContract message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inputs.InputContract
         * @static
         * @param {inputs.InputContract} message InputContract
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputContract.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.balanceRoot = "";
                else {
                    object.balanceRoot = [];
                    if (options.bytes !== Array)
                        object.balanceRoot = $util.newBuffer(object.balanceRoot);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                object.outputIndex = 0;
                if (options.bytes === String)
                    object.stateRoot = "";
                else {
                    object.stateRoot = [];
                    if (options.bytes !== Array)
                        object.stateRoot = $util.newBuffer(object.stateRoot);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.txPointerBlockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.txPointerBlockHeight = options.longs === String ? "0" : 0;
                object.txPointerTxIndex = 0;
                if (options.bytes === String)
                    object.utxoId = "";
                else {
                    object.utxoId = [];
                    if (options.bytes !== Array)
                        object.utxoId = $util.newBuffer(object.utxoId);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.balanceRoot != null && message.hasOwnProperty("balanceRoot"))
                object.balanceRoot = options.bytes === String ? $util.base64.encode(message.balanceRoot, 0, message.balanceRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.balanceRoot) : message.balanceRoot;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                object.outputIndex = message.outputIndex;
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                object.stateRoot = options.bytes === String ? $util.base64.encode(message.stateRoot, 0, message.stateRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateRoot) : message.stateRoot;
            if (message.txPointerBlockHeight != null && message.hasOwnProperty("txPointerBlockHeight"))
                if (typeof message.txPointerBlockHeight === "number")
                    object.txPointerBlockHeight = options.longs === String ? String(message.txPointerBlockHeight) : message.txPointerBlockHeight;
                else
                    object.txPointerBlockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.txPointerBlockHeight) : options.longs === Number ? new $util.LongBits(message.txPointerBlockHeight.low >>> 0, message.txPointerBlockHeight.high >>> 0).toNumber() : message.txPointerBlockHeight;
            if (message.txPointerTxIndex != null && message.hasOwnProperty("txPointerTxIndex"))
                object.txPointerTxIndex = message.txPointerTxIndex;
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                object.utxoId = options.bytes === String ? $util.base64.encode(message.utxoId, 0, message.utxoId.length) : options.bytes === Array ? Array.prototype.slice.call(message.utxoId) : message.utxoId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this InputContract to JSON.
         * @function toJSON
         * @memberof inputs.InputContract
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputContract.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InputContract
         * @function getTypeUrl
         * @memberof inputs.InputContract
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputContract.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/inputs.InputContract";
        };

        return InputContract;
    })();

    inputs.InputMessage = (function() {

        /**
         * Properties of an InputMessage.
         * @memberof inputs
         * @interface IInputMessage
         * @property {string|null} [subject] InputMessage subject
         * @property {Uint8Array|null} [txId] InputMessage txId
         * @property {number|Long|null} [amount] InputMessage amount
         * @property {Uint8Array|null} [data] InputMessage data
         * @property {number|null} [dataLength] InputMessage dataLength
         * @property {Uint8Array|null} [nonce] InputMessage nonce
         * @property {Uint8Array|null} [predicate] InputMessage predicate
         * @property {number|null} [predicateLength] InputMessage predicateLength
         * @property {Uint8Array|null} [predicateData] InputMessage predicateData
         * @property {number|null} [predicateDataLength] InputMessage predicateDataLength
         * @property {number|Long|null} [predicateGasUsed] InputMessage predicateGasUsed
         * @property {Uint8Array|null} [recipientAddress] InputMessage recipientAddress
         * @property {Uint8Array|null} [senderAddress] InputMessage senderAddress
         * @property {number|null} [witnessIndex] InputMessage witnessIndex
         * @property {google.protobuf.ITimestamp|null} [createdAt] InputMessage createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] InputMessage publishedAt
         */

        /**
         * Constructs a new InputMessage.
         * @memberof inputs
         * @classdesc Represents an InputMessage.
         * @implements IInputMessage
         * @constructor
         * @param {inputs.IInputMessage=} [properties] Properties to set
         */
        function InputMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InputMessage subject.
         * @member {string} subject
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.subject = "";

        /**
         * InputMessage txId.
         * @member {Uint8Array} txId
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.txId = $util.newBuffer([]);

        /**
         * InputMessage amount.
         * @member {number|Long} amount
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputMessage data.
         * @member {Uint8Array} data
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.data = $util.newBuffer([]);

        /**
         * InputMessage dataLength.
         * @member {number} dataLength
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.dataLength = 0;

        /**
         * InputMessage nonce.
         * @member {Uint8Array} nonce
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.nonce = $util.newBuffer([]);

        /**
         * InputMessage predicate.
         * @member {Uint8Array} predicate
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.predicate = $util.newBuffer([]);

        /**
         * InputMessage predicateLength.
         * @member {number} predicateLength
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.predicateLength = 0;

        /**
         * InputMessage predicateData.
         * @member {Uint8Array} predicateData
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.predicateData = $util.newBuffer([]);

        /**
         * InputMessage predicateDataLength.
         * @member {number} predicateDataLength
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.predicateDataLength = 0;

        /**
         * InputMessage predicateGasUsed.
         * @member {number|Long} predicateGasUsed
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.predicateGasUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * InputMessage recipientAddress.
         * @member {Uint8Array} recipientAddress
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.recipientAddress = $util.newBuffer([]);

        /**
         * InputMessage senderAddress.
         * @member {Uint8Array} senderAddress
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.senderAddress = $util.newBuffer([]);

        /**
         * InputMessage witnessIndex.
         * @member {number} witnessIndex
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.witnessIndex = 0;

        /**
         * InputMessage createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.createdAt = null;

        /**
         * InputMessage publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof inputs.InputMessage
         * @instance
         */
        InputMessage.prototype.publishedAt = null;

        /**
         * Creates a new InputMessage instance using the specified properties.
         * @function create
         * @memberof inputs.InputMessage
         * @static
         * @param {inputs.IInputMessage=} [properties] Properties to set
         * @returns {inputs.InputMessage} InputMessage instance
         */
        InputMessage.create = function create(properties) {
            return new InputMessage(properties);
        };

        /**
         * Encodes the specified InputMessage message. Does not implicitly {@link inputs.InputMessage.verify|verify} messages.
         * @function encode
         * @memberof inputs.InputMessage
         * @static
         * @param {inputs.IInputMessage} message InputMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.dataLength != null && Object.hasOwnProperty.call(message, "dataLength"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dataLength);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.nonce);
            if (message.predicate != null && Object.hasOwnProperty.call(message, "predicate"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.predicate);
            if (message.predicateLength != null && Object.hasOwnProperty.call(message, "predicateLength"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.predicateLength);
            if (message.predicateData != null && Object.hasOwnProperty.call(message, "predicateData"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.predicateData);
            if (message.predicateDataLength != null && Object.hasOwnProperty.call(message, "predicateDataLength"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.predicateDataLength);
            if (message.predicateGasUsed != null && Object.hasOwnProperty.call(message, "predicateGasUsed"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.predicateGasUsed);
            if (message.recipientAddress != null && Object.hasOwnProperty.call(message, "recipientAddress"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.recipientAddress);
            if (message.senderAddress != null && Object.hasOwnProperty.call(message, "senderAddress"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.senderAddress);
            if (message.witnessIndex != null && Object.hasOwnProperty.call(message, "witnessIndex"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.witnessIndex);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InputMessage message, length delimited. Does not implicitly {@link inputs.InputMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof inputs.InputMessage
         * @static
         * @param {inputs.IInputMessage} message InputMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InputMessage message from the specified reader or buffer.
         * @function decode
         * @memberof inputs.InputMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {inputs.InputMessage} InputMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.inputs.InputMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.int64();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
                        break;
                    }
                case 5: {
                        message.dataLength = reader.int32();
                        break;
                    }
                case 6: {
                        message.nonce = reader.bytes();
                        break;
                    }
                case 7: {
                        message.predicate = reader.bytes();
                        break;
                    }
                case 8: {
                        message.predicateLength = reader.int32();
                        break;
                    }
                case 9: {
                        message.predicateData = reader.bytes();
                        break;
                    }
                case 10: {
                        message.predicateDataLength = reader.int32();
                        break;
                    }
                case 11: {
                        message.predicateGasUsed = reader.int64();
                        break;
                    }
                case 12: {
                        message.recipientAddress = reader.bytes();
                        break;
                    }
                case 13: {
                        message.senderAddress = reader.bytes();
                        break;
                    }
                case 14: {
                        message.witnessIndex = reader.int32();
                        break;
                    }
                case 15: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InputMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof inputs.InputMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {inputs.InputMessage} InputMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InputMessage message.
         * @function verify
         * @memberof inputs.InputMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.dataLength != null && message.hasOwnProperty("dataLength"))
                if (!$util.isInteger(message.dataLength))
                    return "dataLength: integer expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!(message.nonce && typeof message.nonce.length === "number" || $util.isString(message.nonce)))
                    return "nonce: buffer expected";
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                if (!(message.predicate && typeof message.predicate.length === "number" || $util.isString(message.predicate)))
                    return "predicate: buffer expected";
            if (message.predicateLength != null && message.hasOwnProperty("predicateLength"))
                if (!$util.isInteger(message.predicateLength))
                    return "predicateLength: integer expected";
            if (message.predicateData != null && message.hasOwnProperty("predicateData"))
                if (!(message.predicateData && typeof message.predicateData.length === "number" || $util.isString(message.predicateData)))
                    return "predicateData: buffer expected";
            if (message.predicateDataLength != null && message.hasOwnProperty("predicateDataLength"))
                if (!$util.isInteger(message.predicateDataLength))
                    return "predicateDataLength: integer expected";
            if (message.predicateGasUsed != null && message.hasOwnProperty("predicateGasUsed"))
                if (!$util.isInteger(message.predicateGasUsed) && !(message.predicateGasUsed && $util.isInteger(message.predicateGasUsed.low) && $util.isInteger(message.predicateGasUsed.high)))
                    return "predicateGasUsed: integer|Long expected";
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                if (!(message.recipientAddress && typeof message.recipientAddress.length === "number" || $util.isString(message.recipientAddress)))
                    return "recipientAddress: buffer expected";
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                if (!(message.senderAddress && typeof message.senderAddress.length === "number" || $util.isString(message.senderAddress)))
                    return "senderAddress: buffer expected";
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                if (!$util.isInteger(message.witnessIndex))
                    return "witnessIndex: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an InputMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof inputs.InputMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {inputs.InputMessage} InputMessage
         */
        InputMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.inputs.InputMessage)
                return object;
            let message = new $root.inputs.InputMessage();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.dataLength != null)
                message.dataLength = object.dataLength | 0;
            if (object.nonce != null)
                if (typeof object.nonce === "string")
                    $util.base64.decode(object.nonce, message.nonce = $util.newBuffer($util.base64.length(object.nonce)), 0);
                else if (object.nonce.length >= 0)
                    message.nonce = object.nonce;
            if (object.predicate != null)
                if (typeof object.predicate === "string")
                    $util.base64.decode(object.predicate, message.predicate = $util.newBuffer($util.base64.length(object.predicate)), 0);
                else if (object.predicate.length >= 0)
                    message.predicate = object.predicate;
            if (object.predicateLength != null)
                message.predicateLength = object.predicateLength | 0;
            if (object.predicateData != null)
                if (typeof object.predicateData === "string")
                    $util.base64.decode(object.predicateData, message.predicateData = $util.newBuffer($util.base64.length(object.predicateData)), 0);
                else if (object.predicateData.length >= 0)
                    message.predicateData = object.predicateData;
            if (object.predicateDataLength != null)
                message.predicateDataLength = object.predicateDataLength | 0;
            if (object.predicateGasUsed != null)
                if ($util.Long)
                    (message.predicateGasUsed = $util.Long.fromValue(object.predicateGasUsed)).unsigned = false;
                else if (typeof object.predicateGasUsed === "string")
                    message.predicateGasUsed = parseInt(object.predicateGasUsed, 10);
                else if (typeof object.predicateGasUsed === "number")
                    message.predicateGasUsed = object.predicateGasUsed;
                else if (typeof object.predicateGasUsed === "object")
                    message.predicateGasUsed = new $util.LongBits(object.predicateGasUsed.low >>> 0, object.predicateGasUsed.high >>> 0).toNumber();
            if (object.recipientAddress != null)
                if (typeof object.recipientAddress === "string")
                    $util.base64.decode(object.recipientAddress, message.recipientAddress = $util.newBuffer($util.base64.length(object.recipientAddress)), 0);
                else if (object.recipientAddress.length >= 0)
                    message.recipientAddress = object.recipientAddress;
            if (object.senderAddress != null)
                if (typeof object.senderAddress === "string")
                    $util.base64.decode(object.senderAddress, message.senderAddress = $util.newBuffer($util.base64.length(object.senderAddress)), 0);
                else if (object.senderAddress.length >= 0)
                    message.senderAddress = object.senderAddress;
            if (object.witnessIndex != null)
                message.witnessIndex = object.witnessIndex | 0;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".inputs.InputMessage.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".inputs.InputMessage.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an InputMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof inputs.InputMessage
         * @static
         * @param {inputs.InputMessage} message InputMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.dataLength = 0;
                if (options.bytes === String)
                    object.nonce = "";
                else {
                    object.nonce = [];
                    if (options.bytes !== Array)
                        object.nonce = $util.newBuffer(object.nonce);
                }
                if (options.bytes === String)
                    object.predicate = "";
                else {
                    object.predicate = [];
                    if (options.bytes !== Array)
                        object.predicate = $util.newBuffer(object.predicate);
                }
                object.predicateLength = 0;
                if (options.bytes === String)
                    object.predicateData = "";
                else {
                    object.predicateData = [];
                    if (options.bytes !== Array)
                        object.predicateData = $util.newBuffer(object.predicateData);
                }
                object.predicateDataLength = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.predicateGasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.predicateGasUsed = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.recipientAddress = "";
                else {
                    object.recipientAddress = [];
                    if (options.bytes !== Array)
                        object.recipientAddress = $util.newBuffer(object.recipientAddress);
                }
                if (options.bytes === String)
                    object.senderAddress = "";
                else {
                    object.senderAddress = [];
                    if (options.bytes !== Array)
                        object.senderAddress = $util.newBuffer(object.senderAddress);
                }
                object.witnessIndex = 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.dataLength != null && message.hasOwnProperty("dataLength"))
                object.dataLength = message.dataLength;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = options.bytes === String ? $util.base64.encode(message.nonce, 0, message.nonce.length) : options.bytes === Array ? Array.prototype.slice.call(message.nonce) : message.nonce;
            if (message.predicate != null && message.hasOwnProperty("predicate"))
                object.predicate = options.bytes === String ? $util.base64.encode(message.predicate, 0, message.predicate.length) : options.bytes === Array ? Array.prototype.slice.call(message.predicate) : message.predicate;
            if (message.predicateLength != null && message.hasOwnProperty("predicateLength"))
                object.predicateLength = message.predicateLength;
            if (message.predicateData != null && message.hasOwnProperty("predicateData"))
                object.predicateData = options.bytes === String ? $util.base64.encode(message.predicateData, 0, message.predicateData.length) : options.bytes === Array ? Array.prototype.slice.call(message.predicateData) : message.predicateData;
            if (message.predicateDataLength != null && message.hasOwnProperty("predicateDataLength"))
                object.predicateDataLength = message.predicateDataLength;
            if (message.predicateGasUsed != null && message.hasOwnProperty("predicateGasUsed"))
                if (typeof message.predicateGasUsed === "number")
                    object.predicateGasUsed = options.longs === String ? String(message.predicateGasUsed) : message.predicateGasUsed;
                else
                    object.predicateGasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.predicateGasUsed) : options.longs === Number ? new $util.LongBits(message.predicateGasUsed.low >>> 0, message.predicateGasUsed.high >>> 0).toNumber() : message.predicateGasUsed;
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                object.recipientAddress = options.bytes === String ? $util.base64.encode(message.recipientAddress, 0, message.recipientAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipientAddress) : message.recipientAddress;
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                object.senderAddress = options.bytes === String ? $util.base64.encode(message.senderAddress, 0, message.senderAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderAddress) : message.senderAddress;
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                object.witnessIndex = message.witnessIndex;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this InputMessage to JSON.
         * @function toJSON
         * @memberof inputs.InputMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InputMessage
         * @function getTypeUrl
         * @memberof inputs.InputMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/inputs.InputMessage";
        };

        return InputMessage;
    })();

    return inputs;
})();

export const outputs = $root.outputs = (() => {

    /**
     * Namespace outputs.
     * @exports outputs
     * @namespace
     */
    const outputs = {};

    /**
     * OutputType enum.
     * @name outputs.OutputType
     * @enum {number}
     * @property {number} COIN=0 COIN value
     * @property {number} CONTRACT=1 CONTRACT value
     * @property {number} CHANGE=2 CHANGE value
     * @property {number} VARIABLE=3 VARIABLE value
     * @property {number} CONTRACT_CREATED=4 CONTRACT_CREATED value
     */
    outputs.OutputType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COIN"] = 0;
        values[valuesById[1] = "CONTRACT"] = 1;
        values[valuesById[2] = "CHANGE"] = 2;
        values[valuesById[3] = "VARIABLE"] = 3;
        values[valuesById[4] = "CONTRACT_CREATED"] = 4;
        return values;
    })();

    outputs.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof outputs
         * @interface IOutput
         * @property {string|null} [subject] Output subject
         * @property {number|Long|null} [blockHeight] Output blockHeight
         * @property {Uint8Array|null} [txId] Output txId
         * @property {number|null} [txIndex] Output txIndex
         * @property {number|null} [outputIndex] Output outputIndex
         * @property {outputs.OutputType|null} [outputType] Output outputType
         * @property {outputs.IOutputCoin|null} [coin] Output coin
         * @property {outputs.IOutputContract|null} [contract] Output contract
         * @property {outputs.IOutputChange|null} [change] Output change
         * @property {outputs.IOutputVariable|null} [variable] Output variable
         * @property {outputs.IOutputContractCreated|null} [contractCreated] Output contractCreated
         * @property {google.protobuf.ITimestamp|null} [createdAt] Output createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Output publishedAt
         * @property {pointers.IOutputPointer|null} [pointer] Output pointer
         */

        /**
         * Constructs a new Output.
         * @memberof outputs
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {outputs.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output subject.
         * @member {string} subject
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.subject = "";

        /**
         * Output blockHeight.
         * @member {number|Long} blockHeight
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Output txId.
         * @member {Uint8Array} txId
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.txId = $util.newBuffer([]);

        /**
         * Output txIndex.
         * @member {number} txIndex
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.txIndex = 0;

        /**
         * Output outputIndex.
         * @member {number} outputIndex
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.outputIndex = 0;

        /**
         * Output outputType.
         * @member {outputs.OutputType} outputType
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.outputType = 0;

        /**
         * Output coin.
         * @member {outputs.IOutputCoin|null|undefined} coin
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.coin = null;

        /**
         * Output contract.
         * @member {outputs.IOutputContract|null|undefined} contract
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.contract = null;

        /**
         * Output change.
         * @member {outputs.IOutputChange|null|undefined} change
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.change = null;

        /**
         * Output variable.
         * @member {outputs.IOutputVariable|null|undefined} variable
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.variable = null;

        /**
         * Output contractCreated.
         * @member {outputs.IOutputContractCreated|null|undefined} contractCreated
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.contractCreated = null;

        /**
         * Output createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.createdAt = null;

        /**
         * Output publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.publishedAt = null;

        /**
         * Output pointer.
         * @member {pointers.IOutputPointer|null|undefined} pointer
         * @memberof outputs.Output
         * @instance
         */
        Output.prototype.pointer = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Output output.
         * @member {"coin"|"contract"|"change"|"variable"|"contractCreated"|undefined} output
         * @memberof outputs.Output
         * @instance
         */
        Object.defineProperty(Output.prototype, "output", {
            get: $util.oneOfGetter($oneOfFields = ["coin", "contract", "change", "variable", "contractCreated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof outputs.Output
         * @static
         * @param {outputs.IOutput=} [properties] Properties to set
         * @returns {outputs.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link outputs.Output.verify|verify} messages.
         * @function encode
         * @memberof outputs.Output
         * @static
         * @param {outputs.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.txIndex);
            if (message.outputIndex != null && Object.hasOwnProperty.call(message, "outputIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.outputIndex);
            if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.outputType);
            if (message.coin != null && Object.hasOwnProperty.call(message, "coin"))
                $root.outputs.OutputCoin.encode(message.coin, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.contract != null && Object.hasOwnProperty.call(message, "contract"))
                $root.outputs.OutputContract.encode(message.contract, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.change != null && Object.hasOwnProperty.call(message, "change"))
                $root.outputs.OutputChange.encode(message.change, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.variable != null && Object.hasOwnProperty.call(message, "variable"))
                $root.outputs.OutputVariable.encode(message.variable, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.contractCreated != null && Object.hasOwnProperty.call(message, "contractCreated"))
                $root.outputs.OutputContractCreated.encode(message.contractCreated, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.OutputPointer.encode(message.pointer, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link outputs.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.Output
         * @static
         * @param {outputs.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.Output();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.outputIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.outputType = reader.int32();
                        break;
                    }
                case 7: {
                        message.coin = $root.outputs.OutputCoin.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.contract = $root.outputs.OutputContract.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.change = $root.outputs.OutputChange.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.variable = $root.outputs.OutputVariable.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.contractCreated = $root.outputs.OutputContractCreated.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.pointer = $root.pointers.OutputPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof outputs.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                if (!$util.isInteger(message.outputIndex))
                    return "outputIndex: integer expected";
            if (message.outputType != null && message.hasOwnProperty("outputType"))
                switch (message.outputType) {
                default:
                    return "outputType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.coin != null && message.hasOwnProperty("coin")) {
                properties.output = 1;
                {
                    let error = $root.outputs.OutputCoin.verify(message.coin);
                    if (error)
                        return "coin." + error;
                }
            }
            if (message.contract != null && message.hasOwnProperty("contract")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    let error = $root.outputs.OutputContract.verify(message.contract);
                    if (error)
                        return "contract." + error;
                }
            }
            if (message.change != null && message.hasOwnProperty("change")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    let error = $root.outputs.OutputChange.verify(message.change);
                    if (error)
                        return "change." + error;
                }
            }
            if (message.variable != null && message.hasOwnProperty("variable")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    let error = $root.outputs.OutputVariable.verify(message.variable);
                    if (error)
                        return "variable." + error;
                }
            }
            if (message.contractCreated != null && message.hasOwnProperty("contractCreated")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    let error = $root.outputs.OutputContractCreated.verify(message.contractCreated);
                    if (error)
                        return "contractCreated." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.OutputPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.Output)
                return object;
            let message = new $root.outputs.Output();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.outputIndex != null)
                message.outputIndex = object.outputIndex | 0;
            switch (object.outputType) {
            default:
                if (typeof object.outputType === "number") {
                    message.outputType = object.outputType;
                    break;
                }
                break;
            case "COIN":
            case 0:
                message.outputType = 0;
                break;
            case "CONTRACT":
            case 1:
                message.outputType = 1;
                break;
            case "CHANGE":
            case 2:
                message.outputType = 2;
                break;
            case "VARIABLE":
            case 3:
                message.outputType = 3;
                break;
            case "CONTRACT_CREATED":
            case 4:
                message.outputType = 4;
                break;
            }
            if (object.coin != null) {
                if (typeof object.coin !== "object")
                    throw TypeError(".outputs.Output.coin: object expected");
                message.coin = $root.outputs.OutputCoin.fromObject(object.coin);
            }
            if (object.contract != null) {
                if (typeof object.contract !== "object")
                    throw TypeError(".outputs.Output.contract: object expected");
                message.contract = $root.outputs.OutputContract.fromObject(object.contract);
            }
            if (object.change != null) {
                if (typeof object.change !== "object")
                    throw TypeError(".outputs.Output.change: object expected");
                message.change = $root.outputs.OutputChange.fromObject(object.change);
            }
            if (object.variable != null) {
                if (typeof object.variable !== "object")
                    throw TypeError(".outputs.Output.variable: object expected");
                message.variable = $root.outputs.OutputVariable.fromObject(object.variable);
            }
            if (object.contractCreated != null) {
                if (typeof object.contractCreated !== "object")
                    throw TypeError(".outputs.Output.contractCreated: object expected");
                message.contractCreated = $root.outputs.OutputContractCreated.fromObject(object.contractCreated);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.Output.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.Output.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".outputs.Output.pointer: object expected");
                message.pointer = $root.pointers.OutputPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.Output
         * @static
         * @param {outputs.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.txIndex = 0;
                object.outputIndex = 0;
                object.outputType = options.enums === String ? "COIN" : 0;
                object.createdAt = null;
                object.publishedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.outputIndex != null && message.hasOwnProperty("outputIndex"))
                object.outputIndex = message.outputIndex;
            if (message.outputType != null && message.hasOwnProperty("outputType"))
                object.outputType = options.enums === String ? $root.outputs.OutputType[message.outputType] === undefined ? message.outputType : $root.outputs.OutputType[message.outputType] : message.outputType;
            if (message.coin != null && message.hasOwnProperty("coin")) {
                object.coin = $root.outputs.OutputCoin.toObject(message.coin, options);
                if (options.oneofs)
                    object.output = "coin";
            }
            if (message.contract != null && message.hasOwnProperty("contract")) {
                object.contract = $root.outputs.OutputContract.toObject(message.contract, options);
                if (options.oneofs)
                    object.output = "contract";
            }
            if (message.change != null && message.hasOwnProperty("change")) {
                object.change = $root.outputs.OutputChange.toObject(message.change, options);
                if (options.oneofs)
                    object.output = "change";
            }
            if (message.variable != null && message.hasOwnProperty("variable")) {
                object.variable = $root.outputs.OutputVariable.toObject(message.variable, options);
                if (options.oneofs)
                    object.output = "variable";
            }
            if (message.contractCreated != null && message.hasOwnProperty("contractCreated")) {
                object.contractCreated = $root.outputs.OutputContractCreated.toObject(message.contractCreated, options);
                if (options.oneofs)
                    object.output = "contractCreated";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.OutputPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof outputs.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Output
         * @function getTypeUrl
         * @memberof outputs.Output
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.Output";
        };

        return Output;
    })();

    outputs.OutputCoin = (function() {

        /**
         * Properties of an OutputCoin.
         * @memberof outputs
         * @interface IOutputCoin
         * @property {string|null} [subject] OutputCoin subject
         * @property {Uint8Array|null} [txId] OutputCoin txId
         * @property {number|Long|null} [amount] OutputCoin amount
         * @property {Uint8Array|null} [assetId] OutputCoin assetId
         * @property {Uint8Array|null} [toAddress] OutputCoin toAddress
         * @property {google.protobuf.ITimestamp|null} [createdAt] OutputCoin createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] OutputCoin publishedAt
         */

        /**
         * Constructs a new OutputCoin.
         * @memberof outputs
         * @classdesc Represents an OutputCoin.
         * @implements IOutputCoin
         * @constructor
         * @param {outputs.IOutputCoin=} [properties] Properties to set
         */
        function OutputCoin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputCoin subject.
         * @member {string} subject
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.subject = "";

        /**
         * OutputCoin txId.
         * @member {Uint8Array} txId
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.txId = $util.newBuffer([]);

        /**
         * OutputCoin amount.
         * @member {number|Long} amount
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OutputCoin assetId.
         * @member {Uint8Array} assetId
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.assetId = $util.newBuffer([]);

        /**
         * OutputCoin toAddress.
         * @member {Uint8Array} toAddress
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.toAddress = $util.newBuffer([]);

        /**
         * OutputCoin createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.createdAt = null;

        /**
         * OutputCoin publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.OutputCoin
         * @instance
         */
        OutputCoin.prototype.publishedAt = null;

        /**
         * Creates a new OutputCoin instance using the specified properties.
         * @function create
         * @memberof outputs.OutputCoin
         * @static
         * @param {outputs.IOutputCoin=} [properties] Properties to set
         * @returns {outputs.OutputCoin} OutputCoin instance
         */
        OutputCoin.create = function create(properties) {
            return new OutputCoin(properties);
        };

        /**
         * Encodes the specified OutputCoin message. Does not implicitly {@link outputs.OutputCoin.verify|verify} messages.
         * @function encode
         * @memberof outputs.OutputCoin
         * @static
         * @param {outputs.IOutputCoin} message OutputCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.toAddress);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputCoin message, length delimited. Does not implicitly {@link outputs.OutputCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.OutputCoin
         * @static
         * @param {outputs.IOutputCoin} message OutputCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputCoin message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.OutputCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.OutputCoin} OutputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.OutputCoin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.int64();
                        break;
                    }
                case 4: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 6: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.OutputCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.OutputCoin} OutputCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputCoin message.
         * @function verify
         * @memberof outputs.OutputCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an OutputCoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.OutputCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.OutputCoin} OutputCoin
         */
        OutputCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.OutputCoin)
                return object;
            let message = new $root.outputs.OutputCoin();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.OutputCoin.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.OutputCoin.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputCoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.OutputCoin
         * @static
         * @param {outputs.OutputCoin} message OutputCoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputCoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this OutputCoin to JSON.
         * @function toJSON
         * @memberof outputs.OutputCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputCoin
         * @function getTypeUrl
         * @memberof outputs.OutputCoin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputCoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.OutputCoin";
        };

        return OutputCoin;
    })();

    outputs.OutputContract = (function() {

        /**
         * Properties of an OutputContract.
         * @memberof outputs
         * @interface IOutputContract
         * @property {string|null} [subject] OutputContract subject
         * @property {Uint8Array|null} [txId] OutputContract txId
         * @property {Uint8Array|null} [balanceRoot] OutputContract balanceRoot
         * @property {Uint8Array|null} [stateRoot] OutputContract stateRoot
         * @property {number|null} [inputIndex] OutputContract inputIndex
         * @property {google.protobuf.ITimestamp|null} [createdAt] OutputContract createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] OutputContract publishedAt
         */

        /**
         * Constructs a new OutputContract.
         * @memberof outputs
         * @classdesc Represents an OutputContract.
         * @implements IOutputContract
         * @constructor
         * @param {outputs.IOutputContract=} [properties] Properties to set
         */
        function OutputContract(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputContract subject.
         * @member {string} subject
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.subject = "";

        /**
         * OutputContract txId.
         * @member {Uint8Array} txId
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.txId = $util.newBuffer([]);

        /**
         * OutputContract balanceRoot.
         * @member {Uint8Array} balanceRoot
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.balanceRoot = $util.newBuffer([]);

        /**
         * OutputContract stateRoot.
         * @member {Uint8Array} stateRoot
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.stateRoot = $util.newBuffer([]);

        /**
         * OutputContract inputIndex.
         * @member {number} inputIndex
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.inputIndex = 0;

        /**
         * OutputContract createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.createdAt = null;

        /**
         * OutputContract publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.OutputContract
         * @instance
         */
        OutputContract.prototype.publishedAt = null;

        /**
         * Creates a new OutputContract instance using the specified properties.
         * @function create
         * @memberof outputs.OutputContract
         * @static
         * @param {outputs.IOutputContract=} [properties] Properties to set
         * @returns {outputs.OutputContract} OutputContract instance
         */
        OutputContract.create = function create(properties) {
            return new OutputContract(properties);
        };

        /**
         * Encodes the specified OutputContract message. Does not implicitly {@link outputs.OutputContract.verify|verify} messages.
         * @function encode
         * @memberof outputs.OutputContract
         * @static
         * @param {outputs.IOutputContract} message OutputContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputContract.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.balanceRoot != null && Object.hasOwnProperty.call(message, "balanceRoot"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.balanceRoot);
            if (message.stateRoot != null && Object.hasOwnProperty.call(message, "stateRoot"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.stateRoot);
            if (message.inputIndex != null && Object.hasOwnProperty.call(message, "inputIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.inputIndex);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputContract message, length delimited. Does not implicitly {@link outputs.OutputContract.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.OutputContract
         * @static
         * @param {outputs.IOutputContract} message OutputContract message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputContract.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputContract message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.OutputContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.OutputContract} OutputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputContract.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.OutputContract();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.balanceRoot = reader.bytes();
                        break;
                    }
                case 4: {
                        message.stateRoot = reader.bytes();
                        break;
                    }
                case 5: {
                        message.inputIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputContract message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.OutputContract
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.OutputContract} OutputContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputContract.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputContract message.
         * @function verify
         * @memberof outputs.OutputContract
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputContract.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.balanceRoot != null && message.hasOwnProperty("balanceRoot"))
                if (!(message.balanceRoot && typeof message.balanceRoot.length === "number" || $util.isString(message.balanceRoot)))
                    return "balanceRoot: buffer expected";
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                if (!(message.stateRoot && typeof message.stateRoot.length === "number" || $util.isString(message.stateRoot)))
                    return "stateRoot: buffer expected";
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                if (!$util.isInteger(message.inputIndex))
                    return "inputIndex: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an OutputContract message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.OutputContract
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.OutputContract} OutputContract
         */
        OutputContract.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.OutputContract)
                return object;
            let message = new $root.outputs.OutputContract();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.balanceRoot != null)
                if (typeof object.balanceRoot === "string")
                    $util.base64.decode(object.balanceRoot, message.balanceRoot = $util.newBuffer($util.base64.length(object.balanceRoot)), 0);
                else if (object.balanceRoot.length >= 0)
                    message.balanceRoot = object.balanceRoot;
            if (object.stateRoot != null)
                if (typeof object.stateRoot === "string")
                    $util.base64.decode(object.stateRoot, message.stateRoot = $util.newBuffer($util.base64.length(object.stateRoot)), 0);
                else if (object.stateRoot.length >= 0)
                    message.stateRoot = object.stateRoot;
            if (object.inputIndex != null)
                message.inputIndex = object.inputIndex | 0;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.OutputContract.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.OutputContract.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputContract message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.OutputContract
         * @static
         * @param {outputs.OutputContract} message OutputContract
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputContract.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.balanceRoot = "";
                else {
                    object.balanceRoot = [];
                    if (options.bytes !== Array)
                        object.balanceRoot = $util.newBuffer(object.balanceRoot);
                }
                if (options.bytes === String)
                    object.stateRoot = "";
                else {
                    object.stateRoot = [];
                    if (options.bytes !== Array)
                        object.stateRoot = $util.newBuffer(object.stateRoot);
                }
                object.inputIndex = 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.balanceRoot != null && message.hasOwnProperty("balanceRoot"))
                object.balanceRoot = options.bytes === String ? $util.base64.encode(message.balanceRoot, 0, message.balanceRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.balanceRoot) : message.balanceRoot;
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                object.stateRoot = options.bytes === String ? $util.base64.encode(message.stateRoot, 0, message.stateRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateRoot) : message.stateRoot;
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                object.inputIndex = message.inputIndex;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this OutputContract to JSON.
         * @function toJSON
         * @memberof outputs.OutputContract
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputContract.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputContract
         * @function getTypeUrl
         * @memberof outputs.OutputContract
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputContract.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.OutputContract";
        };

        return OutputContract;
    })();

    outputs.OutputContractCreated = (function() {

        /**
         * Properties of an OutputContractCreated.
         * @memberof outputs
         * @interface IOutputContractCreated
         * @property {string|null} [subject] OutputContractCreated subject
         * @property {Uint8Array|null} [txId] OutputContractCreated txId
         * @property {Uint8Array|null} [contractId] OutputContractCreated contractId
         * @property {Uint8Array|null} [stateRoot] OutputContractCreated stateRoot
         * @property {google.protobuf.ITimestamp|null} [createdAt] OutputContractCreated createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] OutputContractCreated publishedAt
         */

        /**
         * Constructs a new OutputContractCreated.
         * @memberof outputs
         * @classdesc Represents an OutputContractCreated.
         * @implements IOutputContractCreated
         * @constructor
         * @param {outputs.IOutputContractCreated=} [properties] Properties to set
         */
        function OutputContractCreated(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputContractCreated subject.
         * @member {string} subject
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.subject = "";

        /**
         * OutputContractCreated txId.
         * @member {Uint8Array} txId
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.txId = $util.newBuffer([]);

        /**
         * OutputContractCreated contractId.
         * @member {Uint8Array} contractId
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.contractId = $util.newBuffer([]);

        /**
         * OutputContractCreated stateRoot.
         * @member {Uint8Array} stateRoot
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.stateRoot = $util.newBuffer([]);

        /**
         * OutputContractCreated createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.createdAt = null;

        /**
         * OutputContractCreated publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.OutputContractCreated
         * @instance
         */
        OutputContractCreated.prototype.publishedAt = null;

        /**
         * Creates a new OutputContractCreated instance using the specified properties.
         * @function create
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {outputs.IOutputContractCreated=} [properties] Properties to set
         * @returns {outputs.OutputContractCreated} OutputContractCreated instance
         */
        OutputContractCreated.create = function create(properties) {
            return new OutputContractCreated(properties);
        };

        /**
         * Encodes the specified OutputContractCreated message. Does not implicitly {@link outputs.OutputContractCreated.verify|verify} messages.
         * @function encode
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {outputs.IOutputContractCreated} message OutputContractCreated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputContractCreated.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.stateRoot != null && Object.hasOwnProperty.call(message, "stateRoot"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.stateRoot);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputContractCreated message, length delimited. Does not implicitly {@link outputs.OutputContractCreated.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {outputs.IOutputContractCreated} message OutputContractCreated message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputContractCreated.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputContractCreated message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.OutputContractCreated} OutputContractCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputContractCreated.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.OutputContractCreated();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.stateRoot = reader.bytes();
                        break;
                    }
                case 5: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputContractCreated message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.OutputContractCreated} OutputContractCreated
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputContractCreated.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputContractCreated message.
         * @function verify
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputContractCreated.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                if (!(message.stateRoot && typeof message.stateRoot.length === "number" || $util.isString(message.stateRoot)))
                    return "stateRoot: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an OutputContractCreated message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.OutputContractCreated} OutputContractCreated
         */
        OutputContractCreated.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.OutputContractCreated)
                return object;
            let message = new $root.outputs.OutputContractCreated();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.stateRoot != null)
                if (typeof object.stateRoot === "string")
                    $util.base64.decode(object.stateRoot, message.stateRoot = $util.newBuffer($util.base64.length(object.stateRoot)), 0);
                else if (object.stateRoot.length >= 0)
                    message.stateRoot = object.stateRoot;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.OutputContractCreated.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.OutputContractCreated.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputContractCreated message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {outputs.OutputContractCreated} message OutputContractCreated
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputContractCreated.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.stateRoot = "";
                else {
                    object.stateRoot = [];
                    if (options.bytes !== Array)
                        object.stateRoot = $util.newBuffer(object.stateRoot);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.stateRoot != null && message.hasOwnProperty("stateRoot"))
                object.stateRoot = options.bytes === String ? $util.base64.encode(message.stateRoot, 0, message.stateRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateRoot) : message.stateRoot;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this OutputContractCreated to JSON.
         * @function toJSON
         * @memberof outputs.OutputContractCreated
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputContractCreated.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputContractCreated
         * @function getTypeUrl
         * @memberof outputs.OutputContractCreated
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputContractCreated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.OutputContractCreated";
        };

        return OutputContractCreated;
    })();

    outputs.OutputChange = (function() {

        /**
         * Properties of an OutputChange.
         * @memberof outputs
         * @interface IOutputChange
         * @property {string|null} [subject] OutputChange subject
         * @property {Uint8Array|null} [txId] OutputChange txId
         * @property {number|Long|null} [amount] OutputChange amount
         * @property {Uint8Array|null} [assetId] OutputChange assetId
         * @property {Uint8Array|null} [toAddress] OutputChange toAddress
         * @property {google.protobuf.ITimestamp|null} [createdAt] OutputChange createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] OutputChange publishedAt
         */

        /**
         * Constructs a new OutputChange.
         * @memberof outputs
         * @classdesc Represents an OutputChange.
         * @implements IOutputChange
         * @constructor
         * @param {outputs.IOutputChange=} [properties] Properties to set
         */
        function OutputChange(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputChange subject.
         * @member {string} subject
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.subject = "";

        /**
         * OutputChange txId.
         * @member {Uint8Array} txId
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.txId = $util.newBuffer([]);

        /**
         * OutputChange amount.
         * @member {number|Long} amount
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OutputChange assetId.
         * @member {Uint8Array} assetId
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.assetId = $util.newBuffer([]);

        /**
         * OutputChange toAddress.
         * @member {Uint8Array} toAddress
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.toAddress = $util.newBuffer([]);

        /**
         * OutputChange createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.createdAt = null;

        /**
         * OutputChange publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.OutputChange
         * @instance
         */
        OutputChange.prototype.publishedAt = null;

        /**
         * Creates a new OutputChange instance using the specified properties.
         * @function create
         * @memberof outputs.OutputChange
         * @static
         * @param {outputs.IOutputChange=} [properties] Properties to set
         * @returns {outputs.OutputChange} OutputChange instance
         */
        OutputChange.create = function create(properties) {
            return new OutputChange(properties);
        };

        /**
         * Encodes the specified OutputChange message. Does not implicitly {@link outputs.OutputChange.verify|verify} messages.
         * @function encode
         * @memberof outputs.OutputChange
         * @static
         * @param {outputs.IOutputChange} message OutputChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.toAddress);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputChange message, length delimited. Does not implicitly {@link outputs.OutputChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.OutputChange
         * @static
         * @param {outputs.IOutputChange} message OutputChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputChange message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.OutputChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.OutputChange} OutputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.OutputChange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.int64();
                        break;
                    }
                case 4: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 6: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.OutputChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.OutputChange} OutputChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputChange message.
         * @function verify
         * @memberof outputs.OutputChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an OutputChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.OutputChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.OutputChange} OutputChange
         */
        OutputChange.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.OutputChange)
                return object;
            let message = new $root.outputs.OutputChange();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.OutputChange.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.OutputChange.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.OutputChange
         * @static
         * @param {outputs.OutputChange} message OutputChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this OutputChange to JSON.
         * @function toJSON
         * @memberof outputs.OutputChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputChange
         * @function getTypeUrl
         * @memberof outputs.OutputChange
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.OutputChange";
        };

        return OutputChange;
    })();

    outputs.OutputVariable = (function() {

        /**
         * Properties of an OutputVariable.
         * @memberof outputs
         * @interface IOutputVariable
         * @property {string|null} [subject] OutputVariable subject
         * @property {Uint8Array|null} [txId] OutputVariable txId
         * @property {number|Long|null} [amount] OutputVariable amount
         * @property {Uint8Array|null} [assetId] OutputVariable assetId
         * @property {Uint8Array|null} [toAddress] OutputVariable toAddress
         * @property {google.protobuf.ITimestamp|null} [createdAt] OutputVariable createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] OutputVariable publishedAt
         */

        /**
         * Constructs a new OutputVariable.
         * @memberof outputs
         * @classdesc Represents an OutputVariable.
         * @implements IOutputVariable
         * @constructor
         * @param {outputs.IOutputVariable=} [properties] Properties to set
         */
        function OutputVariable(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputVariable subject.
         * @member {string} subject
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.subject = "";

        /**
         * OutputVariable txId.
         * @member {Uint8Array} txId
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.txId = $util.newBuffer([]);

        /**
         * OutputVariable amount.
         * @member {number|Long} amount
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OutputVariable assetId.
         * @member {Uint8Array} assetId
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.assetId = $util.newBuffer([]);

        /**
         * OutputVariable toAddress.
         * @member {Uint8Array} toAddress
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.toAddress = $util.newBuffer([]);

        /**
         * OutputVariable createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.createdAt = null;

        /**
         * OutputVariable publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof outputs.OutputVariable
         * @instance
         */
        OutputVariable.prototype.publishedAt = null;

        /**
         * Creates a new OutputVariable instance using the specified properties.
         * @function create
         * @memberof outputs.OutputVariable
         * @static
         * @param {outputs.IOutputVariable=} [properties] Properties to set
         * @returns {outputs.OutputVariable} OutputVariable instance
         */
        OutputVariable.create = function create(properties) {
            return new OutputVariable(properties);
        };

        /**
         * Encodes the specified OutputVariable message. Does not implicitly {@link outputs.OutputVariable.verify|verify} messages.
         * @function encode
         * @memberof outputs.OutputVariable
         * @static
         * @param {outputs.IOutputVariable} message OutputVariable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputVariable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.assetId);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.toAddress);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputVariable message, length delimited. Does not implicitly {@link outputs.OutputVariable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof outputs.OutputVariable
         * @static
         * @param {outputs.IOutputVariable} message OutputVariable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputVariable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputVariable message from the specified reader or buffer.
         * @function decode
         * @memberof outputs.OutputVariable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {outputs.OutputVariable} OutputVariable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputVariable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.outputs.OutputVariable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.amount = reader.int64();
                        break;
                    }
                case 4: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 6: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputVariable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof outputs.OutputVariable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {outputs.OutputVariable} OutputVariable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputVariable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputVariable message.
         * @function verify
         * @memberof outputs.OutputVariable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputVariable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates an OutputVariable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof outputs.OutputVariable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {outputs.OutputVariable} OutputVariable
         */
        OutputVariable.fromObject = function fromObject(object) {
            if (object instanceof $root.outputs.OutputVariable)
                return object;
            let message = new $root.outputs.OutputVariable();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".outputs.OutputVariable.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".outputs.OutputVariable.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputVariable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof outputs.OutputVariable
         * @static
         * @param {outputs.OutputVariable} message OutputVariable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputVariable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this OutputVariable to JSON.
         * @function toJSON
         * @memberof outputs.OutputVariable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputVariable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputVariable
         * @function getTypeUrl
         * @memberof outputs.OutputVariable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputVariable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/outputs.OutputVariable";
        };

        return OutputVariable;
    })();

    return outputs;
})();

export const receipts = $root.receipts = (() => {

    /**
     * Namespace receipts.
     * @exports receipts
     * @namespace
     */
    const receipts = {};

    /**
     * ReceiptType enum.
     * @name receipts.ReceiptType
     * @enum {number}
     * @property {number} CALL=0 CALL value
     * @property {number} RETURN=1 RETURN value
     * @property {number} RETURN_DATA=2 RETURN_DATA value
     * @property {number} PANIC=3 PANIC value
     * @property {number} REVERT=4 REVERT value
     * @property {number} LOG=5 LOG value
     * @property {number} LOG_DATA=6 LOG_DATA value
     * @property {number} TRANSFER=7 TRANSFER value
     * @property {number} TRANSFER_OUT=8 TRANSFER_OUT value
     * @property {number} SCRIPT_RESULT=9 SCRIPT_RESULT value
     * @property {number} MESSAGE_OUT=10 MESSAGE_OUT value
     * @property {number} MINT=11 MINT value
     * @property {number} BURN=12 BURN value
     */
    receipts.ReceiptType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CALL"] = 0;
        values[valuesById[1] = "RETURN"] = 1;
        values[valuesById[2] = "RETURN_DATA"] = 2;
        values[valuesById[3] = "PANIC"] = 3;
        values[valuesById[4] = "REVERT"] = 4;
        values[valuesById[5] = "LOG"] = 5;
        values[valuesById[6] = "LOG_DATA"] = 6;
        values[valuesById[7] = "TRANSFER"] = 7;
        values[valuesById[8] = "TRANSFER_OUT"] = 8;
        values[valuesById[9] = "SCRIPT_RESULT"] = 9;
        values[valuesById[10] = "MESSAGE_OUT"] = 10;
        values[valuesById[11] = "MINT"] = 11;
        values[valuesById[12] = "BURN"] = 12;
        return values;
    })();

    /**
     * ScriptResultType enum.
     * @name receipts.ScriptResultType
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} FAILURE=1 FAILURE value
     */
    receipts.ScriptResultType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "FAILURE"] = 1;
        return values;
    })();

    receipts.Receipt = (function() {

        /**
         * Properties of a Receipt.
         * @memberof receipts
         * @interface IReceipt
         * @property {string|null} [subject] Receipt subject
         * @property {number|Long|null} [blockHeight] Receipt blockHeight
         * @property {Uint8Array|null} [txId] Receipt txId
         * @property {number|null} [txIndex] Receipt txIndex
         * @property {number|null} [receiptIndex] Receipt receiptIndex
         * @property {receipts.ReceiptType|null} [receiptType] Receipt receiptType
         * @property {receipts.IReceiptCall|null} [call] Receipt call
         * @property {receipts.IReceiptReturn|null} ["return"] Receipt return
         * @property {receipts.IReceiptReturnData|null} [returnData] Receipt returnData
         * @property {receipts.IReceiptPanic|null} [panic] Receipt panic
         * @property {receipts.IReceiptRevert|null} [revert] Receipt revert
         * @property {receipts.IReceiptLog|null} [log] Receipt log
         * @property {receipts.IReceiptLogData|null} [logData] Receipt logData
         * @property {receipts.IReceiptTransfer|null} [transfer] Receipt transfer
         * @property {receipts.IReceiptTransferOut|null} [transferOut] Receipt transferOut
         * @property {receipts.IReceiptScriptResult|null} [scriptResult] Receipt scriptResult
         * @property {receipts.IReceiptMessageOut|null} [messageOut] Receipt messageOut
         * @property {receipts.IReceiptMint|null} [mint] Receipt mint
         * @property {receipts.IReceiptBurn|null} [burn] Receipt burn
         * @property {google.protobuf.ITimestamp|null} [createdAt] Receipt createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Receipt publishedAt
         * @property {pointers.IReceiptPointer|null} [pointer] Receipt pointer
         */

        /**
         * Constructs a new Receipt.
         * @memberof receipts
         * @classdesc Represents a Receipt.
         * @implements IReceipt
         * @constructor
         * @param {receipts.IReceipt=} [properties] Properties to set
         */
        function Receipt(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Receipt subject.
         * @member {string} subject
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.subject = "";

        /**
         * Receipt blockHeight.
         * @member {number|Long} blockHeight
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Receipt txId.
         * @member {Uint8Array} txId
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.txId = $util.newBuffer([]);

        /**
         * Receipt txIndex.
         * @member {number} txIndex
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.txIndex = 0;

        /**
         * Receipt receiptIndex.
         * @member {number} receiptIndex
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.receiptIndex = 0;

        /**
         * Receipt receiptType.
         * @member {receipts.ReceiptType} receiptType
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.receiptType = 0;

        /**
         * Receipt call.
         * @member {receipts.IReceiptCall|null|undefined} call
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.call = null;

        /**
         * Receipt return.
         * @member {receipts.IReceiptReturn|null|undefined} return
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype["return"] = null;

        /**
         * Receipt returnData.
         * @member {receipts.IReceiptReturnData|null|undefined} returnData
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.returnData = null;

        /**
         * Receipt panic.
         * @member {receipts.IReceiptPanic|null|undefined} panic
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.panic = null;

        /**
         * Receipt revert.
         * @member {receipts.IReceiptRevert|null|undefined} revert
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.revert = null;

        /**
         * Receipt log.
         * @member {receipts.IReceiptLog|null|undefined} log
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.log = null;

        /**
         * Receipt logData.
         * @member {receipts.IReceiptLogData|null|undefined} logData
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.logData = null;

        /**
         * Receipt transfer.
         * @member {receipts.IReceiptTransfer|null|undefined} transfer
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.transfer = null;

        /**
         * Receipt transferOut.
         * @member {receipts.IReceiptTransferOut|null|undefined} transferOut
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.transferOut = null;

        /**
         * Receipt scriptResult.
         * @member {receipts.IReceiptScriptResult|null|undefined} scriptResult
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.scriptResult = null;

        /**
         * Receipt messageOut.
         * @member {receipts.IReceiptMessageOut|null|undefined} messageOut
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.messageOut = null;

        /**
         * Receipt mint.
         * @member {receipts.IReceiptMint|null|undefined} mint
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.mint = null;

        /**
         * Receipt burn.
         * @member {receipts.IReceiptBurn|null|undefined} burn
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.burn = null;

        /**
         * Receipt createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.createdAt = null;

        /**
         * Receipt publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.publishedAt = null;

        /**
         * Receipt pointer.
         * @member {pointers.IReceiptPointer|null|undefined} pointer
         * @memberof receipts.Receipt
         * @instance
         */
        Receipt.prototype.pointer = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Receipt receipt.
         * @member {"call"|"return"|"returnData"|"panic"|"revert"|"log"|"logData"|"transfer"|"transferOut"|"scriptResult"|"messageOut"|"mint"|"burn"|undefined} receipt
         * @memberof receipts.Receipt
         * @instance
         */
        Object.defineProperty(Receipt.prototype, "receipt", {
            get: $util.oneOfGetter($oneOfFields = ["call", "return", "returnData", "panic", "revert", "log", "logData", "transfer", "transferOut", "scriptResult", "messageOut", "mint", "burn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Receipt instance using the specified properties.
         * @function create
         * @memberof receipts.Receipt
         * @static
         * @param {receipts.IReceipt=} [properties] Properties to set
         * @returns {receipts.Receipt} Receipt instance
         */
        Receipt.create = function create(properties) {
            return new Receipt(properties);
        };

        /**
         * Encodes the specified Receipt message. Does not implicitly {@link receipts.Receipt.verify|verify} messages.
         * @function encode
         * @memberof receipts.Receipt
         * @static
         * @param {receipts.IReceipt} message Receipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Receipt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.txIndex);
            if (message.receiptIndex != null && Object.hasOwnProperty.call(message, "receiptIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.receiptIndex);
            if (message.receiptType != null && Object.hasOwnProperty.call(message, "receiptType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.receiptType);
            if (message.call != null && Object.hasOwnProperty.call(message, "call"))
                $root.receipts.ReceiptCall.encode(message.call, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message["return"] != null && Object.hasOwnProperty.call(message, "return"))
                $root.receipts.ReceiptReturn.encode(message["return"], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.returnData != null && Object.hasOwnProperty.call(message, "returnData"))
                $root.receipts.ReceiptReturnData.encode(message.returnData, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.panic != null && Object.hasOwnProperty.call(message, "panic"))
                $root.receipts.ReceiptPanic.encode(message.panic, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.revert != null && Object.hasOwnProperty.call(message, "revert"))
                $root.receipts.ReceiptRevert.encode(message.revert, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                $root.receipts.ReceiptLog.encode(message.log, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.logData != null && Object.hasOwnProperty.call(message, "logData"))
                $root.receipts.ReceiptLogData.encode(message.logData, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.transfer != null && Object.hasOwnProperty.call(message, "transfer"))
                $root.receipts.ReceiptTransfer.encode(message.transfer, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.transferOut != null && Object.hasOwnProperty.call(message, "transferOut"))
                $root.receipts.ReceiptTransferOut.encode(message.transferOut, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.scriptResult != null && Object.hasOwnProperty.call(message, "scriptResult"))
                $root.receipts.ReceiptScriptResult.encode(message.scriptResult, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.messageOut != null && Object.hasOwnProperty.call(message, "messageOut"))
                $root.receipts.ReceiptMessageOut.encode(message.messageOut, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.mint != null && Object.hasOwnProperty.call(message, "mint"))
                $root.receipts.ReceiptMint.encode(message.mint, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.burn != null && Object.hasOwnProperty.call(message, "burn"))
                $root.receipts.ReceiptBurn.encode(message.burn, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.ReceiptPointer.encode(message.pointer, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Receipt message, length delimited. Does not implicitly {@link receipts.Receipt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.Receipt
         * @static
         * @param {receipts.IReceipt} message Receipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Receipt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Receipt message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.Receipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.Receipt} Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Receipt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.Receipt();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.receiptIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.receiptType = reader.int32();
                        break;
                    }
                case 7: {
                        message.call = $root.receipts.ReceiptCall.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message["return"] = $root.receipts.ReceiptReturn.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.returnData = $root.receipts.ReceiptReturnData.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.panic = $root.receipts.ReceiptPanic.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.revert = $root.receipts.ReceiptRevert.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.log = $root.receipts.ReceiptLog.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.logData = $root.receipts.ReceiptLogData.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.transfer = $root.receipts.ReceiptTransfer.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.transferOut = $root.receipts.ReceiptTransferOut.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.scriptResult = $root.receipts.ReceiptScriptResult.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.messageOut = $root.receipts.ReceiptMessageOut.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.mint = $root.receipts.ReceiptMint.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.burn = $root.receipts.ReceiptBurn.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.pointer = $root.pointers.ReceiptPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Receipt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.Receipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.Receipt} Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Receipt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Receipt message.
         * @function verify
         * @memberof receipts.Receipt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Receipt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.receiptIndex != null && message.hasOwnProperty("receiptIndex"))
                if (!$util.isInteger(message.receiptIndex))
                    return "receiptIndex: integer expected";
            if (message.receiptType != null && message.hasOwnProperty("receiptType"))
                switch (message.receiptType) {
                default:
                    return "receiptType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    break;
                }
            if (message.call != null && message.hasOwnProperty("call")) {
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptCall.verify(message.call);
                    if (error)
                        return "call." + error;
                }
            }
            if (message["return"] != null && message.hasOwnProperty("return")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptReturn.verify(message["return"]);
                    if (error)
                        return "return." + error;
                }
            }
            if (message.returnData != null && message.hasOwnProperty("returnData")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptReturnData.verify(message.returnData);
                    if (error)
                        return "returnData." + error;
                }
            }
            if (message.panic != null && message.hasOwnProperty("panic")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptPanic.verify(message.panic);
                    if (error)
                        return "panic." + error;
                }
            }
            if (message.revert != null && message.hasOwnProperty("revert")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptRevert.verify(message.revert);
                    if (error)
                        return "revert." + error;
                }
            }
            if (message.log != null && message.hasOwnProperty("log")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptLog.verify(message.log);
                    if (error)
                        return "log." + error;
                }
            }
            if (message.logData != null && message.hasOwnProperty("logData")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptLogData.verify(message.logData);
                    if (error)
                        return "logData." + error;
                }
            }
            if (message.transfer != null && message.hasOwnProperty("transfer")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptTransfer.verify(message.transfer);
                    if (error)
                        return "transfer." + error;
                }
            }
            if (message.transferOut != null && message.hasOwnProperty("transferOut")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptTransferOut.verify(message.transferOut);
                    if (error)
                        return "transferOut." + error;
                }
            }
            if (message.scriptResult != null && message.hasOwnProperty("scriptResult")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptScriptResult.verify(message.scriptResult);
                    if (error)
                        return "scriptResult." + error;
                }
            }
            if (message.messageOut != null && message.hasOwnProperty("messageOut")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptMessageOut.verify(message.messageOut);
                    if (error)
                        return "messageOut." + error;
                }
            }
            if (message.mint != null && message.hasOwnProperty("mint")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptMint.verify(message.mint);
                    if (error)
                        return "mint." + error;
                }
            }
            if (message.burn != null && message.hasOwnProperty("burn")) {
                if (properties.receipt === 1)
                    return "receipt: multiple values";
                properties.receipt = 1;
                {
                    let error = $root.receipts.ReceiptBurn.verify(message.burn);
                    if (error)
                        return "burn." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.ReceiptPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.Receipt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.Receipt} Receipt
         */
        Receipt.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.Receipt)
                return object;
            let message = new $root.receipts.Receipt();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.receiptIndex != null)
                message.receiptIndex = object.receiptIndex | 0;
            switch (object.receiptType) {
            default:
                if (typeof object.receiptType === "number") {
                    message.receiptType = object.receiptType;
                    break;
                }
                break;
            case "CALL":
            case 0:
                message.receiptType = 0;
                break;
            case "RETURN":
            case 1:
                message.receiptType = 1;
                break;
            case "RETURN_DATA":
            case 2:
                message.receiptType = 2;
                break;
            case "PANIC":
            case 3:
                message.receiptType = 3;
                break;
            case "REVERT":
            case 4:
                message.receiptType = 4;
                break;
            case "LOG":
            case 5:
                message.receiptType = 5;
                break;
            case "LOG_DATA":
            case 6:
                message.receiptType = 6;
                break;
            case "TRANSFER":
            case 7:
                message.receiptType = 7;
                break;
            case "TRANSFER_OUT":
            case 8:
                message.receiptType = 8;
                break;
            case "SCRIPT_RESULT":
            case 9:
                message.receiptType = 9;
                break;
            case "MESSAGE_OUT":
            case 10:
                message.receiptType = 10;
                break;
            case "MINT":
            case 11:
                message.receiptType = 11;
                break;
            case "BURN":
            case 12:
                message.receiptType = 12;
                break;
            }
            if (object.call != null) {
                if (typeof object.call !== "object")
                    throw TypeError(".receipts.Receipt.call: object expected");
                message.call = $root.receipts.ReceiptCall.fromObject(object.call);
            }
            if (object["return"] != null) {
                if (typeof object["return"] !== "object")
                    throw TypeError(".receipts.Receipt.return: object expected");
                message["return"] = $root.receipts.ReceiptReturn.fromObject(object["return"]);
            }
            if (object.returnData != null) {
                if (typeof object.returnData !== "object")
                    throw TypeError(".receipts.Receipt.returnData: object expected");
                message.returnData = $root.receipts.ReceiptReturnData.fromObject(object.returnData);
            }
            if (object.panic != null) {
                if (typeof object.panic !== "object")
                    throw TypeError(".receipts.Receipt.panic: object expected");
                message.panic = $root.receipts.ReceiptPanic.fromObject(object.panic);
            }
            if (object.revert != null) {
                if (typeof object.revert !== "object")
                    throw TypeError(".receipts.Receipt.revert: object expected");
                message.revert = $root.receipts.ReceiptRevert.fromObject(object.revert);
            }
            if (object.log != null) {
                if (typeof object.log !== "object")
                    throw TypeError(".receipts.Receipt.log: object expected");
                message.log = $root.receipts.ReceiptLog.fromObject(object.log);
            }
            if (object.logData != null) {
                if (typeof object.logData !== "object")
                    throw TypeError(".receipts.Receipt.logData: object expected");
                message.logData = $root.receipts.ReceiptLogData.fromObject(object.logData);
            }
            if (object.transfer != null) {
                if (typeof object.transfer !== "object")
                    throw TypeError(".receipts.Receipt.transfer: object expected");
                message.transfer = $root.receipts.ReceiptTransfer.fromObject(object.transfer);
            }
            if (object.transferOut != null) {
                if (typeof object.transferOut !== "object")
                    throw TypeError(".receipts.Receipt.transferOut: object expected");
                message.transferOut = $root.receipts.ReceiptTransferOut.fromObject(object.transferOut);
            }
            if (object.scriptResult != null) {
                if (typeof object.scriptResult !== "object")
                    throw TypeError(".receipts.Receipt.scriptResult: object expected");
                message.scriptResult = $root.receipts.ReceiptScriptResult.fromObject(object.scriptResult);
            }
            if (object.messageOut != null) {
                if (typeof object.messageOut !== "object")
                    throw TypeError(".receipts.Receipt.messageOut: object expected");
                message.messageOut = $root.receipts.ReceiptMessageOut.fromObject(object.messageOut);
            }
            if (object.mint != null) {
                if (typeof object.mint !== "object")
                    throw TypeError(".receipts.Receipt.mint: object expected");
                message.mint = $root.receipts.ReceiptMint.fromObject(object.mint);
            }
            if (object.burn != null) {
                if (typeof object.burn !== "object")
                    throw TypeError(".receipts.Receipt.burn: object expected");
                message.burn = $root.receipts.ReceiptBurn.fromObject(object.burn);
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.Receipt.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.Receipt.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".receipts.Receipt.pointer: object expected");
                message.pointer = $root.pointers.ReceiptPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from a Receipt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.Receipt
         * @static
         * @param {receipts.Receipt} message Receipt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Receipt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.txIndex = 0;
                object.receiptIndex = 0;
                object.receiptType = options.enums === String ? "CALL" : 0;
                object.createdAt = null;
                object.publishedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.receiptIndex != null && message.hasOwnProperty("receiptIndex"))
                object.receiptIndex = message.receiptIndex;
            if (message.receiptType != null && message.hasOwnProperty("receiptType"))
                object.receiptType = options.enums === String ? $root.receipts.ReceiptType[message.receiptType] === undefined ? message.receiptType : $root.receipts.ReceiptType[message.receiptType] : message.receiptType;
            if (message.call != null && message.hasOwnProperty("call")) {
                object.call = $root.receipts.ReceiptCall.toObject(message.call, options);
                if (options.oneofs)
                    object.receipt = "call";
            }
            if (message["return"] != null && message.hasOwnProperty("return")) {
                object["return"] = $root.receipts.ReceiptReturn.toObject(message["return"], options);
                if (options.oneofs)
                    object.receipt = "return";
            }
            if (message.returnData != null && message.hasOwnProperty("returnData")) {
                object.returnData = $root.receipts.ReceiptReturnData.toObject(message.returnData, options);
                if (options.oneofs)
                    object.receipt = "returnData";
            }
            if (message.panic != null && message.hasOwnProperty("panic")) {
                object.panic = $root.receipts.ReceiptPanic.toObject(message.panic, options);
                if (options.oneofs)
                    object.receipt = "panic";
            }
            if (message.revert != null && message.hasOwnProperty("revert")) {
                object.revert = $root.receipts.ReceiptRevert.toObject(message.revert, options);
                if (options.oneofs)
                    object.receipt = "revert";
            }
            if (message.log != null && message.hasOwnProperty("log")) {
                object.log = $root.receipts.ReceiptLog.toObject(message.log, options);
                if (options.oneofs)
                    object.receipt = "log";
            }
            if (message.logData != null && message.hasOwnProperty("logData")) {
                object.logData = $root.receipts.ReceiptLogData.toObject(message.logData, options);
                if (options.oneofs)
                    object.receipt = "logData";
            }
            if (message.transfer != null && message.hasOwnProperty("transfer")) {
                object.transfer = $root.receipts.ReceiptTransfer.toObject(message.transfer, options);
                if (options.oneofs)
                    object.receipt = "transfer";
            }
            if (message.transferOut != null && message.hasOwnProperty("transferOut")) {
                object.transferOut = $root.receipts.ReceiptTransferOut.toObject(message.transferOut, options);
                if (options.oneofs)
                    object.receipt = "transferOut";
            }
            if (message.scriptResult != null && message.hasOwnProperty("scriptResult")) {
                object.scriptResult = $root.receipts.ReceiptScriptResult.toObject(message.scriptResult, options);
                if (options.oneofs)
                    object.receipt = "scriptResult";
            }
            if (message.messageOut != null && message.hasOwnProperty("messageOut")) {
                object.messageOut = $root.receipts.ReceiptMessageOut.toObject(message.messageOut, options);
                if (options.oneofs)
                    object.receipt = "messageOut";
            }
            if (message.mint != null && message.hasOwnProperty("mint")) {
                object.mint = $root.receipts.ReceiptMint.toObject(message.mint, options);
                if (options.oneofs)
                    object.receipt = "mint";
            }
            if (message.burn != null && message.hasOwnProperty("burn")) {
                object.burn = $root.receipts.ReceiptBurn.toObject(message.burn, options);
                if (options.oneofs)
                    object.receipt = "burn";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.ReceiptPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Receipt to JSON.
         * @function toJSON
         * @memberof receipts.Receipt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Receipt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Receipt
         * @function getTypeUrl
         * @memberof receipts.Receipt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Receipt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.Receipt";
        };

        return Receipt;
    })();

    receipts.ReceiptCall = (function() {

        /**
         * Properties of a ReceiptCall.
         * @memberof receipts
         * @interface IReceiptCall
         * @property {string|null} [subject] ReceiptCall subject
         * @property {Uint8Array|null} [txId] ReceiptCall txId
         * @property {Uint8Array|null} [contractId] ReceiptCall contractId
         * @property {Uint8Array|null} [toContractId] ReceiptCall toContractId
         * @property {number|Long|null} [amount] ReceiptCall amount
         * @property {Uint8Array|null} [assetId] ReceiptCall assetId
         * @property {number|Long|null} [gas] ReceiptCall gas
         * @property {number|Long|null} [param1] ReceiptCall param1
         * @property {number|Long|null} [param2] ReceiptCall param2
         * @property {number|Long|null} [pc] ReceiptCall pc
         * @property {number|Long|null} [is] ReceiptCall is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptCall createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptCall publishedAt
         */

        /**
         * Constructs a new ReceiptCall.
         * @memberof receipts
         * @classdesc Represents a ReceiptCall.
         * @implements IReceiptCall
         * @constructor
         * @param {receipts.IReceiptCall=} [properties] Properties to set
         */
        function ReceiptCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptCall subject.
         * @member {string} subject
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.subject = "";

        /**
         * ReceiptCall txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptCall contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptCall toContractId.
         * @member {Uint8Array} toContractId
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.toContractId = $util.newBuffer([]);

        /**
         * ReceiptCall amount.
         * @member {number|Long} amount
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall assetId.
         * @member {Uint8Array} assetId
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.assetId = $util.newBuffer([]);

        /**
         * ReceiptCall gas.
         * @member {number|Long} gas
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.gas = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall param1.
         * @member {number|Long} param1
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.param1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall param2.
         * @member {number|Long} param2
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.param2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptCall createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.createdAt = null;

        /**
         * ReceiptCall publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptCall
         * @instance
         */
        ReceiptCall.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptCall instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptCall
         * @static
         * @param {receipts.IReceiptCall=} [properties] Properties to set
         * @returns {receipts.ReceiptCall} ReceiptCall instance
         */
        ReceiptCall.create = function create(properties) {
            return new ReceiptCall(properties);
        };

        /**
         * Encodes the specified ReceiptCall message. Does not implicitly {@link receipts.ReceiptCall.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptCall
         * @static
         * @param {receipts.IReceiptCall} message ReceiptCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.toContractId != null && Object.hasOwnProperty.call(message, "toContractId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.toContractId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.assetId);
            if (message.gas != null && Object.hasOwnProperty.call(message, "gas"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.gas);
            if (message.param1 != null && Object.hasOwnProperty.call(message, "param1"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.param1);
            if (message.param2 != null && Object.hasOwnProperty.call(message, "param2"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.param2);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptCall message, length delimited. Does not implicitly {@link receipts.ReceiptCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptCall
         * @static
         * @param {receipts.IReceiptCall} message ReceiptCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptCall message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptCall} ReceiptCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.toContractId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.amount = reader.int64();
                        break;
                    }
                case 6: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 7: {
                        message.gas = reader.int64();
                        break;
                    }
                case 8: {
                        message.param1 = reader.int64();
                        break;
                    }
                case 9: {
                        message.param2 = reader.int64();
                        break;
                    }
                case 10: {
                        message.pc = reader.int64();
                        break;
                    }
                case 11: {
                        message.is = reader.int64();
                        break;
                    }
                case 12: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptCall} ReceiptCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptCall message.
         * @function verify
         * @memberof receipts.ReceiptCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.toContractId != null && message.hasOwnProperty("toContractId"))
                if (!(message.toContractId && typeof message.toContractId.length === "number" || $util.isString(message.toContractId)))
                    return "toContractId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.gas != null && message.hasOwnProperty("gas"))
                if (!$util.isInteger(message.gas) && !(message.gas && $util.isInteger(message.gas.low) && $util.isInteger(message.gas.high)))
                    return "gas: integer|Long expected";
            if (message.param1 != null && message.hasOwnProperty("param1"))
                if (!$util.isInteger(message.param1) && !(message.param1 && $util.isInteger(message.param1.low) && $util.isInteger(message.param1.high)))
                    return "param1: integer|Long expected";
            if (message.param2 != null && message.hasOwnProperty("param2"))
                if (!$util.isInteger(message.param2) && !(message.param2 && $util.isInteger(message.param2.low) && $util.isInteger(message.param2.high)))
                    return "param2: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptCall} ReceiptCall
         */
        ReceiptCall.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptCall)
                return object;
            let message = new $root.receipts.ReceiptCall();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.toContractId != null)
                if (typeof object.toContractId === "string")
                    $util.base64.decode(object.toContractId, message.toContractId = $util.newBuffer($util.base64.length(object.toContractId)), 0);
                else if (object.toContractId.length >= 0)
                    message.toContractId = object.toContractId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.gas != null)
                if ($util.Long)
                    (message.gas = $util.Long.fromValue(object.gas)).unsigned = false;
                else if (typeof object.gas === "string")
                    message.gas = parseInt(object.gas, 10);
                else if (typeof object.gas === "number")
                    message.gas = object.gas;
                else if (typeof object.gas === "object")
                    message.gas = new $util.LongBits(object.gas.low >>> 0, object.gas.high >>> 0).toNumber();
            if (object.param1 != null)
                if ($util.Long)
                    (message.param1 = $util.Long.fromValue(object.param1)).unsigned = false;
                else if (typeof object.param1 === "string")
                    message.param1 = parseInt(object.param1, 10);
                else if (typeof object.param1 === "number")
                    message.param1 = object.param1;
                else if (typeof object.param1 === "object")
                    message.param1 = new $util.LongBits(object.param1.low >>> 0, object.param1.high >>> 0).toNumber();
            if (object.param2 != null)
                if ($util.Long)
                    (message.param2 = $util.Long.fromValue(object.param2)).unsigned = false;
                else if (typeof object.param2 === "string")
                    message.param2 = parseInt(object.param2, 10);
                else if (typeof object.param2 === "number")
                    message.param2 = object.param2;
                else if (typeof object.param2 === "object")
                    message.param2 = new $util.LongBits(object.param2.low >>> 0, object.param2.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptCall.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptCall.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptCall
         * @static
         * @param {receipts.ReceiptCall} message ReceiptCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.toContractId = "";
                else {
                    object.toContractId = [];
                    if (options.bytes !== Array)
                        object.toContractId = $util.newBuffer(object.toContractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.gas = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gas = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.param1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.param1 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.param2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.param2 = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.toContractId != null && message.hasOwnProperty("toContractId"))
                object.toContractId = options.bytes === String ? $util.base64.encode(message.toContractId, 0, message.toContractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.toContractId) : message.toContractId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.gas != null && message.hasOwnProperty("gas"))
                if (typeof message.gas === "number")
                    object.gas = options.longs === String ? String(message.gas) : message.gas;
                else
                    object.gas = options.longs === String ? $util.Long.prototype.toString.call(message.gas) : options.longs === Number ? new $util.LongBits(message.gas.low >>> 0, message.gas.high >>> 0).toNumber() : message.gas;
            if (message.param1 != null && message.hasOwnProperty("param1"))
                if (typeof message.param1 === "number")
                    object.param1 = options.longs === String ? String(message.param1) : message.param1;
                else
                    object.param1 = options.longs === String ? $util.Long.prototype.toString.call(message.param1) : options.longs === Number ? new $util.LongBits(message.param1.low >>> 0, message.param1.high >>> 0).toNumber() : message.param1;
            if (message.param2 != null && message.hasOwnProperty("param2"))
                if (typeof message.param2 === "number")
                    object.param2 = options.longs === String ? String(message.param2) : message.param2;
                else
                    object.param2 = options.longs === String ? $util.Long.prototype.toString.call(message.param2) : options.longs === Number ? new $util.LongBits(message.param2.low >>> 0, message.param2.high >>> 0).toNumber() : message.param2;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptCall to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptCall
         * @function getTypeUrl
         * @memberof receipts.ReceiptCall
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptCall";
        };

        return ReceiptCall;
    })();

    receipts.ReceiptReturn = (function() {

        /**
         * Properties of a ReceiptReturn.
         * @memberof receipts
         * @interface IReceiptReturn
         * @property {string|null} [subject] ReceiptReturn subject
         * @property {Uint8Array|null} [txId] ReceiptReturn txId
         * @property {Uint8Array|null} [contractId] ReceiptReturn contractId
         * @property {number|Long|null} [val] ReceiptReturn val
         * @property {number|Long|null} [pc] ReceiptReturn pc
         * @property {number|Long|null} [is] ReceiptReturn is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptReturn createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptReturn publishedAt
         */

        /**
         * Constructs a new ReceiptReturn.
         * @memberof receipts
         * @classdesc Represents a ReceiptReturn.
         * @implements IReceiptReturn
         * @constructor
         * @param {receipts.IReceiptReturn=} [properties] Properties to set
         */
        function ReceiptReturn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptReturn subject.
         * @member {string} subject
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.subject = "";

        /**
         * ReceiptReturn txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptReturn contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptReturn val.
         * @member {number|Long} val
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturn pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturn is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturn createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.createdAt = null;

        /**
         * ReceiptReturn publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptReturn
         * @instance
         */
        ReceiptReturn.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptReturn instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {receipts.IReceiptReturn=} [properties] Properties to set
         * @returns {receipts.ReceiptReturn} ReceiptReturn instance
         */
        ReceiptReturn.create = function create(properties) {
            return new ReceiptReturn(properties);
        };

        /**
         * Encodes the specified ReceiptReturn message. Does not implicitly {@link receipts.ReceiptReturn.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {receipts.IReceiptReturn} message ReceiptReturn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptReturn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.val);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptReturn message, length delimited. Does not implicitly {@link receipts.ReceiptReturn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {receipts.IReceiptReturn} message ReceiptReturn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptReturn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptReturn message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptReturn} ReceiptReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptReturn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptReturn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.val = reader.int64();
                        break;
                    }
                case 5: {
                        message.pc = reader.int64();
                        break;
                    }
                case 6: {
                        message.is = reader.int64();
                        break;
                    }
                case 7: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptReturn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptReturn} ReceiptReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptReturn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptReturn message.
         * @function verify
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptReturn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptReturn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptReturn} ReceiptReturn
         */
        ReceiptReturn.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptReturn)
                return object;
            let message = new $root.receipts.ReceiptReturn();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptReturn.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptReturn.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptReturn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {receipts.ReceiptReturn} message ReceiptReturn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptReturn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptReturn to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptReturn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptReturn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptReturn
         * @function getTypeUrl
         * @memberof receipts.ReceiptReturn
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptReturn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptReturn";
        };

        return ReceiptReturn;
    })();

    receipts.ReceiptReturnData = (function() {

        /**
         * Properties of a ReceiptReturnData.
         * @memberof receipts
         * @interface IReceiptReturnData
         * @property {string|null} [subject] ReceiptReturnData subject
         * @property {Uint8Array|null} [txId] ReceiptReturnData txId
         * @property {Uint8Array|null} [contractId] ReceiptReturnData contractId
         * @property {number|Long|null} [ptr] ReceiptReturnData ptr
         * @property {number|Long|null} [len] ReceiptReturnData len
         * @property {Uint8Array|null} [digest] ReceiptReturnData digest
         * @property {number|Long|null} [pc] ReceiptReturnData pc
         * @property {number|Long|null} [is] ReceiptReturnData is
         * @property {Uint8Array|null} [data] ReceiptReturnData data
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptReturnData createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptReturnData publishedAt
         */

        /**
         * Constructs a new ReceiptReturnData.
         * @memberof receipts
         * @classdesc Represents a ReceiptReturnData.
         * @implements IReceiptReturnData
         * @constructor
         * @param {receipts.IReceiptReturnData=} [properties] Properties to set
         */
        function ReceiptReturnData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptReturnData subject.
         * @member {string} subject
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.subject = "";

        /**
         * ReceiptReturnData txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptReturnData contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptReturnData ptr.
         * @member {number|Long} ptr
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.ptr = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturnData len.
         * @member {number|Long} len
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.len = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturnData digest.
         * @member {Uint8Array} digest
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.digest = $util.newBuffer([]);

        /**
         * ReceiptReturnData pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturnData is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptReturnData data.
         * @member {Uint8Array} data
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.data = $util.newBuffer([]);

        /**
         * ReceiptReturnData createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.createdAt = null;

        /**
         * ReceiptReturnData publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptReturnData
         * @instance
         */
        ReceiptReturnData.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptReturnData instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {receipts.IReceiptReturnData=} [properties] Properties to set
         * @returns {receipts.ReceiptReturnData} ReceiptReturnData instance
         */
        ReceiptReturnData.create = function create(properties) {
            return new ReceiptReturnData(properties);
        };

        /**
         * Encodes the specified ReceiptReturnData message. Does not implicitly {@link receipts.ReceiptReturnData.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {receipts.IReceiptReturnData} message ReceiptReturnData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptReturnData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.ptr != null && Object.hasOwnProperty.call(message, "ptr"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ptr);
            if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.len);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.digest);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.is);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.data);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptReturnData message, length delimited. Does not implicitly {@link receipts.ReceiptReturnData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {receipts.IReceiptReturnData} message ReceiptReturnData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptReturnData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptReturnData message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptReturnData} ReceiptReturnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptReturnData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptReturnData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.ptr = reader.int64();
                        break;
                    }
                case 5: {
                        message.len = reader.int64();
                        break;
                    }
                case 6: {
                        message.digest = reader.bytes();
                        break;
                    }
                case 7: {
                        message.pc = reader.int64();
                        break;
                    }
                case 8: {
                        message.is = reader.int64();
                        break;
                    }
                case 9: {
                        message.data = reader.bytes();
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptReturnData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptReturnData} ReceiptReturnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptReturnData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptReturnData message.
         * @function verify
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptReturnData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.ptr != null && message.hasOwnProperty("ptr"))
                if (!$util.isInteger(message.ptr) && !(message.ptr && $util.isInteger(message.ptr.low) && $util.isInteger(message.ptr.high)))
                    return "ptr: integer|Long expected";
            if (message.len != null && message.hasOwnProperty("len"))
                if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                    return "len: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!(message.digest && typeof message.digest.length === "number" || $util.isString(message.digest)))
                    return "digest: buffer expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptReturnData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptReturnData} ReceiptReturnData
         */
        ReceiptReturnData.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptReturnData)
                return object;
            let message = new $root.receipts.ReceiptReturnData();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.ptr != null)
                if ($util.Long)
                    (message.ptr = $util.Long.fromValue(object.ptr)).unsigned = false;
                else if (typeof object.ptr === "string")
                    message.ptr = parseInt(object.ptr, 10);
                else if (typeof object.ptr === "number")
                    message.ptr = object.ptr;
                else if (typeof object.ptr === "object")
                    message.ptr = new $util.LongBits(object.ptr.low >>> 0, object.ptr.high >>> 0).toNumber();
            if (object.len != null)
                if ($util.Long)
                    (message.len = $util.Long.fromValue(object.len)).unsigned = false;
                else if (typeof object.len === "string")
                    message.len = parseInt(object.len, 10);
                else if (typeof object.len === "number")
                    message.len = object.len;
                else if (typeof object.len === "object")
                    message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber();
            if (object.digest != null)
                if (typeof object.digest === "string")
                    $util.base64.decode(object.digest, message.digest = $util.newBuffer($util.base64.length(object.digest)), 0);
                else if (object.digest.length >= 0)
                    message.digest = object.digest;
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptReturnData.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptReturnData.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptReturnData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {receipts.ReceiptReturnData} message ReceiptReturnData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptReturnData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ptr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ptr = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.len = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.digest = "";
                else {
                    object.digest = [];
                    if (options.bytes !== Array)
                        object.digest = $util.newBuffer(object.digest);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.ptr != null && message.hasOwnProperty("ptr"))
                if (typeof message.ptr === "number")
                    object.ptr = options.longs === String ? String(message.ptr) : message.ptr;
                else
                    object.ptr = options.longs === String ? $util.Long.prototype.toString.call(message.ptr) : options.longs === Number ? new $util.LongBits(message.ptr.low >>> 0, message.ptr.high >>> 0).toNumber() : message.ptr;
            if (message.len != null && message.hasOwnProperty("len"))
                if (typeof message.len === "number")
                    object.len = options.longs === String ? String(message.len) : message.len;
                else
                    object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber() : message.len;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = options.bytes === String ? $util.base64.encode(message.digest, 0, message.digest.length) : options.bytes === Array ? Array.prototype.slice.call(message.digest) : message.digest;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptReturnData to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptReturnData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptReturnData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptReturnData
         * @function getTypeUrl
         * @memberof receipts.ReceiptReturnData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptReturnData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptReturnData";
        };

        return ReceiptReturnData;
    })();

    receipts.ReceiptPanic = (function() {

        /**
         * Properties of a ReceiptPanic.
         * @memberof receipts
         * @interface IReceiptPanic
         * @property {string|null} [subject] ReceiptPanic subject
         * @property {Uint8Array|null} [txId] ReceiptPanic txId
         * @property {Uint8Array|null} [contractId] ReceiptPanic contractId
         * @property {number|Long|null} [reason] ReceiptPanic reason
         * @property {number|Long|null} [pc] ReceiptPanic pc
         * @property {number|Long|null} [is] ReceiptPanic is
         * @property {Uint8Array|null} [panicContractId] ReceiptPanic panicContractId
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptPanic createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptPanic publishedAt
         */

        /**
         * Constructs a new ReceiptPanic.
         * @memberof receipts
         * @classdesc Represents a ReceiptPanic.
         * @implements IReceiptPanic
         * @constructor
         * @param {receipts.IReceiptPanic=} [properties] Properties to set
         */
        function ReceiptPanic(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptPanic subject.
         * @member {string} subject
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.subject = "";

        /**
         * ReceiptPanic txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptPanic contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptPanic reason.
         * @member {number|Long} reason
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.reason = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptPanic pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptPanic is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptPanic panicContractId.
         * @member {Uint8Array} panicContractId
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.panicContractId = $util.newBuffer([]);

        /**
         * ReceiptPanic createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.createdAt = null;

        /**
         * ReceiptPanic publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptPanic
         * @instance
         */
        ReceiptPanic.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptPanic instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {receipts.IReceiptPanic=} [properties] Properties to set
         * @returns {receipts.ReceiptPanic} ReceiptPanic instance
         */
        ReceiptPanic.create = function create(properties) {
            return new ReceiptPanic(properties);
        };

        /**
         * Encodes the specified ReceiptPanic message. Does not implicitly {@link receipts.ReceiptPanic.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {receipts.IReceiptPanic} message ReceiptPanic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptPanic.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reason);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.is);
            if (message.panicContractId != null && Object.hasOwnProperty.call(message, "panicContractId"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.panicContractId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptPanic message, length delimited. Does not implicitly {@link receipts.ReceiptPanic.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {receipts.IReceiptPanic} message ReceiptPanic message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptPanic.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptPanic message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptPanic} ReceiptPanic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptPanic.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptPanic();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.reason = reader.int64();
                        break;
                    }
                case 5: {
                        message.pc = reader.int64();
                        break;
                    }
                case 6: {
                        message.is = reader.int64();
                        break;
                    }
                case 7: {
                        message.panicContractId = reader.bytes();
                        break;
                    }
                case 8: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptPanic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptPanic} ReceiptPanic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptPanic.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptPanic message.
         * @function verify
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptPanic.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isInteger(message.reason) && !(message.reason && $util.isInteger(message.reason.low) && $util.isInteger(message.reason.high)))
                    return "reason: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.panicContractId != null && message.hasOwnProperty("panicContractId"))
                if (!(message.panicContractId && typeof message.panicContractId.length === "number" || $util.isString(message.panicContractId)))
                    return "panicContractId: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptPanic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptPanic} ReceiptPanic
         */
        ReceiptPanic.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptPanic)
                return object;
            let message = new $root.receipts.ReceiptPanic();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.reason != null)
                if ($util.Long)
                    (message.reason = $util.Long.fromValue(object.reason)).unsigned = false;
                else if (typeof object.reason === "string")
                    message.reason = parseInt(object.reason, 10);
                else if (typeof object.reason === "number")
                    message.reason = object.reason;
                else if (typeof object.reason === "object")
                    message.reason = new $util.LongBits(object.reason.low >>> 0, object.reason.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.panicContractId != null)
                if (typeof object.panicContractId === "string")
                    $util.base64.decode(object.panicContractId, message.panicContractId = $util.newBuffer($util.base64.length(object.panicContractId)), 0);
                else if (object.panicContractId.length >= 0)
                    message.panicContractId = object.panicContractId;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptPanic.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptPanic.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptPanic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {receipts.ReceiptPanic} message ReceiptPanic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptPanic.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.reason = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reason = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.panicContractId = "";
                else {
                    object.panicContractId = [];
                    if (options.bytes !== Array)
                        object.panicContractId = $util.newBuffer(object.panicContractId);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (typeof message.reason === "number")
                    object.reason = options.longs === String ? String(message.reason) : message.reason;
                else
                    object.reason = options.longs === String ? $util.Long.prototype.toString.call(message.reason) : options.longs === Number ? new $util.LongBits(message.reason.low >>> 0, message.reason.high >>> 0).toNumber() : message.reason;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.panicContractId != null && message.hasOwnProperty("panicContractId"))
                object.panicContractId = options.bytes === String ? $util.base64.encode(message.panicContractId, 0, message.panicContractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.panicContractId) : message.panicContractId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptPanic to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptPanic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptPanic.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptPanic
         * @function getTypeUrl
         * @memberof receipts.ReceiptPanic
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptPanic.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptPanic";
        };

        return ReceiptPanic;
    })();

    receipts.ReceiptRevert = (function() {

        /**
         * Properties of a ReceiptRevert.
         * @memberof receipts
         * @interface IReceiptRevert
         * @property {string|null} [subject] ReceiptRevert subject
         * @property {Uint8Array|null} [txId] ReceiptRevert txId
         * @property {Uint8Array|null} [contractId] ReceiptRevert contractId
         * @property {number|Long|null} [val] ReceiptRevert val
         * @property {number|Long|null} [pc] ReceiptRevert pc
         * @property {number|Long|null} [is] ReceiptRevert is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptRevert createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptRevert publishedAt
         */

        /**
         * Constructs a new ReceiptRevert.
         * @memberof receipts
         * @classdesc Represents a ReceiptRevert.
         * @implements IReceiptRevert
         * @constructor
         * @param {receipts.IReceiptRevert=} [properties] Properties to set
         */
        function ReceiptRevert(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptRevert subject.
         * @member {string} subject
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.subject = "";

        /**
         * ReceiptRevert txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptRevert contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptRevert val.
         * @member {number|Long} val
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptRevert pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptRevert is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptRevert createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.createdAt = null;

        /**
         * ReceiptRevert publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptRevert
         * @instance
         */
        ReceiptRevert.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptRevert instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {receipts.IReceiptRevert=} [properties] Properties to set
         * @returns {receipts.ReceiptRevert} ReceiptRevert instance
         */
        ReceiptRevert.create = function create(properties) {
            return new ReceiptRevert(properties);
        };

        /**
         * Encodes the specified ReceiptRevert message. Does not implicitly {@link receipts.ReceiptRevert.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {receipts.IReceiptRevert} message ReceiptRevert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptRevert.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.val);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptRevert message, length delimited. Does not implicitly {@link receipts.ReceiptRevert.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {receipts.IReceiptRevert} message ReceiptRevert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptRevert.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptRevert message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptRevert} ReceiptRevert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptRevert.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptRevert();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.val = reader.int64();
                        break;
                    }
                case 5: {
                        message.pc = reader.int64();
                        break;
                    }
                case 6: {
                        message.is = reader.int64();
                        break;
                    }
                case 7: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptRevert message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptRevert} ReceiptRevert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptRevert.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptRevert message.
         * @function verify
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptRevert.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptRevert message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptRevert} ReceiptRevert
         */
        ReceiptRevert.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptRevert)
                return object;
            let message = new $root.receipts.ReceiptRevert();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptRevert.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptRevert.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptRevert message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {receipts.ReceiptRevert} message ReceiptRevert
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptRevert.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptRevert to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptRevert
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptRevert.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptRevert
         * @function getTypeUrl
         * @memberof receipts.ReceiptRevert
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptRevert.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptRevert";
        };

        return ReceiptRevert;
    })();

    receipts.ReceiptLog = (function() {

        /**
         * Properties of a ReceiptLog.
         * @memberof receipts
         * @interface IReceiptLog
         * @property {string|null} [subject] ReceiptLog subject
         * @property {Uint8Array|null} [txId] ReceiptLog txId
         * @property {Uint8Array|null} [contractId] ReceiptLog contractId
         * @property {number|Long|null} [ra] ReceiptLog ra
         * @property {number|Long|null} [rb] ReceiptLog rb
         * @property {number|Long|null} [rc] ReceiptLog rc
         * @property {number|Long|null} [rd] ReceiptLog rd
         * @property {number|Long|null} [pc] ReceiptLog pc
         * @property {number|Long|null} [is] ReceiptLog is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptLog createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptLog publishedAt
         */

        /**
         * Constructs a new ReceiptLog.
         * @memberof receipts
         * @classdesc Represents a ReceiptLog.
         * @implements IReceiptLog
         * @constructor
         * @param {receipts.IReceiptLog=} [properties] Properties to set
         */
        function ReceiptLog(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptLog subject.
         * @member {string} subject
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.subject = "";

        /**
         * ReceiptLog txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptLog contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptLog ra.
         * @member {number|Long} ra
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.ra = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog rb.
         * @member {number|Long} rb
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.rb = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog rc.
         * @member {number|Long} rc
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.rc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog rd.
         * @member {number|Long} rd
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.rd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLog createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.createdAt = null;

        /**
         * ReceiptLog publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptLog
         * @instance
         */
        ReceiptLog.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptLog instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptLog
         * @static
         * @param {receipts.IReceiptLog=} [properties] Properties to set
         * @returns {receipts.ReceiptLog} ReceiptLog instance
         */
        ReceiptLog.create = function create(properties) {
            return new ReceiptLog(properties);
        };

        /**
         * Encodes the specified ReceiptLog message. Does not implicitly {@link receipts.ReceiptLog.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptLog
         * @static
         * @param {receipts.IReceiptLog} message ReceiptLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.ra != null && Object.hasOwnProperty.call(message, "ra"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ra);
            if (message.rb != null && Object.hasOwnProperty.call(message, "rb"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.rb);
            if (message.rc != null && Object.hasOwnProperty.call(message, "rc"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.rc);
            if (message.rd != null && Object.hasOwnProperty.call(message, "rd"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.rd);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptLog message, length delimited. Does not implicitly {@link receipts.ReceiptLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptLog
         * @static
         * @param {receipts.IReceiptLog} message ReceiptLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptLog message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptLog} ReceiptLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptLog();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.ra = reader.int64();
                        break;
                    }
                case 5: {
                        message.rb = reader.int64();
                        break;
                    }
                case 6: {
                        message.rc = reader.int64();
                        break;
                    }
                case 7: {
                        message.rd = reader.int64();
                        break;
                    }
                case 8: {
                        message.pc = reader.int64();
                        break;
                    }
                case 9: {
                        message.is = reader.int64();
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptLog} ReceiptLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptLog message.
         * @function verify
         * @memberof receipts.ReceiptLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.ra != null && message.hasOwnProperty("ra"))
                if (!$util.isInteger(message.ra) && !(message.ra && $util.isInteger(message.ra.low) && $util.isInteger(message.ra.high)))
                    return "ra: integer|Long expected";
            if (message.rb != null && message.hasOwnProperty("rb"))
                if (!$util.isInteger(message.rb) && !(message.rb && $util.isInteger(message.rb.low) && $util.isInteger(message.rb.high)))
                    return "rb: integer|Long expected";
            if (message.rc != null && message.hasOwnProperty("rc"))
                if (!$util.isInteger(message.rc) && !(message.rc && $util.isInteger(message.rc.low) && $util.isInteger(message.rc.high)))
                    return "rc: integer|Long expected";
            if (message.rd != null && message.hasOwnProperty("rd"))
                if (!$util.isInteger(message.rd) && !(message.rd && $util.isInteger(message.rd.low) && $util.isInteger(message.rd.high)))
                    return "rd: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptLog} ReceiptLog
         */
        ReceiptLog.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptLog)
                return object;
            let message = new $root.receipts.ReceiptLog();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.ra != null)
                if ($util.Long)
                    (message.ra = $util.Long.fromValue(object.ra)).unsigned = false;
                else if (typeof object.ra === "string")
                    message.ra = parseInt(object.ra, 10);
                else if (typeof object.ra === "number")
                    message.ra = object.ra;
                else if (typeof object.ra === "object")
                    message.ra = new $util.LongBits(object.ra.low >>> 0, object.ra.high >>> 0).toNumber();
            if (object.rb != null)
                if ($util.Long)
                    (message.rb = $util.Long.fromValue(object.rb)).unsigned = false;
                else if (typeof object.rb === "string")
                    message.rb = parseInt(object.rb, 10);
                else if (typeof object.rb === "number")
                    message.rb = object.rb;
                else if (typeof object.rb === "object")
                    message.rb = new $util.LongBits(object.rb.low >>> 0, object.rb.high >>> 0).toNumber();
            if (object.rc != null)
                if ($util.Long)
                    (message.rc = $util.Long.fromValue(object.rc)).unsigned = false;
                else if (typeof object.rc === "string")
                    message.rc = parseInt(object.rc, 10);
                else if (typeof object.rc === "number")
                    message.rc = object.rc;
                else if (typeof object.rc === "object")
                    message.rc = new $util.LongBits(object.rc.low >>> 0, object.rc.high >>> 0).toNumber();
            if (object.rd != null)
                if ($util.Long)
                    (message.rd = $util.Long.fromValue(object.rd)).unsigned = false;
                else if (typeof object.rd === "string")
                    message.rd = parseInt(object.rd, 10);
                else if (typeof object.rd === "number")
                    message.rd = object.rd;
                else if (typeof object.rd === "object")
                    message.rd = new $util.LongBits(object.rd.low >>> 0, object.rd.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptLog.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptLog.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptLog
         * @static
         * @param {receipts.ReceiptLog} message ReceiptLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ra = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ra = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rb = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rb = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rd = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.ra != null && message.hasOwnProperty("ra"))
                if (typeof message.ra === "number")
                    object.ra = options.longs === String ? String(message.ra) : message.ra;
                else
                    object.ra = options.longs === String ? $util.Long.prototype.toString.call(message.ra) : options.longs === Number ? new $util.LongBits(message.ra.low >>> 0, message.ra.high >>> 0).toNumber() : message.ra;
            if (message.rb != null && message.hasOwnProperty("rb"))
                if (typeof message.rb === "number")
                    object.rb = options.longs === String ? String(message.rb) : message.rb;
                else
                    object.rb = options.longs === String ? $util.Long.prototype.toString.call(message.rb) : options.longs === Number ? new $util.LongBits(message.rb.low >>> 0, message.rb.high >>> 0).toNumber() : message.rb;
            if (message.rc != null && message.hasOwnProperty("rc"))
                if (typeof message.rc === "number")
                    object.rc = options.longs === String ? String(message.rc) : message.rc;
                else
                    object.rc = options.longs === String ? $util.Long.prototype.toString.call(message.rc) : options.longs === Number ? new $util.LongBits(message.rc.low >>> 0, message.rc.high >>> 0).toNumber() : message.rc;
            if (message.rd != null && message.hasOwnProperty("rd"))
                if (typeof message.rd === "number")
                    object.rd = options.longs === String ? String(message.rd) : message.rd;
                else
                    object.rd = options.longs === String ? $util.Long.prototype.toString.call(message.rd) : options.longs === Number ? new $util.LongBits(message.rd.low >>> 0, message.rd.high >>> 0).toNumber() : message.rd;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptLog to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptLog
         * @function getTypeUrl
         * @memberof receipts.ReceiptLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptLog";
        };

        return ReceiptLog;
    })();

    receipts.ReceiptLogData = (function() {

        /**
         * Properties of a ReceiptLogData.
         * @memberof receipts
         * @interface IReceiptLogData
         * @property {string|null} [subject] ReceiptLogData subject
         * @property {Uint8Array|null} [txId] ReceiptLogData txId
         * @property {Uint8Array|null} [contractId] ReceiptLogData contractId
         * @property {number|Long|null} [ra] ReceiptLogData ra
         * @property {number|Long|null} [rb] ReceiptLogData rb
         * @property {number|Long|null} [ptr] ReceiptLogData ptr
         * @property {number|Long|null} [len] ReceiptLogData len
         * @property {Uint8Array|null} [digest] ReceiptLogData digest
         * @property {number|Long|null} [pc] ReceiptLogData pc
         * @property {number|Long|null} [is] ReceiptLogData is
         * @property {Uint8Array|null} [data] ReceiptLogData data
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptLogData createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptLogData publishedAt
         */

        /**
         * Constructs a new ReceiptLogData.
         * @memberof receipts
         * @classdesc Represents a ReceiptLogData.
         * @implements IReceiptLogData
         * @constructor
         * @param {receipts.IReceiptLogData=} [properties] Properties to set
         */
        function ReceiptLogData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptLogData subject.
         * @member {string} subject
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.subject = "";

        /**
         * ReceiptLogData txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptLogData contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptLogData ra.
         * @member {number|Long} ra
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.ra = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData rb.
         * @member {number|Long} rb
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.rb = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData ptr.
         * @member {number|Long} ptr
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.ptr = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData len.
         * @member {number|Long} len
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.len = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData digest.
         * @member {Uint8Array} digest
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.digest = $util.newBuffer([]);

        /**
         * ReceiptLogData pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptLogData data.
         * @member {Uint8Array} data
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.data = $util.newBuffer([]);

        /**
         * ReceiptLogData createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.createdAt = null;

        /**
         * ReceiptLogData publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptLogData
         * @instance
         */
        ReceiptLogData.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptLogData instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {receipts.IReceiptLogData=} [properties] Properties to set
         * @returns {receipts.ReceiptLogData} ReceiptLogData instance
         */
        ReceiptLogData.create = function create(properties) {
            return new ReceiptLogData(properties);
        };

        /**
         * Encodes the specified ReceiptLogData message. Does not implicitly {@link receipts.ReceiptLogData.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {receipts.IReceiptLogData} message ReceiptLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptLogData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.ra != null && Object.hasOwnProperty.call(message, "ra"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ra);
            if (message.rb != null && Object.hasOwnProperty.call(message, "rb"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.rb);
            if (message.ptr != null && Object.hasOwnProperty.call(message, "ptr"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.ptr);
            if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.len);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.digest);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.is);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.data);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptLogData message, length delimited. Does not implicitly {@link receipts.ReceiptLogData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {receipts.IReceiptLogData} message ReceiptLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptLogData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptLogData message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptLogData} ReceiptLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptLogData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptLogData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.ra = reader.int64();
                        break;
                    }
                case 5: {
                        message.rb = reader.int64();
                        break;
                    }
                case 6: {
                        message.ptr = reader.int64();
                        break;
                    }
                case 7: {
                        message.len = reader.int64();
                        break;
                    }
                case 8: {
                        message.digest = reader.bytes();
                        break;
                    }
                case 9: {
                        message.pc = reader.int64();
                        break;
                    }
                case 10: {
                        message.is = reader.int64();
                        break;
                    }
                case 11: {
                        message.data = reader.bytes();
                        break;
                    }
                case 12: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptLogData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptLogData} ReceiptLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptLogData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptLogData message.
         * @function verify
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptLogData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.ra != null && message.hasOwnProperty("ra"))
                if (!$util.isInteger(message.ra) && !(message.ra && $util.isInteger(message.ra.low) && $util.isInteger(message.ra.high)))
                    return "ra: integer|Long expected";
            if (message.rb != null && message.hasOwnProperty("rb"))
                if (!$util.isInteger(message.rb) && !(message.rb && $util.isInteger(message.rb.low) && $util.isInteger(message.rb.high)))
                    return "rb: integer|Long expected";
            if (message.ptr != null && message.hasOwnProperty("ptr"))
                if (!$util.isInteger(message.ptr) && !(message.ptr && $util.isInteger(message.ptr.low) && $util.isInteger(message.ptr.high)))
                    return "ptr: integer|Long expected";
            if (message.len != null && message.hasOwnProperty("len"))
                if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                    return "len: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!(message.digest && typeof message.digest.length === "number" || $util.isString(message.digest)))
                    return "digest: buffer expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptLogData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptLogData} ReceiptLogData
         */
        ReceiptLogData.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptLogData)
                return object;
            let message = new $root.receipts.ReceiptLogData();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.ra != null)
                if ($util.Long)
                    (message.ra = $util.Long.fromValue(object.ra)).unsigned = false;
                else if (typeof object.ra === "string")
                    message.ra = parseInt(object.ra, 10);
                else if (typeof object.ra === "number")
                    message.ra = object.ra;
                else if (typeof object.ra === "object")
                    message.ra = new $util.LongBits(object.ra.low >>> 0, object.ra.high >>> 0).toNumber();
            if (object.rb != null)
                if ($util.Long)
                    (message.rb = $util.Long.fromValue(object.rb)).unsigned = false;
                else if (typeof object.rb === "string")
                    message.rb = parseInt(object.rb, 10);
                else if (typeof object.rb === "number")
                    message.rb = object.rb;
                else if (typeof object.rb === "object")
                    message.rb = new $util.LongBits(object.rb.low >>> 0, object.rb.high >>> 0).toNumber();
            if (object.ptr != null)
                if ($util.Long)
                    (message.ptr = $util.Long.fromValue(object.ptr)).unsigned = false;
                else if (typeof object.ptr === "string")
                    message.ptr = parseInt(object.ptr, 10);
                else if (typeof object.ptr === "number")
                    message.ptr = object.ptr;
                else if (typeof object.ptr === "object")
                    message.ptr = new $util.LongBits(object.ptr.low >>> 0, object.ptr.high >>> 0).toNumber();
            if (object.len != null)
                if ($util.Long)
                    (message.len = $util.Long.fromValue(object.len)).unsigned = false;
                else if (typeof object.len === "string")
                    message.len = parseInt(object.len, 10);
                else if (typeof object.len === "number")
                    message.len = object.len;
                else if (typeof object.len === "object")
                    message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber();
            if (object.digest != null)
                if (typeof object.digest === "string")
                    $util.base64.decode(object.digest, message.digest = $util.newBuffer($util.base64.length(object.digest)), 0);
                else if (object.digest.length >= 0)
                    message.digest = object.digest;
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptLogData.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptLogData.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptLogData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {receipts.ReceiptLogData} message ReceiptLogData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptLogData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ra = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ra = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rb = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rb = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.ptr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ptr = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.len = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.digest = "";
                else {
                    object.digest = [];
                    if (options.bytes !== Array)
                        object.digest = $util.newBuffer(object.digest);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.ra != null && message.hasOwnProperty("ra"))
                if (typeof message.ra === "number")
                    object.ra = options.longs === String ? String(message.ra) : message.ra;
                else
                    object.ra = options.longs === String ? $util.Long.prototype.toString.call(message.ra) : options.longs === Number ? new $util.LongBits(message.ra.low >>> 0, message.ra.high >>> 0).toNumber() : message.ra;
            if (message.rb != null && message.hasOwnProperty("rb"))
                if (typeof message.rb === "number")
                    object.rb = options.longs === String ? String(message.rb) : message.rb;
                else
                    object.rb = options.longs === String ? $util.Long.prototype.toString.call(message.rb) : options.longs === Number ? new $util.LongBits(message.rb.low >>> 0, message.rb.high >>> 0).toNumber() : message.rb;
            if (message.ptr != null && message.hasOwnProperty("ptr"))
                if (typeof message.ptr === "number")
                    object.ptr = options.longs === String ? String(message.ptr) : message.ptr;
                else
                    object.ptr = options.longs === String ? $util.Long.prototype.toString.call(message.ptr) : options.longs === Number ? new $util.LongBits(message.ptr.low >>> 0, message.ptr.high >>> 0).toNumber() : message.ptr;
            if (message.len != null && message.hasOwnProperty("len"))
                if (typeof message.len === "number")
                    object.len = options.longs === String ? String(message.len) : message.len;
                else
                    object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber() : message.len;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = options.bytes === String ? $util.base64.encode(message.digest, 0, message.digest.length) : options.bytes === Array ? Array.prototype.slice.call(message.digest) : message.digest;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptLogData to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptLogData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptLogData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptLogData
         * @function getTypeUrl
         * @memberof receipts.ReceiptLogData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptLogData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptLogData";
        };

        return ReceiptLogData;
    })();

    receipts.ReceiptTransfer = (function() {

        /**
         * Properties of a ReceiptTransfer.
         * @memberof receipts
         * @interface IReceiptTransfer
         * @property {string|null} [subject] ReceiptTransfer subject
         * @property {Uint8Array|null} [txId] ReceiptTransfer txId
         * @property {Uint8Array|null} [contractId] ReceiptTransfer contractId
         * @property {Uint8Array|null} [toContractId] ReceiptTransfer toContractId
         * @property {number|Long|null} [amount] ReceiptTransfer amount
         * @property {Uint8Array|null} [assetId] ReceiptTransfer assetId
         * @property {number|Long|null} [pc] ReceiptTransfer pc
         * @property {number|Long|null} [is] ReceiptTransfer is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptTransfer createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptTransfer publishedAt
         */

        /**
         * Constructs a new ReceiptTransfer.
         * @memberof receipts
         * @classdesc Represents a ReceiptTransfer.
         * @implements IReceiptTransfer
         * @constructor
         * @param {receipts.IReceiptTransfer=} [properties] Properties to set
         */
        function ReceiptTransfer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptTransfer subject.
         * @member {string} subject
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.subject = "";

        /**
         * ReceiptTransfer txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptTransfer contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptTransfer toContractId.
         * @member {Uint8Array} toContractId
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.toContractId = $util.newBuffer([]);

        /**
         * ReceiptTransfer amount.
         * @member {number|Long} amount
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransfer assetId.
         * @member {Uint8Array} assetId
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.assetId = $util.newBuffer([]);

        /**
         * ReceiptTransfer pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransfer is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransfer createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.createdAt = null;

        /**
         * ReceiptTransfer publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptTransfer
         * @instance
         */
        ReceiptTransfer.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptTransfer instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {receipts.IReceiptTransfer=} [properties] Properties to set
         * @returns {receipts.ReceiptTransfer} ReceiptTransfer instance
         */
        ReceiptTransfer.create = function create(properties) {
            return new ReceiptTransfer(properties);
        };

        /**
         * Encodes the specified ReceiptTransfer message. Does not implicitly {@link receipts.ReceiptTransfer.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {receipts.IReceiptTransfer} message ReceiptTransfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptTransfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.toContractId != null && Object.hasOwnProperty.call(message, "toContractId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.toContractId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.assetId);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptTransfer message, length delimited. Does not implicitly {@link receipts.ReceiptTransfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {receipts.IReceiptTransfer} message ReceiptTransfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptTransfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptTransfer message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptTransfer} ReceiptTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptTransfer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptTransfer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.toContractId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.amount = reader.int64();
                        break;
                    }
                case 6: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 7: {
                        message.pc = reader.int64();
                        break;
                    }
                case 8: {
                        message.is = reader.int64();
                        break;
                    }
                case 9: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptTransfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptTransfer} ReceiptTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptTransfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptTransfer message.
         * @function verify
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptTransfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.toContractId != null && message.hasOwnProperty("toContractId"))
                if (!(message.toContractId && typeof message.toContractId.length === "number" || $util.isString(message.toContractId)))
                    return "toContractId: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptTransfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptTransfer} ReceiptTransfer
         */
        ReceiptTransfer.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptTransfer)
                return object;
            let message = new $root.receipts.ReceiptTransfer();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.toContractId != null)
                if (typeof object.toContractId === "string")
                    $util.base64.decode(object.toContractId, message.toContractId = $util.newBuffer($util.base64.length(object.toContractId)), 0);
                else if (object.toContractId.length >= 0)
                    message.toContractId = object.toContractId;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptTransfer.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptTransfer.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptTransfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {receipts.ReceiptTransfer} message ReceiptTransfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptTransfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.toContractId = "";
                else {
                    object.toContractId = [];
                    if (options.bytes !== Array)
                        object.toContractId = $util.newBuffer(object.toContractId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.toContractId != null && message.hasOwnProperty("toContractId"))
                object.toContractId = options.bytes === String ? $util.base64.encode(message.toContractId, 0, message.toContractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.toContractId) : message.toContractId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptTransfer to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptTransfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptTransfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptTransfer
         * @function getTypeUrl
         * @memberof receipts.ReceiptTransfer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptTransfer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptTransfer";
        };

        return ReceiptTransfer;
    })();

    receipts.ReceiptTransferOut = (function() {

        /**
         * Properties of a ReceiptTransferOut.
         * @memberof receipts
         * @interface IReceiptTransferOut
         * @property {string|null} [subject] ReceiptTransferOut subject
         * @property {Uint8Array|null} [txId] ReceiptTransferOut txId
         * @property {Uint8Array|null} [contractId] ReceiptTransferOut contractId
         * @property {Uint8Array|null} [toAddress] ReceiptTransferOut toAddress
         * @property {number|Long|null} [amount] ReceiptTransferOut amount
         * @property {Uint8Array|null} [assetId] ReceiptTransferOut assetId
         * @property {number|Long|null} [pc] ReceiptTransferOut pc
         * @property {number|Long|null} [is] ReceiptTransferOut is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptTransferOut createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptTransferOut publishedAt
         */

        /**
         * Constructs a new ReceiptTransferOut.
         * @memberof receipts
         * @classdesc Represents a ReceiptTransferOut.
         * @implements IReceiptTransferOut
         * @constructor
         * @param {receipts.IReceiptTransferOut=} [properties] Properties to set
         */
        function ReceiptTransferOut(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptTransferOut subject.
         * @member {string} subject
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.subject = "";

        /**
         * ReceiptTransferOut txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptTransferOut contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptTransferOut toAddress.
         * @member {Uint8Array} toAddress
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.toAddress = $util.newBuffer([]);

        /**
         * ReceiptTransferOut amount.
         * @member {number|Long} amount
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransferOut assetId.
         * @member {Uint8Array} assetId
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.assetId = $util.newBuffer([]);

        /**
         * ReceiptTransferOut pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransferOut is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptTransferOut createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.createdAt = null;

        /**
         * ReceiptTransferOut publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptTransferOut
         * @instance
         */
        ReceiptTransferOut.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptTransferOut instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {receipts.IReceiptTransferOut=} [properties] Properties to set
         * @returns {receipts.ReceiptTransferOut} ReceiptTransferOut instance
         */
        ReceiptTransferOut.create = function create(properties) {
            return new ReceiptTransferOut(properties);
        };

        /**
         * Encodes the specified ReceiptTransferOut message. Does not implicitly {@link receipts.ReceiptTransferOut.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {receipts.IReceiptTransferOut} message ReceiptTransferOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptTransferOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contractId);
            if (message.toAddress != null && Object.hasOwnProperty.call(message, "toAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.toAddress);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.assetId);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptTransferOut message, length delimited. Does not implicitly {@link receipts.ReceiptTransferOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {receipts.IReceiptTransferOut} message ReceiptTransferOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptTransferOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptTransferOut message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptTransferOut} ReceiptTransferOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptTransferOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptTransferOut();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.toAddress = reader.bytes();
                        break;
                    }
                case 5: {
                        message.amount = reader.int64();
                        break;
                    }
                case 6: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 7: {
                        message.pc = reader.int64();
                        break;
                    }
                case 8: {
                        message.is = reader.int64();
                        break;
                    }
                case 9: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptTransferOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptTransferOut} ReceiptTransferOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptTransferOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptTransferOut message.
         * @function verify
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptTransferOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                if (!(message.toAddress && typeof message.toAddress.length === "number" || $util.isString(message.toAddress)))
                    return "toAddress: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptTransferOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptTransferOut} ReceiptTransferOut
         */
        ReceiptTransferOut.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptTransferOut)
                return object;
            let message = new $root.receipts.ReceiptTransferOut();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.toAddress != null)
                if (typeof object.toAddress === "string")
                    $util.base64.decode(object.toAddress, message.toAddress = $util.newBuffer($util.base64.length(object.toAddress)), 0);
                else if (object.toAddress.length >= 0)
                    message.toAddress = object.toAddress;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptTransferOut.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptTransferOut.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptTransferOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {receipts.ReceiptTransferOut} message ReceiptTransferOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptTransferOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.toAddress = "";
                else {
                    object.toAddress = [];
                    if (options.bytes !== Array)
                        object.toAddress = $util.newBuffer(object.toAddress);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.toAddress != null && message.hasOwnProperty("toAddress"))
                object.toAddress = options.bytes === String ? $util.base64.encode(message.toAddress, 0, message.toAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.toAddress) : message.toAddress;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptTransferOut to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptTransferOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptTransferOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptTransferOut
         * @function getTypeUrl
         * @memberof receipts.ReceiptTransferOut
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptTransferOut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptTransferOut";
        };

        return ReceiptTransferOut;
    })();

    receipts.ReceiptScriptResult = (function() {

        /**
         * Properties of a ReceiptScriptResult.
         * @memberof receipts
         * @interface IReceiptScriptResult
         * @property {string|null} [subject] ReceiptScriptResult subject
         * @property {Uint8Array|null} [txId] ReceiptScriptResult txId
         * @property {receipts.ScriptResultType|null} [result] ReceiptScriptResult result
         * @property {number|Long|null} [gasUsed] ReceiptScriptResult gasUsed
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptScriptResult createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptScriptResult publishedAt
         */

        /**
         * Constructs a new ReceiptScriptResult.
         * @memberof receipts
         * @classdesc Represents a ReceiptScriptResult.
         * @implements IReceiptScriptResult
         * @constructor
         * @param {receipts.IReceiptScriptResult=} [properties] Properties to set
         */
        function ReceiptScriptResult(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptScriptResult subject.
         * @member {string} subject
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.subject = "";

        /**
         * ReceiptScriptResult txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptScriptResult result.
         * @member {receipts.ScriptResultType} result
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.result = 0;

        /**
         * ReceiptScriptResult gasUsed.
         * @member {number|Long} gasUsed
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptScriptResult createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.createdAt = null;

        /**
         * ReceiptScriptResult publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptScriptResult
         * @instance
         */
        ReceiptScriptResult.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptScriptResult instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {receipts.IReceiptScriptResult=} [properties] Properties to set
         * @returns {receipts.ReceiptScriptResult} ReceiptScriptResult instance
         */
        ReceiptScriptResult.create = function create(properties) {
            return new ReceiptScriptResult(properties);
        };

        /**
         * Encodes the specified ReceiptScriptResult message. Does not implicitly {@link receipts.ReceiptScriptResult.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {receipts.IReceiptScriptResult} message ReceiptScriptResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptScriptResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            if (message.gasUsed != null && Object.hasOwnProperty.call(message, "gasUsed"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gasUsed);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptScriptResult message, length delimited. Does not implicitly {@link receipts.ReceiptScriptResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {receipts.IReceiptScriptResult} message ReceiptScriptResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptScriptResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptScriptResult message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptScriptResult} ReceiptScriptResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptScriptResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptScriptResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.result = reader.int32();
                        break;
                    }
                case 4: {
                        message.gasUsed = reader.int64();
                        break;
                    }
                case 5: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptScriptResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptScriptResult} ReceiptScriptResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptScriptResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptScriptResult message.
         * @function verify
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptScriptResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                    return "gasUsed: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptScriptResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptScriptResult} ReceiptScriptResult
         */
        ReceiptScriptResult.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptScriptResult)
                return object;
            let message = new $root.receipts.ReceiptScriptResult();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            switch (object.result) {
            default:
                if (typeof object.result === "number") {
                    message.result = object.result;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.result = 0;
                break;
            case "FAILURE":
            case 1:
                message.result = 1;
                break;
            }
            if (object.gasUsed != null)
                if ($util.Long)
                    (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = false;
                else if (typeof object.gasUsed === "string")
                    message.gasUsed = parseInt(object.gasUsed, 10);
                else if (typeof object.gasUsed === "number")
                    message.gasUsed = object.gasUsed;
                else if (typeof object.gasUsed === "object")
                    message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptScriptResult.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptScriptResult.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptScriptResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {receipts.ReceiptScriptResult} message ReceiptScriptResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptScriptResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.result = options.enums === String ? "SUCCESS" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gasUsed = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.receipts.ScriptResultType[message.result] === undefined ? message.result : $root.receipts.ScriptResultType[message.result] : message.result;
            if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                if (typeof message.gasUsed === "number")
                    object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                else
                    object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber() : message.gasUsed;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptScriptResult to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptScriptResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptScriptResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptScriptResult
         * @function getTypeUrl
         * @memberof receipts.ReceiptScriptResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptScriptResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptScriptResult";
        };

        return ReceiptScriptResult;
    })();

    receipts.ReceiptMessageOut = (function() {

        /**
         * Properties of a ReceiptMessageOut.
         * @memberof receipts
         * @interface IReceiptMessageOut
         * @property {string|null} [subject] ReceiptMessageOut subject
         * @property {Uint8Array|null} [txId] ReceiptMessageOut txId
         * @property {Uint8Array|null} [senderAddress] ReceiptMessageOut senderAddress
         * @property {Uint8Array|null} [recipientAddress] ReceiptMessageOut recipientAddress
         * @property {number|Long|null} [amount] ReceiptMessageOut amount
         * @property {Uint8Array|null} [nonce] ReceiptMessageOut nonce
         * @property {number|Long|null} [len] ReceiptMessageOut len
         * @property {Uint8Array|null} [digest] ReceiptMessageOut digest
         * @property {Uint8Array|null} [data] ReceiptMessageOut data
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptMessageOut createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptMessageOut publishedAt
         */

        /**
         * Constructs a new ReceiptMessageOut.
         * @memberof receipts
         * @classdesc Represents a ReceiptMessageOut.
         * @implements IReceiptMessageOut
         * @constructor
         * @param {receipts.IReceiptMessageOut=} [properties] Properties to set
         */
        function ReceiptMessageOut(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptMessageOut subject.
         * @member {string} subject
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.subject = "";

        /**
         * ReceiptMessageOut txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptMessageOut senderAddress.
         * @member {Uint8Array} senderAddress
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.senderAddress = $util.newBuffer([]);

        /**
         * ReceiptMessageOut recipientAddress.
         * @member {Uint8Array} recipientAddress
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.recipientAddress = $util.newBuffer([]);

        /**
         * ReceiptMessageOut amount.
         * @member {number|Long} amount
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptMessageOut nonce.
         * @member {Uint8Array} nonce
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.nonce = $util.newBuffer([]);

        /**
         * ReceiptMessageOut len.
         * @member {number|Long} len
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.len = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptMessageOut digest.
         * @member {Uint8Array} digest
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.digest = $util.newBuffer([]);

        /**
         * ReceiptMessageOut data.
         * @member {Uint8Array} data
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.data = $util.newBuffer([]);

        /**
         * ReceiptMessageOut createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.createdAt = null;

        /**
         * ReceiptMessageOut publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptMessageOut
         * @instance
         */
        ReceiptMessageOut.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptMessageOut instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {receipts.IReceiptMessageOut=} [properties] Properties to set
         * @returns {receipts.ReceiptMessageOut} ReceiptMessageOut instance
         */
        ReceiptMessageOut.create = function create(properties) {
            return new ReceiptMessageOut(properties);
        };

        /**
         * Encodes the specified ReceiptMessageOut message. Does not implicitly {@link receipts.ReceiptMessageOut.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {receipts.IReceiptMessageOut} message ReceiptMessageOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMessageOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.senderAddress != null && Object.hasOwnProperty.call(message, "senderAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.senderAddress);
            if (message.recipientAddress != null && Object.hasOwnProperty.call(message, "recipientAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.recipientAddress);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.amount);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.nonce);
            if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.len);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.digest);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.data);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptMessageOut message, length delimited. Does not implicitly {@link receipts.ReceiptMessageOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {receipts.IReceiptMessageOut} message ReceiptMessageOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMessageOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptMessageOut message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptMessageOut} ReceiptMessageOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMessageOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptMessageOut();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.senderAddress = reader.bytes();
                        break;
                    }
                case 4: {
                        message.recipientAddress = reader.bytes();
                        break;
                    }
                case 5: {
                        message.amount = reader.int64();
                        break;
                    }
                case 6: {
                        message.nonce = reader.bytes();
                        break;
                    }
                case 7: {
                        message.len = reader.int64();
                        break;
                    }
                case 8: {
                        message.digest = reader.bytes();
                        break;
                    }
                case 9: {
                        message.data = reader.bytes();
                        break;
                    }
                case 10: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptMessageOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptMessageOut} ReceiptMessageOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMessageOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptMessageOut message.
         * @function verify
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptMessageOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                if (!(message.senderAddress && typeof message.senderAddress.length === "number" || $util.isString(message.senderAddress)))
                    return "senderAddress: buffer expected";
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                if (!(message.recipientAddress && typeof message.recipientAddress.length === "number" || $util.isString(message.recipientAddress)))
                    return "recipientAddress: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!(message.nonce && typeof message.nonce.length === "number" || $util.isString(message.nonce)))
                    return "nonce: buffer expected";
            if (message.len != null && message.hasOwnProperty("len"))
                if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                    return "len: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!(message.digest && typeof message.digest.length === "number" || $util.isString(message.digest)))
                    return "digest: buffer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptMessageOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptMessageOut} ReceiptMessageOut
         */
        ReceiptMessageOut.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptMessageOut)
                return object;
            let message = new $root.receipts.ReceiptMessageOut();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.senderAddress != null)
                if (typeof object.senderAddress === "string")
                    $util.base64.decode(object.senderAddress, message.senderAddress = $util.newBuffer($util.base64.length(object.senderAddress)), 0);
                else if (object.senderAddress.length >= 0)
                    message.senderAddress = object.senderAddress;
            if (object.recipientAddress != null)
                if (typeof object.recipientAddress === "string")
                    $util.base64.decode(object.recipientAddress, message.recipientAddress = $util.newBuffer($util.base64.length(object.recipientAddress)), 0);
                else if (object.recipientAddress.length >= 0)
                    message.recipientAddress = object.recipientAddress;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.nonce != null)
                if (typeof object.nonce === "string")
                    $util.base64.decode(object.nonce, message.nonce = $util.newBuffer($util.base64.length(object.nonce)), 0);
                else if (object.nonce.length >= 0)
                    message.nonce = object.nonce;
            if (object.len != null)
                if ($util.Long)
                    (message.len = $util.Long.fromValue(object.len)).unsigned = false;
                else if (typeof object.len === "string")
                    message.len = parseInt(object.len, 10);
                else if (typeof object.len === "number")
                    message.len = object.len;
                else if (typeof object.len === "object")
                    message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber();
            if (object.digest != null)
                if (typeof object.digest === "string")
                    $util.base64.decode(object.digest, message.digest = $util.newBuffer($util.base64.length(object.digest)), 0);
                else if (object.digest.length >= 0)
                    message.digest = object.digest;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptMessageOut.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptMessageOut.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptMessageOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {receipts.ReceiptMessageOut} message ReceiptMessageOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptMessageOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.senderAddress = "";
                else {
                    object.senderAddress = [];
                    if (options.bytes !== Array)
                        object.senderAddress = $util.newBuffer(object.senderAddress);
                }
                if (options.bytes === String)
                    object.recipientAddress = "";
                else {
                    object.recipientAddress = [];
                    if (options.bytes !== Array)
                        object.recipientAddress = $util.newBuffer(object.recipientAddress);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.nonce = "";
                else {
                    object.nonce = [];
                    if (options.bytes !== Array)
                        object.nonce = $util.newBuffer(object.nonce);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.len = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.digest = "";
                else {
                    object.digest = [];
                    if (options.bytes !== Array)
                        object.digest = $util.newBuffer(object.digest);
                }
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                object.senderAddress = options.bytes === String ? $util.base64.encode(message.senderAddress, 0, message.senderAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderAddress) : message.senderAddress;
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                object.recipientAddress = options.bytes === String ? $util.base64.encode(message.recipientAddress, 0, message.recipientAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipientAddress) : message.recipientAddress;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = options.bytes === String ? $util.base64.encode(message.nonce, 0, message.nonce.length) : options.bytes === Array ? Array.prototype.slice.call(message.nonce) : message.nonce;
            if (message.len != null && message.hasOwnProperty("len"))
                if (typeof message.len === "number")
                    object.len = options.longs === String ? String(message.len) : message.len;
                else
                    object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber() : message.len;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = options.bytes === String ? $util.base64.encode(message.digest, 0, message.digest.length) : options.bytes === Array ? Array.prototype.slice.call(message.digest) : message.digest;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptMessageOut to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptMessageOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptMessageOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptMessageOut
         * @function getTypeUrl
         * @memberof receipts.ReceiptMessageOut
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptMessageOut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptMessageOut";
        };

        return ReceiptMessageOut;
    })();

    receipts.ReceiptMint = (function() {

        /**
         * Properties of a ReceiptMint.
         * @memberof receipts
         * @interface IReceiptMint
         * @property {string|null} [subject] ReceiptMint subject
         * @property {Uint8Array|null} [txId] ReceiptMint txId
         * @property {Uint8Array|null} [subId] ReceiptMint subId
         * @property {Uint8Array|null} [contractId] ReceiptMint contractId
         * @property {Uint8Array|null} [assetId] ReceiptMint assetId
         * @property {number|Long|null} [val] ReceiptMint val
         * @property {number|Long|null} [pc] ReceiptMint pc
         * @property {number|Long|null} [is] ReceiptMint is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptMint createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptMint publishedAt
         */

        /**
         * Constructs a new ReceiptMint.
         * @memberof receipts
         * @classdesc Represents a ReceiptMint.
         * @implements IReceiptMint
         * @constructor
         * @param {receipts.IReceiptMint=} [properties] Properties to set
         */
        function ReceiptMint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptMint subject.
         * @member {string} subject
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.subject = "";

        /**
         * ReceiptMint txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptMint subId.
         * @member {Uint8Array} subId
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.subId = $util.newBuffer([]);

        /**
         * ReceiptMint contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptMint assetId.
         * @member {Uint8Array} assetId
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.assetId = $util.newBuffer([]);

        /**
         * ReceiptMint val.
         * @member {number|Long} val
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptMint pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptMint is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptMint createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.createdAt = null;

        /**
         * ReceiptMint publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptMint
         * @instance
         */
        ReceiptMint.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptMint instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptMint
         * @static
         * @param {receipts.IReceiptMint=} [properties] Properties to set
         * @returns {receipts.ReceiptMint} ReceiptMint instance
         */
        ReceiptMint.create = function create(properties) {
            return new ReceiptMint(properties);
        };

        /**
         * Encodes the specified ReceiptMint message. Does not implicitly {@link receipts.ReceiptMint.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptMint
         * @static
         * @param {receipts.IReceiptMint} message ReceiptMint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.subId != null && Object.hasOwnProperty.call(message, "subId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.subId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.contractId);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.assetId);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.val);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptMint message, length delimited. Does not implicitly {@link receipts.ReceiptMint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptMint
         * @static
         * @param {receipts.IReceiptMint} message ReceiptMint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptMint message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptMint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptMint} ReceiptMint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptMint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.subId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 6: {
                        message.val = reader.int64();
                        break;
                    }
                case 7: {
                        message.pc = reader.int64();
                        break;
                    }
                case 8: {
                        message.is = reader.int64();
                        break;
                    }
                case 9: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptMint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptMint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptMint} ReceiptMint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptMint message.
         * @function verify
         * @memberof receipts.ReceiptMint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptMint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.subId != null && message.hasOwnProperty("subId"))
                if (!(message.subId && typeof message.subId.length === "number" || $util.isString(message.subId)))
                    return "subId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptMint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptMint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptMint} ReceiptMint
         */
        ReceiptMint.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptMint)
                return object;
            let message = new $root.receipts.ReceiptMint();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.subId != null)
                if (typeof object.subId === "string")
                    $util.base64.decode(object.subId, message.subId = $util.newBuffer($util.base64.length(object.subId)), 0);
                else if (object.subId.length >= 0)
                    message.subId = object.subId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptMint.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptMint.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptMint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptMint
         * @static
         * @param {receipts.ReceiptMint} message ReceiptMint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptMint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.subId = "";
                else {
                    object.subId = [];
                    if (options.bytes !== Array)
                        object.subId = $util.newBuffer(object.subId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.subId != null && message.hasOwnProperty("subId"))
                object.subId = options.bytes === String ? $util.base64.encode(message.subId, 0, message.subId.length) : options.bytes === Array ? Array.prototype.slice.call(message.subId) : message.subId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptMint to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptMint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptMint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptMint
         * @function getTypeUrl
         * @memberof receipts.ReceiptMint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptMint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptMint";
        };

        return ReceiptMint;
    })();

    receipts.ReceiptBurn = (function() {

        /**
         * Properties of a ReceiptBurn.
         * @memberof receipts
         * @interface IReceiptBurn
         * @property {string|null} [subject] ReceiptBurn subject
         * @property {Uint8Array|null} [txId] ReceiptBurn txId
         * @property {Uint8Array|null} [subId] ReceiptBurn subId
         * @property {Uint8Array|null} [contractId] ReceiptBurn contractId
         * @property {Uint8Array|null} [assetId] ReceiptBurn assetId
         * @property {number|Long|null} [val] ReceiptBurn val
         * @property {number|Long|null} [pc] ReceiptBurn pc
         * @property {number|Long|null} [is] ReceiptBurn is
         * @property {google.protobuf.ITimestamp|null} [createdAt] ReceiptBurn createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ReceiptBurn publishedAt
         */

        /**
         * Constructs a new ReceiptBurn.
         * @memberof receipts
         * @classdesc Represents a ReceiptBurn.
         * @implements IReceiptBurn
         * @constructor
         * @param {receipts.IReceiptBurn=} [properties] Properties to set
         */
        function ReceiptBurn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptBurn subject.
         * @member {string} subject
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.subject = "";

        /**
         * ReceiptBurn txId.
         * @member {Uint8Array} txId
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.txId = $util.newBuffer([]);

        /**
         * ReceiptBurn subId.
         * @member {Uint8Array} subId
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.subId = $util.newBuffer([]);

        /**
         * ReceiptBurn contractId.
         * @member {Uint8Array} contractId
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.contractId = $util.newBuffer([]);

        /**
         * ReceiptBurn assetId.
         * @member {Uint8Array} assetId
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.assetId = $util.newBuffer([]);

        /**
         * ReceiptBurn val.
         * @member {number|Long} val
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptBurn pc.
         * @member {number|Long} pc
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.pc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptBurn is.
         * @member {number|Long} is
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.is = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReceiptBurn createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.createdAt = null;

        /**
         * ReceiptBurn publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof receipts.ReceiptBurn
         * @instance
         */
        ReceiptBurn.prototype.publishedAt = null;

        /**
         * Creates a new ReceiptBurn instance using the specified properties.
         * @function create
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {receipts.IReceiptBurn=} [properties] Properties to set
         * @returns {receipts.ReceiptBurn} ReceiptBurn instance
         */
        ReceiptBurn.create = function create(properties) {
            return new ReceiptBurn(properties);
        };

        /**
         * Encodes the specified ReceiptBurn message. Does not implicitly {@link receipts.ReceiptBurn.verify|verify} messages.
         * @function encode
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {receipts.IReceiptBurn} message ReceiptBurn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptBurn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.subId != null && Object.hasOwnProperty.call(message, "subId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.subId);
            if (message.contractId != null && Object.hasOwnProperty.call(message, "contractId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.contractId);
            if (message.assetId != null && Object.hasOwnProperty.call(message, "assetId"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.assetId);
            if (message.val != null && Object.hasOwnProperty.call(message, "val"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.val);
            if (message.pc != null && Object.hasOwnProperty.call(message, "pc"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.pc);
            if (message.is != null && Object.hasOwnProperty.call(message, "is"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.is);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiptBurn message, length delimited. Does not implicitly {@link receipts.ReceiptBurn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {receipts.IReceiptBurn} message ReceiptBurn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptBurn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptBurn message from the specified reader or buffer.
         * @function decode
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {receipts.ReceiptBurn} ReceiptBurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptBurn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.receipts.ReceiptBurn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.subId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.contractId = reader.bytes();
                        break;
                    }
                case 5: {
                        message.assetId = reader.bytes();
                        break;
                    }
                case 6: {
                        message.val = reader.int64();
                        break;
                    }
                case 7: {
                        message.pc = reader.int64();
                        break;
                    }
                case 8: {
                        message.is = reader.int64();
                        break;
                    }
                case 9: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptBurn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {receipts.ReceiptBurn} ReceiptBurn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptBurn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptBurn message.
         * @function verify
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptBurn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.subId != null && message.hasOwnProperty("subId"))
                if (!(message.subId && typeof message.subId.length === "number" || $util.isString(message.subId)))
                    return "subId: buffer expected";
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                if (!(message.contractId && typeof message.contractId.length === "number" || $util.isString(message.contractId)))
                    return "contractId: buffer expected";
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                if (!(message.assetId && typeof message.assetId.length === "number" || $util.isString(message.assetId)))
                    return "assetId: buffer expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (!$util.isInteger(message.pc) && !(message.pc && $util.isInteger(message.pc.low) && $util.isInteger(message.pc.high)))
                    return "pc: integer|Long expected";
            if (message.is != null && message.hasOwnProperty("is"))
                if (!$util.isInteger(message.is) && !(message.is && $util.isInteger(message.is.low) && $util.isInteger(message.is.high)))
                    return "is: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ReceiptBurn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {receipts.ReceiptBurn} ReceiptBurn
         */
        ReceiptBurn.fromObject = function fromObject(object) {
            if (object instanceof $root.receipts.ReceiptBurn)
                return object;
            let message = new $root.receipts.ReceiptBurn();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.subId != null)
                if (typeof object.subId === "string")
                    $util.base64.decode(object.subId, message.subId = $util.newBuffer($util.base64.length(object.subId)), 0);
                else if (object.subId.length >= 0)
                    message.subId = object.subId;
            if (object.contractId != null)
                if (typeof object.contractId === "string")
                    $util.base64.decode(object.contractId, message.contractId = $util.newBuffer($util.base64.length(object.contractId)), 0);
                else if (object.contractId.length >= 0)
                    message.contractId = object.contractId;
            if (object.assetId != null)
                if (typeof object.assetId === "string")
                    $util.base64.decode(object.assetId, message.assetId = $util.newBuffer($util.base64.length(object.assetId)), 0);
                else if (object.assetId.length >= 0)
                    message.assetId = object.assetId;
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            if (object.pc != null)
                if ($util.Long)
                    (message.pc = $util.Long.fromValue(object.pc)).unsigned = false;
                else if (typeof object.pc === "string")
                    message.pc = parseInt(object.pc, 10);
                else if (typeof object.pc === "number")
                    message.pc = object.pc;
                else if (typeof object.pc === "object")
                    message.pc = new $util.LongBits(object.pc.low >>> 0, object.pc.high >>> 0).toNumber();
            if (object.is != null)
                if ($util.Long)
                    (message.is = $util.Long.fromValue(object.is)).unsigned = false;
                else if (typeof object.is === "string")
                    message.is = parseInt(object.is, 10);
                else if (typeof object.is === "number")
                    message.is = object.is;
                else if (typeof object.is === "object")
                    message.is = new $util.LongBits(object.is.low >>> 0, object.is.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".receipts.ReceiptBurn.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".receipts.ReceiptBurn.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiptBurn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {receipts.ReceiptBurn} message ReceiptBurn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptBurn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.subId = "";
                else {
                    object.subId = [];
                    if (options.bytes !== Array)
                        object.subId = $util.newBuffer(object.subId);
                }
                if (options.bytes === String)
                    object.contractId = "";
                else {
                    object.contractId = [];
                    if (options.bytes !== Array)
                        object.contractId = $util.newBuffer(object.contractId);
                }
                if (options.bytes === String)
                    object.assetId = "";
                else {
                    object.assetId = [];
                    if (options.bytes !== Array)
                        object.assetId = $util.newBuffer(object.assetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.pc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pc = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.is = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.is = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.subId != null && message.hasOwnProperty("subId"))
                object.subId = options.bytes === String ? $util.base64.encode(message.subId, 0, message.subId.length) : options.bytes === Array ? Array.prototype.slice.call(message.subId) : message.subId;
            if (message.contractId != null && message.hasOwnProperty("contractId"))
                object.contractId = options.bytes === String ? $util.base64.encode(message.contractId, 0, message.contractId.length) : options.bytes === Array ? Array.prototype.slice.call(message.contractId) : message.contractId;
            if (message.assetId != null && message.hasOwnProperty("assetId"))
                object.assetId = options.bytes === String ? $util.base64.encode(message.assetId, 0, message.assetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.assetId) : message.assetId;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            if (message.pc != null && message.hasOwnProperty("pc"))
                if (typeof message.pc === "number")
                    object.pc = options.longs === String ? String(message.pc) : message.pc;
                else
                    object.pc = options.longs === String ? $util.Long.prototype.toString.call(message.pc) : options.longs === Number ? new $util.LongBits(message.pc.low >>> 0, message.pc.high >>> 0).toNumber() : message.pc;
            if (message.is != null && message.hasOwnProperty("is"))
                if (typeof message.is === "number")
                    object.is = options.longs === String ? String(message.is) : message.is;
                else
                    object.is = options.longs === String ? $util.Long.prototype.toString.call(message.is) : options.longs === Number ? new $util.LongBits(message.is.low >>> 0, message.is.high >>> 0).toNumber() : message.is;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ReceiptBurn to JSON.
         * @function toJSON
         * @memberof receipts.ReceiptBurn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptBurn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptBurn
         * @function getTypeUrl
         * @memberof receipts.ReceiptBurn
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptBurn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/receipts.ReceiptBurn";
        };

        return ReceiptBurn;
    })();

    return receipts;
})();

export const transactions = $root.transactions = (() => {

    /**
     * Namespace transactions.
     * @exports transactions
     * @namespace
     */
    const transactions = {};

    /**
     * TransactionType enum.
     * @name transactions.TransactionType
     * @enum {number}
     * @property {number} SCRIPT=0 SCRIPT value
     * @property {number} CREATE=1 CREATE value
     * @property {number} MINT=2 MINT value
     * @property {number} UPGRADE=3 UPGRADE value
     * @property {number} UPLOAD=4 UPLOAD value
     * @property {number} BLOB=5 BLOB value
     */
    transactions.TransactionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SCRIPT"] = 0;
        values[valuesById[1] = "CREATE"] = 1;
        values[valuesById[2] = "MINT"] = 2;
        values[valuesById[3] = "UPGRADE"] = 3;
        values[valuesById[4] = "UPLOAD"] = 4;
        values[valuesById[5] = "BLOB"] = 5;
        return values;
    })();

    /**
     * TransactionStatus enum.
     * @name transactions.TransactionStatus
     * @enum {number}
     * @property {number} SUCCESS=0 SUCCESS value
     * @property {number} FAILURE=1 FAILURE value
     * @property {number} SUBMITTED=2 SUBMITTED value
     */
    transactions.TransactionStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SUCCESS"] = 0;
        values[valuesById[1] = "FAILURE"] = 1;
        values[valuesById[2] = "SUBMITTED"] = 2;
        return values;
    })();

    /**
     * PolicyType enum.
     * @name transactions.PolicyType
     * @enum {number}
     * @property {number} TIP=0 TIP value
     * @property {number} WITNESS_LIMIT=1 WITNESS_LIMIT value
     * @property {number} MATURITY=2 MATURITY value
     * @property {number} MAX_FEE=3 MAX_FEE value
     */
    transactions.PolicyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TIP"] = 0;
        values[valuesById[1] = "WITNESS_LIMIT"] = 1;
        values[valuesById[2] = "MATURITY"] = 2;
        values[valuesById[3] = "MAX_FEE"] = 3;
        return values;
    })();

    transactions.Transaction = (function() {

        /**
         * Properties of a Transaction.
         * @memberof transactions
         * @interface ITransaction
         * @property {string|null} [subject] Transaction subject
         * @property {number|Long|null} [blockHeight] Transaction blockHeight
         * @property {Uint8Array|null} [txId] Transaction txId
         * @property {number|null} [txIndex] Transaction txIndex
         * @property {transactions.TransactionType|null} [type] Transaction type
         * @property {transactions.TransactionStatus|null} [status] Transaction status
         * @property {Uint8Array|null} [root] Transaction root
         * @property {number|null} [witnessIndex] Transaction witnessIndex
         * @property {Uint8Array|null} [blobId] Transaction blobId
         * @property {Array.<Uint8Array>|null} [inputAssetIds] Transaction inputAssetIds
         * @property {boolean|null} [isCreate] Transaction isCreate
         * @property {boolean|null} [isMint] Transaction isMint
         * @property {boolean|null} [isScript] Transaction isScript
         * @property {boolean|null} [isUpgrade] Transaction isUpgrade
         * @property {boolean|null} [isUpload] Transaction isUpload
         * @property {number|null} [maturity] Transaction maturity
         * @property {number|Long|null} [mintAmount] Transaction mintAmount
         * @property {Uint8Array|null} [mintAssetId] Transaction mintAssetId
         * @property {number|Long|null} [mintGasPrice] Transaction mintGasPrice
         * @property {number|null} [policyType] Transaction policyType
         * @property {Uint8Array|null} [rawPayload] Transaction rawPayload
         * @property {Uint8Array|null} [receiptsRoot] Transaction receiptsRoot
         * @property {Uint8Array|null} [salt] Transaction salt
         * @property {Uint8Array|null} [script] Transaction script
         * @property {number|Long|null} [scriptLength] Transaction scriptLength
         * @property {Uint8Array|null} [scriptData] Transaction scriptData
         * @property {number|Long|null} [scriptDataLength] Transaction scriptDataLength
         * @property {number|Long|null} [scriptGasLimit] Transaction scriptGasLimit
         * @property {number|null} [subsectionIndex] Transaction subsectionIndex
         * @property {number|null} [subsectionsNumber] Transaction subsectionsNumber
         * @property {number|null} [upgradePurpose] Transaction upgradePurpose
         * @property {number|Long|null} [storageSlotsCount] Transaction storageSlotsCount
         * @property {number|null} [proofSetCount] Transaction proofSetCount
         * @property {number|null} [witnessesCount] Transaction witnessesCount
         * @property {number|null} [inputsCount] Transaction inputsCount
         * @property {number|null} [outputsCount] Transaction outputsCount
         * @property {inputs.IInputContract|null} [inputContract] Transaction inputContract
         * @property {Array.<Uint8Array>|null} [inputContracts] Transaction inputContracts
         * @property {Array.<inputs.IInput>|null} [inputs] Transaction inputs
         * @property {outputs.IOutputContract|null} [outputContract] Transaction outputContract
         * @property {Array.<outputs.IOutput>|null} [outputs] Transaction outputs
         * @property {Array.<Uint8Array>|null} [proofSet] Transaction proofSet
         * @property {Array.<receipts.IReceipt>|null} [receipts] Transaction receipts
         * @property {Array.<transactions.IStorageSlot>|null} [storageSlots] Transaction storageSlots
         * @property {Array.<Uint8Array>|null} [witnesses] Transaction witnesses
         * @property {google.protobuf.ITimestamp|null} [createdAt] Transaction createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Transaction publishedAt
         * @property {pointers.ITransactionPointer|null} [pointer] Transaction pointer
         */

        /**
         * Constructs a new Transaction.
         * @memberof transactions
         * @classdesc Represents a Transaction.
         * @implements ITransaction
         * @constructor
         * @param {transactions.ITransaction=} [properties] Properties to set
         */
        function Transaction(properties) {
            this.inputAssetIds = [];
            this.inputContracts = [];
            this.inputs = [];
            this.outputs = [];
            this.proofSet = [];
            this.receipts = [];
            this.storageSlots = [];
            this.witnesses = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transaction subject.
         * @member {string} subject
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.subject = "";

        /**
         * Transaction blockHeight.
         * @member {number|Long} blockHeight
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction txId.
         * @member {Uint8Array} txId
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.txId = $util.newBuffer([]);

        /**
         * Transaction txIndex.
         * @member {number} txIndex
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.txIndex = 0;

        /**
         * Transaction type.
         * @member {transactions.TransactionType} type
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.type = 0;

        /**
         * Transaction status.
         * @member {transactions.TransactionStatus} status
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.status = 0;

        /**
         * Transaction root.
         * @member {Uint8Array} root
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.root = $util.newBuffer([]);

        /**
         * Transaction witnessIndex.
         * @member {number} witnessIndex
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.witnessIndex = 0;

        /**
         * Transaction blobId.
         * @member {Uint8Array} blobId
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.blobId = $util.newBuffer([]);

        /**
         * Transaction inputAssetIds.
         * @member {Array.<Uint8Array>} inputAssetIds
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.inputAssetIds = $util.emptyArray;

        /**
         * Transaction isCreate.
         * @member {boolean} isCreate
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.isCreate = false;

        /**
         * Transaction isMint.
         * @member {boolean} isMint
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.isMint = false;

        /**
         * Transaction isScript.
         * @member {boolean} isScript
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.isScript = false;

        /**
         * Transaction isUpgrade.
         * @member {boolean} isUpgrade
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.isUpgrade = false;

        /**
         * Transaction isUpload.
         * @member {boolean} isUpload
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.isUpload = false;

        /**
         * Transaction maturity.
         * @member {number} maturity
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.maturity = 0;

        /**
         * Transaction mintAmount.
         * @member {number|Long} mintAmount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.mintAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction mintAssetId.
         * @member {Uint8Array} mintAssetId
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.mintAssetId = $util.newBuffer([]);

        /**
         * Transaction mintGasPrice.
         * @member {number|Long} mintGasPrice
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.mintGasPrice = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction policyType.
         * @member {number} policyType
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.policyType = 0;

        /**
         * Transaction rawPayload.
         * @member {Uint8Array} rawPayload
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.rawPayload = $util.newBuffer([]);

        /**
         * Transaction receiptsRoot.
         * @member {Uint8Array} receiptsRoot
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.receiptsRoot = $util.newBuffer([]);

        /**
         * Transaction salt.
         * @member {Uint8Array} salt
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.salt = $util.newBuffer([]);

        /**
         * Transaction script.
         * @member {Uint8Array} script
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.script = $util.newBuffer([]);

        /**
         * Transaction scriptLength.
         * @member {number|Long} scriptLength
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.scriptLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction scriptData.
         * @member {Uint8Array} scriptData
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.scriptData = $util.newBuffer([]);

        /**
         * Transaction scriptDataLength.
         * @member {number|Long} scriptDataLength
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.scriptDataLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction scriptGasLimit.
         * @member {number|Long} scriptGasLimit
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.scriptGasLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction subsectionIndex.
         * @member {number} subsectionIndex
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.subsectionIndex = 0;

        /**
         * Transaction subsectionsNumber.
         * @member {number} subsectionsNumber
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.subsectionsNumber = 0;

        /**
         * Transaction upgradePurpose.
         * @member {number} upgradePurpose
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.upgradePurpose = 0;

        /**
         * Transaction storageSlotsCount.
         * @member {number|Long} storageSlotsCount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.storageSlotsCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Transaction proofSetCount.
         * @member {number} proofSetCount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.proofSetCount = 0;

        /**
         * Transaction witnessesCount.
         * @member {number} witnessesCount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.witnessesCount = 0;

        /**
         * Transaction inputsCount.
         * @member {number} inputsCount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.inputsCount = 0;

        /**
         * Transaction outputsCount.
         * @member {number} outputsCount
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.outputsCount = 0;

        /**
         * Transaction inputContract.
         * @member {inputs.IInputContract|null|undefined} inputContract
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.inputContract = null;

        /**
         * Transaction inputContracts.
         * @member {Array.<Uint8Array>} inputContracts
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.inputContracts = $util.emptyArray;

        /**
         * Transaction inputs.
         * @member {Array.<inputs.IInput>} inputs
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.inputs = $util.emptyArray;

        /**
         * Transaction outputContract.
         * @member {outputs.IOutputContract|null|undefined} outputContract
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.outputContract = null;

        /**
         * Transaction outputs.
         * @member {Array.<outputs.IOutput>} outputs
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.outputs = $util.emptyArray;

        /**
         * Transaction proofSet.
         * @member {Array.<Uint8Array>} proofSet
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.proofSet = $util.emptyArray;

        /**
         * Transaction receipts.
         * @member {Array.<receipts.IReceipt>} receipts
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.receipts = $util.emptyArray;

        /**
         * Transaction storageSlots.
         * @member {Array.<transactions.IStorageSlot>} storageSlots
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.storageSlots = $util.emptyArray;

        /**
         * Transaction witnesses.
         * @member {Array.<Uint8Array>} witnesses
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.witnesses = $util.emptyArray;

        /**
         * Transaction createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.createdAt = null;

        /**
         * Transaction publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.publishedAt = null;

        /**
         * Transaction pointer.
         * @member {pointers.ITransactionPointer|null|undefined} pointer
         * @memberof transactions.Transaction
         * @instance
         */
        Transaction.prototype.pointer = null;

        /**
         * Creates a new Transaction instance using the specified properties.
         * @function create
         * @memberof transactions.Transaction
         * @static
         * @param {transactions.ITransaction=} [properties] Properties to set
         * @returns {transactions.Transaction} Transaction instance
         */
        Transaction.create = function create(properties) {
            return new Transaction(properties);
        };

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link transactions.Transaction.verify|verify} messages.
         * @function encode
         * @memberof transactions.Transaction
         * @static
         * @param {transactions.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.txIndex);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
            if (message.root != null && Object.hasOwnProperty.call(message, "root"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.root);
            if (message.witnessIndex != null && Object.hasOwnProperty.call(message, "witnessIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.witnessIndex);
            if (message.blobId != null && Object.hasOwnProperty.call(message, "blobId"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.blobId);
            if (message.inputAssetIds != null && message.inputAssetIds.length)
                for (let i = 0; i < message.inputAssetIds.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.inputAssetIds[i]);
            if (message.isCreate != null && Object.hasOwnProperty.call(message, "isCreate"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isCreate);
            if (message.isMint != null && Object.hasOwnProperty.call(message, "isMint"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isMint);
            if (message.isScript != null && Object.hasOwnProperty.call(message, "isScript"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isScript);
            if (message.isUpgrade != null && Object.hasOwnProperty.call(message, "isUpgrade"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isUpgrade);
            if (message.isUpload != null && Object.hasOwnProperty.call(message, "isUpload"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.isUpload);
            if (message.maturity != null && Object.hasOwnProperty.call(message, "maturity"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.maturity);
            if (message.mintAmount != null && Object.hasOwnProperty.call(message, "mintAmount"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.mintAmount);
            if (message.mintAssetId != null && Object.hasOwnProperty.call(message, "mintAssetId"))
                writer.uint32(/* id 18, wireType 2 =*/146).bytes(message.mintAssetId);
            if (message.mintGasPrice != null && Object.hasOwnProperty.call(message, "mintGasPrice"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.mintGasPrice);
            if (message.policyType != null && Object.hasOwnProperty.call(message, "policyType"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.policyType);
            if (message.rawPayload != null && Object.hasOwnProperty.call(message, "rawPayload"))
                writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.rawPayload);
            if (message.receiptsRoot != null && Object.hasOwnProperty.call(message, "receiptsRoot"))
                writer.uint32(/* id 22, wireType 2 =*/178).bytes(message.receiptsRoot);
            if (message.salt != null && Object.hasOwnProperty.call(message, "salt"))
                writer.uint32(/* id 23, wireType 2 =*/186).bytes(message.salt);
            if (message.script != null && Object.hasOwnProperty.call(message, "script"))
                writer.uint32(/* id 24, wireType 2 =*/194).bytes(message.script);
            if (message.scriptLength != null && Object.hasOwnProperty.call(message, "scriptLength"))
                writer.uint32(/* id 25, wireType 0 =*/200).int64(message.scriptLength);
            if (message.scriptData != null && Object.hasOwnProperty.call(message, "scriptData"))
                writer.uint32(/* id 26, wireType 2 =*/210).bytes(message.scriptData);
            if (message.scriptDataLength != null && Object.hasOwnProperty.call(message, "scriptDataLength"))
                writer.uint32(/* id 27, wireType 0 =*/216).int64(message.scriptDataLength);
            if (message.scriptGasLimit != null && Object.hasOwnProperty.call(message, "scriptGasLimit"))
                writer.uint32(/* id 28, wireType 0 =*/224).int64(message.scriptGasLimit);
            if (message.subsectionIndex != null && Object.hasOwnProperty.call(message, "subsectionIndex"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.subsectionIndex);
            if (message.subsectionsNumber != null && Object.hasOwnProperty.call(message, "subsectionsNumber"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.subsectionsNumber);
            if (message.upgradePurpose != null && Object.hasOwnProperty.call(message, "upgradePurpose"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.upgradePurpose);
            if (message.storageSlotsCount != null && Object.hasOwnProperty.call(message, "storageSlotsCount"))
                writer.uint32(/* id 32, wireType 0 =*/256).int64(message.storageSlotsCount);
            if (message.proofSetCount != null && Object.hasOwnProperty.call(message, "proofSetCount"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.proofSetCount);
            if (message.witnessesCount != null && Object.hasOwnProperty.call(message, "witnessesCount"))
                writer.uint32(/* id 34, wireType 0 =*/272).int32(message.witnessesCount);
            if (message.inputsCount != null && Object.hasOwnProperty.call(message, "inputsCount"))
                writer.uint32(/* id 35, wireType 0 =*/280).int32(message.inputsCount);
            if (message.outputsCount != null && Object.hasOwnProperty.call(message, "outputsCount"))
                writer.uint32(/* id 36, wireType 0 =*/288).int32(message.outputsCount);
            if (message.inputContract != null && Object.hasOwnProperty.call(message, "inputContract"))
                $root.inputs.InputContract.encode(message.inputContract, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.inputContracts != null && message.inputContracts.length)
                for (let i = 0; i < message.inputContracts.length; ++i)
                    writer.uint32(/* id 38, wireType 2 =*/306).bytes(message.inputContracts[i]);
            if (message.inputs != null && message.inputs.length)
                for (let i = 0; i < message.inputs.length; ++i)
                    $root.inputs.Input.encode(message.inputs[i], writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            if (message.outputContract != null && Object.hasOwnProperty.call(message, "outputContract"))
                $root.outputs.OutputContract.encode(message.outputContract, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.outputs != null && message.outputs.length)
                for (let i = 0; i < message.outputs.length; ++i)
                    $root.outputs.Output.encode(message.outputs[i], writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.proofSet != null && message.proofSet.length)
                for (let i = 0; i < message.proofSet.length; ++i)
                    writer.uint32(/* id 42, wireType 2 =*/338).bytes(message.proofSet[i]);
            if (message.receipts != null && message.receipts.length)
                for (let i = 0; i < message.receipts.length; ++i)
                    $root.receipts.Receipt.encode(message.receipts[i], writer.uint32(/* id 43, wireType 2 =*/346).fork()).ldelim();
            if (message.storageSlots != null && message.storageSlots.length)
                for (let i = 0; i < message.storageSlots.length; ++i)
                    $root.transactions.StorageSlot.encode(message.storageSlots[i], writer.uint32(/* id 44, wireType 2 =*/354).fork()).ldelim();
            if (message.witnesses != null && message.witnesses.length)
                for (let i = 0; i < message.witnesses.length; ++i)
                    writer.uint32(/* id 45, wireType 2 =*/362).bytes(message.witnesses[i]);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 46, wireType 2 =*/370).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 47, wireType 2 =*/378).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.TransactionPointer.encode(message.pointer, writer.uint32(/* id 48, wireType 2 =*/386).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link transactions.Transaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transactions.Transaction
         * @static
         * @param {transactions.ITransaction} message Transaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @function decode
         * @memberof transactions.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transactions.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transactions.Transaction();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.type = reader.int32();
                        break;
                    }
                case 6: {
                        message.status = reader.int32();
                        break;
                    }
                case 7: {
                        message.root = reader.bytes();
                        break;
                    }
                case 8: {
                        message.witnessIndex = reader.int32();
                        break;
                    }
                case 9: {
                        message.blobId = reader.bytes();
                        break;
                    }
                case 10: {
                        if (!(message.inputAssetIds && message.inputAssetIds.length))
                            message.inputAssetIds = [];
                        message.inputAssetIds.push(reader.bytes());
                        break;
                    }
                case 11: {
                        message.isCreate = reader.bool();
                        break;
                    }
                case 12: {
                        message.isMint = reader.bool();
                        break;
                    }
                case 13: {
                        message.isScript = reader.bool();
                        break;
                    }
                case 14: {
                        message.isUpgrade = reader.bool();
                        break;
                    }
                case 15: {
                        message.isUpload = reader.bool();
                        break;
                    }
                case 16: {
                        message.maturity = reader.int32();
                        break;
                    }
                case 17: {
                        message.mintAmount = reader.int64();
                        break;
                    }
                case 18: {
                        message.mintAssetId = reader.bytes();
                        break;
                    }
                case 19: {
                        message.mintGasPrice = reader.int64();
                        break;
                    }
                case 20: {
                        message.policyType = reader.int32();
                        break;
                    }
                case 21: {
                        message.rawPayload = reader.bytes();
                        break;
                    }
                case 22: {
                        message.receiptsRoot = reader.bytes();
                        break;
                    }
                case 23: {
                        message.salt = reader.bytes();
                        break;
                    }
                case 24: {
                        message.script = reader.bytes();
                        break;
                    }
                case 25: {
                        message.scriptLength = reader.int64();
                        break;
                    }
                case 26: {
                        message.scriptData = reader.bytes();
                        break;
                    }
                case 27: {
                        message.scriptDataLength = reader.int64();
                        break;
                    }
                case 28: {
                        message.scriptGasLimit = reader.int64();
                        break;
                    }
                case 29: {
                        message.subsectionIndex = reader.int32();
                        break;
                    }
                case 30: {
                        message.subsectionsNumber = reader.int32();
                        break;
                    }
                case 31: {
                        message.upgradePurpose = reader.int32();
                        break;
                    }
                case 32: {
                        message.storageSlotsCount = reader.int64();
                        break;
                    }
                case 33: {
                        message.proofSetCount = reader.int32();
                        break;
                    }
                case 34: {
                        message.witnessesCount = reader.int32();
                        break;
                    }
                case 35: {
                        message.inputsCount = reader.int32();
                        break;
                    }
                case 36: {
                        message.outputsCount = reader.int32();
                        break;
                    }
                case 37: {
                        message.inputContract = $root.inputs.InputContract.decode(reader, reader.uint32());
                        break;
                    }
                case 38: {
                        if (!(message.inputContracts && message.inputContracts.length))
                            message.inputContracts = [];
                        message.inputContracts.push(reader.bytes());
                        break;
                    }
                case 39: {
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.inputs.Input.decode(reader, reader.uint32()));
                        break;
                    }
                case 40: {
                        message.outputContract = $root.outputs.OutputContract.decode(reader, reader.uint32());
                        break;
                    }
                case 41: {
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.outputs.Output.decode(reader, reader.uint32()));
                        break;
                    }
                case 42: {
                        if (!(message.proofSet && message.proofSet.length))
                            message.proofSet = [];
                        message.proofSet.push(reader.bytes());
                        break;
                    }
                case 43: {
                        if (!(message.receipts && message.receipts.length))
                            message.receipts = [];
                        message.receipts.push($root.receipts.Receipt.decode(reader, reader.uint32()));
                        break;
                    }
                case 44: {
                        if (!(message.storageSlots && message.storageSlots.length))
                            message.storageSlots = [];
                        message.storageSlots.push($root.transactions.StorageSlot.decode(reader, reader.uint32()));
                        break;
                    }
                case 45: {
                        if (!(message.witnesses && message.witnesses.length))
                            message.witnesses = [];
                        message.witnesses.push(reader.bytes());
                        break;
                    }
                case 46: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 47: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 48: {
                        message.pointer = $root.pointers.TransactionPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transactions.Transaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transactions.Transaction} Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transaction message.
         * @function verify
         * @memberof transactions.Transaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.root != null && message.hasOwnProperty("root"))
                if (!(message.root && typeof message.root.length === "number" || $util.isString(message.root)))
                    return "root: buffer expected";
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                if (!$util.isInteger(message.witnessIndex))
                    return "witnessIndex: integer expected";
            if (message.blobId != null && message.hasOwnProperty("blobId"))
                if (!(message.blobId && typeof message.blobId.length === "number" || $util.isString(message.blobId)))
                    return "blobId: buffer expected";
            if (message.inputAssetIds != null && message.hasOwnProperty("inputAssetIds")) {
                if (!Array.isArray(message.inputAssetIds))
                    return "inputAssetIds: array expected";
                for (let i = 0; i < message.inputAssetIds.length; ++i)
                    if (!(message.inputAssetIds[i] && typeof message.inputAssetIds[i].length === "number" || $util.isString(message.inputAssetIds[i])))
                        return "inputAssetIds: buffer[] expected";
            }
            if (message.isCreate != null && message.hasOwnProperty("isCreate"))
                if (typeof message.isCreate !== "boolean")
                    return "isCreate: boolean expected";
            if (message.isMint != null && message.hasOwnProperty("isMint"))
                if (typeof message.isMint !== "boolean")
                    return "isMint: boolean expected";
            if (message.isScript != null && message.hasOwnProperty("isScript"))
                if (typeof message.isScript !== "boolean")
                    return "isScript: boolean expected";
            if (message.isUpgrade != null && message.hasOwnProperty("isUpgrade"))
                if (typeof message.isUpgrade !== "boolean")
                    return "isUpgrade: boolean expected";
            if (message.isUpload != null && message.hasOwnProperty("isUpload"))
                if (typeof message.isUpload !== "boolean")
                    return "isUpload: boolean expected";
            if (message.maturity != null && message.hasOwnProperty("maturity"))
                if (!$util.isInteger(message.maturity))
                    return "maturity: integer expected";
            if (message.mintAmount != null && message.hasOwnProperty("mintAmount"))
                if (!$util.isInteger(message.mintAmount) && !(message.mintAmount && $util.isInteger(message.mintAmount.low) && $util.isInteger(message.mintAmount.high)))
                    return "mintAmount: integer|Long expected";
            if (message.mintAssetId != null && message.hasOwnProperty("mintAssetId"))
                if (!(message.mintAssetId && typeof message.mintAssetId.length === "number" || $util.isString(message.mintAssetId)))
                    return "mintAssetId: buffer expected";
            if (message.mintGasPrice != null && message.hasOwnProperty("mintGasPrice"))
                if (!$util.isInteger(message.mintGasPrice) && !(message.mintGasPrice && $util.isInteger(message.mintGasPrice.low) && $util.isInteger(message.mintGasPrice.high)))
                    return "mintGasPrice: integer|Long expected";
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                if (!$util.isInteger(message.policyType))
                    return "policyType: integer expected";
            if (message.rawPayload != null && message.hasOwnProperty("rawPayload"))
                if (!(message.rawPayload && typeof message.rawPayload.length === "number" || $util.isString(message.rawPayload)))
                    return "rawPayload: buffer expected";
            if (message.receiptsRoot != null && message.hasOwnProperty("receiptsRoot"))
                if (!(message.receiptsRoot && typeof message.receiptsRoot.length === "number" || $util.isString(message.receiptsRoot)))
                    return "receiptsRoot: buffer expected";
            if (message.salt != null && message.hasOwnProperty("salt"))
                if (!(message.salt && typeof message.salt.length === "number" || $util.isString(message.salt)))
                    return "salt: buffer expected";
            if (message.script != null && message.hasOwnProperty("script"))
                if (!(message.script && typeof message.script.length === "number" || $util.isString(message.script)))
                    return "script: buffer expected";
            if (message.scriptLength != null && message.hasOwnProperty("scriptLength"))
                if (!$util.isInteger(message.scriptLength) && !(message.scriptLength && $util.isInteger(message.scriptLength.low) && $util.isInteger(message.scriptLength.high)))
                    return "scriptLength: integer|Long expected";
            if (message.scriptData != null && message.hasOwnProperty("scriptData"))
                if (!(message.scriptData && typeof message.scriptData.length === "number" || $util.isString(message.scriptData)))
                    return "scriptData: buffer expected";
            if (message.scriptDataLength != null && message.hasOwnProperty("scriptDataLength"))
                if (!$util.isInteger(message.scriptDataLength) && !(message.scriptDataLength && $util.isInteger(message.scriptDataLength.low) && $util.isInteger(message.scriptDataLength.high)))
                    return "scriptDataLength: integer|Long expected";
            if (message.scriptGasLimit != null && message.hasOwnProperty("scriptGasLimit"))
                if (!$util.isInteger(message.scriptGasLimit) && !(message.scriptGasLimit && $util.isInteger(message.scriptGasLimit.low) && $util.isInteger(message.scriptGasLimit.high)))
                    return "scriptGasLimit: integer|Long expected";
            if (message.subsectionIndex != null && message.hasOwnProperty("subsectionIndex"))
                if (!$util.isInteger(message.subsectionIndex))
                    return "subsectionIndex: integer expected";
            if (message.subsectionsNumber != null && message.hasOwnProperty("subsectionsNumber"))
                if (!$util.isInteger(message.subsectionsNumber))
                    return "subsectionsNumber: integer expected";
            if (message.upgradePurpose != null && message.hasOwnProperty("upgradePurpose"))
                if (!$util.isInteger(message.upgradePurpose))
                    return "upgradePurpose: integer expected";
            if (message.storageSlotsCount != null && message.hasOwnProperty("storageSlotsCount"))
                if (!$util.isInteger(message.storageSlotsCount) && !(message.storageSlotsCount && $util.isInteger(message.storageSlotsCount.low) && $util.isInteger(message.storageSlotsCount.high)))
                    return "storageSlotsCount: integer|Long expected";
            if (message.proofSetCount != null && message.hasOwnProperty("proofSetCount"))
                if (!$util.isInteger(message.proofSetCount))
                    return "proofSetCount: integer expected";
            if (message.witnessesCount != null && message.hasOwnProperty("witnessesCount"))
                if (!$util.isInteger(message.witnessesCount))
                    return "witnessesCount: integer expected";
            if (message.inputsCount != null && message.hasOwnProperty("inputsCount"))
                if (!$util.isInteger(message.inputsCount))
                    return "inputsCount: integer expected";
            if (message.outputsCount != null && message.hasOwnProperty("outputsCount"))
                if (!$util.isInteger(message.outputsCount))
                    return "outputsCount: integer expected";
            if (message.inputContract != null && message.hasOwnProperty("inputContract")) {
                let error = $root.inputs.InputContract.verify(message.inputContract);
                if (error)
                    return "inputContract." + error;
            }
            if (message.inputContracts != null && message.hasOwnProperty("inputContracts")) {
                if (!Array.isArray(message.inputContracts))
                    return "inputContracts: array expected";
                for (let i = 0; i < message.inputContracts.length; ++i)
                    if (!(message.inputContracts[i] && typeof message.inputContracts[i].length === "number" || $util.isString(message.inputContracts[i])))
                        return "inputContracts: buffer[] expected";
            }
            if (message.inputs != null && message.hasOwnProperty("inputs")) {
                if (!Array.isArray(message.inputs))
                    return "inputs: array expected";
                for (let i = 0; i < message.inputs.length; ++i) {
                    let error = $root.inputs.Input.verify(message.inputs[i]);
                    if (error)
                        return "inputs." + error;
                }
            }
            if (message.outputContract != null && message.hasOwnProperty("outputContract")) {
                let error = $root.outputs.OutputContract.verify(message.outputContract);
                if (error)
                    return "outputContract." + error;
            }
            if (message.outputs != null && message.hasOwnProperty("outputs")) {
                if (!Array.isArray(message.outputs))
                    return "outputs: array expected";
                for (let i = 0; i < message.outputs.length; ++i) {
                    let error = $root.outputs.Output.verify(message.outputs[i]);
                    if (error)
                        return "outputs." + error;
                }
            }
            if (message.proofSet != null && message.hasOwnProperty("proofSet")) {
                if (!Array.isArray(message.proofSet))
                    return "proofSet: array expected";
                for (let i = 0; i < message.proofSet.length; ++i)
                    if (!(message.proofSet[i] && typeof message.proofSet[i].length === "number" || $util.isString(message.proofSet[i])))
                        return "proofSet: buffer[] expected";
            }
            if (message.receipts != null && message.hasOwnProperty("receipts")) {
                if (!Array.isArray(message.receipts))
                    return "receipts: array expected";
                for (let i = 0; i < message.receipts.length; ++i) {
                    let error = $root.receipts.Receipt.verify(message.receipts[i]);
                    if (error)
                        return "receipts." + error;
                }
            }
            if (message.storageSlots != null && message.hasOwnProperty("storageSlots")) {
                if (!Array.isArray(message.storageSlots))
                    return "storageSlots: array expected";
                for (let i = 0; i < message.storageSlots.length; ++i) {
                    let error = $root.transactions.StorageSlot.verify(message.storageSlots[i]);
                    if (error)
                        return "storageSlots." + error;
                }
            }
            if (message.witnesses != null && message.hasOwnProperty("witnesses")) {
                if (!Array.isArray(message.witnesses))
                    return "witnesses: array expected";
                for (let i = 0; i < message.witnesses.length; ++i)
                    if (!(message.witnesses[i] && typeof message.witnesses[i].length === "number" || $util.isString(message.witnesses[i])))
                        return "witnesses: buffer[] expected";
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.TransactionPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transactions.Transaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transactions.Transaction} Transaction
         */
        Transaction.fromObject = function fromObject(object) {
            if (object instanceof $root.transactions.Transaction)
                return object;
            let message = new $root.transactions.Transaction();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "SCRIPT":
            case 0:
                message.type = 0;
                break;
            case "CREATE":
            case 1:
                message.type = 1;
                break;
            case "MINT":
            case 2:
                message.type = 2;
                break;
            case "UPGRADE":
            case 3:
                message.type = 3;
                break;
            case "UPLOAD":
            case 4:
                message.type = 4;
                break;
            case "BLOB":
            case 5:
                message.type = 5;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "FAILURE":
            case 1:
                message.status = 1;
                break;
            case "SUBMITTED":
            case 2:
                message.status = 2;
                break;
            }
            if (object.root != null)
                if (typeof object.root === "string")
                    $util.base64.decode(object.root, message.root = $util.newBuffer($util.base64.length(object.root)), 0);
                else if (object.root.length >= 0)
                    message.root = object.root;
            if (object.witnessIndex != null)
                message.witnessIndex = object.witnessIndex | 0;
            if (object.blobId != null)
                if (typeof object.blobId === "string")
                    $util.base64.decode(object.blobId, message.blobId = $util.newBuffer($util.base64.length(object.blobId)), 0);
                else if (object.blobId.length >= 0)
                    message.blobId = object.blobId;
            if (object.inputAssetIds) {
                if (!Array.isArray(object.inputAssetIds))
                    throw TypeError(".transactions.Transaction.inputAssetIds: array expected");
                message.inputAssetIds = [];
                for (let i = 0; i < object.inputAssetIds.length; ++i)
                    if (typeof object.inputAssetIds[i] === "string")
                        $util.base64.decode(object.inputAssetIds[i], message.inputAssetIds[i] = $util.newBuffer($util.base64.length(object.inputAssetIds[i])), 0);
                    else if (object.inputAssetIds[i].length >= 0)
                        message.inputAssetIds[i] = object.inputAssetIds[i];
            }
            if (object.isCreate != null)
                message.isCreate = Boolean(object.isCreate);
            if (object.isMint != null)
                message.isMint = Boolean(object.isMint);
            if (object.isScript != null)
                message.isScript = Boolean(object.isScript);
            if (object.isUpgrade != null)
                message.isUpgrade = Boolean(object.isUpgrade);
            if (object.isUpload != null)
                message.isUpload = Boolean(object.isUpload);
            if (object.maturity != null)
                message.maturity = object.maturity | 0;
            if (object.mintAmount != null)
                if ($util.Long)
                    (message.mintAmount = $util.Long.fromValue(object.mintAmount)).unsigned = false;
                else if (typeof object.mintAmount === "string")
                    message.mintAmount = parseInt(object.mintAmount, 10);
                else if (typeof object.mintAmount === "number")
                    message.mintAmount = object.mintAmount;
                else if (typeof object.mintAmount === "object")
                    message.mintAmount = new $util.LongBits(object.mintAmount.low >>> 0, object.mintAmount.high >>> 0).toNumber();
            if (object.mintAssetId != null)
                if (typeof object.mintAssetId === "string")
                    $util.base64.decode(object.mintAssetId, message.mintAssetId = $util.newBuffer($util.base64.length(object.mintAssetId)), 0);
                else if (object.mintAssetId.length >= 0)
                    message.mintAssetId = object.mintAssetId;
            if (object.mintGasPrice != null)
                if ($util.Long)
                    (message.mintGasPrice = $util.Long.fromValue(object.mintGasPrice)).unsigned = false;
                else if (typeof object.mintGasPrice === "string")
                    message.mintGasPrice = parseInt(object.mintGasPrice, 10);
                else if (typeof object.mintGasPrice === "number")
                    message.mintGasPrice = object.mintGasPrice;
                else if (typeof object.mintGasPrice === "object")
                    message.mintGasPrice = new $util.LongBits(object.mintGasPrice.low >>> 0, object.mintGasPrice.high >>> 0).toNumber();
            if (object.policyType != null)
                message.policyType = object.policyType | 0;
            if (object.rawPayload != null)
                if (typeof object.rawPayload === "string")
                    $util.base64.decode(object.rawPayload, message.rawPayload = $util.newBuffer($util.base64.length(object.rawPayload)), 0);
                else if (object.rawPayload.length >= 0)
                    message.rawPayload = object.rawPayload;
            if (object.receiptsRoot != null)
                if (typeof object.receiptsRoot === "string")
                    $util.base64.decode(object.receiptsRoot, message.receiptsRoot = $util.newBuffer($util.base64.length(object.receiptsRoot)), 0);
                else if (object.receiptsRoot.length >= 0)
                    message.receiptsRoot = object.receiptsRoot;
            if (object.salt != null)
                if (typeof object.salt === "string")
                    $util.base64.decode(object.salt, message.salt = $util.newBuffer($util.base64.length(object.salt)), 0);
                else if (object.salt.length >= 0)
                    message.salt = object.salt;
            if (object.script != null)
                if (typeof object.script === "string")
                    $util.base64.decode(object.script, message.script = $util.newBuffer($util.base64.length(object.script)), 0);
                else if (object.script.length >= 0)
                    message.script = object.script;
            if (object.scriptLength != null)
                if ($util.Long)
                    (message.scriptLength = $util.Long.fromValue(object.scriptLength)).unsigned = false;
                else if (typeof object.scriptLength === "string")
                    message.scriptLength = parseInt(object.scriptLength, 10);
                else if (typeof object.scriptLength === "number")
                    message.scriptLength = object.scriptLength;
                else if (typeof object.scriptLength === "object")
                    message.scriptLength = new $util.LongBits(object.scriptLength.low >>> 0, object.scriptLength.high >>> 0).toNumber();
            if (object.scriptData != null)
                if (typeof object.scriptData === "string")
                    $util.base64.decode(object.scriptData, message.scriptData = $util.newBuffer($util.base64.length(object.scriptData)), 0);
                else if (object.scriptData.length >= 0)
                    message.scriptData = object.scriptData;
            if (object.scriptDataLength != null)
                if ($util.Long)
                    (message.scriptDataLength = $util.Long.fromValue(object.scriptDataLength)).unsigned = false;
                else if (typeof object.scriptDataLength === "string")
                    message.scriptDataLength = parseInt(object.scriptDataLength, 10);
                else if (typeof object.scriptDataLength === "number")
                    message.scriptDataLength = object.scriptDataLength;
                else if (typeof object.scriptDataLength === "object")
                    message.scriptDataLength = new $util.LongBits(object.scriptDataLength.low >>> 0, object.scriptDataLength.high >>> 0).toNumber();
            if (object.scriptGasLimit != null)
                if ($util.Long)
                    (message.scriptGasLimit = $util.Long.fromValue(object.scriptGasLimit)).unsigned = false;
                else if (typeof object.scriptGasLimit === "string")
                    message.scriptGasLimit = parseInt(object.scriptGasLimit, 10);
                else if (typeof object.scriptGasLimit === "number")
                    message.scriptGasLimit = object.scriptGasLimit;
                else if (typeof object.scriptGasLimit === "object")
                    message.scriptGasLimit = new $util.LongBits(object.scriptGasLimit.low >>> 0, object.scriptGasLimit.high >>> 0).toNumber();
            if (object.subsectionIndex != null)
                message.subsectionIndex = object.subsectionIndex | 0;
            if (object.subsectionsNumber != null)
                message.subsectionsNumber = object.subsectionsNumber | 0;
            if (object.upgradePurpose != null)
                message.upgradePurpose = object.upgradePurpose | 0;
            if (object.storageSlotsCount != null)
                if ($util.Long)
                    (message.storageSlotsCount = $util.Long.fromValue(object.storageSlotsCount)).unsigned = false;
                else if (typeof object.storageSlotsCount === "string")
                    message.storageSlotsCount = parseInt(object.storageSlotsCount, 10);
                else if (typeof object.storageSlotsCount === "number")
                    message.storageSlotsCount = object.storageSlotsCount;
                else if (typeof object.storageSlotsCount === "object")
                    message.storageSlotsCount = new $util.LongBits(object.storageSlotsCount.low >>> 0, object.storageSlotsCount.high >>> 0).toNumber();
            if (object.proofSetCount != null)
                message.proofSetCount = object.proofSetCount | 0;
            if (object.witnessesCount != null)
                message.witnessesCount = object.witnessesCount | 0;
            if (object.inputsCount != null)
                message.inputsCount = object.inputsCount | 0;
            if (object.outputsCount != null)
                message.outputsCount = object.outputsCount | 0;
            if (object.inputContract != null) {
                if (typeof object.inputContract !== "object")
                    throw TypeError(".transactions.Transaction.inputContract: object expected");
                message.inputContract = $root.inputs.InputContract.fromObject(object.inputContract);
            }
            if (object.inputContracts) {
                if (!Array.isArray(object.inputContracts))
                    throw TypeError(".transactions.Transaction.inputContracts: array expected");
                message.inputContracts = [];
                for (let i = 0; i < object.inputContracts.length; ++i)
                    if (typeof object.inputContracts[i] === "string")
                        $util.base64.decode(object.inputContracts[i], message.inputContracts[i] = $util.newBuffer($util.base64.length(object.inputContracts[i])), 0);
                    else if (object.inputContracts[i].length >= 0)
                        message.inputContracts[i] = object.inputContracts[i];
            }
            if (object.inputs) {
                if (!Array.isArray(object.inputs))
                    throw TypeError(".transactions.Transaction.inputs: array expected");
                message.inputs = [];
                for (let i = 0; i < object.inputs.length; ++i) {
                    if (typeof object.inputs[i] !== "object")
                        throw TypeError(".transactions.Transaction.inputs: object expected");
                    message.inputs[i] = $root.inputs.Input.fromObject(object.inputs[i]);
                }
            }
            if (object.outputContract != null) {
                if (typeof object.outputContract !== "object")
                    throw TypeError(".transactions.Transaction.outputContract: object expected");
                message.outputContract = $root.outputs.OutputContract.fromObject(object.outputContract);
            }
            if (object.outputs) {
                if (!Array.isArray(object.outputs))
                    throw TypeError(".transactions.Transaction.outputs: array expected");
                message.outputs = [];
                for (let i = 0; i < object.outputs.length; ++i) {
                    if (typeof object.outputs[i] !== "object")
                        throw TypeError(".transactions.Transaction.outputs: object expected");
                    message.outputs[i] = $root.outputs.Output.fromObject(object.outputs[i]);
                }
            }
            if (object.proofSet) {
                if (!Array.isArray(object.proofSet))
                    throw TypeError(".transactions.Transaction.proofSet: array expected");
                message.proofSet = [];
                for (let i = 0; i < object.proofSet.length; ++i)
                    if (typeof object.proofSet[i] === "string")
                        $util.base64.decode(object.proofSet[i], message.proofSet[i] = $util.newBuffer($util.base64.length(object.proofSet[i])), 0);
                    else if (object.proofSet[i].length >= 0)
                        message.proofSet[i] = object.proofSet[i];
            }
            if (object.receipts) {
                if (!Array.isArray(object.receipts))
                    throw TypeError(".transactions.Transaction.receipts: array expected");
                message.receipts = [];
                for (let i = 0; i < object.receipts.length; ++i) {
                    if (typeof object.receipts[i] !== "object")
                        throw TypeError(".transactions.Transaction.receipts: object expected");
                    message.receipts[i] = $root.receipts.Receipt.fromObject(object.receipts[i]);
                }
            }
            if (object.storageSlots) {
                if (!Array.isArray(object.storageSlots))
                    throw TypeError(".transactions.Transaction.storageSlots: array expected");
                message.storageSlots = [];
                for (let i = 0; i < object.storageSlots.length; ++i) {
                    if (typeof object.storageSlots[i] !== "object")
                        throw TypeError(".transactions.Transaction.storageSlots: object expected");
                    message.storageSlots[i] = $root.transactions.StorageSlot.fromObject(object.storageSlots[i]);
                }
            }
            if (object.witnesses) {
                if (!Array.isArray(object.witnesses))
                    throw TypeError(".transactions.Transaction.witnesses: array expected");
                message.witnesses = [];
                for (let i = 0; i < object.witnesses.length; ++i)
                    if (typeof object.witnesses[i] === "string")
                        $util.base64.decode(object.witnesses[i], message.witnesses[i] = $util.newBuffer($util.base64.length(object.witnesses[i])), 0);
                    else if (object.witnesses[i].length >= 0)
                        message.witnesses[i] = object.witnesses[i];
            }
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".transactions.Transaction.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".transactions.Transaction.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".transactions.Transaction.pointer: object expected");
                message.pointer = $root.pointers.TransactionPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transactions.Transaction
         * @static
         * @param {transactions.Transaction} message Transaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transaction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.inputAssetIds = [];
                object.inputContracts = [];
                object.inputs = [];
                object.outputs = [];
                object.proofSet = [];
                object.receipts = [];
                object.storageSlots = [];
                object.witnesses = [];
            }
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.txIndex = 0;
                object.type = options.enums === String ? "SCRIPT" : 0;
                object.status = options.enums === String ? "SUCCESS" : 0;
                if (options.bytes === String)
                    object.root = "";
                else {
                    object.root = [];
                    if (options.bytes !== Array)
                        object.root = $util.newBuffer(object.root);
                }
                object.witnessIndex = 0;
                if (options.bytes === String)
                    object.blobId = "";
                else {
                    object.blobId = [];
                    if (options.bytes !== Array)
                        object.blobId = $util.newBuffer(object.blobId);
                }
                object.isCreate = false;
                object.isMint = false;
                object.isScript = false;
                object.isUpgrade = false;
                object.isUpload = false;
                object.maturity = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.mintAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mintAmount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.mintAssetId = "";
                else {
                    object.mintAssetId = [];
                    if (options.bytes !== Array)
                        object.mintAssetId = $util.newBuffer(object.mintAssetId);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.mintGasPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mintGasPrice = options.longs === String ? "0" : 0;
                object.policyType = 0;
                if (options.bytes === String)
                    object.rawPayload = "";
                else {
                    object.rawPayload = [];
                    if (options.bytes !== Array)
                        object.rawPayload = $util.newBuffer(object.rawPayload);
                }
                if (options.bytes === String)
                    object.receiptsRoot = "";
                else {
                    object.receiptsRoot = [];
                    if (options.bytes !== Array)
                        object.receiptsRoot = $util.newBuffer(object.receiptsRoot);
                }
                if (options.bytes === String)
                    object.salt = "";
                else {
                    object.salt = [];
                    if (options.bytes !== Array)
                        object.salt = $util.newBuffer(object.salt);
                }
                if (options.bytes === String)
                    object.script = "";
                else {
                    object.script = [];
                    if (options.bytes !== Array)
                        object.script = $util.newBuffer(object.script);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.scriptLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptLength = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.scriptData = "";
                else {
                    object.scriptData = [];
                    if (options.bytes !== Array)
                        object.scriptData = $util.newBuffer(object.scriptData);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.scriptDataLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptDataLength = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.scriptGasLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.scriptGasLimit = options.longs === String ? "0" : 0;
                object.subsectionIndex = 0;
                object.subsectionsNumber = 0;
                object.upgradePurpose = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.storageSlotsCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.storageSlotsCount = options.longs === String ? "0" : 0;
                object.proofSetCount = 0;
                object.witnessesCount = 0;
                object.inputsCount = 0;
                object.outputsCount = 0;
                object.inputContract = null;
                object.outputContract = null;
                object.createdAt = null;
                object.publishedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.transactions.TransactionType[message.type] === undefined ? message.type : $root.transactions.TransactionType[message.type] : message.type;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.transactions.TransactionStatus[message.status] === undefined ? message.status : $root.transactions.TransactionStatus[message.status] : message.status;
            if (message.root != null && message.hasOwnProperty("root"))
                object.root = options.bytes === String ? $util.base64.encode(message.root, 0, message.root.length) : options.bytes === Array ? Array.prototype.slice.call(message.root) : message.root;
            if (message.witnessIndex != null && message.hasOwnProperty("witnessIndex"))
                object.witnessIndex = message.witnessIndex;
            if (message.blobId != null && message.hasOwnProperty("blobId"))
                object.blobId = options.bytes === String ? $util.base64.encode(message.blobId, 0, message.blobId.length) : options.bytes === Array ? Array.prototype.slice.call(message.blobId) : message.blobId;
            if (message.inputAssetIds && message.inputAssetIds.length) {
                object.inputAssetIds = [];
                for (let j = 0; j < message.inputAssetIds.length; ++j)
                    object.inputAssetIds[j] = options.bytes === String ? $util.base64.encode(message.inputAssetIds[j], 0, message.inputAssetIds[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.inputAssetIds[j]) : message.inputAssetIds[j];
            }
            if (message.isCreate != null && message.hasOwnProperty("isCreate"))
                object.isCreate = message.isCreate;
            if (message.isMint != null && message.hasOwnProperty("isMint"))
                object.isMint = message.isMint;
            if (message.isScript != null && message.hasOwnProperty("isScript"))
                object.isScript = message.isScript;
            if (message.isUpgrade != null && message.hasOwnProperty("isUpgrade"))
                object.isUpgrade = message.isUpgrade;
            if (message.isUpload != null && message.hasOwnProperty("isUpload"))
                object.isUpload = message.isUpload;
            if (message.maturity != null && message.hasOwnProperty("maturity"))
                object.maturity = message.maturity;
            if (message.mintAmount != null && message.hasOwnProperty("mintAmount"))
                if (typeof message.mintAmount === "number")
                    object.mintAmount = options.longs === String ? String(message.mintAmount) : message.mintAmount;
                else
                    object.mintAmount = options.longs === String ? $util.Long.prototype.toString.call(message.mintAmount) : options.longs === Number ? new $util.LongBits(message.mintAmount.low >>> 0, message.mintAmount.high >>> 0).toNumber() : message.mintAmount;
            if (message.mintAssetId != null && message.hasOwnProperty("mintAssetId"))
                object.mintAssetId = options.bytes === String ? $util.base64.encode(message.mintAssetId, 0, message.mintAssetId.length) : options.bytes === Array ? Array.prototype.slice.call(message.mintAssetId) : message.mintAssetId;
            if (message.mintGasPrice != null && message.hasOwnProperty("mintGasPrice"))
                if (typeof message.mintGasPrice === "number")
                    object.mintGasPrice = options.longs === String ? String(message.mintGasPrice) : message.mintGasPrice;
                else
                    object.mintGasPrice = options.longs === String ? $util.Long.prototype.toString.call(message.mintGasPrice) : options.longs === Number ? new $util.LongBits(message.mintGasPrice.low >>> 0, message.mintGasPrice.high >>> 0).toNumber() : message.mintGasPrice;
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                object.policyType = message.policyType;
            if (message.rawPayload != null && message.hasOwnProperty("rawPayload"))
                object.rawPayload = options.bytes === String ? $util.base64.encode(message.rawPayload, 0, message.rawPayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawPayload) : message.rawPayload;
            if (message.receiptsRoot != null && message.hasOwnProperty("receiptsRoot"))
                object.receiptsRoot = options.bytes === String ? $util.base64.encode(message.receiptsRoot, 0, message.receiptsRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.receiptsRoot) : message.receiptsRoot;
            if (message.salt != null && message.hasOwnProperty("salt"))
                object.salt = options.bytes === String ? $util.base64.encode(message.salt, 0, message.salt.length) : options.bytes === Array ? Array.prototype.slice.call(message.salt) : message.salt;
            if (message.script != null && message.hasOwnProperty("script"))
                object.script = options.bytes === String ? $util.base64.encode(message.script, 0, message.script.length) : options.bytes === Array ? Array.prototype.slice.call(message.script) : message.script;
            if (message.scriptLength != null && message.hasOwnProperty("scriptLength"))
                if (typeof message.scriptLength === "number")
                    object.scriptLength = options.longs === String ? String(message.scriptLength) : message.scriptLength;
                else
                    object.scriptLength = options.longs === String ? $util.Long.prototype.toString.call(message.scriptLength) : options.longs === Number ? new $util.LongBits(message.scriptLength.low >>> 0, message.scriptLength.high >>> 0).toNumber() : message.scriptLength;
            if (message.scriptData != null && message.hasOwnProperty("scriptData"))
                object.scriptData = options.bytes === String ? $util.base64.encode(message.scriptData, 0, message.scriptData.length) : options.bytes === Array ? Array.prototype.slice.call(message.scriptData) : message.scriptData;
            if (message.scriptDataLength != null && message.hasOwnProperty("scriptDataLength"))
                if (typeof message.scriptDataLength === "number")
                    object.scriptDataLength = options.longs === String ? String(message.scriptDataLength) : message.scriptDataLength;
                else
                    object.scriptDataLength = options.longs === String ? $util.Long.prototype.toString.call(message.scriptDataLength) : options.longs === Number ? new $util.LongBits(message.scriptDataLength.low >>> 0, message.scriptDataLength.high >>> 0).toNumber() : message.scriptDataLength;
            if (message.scriptGasLimit != null && message.hasOwnProperty("scriptGasLimit"))
                if (typeof message.scriptGasLimit === "number")
                    object.scriptGasLimit = options.longs === String ? String(message.scriptGasLimit) : message.scriptGasLimit;
                else
                    object.scriptGasLimit = options.longs === String ? $util.Long.prototype.toString.call(message.scriptGasLimit) : options.longs === Number ? new $util.LongBits(message.scriptGasLimit.low >>> 0, message.scriptGasLimit.high >>> 0).toNumber() : message.scriptGasLimit;
            if (message.subsectionIndex != null && message.hasOwnProperty("subsectionIndex"))
                object.subsectionIndex = message.subsectionIndex;
            if (message.subsectionsNumber != null && message.hasOwnProperty("subsectionsNumber"))
                object.subsectionsNumber = message.subsectionsNumber;
            if (message.upgradePurpose != null && message.hasOwnProperty("upgradePurpose"))
                object.upgradePurpose = message.upgradePurpose;
            if (message.storageSlotsCount != null && message.hasOwnProperty("storageSlotsCount"))
                if (typeof message.storageSlotsCount === "number")
                    object.storageSlotsCount = options.longs === String ? String(message.storageSlotsCount) : message.storageSlotsCount;
                else
                    object.storageSlotsCount = options.longs === String ? $util.Long.prototype.toString.call(message.storageSlotsCount) : options.longs === Number ? new $util.LongBits(message.storageSlotsCount.low >>> 0, message.storageSlotsCount.high >>> 0).toNumber() : message.storageSlotsCount;
            if (message.proofSetCount != null && message.hasOwnProperty("proofSetCount"))
                object.proofSetCount = message.proofSetCount;
            if (message.witnessesCount != null && message.hasOwnProperty("witnessesCount"))
                object.witnessesCount = message.witnessesCount;
            if (message.inputsCount != null && message.hasOwnProperty("inputsCount"))
                object.inputsCount = message.inputsCount;
            if (message.outputsCount != null && message.hasOwnProperty("outputsCount"))
                object.outputsCount = message.outputsCount;
            if (message.inputContract != null && message.hasOwnProperty("inputContract"))
                object.inputContract = $root.inputs.InputContract.toObject(message.inputContract, options);
            if (message.inputContracts && message.inputContracts.length) {
                object.inputContracts = [];
                for (let j = 0; j < message.inputContracts.length; ++j)
                    object.inputContracts[j] = options.bytes === String ? $util.base64.encode(message.inputContracts[j], 0, message.inputContracts[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.inputContracts[j]) : message.inputContracts[j];
            }
            if (message.inputs && message.inputs.length) {
                object.inputs = [];
                for (let j = 0; j < message.inputs.length; ++j)
                    object.inputs[j] = $root.inputs.Input.toObject(message.inputs[j], options);
            }
            if (message.outputContract != null && message.hasOwnProperty("outputContract"))
                object.outputContract = $root.outputs.OutputContract.toObject(message.outputContract, options);
            if (message.outputs && message.outputs.length) {
                object.outputs = [];
                for (let j = 0; j < message.outputs.length; ++j)
                    object.outputs[j] = $root.outputs.Output.toObject(message.outputs[j], options);
            }
            if (message.proofSet && message.proofSet.length) {
                object.proofSet = [];
                for (let j = 0; j < message.proofSet.length; ++j)
                    object.proofSet[j] = options.bytes === String ? $util.base64.encode(message.proofSet[j], 0, message.proofSet[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.proofSet[j]) : message.proofSet[j];
            }
            if (message.receipts && message.receipts.length) {
                object.receipts = [];
                for (let j = 0; j < message.receipts.length; ++j)
                    object.receipts[j] = $root.receipts.Receipt.toObject(message.receipts[j], options);
            }
            if (message.storageSlots && message.storageSlots.length) {
                object.storageSlots = [];
                for (let j = 0; j < message.storageSlots.length; ++j)
                    object.storageSlots[j] = $root.transactions.StorageSlot.toObject(message.storageSlots[j], options);
            }
            if (message.witnesses && message.witnesses.length) {
                object.witnesses = [];
                for (let j = 0; j < message.witnesses.length; ++j)
                    object.witnesses[j] = options.bytes === String ? $util.base64.encode(message.witnesses[j], 0, message.witnesses[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.witnesses[j]) : message.witnesses[j];
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.TransactionPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Transaction to JSON.
         * @function toJSON
         * @memberof transactions.Transaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transaction
         * @function getTypeUrl
         * @memberof transactions.Transaction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/transactions.Transaction";
        };

        return Transaction;
    })();

    transactions.StorageSlot = (function() {

        /**
         * Properties of a StorageSlot.
         * @memberof transactions
         * @interface IStorageSlot
         * @property {string|null} [subject] StorageSlot subject
         * @property {Uint8Array|null} [txId] StorageSlot txId
         * @property {Uint8Array|null} [key] StorageSlot key
         * @property {Uint8Array|null} [value] StorageSlot value
         * @property {google.protobuf.ITimestamp|null} [createdAt] StorageSlot createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] StorageSlot publishedAt
         */

        /**
         * Constructs a new StorageSlot.
         * @memberof transactions
         * @classdesc Represents a StorageSlot.
         * @implements IStorageSlot
         * @constructor
         * @param {transactions.IStorageSlot=} [properties] Properties to set
         */
        function StorageSlot(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StorageSlot subject.
         * @member {string} subject
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.subject = "";

        /**
         * StorageSlot txId.
         * @member {Uint8Array} txId
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.txId = $util.newBuffer([]);

        /**
         * StorageSlot key.
         * @member {Uint8Array} key
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.key = $util.newBuffer([]);

        /**
         * StorageSlot value.
         * @member {Uint8Array} value
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.value = $util.newBuffer([]);

        /**
         * StorageSlot createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.createdAt = null;

        /**
         * StorageSlot publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof transactions.StorageSlot
         * @instance
         */
        StorageSlot.prototype.publishedAt = null;

        /**
         * Creates a new StorageSlot instance using the specified properties.
         * @function create
         * @memberof transactions.StorageSlot
         * @static
         * @param {transactions.IStorageSlot=} [properties] Properties to set
         * @returns {transactions.StorageSlot} StorageSlot instance
         */
        StorageSlot.create = function create(properties) {
            return new StorageSlot(properties);
        };

        /**
         * Encodes the specified StorageSlot message. Does not implicitly {@link transactions.StorageSlot.verify|verify} messages.
         * @function encode
         * @memberof transactions.StorageSlot
         * @static
         * @param {transactions.IStorageSlot} message StorageSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageSlot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.value);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StorageSlot message, length delimited. Does not implicitly {@link transactions.StorageSlot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transactions.StorageSlot
         * @static
         * @param {transactions.IStorageSlot} message StorageSlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StorageSlot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StorageSlot message from the specified reader or buffer.
         * @function decode
         * @memberof transactions.StorageSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transactions.StorageSlot} StorageSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageSlot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transactions.StorageSlot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.key = reader.bytes();
                        break;
                    }
                case 4: {
                        message.value = reader.bytes();
                        break;
                    }
                case 5: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StorageSlot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transactions.StorageSlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transactions.StorageSlot} StorageSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StorageSlot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StorageSlot message.
         * @function verify
         * @memberof transactions.StorageSlot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StorageSlot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a StorageSlot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transactions.StorageSlot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transactions.StorageSlot} StorageSlot
         */
        StorageSlot.fromObject = function fromObject(object) {
            if (object instanceof $root.transactions.StorageSlot)
                return object;
            let message = new $root.transactions.StorageSlot();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length >= 0)
                    message.key = object.key;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".transactions.StorageSlot.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".transactions.StorageSlot.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a StorageSlot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transactions.StorageSlot
         * @static
         * @param {transactions.StorageSlot} message StorageSlot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StorageSlot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.key = "";
                else {
                    object.key = [];
                    if (options.bytes !== Array)
                        object.key = $util.newBuffer(object.key);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this StorageSlot to JSON.
         * @function toJSON
         * @memberof transactions.StorageSlot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StorageSlot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StorageSlot
         * @function getTypeUrl
         * @memberof transactions.StorageSlot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StorageSlot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/transactions.StorageSlot";
        };

        return StorageSlot;
    })();

    transactions.Witness = (function() {

        /**
         * Properties of a Witness.
         * @memberof transactions
         * @interface IWitness
         * @property {string|null} [subject] Witness subject
         * @property {Uint8Array|null} [txId] Witness txId
         * @property {Uint8Array|null} [witnessData] Witness witnessData
         * @property {number|null} [witnessDataLength] Witness witnessDataLength
         * @property {google.protobuf.ITimestamp|null} [createdAt] Witness createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Witness publishedAt
         */

        /**
         * Constructs a new Witness.
         * @memberof transactions
         * @classdesc Represents a Witness.
         * @implements IWitness
         * @constructor
         * @param {transactions.IWitness=} [properties] Properties to set
         */
        function Witness(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Witness subject.
         * @member {string} subject
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.subject = "";

        /**
         * Witness txId.
         * @member {Uint8Array} txId
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.txId = $util.newBuffer([]);

        /**
         * Witness witnessData.
         * @member {Uint8Array} witnessData
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.witnessData = $util.newBuffer([]);

        /**
         * Witness witnessDataLength.
         * @member {number} witnessDataLength
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.witnessDataLength = 0;

        /**
         * Witness createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.createdAt = null;

        /**
         * Witness publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof transactions.Witness
         * @instance
         */
        Witness.prototype.publishedAt = null;

        /**
         * Creates a new Witness instance using the specified properties.
         * @function create
         * @memberof transactions.Witness
         * @static
         * @param {transactions.IWitness=} [properties] Properties to set
         * @returns {transactions.Witness} Witness instance
         */
        Witness.create = function create(properties) {
            return new Witness(properties);
        };

        /**
         * Encodes the specified Witness message. Does not implicitly {@link transactions.Witness.verify|verify} messages.
         * @function encode
         * @memberof transactions.Witness
         * @static
         * @param {transactions.IWitness} message Witness message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Witness.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.witnessData != null && Object.hasOwnProperty.call(message, "witnessData"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.witnessData);
            if (message.witnessDataLength != null && Object.hasOwnProperty.call(message, "witnessDataLength"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.witnessDataLength);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Witness message, length delimited. Does not implicitly {@link transactions.Witness.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transactions.Witness
         * @static
         * @param {transactions.IWitness} message Witness message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Witness.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Witness message from the specified reader or buffer.
         * @function decode
         * @memberof transactions.Witness
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transactions.Witness} Witness
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Witness.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transactions.Witness();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.witnessData = reader.bytes();
                        break;
                    }
                case 4: {
                        message.witnessDataLength = reader.int32();
                        break;
                    }
                case 5: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Witness message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transactions.Witness
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transactions.Witness} Witness
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Witness.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Witness message.
         * @function verify
         * @memberof transactions.Witness
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Witness.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.witnessData != null && message.hasOwnProperty("witnessData"))
                if (!(message.witnessData && typeof message.witnessData.length === "number" || $util.isString(message.witnessData)))
                    return "witnessData: buffer expected";
            if (message.witnessDataLength != null && message.hasOwnProperty("witnessDataLength"))
                if (!$util.isInteger(message.witnessDataLength))
                    return "witnessDataLength: integer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Witness message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transactions.Witness
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transactions.Witness} Witness
         */
        Witness.fromObject = function fromObject(object) {
            if (object instanceof $root.transactions.Witness)
                return object;
            let message = new $root.transactions.Witness();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.witnessData != null)
                if (typeof object.witnessData === "string")
                    $util.base64.decode(object.witnessData, message.witnessData = $util.newBuffer($util.base64.length(object.witnessData)), 0);
                else if (object.witnessData.length >= 0)
                    message.witnessData = object.witnessData;
            if (object.witnessDataLength != null)
                message.witnessDataLength = object.witnessDataLength | 0;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".transactions.Witness.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".transactions.Witness.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Witness message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transactions.Witness
         * @static
         * @param {transactions.Witness} message Witness
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Witness.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.witnessData = "";
                else {
                    object.witnessData = [];
                    if (options.bytes !== Array)
                        object.witnessData = $util.newBuffer(object.witnessData);
                }
                object.witnessDataLength = 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.witnessData != null && message.hasOwnProperty("witnessData"))
                object.witnessData = options.bytes === String ? $util.base64.encode(message.witnessData, 0, message.witnessData.length) : options.bytes === Array ? Array.prototype.slice.call(message.witnessData) : message.witnessData;
            if (message.witnessDataLength != null && message.hasOwnProperty("witnessDataLength"))
                object.witnessDataLength = message.witnessDataLength;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this Witness to JSON.
         * @function toJSON
         * @memberof transactions.Witness
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Witness.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Witness
         * @function getTypeUrl
         * @memberof transactions.Witness
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Witness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/transactions.Witness";
        };

        return Witness;
    })();

    transactions.ProofSet = (function() {

        /**
         * Properties of a ProofSet.
         * @memberof transactions
         * @interface IProofSet
         * @property {string|null} [subject] ProofSet subject
         * @property {Uint8Array|null} [txId] ProofSet txId
         * @property {Uint8Array|null} [proofHash] ProofSet proofHash
         * @property {google.protobuf.ITimestamp|null} [createdAt] ProofSet createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] ProofSet publishedAt
         */

        /**
         * Constructs a new ProofSet.
         * @memberof transactions
         * @classdesc Represents a ProofSet.
         * @implements IProofSet
         * @constructor
         * @param {transactions.IProofSet=} [properties] Properties to set
         */
        function ProofSet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProofSet subject.
         * @member {string} subject
         * @memberof transactions.ProofSet
         * @instance
         */
        ProofSet.prototype.subject = "";

        /**
         * ProofSet txId.
         * @member {Uint8Array} txId
         * @memberof transactions.ProofSet
         * @instance
         */
        ProofSet.prototype.txId = $util.newBuffer([]);

        /**
         * ProofSet proofHash.
         * @member {Uint8Array} proofHash
         * @memberof transactions.ProofSet
         * @instance
         */
        ProofSet.prototype.proofHash = $util.newBuffer([]);

        /**
         * ProofSet createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof transactions.ProofSet
         * @instance
         */
        ProofSet.prototype.createdAt = null;

        /**
         * ProofSet publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof transactions.ProofSet
         * @instance
         */
        ProofSet.prototype.publishedAt = null;

        /**
         * Creates a new ProofSet instance using the specified properties.
         * @function create
         * @memberof transactions.ProofSet
         * @static
         * @param {transactions.IProofSet=} [properties] Properties to set
         * @returns {transactions.ProofSet} ProofSet instance
         */
        ProofSet.create = function create(properties) {
            return new ProofSet(properties);
        };

        /**
         * Encodes the specified ProofSet message. Does not implicitly {@link transactions.ProofSet.verify|verify} messages.
         * @function encode
         * @memberof transactions.ProofSet
         * @static
         * @param {transactions.IProofSet} message ProofSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProofSet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.proofHash != null && Object.hasOwnProperty.call(message, "proofHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.proofHash);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProofSet message, length delimited. Does not implicitly {@link transactions.ProofSet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transactions.ProofSet
         * @static
         * @param {transactions.IProofSet} message ProofSet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProofSet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProofSet message from the specified reader or buffer.
         * @function decode
         * @memberof transactions.ProofSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transactions.ProofSet} ProofSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProofSet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transactions.ProofSet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.proofHash = reader.bytes();
                        break;
                    }
                case 4: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProofSet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transactions.ProofSet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transactions.ProofSet} ProofSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProofSet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProofSet message.
         * @function verify
         * @memberof transactions.ProofSet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProofSet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.proofHash != null && message.hasOwnProperty("proofHash"))
                if (!(message.proofHash && typeof message.proofHash.length === "number" || $util.isString(message.proofHash)))
                    return "proofHash: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a ProofSet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transactions.ProofSet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transactions.ProofSet} ProofSet
         */
        ProofSet.fromObject = function fromObject(object) {
            if (object instanceof $root.transactions.ProofSet)
                return object;
            let message = new $root.transactions.ProofSet();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.proofHash != null)
                if (typeof object.proofHash === "string")
                    $util.base64.decode(object.proofHash, message.proofHash = $util.newBuffer($util.base64.length(object.proofHash)), 0);
                else if (object.proofHash.length >= 0)
                    message.proofHash = object.proofHash;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".transactions.ProofSet.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".transactions.ProofSet.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProofSet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transactions.ProofSet
         * @static
         * @param {transactions.ProofSet} message ProofSet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProofSet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                if (options.bytes === String)
                    object.proofHash = "";
                else {
                    object.proofHash = [];
                    if (options.bytes !== Array)
                        object.proofHash = $util.newBuffer(object.proofHash);
                }
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.proofHash != null && message.hasOwnProperty("proofHash"))
                object.proofHash = options.bytes === String ? $util.base64.encode(message.proofHash, 0, message.proofHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.proofHash) : message.proofHash;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this ProofSet to JSON.
         * @function toJSON
         * @memberof transactions.ProofSet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProofSet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProofSet
         * @function getTypeUrl
         * @memberof transactions.ProofSet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProofSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/transactions.ProofSet";
        };

        return ProofSet;
    })();

    transactions.Policy = (function() {

        /**
         * Properties of a Policy.
         * @memberof transactions
         * @interface IPolicy
         * @property {string|null} [subject] Policy subject
         * @property {Uint8Array|null} [txId] Policy txId
         * @property {transactions.PolicyType|null} [type] Policy type
         * @property {number|Long|null} [data] Policy data
         * @property {google.protobuf.ITimestamp|null} [createdAt] Policy createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Policy publishedAt
         */

        /**
         * Constructs a new Policy.
         * @memberof transactions
         * @classdesc Represents a Policy.
         * @implements IPolicy
         * @constructor
         * @param {transactions.IPolicy=} [properties] Properties to set
         */
        function Policy(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Policy subject.
         * @member {string} subject
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.subject = "";

        /**
         * Policy txId.
         * @member {Uint8Array} txId
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.txId = $util.newBuffer([]);

        /**
         * Policy type.
         * @member {transactions.PolicyType} type
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.type = 0;

        /**
         * Policy data.
         * @member {number|Long} data
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.data = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Policy createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.createdAt = null;

        /**
         * Policy publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof transactions.Policy
         * @instance
         */
        Policy.prototype.publishedAt = null;

        /**
         * Creates a new Policy instance using the specified properties.
         * @function create
         * @memberof transactions.Policy
         * @static
         * @param {transactions.IPolicy=} [properties] Properties to set
         * @returns {transactions.Policy} Policy instance
         */
        Policy.create = function create(properties) {
            return new Policy(properties);
        };

        /**
         * Encodes the specified Policy message. Does not implicitly {@link transactions.Policy.verify|verify} messages.
         * @function encode
         * @memberof transactions.Policy
         * @static
         * @param {transactions.IPolicy} message Policy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Policy.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.txId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.data);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Policy message, length delimited. Does not implicitly {@link transactions.Policy.verify|verify} messages.
         * @function encodeDelimited
         * @memberof transactions.Policy
         * @static
         * @param {transactions.IPolicy} message Policy message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Policy.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Policy message from the specified reader or buffer.
         * @function decode
         * @memberof transactions.Policy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {transactions.Policy} Policy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Policy.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.transactions.Policy();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.data = reader.int64();
                        break;
                    }
                case 5: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Policy message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof transactions.Policy
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {transactions.Policy} Policy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Policy.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Policy message.
         * @function verify
         * @memberof transactions.Policy
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Policy.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isInteger(message.data) && !(message.data && $util.isInteger(message.data.low) && $util.isInteger(message.data.high)))
                    return "data: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            return null;
        };

        /**
         * Creates a Policy message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof transactions.Policy
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {transactions.Policy} Policy
         */
        Policy.fromObject = function fromObject(object) {
            if (object instanceof $root.transactions.Policy)
                return object;
            let message = new $root.transactions.Policy();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "TIP":
            case 0:
                message.type = 0;
                break;
            case "WITNESS_LIMIT":
            case 1:
                message.type = 1;
                break;
            case "MATURITY":
            case 2:
                message.type = 2;
                break;
            case "MAX_FEE":
            case 3:
                message.type = 3;
                break;
            }
            if (object.data != null)
                if ($util.Long)
                    (message.data = $util.Long.fromValue(object.data)).unsigned = false;
                else if (typeof object.data === "string")
                    message.data = parseInt(object.data, 10);
                else if (typeof object.data === "number")
                    message.data = object.data;
                else if (typeof object.data === "object")
                    message.data = new $util.LongBits(object.data.low >>> 0, object.data.high >>> 0).toNumber();
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".transactions.Policy.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".transactions.Policy.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            return message;
        };

        /**
         * Creates a plain object from a Policy message. Also converts values to other types if specified.
         * @function toObject
         * @memberof transactions.Policy
         * @static
         * @param {transactions.Policy} message Policy
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Policy.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.type = options.enums === String ? "TIP" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.data = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.data = options.longs === String ? "0" : 0;
                object.createdAt = null;
                object.publishedAt = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.transactions.PolicyType[message.type] === undefined ? message.type : $root.transactions.PolicyType[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                if (typeof message.data === "number")
                    object.data = options.longs === String ? String(message.data) : message.data;
                else
                    object.data = options.longs === String ? $util.Long.prototype.toString.call(message.data) : options.longs === Number ? new $util.LongBits(message.data.low >>> 0, message.data.high >>> 0).toNumber() : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            return object;
        };

        /**
         * Converts this Policy to JSON.
         * @function toJSON
         * @memberof transactions.Policy
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Policy.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Policy
         * @function getTypeUrl
         * @memberof transactions.Policy
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Policy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/transactions.Policy";
        };

        return Policy;
    })();

    return transactions;
})();

export const utxos = $root.utxos = (() => {

    /**
     * Namespace utxos.
     * @exports utxos
     * @namespace
     */
    const utxos = {};

    /**
     * UtxoType enum.
     * @name utxos.UtxoType
     * @enum {number}
     * @property {number} CONTRACT=0 CONTRACT value
     * @property {number} COIN=1 COIN value
     * @property {number} MESSAGE=2 MESSAGE value
     */
    utxos.UtxoType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CONTRACT"] = 0;
        values[valuesById[1] = "COIN"] = 1;
        values[valuesById[2] = "MESSAGE"] = 2;
        return values;
    })();

    utxos.Utxo = (function() {

        /**
         * Properties of an Utxo.
         * @memberof utxos
         * @interface IUtxo
         * @property {string|null} [subject] Utxo subject
         * @property {number|Long|null} [blockHeight] Utxo blockHeight
         * @property {Uint8Array|null} [txId] Utxo txId
         * @property {number|null} [txIndex] Utxo txIndex
         * @property {number|null} [inputIndex] Utxo inputIndex
         * @property {utxos.UtxoType|null} [utxoType] Utxo utxoType
         * @property {Uint8Array|null} [utxoId] Utxo utxoId
         * @property {Uint8Array|null} [value] Utxo value
         * @property {Uint8Array|null} [senderAddress] Utxo senderAddress
         * @property {Uint8Array|null} [recipientAddress] Utxo recipientAddress
         * @property {Uint8Array|null} [nonce] Utxo nonce
         * @property {number|Long|null} [amount] Utxo amount
         * @property {Uint8Array|null} [data] Utxo data
         * @property {google.protobuf.ITimestamp|null} [createdAt] Utxo createdAt
         * @property {google.protobuf.ITimestamp|null} [publishedAt] Utxo publishedAt
         * @property {google.protobuf.ITimestamp|null} [updatedAt] Utxo updatedAt
         * @property {pointers.IUtxoPointer|null} [pointer] Utxo pointer
         */

        /**
         * Constructs a new Utxo.
         * @memberof utxos
         * @classdesc Represents an Utxo.
         * @implements IUtxo
         * @constructor
         * @param {utxos.IUtxo=} [properties] Properties to set
         */
        function Utxo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Utxo subject.
         * @member {string} subject
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.subject = "";

        /**
         * Utxo blockHeight.
         * @member {number|Long} blockHeight
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.blockHeight = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Utxo txId.
         * @member {Uint8Array} txId
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.txId = $util.newBuffer([]);

        /**
         * Utxo txIndex.
         * @member {number} txIndex
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.txIndex = 0;

        /**
         * Utxo inputIndex.
         * @member {number} inputIndex
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.inputIndex = 0;

        /**
         * Utxo utxoType.
         * @member {utxos.UtxoType} utxoType
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.utxoType = 0;

        /**
         * Utxo utxoId.
         * @member {Uint8Array} utxoId
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.utxoId = $util.newBuffer([]);

        /**
         * Utxo value.
         * @member {Uint8Array} value
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.value = $util.newBuffer([]);

        /**
         * Utxo senderAddress.
         * @member {Uint8Array} senderAddress
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.senderAddress = $util.newBuffer([]);

        /**
         * Utxo recipientAddress.
         * @member {Uint8Array} recipientAddress
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.recipientAddress = $util.newBuffer([]);

        /**
         * Utxo nonce.
         * @member {Uint8Array} nonce
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.nonce = $util.newBuffer([]);

        /**
         * Utxo amount.
         * @member {number|Long} amount
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Utxo data.
         * @member {Uint8Array} data
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.data = $util.newBuffer([]);

        /**
         * Utxo createdAt.
         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.createdAt = null;

        /**
         * Utxo publishedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} publishedAt
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.publishedAt = null;

        /**
         * Utxo updatedAt.
         * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.updatedAt = null;

        /**
         * Utxo pointer.
         * @member {pointers.IUtxoPointer|null|undefined} pointer
         * @memberof utxos.Utxo
         * @instance
         */
        Utxo.prototype.pointer = null;

        /**
         * Creates a new Utxo instance using the specified properties.
         * @function create
         * @memberof utxos.Utxo
         * @static
         * @param {utxos.IUtxo=} [properties] Properties to set
         * @returns {utxos.Utxo} Utxo instance
         */
        Utxo.create = function create(properties) {
            return new Utxo(properties);
        };

        /**
         * Encodes the specified Utxo message. Does not implicitly {@link utxos.Utxo.verify|verify} messages.
         * @function encode
         * @memberof utxos.Utxo
         * @static
         * @param {utxos.IUtxo} message Utxo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Utxo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
            if (message.blockHeight != null && Object.hasOwnProperty.call(message, "blockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.blockHeight);
            if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.txId);
            if (message.txIndex != null && Object.hasOwnProperty.call(message, "txIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.txIndex);
            if (message.inputIndex != null && Object.hasOwnProperty.call(message, "inputIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.inputIndex);
            if (message.utxoType != null && Object.hasOwnProperty.call(message, "utxoType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.utxoType);
            if (message.utxoId != null && Object.hasOwnProperty.call(message, "utxoId"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.utxoId);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.value);
            if (message.senderAddress != null && Object.hasOwnProperty.call(message, "senderAddress"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.senderAddress);
            if (message.recipientAddress != null && Object.hasOwnProperty.call(message, "recipientAddress"))
                writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.recipientAddress);
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.nonce);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.amount);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.data);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.publishedAt != null && Object.hasOwnProperty.call(message, "publishedAt"))
                $root.google.protobuf.Timestamp.encode(message.publishedAt, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.pointer != null && Object.hasOwnProperty.call(message, "pointer"))
                $root.pointers.UtxoPointer.encode(message.pointer, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Utxo message, length delimited. Does not implicitly {@link utxos.Utxo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof utxos.Utxo
         * @static
         * @param {utxos.IUtxo} message Utxo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Utxo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Utxo message from the specified reader or buffer.
         * @function decode
         * @memberof utxos.Utxo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {utxos.Utxo} Utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Utxo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.utxos.Utxo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subject = reader.string();
                        break;
                    }
                case 2: {
                        message.blockHeight = reader.int64();
                        break;
                    }
                case 3: {
                        message.txId = reader.bytes();
                        break;
                    }
                case 4: {
                        message.txIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.inputIndex = reader.int32();
                        break;
                    }
                case 6: {
                        message.utxoType = reader.int32();
                        break;
                    }
                case 7: {
                        message.utxoId = reader.bytes();
                        break;
                    }
                case 8: {
                        message.value = reader.bytes();
                        break;
                    }
                case 9: {
                        message.senderAddress = reader.bytes();
                        break;
                    }
                case 10: {
                        message.recipientAddress = reader.bytes();
                        break;
                    }
                case 11: {
                        message.nonce = reader.bytes();
                        break;
                    }
                case 12: {
                        message.amount = reader.int64();
                        break;
                    }
                case 13: {
                        message.data = reader.bytes();
                        break;
                    }
                case 14: {
                        message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.publishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.pointer = $root.pointers.UtxoPointer.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Utxo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof utxos.Utxo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {utxos.Utxo} Utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Utxo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Utxo message.
         * @function verify
         * @memberof utxos.Utxo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Utxo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subject != null && message.hasOwnProperty("subject"))
                if (!$util.isString(message.subject))
                    return "subject: string expected";
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (!$util.isInteger(message.blockHeight) && !(message.blockHeight && $util.isInteger(message.blockHeight.low) && $util.isInteger(message.blockHeight.high)))
                    return "blockHeight: integer|Long expected";
            if (message.txId != null && message.hasOwnProperty("txId"))
                if (!(message.txId && typeof message.txId.length === "number" || $util.isString(message.txId)))
                    return "txId: buffer expected";
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                if (!$util.isInteger(message.txIndex))
                    return "txIndex: integer expected";
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                if (!$util.isInteger(message.inputIndex))
                    return "inputIndex: integer expected";
            if (message.utxoType != null && message.hasOwnProperty("utxoType"))
                switch (message.utxoType) {
                default:
                    return "utxoType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                if (!(message.utxoId && typeof message.utxoId.length === "number" || $util.isString(message.utxoId)))
                    return "utxoId: buffer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                    return "value: buffer expected";
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                if (!(message.senderAddress && typeof message.senderAddress.length === "number" || $util.isString(message.senderAddress)))
                    return "senderAddress: buffer expected";
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                if (!(message.recipientAddress && typeof message.recipientAddress.length === "number" || $util.isString(message.recipientAddress)))
                    return "recipientAddress: buffer expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!(message.nonce && typeof message.nonce.length === "number" || $util.isString(message.nonce)))
                    return "nonce: buffer expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                if (error)
                    return "createdAt." + error;
            }
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.publishedAt);
                if (error)
                    return "publishedAt." + error;
            }
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                let error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                if (error)
                    return "updatedAt." + error;
            }
            if (message.pointer != null && message.hasOwnProperty("pointer")) {
                let error = $root.pointers.UtxoPointer.verify(message.pointer);
                if (error)
                    return "pointer." + error;
            }
            return null;
        };

        /**
         * Creates an Utxo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof utxos.Utxo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {utxos.Utxo} Utxo
         */
        Utxo.fromObject = function fromObject(object) {
            if (object instanceof $root.utxos.Utxo)
                return object;
            let message = new $root.utxos.Utxo();
            if (object.subject != null)
                message.subject = String(object.subject);
            if (object.blockHeight != null)
                if ($util.Long)
                    (message.blockHeight = $util.Long.fromValue(object.blockHeight)).unsigned = false;
                else if (typeof object.blockHeight === "string")
                    message.blockHeight = parseInt(object.blockHeight, 10);
                else if (typeof object.blockHeight === "number")
                    message.blockHeight = object.blockHeight;
                else if (typeof object.blockHeight === "object")
                    message.blockHeight = new $util.LongBits(object.blockHeight.low >>> 0, object.blockHeight.high >>> 0).toNumber();
            if (object.txId != null)
                if (typeof object.txId === "string")
                    $util.base64.decode(object.txId, message.txId = $util.newBuffer($util.base64.length(object.txId)), 0);
                else if (object.txId.length >= 0)
                    message.txId = object.txId;
            if (object.txIndex != null)
                message.txIndex = object.txIndex | 0;
            if (object.inputIndex != null)
                message.inputIndex = object.inputIndex | 0;
            switch (object.utxoType) {
            default:
                if (typeof object.utxoType === "number") {
                    message.utxoType = object.utxoType;
                    break;
                }
                break;
            case "CONTRACT":
            case 0:
                message.utxoType = 0;
                break;
            case "COIN":
            case 1:
                message.utxoType = 1;
                break;
            case "MESSAGE":
            case 2:
                message.utxoType = 2;
                break;
            }
            if (object.utxoId != null)
                if (typeof object.utxoId === "string")
                    $util.base64.decode(object.utxoId, message.utxoId = $util.newBuffer($util.base64.length(object.utxoId)), 0);
                else if (object.utxoId.length >= 0)
                    message.utxoId = object.utxoId;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            if (object.senderAddress != null)
                if (typeof object.senderAddress === "string")
                    $util.base64.decode(object.senderAddress, message.senderAddress = $util.newBuffer($util.base64.length(object.senderAddress)), 0);
                else if (object.senderAddress.length >= 0)
                    message.senderAddress = object.senderAddress;
            if (object.recipientAddress != null)
                if (typeof object.recipientAddress === "string")
                    $util.base64.decode(object.recipientAddress, message.recipientAddress = $util.newBuffer($util.base64.length(object.recipientAddress)), 0);
                else if (object.recipientAddress.length >= 0)
                    message.recipientAddress = object.recipientAddress;
            if (object.nonce != null)
                if (typeof object.nonce === "string")
                    $util.base64.decode(object.nonce, message.nonce = $util.newBuffer($util.base64.length(object.nonce)), 0);
                else if (object.nonce.length >= 0)
                    message.nonce = object.nonce;
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.createdAt != null) {
                if (typeof object.createdAt !== "object")
                    throw TypeError(".utxos.Utxo.createdAt: object expected");
                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
            }
            if (object.publishedAt != null) {
                if (typeof object.publishedAt !== "object")
                    throw TypeError(".utxos.Utxo.publishedAt: object expected");
                message.publishedAt = $root.google.protobuf.Timestamp.fromObject(object.publishedAt);
            }
            if (object.updatedAt != null) {
                if (typeof object.updatedAt !== "object")
                    throw TypeError(".utxos.Utxo.updatedAt: object expected");
                message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
            }
            if (object.pointer != null) {
                if (typeof object.pointer !== "object")
                    throw TypeError(".utxos.Utxo.pointer: object expected");
                message.pointer = $root.pointers.UtxoPointer.fromObject(object.pointer);
            }
            return message;
        };

        /**
         * Creates a plain object from an Utxo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof utxos.Utxo
         * @static
         * @param {utxos.Utxo} message Utxo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Utxo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subject = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.blockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.blockHeight = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.txId = "";
                else {
                    object.txId = [];
                    if (options.bytes !== Array)
                        object.txId = $util.newBuffer(object.txId);
                }
                object.txIndex = 0;
                object.inputIndex = 0;
                object.utxoType = options.enums === String ? "CONTRACT" : 0;
                if (options.bytes === String)
                    object.utxoId = "";
                else {
                    object.utxoId = [];
                    if (options.bytes !== Array)
                        object.utxoId = $util.newBuffer(object.utxoId);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
                if (options.bytes === String)
                    object.senderAddress = "";
                else {
                    object.senderAddress = [];
                    if (options.bytes !== Array)
                        object.senderAddress = $util.newBuffer(object.senderAddress);
                }
                if (options.bytes === String)
                    object.recipientAddress = "";
                else {
                    object.recipientAddress = [];
                    if (options.bytes !== Array)
                        object.recipientAddress = $util.newBuffer(object.recipientAddress);
                }
                if (options.bytes === String)
                    object.nonce = "";
                else {
                    object.nonce = [];
                    if (options.bytes !== Array)
                        object.nonce = $util.newBuffer(object.nonce);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.createdAt = null;
                object.publishedAt = null;
                object.updatedAt = null;
                object.pointer = null;
            }
            if (message.subject != null && message.hasOwnProperty("subject"))
                object.subject = message.subject;
            if (message.blockHeight != null && message.hasOwnProperty("blockHeight"))
                if (typeof message.blockHeight === "number")
                    object.blockHeight = options.longs === String ? String(message.blockHeight) : message.blockHeight;
                else
                    object.blockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.blockHeight) : options.longs === Number ? new $util.LongBits(message.blockHeight.low >>> 0, message.blockHeight.high >>> 0).toNumber() : message.blockHeight;
            if (message.txId != null && message.hasOwnProperty("txId"))
                object.txId = options.bytes === String ? $util.base64.encode(message.txId, 0, message.txId.length) : options.bytes === Array ? Array.prototype.slice.call(message.txId) : message.txId;
            if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                object.txIndex = message.txIndex;
            if (message.inputIndex != null && message.hasOwnProperty("inputIndex"))
                object.inputIndex = message.inputIndex;
            if (message.utxoType != null && message.hasOwnProperty("utxoType"))
                object.utxoType = options.enums === String ? $root.utxos.UtxoType[message.utxoType] === undefined ? message.utxoType : $root.utxos.UtxoType[message.utxoType] : message.utxoType;
            if (message.utxoId != null && message.hasOwnProperty("utxoId"))
                object.utxoId = options.bytes === String ? $util.base64.encode(message.utxoId, 0, message.utxoId.length) : options.bytes === Array ? Array.prototype.slice.call(message.utxoId) : message.utxoId;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
                object.senderAddress = options.bytes === String ? $util.base64.encode(message.senderAddress, 0, message.senderAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderAddress) : message.senderAddress;
            if (message.recipientAddress != null && message.hasOwnProperty("recipientAddress"))
                object.recipientAddress = options.bytes === String ? $util.base64.encode(message.recipientAddress, 0, message.recipientAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.recipientAddress) : message.recipientAddress;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = options.bytes === String ? $util.base64.encode(message.nonce, 0, message.nonce.length) : options.bytes === Array ? Array.prototype.slice.call(message.nonce) : message.nonce;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
            if (message.publishedAt != null && message.hasOwnProperty("publishedAt"))
                object.publishedAt = $root.google.protobuf.Timestamp.toObject(message.publishedAt, options);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
            if (message.pointer != null && message.hasOwnProperty("pointer"))
                object.pointer = $root.pointers.UtxoPointer.toObject(message.pointer, options);
            return object;
        };

        /**
         * Converts this Utxo to JSON.
         * @function toJSON
         * @memberof utxos.Utxo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Utxo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Utxo
         * @function getTypeUrl
         * @memberof utxos.Utxo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Utxo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/utxos.Utxo";
        };

        return Utxo;
    })();

    return utxos;
})();

export { $root as default };
