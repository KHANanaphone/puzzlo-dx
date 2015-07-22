var Towers = {};

function Tower(id, map){
    
    this.id = id;
    this.map = map;
    this.puzzleCount = 0;
    
    for(var id in map){
        if(!this.first)
            this.first = id;
        
        this.puzzleCount++;
    }
};

Tower.prototype.getPuzzle = function(id){
    
    return new Puzzle(Puzzles[this.id][id]);    
};