class Divider {
    constructor(x, y, width, height) {
        var DividerOptions = {
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, DividerOptions);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(color(0, 0, 255));
        rect(0, 0, this.width, this.height);
        pop();
    }
}