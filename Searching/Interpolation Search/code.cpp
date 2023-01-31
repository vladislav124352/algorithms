// -----------------------------------------------------------
//
// Interpolation Search
//
// TIME COMPLEXITY: O(n)
// MEMORY COMPLEXITY: O(1)
//
// Interpolation search is an algorithm used 
// to find an item in a sorted list.It differs 
// from binary search in that it calculates 
// the position of the sought item by interpolating
// the value between the indices of the list 
// instead of dividing the list in half. 
// This approach can reduce the number of comparisons 
// required to locate an item, but is only 
// effective when the distribution of values 
// in the list is uniform.
//
// In the case of uniformly distributed data in 
// the sequence, the efficiency of the algorithm
// interpolation search exceeds the efficiency 
// of binary search.And only in case of failure
// fitted interpolation function or non - uniform 
// distribution of data(data are exponentially 
// distributed, and the interpolation function 
// is chosen to be linear) its efficiency may 
// decrease to linear.
//
// -----------------------------------------------------------


#include <iostream>
using namespace std;

int interpolation_search(int arr[], int length, int item);

int main() {
	int arr[10] = { -2, 0, 2, 3, 5, 8, 10, 12, 15, 18 };
	int item = 5;
	int index = interpolation_search(arr, 10, item);
	cout << index;
	return 0;
}

int interpolation_search(int arr[], int length, int item) {
	int left = 0;
	int right = length - 1;

	while (arr[left] < item && arr[right] > item) {
		if (arr[left] == arr[right]) break;

		int index = ((item - arr[left]) * (left - right)) / (arr[left] - arr[right]) + left;

		if (arr[index] > item)
			right = index - 1;

		else if (arr[index] < item)
			left = index + 1;

		else return index;
	}

	if (arr[left] == item)
		return left;

	if (arr[right] == item)
		return right;

	return -1;
}
