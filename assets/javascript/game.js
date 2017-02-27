

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
	imageCrystal.attr("src", "../images/crystal.png");
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
$("#randomNum").html(randomNum);
$("#Wins").html("Wins: " + wins);
$("#Losses").html("Losses: " + losses);
$("#total").html("Total: " + yourScore);



};
startGame()
