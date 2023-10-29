export type TransitionState = {
    [key: string]: string;
};

type TransitionPushDown = {
    [char: string]: TransitionDetail[];
};

export type TransitionDetail = {
    next_state: string;
    pop_symbol: string;
    push_symbols: string[];
};

export type Automaton = {
    states: string[];
    alphabet: string[];
    transitions: {
        [key: string]: TransitionState;
    };
    initialState: string;
    acceptanceStates: string[];
};

export type AutomatonPushDown = {
    states: string[];
    alphabet: string[];
    transitions: {
        [state: string]: TransitionPushDown;
    };
    initialState: string;
    acceptanceStates: string[];
};

export type AutomatonTypes = 'finite' | 'pushdown';