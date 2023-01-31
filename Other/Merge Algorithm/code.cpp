// ---------------------------------------------
// 
// Merge Sort Algorithm
// 
// TIME COMPLEXITY: O(n + m)
// MEMORY COMPLEXITY: O(n + m)
// 
// Merge sort is a sorting algorithm that works 
// by dividing an unsorted list into n sublists, 
// each containing one element, and then repeatedly 
// merging sublists to produce new, sorted sublists 
// until there is only one sublist remaining. 
// It uses a divide - and - conquer approach, 
// has a time complexity of O(n log n), and is a stable sort.
// 
// ---------------------------------------------

#include <iostream>
using namespace std;

void merge_arrays(int arr1[], int arr1_length, int arr2[], int arr2_length, int result[], int result_length);
void merge_subarrays(int arr[], int arr_length, int result[], int l_start, int l_end, int r_start, int r_end);

int main() {
        // Merge Two Arrays
        int arr1[4] = {2, 8, 9, 11};
        int arr2[4] = {3, 5, 7, 10};
        int result[8] = {0};
        merge_arrays(arr1, 4, arr2, 4, result, 8);
        for (int item : result)
                cout << item << " ";
        cout << endl;

        // Merge Subarrays
        int arr[8] = {2, 8, 9, 11, 3, 5, 7, 10};
        int result2[8] = {0};
        merge_subarrays(arr, 8, result2, 0, 3, 4, 7);
        for (int item : result2)
                cout << item << " ";
        cout << endl;

       	return 0;
}

// Marge Two Arrays
void merge_arrays(int arr1[], int arr1_length, int arr2[], int arr2_length, int result[], int result_length) {
        int left = 0;
        int right = 0;

        for (int i = 0; i < result_length; i++) {
                if (left >= arr1_length) {
                        result[i] = arr2[right];
                        right++;
                } else if (right >= arr2_length) {
                        result[i] = arr1[left];
                        left++;
                } else if (arr1[left] < arr2[right]) {
                        result[i] = arr1[left];
                        left++;
                } else {
                        result[i] = arr2[right];
                        right++;
                }
        }
}


// Merge Subarrays
void merge_subarrays(int arr[], int arr_length, int result[], int l_start, int l_end, int r_start, int r_end) {
        int left = l_start;
        int right = r_start;
        int result_length = arr_length;

        for (int i = 0; i < result_length; i++) {
                if (left > l_end) {
                        result[i] = arr[right];
                        right++;
                } else if (right > r_end) {
                        result[i] = arr[left];
                        left++;
                } else if (arr[left] < arr[right]) {
                        result[i] = arr[left];
                        left++;
                } else {
                        result[i] = arr[right];
                        right++;
                }
        }
}
