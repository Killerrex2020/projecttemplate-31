class Boy {
    constructor(x,y,r)
      {
          var options = { 
        density: 1, 
        frictionAir: 1
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("walking_1.png");
          this.image2=loadImage("walking_2.png");
          this.image3=loadImage("walking_3.png");
          this.image4=loadImage("walking_4.png");
          this.image5 = loadImage("walking_5.png");
          this.image6 = loadImage("walking_6.png");
          this.image7 = loadImage("walking_7.png");
          this.image8 = loadImage("walking_8.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var boyPos=this.body.position;		
              push()
              translate(boyPos.x, boyPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
              pop()
      }
    }