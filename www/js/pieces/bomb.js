PUZZLO.pieces['B'] = {

	create: function(id){

		var color = {
			'B' : 'blue',
			'Y' : 'yellow',
			'R' : 'red'
		}[id[1]];

		return {

			type: 'bomb',
			color: color,

			draw: function($tile){

	            var $bomb = $('#hidden .bomb-icon').clone();
	            $bomb.attr('color', this.color);
	            $tile.append($bomb);
			},

			applyLogic: function(tile, action){

				var dirs;

				if(this.color == 'red')
					dirs = ['UL','UR','DL','DR'];
				else if(this.color == 'blue')
					dirs = ['L', 'R'];
				else if(this.color == 'yellow')
					dirs = ['D', 'U'];

				for(var i = 0; i < dirs.length; i++)
			        Timer.AddAction({
			            x: tile.x + 1,
			            y: tile.y + 1,
			            direction: dirs[i],
			            color: this.color
			        });

				tile.clear();
				return true;
			}

		};
	}
};