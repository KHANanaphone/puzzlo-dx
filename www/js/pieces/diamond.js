(function(){

	PIECES['D'] = {

		create: function(id){

			var color = {
				'N' : 'normal',
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			var health = parseInt(id[2]);

			return {

				type: 'diamond',
				color: color,
				health: health,
				inverted: false,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	PIECES['I'] = {

		create: function(id){

			var color = {
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			var health = parseInt(id[2]);

			return {

				type: 'diamond',
				color: color,
				health: health,
				inverted: true,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	function draw($tile){

        var $diamond = $('#hidden .diamond-icon').clone();

        $diamond
        .attr('color', this.color)
        .attr('inverted', this.inverted)
        .find('text')
        .html(this.health);

        $tile.append($diamond);
	};

	function applyLogic(tile, action){

		if(this.inverted){			
			if(action.color != this.color)
				return true;
		}
		else{	
			if(action.color == this.color)
				return true;			
		}

		this.health--;

		if(this.health == 0)
			tile.clear();

		return false;
	}

}).call();