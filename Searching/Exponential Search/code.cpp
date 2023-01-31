// -----------------------------------------------------------
//
// Exponential Search
//
// TIME COMPLEXITY: O(log k)
// MEMORY COMPLEXITY: O(1)
//
// Exponential search is a search algorithm for an 
// increasing and ordered sequence, typically 
// applied to an array or list.It is a combination 
// of binary search and linear search, with the aim 
// of reducing the number of elements to be examined. 
// It works by starting with a range that is larger 
// than the desired index, then repeatedly dividing 
// the range in half until the target value is found 
// or it is clear that the target value is not present 
// in the array.The time complexity of exponential 
// search is O(log k) where k is the index of the target value.
// 
// For indexed arrays
//
// -----------------------------------------------------------

#include <iostream>
using namespace std;

int exp_search(int arr[], int length, int item);

int main() {
	int arr[10] = {-2, -1, 0, 6, 8, 10, 13, 16, 20, 25};
	int index = exp_search(arr, 10, 6);
	cout << index;
	return 0;
}

int exp_search(int arr[], int length, int item) {
	int border = 1;

	while (border < length - 1 && arr[border] < item)
		border *= 2;
	if (border > length - 1)
		border = length - 1;

	int start = border / 2;
	int end = border;

	while (start <= end) {
		int mid = (start + end) / 2;
		int mid_item = arr[mid];
		if (mid_item == item) return mid;
		if (mid_item < item) start = mid + 1;
		else end = mid - 1;
	}

	return -1;
}
