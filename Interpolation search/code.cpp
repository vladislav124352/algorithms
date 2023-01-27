#include <iostream>
using namespace std;

int interpol_search(int arr[], int length, int item);

int main() {
	int arr[10] = { -2, 0, 2, 3, 5, 8, 10, 12, 15, 18 };
	int item = 5;
	int index = interpol_search(arr, 10, item);
	cout << index;
	return 0;
}

int interpol_search(int arr[], int length, int item) {
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
