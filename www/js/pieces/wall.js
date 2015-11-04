PIECES['W'] = {

	create: function(id){

		return {

			type: 'wall',
			dontFlashBg: true,

			draw: function($tile){

	            var $wall = $('#hidden .wall-icon').clone();
	            $tile.append($wall);
			},

			applyLogic: function(tile, action){

				return true;
			}

		};
	}
};