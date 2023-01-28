function recursive_sum(arr) {
    if (arr.length === 1) return arr[0];
	const new_arr = arr.slice(1, arr.length);
    return arr[0] + recursive_sum(new_arr);
}

const arr = [1, 7, 9, 2, 4];
const sum = recursive_sum(arr);
console.log(sum);
