const max = (num1, num2) => num1 > num2 ? num1 : num2;

function recursive_max(arr) {
    if (arr.length < 2) return arr[0];
	const new_arr = arr.slice(1, arr.length);
	return max(arr[0], recursive_max(new_arr));
}

const max_number = recursive_max([12, 53, 1, 6, -1, 12]);
console.log(max_number);
