function shell_sort(arr) {
    // let power = 1;

    // while (parseInt((Math.pow(3, power) - 1) / 2)
    //     < parseInt(arr.length / 3))
    //     power++;

    // let step = parseInt((Math.pow(3, power) - 1) / 2);
    // power--;
    let step = parseInt(arr.length / 2);

    while (step > 0) {
        for (let i = step; i < arr.length; i++) {
            let j = i;

            while (j >= step && arr[j] < arr[j - step]) {
                let temp = arr[j];
                arr[j] = arr[j - step];
                arr[j - step] = temp;
                j -= step;
            }
        }

        step = parseInt(step / 2);
        // step = parseInt((Math.pow(3, power) - 1) / 2);
        // power--;
    }
}

const arr = [12, 5, 0, -5, 6, 16, 26, 7, 73, 57, 36];
shell_sort(arr);
console.log(arr);