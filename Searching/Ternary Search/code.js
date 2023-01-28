function ternary_search(arr, item) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const h = parseInt((right - left) / 3);
		const m1 = left + h;
		const m2 = right - h;
		if (arr[m1] == item) return m1;
		if (arr[m2] == item) return m2;
		if (arr[m1] < item && arr[m2] > item) {
			left = m1 + 1
			right = m2 - 1
		}
		else if (arr[m1] > item) right = m1 - 1
		else left = m2 + 1
	}

	return -1;
}

const arr = [-2, 0, 2, 5, 6, 10, 13, 16, 20];
let index = ternary_search(arr, 5);
console.log(index);
