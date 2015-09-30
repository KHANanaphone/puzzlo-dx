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

    $('#text-area #puzzle-id').text(puzzle.textID);
    $('#text-area #puzzle-name').text(puzzle.name);
    $('#text-area #puzzle-description').text(puzzle.description ? puzzle.description : '');

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
    var width = $tiles.width() / size;
    var height = $tiles.height() / size;
    
    var offset = PuzzleScene.puzzle.width - PuzzleScene.puzzle.height;
    
    if(offset > 0)
        $('#tiles').css({top: height / 2, left: 0});
    else if(offset < 0)
        $('#tiles').css({left: width / 2, height: 0});
    
    $tiles.find('.puzzle-tile').each(function(){
        
        var x = $(this).attr('x');
        var y = $(this).attr('y');
        
        $(this).css({
            top: (y * height) + 'px', 
            left: (x * width) + 'px',
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
        
        var $tiles = $('#tiles');
        
        PuzzleScene.$tiles = [];
        
        for(var i = 0; i < PuzzleScene.puzzleSize; i++){
            
            PuzzleScene.$tiles[i] = [];
            
            for(var j = 0; j < PuzzleScene.puzzleSize; j++){
                
                var $tile = $('#hidden .puzzle-tile').clone();                
                $tile.attr('x', j).attr('y', i);                
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
        
        TeleporterLogic.CheckTeleporters();
    };

    function setupItems() {

        if(puzzle.items)
            for (var i = 0; i < puzzle.items.length; i++) {

                var item = puzzle.items[i];
                var tile = PuzzleScene.itemTiles[i];

                tile.setContents(item);
            }

        for (; i < 8; i++) {

            var tile = PuzzleScene.itemTiles[i];
            tile.setContents(1000);
        }

        PuzzleScene.NextItem();
    };
}

PuzzleScene.NextItem = function() {

    var nextItem = null;

    for (var i = 0; i < PuzzleScene.itemTiles.length; i++) {

        var tile = PuzzleScene.itemTiles[i];

        if (nextItem)
            tile.$tile.removeClass('next-item');
        else if (tile.type != 'blank') {
            nextItem = tile;
            tile.$tile.addClass('next-item');
        } else {
            tile.$tile.removeClass('next-item');
        }
    }

    if (nextItem) {

        PuzzleScene.nextItemTile = nextItem;
        $('.puzzle-tile[tile-type="board"]').addClass('clickable');
    } else {

        PuzzleScene.nextItemTile = null;
        $('.puzzle-tile').removeClass('clickable');
    }
}


PuzzleScene.RetryClicked = function() {
    
    if(PuzzleScene.retrying)
        return;
    
    PuzzleScene.retrying = true;
    
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

            if (board[i][j].type == 'diamond' && board[i][j].value > 0)
                solved = false;
        }
    }

    for (var i = 0; i < items.length; i++) {

        if (items[i].type == 'diamond' && items[i].value > 0)
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