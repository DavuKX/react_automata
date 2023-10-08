import {Automaton} from "@/types/automaton";

export const graphData = {
    nodes: [
        {data: {id: "0", label: "q0"}},
        {data: {id: "1", label: "q1"}},
        {data: {id: "2", label: "q2"}},
        {data: {id: "3", label: "q3"}},
        {data: {id: "4", label: "q4"}},
        {data: {id: "5", label: "q5"}},
        {data: {id: "6", label: "q6"}},
        {data: {id: "7", label: "q7"}},
        {data: {id: "8", label: "q8"}},
        {data: {id: "9", label: "q9"}},
        {data: {id: "10", label: "q10"}},
        {data: {id: "11", label: "q11"}},
        {data: {id: "12", label: "q12"}},
        {data: {id: "13", label: "q13"}},
        {data: {id: "14", label: "q14"}}
    ],
    edges: [
        {
            data: {source: "0", target: "1", label: "B"}
        },
        {
            data: {source: "0", target: "2", label: "A"}
        },
        {
            data: {source: "2", target: "3", label: "A"}
        },
        {
            data: {source: "2", target: "4", label: "B"}
        },
        {
            data: {source: "3", target: "5", label: "A"}
        },
        {
            data: {source: "4", target: "5", label: "A"}
        },
        {
            data: {source: "3", target: "14", label: "B"}
        },
        {
            data: {source: "4", target: "14", label: "B"}
        },
        {
            data: {source: "5", target: "7", label: "B"}
        },
        {
            data: {source: "7", target: "14", label: "B"}
        },
        {
            data: {source: "5", target: "6", label: "A"}
        },
        {
            data: {source: "7", target: "8", label: "A"}
        },
        {
            data: {source: "8", target: "9", label: "A"}
        },
        {
            data: {source: "9", target: "14", label: "B"}
        },
        {
            data: {source: "6", target: "14", label: "B"}
        },
        {
            data: {source: "6", target: "7", label: "A"}
        },
        {
            data: {source: "8", target: "10", label: "B"}
        },
        {
            data: {source: "10", target: "14", label: "B"}
        },
        {
            data: {source: "10", target: "11", label: "A"}
        },
        {
            data: {source: "9", target: "11", label: "A"}
        },
        {
            data: {source: "11", target: "12", label: "A"}
        },
        {
            data: {source: "11", target: "13", label: "B"}
        }
    ]
}

export const automaton: Automaton = {
    states: ['start', 'q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13'],
    alphabet: ['a', 'b'],
    transitions: {
        start: {a: 'q1', b: 'q0'},
        q1: {a: 'q2', b: 'q3'},
        q2: {a: 'q4', b: 'q13'},
        q3: {a: 'q4', b: 'q13'},
        q4: {a: 'q5', b: 'q6'},
        q5: {a: 'q7', b: 'q13'},
        q6: {a: 'q7', b: 'q13'},
        q7: {a: 'q8', b: 'q9'},
        q8: {a: 'q10'},
        q9: {a: 'q10'},
        q10: {a: 'q11', b: 'q12'},
    },
    initialState: 'start',
    acceptanceStates: ['q2', 'q3', 'q5', 'q6', 'q8', 'q9', 'q11', 'q12'],
};