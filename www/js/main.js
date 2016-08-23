var Main = {
    storageId: 'pdx7',
    currentPuzzle: {}
};

$(document).ready(function(){

    document.addEventListener("deviceready", deviceReady, false);
    FastClick.attach(document.body);
    $(window).resize(setSize);
    setSize();
    $('#size-setter').fitText(3);

    MenuScene.init();
    TowerScene.init();
    PuzzleScene.init();

    Main.showScene('menu');
    MenuScene.beginAnimation();

    function setSize(){

        var $ws = $('#size-setter');
        var width = $(window).width();
        var height = $(window).height();

        if(width > height * 0.7){
            $ws.css('top', '0');
            $ws.width(height * 0.7);
            $ws.height(height - 1);
        }
        else{

            var topMargin = (height - (width / 0.7)) / 2;

            $ws.css('top', topMargin + 'px');
            $ws.width(width);
            $ws.height(width / 0.7 - 1);
        }

        if(Main.currentScene == 'puzzle')
            PuzzleScene.resizeTiles();
    };

    function deviceReady(){

        document.addEventListener("backbutton", function(){

            if(Main.currentScene == 'puzzle')
                Main.showScene('tower');
            else if(Main.currentScene == 'tower')
                Main.showScene('menu');
            else
                navigator.app.exitApp();

        }, false);
    };
});

Main.loadProgressInfo = function(){

    var storageString = localStorage[Main.storageId];

    if(!storageString)
        Main.progressInfo = {};
    else
        Main.progressInfo = JSON.parse(storageString);

    var totalSolved = 0;
    for(var catName in PUZZLO.tower_categories){

        if(!Main.progressInfo[catName])
            Main.progressInfo[catName] = {};

        var cat = Main.progressInfo[catName];
        cat.solved = 0;
        cat.puzzles = 0;

        for(var t = 0; t < PUZZLO.tower_categories[catName].towers.length; t++){

            var tower = PUZZLO.tower_categories[catName].towers[t];

            if(!cat[t])
                cat[t] = 0;

            cat.solved += cat[t];
            cat.puzzles += tower.puzzles.length;
        }

        totalSolved += cat.solved;
    };

    Main.progressInfo.total = totalSolved;
    Main.saveProgressInfo();
};

Main.saveProgressInfo = function(){

    var storageString = JSON.stringify(Main.progressInfo);
    localStorage[Main.storageId] = storageString;
};

Main.showScene = function(scene){

    var scenes = ['menu', 'tower', 'puzzle'];

    if(scenes.indexOf(scene) == -1)
        return;

    for(var i = 0; i < scenes.length; i++)
        if(scenes[i] != scene)
            $('#' + scenes[i] + '-scene').fadeOut();

    $('#' + scene + '-scene').fadeIn();
    Main.currentScene = scene;

    if(scene == 'menu')
        $('body').attr('tower-type', 'fun');
};

Main.setCurrentSolved = function(){

    var cat = Main.currentPuzzle.category;
    var tower = Main.currentPuzzle.tower;
    var puzzle = Main.currentPuzzle.puzzle;

    if(Main.progressInfo[cat][tower] != puzzle)
        return null;

    var notifications = [];
    Main.progressInfo[cat][tower] = puzzle + 1;
    Main.progressInfo[cat].solved++;
    Main.progressInfo.total++;
    Main.saveProgressInfo();
    MenuScene.updateChecks();

    for(var catName in PUZZLO.tower_categories){

        var cat2 = PUZZLO.tower_categories[catName];
        if(cat2.required == Main.progressInfo.total)
            notifications.push(['category_unlocked', cat2.name]);
    }

    for(var i = 0; i < PUZZLO.tower_categories[cat].towers.length; i++){

        var tow2 = PUZZLO.tower_categories[cat].towers[i];
        if(tow2.required == Main.progressInfo[cat].solved)
            notifications.push(['tower_unlocked', tow2.name]);
    }

    var t = PUZZLO.tower_categories[cat].towers[tower];
    if(Main.progressInfo[cat][tower] == t.puzzles.length){

        notifications.push(['tower_complete', t.name]);
    }

    if(Main.progressInfo[cat].solved == Main.progressInfo[cat].puzzles){

        notifications.push(['category_complete', cat]);
    }

    return notifications;
};

var DEBUG_CTRL = false;

$(document).keydown(function(event){
    if(event.which=="17")
        DEBUG_CTRL = true;
});

$(document).keyup(function(event){
    if(event.which=="17")
        DEBUG_CTRL = false;
});
