#include <iostream>
using namespace std;

void cocktail_sort(int arr[], int length);

int main() {
    int arr[10] = {12, 3, 92, 25, 16, -10, 29, 3, 0, 76};
    cocktail_sort(arr, 10);
    for (int num : arr)
        cout << num << " ";
    return 0;
}

void cocktail_sort(int arr[], int length) {
    int left = 0;
    int right = length - 1;
    int control = right;

    while (left < right) {
        for (int i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                control = i;
            }
        }

        right = control;

        for (int i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                int temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                control = i;
            }
        }

        left = control;
    }
}