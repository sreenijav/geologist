class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x; 
		this.option={restitution:1, friction:1, density:1}
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
     ellipseMode(CENTER)
	 ellipse(this.body.position.x,this.body.position.y,(this.r-20)/2,(this.r-20)/2)
			pop()
	}

}