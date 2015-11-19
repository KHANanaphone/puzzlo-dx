var PuzzleScene = {
    $tiles: null,
    itemTiles: null,
    scene: null,
    board: null,
    puzzle: null,
    shots: {
        left: null,
        right: null,
        top: null,
        botttom: null
    }
};

PuzzleScene.init = function(){

    PuzzleScene.itemTiles = [];
//
//    for (var x = 0; x < 8; x++) {
//
//        var $clone = $('#hidden .item-tile').clone();
////        $('#item-area').append($clone);
//        PuzzleScene.itemTiles[x] = new Tile($clone);
//    }

 };

PuzzleScene.showPuzzle = function(puzzle) {

    PuzzleScene.refreshAll();
    PuzzleScene.solved = false;
    $('#bottom-buttons .btn').prop('disabled', false);
    $('#success-popup').hide();
    $('#failure-popup').hide();
    $('#tutorial-popup').hide();

    $('#puzzle-scene .puzzle-id').text(puzzle.id);
    $('#header-area .puzzle-name').text(puzzle.name);

    PuzzleScene.setupBoard(puzzle);
    PuzzleScene.setupPuzzle(puzzle);

    if(puzzle.description)
        showTutorialPopup(puzzle.description);

    Main.showScene('puzzle');
    PuzzleScene.resizeTiles();

    function showTutorialPopup(desc){

        $('#tutorial-popup').fadeIn();
        $('#tutorial-popup .popup-text').text(desc);
    }
};

PuzzleScene.refreshAll = function(){

    $('.clickit').removeClass('clickit');

    $('#main-content').css('background-color', '');
    $('#bottom-area a').fadeIn();
    $('#success-popup').hide();
    $('#failure-popup').hide();
};

PuzzleScene.ClosePopup = function(){

    $('#tutorial-popup').fadeOut();
};

PuzzleScene.resizeTiles = function(){

    var $tiles = $('#tiles');

    var size = PuzzleScene.puzzleSize;
    var width = 2000 / size;
    var height = 2000 / size;

    var offset = PuzzleScene.puzzle.width - PuzzleScene.puzzle.height;
    var vb = '0,0,2000,2000';

    if(offset > 0)
        vb = '0,' + -0.5 * offset * height + ',2000,2000';
    else if(offset < 0)
        vb = 0.5 * offset * width + ',0,2000,2000';

    $('#tiles')[0].setAttribute('viewBox', vb);

    $tiles.find('.puzzle-tile').each(function(){

        var x = $(this).attr('tile-x');
        var y = $(this).attr('tile-y');

        $(this).attr({
            y: (y * height) + 'px',
            x: (x * width) + 'px',
            width: width + 'px',
            height: height + 'px'
        });
    });
};

PuzzleScene.setupBoard = function(puzzle) {

    PuzzleScene.puzzle = puzzle;

    var size = puzzle.width > puzzle.height ? puzzle.width : puzzle.height;
    size += 2;
    PuzzleScene.puzzleSize = size;

    setupTiles();
    setLightnings();
    setIces();
    setBoard();
    setMovesMeter();

    function setupTiles(){

        var $tiles = $('#tiles g').empty();

        PuzzleScene.$tiles = [];

        for(var i = 0; i < PuzzleScene.puzzleSize; i++){

            PuzzleScene.$tiles[i] = [];

            for(var j = 0; j < PuzzleScene.puzzleSize; j++){

                var $tile = $('#hidden .puzzle-tile').clone();
                $tile.attr('tile-x', j).attr('tile-y', i);
                PuzzleScene.$tiles[i][j] = $tile;
                $tiles.append($tile);
            }
        }
    };

    function setLightnings() {

        PuzzleScene.shots.top = [];
        PuzzleScene.shots.bottom = [];

        for (var i = 0; i < puzzle.width; i++) {

            var tile = new Lightning(PuzzleScene.$tiles[0][1 + i], true);
            PuzzleScene.shots.top.push(tile);

            var tile2 = new Lightning(PuzzleScene.$tiles[puzzle.height + 1][1 + i], false);
            PuzzleScene.shots.bottom.push(tile2);
        }
    };

    function setIces() {

        PuzzleScene.shots.left = [];
        PuzzleScene.shots.right = [];

        for (var i = 0; i < puzzle.height; i++) {

            var tile = new Ice(PuzzleScene.$tiles[1 + i][0], true);
            PuzzleScene.shots.left.push(tile);

            var tile2 = new Ice(PuzzleScene.$tiles[1 + i][puzzle.width + 1], false);
            PuzzleScene.shots.right.push(tile2);
        }
    };

    function setBoard() {

        PuzzleScene.board = [];

        for (var i = 0; i < puzzle.height; i++) {

            PuzzleScene.board[i] = [];

            for (var j = 0; j < puzzle.width; j++) {

                var tile = new Tile(PuzzleScene.$tiles[1 + i][1 + j], {
                    isBoardTile: true,
                    x: j,
                    y: i
                });

                PuzzleScene.board[i].push(tile);
            }
        }
    };

    function setMovesMeter(){

        var max = PuzzleScene.puzzle.maxMoves;
        var $span = $('#shots-icons').empty();

        for(var i = 0; i < max; i++){
            $span.append($('#hidden .dot').clone());
        }
    };
};

