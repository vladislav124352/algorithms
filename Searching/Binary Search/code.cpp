// -----------------------------------------------------------
//
// Binary Search
//
// TIME COMPLEXITY: O(log n)
// MEMORY COMPLEXITY: O(n)
//
// The main idea of binary search is to find the middle element
// of the array and compare it with the item we are looking for.
// If the item is greater than the middle element, we search in
// the right half of the array.If the item is smaller than the
// middle element, we search in the left half of the array.
// We repeat this process until we find the item or the array
// is empty.
//
// -----------------------------------------------------------

#include <iostream>
#include <cmath>
using namespace std;

int binary_search(int arr[], int length, int item);

int main() {
	int arr[11] = {2, 14, 16, 19, 52, 74, 126, 167, 178, 200, 1255};
	int index = binary_search(arr, 11, 52);
	cout << index;
	return 0;
}

int binary_search(int arr[], int length, int item) {
	int left = 0;
	int right = length - 1;

	while (left <= right) {
		int mid = (left + right) / 2;
		int guess = arr[mid];
		if (guess == item) return mid;
		if (guess > item) right = mid - 1;
		else left = mid + 1;
	}

	return -1;
}