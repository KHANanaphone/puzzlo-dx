PUZZLO.tower_categories.dx.addTower('Teleporter Tower', 5, [{

    moves: 3,
    name: "Teleporters 1",
    description: "Shoot a teleport pad and watch the magic happen",
    disabled: {
        top: [0,2,3,4,5],
        left: [0,1,3,4],
        right: [0,1,2,3,4],
        bottom: [0,2,3,4,5]
    },
    contents: [
        ['WWW','   ','WWW','WWW','WWW','WWW',],
        ['WWW','   ','WWW','DN1','   ','WWW',],
        ['   ','T1 ','WWW','T1 ','DN1','WWW',],
        ['WWW','   ','WWW','DN1','   ','WWW',],
        ['WWW','   ','WWW','WWW','WWW','WWW',]
    ]
},{

    moves: 1,
    name: "Teleporters 2",
    description: "You can have multiple colors of pads",
    items: ['T1 ','T2 ','T3 ','T4 '],
    contents: [
        ['   ','   ','DB1','   ','   '],
        ['T1 ','   ','DB1','   ','   '],
        ['T2 ','   ','DB1','   ','   '],
        ['T3 ','   ','DB1','   ','   '],
        ['T4 ','   ','DB1','   ','   ']
    ]
},{

    moves: 4,
    name: "Teleporters 3",
    items: ['SU ','SU ','SU '],
    disabled: {
        top: [0,1,2,3,4,5],
        left: [0,5],
        right: [0,1,2,3,4,5],
        bottom: [0,1,2,3,4,5]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW','WWW'],
        ['   ','T1 ','   ','   ','WWW','WWW'],
        ['   ','T1 ','T2 ','   ','WWW','WWW'],
        ['   ','   ','T2 ','T3 ','WWW','WWW'],
        ['   ','   ','   ','T3 ','DN4','WWW'],
        ['WWW','WWW','WWW','WWW','WWW','WWW'],
    ]
},{

    moves: 1,
    name: "Teleporters 4",
    items: ['T1 ','T1 ','M\\'],
    description: "Remember the Synchro",
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['   ','   ','DN3','   ','   '],
        ['   ','   ','   ','   ','DN1'],
        ['   ','   ','   ','   ','   ']
    ]
},{

    moves: 1,
    name: "Teleporters 5",
    items: ['BR ','SU '],
    contents: [
        ['   ','   ','   ','   '],
        ['T1 ','DN2','   ','   '],
        ['   ','   ','DN2','T1 '],
        ['   ','   ','   ','   ']
    ]
},{

    moves: 2,
    name: "Teleporters 6",
    items: ['M\\','M\\','T1 ','T1 '],
    disabled: {
        top: [0,3,7],
        left: [0,1,2],
        right: [0,1,2],
        bottom: [0,5,7]
    },
    contents: [
        ['WWW','   ','   ','WWW','M--','   ','   ','WWW'],
        ['WWW','DB1','   ','DY1','   ','DR1','BB ','WWW'],
        ['WWW','   ','   ','BR ','   ','WWW','   ','WWW'],
    ]
},{

    moves: 4,
    name: "Teleporters 7",
    description: "If there's only one teleporter, the shot will just disappear.",
    items: ['T4 ','T4 '],
    disabled: {
        top: [0,1,2,3],
        left: [0,1,2,3,4,5],
        right: [4],
        bottom: [0,1,2,3,4,5]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','   ','   '],
        ['WWW','WWW','WWW','BY ','   ','DB1'],
        ['WWW','WWW','   ','[Y]','   ','M//'],
        ['WWW','BR ','   ','DB1','DN1','DN1'],
        ['WWW','WWW','   ','DY1','   ','DY1'],
        ['WWW','WWW','WWW','WWW','WWW','WWW']
    ]
},{

    moves: 8,
    name: "Teleporters 8",
    items: ['SL ','SL ','SU '],
    disabled: {
        top: [0,1,2,3,4],
        left: [0,1,2,3,4],
        right: [0,1,2,3,4,5,6,7],
        bottom: [3,4]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW'],
        ['WWW','   ','M//','M\\','WWW'],
        ['WWW','[N]','T1 ','M//','WWW'],
        ['WWW','   ','M\\','M//','WWW'],
        ['WWW','WWW','WWW','WWW','WWW'],
        ['   ','M//','M\\','WWW','WWW'],
        ['   ','DB1','T1 ','DN1','WWW'],
        ['   ','   ','   ','WWW','WWW']
    ]
}
]);
