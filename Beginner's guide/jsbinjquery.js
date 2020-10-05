$(document).ready(function() {

  var windowHeight = $(window).height();
  var headerBarHeight = $(".header").height();
  var codeContainerHeight = windowHeight - headerBarHeight;
  
  $(".codeContainer").height(codeContainerHeight + "px");

  $(".toggle").click(function() {
  	$(this).toggleClass("selected");
  	var activeDiv = $(this).html();
  	$("#" + activeDiv + "Container").toggle(250);
  	var showingDivs = $(".codeContainer").filter(function() {
  		return($(this).css("display") !="none");
  		}).length;

  	console.log(showingDivs);

  	var width = 100/showingDivs;
  	$(".codeContainer").width(width + "%");
	});

  $("#run").on("click", function() {
  	$("iframe").contents().find("html").html('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val());

  	document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
  })



});

