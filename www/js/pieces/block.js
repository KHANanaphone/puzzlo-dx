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
        .attr('color', this.color);

		if(this.inverted)
			$block.find('polygon').attr('fill', 'url(#grad_inv_' + this.color + ')');
		else
			$block.find('polygon').attr('fill', 'url(#grad_' + this.color + ')');

        $tile.append($block);
	};

	function applyLogic(tile, action){

		if(this.color == 'normal'){

			AudioManager.playSfx('breakblock');
			tile.clear();
		}
		else if(this.inverted){

			if(action.color != this.color){

				AudioManager.playSfx('breakblock');
				tile.clear();
			}
			else{
				AudioManager.playSfx('wall');
			}
		}
		else{

			if(action.color == this.color){

				AudioManager.playSfx('breakblock');
				tile.clear();
			}
			else{
				AudioManager.playSfx('wall');
			}
		}

		return true;
	}

}).call();
