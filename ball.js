class Ball{
    constructor(x,y,radius){
        var balloptions={
            'restitution':1.0,
            'density':1.0
          }
          this.body = Bodies.circle(x,y,radius,balloptions);
          this.radius = radius;
          World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
       fill("red");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.radius);
    }
}