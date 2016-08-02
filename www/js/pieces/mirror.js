(function(){

	PUZZLO.pieces['M'] = {

		create: function(id){

			var canToggle = false;
			var facing = id.substring(1);
			if(facing == '??'){
				facing = '//';
				canToggle = true;
			}

			return {

				canToggle: canToggle,
				toggle: toggle,
				type: 'mirror',
				facing: facing,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	function toggle(){

		if(!this.canToggle)
			return;

		if(this.facing == '//')
			this.facing = '--';
		else if(this.facing == '--')
			this.facing = '\\';
		else if(this.facing == '\\')
			this.facing = '||';
		else if(this.facing == '||')
			this.facing = '//';
	};

	function draw($tile){

        var $block = $('#hidden .mirror-icon').clone();
        var rotateValue = getRotateValue(this.facing);
        $block.find('polygon').attr('transform', 'rotate(' + rotateValue + ',100,100)');
        $tile.append($block);

        function getRotateValue(facing){

            if(facing == '--')
                return 0;
            else if(facing == '\\')
                return 45;
            else if(facing == '||')
                return 90;
            else if(facing == '//')
                return 135;
        };
	};

	function applyLogic(tile, action){

        var newDir;
        if(this.facing == '--'){

            if(action.direction == 'L')
                newDir = null
            else if(action.direction == 'R')
                newDir = null;
            else if(action.direction == 'U')
                newDir = 'D';
            else if(action.direction == 'D')
                newDir = 'U';
            else if(action.direction == 'UL')
                newDir = 'DL';
            else if(action.direction == 'UR')
                newDir = 'DR';
            else if(action.direction == 'DL')
                newDir = 'UL';
            else if(action.direction == 'DR')
                newDir = 'UR';
        }
        else if(this.facing == '//'){

            if(action.direction == 'L')
                newDir = 'D'
            else if(action.direction == 'R')
                newDir = 'U';
            else if(action.direction == 'U')
                newDir = 'R';
            else if(action.direction == 'D')
                newDir = 'L';
            else if(action.direction == 'UL')
                newDir = 'DR';
            else if(action.direction == 'UR')
                newDir = null;
            else if(action.direction == 'DL')
                newDir = null;
            else if(action.direction == 'DR')
                newDir = 'UL';
        }
        else if(this.facing == '||'){

            if(action.direction == 'L')
                newDir = 'R'
            else if(action.direction == 'R')
                newDir = 'L';
            else if(action.direction == 'U')
                newDir = null;
            else if(action.direction == 'D')
                newDir = null;
            else if(action.direction == 'UL')
                newDir = 'UR';
            else if(action.direction == 'UR')
                newDir = 'UL';
            else if(action.direction == 'DL')
                newDir = 'DR';
            else if(action.direction == 'DR')
                newDir = 'DL';
        }
        else if(this.facing == '\\'){

            if(action.direction == 'L')
                newDir = 'U'
            else if(action.direction == 'R')
                newDir = 'D';
            else if(action.direction == 'U')
                newDir = 'L';
            else if(action.direction == 'D')
                newDir = 'R';
            else if(action.direction == 'UL')
                newDir = null;
            else if(action.direction == 'UR')
                newDir = 'DL';
            else if(action.direction == 'DL')
                newDir = 'UR';
            else if(action.direction == 'DR')
                newDir = null;
        }

        if(newDir){

            action.direction = newDir;
			AudioManager.play('mirrorreflect');
            return false;
        }
        else {

            tile.clear();
			AudioManager.play('mirrorbreak');
            return true;
        }
	}

}).call();
