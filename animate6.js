var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 25;
canvas.height = window.innerHeight - 25;
var shapes = [];
var digits = [];
var i=0;
for(i=0;i<20;i++)
{
	digits[i]={};
	shapes[i]={};
	addShape(i,0);
	addNumbers(i,0);
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
	for(i=0;i<20;i++)
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
		if(shapes[i].posY<=-100)
		{
			addShape(i,1);
		}
	}
	for(i=0;i<20;i++)
	{
		digits[i].posY-=1;
		ctx.font = digits[i].fontSize+"px Gloria Hallelujah";
		ctx.fillStyle = "rgb("+digits[i].rc+","+digits[i].gc+','+digits[i].bc+")";
		ctx.fillText(digits[i].digit,digits[i].posX,digits[i].posY);
		if(digits[i].posY<=-100)
		{
			addNumbers(i,1);
		}
	}
}
function addShape(i,old)
{
	if(!old)
		shapes[i].posY = Math.floor(canvas.height*Math.random());
	else
		shapes[i].posY = canvas.height+100;
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
			break;
		case 1:
			shapes[i].shapeNo = 1;
			shapes[i].width = Math.floor(60*Math.random())+20;
			shapes[i].height = Math.floor(60*Math.random())+20;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			break;
		case 2:
			shapes[i].shapeNo = 2;
			shapes[i].posX = Math.floor(canvas.width*Math.random());
			shapes[i].p1X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p1Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			shapes[i].p2X = shapes[i].posX + Math.floor(200*Math.random())-100;
			shapes[i].p2Y = shapes[i].posY + Math.floor(200*Math.random())-100;
			break;
	}
}
function addNumbers(i,old)
{
	if(!old)
		digits[i].posY = Math.floor(canvas.height*Math.random());
	else
		digits[i].posY = canvas.height+100;
	digits[i].digit=Math.floor(Math.random()*10);
	digits[i].posX = Math.floor(canvas.width*Math.random());
	digits[i].fontSize = Math.floor(100*Math.random())+30;
	digits[i].rc = Math.floor(256*Math.random());
	digits[i].gc = Math.floor(256*Math.random());
	digits[i].bc = Math.floor(256*Math.random());
}