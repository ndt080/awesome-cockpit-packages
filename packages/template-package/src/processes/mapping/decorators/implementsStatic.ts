export function ImplementsStatic<T>() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return <U extends T>(constructor: U) => {};
}
