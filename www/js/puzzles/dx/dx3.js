PUZZLO.tower_categories.dx.addTower('Keys/Doors Tower', 10, [{

    moves: 4,
    name: "Keys/Doors 1",
    description: "Hit the key to unlock the same-colored door.",
    disabled: {
        top: [0,1,2,4],
        left: [0,1,3,4],
        right: [0,1,3,4],
        bottom: [0,2,3,4]
    },
    contents: [
        ['WWW','WWW','WWW','   ','WWW'],
        ['WWW','KK1','WWW','   ','WWW'],
        ['   ','[N]','WWW','[N]','KD1'],
        ['WWW','   ','WWW','DN1','WWW'],
        ['WWW','   ','WWW','WWW','WWW'],
    ]
},{
    moves: 2,
    name: "Keys/Doors 2",
    items: ['BB ','BY '],
    contents: [
        ['DN2','DN1','KD2','DN1','DN1'],
        ['DN1','   ','DN1','   ','   '],
        ['KD1','DN1','DN1','DN1','KK1'],
        ['DN1','   ','DN1','   ','   '],
        ['DN1','   ','KK2','   ','   '],
    ]
},{

    moves: 3,
    name: "Keys/Doors 3",
    items: ['KD1','SU ','KK1'],
    disabled: {
        top: [0,1,2,3,4],
        left: [0,1,3,5,6],
        right: [0,1,3,5,6],
        bottom: [0,1,3,4]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW'],
        ['WWW','WWW','DN1','WWW','WWW'],
        ['...','...','   ','...','...'],
        ['WWW','WWW','DB1','WWW','WWW'],
        ['...','...','   ','...','...'],
        ['WWW','WWW','DB1','WWW','WWW'],
        ['WWW','WWW','KD1','WWW','WWW']
    ]
},{

    moves: 5,
    name: "Keys/Doors 4",
    items: ['KK1','KD1'],
    disabled: {
        top: [1,3],
        left: [1],
        right: [0,1],
        bottom: []
    },
    contents: [
        ['DR1','WWW','   ','WWW'],
        ['WWW','BB ','DB1','WWW'],
        ['   ','   ','DY1','   '],
        ['DB2','DB1','   ','BR '],
        ['   ','   ','[N]','   ']
    ]
},{
    moves: 1,
    name: "Keys/Doors 5",
    items: ['M\\','M\\','M//','M//','BY '],
    contents: [
        ['M//','   ','   ','   ','   ','M\\'],
        ['   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   '],
        ['   ','WWW','WWW','WWW','WWW','   '],
        ['   ','WWW','DN1','KK2','KD1','M//'],
        ['   ','WWW','WWW','WWW','WWW','WWW'],
        ['M\\','KK1','   ','   ','KD2','DN1']
    ]
},{

    moves: 1,
    name: "Keys/Doors 6",
    items: ['T1 ','T1 ','BY '],
    contents: [
        ['   ','   ','   ','BR ','   ','   ','   '],
        ['   ','   ','   ','KD1','   ','   ','   '],
        ['   ','   ','   ','DN1','   ','   ','   '],
        ['   ','   ','   ','DN1','   ','   ','   '],
        ['   ','   ','   ','KK1','   ','   ','   '],
        ['   ','   ','   ','WWW','   ','   ','   '],
        ['   ','   ','   ','DN2','   ','   ','   ']
    ]
},{

    moves: 4,
    name: "Keys/Doors 7",
    items: ['M//','M//','M//','M//'],
    disabled: {
        top: [0,1,2,3,4,5,7,8],
        left: [0,1,2,3,4,5,7,8],
        right: [0,1,3,4,5,6,7,8],
        bottom: [0,1,3,4,5,6,7,8]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW','WWW','   ','WWW','WWW'],
        ['WWW','   ','   ','   ','WWW','   ','   ','DY1','WWW'],
        ['WWW','   ','KK2','   ','KD2','   ','KK1','   ','   '],
        ['WWW','   ','   ','   ','WWW','   ','   ','   ','WWW'],
        ['WWW','WWW','KD1','WWW','WWW','WWW','WWW','KD4','WWW'],
        ['WWW','   ','   ','   ','WWW','   ','   ','KK4','WWW'],
        ['   ','   ','   ','   ','KD3','   ','   ','   ','WWW'],
        ['WWW','KK3','   ','   ','WWW','   ','   ','   ','WWW'],
        ['WWW','WWW','   ','WWW','WWW','WWW','WWW','WWW','WWW']
    ]
},{

    moves: 4,
    name: "Keys/Doors 8",
    items: ['M//','M\\','M//','M\\','SU '],
    disabled: {
        top: [0,1,3,4,6,7],
        left: [0,1,3,4,5,7,8],
        right: [0,1,2,3,4,5,7,8],
        bottom: [0,1,3,4,6,7]
    },
    contents: [
        ['WWW','WWW','   ','WWW','WWW','   ','WWW','WWW'],
        ['WWW','WWW','   ','WWW','WWW','   ','WWW','WWW'],
        ['KK1','DY1','   ','   ','DB1','   ','KK3','WWW'],
        ['WWW','WWW','   ','WWW','WWW','   ','WWW','WWW'],
        ['WWW','WWW','KD1','WWW','WWW','KD3','WWW','WWW'],
        ['WWW','WWW','   ','KK2','WWW','   ','WWW','WWW'],
        ['DY1','KD2','   ','   ','   ','   ','   ','   '],
        ['WWW','WWW','   ','WWW','WWW','   ','WWW','WWW'],
        ['WWW','WWW','   ','WWW','WWW','   ','WWW','WWW']
    ]
}
]);
