var Towers = {};
var Puzzles = {};

function Tower(id, map){

    this.id = id;
    this.map = map;
    this.puzzleCount = 0;
    
    for(var puzzId in map){
        if(!this.first)
            this.first = puzzId;
        
        this.puzzleCount++;
    }
    
    Puzzles[id] = {};
};

Tower.prototype.getPuzzle = function(id){

    var puzz = new Puzzle(Puzzles[this.id][id]);
    puzz.id = id;
    return puzz;   
};