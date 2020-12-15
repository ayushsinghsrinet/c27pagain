class bullet{
    constructor(x,y,r){
        var o={
            Mass:100,
            friction:3,
            density:100
        }
        this.x=x
        this.y=y
        this.r=r

        this.body=Bodies.circle(this.x,this.y,this.r/2,o)
        //this.image=loadImage("c29pball.png")
        World.add(world,this.body)
    console.log(this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
    }
}