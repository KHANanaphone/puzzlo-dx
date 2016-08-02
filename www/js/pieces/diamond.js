(function(){

	PUZZLO.pieces['D'] = {

		create: function(id){

			var c = id[1];
			var canToggle = c == '?' ? true : false;


			var color = {
				'N' : 'normal',
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red',
				'?' : 'red' // default toggle state
			}[id[1]];

			var health = parseInt(id[2]);

			return {
				canToggle: canToggle,
				toggle: toggle,
				type: 'diamond',
				color: color,
				health: health,
				inverted: false,
				draw: draw,
				applyLogic: applyLogic
			};
		}
	};

	PUZZLO.pieces['I'] = {

		create: function(id){

			var c = id[1];
			var canToggle = c == '?' ? true : false;

			var color = {
				'B' : 'blue',
				'Y' : 'yellow',
				'R' : 'red',
				'?' : 'red' // default toggle state
			}[id[1]];

			var health = parseInt(id[2]);

			return {
				canToggle: canToggle,
				toggle: toggle,
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

		this.$tile = $tile;
        var $diamond = $('#hidden .diamond-icon').clone();

        $diamond
        .attr('color', this.color)
        .find('text')
        .html(this.health);

		if(this.inverted)
			$diamond.find('polygon').attr('fill', 'url(#grad_inv_' + this.color + ')');
		else
			$diamond.find('polygon').attr('fill', 'url(#grad_' + this.color + ')');

        $tile.append($diamond);
	};

	function applyLogic(tile, action){

		if(this.color != 'normal'){

			if(this.inverted){
				if(action.color == this.color){

					AudioManager.play('Wall');
					return true;
				}
			}
			else{
				if(action.color != this.color){

					AudioManager.play('Wall');					
					return true;
				}
			}
		}

		this.health--;
		AudioManager.play(this.health ? 'DamageDiamond' : 'BreakDiamond');

		if(this.health == 0)
			tile.clear();

		return false;
	};

	function toggle(){

		if(!this.canToggle)
			return;

		if(this.color == 'blue')
			this.color = 'red';
		else if(this.color == 'red')
			this.color = 'yellow';
		else if(this.color == 'yellow')
			this.color = 'blue';
	};

}).call();
