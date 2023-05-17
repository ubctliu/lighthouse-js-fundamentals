const raining = true;
const temperature = 12;
const isCitizen = true;
const age = 26;

if (raining) {
	console.log("Don't forget your umbrella!");
} else {
	console.log("Leave your umbrella at home!");
}

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
} else 
if (temperature < 15) {
	console.log("short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

if (isCitizen && age > 18) {
	console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
	console.log("Maybe going outside isn't such a great idea...");
}
console.log("Now you're ready to go outside!");
