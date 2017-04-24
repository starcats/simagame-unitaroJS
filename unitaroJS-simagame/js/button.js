/*
button.js

var APPのonclickに以下を入れる
clickX = Math.round(x);
    clickY = Math.round(y);
    console.log("Xは: " + clickX);
    console.log("Yは: " + clickY);
  
*/

var button = {
  init:function(x,y,w,h,mes,color){
    this.w = w / 2;
    this.h=h;
    this.x=x;
    this.y=y;
    this.mes=mes;
    this.color=color;
    this.count=0;
    new unitaro.Task(buttonLine,this.x,this.y,this.w * 2,1,this.color);
    new unitaro.Task(buttonLine,this.x,(this.y + this.h),this.w * 2,1,this.color);
    new unitaro.Task(buttonLine,this.x - this.w,this.y + this.h / 2,1,this.h,this.color);
    new unitaro.Task(buttonLine,this.x + this.w,this.y + this.h / 2,1,this.h,this.color);
    new unitaro.Task(buttonText,this.x,this.y + this.h / 2 + 4,this.mes,'white');
  },
  
  update:function(age){
  },
  draw:function(){
  },
  onclick:function() {
  },
};

function checkButton(x,y,rangeX,rangeY) {
  if (clickX >= (x - rangeX / 2) && clickX <= (x + rangeX / 2) && clickY >= (y) && clickY <= (y + rangeY)) {
    return true;
  } else {
    return false;
  }
}
var buttonLine={
  init:function(x,y,w,h,color){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;
  },
};

var buttonText = {
  init:function(x,y,mes,color){ 
    this.x=x;
    this.y=y;
    this.mes=mes;
    this.color=color;
  },
  draw:function(){
    unitaro.dib.textout(this.x,this.y,this.mes,this.color,1000);
  }
};

