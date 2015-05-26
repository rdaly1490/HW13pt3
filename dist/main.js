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
$nav.on("click", activeTab);

function hideBG(e) {
	$bText.hide();
	$gText.hide();
	$rText.show();
}
function hideRG(e) {
	$rText.hide();
	$gText.hide();
	$bText.show();
}
function hideRB(e) {
	$rText.hide();
	$bText.hide();
	$gText.show();
}

function activeTab(e) {
	e.target.style.backgroundColor = "gray";
}

$rText.css("border", "1px solid black");
$bText.css("border", "1px solid black");
$gText.css("border", "1px solid black");

}