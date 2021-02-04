class chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,bodyB:bodyB,
            stifness:0.6,
            length:10
        }

        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        strokeWeight(3)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.BodyB.position.y)
    }
}