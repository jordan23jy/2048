var Scores=function(){this.score=0,this.bestScore=0,this.scoreDom=document.getElementById("score"),this.bestScoreDom=document.getElementById("best"),this.newGame=document.getElementById("new-game")};Scores.prototype.addScore=function(e){this.score+=e,this.bestScore<this.score&&(this.bestScore+=e),this.updateScores()},Scores.prototype.updateScores=function(e){this.scoreDom.innerHTML=this.score,this.bestScoreDom.innerHTML=this.bestScore},Scores.prototype.init=function(){this.scoreDom.innerHTML=this.score,this.bestScoreDom.innerHTML=this.bestScore},Scores.prototype.reset=function(){this.score=0,console.log("reset")};