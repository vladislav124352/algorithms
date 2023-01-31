//  -----------------------------------------------------------
// 
//  Ternary Search
// 
//  TIME COMPLEXITY: O(log n)
//  MEMORY COMPLEXITY: O(n)
// 
//  The ternary search algorithm is a divide and conquer algorithm
//  that can be used to find an element in an array. It is similar
//  to binary search where we divide the array into two parts but
//  in this algorithm, we divide the given array into three parts
//  and determine which has the key (searched element).
// 
//  -----------------------------------------------------------


#include <iostream>
using namespace std;

int ternary_seach(int arr[], int length, int item);

int main() {
    int arr[9] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
    int length = sizeof(arr) / sizeof(arr[0]);
    int index = ternary_seach(arr, length, 8);
    cout << index;
    return 0;
}

int ternary_seach(int arr[], int length, int item) {
    int left = 0;
    int right = length - 1;

    while (left <= right) {
        int h = (right - left) / 3;
        int m1 = left + h;
        int m2 = right - h;
        if (arr[m1] == item) return m1;
        if (arr[m2] == item) return m2;
        if (arr[m1] < item && arr[m2] > item) {
            left = m1 + 1;
            right = m2 - 1;
        }
        else if (arr[m1] > item) right = m1 - 1;
        else left = m2 + 1;
    }

    return -1;
}
