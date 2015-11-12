(function(){

	PUZZLO.pieces['['] = {

		create: function(id){

			var color = {
				'N' : 'normal',
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			return {

				type: 'block',
				color: color,
				inverted: false,
				draw: draw,
				applyLogic: applyLogic

			};
		}
	};

	PUZZLO.pieces['{'] = {

		create: function(id){

			var color = {
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red'
			}[id[1]];

			return {

				type: 'block',
				color: color,
				inverted: true,
				draw: draw,
				applyLogic: applyLogic

			};
		}
	};


	function draw($tile){

        var $block = $('#hidden .block-icon').clone();

        $block
        .attr('color', this.color)
        .attr('inverted', this.inverted);

        $tile.append($block);
	};

	function applyLogic(tile, action){

		if(this.inverted){

			if(action.color == this.color)
				tile.clear();
		}
		else{

			if(action.color != this.color)
				tile.clear();
		}

		return true;
	}

}).call();
