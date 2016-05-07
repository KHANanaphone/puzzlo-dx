(function(){

	PUZZLO.pieces['S'] = {

		create: function(id){

			var canToggle = false, direction;

			if(id.indexOf('?') != -1){

				canToggle = true;
				direction = 'R';
			}
			else
				direction = id.substring(1).trim();

			return {

				canToggle: canToggle,
				toggle: toggle,
				type: 'shifter',
				direction: direction,
				doShift: doShift,
				draw: draw,
				applyLogic: applyLogic,
				animateShift: animateShift
			};
		}
	};

	function toggle(){

		var directions = ['U','UR','R','DR','D','DL','L','UL'];
		return directions[directions.indexOf(this.direction) % 8];
	};

	function doShift(from){

		if (from.contents.type == 'blank' || from.contents.type == 'wall' || from.contents.type == 'sand')
            return;

        var toX = from.x + this.xShift;
        var toY = from.y + this.yShift;

        try{

        	var to = PuzzleScene.board[toY][toX];

        	if(!to)
        		return false;

        	if(to.contents.type == 'blank' || this.doShift(to)){

        		this.animateShift(from, to);

				//if there's an action occurring at the spot where we're moving
				//something, have that thing apply its logic to the action.
				//
				//This is an attempt to solve the "shift an object into a shot to
				//bypass it" bug

				var actions = ShotManager.getShotsAt(to.x + 1, to.y + 1);

				for(var i = 0; i < actions.length; i++){

					debugger;
					if(shotTravellingIntoShifter(actions[i].direction, this.direction));
						to.contents.applyLogic(to.$tile, actions[i]);
				}

        		return true;
        	}
        	else
        		return false;

        }
        catch(e){
        	return false;
        }

		function shotTravellingIntoShifter(shotDirection, shifterDirection){

			if(shotDirection == 'U' && shifterDirection == '0 -1')
				return true;


			return false;
		};
    };

    function animateShift(from, to){

    	to.setContents(from.contents);
    	from.clear();

    	var left = -100 * this.xShift;
    	var top = -100 * this.yShift;

	    TweenMax.fromTo(to.$tile.find('.icon'), 0.25, {
			css: {top: top +'%', left: left+'%'}
		},	{
			css: {top: 0,left: 0}
		});
    }

	function draw($tile){

        var $shifter = $('#hidden .shifter-icon').clone();
        var rotateValue = getRotateValue(this.direction);
        $shifter.find('polygon').attr('transform', 'rotate(' + rotateValue + ',100,75)');
        $tile.append($shifter);

        function getRotateValue(dir){

	        if (direction == 'U')
	            return 0;
	        else if (direction == 'UL')
	            return 45;
	        else if (direction == 'L')
	            return 90;
	        else if (direction == 'DL')
	            return 135;
	        else if (direction == 'D')
	            return 180;
	        else if (direction == 'DR')
	            return 225;
	        else if (direction == 'R')
	            return 270;
	        else if (direction == 'UR')
	            return 315;

        	return 0;
        }
	};

	function applyLogic(tile, action){

	}

}).call();
