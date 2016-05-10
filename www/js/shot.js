function Shot(options){

    var self = this;

    this.x = parseInt(options.x);
    this.y = parseInt(options.y);
    this.direction = options.direction;
    this.color = options.color;

    this.$shot = $('<div></div>')
    .addClass('shot');

    var size = 100 / PuzzleScene.puzzleSize;

    this.$shot.css({
        width: size + '%',
        height: size + '%'
    });

    this.quickMove();

    $('#tiles').append(this.$shot);
    ShotManager.add(this);

    window.setTimeout(function(){
        self.moveToNext();
    }, 5);

    this.particleInterval = window.setInterval(function(){
        self.createParticle();
    }, 50);
};

Shot.prototype.createParticle = function(){

    var $particle = $('#hidden .shot-particle')
    .clone()
    .attr('class', 'shot-particle ' + this.color);

    $('#tiles').append($particle);

    $particle.css({
        top: this.$shot.css('top'),
        left: this.$shot.css('left')
    });

    var size = this.$shot.height();

    $particle.css({
        top: '+=' + (size*0.25 + bellRandom()*size/2),
        left: '+=' + (size*0.25 + bellRandom()*size/2)
    });

    $('#tiles').append($particle);

    window.setTimeout(function(){

        $particle.remove();
    }, 500);

    function bellRandom(){

        return (Math.random() +
        Math.random() +
        Math.random() +
        Math.random() +
        Math.random() +
         Math.random() +
         Math.random() +
         Math.random()) / 8;
    };
};

Shot.prototype.quickMove = function(){

    var size = 100 / PuzzleScene.puzzleSize;

    this.$shot.css({
        left: size * this.x + '%',
        top: size * this.y + '%'
    });
};

Shot.prototype.moveToNext = function(){

    var size = 100 / PuzzleScene.puzzleSize;
    var self = this;

    var shift = PUZZLO.directionToXY(this.direction);
    var nextX = this.x + shift[0];
    var nextY = this.y + shift[1];

    var $tile = PuzzleScene.$tiles[nextY][nextX];

    this.$shot.animate({
        top: size * nextY + '%',
        left: size * nextX + '%'
    }, PUZZLO.timerInterval, doAction);

    function doAction(){

        if(self.destroyed)
            return;

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
    window.clearInterval(this.particleInterval);
    this.destroyed = true;
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
