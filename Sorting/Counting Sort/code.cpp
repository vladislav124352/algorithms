#include <iostream>
using namespace std;

void counting_sort(int arr[], int length);

int main() {
    int arr[11] = {2, 63, 26, 92, -12, 26, -2, -6, 0, 5, 16};
    counting_sort(arr, 11);
    for (int num : arr)
        cout << num << " ";
    return 0;
}

void counting_sort(int arr[], int length) {
    int index = 0;
    int min_item = arr[0];
    int max_item = arr[0];
    const int support_len = max_item - min_item + 1;
    int support[support_len];
    
    for (int i = 1; i < length; i++) {
        if (max_item < arr[i]) 
            max_item = arr[i];
        else if (min_item > arr[i]) 
            min_item = arr[i];
    }
    
    for (int i = 0; i < support_len; i++)
        support[i] = 0;
    for (int i = 0; i < length; i++)
        support[arr[i] - min_item]++;
        
    for (int i = 0; i < support_len; i++)
        for (int j = 0; j < support[i]; j++) {
            arr[index] = i + min_item;
            index++;
        }
}