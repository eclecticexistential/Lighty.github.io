var $leftButton=$("#leftButton");
var $rightButton=$("#rightButton");
var $titleButton= $('<input type="button" id="titleButton" value=">">');
var $navButtons=$('.navbuttons');
var $slider= $('<input type="button" id="slider">');
var $titlePage=$('.titlePage');
var $coverImage =$('<img src="img/LightyCover-FirstDraft.png"/>');
var $book=$(".book");
var $leftPage=$("<div id='leftPage'></div>");
var $rightPage=$(".rightPage");

$book.append($titleButton);
$titlePage.append($coverImage);
$rightPage.hide();
$leftButton.hide();
$rightButton.hide();

$book.on("click",nextPage,false);
$book.on("click",grow,false);

$titleButton.on("click",nextPage);

function nextPage(){
	$titleButton.hide();
	$coverImage.hide();
	$titlePage.css('width','22em').css('height','29em').css('margin-left',"26.5em").css('margin-right',"0");
	appendButtons();
	appendSlider();
	$rightPage.show().css('margin-right','26.75em').css('margin-top','2em');
}

function appendButtons(){
	$leftButton.show();
	$rightButton.show();
}

function appendSlider(){
	$book.append($slider);
}

$slider.on("click",grow);

function grow(){
	$slider.toggle("slide");
}