function Tile($tile, properties) {

    if (!properties)
        properties = {};

    this.$tile = $tile;
    var self = this;

    $tile.attr('tile-type', 'board');

    $tile.click(
        function() {
            self.clicked();
        });

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
    };
};

Tile.prototype.clicked = function() {

    var next = PuzzleScene.itemTiles[0];

    if(this.contents.canToggle){

        this.contents.toggle();
        this.flashBackground('white');
        this.drawContents();

        if(this.contents.type == 'teleporter')
            PuzzleScene.checkTeleporters();
    }
    else if (!next){
        return;
    }
    else if (next.contents.type == 'shifter'){

        if(ShotManager.getShotsAt(this.x + 1, this.y + 1).length > 0)
            return;
        if(next.contents.doShift(this))
            PuzzleScene.nextItem();
    }
    else if(this.contents.type != 'blank'){
            return;
    }
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

    if(this.contents.canToggle)
        this.$tile.addClass('can-toggle');
    else
        this.$tile.removeClass('can-toggle');
}

Tile.prototype.flashBackground = function(color) {

    var $bg = this.$tile.find('.bg');
    var bgcolor = $bg.css('background-color');

    if(this.type == 'block' && this.value == 0){
        return;
    }

    TweenMax.fromTo($bg, 0.3, {
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
