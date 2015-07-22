PuzzleDefinition.prototype.Puzzle07 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    
    this.tier = 2;
    this.req = 9;
    this.textID = '2-A';
    this.name = 'Bombs';
    this.description = "Bombs explode diagonally when hit.";

    this.initialContents = [
        [1101, 1000, 1000, 1000, 1101],
        [1000, 1101, 1000, 1101, 1000],
        [1000, 1000, 1331, 1000, 1000],
        [1000, 1101, 1000, 1101, 1000],
        [1101, 1000, 1000, 1000, 1101]
    ];
};

PuzzleDefinition.prototype.Puzzle17 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    
    this.tier = 2;
    this.req = 9;
    this.prereq = '07';
    this.textID = '2-B';
    this.name = 'Items';
    this.description = "Click on the board to place an item from your item bar.";
    
    this.items = [1331];

    this.initialContents = [
        [1101, 1000, 1000, 1000, 1000],
        [1101, 1200, 1000, 1000, 1000],
        [1101, 1000, 1000, 1000, 1000],
        [1101, 1000, 1000, 1000, 1000],
        [1331, 1000, 1000, 1000, 1101]
    ];
};

PuzzleDefinition.prototype.Puzzle16 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 3;
    
    this.tier = 2;
    this.req = 9;
    this.prereq = '17';
    this.textID = '2-C';
    this.name = 'Reds';
    this.description = "Red objects can't be damaged by red bombs.";

    this.initialContents = [
        [1101, 1000, 1000, 1000, 1101],
        [1000, 1231, 1000, 1131, 1000],
        [1000, 1000, 1331, 1000, 1000],
        [1000, 1131, 1000, 1231, 1000],
        [1101, 1000, 1000, 1000, 1101]
    ];
};

PuzzleDefinition.prototype.Puzzle06 = function() {

    this.height = 7;
    this.width = 3;
    this.maxMoves = 2;
    this.items = [1331, 1331];
    
    this.tier = 2;
    this.req = 12;
    this.prereq = '16';
    this.textID = '2-1';
    this.name = "Mama Mia!";

    this.initialContents = [
        [1101, 1000, 1101],
        [1000, 1000, 1000],
        [1101, 1000, 1101],
        [1000, 1102, 1000],
        [1101, 1000, 1101],
        [1000, 1000, 1000],
        [1101, 1000, 1101],
    ];
};

PuzzleDefinition.prototype.Puzzle05 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1331, 1331, 1331, 1331, 1331];
    
    this.tier = 2;
    this.req = 13;
    this.prereq = '16';
    this.textID = '2-2';
    this.name = "Chain Reaction";

    this.initialContents = [
        [1102, 1101, 1000, 1200, 1101],
        [1200, 1102, 1200, 1201, 1200],
        [1000, 1200, 1000, 1200, 1200],
        [1200, 1102, 1200, 1000, 1200],
        [1101, 1200, 1000, 1200, 1102]
    ];
};


//PuzzleDefinition.prototype.Puzzle70 = function() {
//
//    this.height = 5;
//    this.width = 5;
//    this.maxMoves = 4;
//    this.items = [1331, 1331, 1331, 1331];
//    
//    this.tier = 2;
//    this.req = 14;
//    this.prereq = '40';
//    this.textID = '2-3';
//    this.name =  "Pow";
//
//    this.initialContents = [
//        [1101, 1101, 1101, 1101, 1000],
//        [1101, 1102, 1000, 1102, 1101],
//        [1101, 1000, 1104, 1000, 1101],
//        [1101, 1102, 1000, 1102, 1101],
//        [1101, 1101, 1101, 1101, 1101]
//    ];
//};

PuzzleDefinition.prototype.Puzzle04 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1331, 1331, 1331];
    
    this.tier = 2;
    this.req = 14;
    this.prereq = '16';
    this.textID = '2-4';
    this.name =  "Pow Pow";

    this.initialContents = [
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1000, 1103, 1000, 1000],
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1000, 1000, 1000, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle03 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1331, 1331, 1331];
    
    this.tier = 2;
    this.req = 15;
    this.prereq = '16';
    this.textID = '2-5';
    this.name =  "Pow Pow 2";

    this.initialContents = [
        [1000, 1000, 1200, 1000, 1000],
        [1000, 1000, 1000, 1000, 1000],
        [1200, 1000, 1103, 1000, 1200],
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1000, 1200, 1000, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle13 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 5;
    
    this.tier = 2;
    this.req = 16;
    this.prereq = '16';
    this.textID = '2-6';
    this.name = "Road Block";

    this.initialContents = [
        [1111, 1101, 1200, 1102, 1200],
        [1000, 1201, 1000, 1201, 1101],
        [1000, 1000, 1000, 1201, 1000],
        [1000, 1000, 1000, 1201, 1000],
        [1331, 1331, 1000, 1101, 1000],
    ];
};
        
PuzzleDefinition.prototype.Puzzle23 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 2;
    this.items = [1331, 1331];
    
    this.tier = 2;
    this.req = 17;
    this.prereq = '16';
    this.textID = '2-7';
    this.name =  "Square";

    this.initialContents = [
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1101, 1101, 1101, 1000],
        [1000, 1101, 1101, 1101, 1000],
        [1000, 1101, 1101, 1101, 1000],
        [1000, 1000, 1000, 1000, 1000],
    ];
};

PuzzleDefinition.prototype.Puzzle22 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 4;
    this.items = [1200];
    
    this.tier = 2;
    this.req = 18;
    this.prereq = '16';
    this.textID = '2-8';
    this.name =  "Weird Item";

    this.initialContents = [
        [1101, 1000, 1000, 1000, 1000],
        [1200, 1102, 1200, 1000, 1000],
        [1200, 1000, 1131, 1000, 1200],
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1201, 1121, 1000, 1331],
    ];
};

PuzzleDefinition.prototype.Puzzle12 = function() {

    this.height = 7;
    this.width = 5;
    this.maxMoves = 3;
    this.items = [1131];
    
    this.tier = 2;
    this.req = 19;
    this.prereq = '16';
    this.textID = '2-9';
    this.name =  "Huh?";

    this.initialContents = [
        [1200, 1122, 1101, 1000, 1200],
        [1000, 1000, 1331, 1200, 1000],
        [1000, 1000, 1200, 1231, 1200],
        [1331, 1000, 1101, 1000, 1331],
        [1000, 1000, 1000, 1000, 1000],
        [1000, 1000, 1331, 1000, 1000],
        [1200, 1000, 1000, 1221, 1200],
    ];
};