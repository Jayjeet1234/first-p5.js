function setup(){
canvas=createCanvas(400,400);
canvas.position(125,280);
v=createCapture(VIDEO);
v.hide();

}
function draw(){
image(v,80,100,200,200);
fill("blue");
stroke("white");
circle(40,40,60);
circle(300,40,60)
circle(40,350,60)
circle(300,350,60)
fill("green");
stroke("red");
rect(68,30,205,20)
rect(68,340,205,20)
rect(30,70,20,250)
rect(290,70,20,250)
}
function take_snapshot(){
    save('student_name.png');
    }
    