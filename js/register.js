$(function(){
	/*获得焦点*/
	$('#txt,#verify,#pass,#repass,#email').focus(function(){
		$('.alert').hide();
	})
	//失去焦点验证条件
	//验证注册手机号码
	$('#txt').blur(function(){
		var txt=$('#txt').val();
		var regTxt=/^[1][34578][0-9]{9}$/;
		if (txt==""){
			$(".error-name").html("电话不能为空");
			$(".error-name").show();
			return;
		}
		if(!regTxt.test(txt)){
				$('.error-name').html('电话号码为十一位，请重新输入');
				$('.error-name').show();
				return;
			}else{
				$('.error-name').hide();
			}
	})
	//验证码
		$('#verify').blur(function(){
		var verify=$('#verify').val();
		var regVerify=/^[0-9]{6}$/;
		if (verify==""){
			$(".error-verify").html("验证码不能空 请任意输入6个数字");
			$(".error-verify").show();
			return;
		}
		if(!regVerify.test(verify)){
				$('.error-verify').html('不是6个数字');
				$('.error-verify').show();
				return;
			}else{
				$('.error-verify').hide();
			}
	})
	//密码验证
	$('#pass').blur(function(){
		var pass=$(this).val();
		var regPass=/^[a-z0-9_-]{6,18}$/;
		if (pass==""){
		$(".error-pass").html("密码不能为空");
			$(".error-pass").show();
			return;
		}
		if(!regPass.test(pass)){
			$(".error-pass").html("密码格式不正确");
			$(".error-pass").show();
			return;
		}else{
			$(".error-pass").hide();
		}
	});
	//确认密码
	$("#repass").blur(function(){
				var pass=$('#pass').val();
				var rePass=$(this).val();
				if (rePass==""){
					$(".error-repass").html("确认密码不能为空");
					$(".error-repass").show();
			return;
		}
				if(pass!=rePass){
					$(".error-repass").html("两次密码不一致")
					$(".error-repass").show();
					return;
				} else {
					$(".error-repass").hide();
					}	
	});
	//电子邮箱验证
	$('#email').blur(function(){
			var email = $(this).val();
			var regEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
		if (email =="") {
			$(".error-email").html("邮箱不能为空")
			$(".error-email").show();
			return;
		}
		if (!regEmail.test(email)) {
			$(".error-email").html("您输入的邮箱有误 请重新输入!");
			$(".error-email").show();
			return;
		} else {
			$(".error-email").hide();
		}
	})
	$('.skip').click(function(){
		$("#txt").trigger("blur");
		$("#verify").trigger("blur");
		$("#pass").trigger("blur");
		$("#repass").trigger("blur");
		$("#email").trigger("blur");
		if($('.alert:visible').size()>0){
			return;
		}else{
			window.location.href="login.html";
		}
	})
		
})





/*$(function(){
		//确认密码
			/*$("#repwd").blur(function(){
				var pwd=$(this).val;
				var repwd=$(this).val;
				if(pwd!=repwd){
					$(".form-error").html("两次密码不一致")
					$(".form-error").css("display", "block");
		} else {
			$(".form-error").css("display", "none");
		}	
	});
	//验证邮箱
		$('#E-mail').blur(function(){
			var email = $("#E-mail").val();
			var regEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
			if (!regEmail.test(email)) {
			$(".form-error").html("您输入的邮箱有误 请重新输入!");
			$(".form-error").css("display", "block")
		} else {
			$(".form-error").css("display", "none");
		}
		if (email =="") {
			$(".form-error").html("邮箱不能为空")
			$(".form-error").css("display", "block");
		} else {
			$(".form-error").css("display", "none");
		}
	})
	$('#gain').click(function(){
		$("#txt").trigger("blur");
		$("#pwd").trigger("blur");
		$("#verify").trigger("blur");
		$("#repwd").trigger("blur");
		$("#E-mail").trigger("blur");
		if($('.form-error:visible').size()>0){
			return;
		}else{
			window.location.href="login.html";
		}
	})
});
*/