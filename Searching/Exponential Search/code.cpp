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
