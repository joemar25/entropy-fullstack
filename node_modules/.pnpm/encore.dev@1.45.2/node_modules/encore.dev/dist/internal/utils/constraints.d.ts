type UnUnion<T, S> = T extends S ? ([S] extends [T] ? T : never) : never;
type NotUnion<T> = UnUnion<T, T>;
/**
 * Literal requires that the given type is a literal value, and not a union of literals.
 */
export type Literal<Value extends OfType, OfType> = OfType extends Value ? never : NotUnion<Value>;
/** Value must be a single string literal */
export type StringLiteral<Value extends string> = Literal<Value, string>;
export {};
