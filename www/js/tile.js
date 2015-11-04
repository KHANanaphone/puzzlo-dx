function Tile($tile, properties) {

    if (!properties)
        properties = {};

    this.$tile = $tile;
    var self = this;

    $tile.attr('tile-type', 'board');

    if (properties.isBoardTile) {

        this.x = properties.x;
        this.y = properties.y;

        $tile.attr('board-x', this.x);
        $tile.attr('board-y', this.y);

        if ((this.x + this.y) % 2 == 0) {
            $tile.attr('even', true);
        } else {
            $tile.attr('even', false);
        }

        $tile.click(
            function() {
                self.clicked();
            });
    };
};

Tile.prototype.clicked = function() {

    var next = PuzzleScene.itemTiles[0];

    if (!next)
        return;
    else if(this.contents.type != 'blank')
        return;
    // else if (next.type == 'shifter')
    //     ShifterLogic.DoShift(nextItemTile, this);
    else {
        
        this.setContents(next.contents);
        
        // if(nextItemTile.type == 'teleporter')
        //     TeleporterLogic.CheckTeleporters();
        
        PuzzleScene.nextItem();
    }
}

Tile.prototype.setContents = function(contents) {

    if (typeof contents === 'object')
        this.contents = contents;
    else //it's a string id
        this.contents = PIECES[contents[0]].create(contents);
    
    this.drawContents();
}

Tile.prototype.drawContents = function() {

    var $icon = this.$tile.find('.icon').empty();
    this.contents.draw($icon);    
}

//     function drawDiamond(value) {

//         if (value > 0) {

//             var $diamond = $('#hidden .diamond-icon').clone();
//             $icon.append($diamond);
//             $diamond.find('text').html(value);
//         }
//     };

//     function drawWall(value) {

//         var $block = $('#hidden .breakable-block-icon').clone();
//         $icon.append($block);
//     };

//     function drawBlock(value) {

//         var $block = $('#hidden .breakable-block-icon').clone();
//         $icon.append($block);
//     };

//     function drawBomb(value) {

//         var $bomb = $('#hidden .bomb-icon').clone();
//         $icon.append($bomb);
//     };

//     function drawShifter(value) {

//         var $shifter = $('#hidden .shifter-icon').clone();
//         $shifter.find('polygon').attr('transform', 'rotate(' + (90 * value) + ',100,75)');
//         $icon.append($shifter);
//     };

//     function drawMirror(subtype, value) {

//         var $mirror = $('#hidden .mirror-icon').clone();
//         $mirror.find('polygon').attr('transform', 'rotate(' + (-45 * value) + ',100,100)');
//         $icon.append($mirror);
//     }
    
//     function drawPotion(subtype){
        
//         if(subtype == 'potion'){
            
//             var $potion = $('#hidden .potion-icon').clone();
//             $icon.append($potion);
//         }   
//         else if(subtype == 'poison'){
            
//             var $potion = $('#hidden .poison-icon').clone();
//             $icon.append($potion);
//         }    
//     }
    
//     function drawTeleporter(subtype){
        
//         var $teleporter = $('#hidden .teleporter-icon').clone().addClass(subtype);
        
// //        if(subtype == 't0')
// //            $teleporter.find('text').text('\u2660');
// //        else if(subtype == 't1')
// //            $teleporter.find('text').text('\u2663');
// //        else if(subtype == 't2')
// //            $teleporter.find('text').text('\u2665');
// //        else if(subtype == 't3')
// //            $teleporter.find('text').text('\u2666');
                
//         $icon.append($teleporter).removeClass('active');
//     }

Tile.prototype.FlashBackground = function(color) {

    var $bg = this.$tile.find('.bg');
    var bgcolor = $bg.css('fill');
    
    if(this.type == 'block' && this.value == 0){
        return;
    }    

    TweenMax.fromTo($bg, Timer.interval / 800, {
            fill: color 
        }, {
            fill: bgcolor,
        onComplete: function() {
            $bg.css('fill', '');
        }
    });
}

Tile.prototype.clear = function() {

    this.setContents('   ');
}

Tile.prototype.applyLogic = function(action){

    if(!this.contents.dontFlashBg){
    
        if(action.color == 'blue')
            this.FlashBackground('#44B');
        else if(action.color == 'red')
            this.FlashBackground('red');
        else if(action.color == 'yellow')
            this.FlashBackground('#EE7');
    }

    var finished = this.contents.applyLogic(this, action);
    this.drawContents();

    return finished;
};

//     if(this.type == 'diamond'){

//         if(this.subtype == type)
//             return true;

//         this.value--;

//         if(this.value == 0)
//             this.clear();
//     } 
//     else if (tile.type == 'bomb') {

//         BombLogic.Detonate(tile);
//         tile.Clear();

//         return true;
//     }
//     else if (tile.type == 'mirror'){
        
//         return MirrorLogic.ApplyLogic(action, tile);
//     }
//     else if (tile.type == 'potion'){
        
//         if(tile.subtype == 'poison')
//             PotionLogic.ApplyPoison();
//         else
//             PotionLogic.ApplyPotion();
        
//         tile.Clear();
//         return true;
//     } 
//     else if(tile.type == 'teleporter'){
        
//         return TeleporterLogic.ApplyLogic(action, tile);
//     }
// };