var MenuScene = {
    bgTileTypes: [1101, 1102, 1103, 1111, 1112, 1113, 1121, 1122, 1123, 1131, 1132, 1133]
};

MenuScene.init = function(){

    $('#menu-scene').click(function(){
        
        if(!MenuScene.introTimeline || !MenuScene.introTimeline.isActive())
            return;
        
        MenuScene.introTimeline.progress(1, false);
    });
    
    Main.loadProgressInfo();    

    var $towerSelect = $('#menu-scene .tower-select');
    var $bg = $towerSelect.find('.background'); 
    var y = -1;
    
    for(var id in Towers){
        
        y++;
        var tower = Main.towerInfos[id];
        
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
        $row.click(function(){
            MenuScene.rowClicked($(this));
        });
        
        $towerSelect.append($row);
    };    
        
    MenuScene.updatePcts();  
};

MenuScene.updatePcts = function(){
    
    $('#menu-scene .tower-select .menu-tower-row').each(function(){   
        
        var id = $(this).data('towerId');
        var pct = Math.round(
            100 * Main.progressInfo[id].solvedCount / Towers[id].puzzleCount);
        $(this).find('.pct').text(pct + '%');        
    });
};

MenuScene.rowClicked = function($row){
    
    if(MenuScene.introRunning)
        return false;
    
    var towerId = $row.data('towerId');
    
    $row.addClass('clicked');  
    Main.showScene('tower'); 
    TowerScene.loadTower(towerId);
    
    window.setTimeout(function(){
         
        $row.removeClass('clicked');
    }, 500);
};

MenuScene.beginAnimation = function(){
    
    var $p = $('#menu-scene .p');
    var $uzzlo = $('#menu-scene .uzzlo');
    var $dx = $('#menu-scene #dx-logo path');
    var $towerSelect = $('#menu-scene .tower-select');
    var tl = new TimelineLite();
    MenuScene.introTimeline = tl;

    tl.set($p, {rotation: 45, transformOrigin:'bottom'});
    
    tl.to($uzzlo, 1, {attr: {x: 400}, ease: Linear.easeNone}, 0);
    tl.to($p, 1, {rotation: 0, ease: Circ.easeOut}, 1);
    tl.to($uzzlo, 0.4, {attr: {y: 100}, ease: Quad.easeOut}, 1);
    tl.to($uzzlo, 0.4, {attr: {y: 300}, ease: Quad.easeIn}, 1.4);
    tl.to($uzzlo, 0.5, {attr: {x: 300}, letterSpacing: '0px'}, 1.8);
    
    $dx.each(function(index){
        
        var len = this.getTotalLength();
        tl.set(this, {'stroke-dasharray': len, 'stroke-dashoffset': len}, 0);
        tl.to(this, 0.5, {'stroke-dashoffset': 0}, 2.3 + index * 0.2);
    });
    
    tl.to($towerSelect, 0.5, {opacity: 1}, 1.8);    
    tl.play();
    
    setInterval(MenuScene.createRandomBgObject, 2000);
};

MenuScene.createRandomBgObject = function(){
    
    if(Main.currentScene != 'menu')
        return;

    var $tile = $('#hidden .puzzle-tile').clone();
    var tile = new Tile($tile);
    var type = MenuScene.bgTileTypes[Math.floor(Math.random() * MenuScene.bgTileTypes.length)];
    tile.setContents(type);
    
    $tile.css('top', '-10%').css('left', (Math.random() * 100) + '%');    
    $('#menu-scene .menu-bg').append($tile);

    TweenLite.to($tile, 10, {top: '105%', rotation:'450', onComplete:remove, ease:Linear.easeNone});
    
    function remove(){
        $tile.remove();
    };
};