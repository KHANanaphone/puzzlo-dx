PUZZLO.tower_categories.fun.addTower('Colors Tower', 8, [{

        moves: 2,
        name: "Colors 1",
        disabled: {
            top: [0,2],
            left: [0,2],
            right: [0,2],
            bottom: [0,2]
        },
        description: "Colored diamonds can only be destroyed by their own color.",
        contents: [
            ['WWW', 'DY1', 'WWW'],
            ['DB1', 'DB1', 'DB1'],
            ['WWW', 'DY1', 'WWW']
        ]
    },{

        moves: 3,
        name: "Colored Blocks",
        disabled: {
            top: [0,2,3],
            left: [0,1,3],
            right: [0,2,3],
            bottom: [0,1,2,3]
        },
        description: "Blocks can also be colored.",
        contents: [
            ['WWW','   ','WWW','WWW'],
            ['WWW','[B]','   ','   '],
            ['   ','[Y]','DN1','WWW'],
            ['WWW','WWW','WWW','WWW']
        ]
    },{

        moves: 7,
        name: "Colors 3",
        contents: [
            ['WWW','WWW','WWW','WWW','WWW'],
            ['WWW','DN1','DN1','DN1','DY1'],
            ['WWW','DN1','DN1','DY1','DB1'],
            ['WWW','DN1','DY1','DB1','DN1'],
            ['WWW','DY1','DB1','DN1','DN1']
        ]
    },{

        moves: 3,
        name: "Colors 4",
        contents: [
            ['[B]','DB2','DY1','DN2']
        ]
    },{

        moves: 5,
        name: "Colors 5",
        contents: [
        	['   ','   ','WWW','   '],
        	['WWW','DB1','DY1','   '],
        	['   ','DY1','DB1','[N]'],
        	['   ','WWW','   ','   ']
        ]
    },{

        moves: 4,
        name: "Colors 6",
        contents: [
            ['   ','   ','DN1','DN1'],
            ['DN1','DN1','DY1','DB1'],
            ['DN1','DN1','DB1','DY1'],
            ['   ','   ','DN1','DN1']
        ]
    }]
);
