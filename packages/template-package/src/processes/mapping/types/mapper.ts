interface Mapper<T, U> {
  map(model: T): U;
}

export type { Mapper };
