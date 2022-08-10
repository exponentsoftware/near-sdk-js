import { Bytes } from "./utils";
export declare function log(...params: any[]): void;
export declare function signerAccountId(): string;
export declare function signerAccountPk(): Bytes;
export declare function predecessorAccountId(): string;
export declare function blockIndex(): bigint;
export declare function blockHeight(): bigint;
export declare function blockTimestamp(): bigint;
export declare function epochHeight(): bigint;
export declare function attachedDeposit(): bigint;
export declare function prepaidGas(): bigint;
export declare function usedGas(): bigint;
export declare function randomSeed(): Bytes;
export declare function sha256(value: Bytes): Bytes;
export declare function keccak256(value: Bytes): Bytes;
export declare function keccak512(value: Bytes): Bytes;
export declare function ripemd160(value: Bytes): Bytes;
export declare function ecrecover(hash: Bytes, sig: Bytes, v: number, malleabilityFlag: number): Bytes | null;
export declare function panic(msg?: string): never;
export declare function panicUtf8(msg: string): never;
export declare function logUtf8(msg: string): void;
export declare function logUtf16(msg: string): void;
export declare function storageRead(key: Bytes): Bytes | null;
export declare function storageHasKey(key: Bytes): boolean;
export declare function validatorStake(accountId: string): any;
export declare function validatorTotalStake(): bigint;
export declare function altBn128G1Multiexp(value: Bytes): Bytes;
export declare function altBn128G1Sum(value: Bytes): Bytes;
export declare function altBn128PairingCheck(value: Bytes): boolean;
export declare function jsvmAccountId(): string;
export declare function jsvmJsContractName(): string;
export declare function jsvmMethodName(): string;
export declare function jsvmArgs(): Bytes;
export declare function jsvmStorageWrite(key: Bytes, value: Bytes): boolean;
export declare function jsvmStorageRead(key: Bytes): Bytes | null;
export declare function jsvmStorageRemove(key: Bytes): boolean;
export declare function jsvmStorageHasKey(key: Bytes): boolean;
export declare function jsvmCallRaw(contractName: string, method: string, args: any): Bytes | null;
export declare function jsvmCall(contractName: string, method: string, args: any): any | null;
export declare function storageGetEvicted(): Bytes;
export declare function jsvmValueReturn(value: Bytes): void;
export declare function currentAccountId(): string;
export declare function input(): Bytes;
export declare function storageUsage(): bigint;
export declare function accountBalance(): bigint;
export declare function accountLockedBalance(): bigint;
export declare function valueReturn(value: Bytes): void;
export declare function promiseCreate(accountId: string, methodName: string, args: Bytes, amount: number | bigint, gas: number | bigint): bigint;
export declare function promiseThen(promiseIndex: number | bigint, accountId: string, methodName: string, args: Bytes, amount: number | bigint, gas: number | bigint): any;
export declare function promiseAnd(...promiseIndex: number[] | bigint[]): bigint;
export declare function promiseBatchCreate(accountId: string): bigint;
export declare function promiseBatchThen(promiseIndex: number | bigint, accountId: string): bigint;
export declare function promiseBatchActionCreateAccount(promiseIndex: number | bigint): void;
export declare function promiseBatchActionDeployContract(promiseIndex: number | bigint, code: Bytes): void;
export declare function promiseBatchActionFunctionCall(promiseIndex: number | bigint, methodName: string, args: Bytes, amount: number | bigint, gas: number | bigint): void;
export declare function promiseBatchActionTransfer(promiseIndex: number | bigint, amount: number | bigint): void;
export declare function promiseBatchActionStake(promiseIndex: number | bigint, amount: number | bigint, publicKey: Bytes): void;
export declare function promiseBatchActionAddKeyWithFullAccess(promiseIndex: number | bigint, publicKey: Bytes, nonce: number | bigint): void;
export declare function promiseBatchActionAddKeyWithFunctionCall(promiseIndex: number | bigint, publicKey: Bytes, nonce: number | bigint, allowance: number | bigint, receiverId: string, methodNames: string): void;
export declare function promiseBatchActionDeleteKey(promiseIndex: number | bigint, publicKey: Bytes): void;
export declare function promiseBatchActionDeleteAccount(promiseIndex: number | bigint, beneficiaryId: string): void;
export declare function promiseResultsCount(): bigint;
export declare enum PromiseResult {
    NotReady = 0,
    Successful = 1,
    Failed = 2
}
export declare function promiseResult(resultIdx: number | bigint): Bytes | PromiseResult.NotReady | PromiseResult.Failed;
export declare function promiseReturn(promiseIdx: number | bigint): void;
export declare function storageWrite(key: Bytes, value: Bytes): boolean;
export declare function storageRemove(key: Bytes): boolean;
export declare function storageByteCost(): bigint;
