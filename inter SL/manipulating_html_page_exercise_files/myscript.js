$("document").ready(function(){
	//$("form").remove();// 


	var newDiv = $ (`
		<div> Div1 </div>
		<div> Div2 </div>
		<div> Div3 </div>
		<div> Div4 </div>
		<div> Div5 </div> 
		`);
	$("article").append(newDiv);

	$("input:text").val("Search for...");

	$("div").addClass("box"); //not sure 

	//var oldUrl = $(href).attr("href");
	//var newUrl = oldUrl.replace("www.codefactory.wien");
	$("a").attr("href","http://www.codefactory.wien");//
		

});