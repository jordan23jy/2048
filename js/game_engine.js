

// var GameEngine = function() {
// 	var NO_GRIDS = 4;
// 	this.scores = new Scores();
// 	this.grids = new Grid(NO_GRIDS, this.scores);
// 	this.events = new EventHandler(this.grids);
// };

// GameEngine.prototype.init = function() {
// 	this.scores.init()
// 	this.grids.init();
// 	this.events.keyboardInput();
// };

// window.onload = function() {
// 	new GameEngine().init();
// };

var NO_GRIDS = 4;
var scores = new Scores();
var grids = new Grid(NO_GRIDS, scores);
var events = new EventHandler(grids);
scores.init()
grids.init();
events.init();
