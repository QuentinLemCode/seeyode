import { CodeNode } from './code-node.js';

export class CodeFunction extends CodeNode {
  #params: string[] = [];

  constructor(params: string[] = []) {
    super();
    this.#params = params;
  }

  public getParams(): string[] {
    return this.#params;
  }
}
