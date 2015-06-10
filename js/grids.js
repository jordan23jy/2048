var NO_GRIDS = 4;

var Grid = function(noGrids) {
	this.noGrids = NO_GRIDS;
	this.cellArray = []
}

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


