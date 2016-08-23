PUZZLO.tower_categories.fun.addTower('Intro Tower', 0, [{

        moves: 10,
        name: "Welcome",
        description: "Use the colored arrows to destroy all of the diamonds.",
        contents: [
            ['DN1', '   ', '   ', '   '],
            ['DN1', '   ', '   ', '   '],
            ['DN1', '   ', '   ', '   '],
            ['   ', 'DN1', 'DN1', 'DN1']
        ]
    },{

        moves: 2,
        name: "Plus",
        disabled: {
            top: [0,2],
            left: [0,2],
            right: [0,2],
            bottom: [0,2]
        },
        contents: [
            ['WWW', 'DN1', 'WWW'],
            ['DN1', 'DN2', 'DN1'],
            ['WWW', 'DN1', 'WWW']
        ]
    },{

        moves: 6,
        name: "Threes",
        contents: [
            ['DN3', 'DN3'],
            ['DN3', 'DN3']
        ]
    },{

        moves: 6,
        name: "Window",
        contents: [
            ['DN2', 'DN1', 'DN2', 'DN1', 'DN2'],
            ['DN1', '   ', 'DN1', '   ', 'DN1'],
            ['DN2', 'DN1', 'DN2', 'DN1', 'DN2'],
            ['DN1', '   ', 'DN1', '   ', 'DN1'],
            ['DN2', 'DN1', 'DN2', 'DN1', 'DN2']
        ]
    },{

        moves: 4,
        name: "Creepy Face",
        contents: [
            ['   ', 'DN1', '   ', 'DN1','   '],
            ['   ', '   ', '   ', '   ','   '],
            ['DN1', '   ', '   ', '   ','DN1'],
            ['   ', 'DN2', 'DN1', 'DN2','   ']
        ]
    },{

        moves: 4,
        name: "Big Diamond",
        contents: [
            ['   ', '   ', 'DN1', '   ','   '],
            ['   ', 'DN1', '   ', 'DN1','   '],
            ['DN1', '   ', '   ', '   ','DN1'],
            ['   ', 'DN1', '   ', 'DN1','   '],
            ['   ', '   ', 'DN1', '   ','   '],
        ]
    }]
);
