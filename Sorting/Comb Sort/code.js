// -----------------------------------------------------------
//
// Comb Sort
//
// TIME COMPLEXITY: O(n^2)
// MEMORY COMPLEXITY: O(n)
//
// The comb sort algorithm is a variation of the bubble sort
// algorithm.The essence of the algorithm is to use a gap
// between the elements of the array, which is gradually
// reduced.The algorithm is based on the idea that the
// bubble sort algorithm is inefficient in the case when
// the array is sorted in the opposite direction.
//
// -----------------------------------------------------------


function comb_sort(arr) {
    let step = Math.floor(arr.length / 1.247);
    let swap = 0;

    while (step > 1 || swap > 0) {
        let i = 0;
        swap = 0;

        while (i + step < arr.length) {
            if (arr[i] > arr[i + step]) {
                temp = arr[i];
                arr[i] = arr[i + step];
                arr[i + step] = temp;
                swap++;
            }

            i++;
        }

        if (step > 1)
            step = Math.floor(step / 1.247);
    }
}

const arr = [12, 53, 9, 0, 2, -1, 5];
comb_sort(arr);
console.log(arr);