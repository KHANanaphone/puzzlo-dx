PUZZLO.tower_categories.fun.addTower('Bonus Tower', 36, [{

        moves: 4,
        name: "Bonus 1",
        items: ['[N]'],
        disabled: {
            top: [],
            left: [1,2],
            right: [2],
            bottom: []
        },
        contents: [
            ['DN1','   ','   ','   ','   '],
            ['WWW','DN2','WWW','   ','   '],
            ['WWW','   ','DY1','   ','WWW'],
            ['   ','   ','   ','   ','   '],
            ['   ','[N]','DB1','   ','BR ']
        ]
    },{

        moves: 3,
        name: "Bonus 2",
        items: ['DN1', 'DN1', 'BR '],
        disabled: {
            top: [3],
            left: [3],
            right: [0,1,2,3],
            bottom: [0,1,2,3]
        },
        contents: [
        	['DN1','DN1','DN1','WWW'],
        	['DN1','DN1','DN1','WWW'],
        	['DN1','DN1','DN1','WWW'],
        	['WWW','WWW','WWW','WWW']
        ]
    },{

        moves: 10,
        name: "Bonus 3",
        disabled: {
            top: [],
            left: [1,3],
            right: [],
            bottom: []
        },
        contents: [
            ['[N]','[N]','[N]','[N]','[N]'],
            ['WWW','   ','DB1','   ','[N]'],
            ['   ','DY1','BR ','DY1','[N]'],
            ['WWW','   ','DB1','   ','[N]'],
            ['[N]','[N]','[N]','[N]','[N]']
        ]
    },{

        moves: 6,
        name: "Bonus 4",
        items: ['BR '],
        disabled: {
            top: [5],
            left: [5],
            right: [0,1,2,3,4,5],
            bottom: [0,1,2,3,4,5]
        },
        contents: [
            ['   ','   ','   ','   ','[N]','WWW'],
            ['   ','   ','   ','[N]','DN1','WWW'],
            ['   ','   ','[N]','DN1','DN1','WWW'],
            ['   ','[N]','DN1','DN1','DN1','WWW'],
            ['[N]','DN1','DN1','DN1','DN1','WWW'],
            ['WWW','WWW','WWW','WWW','WWW','WWW']
        ]
    }]
);
