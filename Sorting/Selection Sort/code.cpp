//  -----------------------------------------------------------
// 
//  Selection Sort
// 
//  TIME COMPLEXITY: O(n^2)
//  MEMORY COMPLEXITY: O(n)
// 
//  The selection sort algorithm sorts an array by repeatedly
//  finding the minimum element (considering ascending order)
//  from unsorted part and putting it at the beginning. The
//  algorithm maintains two subarrays in a given array.
// 
//  -----------------------------------------------------------

#include <iostream>
using namespace std;

void selection_sort(int arr[], int length);

int main() {
	int arr[5] = {64, 25, 12, 22, 11};
	selection_sort(arr, 5);
	for (int num : arr)
		cout << num << " ";
	return 0;
}

void selection_sort(int arr[], int length) {
	for (int i = 0; i < length; i++) {
	int min_i = i;

	for (int j = i + 1; j < length; j++)
		if (arr[min_i] > arr[j])
			min_i = j;

		if (min_i != i) {
			int temp = arr[i];
			arr[i] = arr[min_i];
			arr[min_i] = temp;
		}
	}
}