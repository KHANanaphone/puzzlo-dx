(function(){

	PIECES['S'] = {

		create: function(id){

			var xShift = 0, yShift = 0;

			if(id.indexOf('U') != -1)
				yShift = -1;
			else if(id.indexOf('D') != -1)
				yShift = 1;

			if(id.indexOf('L') != -1)
				xShift = -1;
			else if(id.indexOf('R') != -1)
				xShift = 1; 

			return {

				type: 'shifter',
				xShift: xShift,
				yShift: yShift,
				doShift: doShift,
				draw: draw,
				applyLogic: applyLogic,
				animateShift: animateShift
			};
		}
	};

	function doShift(from){

		if (from.contents.type == 'blank' || from.contents.type == 'wall')
            return;

        var toX = from.x + this.xShift;
        var toY = from.y + this.yShift;

        try{

        	var to = PuzzleScene.board[toY][toX];

        	if(!to)
        		return false;

        	if(to.contents.type == 'blank' || this.doShift(to)){

        		this.animateShift(from, to);
        		//teleporter check
        		return true;
        	}
        	else
        		return false;

        }
        catch(e){
        	return false;
        }
    };

    function animateShift(from, to){

    	to.setContents(from.contents);
    	from.clear();

    	var x = 200 * this.xShift;
    	var y = 200 * this.yShift;

	    TweenMax.fromTo(to.$tile.find('.icon'), 0.2, {
	    		y: y + '%',
	    		x: x + '%'
	        }, {
	    		y: '0%',
	    		x: '0%',
	        onComplete: function() {

	        }
	    });
    }

	function draw($tile){

        var $shifter = $('#hidden .shifter-icon').clone();
        var rotateValue = getRotateValue(this.xShift, this.yShift);
        $shifter.find('polygon').attr('transform', 'rotate(' + rotateValue + ',100,75)');
        $tile.append($shifter);

        function getRotateValue(x, y){

        	if(x == 0 && y == -1)
        		return 0;
        	else if(x == 1 && y == -1)
        		return 45;
        	else if(x == 1 && y == 0)
        		return 90;
        	else if(x == 1 && y == 1)
        		return 135;
        	else if(x == 0 && y == 1)
        		return 180;
        	else if(x == -1 && y == 1)
        		return 225;
        	else if(x == -1 && y == 0)
        		return 270;
        	else if(x == -1 && y == -1)
        		return 315;

        	return 0;
        }
	};

	function applyLogic(tile, action){

	}

}).call();