var AudioManager = {

    sfx: {},
    enabled: {
        sfx: true,
        music: true
    },

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

    playSfx: function(name){

        if(!this.enabled.sfx)
            return;

        var name = name.toLowerCase();

        if(this.sfx[name])
            this.sfx[name].play();
    },

    setEnabled: function(type, enabled){

        if(type === 'sfx' && enabled === false){

            for(var sfxName in this.sfx)
                this.sfx[sfxName].stop();
        }
        else if(type === 'music'){

            // something
        }

        this.enabled[type] = enabled;
    }
};

AudioManager.loadAll();
