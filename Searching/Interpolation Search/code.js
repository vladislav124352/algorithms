function interpol_search(arr, item) {
	let left = 0;
	let right = arr.length - 1;

	while (arr[left] < item && arr[right] > item) {
		if (arr[left] === arr[right]) break;

		const index = parseInt((item - arr[left]) * (left - right) / (arr[left] - arr[right])) + left;

		if (arr[index] > item)
			right = index - 1;

		else if (arr[index] < item)
			left = index + 1;

		else return index;
	}

	if (arr[left] === item)
		return left;

	if (arr[right] === item)
		return right;

	return -1;
}

const arr = [-2, 0, 3, 5, 7, 9, 11, 15, 18];
const item = 5;
const index = interpol_search(arr, item);
console.log(index);
