function TowerCategory(id, name, required){

    this.id = id;
    this.name = name;
    this.towers = [];
    this.puzzleCount = 0;
    this.towerCount = 0;
    this.required = required;
};

TowerCategory.prototype.addTower = function(name, required, puzzles){

    var tower = {
        name: name,
        required: required,
        puzzles: puzzles
    };

    this.towers.push(tower);
    this.towerCount++;
    this.puzzleCount += puzzles.length;
};

PUZZLO.tower_categories.fun = new TowerCategory('fun', 'Fun Towers', 0);
PUZZLO.tower_categories.advanced = new TowerCategory('advanced', 'Advanced Towers', 30);
PUZZLO.tower_categories.dx = new TowerCategory('dx', 'DX Towers', 60);
