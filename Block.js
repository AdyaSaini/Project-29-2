class Block{
  constructor(x, y, width, height){
    var options = {
      'restitution':0.4,
      'friction':0,
    }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("DarkCyan");
    stroke("Cyan");
    strokeWeight("2");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
