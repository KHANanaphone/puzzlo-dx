PUZZLO.tower_categories.fun.addTower('Block Tower', 4, [{

        moves: 2,
        name: "Blocks 1",
        disabled: {
            top: [0,1,2],
            left: [0,1,3],
            right: [0,1,2,3],
            bottom: [0,2]
        },
        description: "Shoot a block to take it out of the way",
        contents: [
            ['WWW', 'WWW', 'WWW'],
            ['WWW', 'DN1', 'WWW'],
            ['   ', '[N]', 'WWW'],
            ['WWW', '   ', 'WWW']
        ]
    }, {

        moves: 2,
        name: "Ordering",
        disabled: {
            top: [0,1,2],
            left: [0,2],
            right: [0,2],
            bottom: [0,1,2]
        },
        contents: [
            ['WWW','WWW','WWW'],
            ['DN1','[N]','DN2'],
            ['WWW','WWW','WWW']
        ]
    }, {

        moves: 3,
        name: "The Chair",
        contents: [
            ['DN1','   ','   '],
            ['DN1','   ','   '],
            ['[N]','DN1','[N]'],
            ['DN1','   ','DN1'],
            ['DN1','   ','DN1']
        ]
    }, {

        moves: 5,
        name: "Blocks 4",
        disabled: {
            top: [1]
        },
        contents: [
            ['   ','WWW','   '],
            ['[N]','DN3','[N]'],
            ['   ','[N]','   ']
        ]
    }, {

        moves: 7,
        name: "Blocks 5",
        disabled: {
            top: [3,4],
            left: [4],
            right: [0,1,2,3,4],
            bottom: [0,1,2,3,4]
        },
        contents: [
            ['[N]','   ','   ','WWW','WWW'],
            ['[N]','[N]','   ','WWW','WWW'],
            ['   ','[N]','[N]','WWW','WWW'],
            ['   ','   ','[N]','DN1','WWW'],
            ['WWW','WWW','WWW','WWW','WWW']
        ]
    }, {

        moves: 5,
        name: "Blocks 6",
        contents: [
            ['   ','   ','   ','   ','   ','   ','[N]'],
            ['DN2','[N]','   ','   ','[N]','DN2','   '],
            ['   ','DN1','   ','[N]','   ','   ','   '],
            ['[N]','   ','   ','   ','   ','   ','   '],
            ['   ','   ','   ','   ','[N]','   ','   '],
            ['   ','   ','[N]','   ','   ','   ','   '],
            ['   ','DN2','   ','   ','   ','[N]','DN1']
        ]
    }]
);
