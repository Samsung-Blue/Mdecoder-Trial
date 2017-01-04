var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var digits =[];
canvas.width=window.innerWidth-25;
canvas.height=window.innerHeight-50;
//ctx.fillStyle="rgb(255,0,0)";
addDigits();
render();
function addDigits()
{
	for(i=0;i<=14;i++)
	{
		digits[i]={};
		digits[i].digit=Math.floor(Math.random()*10);
		digits[i].speedX = Math.floor(10*Math.random())-5;
		digits[i].speedY = Math.floor(10*Math.random())-5;
		digits[i].posX = Math.floor(canvas.width*Math.random());
		digits[i].posY = Math.floor(canvas.height*Math.random());
		//Font Size from 30px to 230px
		digits[i].fontSize = Math.floor(200*Math.random())+30;
		digits[i].fontSpeed = Math.floor(4*Math.random())+1;
 		ctx.font = digits[i].fontSize+"px Gloria Hallelujah";
 		rc = Math.floor(256*Math.random());
		gc = Math.floor(256*Math.random());
		bc = Math.floor(256*Math.random());
		digits[i].rc = rc;
		digits[i].gc = gc;
		digits[i].bc = bc;
		ctx.fillStyle = "rgb("+digits[i].rc+","+digits[i].gc+','+digits[i].bc+")";
		ctx.fillText(digits[i].digit,digits[i].posX,digits[i].posY)
		//digits[i].tiltAngle = 
	}
}
function render()
{
	animate();
	window.requestAnimationFrame(render);
}
function animate()
{
	var positionX , positionY;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(i=0;i<=14;i++)
	{
		digits[i].posX+=digits[i].speedX;
		digits[i].posY+=digits[i].speedY;
		digits[i].fontSize+=digits[i].fontSpeed;
		if(digits[i].posX>=canvas.width-100||digits[i].posX<=0)
		{
			digits[i].speedX=-digits[i].speedX;
		}
		if(digits[i].posY>=canvas.height||digits[i].posY<=20)
		{
			digits[i].speedY=-digits[i].speedY;
		}
		if(digits[i].fontSize>=230||digits[i].fontSize<=30)
			digits[i].fontSpeed=-digits[i].fontSpeed		
		ctx.font = digits[i].fontSize+"px Gloria Hallelujah";
		ctx.fillStyle = "rgb("+digits[i].rc+","+digits[i].gc+','+digits[i].bc+")";
		ctx.fillText(digits[i].digit,digits[i].posX,digits[i].posY);
	} 
}