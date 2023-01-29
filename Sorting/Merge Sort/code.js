function merge(arr, l_start, l_end, r_start, r_end) {
	let support = [...arr];
	let left = l_start;
	let right = r_start;

	for (let i = l_start; i < r_end + 1; i++) {
		if (left > l_end) {
			arr[i] = support[right];
			right++;
		} else if (right > r_end) {
			arr[i] = support[left];
			left++;
		} else if (support[left] < support[right]) {
			arr[i] = support[left];
			left++;
		} else {
			arr[i] = support[right];
			right++;
		}
	}
}



// Classic Merge Sort
function merge_sort(arr) {
	let size = 1;
	let length = arr.length;

	while (size < length) {
		let start = 0;

		while (start < length - size) {
			let l_start = start;
			let l_end = start + size - 1;
			let r_start = start + size;
			let r_end = Math.min(start + 2*size - 1, length - 1);
			merge(arr, l_start, l_end, r_start, r_end);
			start += 2*size;
		}

		size *= 2;
	}
}

const arr = [5, 10, 6, 8, 4, -1, 0, -2, 11];
merge_sort(arr);
console.log(arr);



// Recursive Merge Sort

function merge_sort2(arr, start, end) {
	start ??= 0
	end ??= arr.length - 1;
	if (end <= start) return;
	let h = start + Math.trunc((end - start) / 2);
	let l_start = start;
	let l_end = h;
	let r_start = h + 1;
	let r_end = end;
	merge_sort2(arr, l_start, l_end);
	merge_sort2(arr, r_start, r_end);
	merge(arr, l_start, l_end, r_start, r_end);
}

const arr2 = [5, 10, 6, 8, 4, -1, 0, -2, 11];
merge_sort2(arr2);
console.log(arr2);
