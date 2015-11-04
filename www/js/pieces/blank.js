PIECES[' '] = {
	create : function(id){

		return {
			type: 'blank',
			draw: function($tile){},
			applyLogic: function(tile){

				return false;
			}
		};
		
	}
}