function Puzzle(puzzleInfo){
    
    this.height = puzzleInfo.height;
    this.width = puzzleInfo.width;
    this.maxMoves = puzzleInfo.moves;
    this.initialContents = puzzleInfo.contents.slice();
    this.name = puzzleInfo.name;
    this.description = puzzleInfo.description;
    
    this.setup();
};

Puzzle.prototype.setup = function(){
    
    this.movesLeft = this.maxMoves;
    this.contents = this.initialContents.slice();
};