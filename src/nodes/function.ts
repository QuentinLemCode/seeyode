import { CodeNode } from '@app/nodes/code-node.js';

export class Function extends CodeNode {
  constructor(private params: string[] = []) {
    super();
  }
}