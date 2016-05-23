PUZZLO.tower_categories.advanced.addTower('Shifter Tower', 10, [{

    moves: 1,
    name: "Shifters 1",
    description: "Use a shifter to move an item on the playing field.",
    items: ['SU '],
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','DN1','   ','DN1','   '],
        ['   ','   ','DN1','   ','   '],
        ['   ','   ','   ','   ','   ']
    ]
},{

    moves: 1,
    name: "Shifters 2",
    description: "You can shift multiple items if they're lined up.",
    items: ['SD '],
    disabled: {
        top: [],
        left: [4,5],
        right: [],
        bottom: [0]
    },
    contents: [
        ['   ','   ','DN1'],
        ['   ','   ','[N]'],
        ['   ','   ','DN1'],
        ['BR ','   ','[N]'],
        ['WWW','   ','DN1'],
        ['WWW','   ','   ']
    ]
},{

    moves: 2,
    name: "Shifters 3",
    items: ['SR ','SUL'],
    contents: [
        ['   ','   ','DY1','   '],
        ['DB1','   ','DB1','   '],
        ['   ','   ','DB1','   '],
        ['   ','DY1','DY1','   ']
    ]
},{

    moves: 2,
    name: "Shifters 4",
    items: ['SUL','SUR','SDR','SDL'],
    disabled: {
        top: [0,1,2,3,4],
        left: [0,1,2,3,4],
        right: [0],
        bottom: [0]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW'],
        ['WWW','   ','DN2','   ','   '],
        ['WWW','   ','DN2','   ','   '],
        ['WWW','   ','DN2','   ','   '],
        ['WWW','   ','   ','   ','   ']
    ]
},{

    moves: 3,
    name: "Shifters 5",
    items: ['SL ','SU'],
    contents: [
        ['   ','   ','DY1','   '],
        ['DN1','DN1','DB1','DY1'],
        ['DN1','DN1','DY1','DB1'],
        ['   ','   ','DB1','   ']
    ]
},{

    moves: 2,
    name: "Shifters 6",
    items: ['BR ','SL ','SL ','SL '],
    disabled: {
        top: [],
        left: [4],
        right: [2],
        bottom: []
    },
    contents: [
        ['   ','DN2','   '],
        ['   ','   ','   '],
        ['   ','IY1','WWW'],
        ['   ','   ','   '],
        ['WWW','DN2','   ']
    ]
},{

    moves: 3,
    name: "Shifters 7",
    items: ['SU ','SD ','SU '],
    contents: [
        ['   ','   ','   ','   ','   ','   '],
        ['   ','DN1','DN1','[N]','DN1','   '],
        ['   ','[N]','DN1','DN1','DN1','   '],
        ['   ','DN1','DN1','DN1','[N]','   '],
        ['   ','DN1','[N]','DN1','DN1','   '],
        ['   ','   ','   ','   ','   ','   ']
    ]
},{

    moves: 1,
    name: "Shifters 8",
    items: ['SR ','SUR','SL ','SUL','SR '],
    contents: [
        ['   ','   ','   ','   ','   ','   '],
        ['   ','DN1','DN1','DN1','   ','   '],
        ['   ','   ','   ','DN1','   ','   '],
        ['   ','BB ','DN1','DN1','   ','   '],
        ['   ','   ','   ','   ','   ','   ']
    ]
}

]);
