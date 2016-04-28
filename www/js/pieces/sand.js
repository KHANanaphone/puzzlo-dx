PUZZLO.pieces['.'] = {

	create: function(id){

		return {

			type: 'sand',

			draw: function($tile){

	            var $sand = $('#hidden .sand-icon').clone();
	            $tile.append($sand);
			},

			applyLogic: function(tile, action){

				return false;
			}
		};
	}
};
