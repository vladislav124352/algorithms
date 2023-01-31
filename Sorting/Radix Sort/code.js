//  -----------------------------------------------------------
//  
//  Radix Sort
//  
//  TIME COMPLEXITY: O(n)
//  MEMORY COMPLEXITY: O(n + k), k - number of digits
//  
//  Bitwise sorting is a sorting algorithm that does not use 
//  comparison of elements among themselves.Designed to sort 
//  data whose keys can be represented as a sequence of "bits", 
//  each of which can be associated with an integer.For example, 
//  it can be integers(numbers are written explicitly), strings 
//  (each character is a digit).The algorithm boils down to 
//  repeating the distribution account sorting algorithm for 
//  each digit.An important point is the way the sort keys are 
//  "aligned", that is, how to compare keys that have a 
//  different number of digits.Depending on how to align the 
//  sort keys, radix sort is divided into:
//  1) LSD(least significant digit)
//  2) MSD(most significant digit)
// 
//  -----------------------------------------------------------


// LSD (Least Significant Digit)
const get_number_of_digits_lsd = (number) => {
    let digits = 0;

    while (number > 0) {
        number /= 10;
        digits++;
    }

    return digits;
}

const get_digit_lsd = (number, position) =>
    Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;

function get_max_number_of_digits_lsd(numbers) {
    let number_of_digits = 0;

    for (let number of numbers) {
        let current = get_number_of_digits_lsd(number);
        if (current > number_of_digits) number_of_digits = current;
    }

    return number_of_digits;
}

function counting_sort_lsd(numbers, position) {
    let min_key = Infinity, max_key = -Infinity;

    for (const number of numbers) {
        const temp = get_digit_lsd(number, position);
        if (temp < min_key) min_key = temp;
        else if (temp > max_key) max_key = temp;
    }

    const n = max_key - min_key + 1;
    const support = new Array(n).fill(0);

    for (const number of numbers)
        support[get_digit_lsd(number, position) - min_key]++;

    let size = numbers.length;

    for (let i = n - 1; i > -1; i--) {
        size -= support[i];
        support[i] = size;
    }

    const sorted = new Array(numbers.length).fill(0);

    for (const number of numbers) {
        let digit = get_digit_lsd(number, position);
        sorted[support[digit - min_key]] = number;
        support[digit - min_key]++;
    }

    return sorted;
}

function radix_sort_lsd(numbers) {
    const max_number_of_digits = get_max_number_of_digits_lsd(numbers);

    for (let i = 0; i < max_number_of_digits; i++)
        numbers = counting_sort_lsd(numbers, i);

    return numbers;
}

const arr_lsd = [12, 6, 29, 0, 2, 10, 8, 6, 17];
const sorted_arr_lsd = radix_sort_lsd(arr_lsd);
console.log(sorted_arr_lsd);



// MSD (Most Significant Digit)
const get_number_of_digits_msd = (number) => {
    let digits = 0;

    while (number > 0) {
        number /= 10;
        digits++;
    }

    return digits;
}

const get_digit_msd = (number, position) =>
    Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;

function get_max_number_of_digits_msd(numbers) {
    let number_of_digits = 1;

    for (let number of numbers) {
        let current = get_number_of_digits_msd(number);
        if (current > number_of_digits) number_of_digits = current;
    }

    return number_of_digits;
}

function counting_sort_msd(numbers, position) {
    let min_key = Infinity, max_key = -Infinity;

    for (const number of numbers) {
        const temp = get_digit_msd(number, position);
        if (temp < min_key) min_key = temp;
        else if (temp > max_key) max_key = temp;
    }

    const n = max_key - min_key + 1;
    const support = new Array(n).fill(0);

    for (let number of numbers)
        support[get_digit_msd(number, position) - min_key]++;

    let size = numbers.length;

    for (let i = n - 1; i > -1; i--) {
        size -= support[i];
        support[i] = size;
    }

    const sorted = new Array(numbers.length).fill(0);

    for (let number of numbers) {
        let digit = get_digit_msd(number, position);
        sorted[support[digit - min_key]] = number;
        support[digit - min_key]++;
    }

    return sorted;
}

function radix_sort_msd(numbers, position) {
    if (position === -1)
        return numbers;
    numbers = counting_sort_msd(numbers, position);
    return radix_sort_msd(numbers, position - 1);
}

const arr_msd = [12, 6, 29, 0, 2, 10, 8, 6, 17];
const sorted_arr_msd = radix_sort_msd(arr_msd, get_max_number_of_digits_msd(arr_msd) - 1);
console.log(sorted_arr_msd);