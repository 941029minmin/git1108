$(function(){
	//banner轮播
	banner()	
})
function banner(){
	var cw=document.documentElement.clientWidth;
	$(".imgbox a").css("left",cw+"px").eq(0).css("left","0");
	var t=setInterval(move,5000)
	var next=0;
	var now=0;
	function arg(cw){
		$(".imgbox a").eq(next).css("left",cw+"px");
		$(".imgbox a").eq(now).css("left","0");
		$(".imgbox a").eq(next).animate({left:"0"});
		$(".imgbox a").eq(now).animate({left:-cw+"px"});
		$(".cicrle li").removeClass().eq(next).addClass("active");
		now=next;
	}
	function move(type,speed){
		type=type||"right";
		if(type=="right"){
			next++;
				if(next>=$(".imgbox a").length){
				next=0;
			}
			arg(cw)
		}else if(type=="left"){
			next--;
			if(next<=0){
				next=$(".imgbox a").length-1;	
		    }
		    arg(-cw);
	    }
	}
	$(".banner").mouseover(function(){
		clearInterval(t)
	})
	$(".banner").mouseout(function(){
		t=setInterval(move,5000)
	})
	$(".cicrle li").each(function(index,obj){
		$(obj).click(function(){
			if(index<now){
				next=index;
				arg(-cw);
			}else{
				next=index;
				arg(cw);
			}
		})
	})
	$(".btn_l").click(function(){
		move("left");
	})
	$(".btn_r").click(function(){
		move("right");
	})	
}