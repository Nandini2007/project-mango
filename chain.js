/*class Chain{
    constructor(bodyA,pointB){
        var opts ={
            bodyA: bodyA
            pointB: pointB,
            stiffness: 0.04,
            length: 160
        }
        this.pointB = pointB;
     this.chain = constraint.create(opts)   
     World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    
}*/
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(bodyA){
		this.sling.bodyA=bodyA;
	}
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        push();
     if( this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke(27, 15, 13);
            line(pointB.x , pointB.y +23,pointA.x+20, pointA.y+20 ); 
            line(pointB.x+40 , pointB.y +23,pointA.x+20, pointA.y+20 ); 
          
     }
       pop();  
        
    }
    
}
