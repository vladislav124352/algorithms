// -----------------------------------------------------------
//
// Bubble Sort
//
// TIME COMPLEXITY: O(n ^ 2)
// MEMORY COMPLEXITY: O(n)
//
// Bubble sort is a simple sorting algorithm.This sorting
// algorithm is comparison - based algorithm in which each
// pair of adjacent elements is compared and the elements
// are swapped if they are not in order.This algorithm is
// not suitable for large data sets as its average and
// worst case complexity are of Ο(n2) where n is the number
// of items.
//
// -----------------------------------------------------------

#include <iostream>
using namespace std;

void bubble_sort(int arr[], int length);

int main() {
  int arr[7] = {12, 62, 9, 0, -21, 6, 25};
  bubble_sort(arr, 7);
  for (int num : arr)
    cout << num << " ";
  return 0;
}

void bubble_sort(int arr[], int length) {
  while (true) {
    bool swapped = false;

    for (int i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        int temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1]= temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
}