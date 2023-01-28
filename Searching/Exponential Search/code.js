function exp_search(arr, item) {
	let border = 1;

	while (border < arr.length - 1 && arr[border] < item)
		border *= 2
	if (border > arr.length)
		border = arr.length;

	let start = parseInt(border / 2);
	let end = border;

	while (start <= end) {
		let mid = parseInt((start + end) / 2)
		let mid_item = arr[mid];
		if (mid_item == item) return mid;
		if (mid_item < item) start = mid + 1;
		else end = mid - 1;
	}

	return -1;
}

const arr = [-2, -1, 0, 4, 6, 8, 10, 15, 20];
let index = exp_search(arr, 10);
console.log(index);

