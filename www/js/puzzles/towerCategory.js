function TowerCategory(id, name){

    this.id = id;
    this.name = name;
    this.towers = {};
    this.puzzleCount = 0;
    this.towerCount = 0;
};

TowerCategory.prototype.addTower = function(name, required, puzzles){

    var tower = {
        name: name,
        required: required,
        puzzles: puzzles
    };

    this.towers[name] = tower;
    this.towerCount++;
    this.puzzleCount += puzzles.length;
};

PUZZLO.tower_categories.fun = new TowerCategory('fun', 'Fun Towers');
PUZZLO.tower_categories.advanced = new TowerCategory('advanced', 'Advanced Towers');
PUZZLO.tower_categories.dx = new TowerCategory('dx', 'DX Towers');
