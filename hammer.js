class hammer {
    constructor(x,y){
        var options = {
            'density':2,
            'friction':1,
            'restitution':0.5
        };
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 15;
        this.height = 40;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        

        push();
        translate(pos.x,pos.y);
        strokeWeight(3);
        stroke('white')
        fill('orange')
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
                                                                                                                    
    };
};
