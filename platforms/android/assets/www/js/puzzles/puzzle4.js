PuzzleDefinition.prototype.Puzzle51 = function() {

    this.height = 6;
    this.width = 5;
    this.maxMoves = 5;
    
    this.tier = 4;
    this.req = 31;
    this.textID = '4-A';
    this.name = 'Mirrors';
    this.description = "Mirrors reflect shots. They can be destroyed by hitting them on the side.";

    this.initialContents = [
        [1000, 1111, 1102, 1121, 1000],
        
        [1111, 1501, 1500, 1503, 1121],
        
        [1200, 1200, 1200, 1200, 1200],
        
        [1101, 1000, 1502, 1000, 1101],
        
        [1000, 1000, 1101, 1000, 1000],
        
        [1000, 1000, 1101, 1000, 1000],
    ];
};

PuzzleDefinition.prototype.Puzzle52 = function() {

    this.height = 6;
    this.width = 6;
    this.maxMoves = 1;
        
    this.tier = 4.1;
    this.prereq = '51';
    this.req = 32;
    this.textID = '4-B';
    this.name = 'Splitters'
    this.description = "Splitters are like mirrors, but the initial shot continues through.";

    this.initialContents = [
        [1102, 1102, 1513, 1101, 1101, 1101],
        
        [1000, 1000, 1102, 1000, 1000, 1000],
        
        [1000, 1000, 1102, 1000, 1000, 1000],
        
        [1000, 1000, 1510, 1000, 1000, 1000],
        
        [1000, 1000, 1101, 1000, 1000, 1000],
        
        [1000, 1000, 1101, 1000, 1000, 1000],
    ];
};

PuzzleDefinition.prototype.Puzzle53 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 2;
    this.items = [1501, 1501]
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 33;
    this.textID = '4-1';
    this.name =  "Wafers";

    this.initialContents = [
        [1000, 1121, 1121, 1121, 1000],

        [1121, 1000, 1000, 1000, 1111],

        [1121, 1000, 1000, 1000, 1111],

        [1121, 1000, 1000, 1000, 1111],

        [1000, 1111, 1111, 1111, 1000],
    ];
};

PuzzleDefinition.prototype.Puzzle43 = function() {

    this.height = 5;
    this.width = 5;
    this.maxMoves = 3;
    this.items = [1501, 1331];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 34;
    this.textID = '4-2';
    this.name =  "Get Outta Da Way!";

    this.initialContents = [

        [1200, 1200, 1200, 1000, 1000],

        [1200, 1111, 1200, 1000, 1000],

        [1200, 1502, 1200, 1000, 1000],

        [1000, 1000, 1000, 1000, 1000],

        [1000, 1000, 1000, 1000, 1101],

    ];
};

PuzzleDefinition.prototype.Puzzle44 = function() {

    this.height = 7;
    this.width = 5;
    this.maxMoves = 1;
    this.items = [1511, 1511, 1511, 1511, 1511, 1511, 1511];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 35;
    this.textID = '4-3';
    this.name =  "No Way!";

    this.initialContents = [

        [1000, 1101, 1000, 1102, 1502],

        [1000, 1101, 1000, 1101, 1000],

        [1000, 1101, 1000, 1101, 1000],

        [1000, 1101, 1000, 1101, 1000],

        [1000, 1101, 1000, 1101, 1000],

        [1000, 1101, 1000, 1101, 1000],

        [1000, 1101, 1000, 1101, 1000],

    ];
};

PuzzleDefinition.prototype.Puzzle34 = function() {

    this.height = 4;
    this.width = 3;
    this.maxMoves = 3;
    this.items = [1501, 1400, 1402];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 36;
    this.textID = '4-4';
    this.name =  "Something";

    this.initialContents = [

        [1200, 1000, 1103],

        [1101, 1000, 1000],

        [1101, 1000, 1000],

        [1101, 1000, 1000]

    ];
};

PuzzleDefinition.prototype.Puzzle35 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 1;
    this.items = [1503, 1513];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 37;
    this.textID = '4-5';
    this.name = 'Infinite Loop';
    this.description = "Everything has to stop before the puzzle is solved.";

    this.initialContents = [

        [1501, 1000, 1000, 1000, 1000, 1503],

        [1000, 1500, 1000, 1000, 1000, 1000],

        [1000, 1105, 1000, 1000, 1000, 1000],

        [1000, 1321, 1000, 1000, 1000, 1000],

        [1000, 1201, 1000, 1000, 1000, 1000],

        [1000, 1105, 1000, 1000, 1000, 1000],

        [1000, 1500, 1000, 1000, 1000, 1000],

        [1503, 1000, 1000, 1000, 1000, 1501],
    ];
};

PuzzleDefinition.prototype.Puzzle45 = function() {

    this.height = 6;
    this.width = 3;
    this.maxMoves = 1;
    this.items = [1331, 1502, 1511];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 38;
    this.textID = '4-6';
    this.name =  "Weird";

    this.initialContents = [
        [1000, 1121, 1000],

        [1000, 1111, 1000],

        [1000, 1000, 1000],

        [1000, 1111, 1000],

        [1000, 1000, 1000],

        [1000, 1121, 1000]
    ];
};

PuzzleDefinition.prototype.Puzzle55 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 3;
    this.items = [1401, 1401, 1401, 1401];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 39;
    this.textID = '4-7';
    this.name =  "Doom Prison";

    this.initialContents = [

        [1200, 1200, 1200, 1200, 1200, 1200],

        [1200, 1000, 1000, 1000, 1101, 1200],

        [1201, 1000, 1000, 1000, 1201, 1200],

        [1000, 1000, 1000, 1000, 1000, 1000],

        [1000, 1000, 1000, 1502, 1000, 1000],

        [1000, 1501, 1000, 1000, 1000, 1000],

        [1200, 1331, 1000, 1000, 1000, 1200],

        [1200, 1200, 1200, 1200, 1200, 1200],
    ];
};

PuzzleDefinition.prototype.Puzzle56 = function() {

    this.height = 6;
    this.width = 6;
    this.maxMoves = 3;
    this.items = [1402];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 40;
    this.textID = '4-8';
    this.name =  "????";

    this.initialContents = [

        [1111, 1501, 1000, 1000, 1000, 1503],

        [1331, 1000, 1000, 1000, 1103, 1000],

        [1000, 1131, 1500, 1000, 1000, 1000],

        [1000, 1000, 1000, 1000, 1000, 1000],

        [1331, 1121, 1000, 1000, 1000, 1103],

        [1000, 1000, 1000, 1000, 1000, 1321],

    ];
};

PuzzleDefinition.prototype.Puzzle66 = function() {

    this.height = 8;
    this.width = 6;
    this.maxMoves = 2;
    this.items = [1321, 1501, 1503, 1402];
    
    this.tier = 4.2;
    this.prereq = '52';
    this.req = 41;   
    this.textID = '4-9';
    this.name = "Blocked In";

    this.initialContents = [
        [1000, 1000, 1000, 1200, 1200, 1200],

        [1000, 1000, 1000, 1200, 1101, 1200],

        [1000, 1000, 1000, 1201, 1200, 1200],

        [1000, 1000, 1201, 1000, 1200, 1331],

        [1000, 1000, 1000, 1000, 1000, 1000],

        [1502, 1000, 1000, 1000, 1000, 1000],

        [1000, 1000, 1000, 1000, 1000, 1000],

        [1000, 1000, 1500, 1000, 1000, 1101],
    ];
};