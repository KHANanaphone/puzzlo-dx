//var MenuScene = {
//    solved: null
//};
//
//var SOLVED_NAME = 's27';
//
//TowerScene.Init = function() {
//
//    getSolvedStatus();
//    
//    TowerScene.$scene = $('#menu-scene');
//
//    var dia = $('#diamond-bg').eq(0);
//    //        TweenMax.to(dia, 30, {css: {rotation: 360}, ease: Linear.easeNone}).repeat(-1);
//
//    initializeGrid();
//    TowerScene.Show();
//
//    function getSolvedStatus() {
//
//        var solved = localStorage.getItem(SOLVED_NAME);
//
//        if (solved)
//            var solvedArray = solved.split(',');
//
//        TowerScene.solved = [];
//
//        for (var i = 0; i < 10; i++) {
//
//            TowerScene.solved[i] = [];
//
//            for (var j = 0; j < 8; j++) {
//
//                if (solvedArray)
//                    TowerScene.solved[i][j] = solvedArray[i * 8 + j];
//                else
//                    TowerScene.solved[i][j] = 0;
//            }
//        }
//    }
//
//    function initializeGrid() {
//
//        var $grid = $('#diamond-menu');
//        TowerScene.$levelTiles = [];
//
//        for (var i = 9; i >= 0; i--) {
//
//            var $row = $('<div class="level-row"></div>');
//            $grid.append($row);
//
//            TowerScene.$levelTiles[i] = [];
//
//            for (var j = 0; j < 8; j++) {
//
//                var $levelTile = $('<div>', {
//                    class: 'level-tile'
//                })
//                    .data('x', i)
//                    .data('y', j)
//                    .click(tileClick);
//
//                try {                    
//                    var puzz = new PuzzleDefinition(i, j);
//                    $levelTile.data('prereq', puzz.prereq);
//                    $levelTile.data('req', puzz.req);
//                    $levelTile.attr('tier', Math.round(puzz.tier));
//                    $levelTile.attr('title', puzz.textID);
//                    
//                } catch (err) {
//                    $levelTile.addClass('noPuzz');
//                    //console.log('no puzz ' + i + '-' + j);
//                }
//
//                $row.append($levelTile);
//                TowerScene.$levelTiles[i][j] = $levelTile;
//            }
//        }
//
//
//        TowerScene.CheckForUnlockableTiles();
//    }
//
//    function tileClick(event) {        
//        
//        if(TowerScene.loadingPuzzle)
//            return;
//        
//        if ($(this).hasClass('ready') || $(this).hasClass('complete')) {
//
//            
//            var x = $(this).data('x');
//            var y = $(this).data('y');
//            
//            if(DEBUG_CTRL){
//                
//                TowerScene.Solved(x, y, '', true);
//                return;
//            }
//            
//            TowerScene.loadingPuzzle = true;            
//            $(this).addClass('selected');
//            
//            $('.level-tile').not($(this)).addClass('notselected');
//            
//            setTimeout(function(){    
//                
//                TowerScene.loadingPuzzle = false;       
//                TowerScene.$scene.fadeOut();    
//                
//                TowerScene.shown = false;
//                
//                PuzzleScene.ShowPuzzle(x, y); 
//            }, 700);            
//        }
//    }
//};
//
//TowerScene.Show = function() {
//
//    $('.level-tile').removeClass('selected').removeClass('notselected');
//    
//    TowerScene.shown = true;
//    
//    $('#menu-scene').fadeIn();
//    $('#puzzle-scene').fadeOut();
//};
//
//TowerScene.Solved = function(x, y, rating, fast) {
//
//    if(fast){
//        
//        updateSolved(x, y);
//        return;
//    }
//    
//    //sendRating(x, y, rating);
//    
//    $('#main-content').css('background-color', '');
//    TowerScene.Show();
//
//    setTimeout(function() {
//
//        updateSolved(x, y);
//
//    }, 500);
//    
//    function updateSolved(x, y){
//        
//        TowerScene.solved[x][y] = 1;
//        localStorage.setItem(SOLVED_NAME, TowerScene.solved);
//
//        var $tile = TowerScene.$levelTiles[x][y];
//        $tile.removeClass('ready').addClass('complete');
//        TowerScene.CheckForUnlockableTiles();
//    }
//    
//    function sendRating(x, y, rating){
//        
//        $.post('/ratings', {
//            Rating: {
//                puzzle_id: x + '-' + y,
//                value: rating
//            }
//        }, function(a){
//            
//        });
//    }
//}
//
//TowerScene.CheckForUnlockableTiles = function() {
//
//    var count = 0;
//    
//    for (var i = 0; i < 10; i++) {
//        for (var j = 0; j < 8; j++) {
//            
//            if(TowerScene.solved[i][j] == 1){
//                
//                count++;
//            }
//        }
//    }
//    
//    for (var i = 0; i < 10; i++) {
//        for (var j = 0; j < 8; j++) {
//            
//            var $lt = TowerScene.$levelTiles[i][j];
//            
//            if (TowerScene.solved[i][j] == 1){
//                
//                $lt.addClass('complete');                
//            }                
//            else if($lt.hasClass('noPuzz'))
//                continue;
//            else if($lt.data('req') <= count &&
//                   TowerScene.prereqSolved($lt.data('prereq'))){            
//                $lt.addClass('ready');
//            }
//        }
//    }
//    
//    if(count == 80 && !TowerScene.allClear){
//        
//        TowerScene.allClear = true;
//        $('#diamond-menu').addClass('all-clear');
//        $('#bottom-section').text('All Clear!');
//    }
//    else if(count < 80){
//        
//        $('#bottom-section').text(count + ' / 80');
//    }
//    
//}
//
//TowerScene.prereqSolved = function(prereq){
//
//    
//    if(!prereq)
//        return true;
//    
//    var x = parseInt(prereq % 10);
//    var y = parseInt(prereq / 10);
//    
//    if(TowerScene.solved[y][x] > 0)
//        return true;
//    
//    return false;
//}
//
//function resetSolvedStatuses() {
//
//    localStorage.setItem('solved', null);
//    window.reload();
//}