function findEvenNum() {
	const numbers = Array(50).fill().map((num, index) => index +1);
	let result = [];

	for (let i=1; i<numbers.length; i+=2) {
		result.push(numbers[i])
	}

	return result
}

export default findEvenNum
