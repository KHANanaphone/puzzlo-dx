var MenuScene = {
    storageId: 'pdx',
    towerInfos: [
        {id: 'beginner', name: 'Beginner Tower'},
        {id: 'advanced', name: 'Advanced Tower'},
        {id: 'dx', name: 'DX Tower'}
    ]
};

MenuScene.init = function(){
    
    MenuScene.loadProgressInfo();    

    var $towerSelect = $('#menu-scene .tower-select');
    var $bg = $towerSelect.find('.background'); 
    
    for(var y = 0; y < MenuScene.towerInfos.length; y++){
        
        var tower = MenuScene.towerInfos[y];
        
        for(var x = 0; x < 4; x++){
            
            var $tile = $('#hidden .menu-puzzle-tile').clone();
            
            if((x + y) % 2)
                $tile.addClass('even');
            else
                $tile.addClass('odd');
            
            $bg.append($tile);
        };
        
        var $row = $('#hidden .menu-tower-row').clone();
        $row.data('towerId', tower.id);
        $row.addClass(tower.id);
        $row.find('.name').text(tower.name);
        $row.find('.pct').text('0%');
        $row.click(function(){
            MenuScene.rowClicked($(this));
        });
        
        $towerSelect.append($row);
    };   
};

MenuScene.rowClicked = function($row){
    
    var tower = MenuScene.progressInfo[$row.data('towerId')];
    
    $row.addClass('clicked');  
    Main.showScene('tower'); 
    TowerScene.loadTower(tower);
    
    window.setTimeout(function(){
         
        $row.removeClass('clicked');
    }, 500);
};

MenuScene.loadProgressInfo = function(){
    
    var storageString = localStorage[MenuScene.storageId];

    if(!storageString){
        
        MenuScene.progressInfo = {};
        
        for(var i = 0; i < MenuScene.towerInfos.length; i++){
            
            var tower = MenuScene.towerInfos[i];
            var obj = {id: tower.id, pct: 0};
            MenuScene.progressInfo[tower.id] = obj;
        }
    }
    else
        MenuScene.progressInfo = JSON.parse(storageString);
};

MenuScene.saveProgressInfo = function(){
    
    var storageString = JSON.stringify(MenuScene.progressInfo);
};