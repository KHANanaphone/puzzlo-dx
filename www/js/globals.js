var PUZZLO = {
    pieces : {},
    tower_categories : {},
    debug: {},

    directionToXY: function(direction){

        if (direction == 'U')
            return [0, -1];
        else if (direction == 'D')
            return [0, 1];
        else if (direction == 'L')
            return [-1, 0];
        else if (direction == 'R')
            return [1, 0];
        else if (direction == 'UL')
            return [-1, -1];
        else if (direction == 'UR')
            return [1, -1];
        else if (direction == 'DL')
            return [-1, 1];
        else if (direction == 'DR')
            return [1, 1];

        return [0, 0];
    },

    XYToDirection: function(x, y){

    	if(x == 0 && y == -1)
    		return 'U';
    	else if(x == 1 && y == -1)
    		return 'UR';
    	else if(x == 1 && y == 0)
    		return 'R';
    	else if(x == 1 && y == 1)
    		return 'DR';
    	else if(x == 0 && y == 1)
    		return 'D';
    	else if(x == -1 && y == 1)
    		return 'DL';
    	else if(x == -1 && y == 0)
    		return 'L';
    	else if(x == -1 && y == -1)
    		return 'UL';

            return '';
    }
};
