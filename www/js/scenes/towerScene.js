var TowerScene = {
    category: null,
    shift: 0
};

TowerScene.init = function(){

    return;
};

TowerScene.loadTowers = function(categoryId){

    var cat = PUZZLO.tower_categories[categoryId];
    TowerScene.category = cat;
    TowerScene.shift = 0;

    drawTowers(cat);
    TowerScene.updateShift();
    TowerScene.updateSolved();

    function drawTowers(category){

        var $towers = $('#tower-scene .tower-section').empty();

        for(var t = 0; t < category.towers.length; t++){

            var tower = category.towers[t];
            var numSolved = Main.progressInfo[cat.id][t];
            var $tower = $('#hidden .tower').clone();
            $tower.find('.tower-name').text(tower.name);
            $tower.css('left', (t * 100) + '%');

            for(var i = 0; i < tower.puzzles.length; i++){

                var puzz = tower.puzzles[i];
                var $row = $('#hidden .tower-row').clone();

                $row.data({
                    'puzzle': puzz,
                    'towerIndex': t,
                    'puzzleIndex': i
                });

                $row.find('.puzzle-name').text(puzz.name);
                $row.click(function(){

                    if($(this).attr('status') == 'locked')
                        return;

                    var data = $(this).data();

                    TowerScene.currentPuzzle = {
                        tower: data.towerIndex,
                        puzzle: data.puzzleIndex
                    };

                    PuzzleScene.showPuzzle(new Puzzle(data.puzzle));
                });

                $row.attr('status', i > numSolved ? 'locked' : (i < numSolved ? 'solved' : 'unlocked'));
                $tower.find('.tower-rows').prepend($row);
            }

            $towers.append($tower);
        }
    }
};

TowerScene.updateShift = function(){

    var shift = TowerScene.shift;
    var category = TowerScene.category;
    var $left = $('#tower-scene .nav-left');
    var $right = $('#tower-scene .nav-right');
    $('#tower-scene .tower-section').css('margin-left', (shift * -100) + '%');

    if(shift == 0)
        $left.hide();
    else
        $left.show();

    var rightTower = category.towers[shift + 1];

    if(!rightTower)
        $right.hide();
    else if(rightTower.required > Main.progressInfo[category.id].solved){
        $right.show();
        $right.attr('locked', true);
        $right.find('.req').text(rightTower.required);
    }
    else {
        $right.show();
        $right.attr('locked', false);
    }
};

TowerScene.slide = function(i){

    TowerScene.shift += i;
    TowerScene.updateShift();
};

TowerScene.setSolved = function(){

    var category = TowerScene.category.id;
    var tower = TowerScene.currentPuzzle.tower;
    var puzzle = TowerScene.currentPuzzle.puzzle;

    if(!saveProgress(category, tower, puzzle))
        return;

    setTimeout(function(){

        $('#tower-scene .tower-section .tower')
        .eq(tower).find('.tower-row')
        .eq((puzzle + 1) * -1).attr('status', 'solved');

        $('#tower-scene .tower-section .tower')
        .eq(tower).find('.tower-row')
        .eq((puzzle + 2) * -1).attr('status', 'unlocked');

        TowerScene.updateSolved();
        TowerScene.updateShift();

    }, 300);

    function saveProgress(cat, tower, puzzle){

        if(Main.progressInfo[cat][tower] != puzzle)
            return false;

        Main.progressInfo[cat][tower] = puzzle + 1;
        Main.progressInfo[cat].solved++;
        Main.saveProgressInfo();
        return true;
    }
};

TowerScene.unlockAll = function(){

    $('#tower-scene .tower-section .tower .tower-row').attr('status', 'unlocked');
    Main.progressInfo[TowerScene.category.id].solved = 999;
    TowerScene.updateShift();

};

TowerScene.updateSolved = function(){

    var info = Main.progressInfo[TowerScene.category.id]
    var pct = info.solved / info.puzzles * 100;
    $('#tower-scene .category-progress .bar-hider').css('left', pct + '%');
    $('#tower-scene .category-progress .check-count').text(info.solved);

    MenuScene.updatePcts();
};

TowerScene.back = function(){

    Main.showScene('menu');
};
