#include <iostream>
using namespace std;

int sorted_arr[15] = {0};
void dist_counting_sort(int arr[], int arr_length);

int main() {
	int arr[15] = {21, 6, 29, -2, -1, 0, 18, 10, 7, 5, 13, 16, 8, 9, 3};
	dist_counting_sort(arr, 15);
	for (int item : sorted_arr)
			cout << item << " ";
	return 0;
}

void dist_counting_sort(int arr[], int arr_length) {
	int min_item = INT16_MAX;
	int max_item = INT16_MIN;
	
	for (int i = 0; i < arr_length; i++) {
		if (arr[i] > max_item) 
			max_item = arr[i];
		else if (arr[i] < min_item) 
			min_item = arr[i];
	}
	
	int length = max_item - min_item + 1;
	int support[length] = {0};
	int size = arr_length;

	for (int i = 0; i < arr_length; i++)
		support[arr[i] - min_item] += 1;

	for (int i = length - 1; i > -1; i--) {
		size -= support[i];
		support[i] = size;
	}

	for (int i = 0; i < arr_length; i++) {
		int key = arr[i] - min_item;
		sorted_arr[support[key]] = arr[i];
		support[key]++;
}
}
