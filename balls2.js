class lol {
    constructor(x,y,r){
        var options = {
            'friction':5 ,
            'restitution':1.3 ,
            'density':1 
        };

        this.y = y;
        this.x = x;
        this.r = r
        this.body = Bodies.circle(this.x, this.y, (this.r-20),options)
        World.add(world , this.body);

    };
    display(){
        var rubberpos = this.body.position;
        push();
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("orange");
        fill('yellow');
        ellipse(0,0,this.r, this.r);
        pop();
        
        



    }
}