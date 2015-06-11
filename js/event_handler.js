var EventHandler = function(grids) {
	this.grids = grids;
};

EventHandler.prototype.init = function() {
	this.keyboardInput();
	this.mouseEvents();
}

EventHandler.prototype.keyboardInput = function() {
	var self = this;
	window.onkeydown = function(event) {
		// console.log(event.keyCode);
		switch(event.keyCode) {
			case 37:
				event.preventDefault();
				self.moveLeft();
				break;
			case 38:
				event.preventDefault();
				self.moveUp();
				break;
			case 39:
				event.preventDefault();
				self.moveRight();
				break;
			case 40:
				event.preventDefault();
				self.moveDown();
				break;
			default: return;
		}

		if (this.grids.cellHasMoved()) {
			self.grids.randomValue();
		}
		console.log(this.grids.cellHasMoved());
	};

};

EventHandler.prototype.mouseEvents = function() {
	var self = this;
	var resetButton = document.getElementById('new-game');

	resetButton.onclick = function(e) {
		self.grids.resetGame();
	};
};

EventHandler.prototype.moveUp = function() {
	var self = this;
	var noGrids = this.grids.noGrids;
	// this.grids.cellArray[0].testing(2);
	for (var x = 0; x < noGrids; x++) {
		// collect cell values in its direction; column by column
		var cols = [];
		for (var y = 0; y < noGrids; y++) {
			cols[y] = self.grids.cellArray[x+(4*y)].value;
		}

		// move cell of current column iterated
		self.grids.moveCells(cols);

		// new position of cells in cols array
		// render/update the cell values in the DOM
		for (y = 0; y < noGrids; y++) {
			self.grids.cellArray[x+(4*y)].setCellValue(cols[y] ? cols[y] : 0);
		}
	}
};

EventHandler.prototype.moveDown = function() {
	console.log("down key");
	var self = this;

	var noGrids = self.grids.noGrids;
	// extract value of each column into an array

	for (var x = 0; x < noGrids; x++) {
		var cols = [];
		for (var y = 0; y < noGrids; y++) {
			cols[y] = self.grids.cellArray[x+(12-4*y)].value;
		}

		self.grids.moveCells(cols);

		for (y = 0; y < noGrids; y++) {
			self.grids.cellArray[x+(12-y*4)].setCellValue(cols[y] ? cols[y] : 0);
		}

	}
};

EventHandler.prototype.moveLeft = function() {
	var self = this;
	var noGrids = this.grids.noGrids;
	for (var y = 0; y < noGrids; y++) {
		var rows = [];

		for (var x = 0; x < noGrids; x++) {
			rows[x] = self.grids.cellArray[x+(4*y)].value;
		}

		self.grids.moveCells(rows);

		for (x = 0; x < noGrids; x++) {
			self.grids.cellArray[x+(4*y)].setCellValue(rows[x] ? rows[x] : 0);
		}
	}
};

EventHandler.prototype.moveRight = function() {
	var self = this;
	var noGrids = this.grids.noGrids;
	for (var y = 0; y < noGrids; y++) {
		var rows = [];
		for (var x = 0; x < noGrids; x++) {
			rows[x] = self.grids.cellArray[(3-x)+(4*y)].value;
		}

		self.grids.moveCells(rows);

		for (x = 0; x < noGrids; x++) {
			self.grids.cellArray[(3-x)+(4*y)].setCellValue(rows[x] ? rows[x] : 0);
		}

	}
};
