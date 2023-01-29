#include <iostream>
#include <cmath>
using namespace std;

void merge(int arr[], int arr_length, int l_start, int l_end, int r_start, int r_end);
void merge_sort(int arr[], int arr_length);
void merge_sort2(int arr[], int arr_length, int start = 0, int end = -1);

int main() {
        // Classic Merge Sort
        int arr[8] = {12, 5, 2, -7, 0, -2, 8, 10};
        int result[8] = {0};
        merge_sort(arr, 8);
        for (int item : arr)
                cout << item << " ";
        cout << endl;

        // Recursive Merge Sort
        int arr2[8] = {12, 5, 2, -7, 0, -2, 8, 10};
        int result2[8] = {0};
        merge_sort2(arr2, 8);
        for (int item : arr)
                cout << item << " ";
        cout << endl;

        return 0;
}

void merge(int arr[], int arr_length, int l_start, int l_end, int r_start, int r_end) {
        int support[arr_length] = {0};
        for (int i = 0; i < arr_length; i++)
                support[i] = arr[i];
        int left = l_start;
        int right = r_start;

        for (int i = l_start; i < r_end + 1; i++) {
                if (left > l_end) {
                        arr[i] = support[right];
                        right++;
                } else if (right > r_end) {
                        arr[i] = support[left];
                        left++;
                } else if (support[left] < support[right]) {
                        arr[i] = support[left];
                        left++;
                } else {
                        arr[i] = support[right];
                        right++;
                }
        }
}

// Classic Merge Sort
void merge_sort(int arr[], int arr_length) {
        int size = 1;
        int length = arr_length;

        while (size < length) {
                int start = 0;

                while (start < length - size) {
                        int l_start = start;
                        int l_end = start + size - 1;
                        int r_start = start + size;
                        int r_end = min(start + 2*size - 1, length - 1);
                        merge(arr, arr_length, l_start, l_end, r_start, r_end);
                        start += 2*size;
                }

                size *= 2;
        }
}

// Recursive Merge Sort
void merge_sort2(int arr[], int arr_length, int start, int end) {
    if (end < 0) end = arr_length - 1;
    if (end <= start) return;
    int h = start + (end - start) / 2;
    int l_start = start;
    int l_end = h;
    int r_start = h + 1;
    int r_end = end;
    merge_sort2(arr, arr_length, l_start, l_end);
    merge_sort2(arr, arr_length, r_start, r_end);
    merge(arr, arr_length, l_start, l_end, r_start, r_end);
}
