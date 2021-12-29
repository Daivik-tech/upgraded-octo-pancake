img=''
status=''

function preload()
{
img=loadImage('dog_cat.jpg');
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocosed',modelLoaded);
document.getElementById('status').innerHTML='Status :Detecting Objects';
}

function draw()
{
image(img,0,0,0,640,240);
if(status !="")
{
for(i=0,i<object.detection;i++;)
{
document.getElementById("status").innerHTML="Status :Object Detected";
fill("#FF0000")
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
nofill();
stroke("#FF0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
fill("#FF0000");
text('Dog',45,75);
stroke("#FF0000");
nofill();
rect(30,60,350,650);

image(img,0,0,0,640,240);
fill("#FF0000");
text('Cat',320,120);
stroke("FF0000");
nofill();
rect(300,90,270,320);
}

function modelLoaded()
{
console.log("ModelLoaded!");
status=true;
objectDetector.detect(img,results);    
}

function gotresults(error,results)
{
if(error)
{
console.log(error);
}
console.log(results);    
}