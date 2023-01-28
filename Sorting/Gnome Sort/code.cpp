#include <iostream>
using namespace std;

void gnome_sort(int arr[], int length);

int main() {
  int arr[7] = {12, 62, 9, 0, -21, 6, 25};
  gnome_sort(arr, 7);
  for (int num : arr)
    cout << num << " ";
  return 0;
}

void gnome_sort(int arr[], int length) {
  int current_index = 1, base_index = 0;

  while (base_index < length - 1) {
    if (arr[base_index] <= arr[base_index + 1]) {
      base_index = current_index;
      current_index++;
	} else {
      int temp = arr[base_index];
      arr[base_index] = arr[base_index + 1];
      arr[base_index + 1] = temp;
      base_index--;

      if (base_index < 0) {
        base_index = current_index;
        current_index++;
      }
    }
  }
}