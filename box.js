class Box {

    constructor(x,y,width,height){
        var options ={
           isStatic: true, 
           friction: 0.3,
           density: 0.3            
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("wood1.png");
        this.x=this.body.position.x;
        this.y=this.body.position.y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var angle= this.body.angle;
        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate (angle);
        //rectMode(CENTER);
        //rect(600,600,20,20);
        imageMode(CENTER);
        image(this.image, this.x,this.y, this.width, this.height);
        pop ();
    }

}

