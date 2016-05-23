PUZZLO.tower_categories.advanced.addTower('Mirror Tower', 15, [{

    moves: 3,
    name: "Mirrors 1",
    description: "Mirrors will change the direction of a shot.",
    contents: [
        ['   ','   ','   ','DB1'],
        ['DB1','   ','   ','M//'],
        ['DN2','   ','   ','M||'],
        ['DY1','   ','   ','M\\'],
        ['   ','   ','   ','DY1']
    ]
},{

    moves: 1,
    name: "Mirrors 2",
    items: ['BR '],
    contents: [
        ['   ','   ','   ','   ','DN2'],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','DR2','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['M||','   ','   ','   ','M||'],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','M--','   ','   ']
    ]
},{

    moves: 1,
    name: "Mirrors 3",
    items: ['M\\','M\\','M//','M--'],
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','DN4','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ']
    ]
},{

    moves: 4,
    name: "Mirrors 4",
    description: "Mirrors can be broken by <br />hitting them in a certain way.",
    disabled: {
        top: [0,1,2,3,4,5],
        left: [0],
        right: [0],
        bottom: []
    },
    items: ['M//'],
    contents: [
        ['WWW','WWW','WWW','WWW','WWW'],
        ['DN2','   ','M--','DY1','DB1'],
        ['   ','   ','   ','WWW','   '],
        ['BR ','   ','DN2','   ','   ']
    ]
},{

    moves: 3,
    name: "Mirrors 5",
    items: ['M//','BR '],
    disabled: {
        top: [0,1,2],
        left: [0,1,2],
        right: [],
        bottom: []
    },
    contents: [
        ['WWW','WWW','WWW','   ','   '],
        ['WWW','DY1','WWW','   ','   '],
        ['WWW','M||','WWW','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','DN1']
    ]
},{

    moves: 2,
    name: "Mirrors 6",
    items: ['BR ','M\\','M//'],
    disabled: {
        top: [],
        left: [6],
        right: [],
        bottom: [0]
    },
    contents: [
        ['DN1','   ','DN1','   ','DN1'],
        ['   ','   ','   ','   ','   '],
        ['DN1','   ','DN1','   ','DN1'],
        ['   ','   ','   ','   ','   '],
        ['DN1','   ','DN1','   ','DN1'],
        ['   ','   ','   ','   ','   '],
        ['WWW','   ','DN1','   ','DN1']
    ]
},{

    moves: 2,
    name: "Loops",
    description: "All action must stop before a level is cleared.",
    disabled: {
        top: [1],
        left: [0,1,3,4,5],
        right: [],
        bottom: []
    },
    contents: [
        ['M--','WWW','M//','M//','M//','M//'],
        ['DN3','WWW','M//','M//','M//','M//'],
        ['BY ','WWW','M//','M//','M//','M//'],
        ['[N]','WWW','M//','M//','M//','M//'],
        ['DN3','WWW','M//','M//','M//','M//'],
        ['M--','DN1','M//','M//','M//','M//']
    ]
},{

    moves: 3,
    name: "Mirrors 8",
    items: ['SR ','SR ','SR ','SR '],
    disabled: {
        top: [0,1,2,3,4,5],
        left: [0,1,6,7],
        right: [0,1,2,6,7],
        bottom: [0,1,2,3,4,5]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW','WWW'],
        ['WWW','   ','   ','   ','DN1','WWW'],
        ['[N]','   ','   ','   ','[N]','WWW'],
        ['   ','[N]','   ','   ','   ','   '],
        ['   ','   ','   ','M||','   ','   '],
        ['   ','M//','   ','   ','   ','   '],
        ['WWW','BR ','   ','   ','   ','WWW'],
        ['WWW','WWW','WWW','WWW','WWW','WWW']
    ]
}

]);
