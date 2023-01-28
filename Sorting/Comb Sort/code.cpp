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