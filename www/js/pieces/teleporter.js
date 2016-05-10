PUZZLO.pieces['T'] = {

	create: function(id){

		var canToggle = false;
		var index = id[1];
		if(index == '?'){
			index = 1;
			canToggle = true;
		}

		return {

			canToggle: canToggle,
			$tile: null,
			type: 'teleporter',
			teleporterIndex: index,
            paired: null,

			toggle: function(){

				if(!this.canToggle)
					return;

				this.teleporterIndex = (this.teleporterIndex % 4) + 1;
			},

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

				action.x = parseInt(this.paired.$tile.parents('.puzzle-tile').attr('tile-x'));
				action.y = parseInt(this.paired.$tile.parents('.puzzle-tile').attr('tile-y'));
				action.quickMove();

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
