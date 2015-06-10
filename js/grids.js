var NO_GRIDS = 4;

function Grid(noGrids) {
	this.noGrids = NO_GRIDS;
	this.gridArray = [];
}

Grid.prototype.init = function() {
	var self = this;
	var cell;
	for (var i = 0; i < self.noGrids * self.noGrids; i++) {
		self.gridArray[i] = new Cells(i, self.noGrids);
	}
	console.log(self.gridArray);
};

Grid.prototype.render = function() {
	var self = this;
	var cellArray = [];
	var parent = document.getElementById('grids');

	for (var i = 0; i < self.noGrids; i++) {
		var row = document.createElement('div');
		row.className = 'grid-row';
		parent.appendChild(row);

		for (var j = 0; j < self.noGrids; j++) {
			var cols = document.createElement('div');
			cols.className = 'grid-cell';
			row.appendChild(cols);
			cellArray.push(cols);
		}
	}
	return cellArray;
};

Grid.prototype.displayValue = function() {

}

Grid.prototype.randomValue = function(num1, num2) {
	return  Math.random() < 0.5 ? num1 : num2;
};

Grid.prototype.randomIndex = function() {
	return Math.floor((Math.random() * this.noGrids * this.noGrids) + 1);
};

Grid.prototype.setCellValue = function(index, value) {
	this.gridArray[index] = value;

};

var grids = new Grid(NO_GRIDS);

grids.init();
var m = grids.render();


/*========== CELLS ==========*/
function Cells(index, noGrids) {
	this.index = index;
	this.value = 0;
	this.x = Math.floor(index / noGrids);
	this.noGrids = noGrids;
	this.y = index % noGrids;
}


