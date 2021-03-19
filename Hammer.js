class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':5,
          'density':19,
      
      }
      this.body = Bodies.rectangle(x, y, 150, 50, options);
      this.width = 150;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
   //   var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(5)
      stroke("yellow")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };


 