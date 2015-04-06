function PuzzleDefinition(x, y) {
    
    this.x = x;
    this.y = y;
    this.items = []

    this["Puzzle" + this.x + this.y]();

    this.Setup = function() {

        this.movesLeft = this.maxMoves;
        this.contents = this.initialContents.slice();
    }
}
