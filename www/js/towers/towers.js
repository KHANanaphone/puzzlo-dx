var Towers = {};
var Puzzles = {};

function Tower(id, map, nodes){

    this.id = id;
    this.yxMap = [];
    this.idMap = {};
    this.puzzleCount = 0;

    for(var y = 0; y < map.length; y++){

        this.yxMap[y] = [];

        for(var x = 0; x < map[y].length; x++){

            var nodeId = map[y][x];

            if(!nodeId)
                continue;

            var nodeInfo = nodes[nodeId];
            nodeInfo.id = nodeId;
            nodeInfo.x = x;
            nodeInfo.y = y;

            this.yxMap[y][x] = nodeInfo;
            this.idMap[nodeId] = nodeInfo;

            if(nodeInfo.first)
                this.first = nodeInfo;

            this.puzzleCount++;
        };
    };
};

Tower.prototype.getPuzzle = function(var1, var2){

    var puzz;
    if(typeof var2 === 'undefined'){
        //var1 = id
        puzz = new Puzzle(Puzzles[this.id][var1]);
    }
    else {
        //var1 = y, var2 = x
        var node = this.yxMap[var1][var2];
        puzz = new Puzzle(Puzzles[this.id][node.id]);
    }

    puzz.id = var1;
    return puzz;
};