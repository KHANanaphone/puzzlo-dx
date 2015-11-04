var TowerScene = {
    components: {
        tiles: [],
        hPaths: [],
        vPaths: []
    },
    locked: {}
};

TowerScene.init = function(){     
    
    return;
};

TowerScene.loadTower = function(towerId){

    TowerScene.towerId = towerId;
    TowerScene.tower = Towers[towerId];
    TowerScene.info = Main.towerInfos[towerId];
    TowerScene.progress = Main.progressInfo[towerId];
    
    $('#tower-scene .tower-name').text(TowerScene.info.name);
    TowerScene.updateSolved();
    TowerScene.setupGrid();
};

TowerScene.setupGrid = function(){

    var components = {
        tiles: [],
        hPaths: [],
        vPaths: []
    };

    var $grid = $('#tower-scene .level-select');
    $grid.empty();
    var tower = TowerScene.tower;
    var height = tower.yxMap.length;
    var width = tower.yxMap[0].length;

    setupTiles();
    setupHPaths();
    setupVPaths();

    TowerScene.components = components;
    TowerScene.showAndUpdateTile(tower.first);

    function setupTiles(){

        for(var y = 0; y < height; y++){

            components.tiles[y] = [];
            for(var x = 0; x < width; x++){

                var node = tower.yxMap[y][x];

                if(!node)
                    continue;

                var $tile = $('#hidden .level-tile').clone();
                $tile.data('x', x).data('y', y).data('id', node.id)
                .css({
                    left: x * 100 / width + '%',
                    top: y * 100 / height + '%',
                    width: 100 / width + '%',
                    height: 100 / height + '%'
                })
                .hide()
                .click(function(){
                    
                    if($(this).attr('status') == 'locked')
                        return;

                    var puzzle = TowerScene.tower.getPuzzle($(this).data('id'));  
                    PuzzleScene.showPuzzle(puzzle);
                })
                .find('.levelid').text(node.id);

                $grid.append($tile);
                components.tiles[y][x] = $tile;
            }
        }
    };

    function setupHPaths(){

        for(var y = 0; y < height; y++){

            components.hPaths[y] = [];

            for(var x = 0; x < width - 1; x++){

                var $path = $('#hidden .level-path').clone();
                $path.css({
                    left: ((x + 0.8) * 100 / width) + '%',
                    top: ((y + 0.45) * 100 / height) + '%',
                    width: (0.4 * 100 / width) + '%',
                    height: (0.1 * 100 / height) + '%'
                }).hide();
                
                components.hPaths[y][x] = $path;
                $grid.append($path);
            }
        }
    };

    function setupVPaths(){

        for(var y = 0; y < height -1; y++){

            components.vPaths[y] = [];

            for(var x = 0; x < width; x++){

                var $path = $('#hidden .level-path').clone();
                $path.css({
                    left: ((x + 0.45) * 100 / width) + '%',
                    top: ((y + 0.8) * 100 / height) + '%',
                    width: (0.1 * 100 / width) + '%',
                    height: (0.4 * 100 / height) + '%'
                }).hide();
                
                components.vPaths[y][x] = $path;
                $grid.append($path);
            }
        }
    };
};

TowerScene.showAndUpdateTile = function(node, animate){
    
    if(!animate)
        go(node);
    else
        window.setTimeout(function(){go(node)}, 400);

    function go(node){

        var $tile = TowerScene.components.tiles[node.y][node.x];
        $tile.fadeIn();
        
        if(TowerScene.progress.solved[node.id]){
            
            if($tile.attr('status') != 'solved'){
                $tile.attr('status', 'solved');
                TowerScene.showTilesConnectedTo(node, animate);
            }
        }
        else if(node.requires > 0){
            
            if(node.requires > TowerScene.progress.solvedCount){            
            
                $tile.find('.locked text').text(node.requires);        
                $tile.attr('status', 'locked');     

                if(!TowerScene.locked[node.id])
                    TowerScene.locked[node.id] = $tile;            
            }
            else{
                delete TowerScene.locked[node.id];
                $tile.attr('status', 'unsolved');            
            }
        }
        else
            $tile.attr('status', 'unsolved');
    }    
};

TowerScene.showTilesConnectedTo = function(node, animate){
    
    var y = node.y, x = node.x;
    var paths = node.paths ? node.paths : '';
    var yxMap = TowerScene.tower.yxMap;
    
    if(paths.indexOf('L') != -1){

        TowerScene.showAndUpdateTile(yxMap[y][x - 1]);     
        TowerScene.components.hPaths[y][x-1].fadeIn();
    }
    if(paths.indexOf('R') != -1){

        TowerScene.showAndUpdateTile(yxMap[y][x + 1]);   
        TowerScene.components.hPaths[y][x].fadeIn();
    }
    if(paths.indexOf('U') != -1){

        TowerScene.showAndUpdateTile(yxMap[y - 1][x]);    
        TowerScene.components.vPaths[y-1][x].fadeIn();
    }
    if(paths.indexOf('D') != -1){

        TowerScene.showAndUpdateTile(yxMap[y + 1][x]);     
        TowerScene.components.vPaths[y][x].fadeIn();
    }
};

TowerScene.setSolved = function(puzzleId){
    
    if(TowerScene.progress.solved[puzzleId] == 1)
        return;
    
    TowerScene.progress.solved[puzzleId] = 1;
    TowerScene.progress.solvedCount++;
    TowerScene.updateSolved();
    TowerScene.showAndUpdateTile(TowerScene.tower.idMap[puzzleId], true);
    
    for(var lockedId in TowerScene.locked){
        
        var puzz = TowerScene.tower.idMap[lockedId];
        if(TowerScene.progress.solvedCount >= puzz.requires)
            TowerScene.showAndUpdateTile(puzz, true);
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