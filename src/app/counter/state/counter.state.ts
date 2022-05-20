export interface CounterState {
    [x: string]: any;
    counter: number;
}

export const initialState: CounterState = {
    counter: 4,
};