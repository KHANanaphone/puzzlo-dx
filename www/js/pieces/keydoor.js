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
    	            $key.attr('keydoor-index', this.keydoorIndex

    	            $tile.append($key);
    			},
                applyLogic: function(tile, action){

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
    	            $door.attr('keydoor-index', this.keydoorIndex

    	            $tile.append($door);
    			},
                applyLogic: function(tile, action){

                    return true;
                }
            }
        }
    }
}
