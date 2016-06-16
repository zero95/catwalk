$(function() {
	/*获得焦点*/
	$("#txt").focus(function() {
		$('.error-name').hide();
	});
	$("#pwd").focus(function() {
		$('.error-pass').css("display","none");
	});
	/*失去焦点验证条件*/
	$('#txt').blur(function() {
		var uName = $(this).val();
		var regName = /^\w{6,12}$/;
		if (uName == "") {
			$(".error-name").html('用户名不能为空');
			$(".error-name").css("display","block");
			return;
		}
		if (!regName.test(uName)) {
			$('.error-name').html('您的用户名输入格式不符合 请重新输入');
			$('.error-name').css("display","block");
			return;
		} else {
			$('.error-name').hide();
		}
	});
	$('#pwd').blur(function() {
		var uPass = $(this).val();
		var regPass = /^.{6,12}$/;
		if (uPass == "") {
			$('.error-pass').html('密码不能为空');
			$(".error-pass").css("display","block");
			return;
		}
		if (!regPass.test(uPass)) {
			$('.error-pass').html('请输入6-12位的数字');
			$('.error-pass').show();
			return;
		} else {
			$('.error-pass').css("display","none");
		}
	});



	$('#btn').click(function() {
		//验证提交按钮 trigg在每一天匹配的元素上触发某类事件
		$('#txt').trigger('blur');
		$("#pwd").trigger('blur');
		//size Jquery对象中元素的个数（length也行）
		if ($('.alert:visible').size() > 0) {
			return;
		} else {
			location.href="../index.html";
		}
	});
})