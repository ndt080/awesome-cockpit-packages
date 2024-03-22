import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

export function useIndeterminateSelect<
  TState extends Record<string, boolean> = Record<string, boolean>,
>(initialState: (() => TState) | TState, deps: unknown[] = []) {
  const [selectState, setSelectState] = useState<TState>(initialState);
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!isRendered) {
      setIsRendered(true);
      return;
    }
    setSelectState(initialState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  const onSelect = useCallback((key: keyof TState, value: TState[keyof TState]) => {
    setSelectState((prevState) => {
      const nextState = structuredClone(prevState);
      nextState[key] = value;
      return nextState;
    });
  }, []);

  const onSelectAll = useCallback((value: boolean) => {
    setSelectState((prevState) => {
      const nextState = structuredClone(prevState);
      Object.keys(nextState).forEach((key) => {
        (nextState as Record<string, boolean>)[key] = value;
      });
      return nextState;
    });
  }, []);

  const totalCount = useMemo(() => {
    return Object.values(selectState).length;
  }, [selectState]);

  const selectedCount = useMemo(() => {
    return Object.values(selectState).filter(Boolean).length;
  }, [selectState]);

  return { selectState, totalCount, selectedCount, onSelect, onSelectAll };
}
