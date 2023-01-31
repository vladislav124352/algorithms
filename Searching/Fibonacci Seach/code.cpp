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

#include <iostream>
#include <vector>
using namespace std;

/// Class Fibonacci Search
class FibonacciSearch {
private:
    int get_fibonacci_number(int n) {
        int first = 0;
        int second = 1;
        int length = 0;

        while (length < n) {
            int temp = second;
            second = first + second;
            first = temp;
            length++;
        }

        return first;
    }

    void start(int arr[], int length) {
        stop = false;
        int k = 0;

        while (get_fibonacci_number(k + 1) < length)
            k++;

        int m = get_fibonacci_number(k + 1) - (length + 1);
        i = get_fibonacci_number(k) - m;
        p = get_fibonacci_number(k - 1);
        q = get_fibonacci_number(k - 2);
    }

    void up_index() {
        if (p == 1)
            stop = true;
        i = i + q;
        p = p - q;
        q = q - p;
    }

    void down_index() {
        if (q == 0)
            stop = true;
        i = i - q;
        int temp = q;
        q = p - q;
        p = temp;
    }

public:
    int i = 0;
    int p = 0;
    int q = 0;
    bool stop = false;

    int search(int arr[], int length, int item) {
        start(arr, length);
        int result = -1;

        while (!stop) {
            if (i < 0)
                up_index();
            else if (i >= length)
                down_index();
            else if (arr[i] == item) {
                result = i;
                break;
            } else if (arr[i] < item)
                up_index();
            else
                down_index();
        }

        return result;
    }
};

int main() {
    int arr[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    FibonacciSearch* fs = new FibonacciSearch();
    int result = fs->search(arr, 10, 3);
    cout << result;
    return 0;
}