// -----------------------------------------------------------
//
// Gnome Sort
//
// TIME COMPLEXITY: O(n^2)
// MEMORY COMPLEXITY: O(n)
//
// Dwarf sorting is based on the technique used by the common 
// Dutch garden gnome (Dutch tuinkabouter). This is the method 
// a garden gnome sorts.) This is the method by which a garden 
// gnome sorts a line of flower pots. Essentially it looks at 
// the current and previous garden pots: if they are in the 
// correct order, it steps forward one pot, otherwise it swaps
// them and steps back one pot. Boundary conditions: if there 
// is no previous pot, it steps forward; if there is no next 
// pot, he is finished.
//
// -----------------------------------------------------------

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