class slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
        stiffness:0.04,
        length:10
    }
        this.slingshot=Constraint.create(options)
        World.add(world,this.slingshot)
        
    }
    display(){
        var PointA= this.slingshot.bodyA.position
        var PointB= this.slingshot.bodyB.position
        strokeWeight(4)
        fill("green")
        line(PointA.x,PointA.y,PointB.x,PointB.y);
        
    }
}