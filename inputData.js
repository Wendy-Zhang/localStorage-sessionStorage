 window.onload = function() {  
   
	$('#saveData').click(function(){ //输入框内容
      if($('#msg').val()){
      	sessionStorage.setItem("data", $('#msg').val() );
      	alert("信息已经保存到data中");
      }else{
      	alert("信息不能为空!");
      }
	})

	$('#getData').click(function(){ //获取输入栏的存储信息
		var messages = sessionStorage.getItem("data");
		if(messages){
			alert("data中的信息是:"+ messages)
		}else{
			alert("没有获取到任何信息！")
		}
	})

	$('#delData').click(function(){//移除存储
		var messages = sessionStorage.getItem("data");
		if(messages){
			sessionStorage.removeItem("data");
			alert("已经删除信息！");
			alert(sessionStorage.getItem('data'));//验证是否把存储的信息从客户端存储中移除
		}else{
			alert("文本内容为空~")
		}
	})

	 
}