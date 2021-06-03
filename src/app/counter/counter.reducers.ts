import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, resetCount } from './counter.actions';
import { Counter } from './counter.model';
const initialState: Counter = {
  count: 0
};

const _counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return {
      count: state.count + 1
    };
  }),
  on(decrement, state => {
    return {
      count: state.count - 1
    };
  }),
  on(resetCount, state => {
    return {
      count: 0
    };
  })
);

export const CounterReducer = (state: Counter, action: Action) => {
  return _counterReducer(state, action);
};
