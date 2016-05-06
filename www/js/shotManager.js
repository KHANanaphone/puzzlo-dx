var ShotManager = {
    shots: [],
    interval: 280,
    nextId: 1,
    stopped: true
};

ShotManager.add = function(shot){

    ShotManager.stopped = false;
    shot.id = ShotManager.nextId++;
    ShotManager.shots.push(shot);
};

ShotManager.remove = function(shot){

    var index = ShotManager.shots.indexOf(shot);

    if(index != -1){

        shot.destroy();
        ShotManager.shots.splice(index, 1);
    }

    if(ShotManager.shots.length == 0){

        ShotManager.stopped = true;
        PuzzleScene.SolutionCheck();
    }
};

ShotManager.getShotsAt = function(x, y){

    var shots = [];
    for(var i = 0; i < ShotManager.shots.length; i++){

        var shot = ShotManager.shots[i];

        if(shot.x == x && shot.y == y)
            actions.push(shot)
    };

    return actions;
};

ShotManager.stop = function(){

    for(var i = 0; i < ShotManager.shots; i++)
        ShotManager.remove(shots[i]);
};
