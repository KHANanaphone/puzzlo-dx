PUZZLO.tower_categories.fun.addTower('Items Tower', 26, [{

        moves: 1,
        name: "Intro to Items",
        description: "Click on an empty space to<br />place a piece there",
        items: ['BR '],
        contents: [
            ['DN1','   ','DN1'],
            ['   ','   ','   '],
            ['DN1','   ','DN1']
        ]
    },{

        moves: 2,
        name: "Crossroads",
        description: "If a diamond is in your inventory, you must still break it to pass the level",
        items: ['DB1','DY1'],
        contents: [
    		['   ','   ','DN1','   ','   '],
    		['   ','   ','DN1','   ','   '],
    		['DN1','DN1','   ','DN1','DN1'],
    		['   ','   ','DN1','   ','   '],
    		['   ','   ','DN1','   ','   ']
        ]
    },{

        moves: 1,
        name: "Desert",
        description: "You can't place items on a \"sand\" tile.",
        items: ['BR ','BR '],
        contents: [
            ['   ','...','...','...','...'],
            ['...','...','...','...','...'],
            ['...','...','...','...','...'],
            ['...','...','...','...','...'],
            ['...','...','...','...','   '],
            ['...','...','...','...','...'],
            ['...','...','...','...','...'],
            ['...','...','...','...','...'],
            ['DN2','...','...','...','...']
        ]
    },{

        moves: 1,
        name: "Line 'em up'",
        items: ['DN3'],
        contents: [
        	['BR ','   ','   ','   ','   ','BR '],
        	['   ','   ','BR ','   ','   ','   '],
        	['   ','   ','   ','   ','BR ','   '],
        	['BR ','   ','   ','   ','   ','   '],
        	['   ','   ','   ','   ','   ','   '],
        	['   ','BR ','   ','   ','   ','BR '],
        	['   ','   ','   ','BR ','   ','   ']
        ]
    },{

        moves: 2,
        name: "Square",
        items: ['BR ','BR '],
        contents: [
            ['   ','   ','   ','   ','   '],
            ['   ','DN1','DN1','DN1','   '],
            ['   ','DN1','DN1','DN1','   '],
            ['   ','DN1','DN1','DN1','   '],
            ['   ','   ','   ','   ','   ']
        ]
    },{

            moves: 3,
            name: "Figure 8",
            items: ['BR ','BR ','BR '],
            contents: [
                ['   ','   ','DN1','   ','   '],
                ['   ','DN1','   ','DN1','   '],
                ['DN1','   ','   ','   ','DN1'],
                ['   ','DN1','   ','DN1','   '],
                ['   ','   ','DN2','   ','   '],
                ['   ','DN1','   ','DN1','   '],
                ['DN1','   ','   ','   ','DN1'],
                ['   ','DN1','   ','DN1','   '],
                ['   ','   ','DN1','   ','   ']
            ]
    }]
);
