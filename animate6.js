var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;
var shapes = [];
var i=0;
for(i=0;i<15;i++)
{
	shapes[i]={};
	addRandomShape(i);
}
render();

function render()
{
	animate();
	window.requestAnimationFrame(render);
}
function animate()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(i=0;i<15;i++)
	{
		if(shapes[i].shapeNo==0)
		{
			shapes[i].posY-=1;
			ctx.beginPath();
			ctx.arc(shapes[i].posX,shapes[i].posY,shapes[i].radius,0,2*Math.PI);
			ctx.fillStyle="rgb("+shapes[i].rc+','+shapes[i].bc+','+shapes[i].gc+')';
			ctx.fill();
		}
		else if(shapes[i].shapeNo==1)
		{
			shapes[i].posY-=1;
			ctx.beginPath();
			ctx.rect(shapes[i].posX,shapes[i].posY,shapes[i].width,shapes[i].height);
			ctx.fillStyle="rgb("+shapes[i].rc+','+shapes[i].bc+','+shapes[i].gc+')';
			ctx.fill();
		}
		else
		{
			shapes[i].posY-=1;
			shapes[i].p1Y-=1;
			shapes[i].p2Y-=1;
			ctx.beginPath();
			ctx.moveTo(shapes[i].posX,shapes[i].posY);
			ctx.lineTo(shapes[i].p1X,shapes[i].p1Y);
			ctx.lineTo(shapes[i].p2X,shapes[i].p2Y);
			ctx.fillStyle="rgb("+shapes[i].rc+','+shapes[i].bc+','+shapes[i].gc+')';
			ctx.fill();
		}
		if(shapes[i].posY<=-10)
		{
			addShape(i);
		}
	}
}
function addRandomShape(i)
{
	shape = Math.floor(3*Math.random());
	shapes[i].rc = Math.floor(256*Math.random());
	shapes[i].gc = Math.floor(256*Math.random());
	shapes[i].bc = Math.floor(256*Math.random());
	switch(shape)
	{
		case 0:
			shapes[i].shapeNo = 0;
			shapes[i].radius = Math.floor(30*Math.random())+6;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			shapes[i].posY = Math.floor(canvas.height*Math.random());
			break;
		case 1:
			shapes[i].shapeNo = 1;
			shapes[i].width = Math.floor(60*Math.random())+20;
			shapes[i].height = Math.floor(60*Math.random())+20;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			shapes[i].posY = Math.floor(canvas.height*Math.random());
			break;
		case 2:
			shapes[i].shapeNo = 2;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			shapes[i].posY = Math.floor(canvas.height*Math.random());
			shapes[i].p1X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p1Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			shapes[i].p2X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p2Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			break;
	}
}
function addShape()
{
	shape = Math.floor(3*Math.random());
	shapes[i].posY = canvas.height+100;
	shapes[i].rc = Math.floor(256*Math.random());
	shapes[i].gc = Math.floor(256*Math.random());
	shapes[i].bc = Math.floor(256*Math.random());
	switch(shape)
	{
		case 0:
			shapes[i].shapeNo = 0;
			shapes[i].radius = Math.floor(30*Math.random())+6;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			break;
		case 1:
			shapes[i].shapeNo = 1;
			shapes[i].width = Math.floor(60*Math.random())+20;
			shapes[i].height = Math.floor(60*Math.random())+20;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			break;
		case 2:
			shapes[i].shapeNo = 3;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			shapes[i].p1X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p1Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			shapes[i].p2X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p2Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			break;
	}
}