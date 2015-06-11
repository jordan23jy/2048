var Grid = function(noGrids, score) {
	this.scores = scores;
	this.noGrids = noGrids;
	this.cellArray = [];
};

Grid.prototype.init = function() {
	var self = this;
	var cell;
	// render grid elements
	this.render();
	// set two random values in cells
	setTimeout(function(){
		self.randomValue();
		self.randomValue();
	}, 0);
};

Grid.prototype.reset = function() {
	for (var i = 0; i < this.cellArray.length; i++) {
		this.cellArray[i].setCellValue(0);
		this.cellArray[i].oldValue = 0;
		this.cellArray[i].hasMoved = false;
	}
	this.randomValue();
	this.randomValue();
}

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
};

Grid.prototype.randomValue = function() {
	var self = this;
	var randomValue = Math.random() < 0.5 ? 2 : 4;
	var randomIndex = Math.floor((Math.random() * this.noGrids * this.noGrids));

	// generate random index only on available cells
	// otherwise recurse function
	if (self.cellArray[randomIndex].value === 0) {
		console.log("passed: " + randomIndex);
		self.cellArray[randomIndex].setCellValue(randomValue);
	} else {
		console.log('recursion');
		self.randomValue();
	}
};

Grid.prototype.closeGapCells = function(cell) {
	for (var i = 0; i < cell.length; i++) {
		var x = i+1;
		// go to next loop if cell already has a value
		if (cell[i] !== 0) {continue;}

		// search for the furthers values between gaps 0
		while (cell[x] === 0 && x < cell.length) {
			x++;
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
	var self = this;
	for (var i = 0; i < cell.length-1; i++) {
		var x = i+1;
		// merge if current cell if equal to cell ahead
		if (cell[i] === cell[i+1]) {
			cell[i] *= 2;
			cell[x] = 0;
			self.scores.addScore(cell[i]);
		}
	}
};

Grid.prototype.moveCells = function(cell) {
	var self = this;

	this.closeGapCells(cell);
	this.mergeCells(cell);
	this.closeGapCells(cell);
};

Grid.prototype.cellHasMoved = function() {
	var self = this;
	var statusArray = [];
	for (var i = 0; i < 16; i++) {
		var status = this.cellArray[i].setHasMoved();
		statusArray.push(status);
	}
	return statusArray.indexOf(true) > -1 ? true : false;
}

Grid.prototype.resetGame = function() {
	this.reset();
	this.scores.reset();
};
Grid.prototype.console = function() {
	console.log("hello");
};
