var TowerScene = {
    categoryId: null,
    components: {
    }
};

TowerScene.init = function(){

    return;
};

TowerScene.loadTowers = function(categoryId){

    TowerScene.categoryId = categoryId;
    TowerScene.category = PUZZLO.tower_categories[categoryId];
    TowerScene.progress = Main.progressInfo[categoryId];
    TowerScene.setupTowers();
    //TowerScene.updateSolved();
};

TowerScene.setupTowers = function(){


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

TowerScene.setSolved = function(towerId){

    // if(TowerScene.progress.solved[puzzleId] == 1)
    //     return;
    //
    // TowerScene.progress.solved[puzzleId] = 1;
    // TowerScene.progress.solvedCount++;
    // TowerScene.updateSolved();
    // TowerScene.showAndUpdateTile(TowerScene.tower.idMap[puzzleId], true);
    //
    // for(var lockedId in TowerScene.locked){
    //
    //     var puzz = TowerScene.tower.idMap[lockedId];
    //     if(TowerScene.progress.solvedCount >= puzz.requires)
    //         TowerScene.showAndUpdateTile(puzz, true);
    // }
    //
    // MenuScene.updatePcts();
    // Main.saveProgressInfo();
};

TowerScene.updateSolved = function(){

    var pct = (TowerScene.progress.solvedCount / TowerScene.tower.puzzleCount) * 100;
    $('#tower-scene .tower-progress .bar-hider').css('left', pct + '%');
    $('#tower-scene .tower-progress .check-count').text(TowerScene.progress.solvedCount);
};

TowerScene.back = function(){

    Main.showScene('menu');
};
