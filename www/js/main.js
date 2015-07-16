var Main = {};

$(document).ready(function(){
    
    document.addEventListener("deviceready", deviceReady, false);   
    FastClick.attach(document.body);
    $(window).resize(setSize); 
    setSize();
    $('#size-setter').fitText(3);

    MenuScene.init();
//    TowerScene.init();    
    PuzzleScene.init();
    
    Main.showScene('menu');
    
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