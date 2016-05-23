PUZZLO.tower_categories.fun.addTower('Reds Tower', 20, [{

        moves: 3,
        name: "Reds 1",
        contents: [
            ['DR1','   ','   ','   ','   '],
            ['   ','[N]','   ','   ','   '],
            ['   ','   ','BR ','   ','   '],
            ['   ','   ','   ','[N]','   '],
            ['   ','   ','   ','   ','DR1']
        ]
    },{

        moves: 2,
        name: "Reds 2",
        contents: [
            ['   ','   ','BR ','   ','   '],
            ['DN1','[R]','DN2','[R]','DN1']
        ]
    },{

        moves: 2,
        name: "Red Blocks",
        contents: [
            ['BR ','   ','   ','   ','   '],
            ['DN1','[N]','   ','   ','   '],
            ['DB1','   ','BR ','   ','   '],
            ['DN1','   ','   ','DN2','   '],
            ['DR1','   ','   ','   ','DN2']
        ]
    },{

        moves: 3,
        name: "Reds 4",
        disabled: {
            top: [0,1],
            left: [0,1]
        },
        contents: [
            ['DR1','WWW','   ','   '],
            ['WWW','[N]','   ','DY1'],
            ['   ','   ','   ','[N]'],
            ['   ','DB1','   ','BR ']
        ]
    },{

        moves: 4,
        name: "Reds 5",
        disabled: {
            top: [0,1,3],
            left: [0,1,2,3,4],
            bottom: [0,1,2]
        },
        contents: [
            ['WWW','WWW','   ','WWW','BR '],
            ['WWW','WWW','[N]','DR1','DB1'],
            ['WWW','WWW','DR1','   ','   '],
            ['WWW','DB1','[N]','   ','   '],
            ['WWW','WWW','WWW','   ','   ']
        ]
    },{

        moves: 5,
        name: "Secret Code",
        disabled: {
            top: [0,6],
            left: [0,1,2,3],
            right: [0,1,2,],
            bottom: [0,1,2,3,4,5,6]
        },
        contents: [
            ['DR1','   ','   ','   ','DR1','   ','DR1'],
            ['   ','   ','   ','DR2','   ','   ','   '],
            ['WWW','DY1','DY1','DY1','DY1','DY1','WWW'],
            ['WWW','BR ','BR ','BR ','BR ','BR ','WWW']
        ]
    }]
);
