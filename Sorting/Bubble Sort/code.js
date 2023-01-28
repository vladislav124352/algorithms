function bubble_sort(arr) {
	while (true) {
		let swapped = false;

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true
			}
		}

		if (!swapped) break
	}
}

const arr = [21, 5, 29, 10, -6, 2, 35, 0, -10];
bubble_sort(arr);
console.log(arr);