#include <iostream>
using namespace std;

int linear_search(int arr[], int length, int item);

int main() {
	int arr[8] = {-2, 0, 5, 7, 8, 10, 14};
	int i = linear_search(arr, 8, 7);
	cout << i;
	return 0;
}

int linear_search(int arr[], int length, int item) {
	for (int i = 0; i < length; i++)
		if (arr[i] == item)
			return i;
	return -1;
}
