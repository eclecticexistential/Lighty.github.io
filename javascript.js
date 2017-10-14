var $leftButton=$('<input type="button" id="leftButton" value="<">');
var $rightButton=$('<input type="button" id="rightButton" value=">">');
var $titleButton= $('<input type="button" id="titleButton" value=">">');
var $slider= $('<input type="button" id="slider">');
var $titlePage=$('.titlePage');
var $coverImage =$('<img src="img/LightyCover-FirstDraft.png"/>');
var $book=$(".book");
var $leftPage=$("<div id='leftPage'></div>");
var $rightPage=$(".rightPage");

$book.append($titleButton);
$titlePage.append($coverImage);
$rightPage.hide();

$book.on("click",nextPage,false);

$titleButton.on("click",nextPage);

function nextPage(){
	$titleButton.hide();
	$titlePage.empty($coverImage);
	$titlePage.append($leftPage);
	appendButtons();
	appendSlider();
	$leftButton.show();
	$rightButton.show();
	$rightPage.show();
}

function appendButtons(){
	$book.append($leftButton);
	$book.append($rightButton);
}

function appendSlider(){
	$book.append($slider);
}

$slider.on("click",function(){
	$slider.animate({"margin-left":'+=600'},1000,"linear");
})