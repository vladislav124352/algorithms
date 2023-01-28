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
