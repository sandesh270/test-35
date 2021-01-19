class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,5,options);
      
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(CENTER);
      fill(255,255,255);
      ellipse(0, 0, 10, 10);
      pop();
    }
}

