var Game=function(){this.score=0,this.bestScore=0};Game.prototype.addScore=function(e){this.score+=e,this.bestScore<this.score&&(this.bestScore+=e)};