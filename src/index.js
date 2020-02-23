module.exports = function toReadable(number) {
	let result;
	let littleNumbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
		'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; // 0-19
		
	let bigNumbers = [0,'ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred'];	// 20,30,..100
	
	if (number < 20){
		return result = littleNumbers[number];
	}
	
	if (number > 19 && number < 100 && number % 10 === 0){
		return result = bigNumbers[number / 10];
	} else if (number > 19 && number < 100){
		return result = bigNumbers[Math.floor(number / 10)] + ' ' + littleNumbers[number % 10];
	}

	if ( number > 99 && number % 100 === 0){
		return result = littleNumbers[number / 100] + ' hundred';
	} else if ( number > 99 && number % 10 === 0){
		return result = littleNumbers[Math.floor(number / 100)] + ' hundred ' + 
		bigNumbers[number % 100 / 10];
	} else if (number % 100 < 20) {
		return result = littleNumbers[Math.floor(number / 100)] + ' hundred ' + littleNumbers[number % 100]
	} else {
		return result = littleNumbers[Math.floor(number / 100)] + ' hundred ' + 
		bigNumbers[Math.floor(number % 100 / 10)] + ' ' + littleNumbers[number % 100 % 10];		
	}
}
