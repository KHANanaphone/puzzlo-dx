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

                    Main.currentPuzzle = {
                        category: TowerScene.category.id,
                        tower: data.towerIndex,
                        puzzle: data.puzzleIndex
                    };

                    if(PUZZLO.debug.ctrlDown){
                        Main.setCurrentSolved();
                        TowerScene.updateSolved();
                    }
                    else{
                        PuzzleScene.showPuzzle(new Puzzle(data.puzzle));
                        AudioManager.playSfx('Teleport');
                    }
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
    AudioManager.playSfx('Toggle');
};

TowerScene.updateTower = function(){

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
};

TowerScene.updateSolved = function(delay){

    if(delay)
        setTimeout(doIt, 500);
    else
        doIt();

    function doIt(){

        var info = Main.progressInfo[TowerScene.category.id]
        var pct = info.solved / info.puzzles * 100;
        $('#tower-scene .category-progress .bar-hider').css('left', pct + '%');
        $('#tower-scene .category-progress .check-count').text(info.solved);

        var category = TowerScene.category;
        for(var i = 0; i < category.towers.length; i++){

            var solved = Main.progressInfo[category.id][i];
            var tower = category.towers[i];
            var $tower = $('#tower-scene .tower-section .tower').eq(i);

            if(solved == tower.puzzles.length)
                $tower.attr('status', 'finished');

            $tower.find('.tower-row').each(function(index){

                var revIndex = tower.puzzles.length - index - 1;
                if(revIndex < solved)
                    $(this).attr('status', 'solved');
                else if(revIndex == solved)
                    $(this).attr('status', 'unlocked');
                else
                    $(this).attr('status', 'locked');

            });
        };

        TowerScene.updateShift();
    }
};

TowerScene.back = function(){

    Main.showScene('menu');
    AudioManager.playSfx('Retry');
};
