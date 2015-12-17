PUZZLO.pieces['T'] = {

	create: function(id){

		return {

			$tile: null,
			type: 'teleporter',
			teleporterIndex: id[1],
            paired: null,

			draw: function($tile){

				this.$tile = $tile;

	            var $bomb = $('#hidden .teleporter-icon').clone();

	            $bomb.attr('teleporter-index', this.teleporterIndex);
                $bomb.attr('active', this.paired ? true : false);
				//$bomb.find('path').attr('fill', 'url(#grad_' + this.color + ')');

	            $tile.append($bomb);
			},

			applyLogic: function(tile, action){

				if(!this.paired)
                	return true;

				action.x = this.paired.$tile.parents('.puzzle-tile').attr('tile-x');
				action.y = this.paired.$tile.parents('.puzzle-tile').attr('tile-y');

				return false;
			},

            pairWith: function(piece, firstPass){

                this.paired = piece;

				if(firstPass)
					piece.pairWith(this, false);

				this.draw(this.$tile);
            }
		};
	}
};
