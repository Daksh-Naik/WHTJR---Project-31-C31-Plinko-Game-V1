class Bound {
    constructor(x, y, width, height) {
        var BoundOptions = {
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, BoundOptions);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(color(255, 0, 0));
        rect(0, 0, this.width, this.height);
        pop();
    }
}