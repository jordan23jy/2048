
Grid.prototype.closeGapCells2 = function(cell) {
	for (var j = 0; j < cell.length; j++) {
		for (var i = 0; i < cell.length; i++) {
			var x = i+1;
			// go to next loop if cell already has a value
			if (cell[j][i] !== 0) {continue;}

			// search for the furthers values between gaps 0
			while (cell[j][x] === 0 && x < cell[j].length) {x++;}
			// break if cell ahead is over the grid
			if (x === cell[j].length) {break;}
			cell[j][i] = cell[j][x];
			cell[j][x] = 0;
		}
	}
	console.log("===CLOSE GAP====");
	console.log(cell);
	return cell;
};

Grid.prototype.mergeCells2 = function(cell) {
	for (var j = 0; j < cell.length; j++) {

		for (var i = 0; i < cell.length-1; i++) {
			var x = i+1;
			// merge if current cell if equal to cell ahead
			if (cell[j][i] === cell[j][i+1]) {
				cell[j][i] *= 2;
				cell[j][x] = 0;
			}
		}
	}
};

Grid.prototype.moveCells2 = function(cell) {
	var self = this;
	var moved = false;
	var groupedCellArray = this.groupCells(cell);
	// console.log("=====GROUPED=====");
	// console.log(groupedCellArray);

	this.closeGapCells2(groupedCellArray);
	this.mergeCells2(groupedCellArray);
	var newGroupedCellArray = this.closeGapCells2(groupedCellArray);

	// console.log("=====UNGROUPED=====");
	// console.log(newGroupedCellArray);

	newGroupedCellArray = this.ungroupCells(newGroupedCellArray);

	console.log("===OLD===");
	console.log(cell.join(""));

	console.log("===NEW===");
	console.log(newGroupedCellArray.join(""));
};

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
Grid.prototype.groupCells = function(array) {
	console.log(array);
	var self = this;
	var noGrids = 4;

	var groupedArray = new Array(noGrids);

	for (var j = 0; j < noGrids; j++) {
		groupedArray[j] = new Array(self.noGrids);
	}

	for (var i = 0; i < array.length; i++) {
		var x = Math.floor(i/self.noGrids);
		for (var y = 0; y < self.noGrids; y++) {
			groupedArray[x][y] = array[i];
		}
	}
	return groupedArray;
};

Grid.prototype.ungroupCells = function(array) {
	var cellArray = [];
	for (var j = 0; j < array.length; j++) {
		for (var i = 0; i < array[j].length; i++) {
			cellArray.push(array[j][i]);
		}
	}
	return cellArray;
};


EventHandler.prototype.moveUps = function() {
	var self = this;
	var noGrids = this.grids.noGrids;
	var cols = [];
	// this.grids.cellArray[0].testing(2);
	for (var x = 0; x < noGrids; x++) {
		// collect cell values in its direction; column by column
		for (var y = 0; y < noGrids; y++) {
			cols.push(self.grids.cellArray[x+(4*y)].value);
		}
	}

	console.log(cols);
	// console.log(self.grids.groupCells(cols));
	// var cellValues [];
	// for (x = 0; x < 16; x++) {
	// 	cellValues.push(self.grids.cellArray[x].value);
	// }


	// move cell of current column iterated
	// self.grids.moveCells(cols);

	// for (x = 0; x < noGrids; x++) {
	// 	for (y = 0; y < noGrids; y++) {
	// 		self.grids.cellArray[x+(4*y)].setCellValue(cols[y] ? cols[y] : 0);
	// 	}
	// }
};