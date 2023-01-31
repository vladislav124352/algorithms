//  -----------------------------------------------------------
// 
//  Quick Sort
// 
//  TIME COMPLEXITY: O(n log n)
//  MEMORY COMPLEXITY: O(n)
// 
//  Quick sort is a divide and conquer algorithm.It picks an
//  element as pivot and partitions the given array around the
//  picked pivot.There are many different versions of quickSort
//  that pick pivot in different ways.
// 
//  -----------------------------------------------------------

#include <iostream>
using namespace std;

void quickSort(int arr[], int left, int right) {
    int i = left, j = right;
    int tmp;
    int pivot = arr[(left + right) / 2];

    while (i <= j) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i <= j) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    };

    if (left < j) 
        quickSort(arr, left, j);
    if (i < right) 
        quickSort(arr, i, right);
}

int main() {
    int arr[] = { 3, 7, 8, 5, 2, 1, 9, 5, 4 };
    int n = sizeof(arr) / sizeof(*arr);
    quickSort(arr, 0, n - 1);
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}
