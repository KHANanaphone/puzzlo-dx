function Puzzle(puzzleInfo){
    
    this.height = puzzleInfo.contents.length;
    this.width = puzzleInfo.contents[0].length;
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