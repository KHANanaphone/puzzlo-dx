var Main = {};

$(document).ready(function(){
    
    document.addEventListener("deviceready", deviceReady, false);   
    FastClick.attach(document.body);
    $(window).resize(setSize); 
    setSize();
    $('#size-setter').fitText(3);
    
    PuzzleScene.init();
    PuzzleScene.showPuzzle(new PuzzleDefinition(0, 0));
    
    function setSize(){
        
        var ww = $(window).width();
        var $ws = $('#size-setter');
        
        if(ww > $ws.height() * 0.7)
            $ws.width($ws.height() * 0.7);     
        else
            $ws.width(ww);
        
        if(Main.currentScene == 'puzzle')
            PuzzleScene.resizeTiles();
    }; 

    function deviceReady(){        

        document.addEventListener("backbutton", function(){
            
            if(!MenuScene.shown)
                MenuScene.Show();
            else
                navigator.app.exitApp();
            
        }, false);
    };
});   

Main.showScene = function(scene){
    
    var scenes = ['menu', 'tower', 'puzzle'];
    
    if(scenes.indexOf(scene) == -1)
        return;
    
    for(var i = 0; i < scenes.length; i++)
        if(scenes[i] != scene)
            $('#' + scenes[i] + '-scene').fadeOut();
    
    $('#' + scene + '-scene').fadeIn();
    Main.currentScene = scene;
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