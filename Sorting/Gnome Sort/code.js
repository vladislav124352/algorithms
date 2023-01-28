function gnome_sort(arr) {
	let current_index = 1;
	let base_index = 0;

	while (base_index < arr.length - 1) {
		if (arr[base_index] <= arr[base_index + 1]) {
			base_index = current_index
			current_index++;
		} else {
			let temp = arr[base_index]
			arr[base_index] = arr[base_index + 1]
			arr[base_index + 1] = temp
			base_index--;

			if (base_index < 0) {
				base_index = current_index;
				current_index--;
			}
		}
	}
}

const arr = [12, 62, 9, 0, -21, 6, 25];
gnome_sort(arr);
console.log(arr);