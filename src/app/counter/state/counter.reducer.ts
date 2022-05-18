import { initialState } from './counter.state';
import { Action, createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from './counter.actions';

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

    on(customIncrement, (state, action) => {
        console.log(action);
        return {
            ...state,
            counter: state.counter + action.count,
       } 
    })
);

export function counterReducer(state: { counter: number; } | undefined, action: Action) { 
    return _counterReducer(state, action);
}
