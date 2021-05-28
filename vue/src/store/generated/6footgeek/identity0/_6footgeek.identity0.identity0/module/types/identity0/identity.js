/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'sixfootgeek.identity';
const baseIdentity = { creator: '', id: '', name: '', dob: '', publicKey: '' };
export const Identity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.dob !== '') {
            writer.uint32(34).string(message.dob);
        }
        if (message.publicKey !== '') {
            writer.uint32(42).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIdentity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.dob = reader.string();
                    break;
                case 5:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIdentity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.dob !== undefined && object.dob !== null) {
            message.dob = String(object.dob);
        }
        else {
            message.dob = '';
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.dob !== undefined && (obj.dob = message.dob);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIdentity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.dob !== undefined && object.dob !== null) {
            message.dob = object.dob;
        }
        else {
            message.dob = '';
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = '';
        }
        return message;
    }
};
const baseMsgCreateIdentity = { creator: '', name: '', dob: '', publicKey: '' };
export const MsgCreateIdentity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.dob !== '') {
            writer.uint32(26).string(message.dob);
        }
        if (message.publicKey !== '') {
            writer.uint32(34).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateIdentity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.dob = reader.string();
                    break;
                case 4:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateIdentity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.dob !== undefined && object.dob !== null) {
            message.dob = String(object.dob);
        }
        else {
            message.dob = '';
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.dob !== undefined && (obj.dob = message.dob);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateIdentity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.dob !== undefined && object.dob !== null) {
            message.dob = object.dob;
        }
        else {
            message.dob = '';
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = '';
        }
        return message;
    }
};
