var AudioManager = {

    sfx: {},

    loadAll: function(){

        var files =
        ["Blue","Bomb","BreakBlock","BreakDiamond","DamageDiamond","Default",
        "Fail","MenuOption","MirrorBreak","MirrorReflect","PlaceItem",
        "Retry","Shift","Success","Teleport","Toggle","Unlock","Wall","Yellow"];

        var volumes = {
            'BreakDiamond': 0.5,
            'DamageDiamond': 0.5,
            'BreakBlock': 0.6
        };

        for(var i = 0; i < files.length; i++){

            var file = files[i];
            var howl = new Howl({
                src: ['audio/sfx/' + file + '.mp3']
            });

            if(volumes[file])
                howl.volume(volumes[file]);

            this.sfx[file.toLowerCase()] = howl;
        }
    },

    play: function(name){

        var name = name.toLowerCase();

        if(this.sfx[name])
            this.sfx[name].play();
    }
};

AudioManager.loadAll();
