type Action<T extends string, P = void> = P extends void
  ? { type: T }
  : { type: T; payload: P };

type Reducer<S, A extends { type: string }> = (
  state: S | undefined,
  action: A,
) => S;

type Listener<S> = (state: S) => void;

type Unsubscribe = () => void;

interface Store<S, A extends { type: string }> {
  getState(): S;
  dispatch(action: A): void;
  subscribe(listener: Listener<S>): Unsubscribe;
}

type Middleware<S, A extends { type: string }> = (
  store: Store<S, A>,
) => (next: (action: A) => void) => (action: A) => void;

type Selector<S, R> = (state: S) => R;

type ActionCreator<T extends string, P = void> = P extends void
  ? () => { type: T }
  : (payload: P) => { type: T; payload: P };

type ThunkAction<S, A extends { type: string }, R = void> = (
  dispatch: (action: A) => void,
  getState: () => S,
) => R;
