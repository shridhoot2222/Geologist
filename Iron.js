class Iron {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.3,
        'mass':15
    }
    this.body = Bodies.rectangle(x, y, 90, 90, options);
    this.width = 90;
    this.height = 90;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("black");
    strokeWeight(5)
    stroke("black")
    rect(0, 0, this.width, this.height);
    pop();
  }
};