

// var GameEngine = function() {
// 	var NO_GRIDS = 4;
// 	this.grids = new Grid(NO_GRIDS);
// 	this.events = new EventHandler(this.grids);
// };

// GameEngine.prototype.init = function() {
// 	this.grids.init();
// 	this.events.keyboardInput();
// };

// window.onload = function() {
// 	new GameEngine().init();
// };

var NO_GRIDS = 4;
var grids = new Grid(NO_GRIDS);
grids.init();
var events = new EventHandler(grids);
events.keyboardInput();
