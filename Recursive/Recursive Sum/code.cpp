#include <iostream>
using namespace std;

int recursive_sum(int arr[], int length);

int main() {
  int arr[6] = {25, 12, 65, 22, 11, 84};
  int sum = recursive_sum(arr, 6);
  cout << sum;
  return 0;
}

int recursive_sum(int arr[], int length) {
  if (length < 2) return arr[0];
  int new_length = length - 1;
  int new_arr[new_length];
  for (int i = 0; i < length - 1; i++)
    new_arr[i] = arr[i + 1];
  return arr[0] + recursive_sum(new_arr, new_length);
}