class Drops{
    constructor(x,y){
this.x = x;
this.y = y;
var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':20,
}
    }
    display(){
        push()
        var maxDrops = 100;
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
            pop()
        }
    }
}