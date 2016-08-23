PUZZLO.tower_categories.fun.addTower('Bombs Tower', 14, [{

        moves: 1,
        name: "Intro to Bombs",
        description: "Hit a bomb to detonate it.",
        contents: [
            ['DN1','   ','   ','   ','DN1'],
            ['   ','DN1','   ','DN1','   '],
            ['   ','   ','BR ','   ','   '],
            ['   ','DN1','   ','DN1','   '],
            ['DN1','   ','   ','   ','DN1']
        ]
    },{

        moves: 1,
        name: "Diamond Blaster",
        description: "Was this an alternate name for the game?",
        contents: [
            ['   ','   ','BR ','   ','   '],
            ['   ','BR ','   ','BR ','   '],
            ['BR ','   ','DN4','   ','BR '],
            ['   ','BR ','   ','BR ','   '],
            ['   ','   ','BR ','   ','   ']
        ]
    },{

        moves: 1,
        name: "Decisions Decisions",
        disabled: {
            top: [0,5,6],
            left: [0,2,3,4],
            right: [0,1,2,3,4],
            bottom: [0,5,6]
        },
        contents: [
            ['WWW','   ','   ','BR ','   ','WWW','WWW'],
            ['DR1','   ','   ','   ','   ','   ','WWW'],
            ['WWW','[N]','   ','   ','   ','BR ','WWW'],
            ['WWW','   ','   ','   ','   ','   ','WWW'],
            ['WWW','   ','   ','BR ','   ','WWW','WWW']
        ]
    },{

        moves: 4,
        name: "Spirograph",
        contents: [
        	['   ','DN1','DN2','DN1','DN1','   '],
        	['DN1','   ','DN3','BR ','   ','DN1'],
        	['DN1','BR ','DN3','DN3','DN3','DN2'],
        	['DN2','DN3','DN3','DN3','BR ','DN1'],
        	['DN1','   ','BR ','DN3','   ','DN1'],
        	['   ','DN1','DN1','DN2','DN1','   ']
        ]
    },{

        moves: 1,
        name: "Big Bomber",
        contents: [
        	['BR ','   ','   ','   '],
        	['   ','BR ','   ','   '],
        	['   ','   ','BR ','   '],
        	['   ','BR ','   ','DN7'],
        	['   ','   ','BR ','   '],
        	['   ','BR ','   ','   '],
        	['BR ','   ','   ','   ']
        ]
    },{

        moves: 5,
        name: "Think Carefully",
        disabled: {
            top: [2,4],
            right: [0]
        },
        contents: [
            ['DY1','DN1','WWW','DN2','WWW'],
            ['   ','[N]','   ','[N]','DN1'],
            ['   ','   ','   ','[N]','   '],
            ['   ','   ','   ','[N]','   '],
            ['BR ','BR ','   ','DN1','   ']
        ]
    }]
);
