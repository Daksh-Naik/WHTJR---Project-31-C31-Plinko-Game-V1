class Plinko {
    constructor(x, y, radius) {
        var PlinkoOptions = {
            isStatic : true
        }
        this.body = Matter.Bodies.circle(x, y, radius, PlinkoOptions);
        this.radius = 10;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(color(170, 170, 170));
        ellipse(0, 0, this.radius);
        pop();
    }
}