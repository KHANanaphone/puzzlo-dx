var TowerScene = {
    xCount: 6,
    yCount: 8,
    components: {
        tiles: {},
        paths: {}
    },
    locked: {}
};

TowerScene.init = function(){
    
    var $sel = $('#tower-scene .level-select');
    var width = 100 / TowerScene.xCount;
    var height = 100 / TowerScene.yCount; 
    
    for(var y = 0; y < TowerScene.yCount; y++){
        
        for(var x = 0; x < TowerScene.xCount; x++){
            
            var tileId = y + '-' + x;
            var $tile = $('#hidden .level-tile').clone();
            $tile.data('id', tileId)
            .css({
                left: (x * width) + '%',
                bottom: (y * height) + '%',
                height: height + '%',
                width: width + '%'
            })
            .hide()
            .click(function(){
                
                if($(this).attr('status') == 'locked')
                    return;

                var id = $(this).data('id');
                var puzzle = TowerScene.tower.getPuzzle(id);                
                PuzzleScene.showPuzzle(puzzle, id);
            });
            $tile.find('.levelid').text(tileId);
            
            TowerScene.components.tiles[tileId] = $tile;
            $sel.append($tile);
            
            if(x < TowerScene.xCount - 1){
                
                var pathId = 'h' + y + '-' + x;
                var $path = $('#hidden .level-path').clone();
                $path.data('id', pathId)
                .css({
                    left: (x * width + (0.8 * width)) + '%',
                    bottom: (y * height + (0.45 * height)) + '%',
                    width: (0.4 * width) + '%',
                    height: (0.1 * height) + '%'
                })
                .hide();
                
                TowerScene.components.paths[pathId] = $path;
                $sel.append($path);
            }
            
            if(y < TowerScene.yCount - 1){
                
                var pathId = 'v' + y + '-' + x;
                var $path = $('#hidden .level-path').clone();
                $path.data('id', pathId)
                .css({
                    left: (x * width + (0.45 * width)) + '%',
                    bottom: (y * height + (0.8 * height)) + '%',
                    width: (0.1 * width) + '%',
                    height: (0.4 * height) + '%'
                })
                .hide();
                
                TowerScene.components.paths[pathId] = $path;
                $sel.append($path);
            }
        };
    };
};

TowerScene.loadTower = function(towerId){
    
    for(var id in TowerScene.components.tiles){
        
        TowerScene.components.tiles[id].hide().attr('status', 'hidden');
    }
    
    for(var id in TowerScene.components.paths){
        
        TowerScene.components.paths[id].hide();
    }
    
    var info = Main.towerInfos[towerId];
    TowerScene.progress = Main.progressInfo[towerId];
    TowerScene.tower = Towers[towerId];
    
    $('#tower-scene .tower-name').text(info.name);
    TowerScene.updateSolved();
    TowerScene.showAndUpdateTile(TowerScene.tower.first);   
};

TowerScene.showAndUpdateTile = function(puzzleId, animate){
    
    var $tile = TowerScene.components.tiles[puzzleId];
    var puzz = TowerScene.tower.map[puzzleId];
    $tile.fadeIn();
    
    if(TowerScene.progress.solved[puzzleId]){
        
        if($tile.attr('status') != 'solved'){
            $tile.attr('status', 'solved');
            TowerScene.showTilesConnectedTo(puzzleId, animate);
        }
    }
    else if(puzz.requires > 0){
        
        if(puzz.requires > TowerScene.progress.solvedCount){            
        
            $tile.find('.locked text').text(puzz.requires);        
            $tile.attr('status', 'locked');     

            if(!TowerScene.locked[puzzleId])
                TowerScene.locked[puzzleId] = $tile;            
        }
        else{
            delete TowerScene.locked[puzzleId];
            $tile.attr('status', 'unsolved');            
        }
    }
    else
        $tile.attr('status', 'unsolved');
    
};

TowerScene.showTilesConnectedTo = function(puzzleId, animate){
    
    var y = parseInt(puzzleId[0]), x = parseInt(puzzleId[2]);
    var paths = TowerScene.tower.map[puzzleId].paths;
    var nextId, pathId;
    
    if(paths.indexOf('L') != -1){

        nextId = y + '-' + (x - 1);
        pathId = 'h' + nextId;
        check(nextId, pathId);        
    }
    if(paths.indexOf('R') != -1){

        pathId = 'h' + puzzleId;
        nextId = y + '-' + (x + 1);
        check(nextId, pathId);   
    }
    if(paths.indexOf('U') != -1){

        pathId = 'v' + puzzleId;
        nextId = (y + 1) + '-' + x;
        check(nextId, pathId);   
    }
    if(paths.indexOf('D') != -1){

        nextId = (y - 1) + '-' + x;
        pathId = 'v' + nextId;
        check(nextId, pathId);   
    }
    
    function check(nextId, pathId){

        TowerScene.showAndUpdateTile(nextId, animate);  
        TowerScene.showPath(pathId);
    }
};

TowerScene.showPath = function(pathId){
    
    TowerScene.components.paths[pathId].fadeIn();
};

TowerScene.setSolved = function(puzzleId){
    
    if(TowerScene.progress.solved[puzzleId] == 1)
        return;
    
    TowerScene.progress.solved[puzzleId] = 1;
    TowerScene.progress.solvedCount++;
    TowerScene.updateSolved();
    TowerScene.showAndUpdateTile(puzzleId, true);
    
    for(var lockedId in TowerScene.locked){
        
        var puzz = TowerScene.tower.map[lockedId];
        if(TowerScene.progress.solvedCount >= puzz.requires)
            TowerScene.showAndUpdateTile(lockedId, true);
    }
    
    MenuScene.updatePcts();
    Main.saveProgressInfo();
};

TowerScene.updateSolved = function(){
    
    var pct = (TowerScene.progress.solvedCount / TowerScene.tower.puzzleCount) * 100;
    $('#tower-scene .tower-progress .bar-hider').css('left', pct + '%');
    $('#tower-scene .tower-progress .check-count').text(TowerScene.progress.solvedCount);
};

TowerScene.back = function(){
    
    Main.showScene('menu');
};