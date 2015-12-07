function Ice($tile, isLeft){

	this.$tile = $tile;
    this.isLeft = isLeft;

    this.x = $tile.attr('tile-x');
    this.y = $tile.attr('tile-y');

	$tile.attr('tile-type', 'ice').css('background-color', '')
    .find('.icon').attr('tile-type', '');

    this.drawContents();
    this.setupClicking();
}

Ice.prototype.drawContents = function(){

    var $icon = $('#hidden .ice-icon').clone();

    if(!this.isLeft)
        $icon.find('path').attr('transform', 'scale(-1,1) translate(-200, 0)');

    $icon.find('.arrow-in').attr('fill', 'url(#grad_blue)');

    this.$tile.find('.icon').empty().append($icon);
}

Ice.prototype.setupClicking = function(){

    var $tile = this.$tile;
    var ice = this;

    $tile
    .attr('ready', 1)
    .click(clicked);

    function clicked(){

        if($tile.attr('ready') == 0)
            return;
        else if(PuzzleScene.puzzle.movesLeft <= 0)
            return;
        else if(PuzzleScene.solved)
            return;

        $tile.attr('ready', 0);

        Timer.AddAction({
            x: ice.x,
            y: ice.y,
            direction: ice.isLeft ? 'R' : 'L',
            color: 'blue'
        });

        PuzzleScene.ReduceMovesLeft();
        Timer.Run();
    }
}

Ice.prototype.makeReady = function(){

    this.$tile.attr('ready', 1);
}
