var MenuScene = {
    solved: null
};

var SOLVED_NAME = 's26';

MenuScene.Init = function() {

    getSolvedStatus();
    
    MenuScene.$scene = $('#menu-scene');

    var dia = $('#diamond-bg').eq(0);
    //        TweenMax.to(dia, 30, {css: {rotation: 360}, ease: Linear.easeNone}).repeat(-1);

    initializeGrid();
    MenuScene.Show();

    function getSolvedStatus() {

        var solved = localStorage.getItem(SOLVED_NAME);

        if (solved)
            var solvedArray = solved.split(',');

        MenuScene.solved = [];

        for (var i = 0; i < 10; i++) {

            MenuScene.solved[i] = [];

            for (var j = 0; j < 8; j++) {

                if (solvedArray)
                    MenuScene.solved[i][j] = solvedArray[i * 8 + j];
                else
                    MenuScene.solved[i][j] = 0;
            }
        }
    }

    function initializeGrid() {

        var $grid = $('#diamond-menu');
        MenuScene.$levelTiles = [];

        for (var i = 9; i >= 0; i--) {

            var $row = $('<div class="level-row"></div>');
            $grid.append($row);

            MenuScene.$levelTiles[i] = [];

            for (var j = 0; j < 8; j++) {

                var $levelTile = $('<div>', {
                    class: 'level-tile'
                })
                    .data('x', i)
                    .data('y', j)
                    .click(tileClick);

                try {                    
                    var puzz = new PuzzleDefinition(i, j);
                    $levelTile.data('prereq', puzz.prereq);
                    $levelTile.data('req', puzz.req);
                    $levelTile.attr('tier', Math.round(puzz.tier));
                    $levelTile.attr('title', puzz.textID);
                    
                } catch (err) {
                    $levelTile.addClass('noPuzz');
                    //console.log('no puzz ' + i + '-' + j);
                }

                $row.append($levelTile);
                MenuScene.$levelTiles[i][j] = $levelTile;
            }
        }


        MenuScene.CheckForUnlockableTiles();
    }

    function tileClick(event) {        
        
        
        if ($(this).hasClass('ready') || $(this).hasClass('complete')) {

            var x = $(this).data('x');
            var y = $(this).data('y');
            
            if(DEBUG_CTRL){
                
                MenuScene.Solved(x, y, '', true);
                return;
            }
            
            $(this).addClass('selected');
            
            setTimeout(function(){                
                MenuScene.$scene.fadeOut();
                PuzzleScene.ShowPuzzle(x, y);
            }, 500);            
        }
    }
};

MenuScene.Show = function() {

    $('#menu-scene').fadeIn();
    $('#puzzle-scene').fadeOut();
};

MenuScene.Solved = function(x, y, rating, fast) {

    if(fast){
        
        updateSolved(x, y);
        return;
    }
    
    //sendRating(x, y, rating);
    
    $('#main-content').css('background-color', '');
    MenuScene.Show();

    setTimeout(function() {

        updateSolved(x, y);

    }, 500);
    
    function updateSolved(x, y){
        
        MenuScene.solved[x][y] = 1;
        localStorage.setItem(SOLVED_NAME, MenuScene.solved);

        var $tile = MenuScene.$levelTiles[x][y];
        $tile.removeClass('ready').addClass('complete');
        MenuScene.CheckForUnlockableTiles();
    }
    
    function sendRating(x, y, rating){
        
        $.post('/ratings', {
            Rating: {
                puzzle_id: x + '-' + y,
                value: rating
            }
        }, function(a){
            
        });
    }
}

MenuScene.CheckForUnlockableTiles = function() {

    var count = 0;
    
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {
            
            if(MenuScene.solved[i][j] != 2){
                
                count++;
            }
        }
    }
    
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 8; j++) {
            
            var $lt = MenuScene.$levelTiles[i][j];
            
            if (MenuScene.solved[i][j] == 1){
                
                $lt.addClass('complete');                
            }                
            else if($lt.hasClass('noPuzz'))
                continue;
            else if($lt.data('req') <= count &&
                   MenuScene.prereqSolved($lt.data('prereq'))){            
                $lt.addClass('ready');
            }
        }
    }
    
    if(count == 80 && !MenuScene.allClear){
        
        MenuScene.allClear = true;
        $('#diamond-menu').addClass('all-clear');
        $('#bottom-section').text('All Clear!');
    }
    else if(count < 80){
        
        $('#bottom-section').text(count + ' / 80');
    }
    
}

MenuScene.prereqSolved = function(prereq){
    
    return true;
    
    if(!prereq)
        return true;
    
    var x = parseInt(prereq % 10);
    var y = parseInt(prereq / 10);
    
    if(MenuScene.solved[y][x] > 0)
        return true;
    
    return false;
}

function resetSolvedStatuses() {

    localStorage.setItem('solved', null);
    window.reload();
}