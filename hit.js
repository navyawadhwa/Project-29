class Hitter extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygons.png");
    }
  
    display() {
       super.display();
    }
  }
