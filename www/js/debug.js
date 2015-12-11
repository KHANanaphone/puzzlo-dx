$(document).keydown(function(event){
    if(event.which=="17")
        PUZZLO.debug.ctrlDown = true;
});

$(document).keyup(function(){
    PUZZLO.debug.ctrlDown = false;
});

TowerScene.unlockAll = function(){

    $('#tower-scene .tower-section .tower .tower-row').attr('status', 'unlocked');
    Main.progressInfo[TowerScene.category.id].solved = 999;
    TowerScene.updateShift();
};
