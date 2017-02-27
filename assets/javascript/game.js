

//reset funtion
function reset() {
	yourScore = 0;
	randomNum = "";
	crystalNum = [];
}
//variables
var wins = 0,
	losses = 0,
	yourScore = 0,
	randomNum = "",
	crystalNum = [];

$("#randomNum").html(randomNum);
$("#Wins").html("Wins: " + wins);
$("#Losses").html("Losses: " + losses);
$("#total").html("Total: " + yourScore);
function startGame() {
//random Number
randomNum = Math.floor(Math.random() * 120) + 19;

//random number for crystalNum array
// }
crystalRand = Math.floor(Math.random() * 12) + 1;
{
	crystalNum.push(crystalRand);
}
crystalRand = Math.floor(Math.random() * 12) + 1;
{
	crystalNum.push(crystalRand);
}
crystalRand = Math.floor(Math.random() * 12) + 1;
{
	crystalNum.push(crystalRand);
}
crystalRand = Math.floor(Math.random() * 12) + 1;
{
	crystalNum.push(crystalRand);
}
console.log(crystalNum);


console.log("total " + yourScore);
//making four crystals with a random value
for (var i = 0; i < crystalNum.length; i++) {
	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src", "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.minerals.net%2FMineralImages%2Femerald-elongated-single-chivor-colombia.jpg&imgrefurl=http%3A%2F%2Fwww.minerals.net%2FImage%2F2%2F194%2FEmerald.aspx&docid=GhPXNz8Hbc2e7M&tbnid=TqNDRtzDVjeGEM%3A&vet=1&w=334&h=427&safe=off&bih=876&biw=870&q=crystal%20images&ved=0ahUKEwiB4tnZhq_SAhXLRyYKHWsQCs4QMwhOKAgwCA&iact=mrc&uact=8");
	imageCrystal.attr("data-crystalvalue", crystalNum[i]);
	$("#crystals").append(imageCrystal);
}
//onclick function
$(".crystal-image").on("click", function() {
	var crystalValue = ($(this).atrr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	yourScore += crystalValue;

	if (yourScore === randomNum) {
		wins++;
		reset()
	}

	else if (yourScore >= randomNum){
		losses++
		reset()
	}
});




};
startGame()
