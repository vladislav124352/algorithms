#include <iostream>
using namespace std;

void iinsertion_sort(int arr[], int length);

int main() {
  int arr[7] = {12, 62, 9, 0, -21, 6, 25};
  iinsertion_sort(arr, 7);
  for (int num : arr)
    cout << num << " ";
  return 0;
}

void iinsertion_sort(int arr[], int length) {
  for (int i = 1; i < length; i++) {
    int j = i;

    while ((j > 0) && (arr[j] < arr[j - 1])) {
      int temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
}