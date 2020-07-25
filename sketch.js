var car, wall, speed, weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 50, 50, 25);
  wall=createSprite(700, 400, 20,800);
  speed = Math.round(random(55,90),0);
  weight = Math.round(random(400,1500),0);
  
}

function draw() {
  background(255,255,255);    
  car.velocityX = speed;
  //text("car.velocityX: " + speed,250,50);
    var deform = Math.round((0.5 * weight * speed * speed)/22500,0);
//text("weight " + weight + " | speed " + speed, 100,100);
text("deform: " + deform,150,150);
  if(isTouching(car,wall)){
    //calculate deformation
    
   /* switch (deform) {
      case deform < 100:
        car.shapeColor="green";
        text("deform: " + deform,150,150);
        break;
      case deform>100 && deform<180:
          car.shapeColor="yellow";
          break;
      case deform>180:
            car.shapeColor="red";
            break;
      }
      */

      car.depth = wall.depth;
      car.depth = car.depth + 1;

     if(deform < 100 ){
      car.shapeColor ="green";
     }
     if(deform > 100 && deform < 180){
      car.shapeColor ="yellow";
     }
     if(deform > 180 ){
      car.shapeColor ="red";
     }
  }
  drawSprites();
}

function isTouching (object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2){
      object1.velocityX=0;
      object1.x=object2.x-object2.width;
      return true;
  }

}