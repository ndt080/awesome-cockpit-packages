type NestedKeyOf<T extends object> = {
  [Key in keyof T & (string | number)]: Exclude<T[Key], undefined> extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<Exclude<T[Key], undefined>>}`
    : `${Key}`;
}[keyof T & (string | number)];

export type { NestedKeyOf };
