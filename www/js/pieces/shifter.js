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
		this.direction = directions[(directions.indexOf(this.direction) + 1) % 8];
	};

	function doShift(from){

		if (from.contents.type == 'blank' || from.contents.type == 'wall' || from.contents.type == 'sand')
            return;
		if(ShotManager.getShotsAt(from.x + 1, from.y + 1).length > 0)
			return;

		var shift = PUZZLO.directionToXY(this.direction);
        var toX = from.x + shift[0];
        var toY = from.y + shift[1];

        try{

        	var to = PuzzleScene.board[toY][toX];

        	if(!to)
        		return false;

        	if(to.contents.type == 'blank' || this.doShift(to)){

        		this.animateShift(from, to);

				var actions = ShotManager.getShotsAt(to.x + 1, to.y + 1);

				for(var i = 0; i < actions.length; i++){

					if(shotTravellingIntoShifter(actions[i].direction, this.direction))
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

		function shotTravellingIntoShifter(d1, d2){

			if(d1 == 'U' && d2 == 'D')
				return true;
			else if(d1 == 'UR' && d2 == 'DL')
				return true;
			else if(d1 == 'R' && d2 == 'L')
				return true;
			else if(d1 == 'DR' && d2 == 'UL')
				return true;
			else if(d1 == 'D' && d2 == 'U')
				return true;
			else if(d1 == 'DL' && d2 == 'UR')
				return true;
			else if(d1 == 'L' && d2 == 'R')
				return true;
			else if(d1 == 'UL' && d2 == 'DR')
				return true;

			return false;
		};
    };

    function animateShift(from, to){

    	to.setContents(from.contents);
    	from.clear();

		var shift = PUZZLO.directionToXY(this.direction);
    	var left = -100 * shift[0];
    	var top = -100 * shift[1];

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

        function getRotateValue(direction){

	        if (direction == 'U')
	            return 0;
	        else if (direction == 'UR')
	            return 45;
	        else if (direction == 'R')
	            return 90;
	        else if (direction == 'DR')
	            return 135;
	        else if (direction == 'D')
	            return 180;
	        else if (direction == 'DL')
	            return 225;
	        else if (direction == 'L')
	            return 270;
	        else if (direction == 'UL')
	            return 315;

        	return 0;
        }
	};

	function applyLogic(tile, action){

	}

}).call();
