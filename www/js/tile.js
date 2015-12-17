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
    else if (next.contents.type == 'shifter'){

        if(next.contents.doShift(this))
            PuzzleScene.nextItem();
    }
    else if(this.contents.type != 'blank')
            return;
    else {

        this.setContents(next.contents);
        PuzzleScene.nextItem();

        if(next.contents.type == 'teleporter')
            PuzzleScene.checkTeleporters();
    }
}

Tile.prototype.setContents = function(contents) {

    if (typeof contents === 'object')
        this.contents = contents;
    else //it's a string id
        this.contents = PUZZLO.pieces[contents[0]].create(contents);

    this.drawContents();
}

Tile.prototype.drawContents = function() {

    var $icon = this.$tile.find('.icon').empty();
    this.contents.draw($icon);
}

Tile.prototype.flashBackground = function(color) {

    var $bg = this.$tile.find('.bg');
    var bgcolor = $bg.css('background-color');

    if(this.type == 'block' && this.value == 0){
        return;
    }

    TweenMax.fromTo($bg, Timer.interval / 800, {
            backgroundColor: color
        }, {
            backgroundColor: bgcolor,
        onComplete: function() {
            $bg.css('background-color', '');
        }
    });
}

Tile.prototype.clear = function() {

    this.setContents('   ');
}

Tile.prototype.applyLogic = function(action){

    if(!this.contents.dontFlashBg){

        if(action.color == 'blue')
            this.flashBackground('#44B');
        else if(action.color == 'red')
            this.flashBackground('red');
        else if(action.color == 'yellow')
            this.flashBackground('#EE7');
    }

    var finished = this.contents.applyLogic(this, action);
    this.drawContents();

    return finished;
};
