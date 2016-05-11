function Puzzle(puzzleInfo){

    this.height = puzzleInfo.contents.length;
    this.width = puzzleInfo.contents[0].length;
    this.maxMoves = puzzleInfo.moves;
    this.initialContents = puzzleInfo.contents.slice();

    for(var prop in puzzleInfo)
        this[prop] = puzzleInfo[prop];

    this.setup();
};

Puzzle.prototype.isDisabled = function(side, index){

    if(!this.disabled)
        return false;

    if(!this.disabled[side])
        return false;

    return this.disabled[side].indexOf(index) != -1 ? true : false;
};

Puzzle.prototype.setup = function(){

    this.movesLeft = this.maxMoves;
    this.contents = this.initialContents.slice();
};
