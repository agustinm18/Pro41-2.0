class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,100,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill('yellow');
        rotate(angle);
        ellipse(0,0,200,200);
        
        pop();
        
    }
}