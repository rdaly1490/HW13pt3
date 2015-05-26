$(document).on('ready', start);

function start(eventObj) {

var $red = $("#redBtn");
var $blue = $("#blueBtn");
var $green = $("#greenBtn");

var $rText =$("#redTxt");
var $bText =$("#blueTxt");
var $gText =$("#greenTxt");

var $nav = $("#nav");

$bText.hide();
$gText.hide();

$red.on("click", hideBG);
$blue.on("click", hideRG);
$green.on("click", hideRB);
// $nav.on("click", activeTab);

function hideBG(e) {
	$bText.hide();
	$gText.hide();
	$rText.show();
	$red.css("backgroundColor", "gray");
	$blue.css("backgroundColor", "white");
	$green.css("backgroundColor", "white");
}
function hideRG(e) {
	$rText.hide();
	$gText.hide();
	$bText.show();
	$red.css("backgroundColor", "white");
	$blue.css("backgroundColor", "gray");
	$green.css("backgroundColor", "white");
}
function hideRB(e) {
	$rText.hide();
	$bText.hide();
	$gText.show();
	$red.css("backgroundColor", "white");
	$blue.css("backgroundColor", "white");
	$green.css("backgroundColor", "gray");
}

// function activeTab(e) {
// 	e.target.style.backgroundColor = "gray";
// }

$rText.css("border", "1px solid black");
$bText.css("border", "1px solid black");
$gText.css("border", "1px solid black");

}