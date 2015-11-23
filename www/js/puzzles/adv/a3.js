PUZZLO.tower_categories.advanced.addTower('Shifter Tower', 10, [{

    moves: 1,
    name: "Shifters",
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
    name: "",
    description: "You can shift multiple items if they're lined up.",
    items: ['SD '],
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
    name: "",
    items: ['SR ','SUL'],
    contents: [
        ['   ','   ','IY1','   '],
        ['IB1','   ','IB1','   '],
        ['   ','   ','IB1','   '],
        ['   ','IY1','IY1','   ']
    ]
},{

    moves: 3,
    name: "",
    items: ['SL ','SU'],
    contents: [
        ['   ','   ','IY1','   '],
        ['DN1','DN1','IB1','IY1'],
        ['DN1','DN1','IY1','IB1'],
        ['   ','   ','IB1','   ']
    ]
},{

    moves: 2,
    name: "",
    items: ['BR ','SL ','SL ','SL '],
    contents: [
        ['   ','DN2','   '],
        ['   ','   ','   '],
        ['   ','DY1','WWW'],
        ['   ','   ','   '],
        ['WWW','DN2','   ']
    ]
},{

    moves: 3,
    name: "",
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

    moves: 4,
    name: "Boggity Boo",
    items: ['SD ','SD ','SR ','SD '],
    contents: [
        ['WWW','WWW','WWW','   ','   '],
        ['WWW','Dn3','WWW','[N]','   '],
        ['   ','[N]','   ','   ','WWW'],
        ['WWW','[N]','   ','   ','WWW'],
        ['WWW','[N]','WWW','   ','   '],
        ['   ','   ','   ','BB ','BR '],
        ['   ','   ','   ','WWW','   ']
    ]
}

]);
