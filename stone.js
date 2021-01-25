class Stone{
    constructor(r){
        var opts ={
            isStatic : false
        }
        this.body = Bodies.circle(235,420,r,opts);
        this.r = r;
          this.image = loadImage("stone.png");
        World.add(world,this.body);
      
      
    }
 
    display(){
        var pos = this.body.position;
   // rect(pos.x,pos.y,this.width,this.height)
        image(this.image,pos.x,pos.y,40,40) 
       //console.log(this.width)
    }
}
