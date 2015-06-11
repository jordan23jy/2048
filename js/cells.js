/*========== CELLS ==========*/
function Cells(index, noGrids, elem) {
	this.index = index;
	this.value = 0;
	this.x = Math.floor(index / noGrids);
	this.noGrids = noGrids;
	this.y = index % noGrids;
	this.elem = elem;
	this.hasMoved = false;
	this.oldValue = 0;
}

Cells.prototype.setHasMoved = function() {
	if (this.value !== this.oldValue) {
		this.hasMoved = true;
		this.oldValue = this.value;
	} else {
		this.hasMoved = false;
	}
	return this.hasMoved;
};

Cells.prototype.setCellValue = function(num) {
	// var cell = this.cellArray[index];
	// cell.elem.innerHTML = value;
	this.value = num;
	switch(num) {
		case 0:
			this.elem.innerHTML = '';
			this.elem.style.backgroundColor = '#eee4da';
			return;
		case 2:
			this.elem.style.backgroundColor = '#faf8ef';
			break;
		case 4:
			this.elem.style.backgroundColor = '#EDE0C8';
			break;
		case 8:
			this.elem.style.backgroundColor = '#F2B179';
			break;
		case 16:
			this.elem.style.backgroundColor = '#F59563';
			break;
		case 32:
			this.elem.style.backgroundColor = '#F67C5F';
			break;
		case 64:
			this.elem.style.backgroundColor = '#F65E3B';
			break;
		case 128:
			this.elem.style.backgroundColor = '#EDCF72';
			break;
		case 256:
			this.elem.style.backgroundColor = '#EDCC61';
			break;
		case 512:
			this.elem.style.backgroundColor = '#EDC850';
			break;
		case 1024:
			this.elem.style.backgroundColor = '#EDC53F';
			break;
		case 2048:
			this.elem.style.backgroundColor = '#EDC22E';
			break;
		default:
			this.elem.innerHTML = '';
			this.elem.style.backgroundColor = '#eee4da';
	}
	this.elem.innerHTML = num;
};



