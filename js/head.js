/*$(function(){
				var mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
						  
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				 // 如果需要滚动条
				 scrollbar: '.swiper-scrollbar',
				 }) 
			})*/

/*===============================首页菜单================================*/

$(function(){
	$.getJSON("js/index.json",function(data){
		//console.info(data.logo)
		/*===============一级菜单==================*/
		for(var i=0;i<data.logo.length;i++){
			//console.info(data.logo[i].name)
			var navLi="<li class='drop-menu-effect m4'>"
			navLi += "<a>"
			navLi += "<span class='m4'>"+data.logo[i].name+"</span>"			
			navLi += "</a>"
			navLi += "</li>"			
			$(".logo-link").append(navLi)			
		}
		
		/*===============鼠标移入一级菜单时显示二级菜单==================*/
		$(".logo-warp .logo .logo-link li").hover(function(){
				$(this).css("background","#FFFFFF");
			
				var firstLv=$(this).index();
				//alert(firstLv)
				//console.info(firstLv)
				var second=data.logo[firstLv].child;
				//console.info(second)
				
				if($(this).find("div").size()==0){
					var navDiv="<div style='height:0px;opacity=0;display:none;' class='submenu'>"
					navDiv += "<div class='tyo_box'>"
					navDiv += "<div class='tyo_con'>"
					navDiv += "<div class='tyoCon_l'>"
					
					for(var j=0;j<second.length;j++){
						navDiv += "<dl>"
						navDiv += "<dt>"
						navDiv += "<h4>"
						navDiv += "<a>"+second[j].name+"</a>"
						navDiv += "</h4>"
						navDiv += "</dt>"
						//console.info(second[j].name)
						navDiv += "<dd>"
						for(var k=0;k<second[j].child.length;k++){
							//console.info(second[j].child[k].name)
							navDiv += "<a href='second[j].child[k].href'>"+second[j].child[k].name+"</a>"
						}
						navDiv += "</dd>"
						navDiv += "</dl>"
					}
					navDiv += "</div>"
					navDiv += "</div>"
					navDiv += "</div>"
					navDiv += "</div>"
					$(this).append(navDiv)
				}
				
				$(this).find("div").show();
				
		},function(){
			$(this).css("background","#f7f7f7");
			$(this).find("div").hide();
		});	
		
	})
})













