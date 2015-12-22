PUZZLO.pieces['T'] = {

	create: function(id){

		return {

			$tile: null,
			type: 'teleporter',
			teleporterIndex: id[1],
            paired: null,

			draw: function($tile){

				this.$tile = $tile;

	            var $tele = $('#hidden .teleporter-icon').clone();
                $tele.attr('active', this.paired ? true : false);

				if(!this.paired){

					$tele.find('.outer').attr('fill', 'url(#grad_normal)');
					$tele.find('.inner').attr('fill', 'transparent');
				}
				else{

					$tele.find('.outer').attr('fill', 'url(#grad_normal)');
					$tele.find('.inner').attr('fill', 'url(#grad_tele_' + this.teleporterIndex + ')');
				}

	            $tele.attr('teleporter-index', this.teleporterIndex);
				//$bomb.find('path').attr('fill', 'url(#grad_' + this.color + ')');

	            $tile.append($tele);
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
