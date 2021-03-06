class Ground {
  constructor(x, y, width, height) {
    var options = {
        'isStatic': true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
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
    fill("OrangeRed");
    stroke("Coral");
    strokeWeight("2.5");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
