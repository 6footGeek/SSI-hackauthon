import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "example.blog.blog";
export interface Identity {
    creator: string;
    id: string;
    name: string;
    dob: string;
    publicKey: string;
}
export interface MsgCreateIdentity {
    creator: string;
    name: string;
    dob: string;
    publicKey: string;
}
export declare const Identity: {
    encode(message: Identity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Identity;
    fromJSON(object: any): Identity;
    toJSON(message: Identity): unknown;
    fromPartial(object: DeepPartial<Identity>): Identity;
};
export declare const MsgCreateIdentity: {
    encode(message: MsgCreateIdentity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateIdentity;
    fromJSON(object: any): MsgCreateIdentity;
    toJSON(message: MsgCreateIdentity): unknown;
    fromPartial(object: DeepPartial<MsgCreateIdentity>): MsgCreateIdentity;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
