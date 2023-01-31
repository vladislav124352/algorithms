// -----------------------------------------------------------
//
// Counting Sort
//
// TIME COMPLEXITY: O(n), k - range of numbers
// MEMORY COMPLEXITY: O(n)
//
// Counting sort is used to sort arrays of integers whose values 
// lie within a relatively narrow range.For example, if there 
// is an array of integers of size 1, 000, 000, whose values lie 
// in the range[0..1000], then this algorithm will show very 
// good performance.Separately, it is worth noting such a 
// feature of this sorting algorithm as the absence of a key 
// comparison operation.
//
// -----------------------------------------------------------


function counting_sort(arr) {
    let index = 0
    const min_item = Math.min(...arr);
    const max_item = Math.max(...arr);

    const support = new Array(max_item - min_item + 1).fill(0);
    for (let num of arr)
        support[num - min_item]++;

    for (let i = 0; i < support.length; i++)
        for (let j = 0; j < support[i]; j++) {
            arr[index] = i + min_item;
            index++;
        }
}

const arr = [2, 63, 26, 92, -12, 26, -2, -6, 0, 5, 16]
counting_sort(arr)
console.log(arr)           
