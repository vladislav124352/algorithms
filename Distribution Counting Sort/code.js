function dist_counting_sort(arr) {
	const min_item = Math.min(...arr);
	const max_item = Math.max(...arr);
	const length = max_item - min_item + 1;
	const support = new Array(length).fill(0);
	const sorted_arr = new Array(arr.length).fill(null);
	let size = arr.length;

	for (const item of arr)
		support[item - min_item] += 1;

	for (let i = length - 1; i > -1; i--) {
		size -= support[i];
		support[i] = size;
	}

	for (const item of arr) {
		const key = item - min_item;
		sorted_arr[support[key]] = item;
		support[key] += 1;
	}

	return sorted_arr;
}

const arr = [21, 6, 29, -2, -1, 0, 18, 10, 7, 5, 13, 16, 8, 6, 3];
const result = dist_counting_sort(arr);
console.log(result);
