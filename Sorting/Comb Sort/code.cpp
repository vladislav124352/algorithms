// -----------------------------------------------------------
//
// Comb Sort
//
// TIME COMPLEXITY: O(n^2)
// MEMORY COMPLEXITY: O(n)
//
// The comb sort algorithm is a variation of the bubble sort
// algorithm.The essence of the algorithm is to use a gap
// between the elements of the array, which is gradually
// reduced.The algorithm is based on the idea that the
// bubble sort algorithm is inefficient in the case when
// the array is sorted in the opposite direction.
//
// -----------------------------------------------------------

#include <iostream>
using namespace std;

void comb_sort(int arr[], int length);

int main() {
    int arr[7] = {12, 53, 9, 0, 2, -1, 5};
    comb_sort(arr, 7);
    for (int num : arr)
        cout << num << " ";
    return 0;
}

void comb_sort(int arr[], int length) {
    int step = length / 1.247;
    short swap = 0;

    while (step > 1 || swap > 0) {
        int i = 0;
        swap = 0;

        while (i + step < length) {
            if (arr[i] > arr[i + step]) {
                int temp = arr[i];
                arr[i] = arr[i + step];
                arr[i + step] = temp;
                swap++;
            }

            i++;
        }

        if (step > 1)
            step = step / 1.247;
    }
}