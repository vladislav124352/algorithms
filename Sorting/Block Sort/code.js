//  -----------------------------------------------------------
// 
//  Block Sort
// 
//  TIME COMPLEXITY: O(n - n^2/k), k - block size
//  MEMORY COMPLEXITY: O(n)
// 
//  This algorithm does not use comparison of elements 
//  among themselves.Purpose for sorting data, keys 
//  that can be given in the form or revealed numbers 
//  (algorithm for composed numbers[0, 1) but can also 
//  be given to determine numbers). It is based on the 
//  recursive splitting of keys into several blocks 
//  (subranges), as soon as the block size is less 
//  than or equal to a predetermined value(one of the 
//  optimal sizes is 32), then it is sorted by the 
//  entire optimal algorithm(for example, it is sorted 
//  by insertion). After that, the sorted blocks 
//  are combined into a sorted sequence.
// 
//  -----------------------------------------------------------

function insertion_sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        let j = i - 1;
        let key = arr[i];

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

function block_sort(arr, block_size) {
    let min_item = Math.min(...arr);
    let max_item = Math.max(...arr);
    if (min_item === max_item) return;

    let buckets = new Array(block_size)
        .fill(0).map(() => []);

    for (let item of arr) {
        let bucket_index = Math.floor(block_size
            * (item - min_item)
            / (max_item - min_item + 1));
        buckets[bucket_index].push(item);
    }

    for (let bucket of buckets) {
        if (bucket.length <= 32)
            insertion_sort(bucket);
        else
            block_sort(bucket, block_size);
    }

    let index = 0;

    for (let bucket of buckets)
        for (let item of bucket)
            arr[index++] = item;
}

const arr = [12, 9, 2, 6, 4, 3, 5, 10, 8];
block_sort(arr, 5);
console.log(arr);