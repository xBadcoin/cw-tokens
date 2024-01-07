/* tslint:disable */
/* eslint-disable */

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly instantiate: (a: number, b: number, c: number) => number;
  readonly execute: (a: number, b: number, c: number) => number;
  readonly query: (a: number, b: number) => number;
  readonly migrate: (a: number, b: number) => number;
  readonly allocate: (a: number) => number;
  readonly deallocate: (a: number) => void;
  readonly requires_staking: () => void;
  readonly requires_iterator: () => void;
  readonly interface_version_8: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
