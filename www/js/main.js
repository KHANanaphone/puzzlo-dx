var Main = {
    storageId: 'pdx6'
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
    };

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
        $('#main-content').attr('tower-type', 'fun');
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
