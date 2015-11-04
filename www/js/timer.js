var Timer = {
    actions: [],
    running: false,
    interval: 210
};

Timer.Run = function() {

    if(Timer.running)
        return;
    
    Timer.running = true;
    Timer.Step();
};

Timer.Step = function() {

    var actions = Timer.actions.slice();
    var finished = true;

    for (var i = 0; i < actions.length; i++) {

        var action = actions[i];

        if (action.finished == true)
            continue;

        finished = false;
        step(action);
        applyLogic(action);
    }

    if (!finished)
        setTimeout(Timer.Step, Timer.interval);
    else {
        Timer.Stop();
        PuzzleScene.SolutionCheck();
    }

    function step(action){

        //move
        if (action.direction == 'U')
            action.y--;
        else if (action.direction == 'D')
            action.y++;
        else if (action.direction == 'L')
            action.x--;
        else if (action.direction == 'R')
            action.x++;//move
        else if (action.direction == 'UL'){
            action.y--; action.x--;           
        } 
        else if (action.direction == 'UR'){
            action.y--; action.x++;           
        } 
        else if (action.direction == 'DL'){
            action.y++; action.x--;           
        } 
        else if (action.direction == 'DR'){
            action.y++; action.x++; 
        }
    }

    function applyLogic(action){

        var $tile = PuzzleScene.$tiles[action.y][action.x];

        //check boundary, set 'finished' flag if needed
        if (!$tile || $tile.attr('tile-type') != 'board') {

            action.finished = true;
            return;
        }

        //else do action to tile
        var tile = PuzzleScene.board[$tile.attr('board-y')][$tile.attr('board-x')];
        action.finished = tile.applyLogic(action);
    }
};

Timer.AddAction = function(action) {

    Timer.actions.push(action);
};

Timer.Stop = function() {

    Timer.running = false;
    Timer.actions = [];
};