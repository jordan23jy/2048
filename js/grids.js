var NO_GRIDS = 4;

function Grid(noGrids) {
	this.noGrids = NO_GRIDS;
	this.gridArray = [];
}

Grid.prototype.init = function() {
	var self = this;
	var cell;
	for (var i = 0; i < self.noGrids * self.noGrids; i++) {
		cell =
		self.gridArray[i] = new Cells(i, self.noGrids);
	}
	console.log(self.gridArray);
};

Grid.prototype.render = function() {
	var self = this;
	var elemRow = "<div class='grid-row'></div>";
	for (var i = 0; i < self.noGrids; i++) {
		$('#grids').append(elemRow);
	}
	var elemCell = "<div class='grid-cell'></div>";
	for (var j = 0; j < self.noGrids; j++) {
		$('.grid-row').append(elemCell);
	}


}

var grids = new Grid(NO_GRIDS);

grids.init();
grids.render();


/*========== CELLS ==========*/
function Cells(index, noGrids) {
	this.index = index;
	this.value = 0;
	this.x = Math.floor(index / noGrids);
	this.y = index % noGrids;
}

Cells.prototype.test1 = function() {
	console.log("hello");
};
