function cocktail_sort(arr) {
    let left = 0;
    let right = arr.length - 1;
    let control = right;

    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                control = i;
            }
        }

        right = control;

        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                control = i;
            }
        }

        left = control;
    }
}

const arr = [12, 5, 16, -2, 9, 0];
cocktail_sort(arr);
console.log(arr);