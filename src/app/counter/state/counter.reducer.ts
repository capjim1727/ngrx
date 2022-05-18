import { initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

const _counterReducer = createReducer(
    initialState,
    on(increment, (state: any) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    
    on(decrement, (state: any) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
   
    on(reset, (state: any) => {
        return {
            ...state,
            counter: 0
        };
    }),
);

export function counterReducer(state: { counter: number; } | undefined, action: Action) { 
    return _counterReducer(state, action);
}
