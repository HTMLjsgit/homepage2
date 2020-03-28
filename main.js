var num = 0;
$('#webBox').click(function(){
	var _class = $(this).attr("class");
	if(_class == "close"){
		$(this).addClass("open");
		$(this).removeClass("close");
		$('.webBoxGO').css('transform', 'TranslateY(-100px)')
		$(".webBoxGO").fadeOut('slow');
	}else{
		$(this).addClass("close");
		$(this).removeClass("open");
		$('.webBoxGO').fadeIn('slow');
		$('.webBoxGO').css('transform', 'TranslateY(0px)')
	}
});
$('#twitter').click(function(){
	var _class = $(this).attr("class");
	if(_class == "close"){
		$(this).addClass("open");
		$(this).removeClass("close");
		$('.twitterBoxGO').css('transform', 'TranslateY(-100px)');
		$('.twitterBoxGO').fadeOut('slow');
	}else{
		$(this).addClass("close");
		$(this).removeClass("open");
		$('.twitterBoxGO').css('transform', 'TranslateY(0px)');
		$('.twitterBoxGO').fadeIn('slow');
	}
});
$('#Qiita').click(function(){
	var _class = $(this).attr("class");
	if(_class == "close"){
		$(this).addClass("open");
		$(this).removeClass("close");
		$('.qiitaBoxGO').css('transform', 'TranslateY(-100px)');
		$('.qiiteAsobisarchText').css('color', '#000');
		$('.qiitaBoxGO').fadeOut('slow');
	}else{
		$(this).addClass("close");
		$(this).removeClass("open");
		$('.qiiteAsobisarchText').css('color', '#fff');
		$('.qiitaBoxGO').css('transform', 'TranslateY(0px)');
		$('.qiitaBoxGO').fadeIn('slow');
	}
});
$('#youtubeBox').click(function(){
	var _class = $(this).attr("class");
	if(_class == "close"){
		$(this).addClass("open");
		$(this).removeClass("close");
		$('.youtubeBoxGO').css('transform', 'TranslateY(-100px)');
		$('.kuroLifeText').css('color', '#000');
		$('.youtubeBoxGO').fadeOut('slow');
	}else{
		$(this).addClass("close");
		$(this).removeClass("open");
		$('.kuroLifeText').css('color', '#fff')
		$('.youtubeBoxGO').css('transform', 'TranslateY(0px)')
		$('.youtubeBoxGO').fadeIn('slow');
	}
});
$('#gameBox').click(function(){
	var _class = $(this).attr("class");
	if(_class == "close"){
		$(this).addClass("open");
		$(this).removeClass("close");
		$('.gameBoxGO').fadeOut("slow");
		$('.gameBoxGO').css('transform', 'TranslateY(-100px)');
	}else{
		$(this).addClass("close");
		$(this).removeClass("open");
		$('.gameBoxGO').fadeIn("slow");
		$('.gameBoxGO').css('transform', 'TranslateY(0px)');
	}
});

var $allMsg = $('#asobisarchText');
var $wordList = $("#asobisarchText").html().split("");
$("#asobisarchText").html("");
$.each($wordList, function(idx, elem){
	var newEL = $("<span/>").text(elem).css({ opacity: 0});
	newEL.appendTo($allMsg);
	newEL.delay(idx * 70);
	newEL.animate({ opacity: 1}, 1100);
})
