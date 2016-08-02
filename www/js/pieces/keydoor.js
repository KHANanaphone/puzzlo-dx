(function(){


PUZZLO.pieces['K'] = {

    create: function(id){

        if(id[1] == 'K'){ //key

            return {
                type: 'key',
                keydoorIndex: id[2],
                draw: function($tile){

    				this.$tile = $tile;

    	            var $key = $('#hidden .key-icon').clone();
    	            $key.attr('fill', 'url(#grad_keydoor_' + this.keydoorIndex + ')');

    	            $tile.append($key);
    			},
                applyLogic: function(tile, action){

                    PuzzleScene.openDoors(this.keydoorIndex, action.color);
        			AudioManager.play('unlock');
                    tile.clear();
                    return false;
                }
            }
        }
        else //door{

            return {
                type: 'door',
                keydoorIndex: id[2],
                draw: function($tile){

    				this.$tile = $tile;

    	            var $door = $('#hidden .door-icon').clone();
    	            $door.attr('fill', 'url(#grad_keydoor_' + this.keydoorIndex + ')');

    	            $tile.append($door);
    			},
                applyLogic: function(tile, action){

                    AudioManager.play('wall');
                    return true;
                }
            }
        }
    }
}

)();
