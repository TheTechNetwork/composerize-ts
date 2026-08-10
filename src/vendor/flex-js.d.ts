// Type declarations for the vendored flex-js lexer (./flex-js.js).
// Mirrors the public API used by the parser; ported from flex-js@1.0.5.

export type CallbackAction = (lexer: Lexer) => any;

export interface Rule {
  expression: string | RegExp;
  action?: CallbackAction;
}

export default class Lexer {
  static STATE_INITIAL: string;
  static STATE_ANY: string;
  static RULE_EOF: string;
  static EOF: number;
  text: string;
  value: string;
  state: string;

  constructor();

  reset(): void;
  clear(): void;
  setIgnoreCase(b: boolean): void;
  setDebugEnabled(b: boolean): void;
  addState(name: string, exclusive?: boolean): void;
  addDefinition(name: string, expression: string | RegExp): void;
  addStateRule(states: string | string[], expression: string | RegExp, action?: CallbackAction): any;
  addStateRules(states: string | string[], rules: Array<Rule>): any;
  addRule(expression: string | RegExp, action?: CallbackAction): any;
  addRules(rules: Array<Rule>): any;
  setSource(source: string): void;
  lex(): any;
  lexAll(): any;
  discard(): undefined;
  echo(): void;
  begin(state?: string): void;
  reject(): void;
  more(n?: number): void;
  less(n?: number): void;
  unput(s: string): void;
  input(n?: number): string;
  terminate(): void;
  restart(s: string): void;
  pushState(s: string): void;
  topState(): string;
  popState(): void;
  switchState(s: string): void;
}
