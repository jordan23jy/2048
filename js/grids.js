var NO_GRIDS = 4;

var Grid = function(noGrids) {
	this.noGrids = NO_GRIDS;
	this.cellArray = [];
};

Grid.prototype.init = function() {
	var self = this;
	var cell;
	// render grid elements
	this.render();
	// set two random values in cells
	self.randomValue();
	self.randomValue();
};

Grid.prototype.render = function() {
	var self = this;
	var parent = document.getElementById('grids');

	for (var i = 0; i < self.noGrids; i++) {
		var row = document.createElement('div');
		row.className = 'grid-row';
		parent.appendChild(row);

		for (var j = 0; j < self.noGrids; j++) {
			var cols = document.createElement('div');
			cols.className = 'grid-cell';
			row.appendChild(cols);
			self.cellArray.push(new Cells(i, self.noGrids, cols));
		}
	}
	return self.cellArray;
};

Grid.prototype.randomValue = function() {
	var self = this;
	var randomValue = Math.random() < 0.5 ? 2 : 4;
	var randomIndex = Math.floor((Math.random() * this.noGrids * this.noGrids));

	// generate random index only on available cells
	// otherwise recurse function
	if (self.cellArray[randomIndex].value === 0) {
		console.log("passed: " + randomIndex);
		self.setCellValue(randomIndex, randomValue);
	} else {
		console.log('recursion');
		self.randomValue();
	}
};

Grid.prototype.setCellValue = function(index, value) {
	var cell = this.cellArray[index];

	cell.elem.innerHTML = value;
	cell.value = value;
};

Grid.prototype.closeGapCells = function(cell) {
	for (var i = 0; i < cell.length; i++) {
		var x = i+1;
		// go to next loop if cell already has a value
		if (cell[i] !== 0) {continue;}

		// search for the furthers values between gaps 0
		while (cell[x] === 0 && x < cell.length) {
			x++
		}
		// break if cell ahead is over the grid
		if (x === cell.length) {
			break;
		}
		cell[i] = cell[x];
		cell[x] = 0;
	}
};

Grid.prototype.mergeCells = function(cell) {
	for (var i = 0; i < cell.length-1; i++) {
		var x = i+1;
		// merge if current cell if equal to cell ahead
		if (cell[i] === cell[i+1]) {
			cell[i] *= 2;
			cell[x] = 0;
		}
	}
};

Grid.prototype.moveCells = function(cell) {
	this.closeGapCells(cell);
	this.mergeCells(cell);
	this.closeGapCells(cell);
};

var grids = new Grid(NO_GRIDS);
grids.init();



/*========== CELLS ==========*/
function Cells(index, noGrids, elem) {
	this.index = index;
	this.value = 0;
	this.x = Math.floor(index / noGrids);
	this.noGrids = noGrids;
	this.y = index % noGrids;
	this.elem = elem;
}

Cells.prototype.removeCells = function(row) {

};

Cells.prototype.move = function(cell) {

	for (var i = 0; i < this.noGrids; i++) {
		// undefined if out of grid
		if (cell[i+1] === undefined) {
			break;
		}
		// merge if current cell if equal to cell ahead
		if (cell[i] === cel[i+1]) {
			cell[i] *= 2;
			cell[i+1] = 0;
		}
	}
};




