class Paperball {
    constructor(x, y) {
      var options = {
        isStatic:true,  
        restitution:0.8,
        friction:0.3,
        density:1.2,
      }
      this.body = Bodies.circle(x,y,20,options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("Red");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,20,20);
      pop();
    
    }
  }