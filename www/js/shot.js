function Shot(options){

    var self = this;

    this.x = options.x;
    this.y = options.y;
    this.direction = options.direction;
    this.color = options.color;

    this.$shot = $('#hidden .shot')
    .clone()
    .attr('class', 'shot ' + options.color);

    var size = 100 / PuzzleScene.puzzleSize;

    this.$shot.css({

        top: size * this.y + '%',
        left: size * this.x + '%',
        width: size + '%',
        height: size + '%'
    });

    $('#tiles').append(this.$shot);
    ShotManager.add(this);

    setTimeout(function(){
        self.moveToNext();
    }, 5);
};

Shot.prototype.moveToNext = function(){

    var size = 100 / PuzzleScene.puzzleSize;
    var nextX = this.x;
    var nextY = this.y;
    var self = this;

    if (this.direction == 'U')
        nextY--;
    else if (this.direction == 'D')
        nextY++;
    else if (this.direction == 'L')
        nextX--;
    else if (this.direction == 'R')
        nextX++;//move
    else if (this.direction == 'UL'){
        nextY--; nextX--;
    }
    else if (this.direction == 'UR'){
        nextY--; nextX++;
    }
    else if (this.direction == 'DL'){
        nextY++; nextX--;
    }
    else if (this.direction == 'DR'){
        nextY++; nextX++;
    }

    var $tile = PuzzleScene.$tiles[nextY][nextX];

    //check boundary, set 'finished' flag if needed
    if (!$tile || $tile.attr('tile-type') != 'board') {

        ShotManager.remove(self);
        return;
    }

    this.$shot.css({

        top: size * nextY + '%',
        left: size * nextX + '%',
        '-webkit-transition-duration': ShotManager.interval / 1000 + 's',
        'transition-duration': ShotManager.interval / 1000 + 's'
    });

    setTimeout(doAction, ShotManager.interval);

    function doAction(){

        self.x = nextX;
        self.y = nextY;
        self.applyLogic();

        if(self.finished)
            ShotManager.remove(self);
        else
            self.moveToNext();
    };
};

Shot.prototype.destroy = function(){

    this.$shot.remove();
};

Shot.prototype.applyLogic = function(){

    var $tile = PuzzleScene.$tiles[this.y][this.x];

    //check boundary, set 'finished' flag if needed
    if (!$tile || $tile.attr('tile-type') != 'board') {

        this.finished = true;
        return;
    }

    //else do action to tile
    var tile = PuzzleScene.board[$tile.attr('board-y')][$tile.attr('board-x')];
    this.finished = tile.applyLogic(this);
};
