// -----------------------------------------------------------
//
// Fibonacci Search
//
// TIME COMPLEXITY: O(log n)
// MEMORY COMPLEXITY: O(n)
//
// The Fibonacci search is a comparison - based technique
// that uses Fibonacci numbers to search an element 
// in a sorted array.The idea is to first find the 
// smallest Fibonacci number that is greater 
// than or equal to the length of the given array.
//
// -----------------------------------------------------------

// Classic Fibonacci Search
class FibonacciSearch {
    constructor() {
        this.i = 0;
        this.p = 0;
        this.q = 0;
        this.stop = false;
    }

    get_fibonacci_number(n) {
        let first = 0;
        let second = 1;
        let length = 0;

        while (length < n) {
            let temp = first + second;
            first = second;
            second = temp;
            length++;
        }

        return first;
    }

    start(arr) {
        this.stop = false;
        let k = 0;
        let n = arr.length;

        while (this.get_fibonacci_number(k + 1) < n)
            k++;

        let m = this.get_fibonacci_number(k + 1) - (n + 1);
        this.i = this.get_fibonacci_number(k) - m;
        this.p = this.get_fibonacci_number(k - 1);
        this.q = this.get_fibonacci_number(k - 2);
    }

    up_index() {
        if (this.p === 1)
            this.stop = true;
        this.i = this.i + this.q;
        this.p = this.p - this.q;
        this.q = this.q - this.p;
    }

    down_index() {
        if (this.q === 0)
            this.stop = true;
        this.i = this.i - this.q;
        let temp = this.q;
        this.q = this.p - this.q;
        this.p = temp;
    }

    search(arr, item) {
        this.start(arr);
        let result = -1;

        while (!this.stop) {
            if (this.i < 0)
                this.up_index();
            else if (this.i >= arr.length)
                this.down_index();
            else if (arr[this.i] === item) {
                result = this.i;
                break;
            } else if (arr[this.i] > item)
                this.down_index();
            else
                this.up_index();
        }

        return result;
    }
}



/// Optimized Fibonacci Search
class FibonacciSearch2 {
    constructor() {
        this.stop = false;
        this.fib_numbers = {};
        this.fib_numbers[0] = 0;
        this.fib_numbers[1] = 1;
    }

    get_fibonacci_number(n) {
        if (n in this.fib_numbers)
            return this.fib_numbers[n];

        this.fib_numbers[n] = this.get_fibonacci_number(n - 1)
            + this.get_fibonacci_number(n - 2);
        return this.fib_numbers[n];
    }

    start(length) {
        this.stop = false;
        let k = 0;

        while (this.get_fibonacci_number(k + 1) < length)
            k++;

        let m = this.get_fibonacci_number(k + 1) - (length + 1);
        this.i = this.get_fibonacci_number(k) - m;
    }

    binary_search(arr, item, start, end) {
        if (start > end)
            return -1;

        let mid = parseInt((start + end) / 2);

        if (arr[mid] === item)
            return mid;
        else if (arr[mid] > item)
            return this.binary_search(arr, item, start, mid - 1);
        else
            return this.binary_search(arr, item, mid + 1, end);
    }

    search(arr, item) {
        this.start(arr.length);
        let result = -1;

        if (this.i < arr.length && arr[this.i] === item)
            return this.i;
        else if (this.i > 0)
            result = this.binary_search(arr, item, 0, this.i - 1);
        if (result === -1 && this.i < arr.length)
            result = this.binary_search(arr, item, this.i + 1, arr.length - 1);

        return result;
    }
}

const arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const item = 5;
const search = new FibonacciSearch2();
const result = search.search(arr, item);
console.log(result);