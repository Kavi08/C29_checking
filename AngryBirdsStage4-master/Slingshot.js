class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");  
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        //stroke( " brown ");
        //r,g,b - 0 to 255
        //bit - binary digit
        //binary = 0 to 1 - off/on
        //8 bits - byte _ _ _ _ _ _ _ _ = 2 power 8 = 256 - 0 to 255
        //decimal number system - 0 to 9
        // hexadecimal - 16 -> 0 to 9, A to F 10 => A  14597 
        //stroke(0,255,0);
        
        stroke(48,22,8);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 220){
                strokeWeight(6);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x - 30,pointA.y - 10, 15, 30);
            }else{
                strokeWeight(4);
                line(pointA.x + 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x + 25,pointA.y - 10, 15, 30);
            }
            
        }
    }
     
}