PuzzleScene.setupPuzzle = function() {

    var puzzle = PuzzleScene.puzzle;
    puzzle.setup();
    PuzzleScene.UpdateMovesLeft();

    setupShots();
    setupBoard();
    setupItems();

    function setupShots() {

        for (var i = 0; i < puzzle.width; i++) {

            PuzzleScene.shots.top[i].makeReady();
            PuzzleScene.shots.bottom[i].makeReady();
        }

        for (var i = 0; i < PuzzleScene.puzzle.height; i++) {

            PuzzleScene.shots.left[i].makeReady();
            PuzzleScene.shots.right[i].makeReady();
        }
    };


    function setupBoard() {

        for (var j = 0; j < puzzle.height; j++) {
            for (var i = 0; i < puzzle.width; i++) {

                PuzzleScene.board[j][i].setContents(puzzle.contents[j][i]);
            }
        }

        // TeleporterLogic.CheckTeleporters();
    };

    function setupItems() {

        var $items = $('#item-area').empty();
        PuzzleScene.itemTiles = [];

        if(puzzle.items){

            for (var i = 0; i < puzzle.items.length && i < 9; i++) {

                var $tile = $('#hidden .puzzle-tile').clone();
                var tile = new Tile($tile, {
                    isBoardTile: false,
                    x: i
                });

                tile.setContents(puzzle.items[i]);
                $items.append($tile);
                PuzzleScene.itemTiles.push(tile);
            }

            $('#tile-area').addClass('clickable');
        }
    };
}

PuzzleScene.nextItem = function() {

    if(PuzzleScene.itemTiles.length == 0)
        return;
    else
        PuzzleScene.itemTiles.shift().$tile.remove();

    if (PuzzleScene.itemTiles.length > 0)
        $('#tile-area').addClass('clickable');
    else
        $('#tile-area').removeClass('clickable');
}

PuzzleScene.retry = function() {

    if(PuzzleScene.retrying)
        return;

    PuzzleScene.retrying = true;
    PuzzleScene.solved = false;

    var $button = $('#retry-button');
    $button.css('color', 'white');
    $('#tiles').fadeOut();
    PuzzleScene.refreshAll();

    setTimeout(function(){

        PuzzleScene.retrying = false;
        Timer.Stop();
        $button.css('color', '');
        PuzzleScene.setupPuzzle(PuzzleScene.puzzle);
        $('#tiles').fadeIn();

    }, 400);

};

PuzzleScene.back = function(){

    if(!PuzzleScene.solved)
        Main.showScene('tower');
};

PuzzleScene.ReduceMovesLeft = function() {

    PuzzleScene.puzzle.movesLeft--;
    PuzzleScene.UpdateMovesLeft();
}

PuzzleScene.UpdateMovesLeft = function() {

//    var left = PuzzleScene.puzzle.movesLeft;
//    var $span = $('#shots-icons .dot');
//
//    $span.each(function(index){
//
//        if(left > index)
//            $(this).attr('class', 'dot filled');
//        else
//            $(this).attr('class', 'dot hollow');
//    });
//
    $('#shots-left-area .shots-left-value').text(PuzzleScene.puzzle.movesLeft);
}

PuzzleScene.SolutionCheck = function() {

    var solved = true;
    var board = PuzzleScene.board;
    var items = PuzzleScene.itemTiles;

    for (var i = 0; i < board.length; i++) {

        for (var j = 0; j < board[i].length; j++) {

            var piece = board[i][j].contents;
            if (piece.type == 'diamond' && piece.health > 0)
                solved = false;
        }
    }

    for (var i = 0; i < items.length; i++) {

        var piece = items[i].contents;
        if (piece.type == 'diamond' && piece.health > 0)
            solved = false;
    }

    if(solved){
        PuzzleScene.solved = true;
        $('#button-area a').fadeOut();
        $('#success-popup').fadeIn();
        $('#main-content').css('background-color', 'rgb(12, 100, 16);');
    }
    else if(PuzzleScene.puzzle.movesLeft == 0){
        $('#main-content').css('background-color', '#AA1420');
        $('#failure-popup').fadeIn();
    }
}

PuzzleScene.solvedContinue = function(){

    Main.showScene('tower');
    TowerScene.setSolved();
};
