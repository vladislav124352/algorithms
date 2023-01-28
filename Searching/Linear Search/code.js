function linear_search(arr, item) {
	for (let i = 0; i < arr.length; i++)
		if (arr[i] === item)
			return i;
	return -1;
}

const arr = [-2, 0, 5, 7, 9, 12, 15, 16];
console.log(linear_search(arr, 7));
