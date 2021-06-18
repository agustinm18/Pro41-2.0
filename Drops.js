class Drop{
    constructor(x,y){
        var options = {
            friction: 0.1,
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill('blue')
        rotate(angle);
        ellipse(0,0,10,10);
        pop();
        
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,500), y:random(0,400)})
        }
    }
}

