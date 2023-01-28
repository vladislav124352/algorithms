#include <iostream>
#include <cmath>
using namespace std;

void shell_sort(int arr[], int length);

int main() {
    int arr[11] = {12, 5, 0, -5, 6, 16, 26, 7, 73, 57, 36};
    shell_sort(arr, 11);
    for (int num : arr)
        cout << num << " ";
    return 0;
}

void shell_sort(int arr[], int length) {
    // int power = 1;
    
    // while (((pow(3, power) - 1) / 2) < length / 3)
    //     power++;

    // int step = (pow(3, power) - 1) / 2;
    // power--;
    int step = length / 2;

    while (step > 0) {
        for (int i = step; i < length; i++) {
            int j = i;

            while (j >= step && arr[j] < arr[j - step]) {
                int temp = arr[j];
                arr[j] = arr[j - step];
                arr[j - step] = temp;
                j -= step;
            }
        }

        // step = (pow(3, power) - 1) / 2;
        // power--;
        step = step / 2;
    }
}