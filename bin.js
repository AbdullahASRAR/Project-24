class Bin {
      constructor(x,y,width,height){
           var bodyOpt={
               isStatic:true
           }
           this.width=width;
           this.height=height;
           this.body=Bodies.rectangle(x,y,width,height,bodyOpt);
           World.add(world,this.body);
        }    
 display(){
    rectMode(CENTER)
    fill ("white"); 
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
 }
}


