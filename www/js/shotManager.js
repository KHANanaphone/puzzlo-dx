var ShotManager = {
    shots: [],
    interval: 240,
    nextId: 1,
    stopped: true
};

ShotManager.add = function(shot){

    ShotManager.stopped = false;
    shot.id = ShotManager.nextId++;
    ShotManager.shots.push(shot);
};

ShotManager.remove = function(shot, skipSolutionCheck){

    var index = ShotManager.shots.indexOf(shot);

    if(index != -1){

        shot.destroy();
        ShotManager.shots.splice(index, 1);
    }

    if(ShotManager.shots.length == 0){

        ShotManager.stopped = true;

        if(!skipSolutionCheck)
            PuzzleScene.SolutionCheck();
    }
};

ShotManager.getShotsAt = function(x, y){

    var shots = [];
    for(var i = 0; i < ShotManager.shots.length; i++){

        var shot = ShotManager.shots[i];

        if(shot.x == x && shot.y == y)
            shots.push(shot)
    };

    return shots;
};

ShotManager.stop = function(){

    for(var i = 0; i < ShotManager.shots.length; i++)
        ShotManager.remove(ShotManager.shots[i], true);
};
