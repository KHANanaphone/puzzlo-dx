

$(document).ready(function(){
    
    document.addEventListener("deviceready", deviceReady, false);
    FastClick.attach(document.body);
    $(window).resize(setWidth);
    $('#puzzle-scene').hide();
    PuzzleScene.Init();
    MenuScene.Init();
    
    setWidth();
    $('#size-setter').fitText(3); 
    
    function setWidth(){
        
        var ww = $(window).width();
        var $ws = $('#size-setter');
        
        if(ww > $ws.height() * 0.7)
            $ws.width($ws.height() * 0.7);     
        else
            $ws.width(ww);
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

var DEBUG_CTRL = false;

$(document).keydown(function(event){
    if(event.which=="17")
        DEBUG_CTRL = true;
});

$(document).keyup(function(event){
    if(event.which=="17")
        DEBUG_CTRL = false;
});