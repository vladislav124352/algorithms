function insertion_sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        let j = i - 1;

        while (j >= 0 && arr[j] > arr[i]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = arr[i];
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