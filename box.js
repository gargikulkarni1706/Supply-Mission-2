class RedBox{
    constructor(x, y, width, height, angle) {
      var options = {
           isStatic: true,
          'restitution':0.3,
          'friction':3.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, angle, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      Matter.Body.setStatic(this.body, true)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0);
      rect(0, 0, this.width, this.height);
      pop();
    }
}