PUZZLO.tower_categories.dx.addTower('Toggles Tower', 15, [{
    moves: 1,
    name: "Toggles 1",
    description: "Tap the toggling diamond to<br />change its color",
    items: ['BR ','BY '],
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','   ','DN1','   ','   '],
        ['DN1','DN1','D?2','DN1','   '],
        ['   ','   ','DN1','   ','   '],
        ['   ','   ','DN1','   ','   '],
    ]
},{
    moves: 1,
    name: "Toggles 2",
    description: "Tap the toggling mirror to rotate it",
    contents: [
        ['M??','M??','M??','M??','M??','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   ','   ','   '],
        ['   ','   ','   ','   ','   ','   ','   ','   '],
        ['   ','BY ','BY ','BY ','BY ','   ','   ','   '],
        ['M\\','[N]','[N]','[N]','[N]','DY1','DY1','DY1']
    ]
},{
    moves: 2,
    name: "Toggles 3",
    description: "Tap the toggling shifter<br />(on your item bar)<br />to rotate it",
    items: ['S? ','S? ','S? '],
    contents: [
        ['   ','   ','   ','   ','   '],
        ['   ','   ','DN2','   ','   '],
        ['   ','   ','DB1','   ','   '],
        ['   ','   ','DB1','   ','   '],
        ['   ','DY1','   ','DN1','   '],
        ['   ','   ','   ','   ','   ']
    ]
},{
    moves: 1,
    name: "Toggles 4",
    description: "You can't use shifters on togglers...directly",
    teleporterTypes: 2,
    disabled: {
        top: [4,5,6],
        left: [],
        right: [0,1,2,3,4],
        bottom: [1,2,4,5,6]
    },
    items: ['S? ','S? ','S? '],
    contents: [
        ['   ','   ','   ','[N]','WWW','WWW','WWW'],
        ['   ','   ','   ','   ','WWW','WWW','WWW'],
        ['   ','   ','   ','   ','WWW','DN1','WWW'],
        ['   ','   ','T? ','   ','WWW','T1 ','WWW'],
        ['   ','WWW','WWW','   ','WWW','WWW','WWW']
    ]
},{
    moves: 2,
    name: "Toggles 5",
    items: ['M//','M\\'],
    disabled: {
        top: [0,1,2,3,4,5,6],
        left: [0],
        right: [0],
        bottom: []
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW','WWW','WWW'],
        ['   ','...','WWW','DY1','WWW','...','   '],
        ['   ','...','DY1','M??','DY1','...','   '],
        ['   ','...','   ','DY1','   ','...','   '],
        ['   ','...','   ','   ','   ','...','   '],
        ['BR ','...','   ','   ','   ','...','[R]']
    ]
},{
    moves: 4,
    name: "Toggles 6",
    description: "Hmmm...something's missing...",
    items: ['T1 ','T2 ','T3 ','M//'],
    teleporterTypes: 3,
    disabled: {
        top: [0,2,3,4,5,6,7],
        left: [0,2,3,4,5,6,7],
        right: [0,2,3,4,5,6,7],
        bottom: [0,2,3,4,5,6,7]
    },
    contents: [
        ['WWW','[Y]','WWW','WWW','WWW','WWW','WWW','WWW'],
        ['   ','T? ','[N]','   ','   ','   ','   ','   '],
        ['WWW','[N]','WWW','WWW','WWW','WWW','WWW','WWW'],
        ['WWW','   ','WWW','   ','   ','   ','   ','WWW'],
        ['WWW','   ','WWW','   ','   ','   ','   ','WWW'],
        ['WWW','   ','WWW','   ','   ','   ','   ','WWW'],
        ['WWW','   ','WWW','   ','   ','   ','   ','WWW'],
        ['WWW','   ','WWW','DY1','WWW','WWW','WWW','WWW']
    ]
},{
    moves: 1,
    name: "Toggles 7",
    items: ['BB ','BY ','BB ','BY ','BB ','BY ','BB ','BY '],
    disabled: {
        top: [0,1,2,3,4,5,6,7],
        left: [0,1,2,3,4,5,6,7],
        right: [0,1,2,3,4,5,6,7],
        bottom: [0,2,3,4,5,6,7]
    },
    contents: [
        ['WWW','WWW','WWW','WWW','WWW','WWW','WWW','D?9'],
        ['WWW','WWW','WWW','WWW','M//','   ','M\\','   '],
        ['WWW','WWW','WWW','M//','   ','M\\','   ','   '],
        ['WWW','WWW','M//','   ','M\\','   ','   ','M//'],
        ['WWW','M//','   ','M\\','   ','   ','M//','WWW'],
        ['WWW','   ','M\\','   ','   ','M//','WWW','WWW'],
        ['WWW','M\\','   ','   ','M//','WWW','WWW','WWW'],
        ['M||','   ','   ','M//','WWW','WWW','WWW','WWW']
    ]
},{
    moves: 6,
    name: "Toggles 8",
    items: [],
    disabled: {
        top: [0,1,2,4,5,6],
        left: [0,1,3,4,6,7],
        right: [0,1,3,4,6,7],
        bottom: [0,1,2,4,5,6]
    },
    contents: [
        ['WWW','WWW','WWW','KK3','WWW','WWW','WWW'],
        ['WWW','WWW','WWW','KD1','WWW','WWW','WWW'],
        ['KD2','KK2','   ','M??','   ','   ','KD4'],
        ['WWW','WWW','WWW','   ','WWW','WWW','WWW'],
        ['WWW','WWW','WWW','   ','WWW','WWW','WWW'],
        ['KD3','KK4','   ','M??','   ','KK1','KD2'],
        ['WWW','WWW','WWW','   ','WWW','WWW','WWW'],
        ['WWW','WWW','WWW','DY2','WWW','WWW','WWW']
    ]
}
]);
