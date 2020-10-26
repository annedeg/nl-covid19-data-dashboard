/* eslint-disable */
import ts, {
  SyntaxKind,
  Node,
  Identifier,
  ImportDeclaration,
  VariableDeclaration,
  PropertyAccessExpression,
  PrivateIdentifier,
} from 'typescript';
import fs from 'fs';
import path from 'path';

const componentPath = path.join(__dirname, 'test.ts');

const node = ts.createSourceFile(
  'x.ts',
  fs.readFileSync(componentPath, 'utf8'),
  ts.ScriptTarget.Latest
);

type IdentifierUnion = Identifier | PrivateIdentifier;

const localeIdentifiers: Map<
  IdentifierUnion,
  IdentifierUnion | undefined
> = new Map();
const visitors: Record<number, (child: any) => void> = {
  [SyntaxKind.VariableDeclaration]: (child: VariableDeclaration) => {
    if (child.initializer?.kind === SyntaxKind.PropertyAccessExpression) {
      const initializer: PropertyAccessExpression = child.initializer as PropertyAccessExpression;
      if (!localeIdentifiers.has(initializer.name)) {
        //localeIdentifiers.set(child.name, undefined);
      }
    }
  },
  [SyntaxKind.ImportDeclaration]: (child: ImportDeclaration) => {
    if (
      child.importClause?.name &&
      (child.moduleSpecifier as any).text.indexOf('/locale') > -1
    ) {
      localeIdentifiers.set(child.importClause.name, undefined);
    }
  },
};

const childVisitor = (child: Node) => {
  if (visitors[child.kind]) {
    visitors[child.kind](child);
  }
  child.forEachChild(childVisitor);
};

node.forEachChild(childVisitor);
