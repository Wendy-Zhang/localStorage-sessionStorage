$(function(){

function shopping(){
     //点击关闭隐藏图片存储数据
	$('.close').click(function(){
		localStorage.setItem("isClose","1");

	//判断localStroage有没有isClose
	if(localStorage.getItem("isClose")){
	   $('.header').hide();
	   localStorage.removeItem("isClose"); //清除存储数据后，刷新浏览器会再次出现广告
	}else{
	   $('.header').show();
	 }
    })
  }

   shopping();

})
