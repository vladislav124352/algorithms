#include <iostream>
#include <cmath>
using namespace std;

int binary_search(int arr[], int length, int item);

int main() {
  int arr[11] = {2, 14, 16, 19, 52, 74, 126, 167, 178, 200, 1255};
  int index = binary_search(arr, 11, 52);
  cout << index;
  return 0;
}

int binary_search(int arr[], int length, int item) {
  int left = 0;
  int right = length - 1;

  while (left <= right) {
    int mid = (left + right) / 2;
    int guess = arr[mid];
    if (guess == item) return mid;
    if (guess > item) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}