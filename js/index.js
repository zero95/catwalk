$(function(){
	$('#header-top').load('template/head.html');
	$(".shop").mousemove(function() {
		$('.shop-i').show()
	})
	$(".shop").mouseout(function() {
		$('.shop-i').hide()
	})
});
$(function(){
	$('#footer-new').load('template/footer.html');
})
$(function(){
	/*-------------左右跳动-------------------*/
				$('.home_shortcut>a').mouseover(function(){
					$(this).animate({"margin-right":"20px"},"fast");
				});
				$('.home_shortcut>a').mouseout(function(){
					$(this).animate({"margin-right":"0px"},"fast");
				});
			/*-----------上下跳动------*/
				
				$('.yidong>a>img').mouseover(function(){
					$(this).stop().animate({"marginTop":20},"fast");
				});
				$('.yidong>a>img').mouseout(function(){
					$(this).stop().animate({"marginTop":0},"fast");
				});
			
			/*-------划过时显示透明度----*/	
			$('.opacity-img').mouseover(function(){
				$(this).fadeTo("slow",0.6,function(){
					$(this).fadeTo("slow",1);
				})
			})
			/*-----------划过时显示边框-------*/	
			$('.lazy').mouseenter(function(){
				$(this).css("border","1px solid #cccccc")
			})
			$('.lazy').mouseout(function(){
				$(this).css("border","0");
			})
			/*-----------放大缩小----------*/
			$('.home_beats>ul>li>a>.pic').mouseover(function(){
				$(this).stop().animate({height:"104%",width:"104%"},"slow");
			});
			$('.home_beats>ul>li>a>.pic').mouseout(function(){
				$(this).stop().animate({height:"300px",width:"600px"},"slow");
			});		
		});
$(function(){
		$.ajax({
			type:"get",
			url:"js/index.json",
			async:true,
			success:function(e){
				//console.info(e.nav)
				var nav=e.nav;
				for(var i=0;i<nav.length;i++){
					var li="<li class='nav-first-level'><a href='#'>"+nav[i].name+"</a></li>";
						$('.nav-link').append(li);
					}
				}
			})
		})
/*$(function(){
		$.ajax({
			type:"get",
			url:"js/index.json",
			async:true,
			success:function(str){
				//console.info(str.logo)
				var logo=str.logo;
				for(var i=0;i<logo.length;i++){
					var li="<li class='logo-first-level'><a href='#'>"+logo[i].name+"</a></li>";
					$('.logo-link').append(li);
				}*/
				/*for(var i=0;i<logo.child[i].length;i++){
					var dl="<dl class=''>";
					var dl="<dt><h3>";
					var dl+="<p>";
					dl+="<a href='"+logo[0].child.href+"'>"+logo[0].child.name+"</a>";
					dl+="</h3>";
					dl+="<p>";
					dl+="</dt>";
					dl+="</dl>";
					console.info(dl);*/
			/*}*/
			/*	//console.info(str.logo[0].child.length);
				var logoChild=str.logo[0].child;
				for(i=0;i<logoChild.length;i++){
					var dl="<dl>";
					var dt="<dt>"+logoChild[i].name+"</dt>";
					console.info(logoChild[i].name)
			
				}*/			
				
/*		
	})
})*/


