PUZZLO.tower_categories.dx.addTower('Synchro Tower', 0, [{

    moves: 2,
    name: "Intro to Synchro",
    description: "All puzzles in the DX tower might require taking an action while shots are still on the screen.",
    disabled: {
        top: [0],
        left: [0,1,2,3,4,5,6],
        right: [],
        bottom: [0]
    },
    contents: [
        ['WWW','DN1','DN1'],
        ['WWW','DB1','DY1'],
        ['WWW','   ','   '],
        ['WWW','   ','   '],
        ['WWW','M\\','M//']
    ]
},{

    moves: 1,
    name: "Synchro 2",
    items: ["BR ","BR ","BR "],
    contents: [
        ['   ','   ','   '],
        ['   ','DN3','   '],
        ['   ','   ','   ']
    ]
},{

    moves: 2,
    name: "Synchro 3",
    items: ["M--"],
    contents: [
        ['DY1','DB1','   ','   ','M\\'],
        ['   ','M//','   ','   ','M//'],
        ['   ','M\\','   ','   ','M\\'],
        ['M--','   ','   ','   ','M//'],
        ['DN1','   ','   ','   ','   ']
    ]
},{

    moves: 1,
    name: "Synchro 4",
    items: ["SR ","SL "],
    disabled: {
        top: [],
        left: [3],
        right: [],
        bottom: [1]
    },
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','   ','BY ','   ','   '],
        ['   ','   ','   ','   ','   '],
        ['WWW','BB ','BR ','   ','   '],
        ['   ','DY1','   ','   ','DN1'],
        ['   ','WWW','   ','   ','   ']
    ]
},{

    moves: 2,
    name: "Synchro 5",
    items: ["BR ",'M||','M--'],
    disabled: {
        top: [3],
        left: [],
        right: [],
        bottom: []
    },
    contents: [
        ['M//','   ','   ','WWW','DR1'],
        ['   ','   ','   ','DY1','   '],
        ['   ','   ','BR ','DY1','   '],
        ['   ','   ','   ','DY1','   '],
        ['   ','   ','   ','DY1','   '],
        ['   ','   ','   ','DY1','   '],
        ['   ','   ','   ','DY1','   '],
        ['   ','   ','   ','[R]','   ']
    ]
},{

    moves: 3,
    name: "Synchro 6",
    items: ['M//','M--','M//'],
    disabled: {
        top: [0],
        left: [0,1,2,3,5],
        right: [5],
        bottom: [0,1,2,3,4,5]
    },
    contents: [
        ['WWW','   ','DB1','   ','   ','DY1'],
        ['WWW','   ','DY1','   ','WWW','   '],
        ['WWW','   ','   ','   ','WWW','   '],
        ['WWW','   ','   ','   ','WWW','   '],
        ['DY1','[B]','M||','   ','   ','   '],
        ['WWW','WWW','WWW','WWW','WWW','WWW']
    ]
},{

    moves: 1,
    name: "Synchro 7",
    items: ['SU ','SL ','SD ','SR ','SU '],
    disabled: {
        top: [0,1,2,3,4,5],
        left: [0,1,2,3,4,5,6,7],
        right: [0,1,2,3,4,5,7],
        bottom: [0,1,2,3,4,5]
    },
    contents: [
        ['WWW','M--','M--','M--','M--','WWW'],
        ['M||','DN2','   ','   ','   ','M||'],
        ['M||','   ','DN2','   ','   ','M||'],
        ['M||','   ','   ','DN2','   ','M||'],
        ['M||','   ','   ','   ','DN2','M||'],
        ['M||','   ','M//','   ','   ','M||'],
        ['M||','   ','M\\','   ','   ','   '],
        ['WWW','M--','M--','M--','M--','WWW']
    ]
},{

    moves: 4,
    name: "Synchro 8",
    disabled: {
        top: [],
        left: [],
        right: [1,2,3,4,5,6],
        bottom: [1,2,3,4,5,6]
    },
    contents: [
        ['BR ','   ','   ','   ','   ','   ','DR1'],
        ['   ','DR1','   ','   ','   ','DB1','WWW'],
        ['   ','   ','   ','   ','   ','   ','WWW'],
        ['DY1','   ','   ','DB1','   ','   ','WWW'],
        ['   ','   ','   ','   ','   ','   ','WWW'],
        ['   ','BR ','   ','DY1','   ','BB ','WWW'],
        ['   ','WWW','WWW','WWW','WWW','WWW','WWW']
    ]
}



]);
