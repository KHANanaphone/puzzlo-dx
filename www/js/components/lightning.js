function Lightning($tile, isTop){
    
	this.$tile = $tile;
    this.isTop = isTop;
    
    this.x = $tile.attr('tile-x');
    this.y = $tile.attr('tile-y');
    
	$tile.attr('tile-type', 'lightning').css('background-color', '')
    .find('.icon').attr('tile-type', '');
    
    this.drawContents();
    this.setupClicking();
}

Lightning.prototype.drawContents = function(){
    
    var $icon = $('#hidden .lightning-icon').clone();
    
    if(!this.isTop)
        $icon.find('path').attr('transform', 'scale(1, -1) translate(0, -200)');
    
    this.$tile.find('.icon').empty().append($icon);
    
}

Lightning.prototype.setupClicking = function(){
    
    var self = this;
    var $tile = this.$tile;
    
    $tile
    .attr('ready', 1)
    .click(function(){
       
        if($tile.attr('ready') == 0)
            return;
        else if(PuzzleScene.puzzle.movesLeft <= 0)
            return;
//        else if(Timer.running)
//            return;
        else if(PuzzleScene.solved)
            return;
        
//        $tile.removeClass('clickit');      
//        $tile.width($tile.width());        
//        $tile.addClass('clickit');
        
        $tile.attr('ready', 0);
        LightningLogic.shootLightning(self);
    });
}

Lightning.prototype.makeReady = function(){
    
    this.$tile.attr('ready', 1);
}