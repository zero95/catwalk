$(function() {
	$.ajax({
		type: "get",
		url: "../js/index.json",
		async: true,
		success: function(e) {
			//console.info(e.nav)
			var nav = e.nav;
			for (var i = 0; i < nav.length; i++) {
				var li = "<li class='nav-first-level'><a href='#'>" + nav[i].name + "</a></li>";
				$('.nav-link').append(li);
			}
		}
	})
});
$(function() {
	$.ajax({
		type: "get",
		url: "../js/index.json",
		async: true,
		success: function(str) {
			//console.info(str.logo)
			var logo = str.logo;
			for (var i = 0; i < logo.length; i++) {
				var li = "<li class='logo-first-level'><a href='#'>" + logo[i].name + "</a></li>";
				$('.logo-link').append(li);
			}
		}
	})
});
$(function() {
	//放大功能
	$(".bigPic").jqueryzoom({
		xzoom: 250, //放大区域宽度
		yzoom: 250, //放大区域高度
		preload: 1, //是否显示预加载
		offset: 10, //放大区域偏离小图的距离
		position: "right", //放大区域显示的位置（left,right(默认)）
		lens: true //是否显示小图上的透明区域
	})
});

$(function() {
	$(".distribution").mousemove(function() {
		$('.tiptools').show()
	})
	$(".distribution").mouseout(function() {
		$('.tiptools').hide()
	})
})
function showBox(num) {
	$('.active1').show();
	for (var i = 1; i <= 5; i++) {
		if (i == num) {
			var obj = document.getElementById("active" + num);
			obj.style.display = "block";
		} else {
			var obj = document.getElementById("active" + i);
			obj.style.display = "none";
		}
	}
}














