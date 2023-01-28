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