#include <iostream>
using namespace std;

int max = [](int a, int b){return a > b ? a : b;};
int recursive_max(int arr[], int length);

int main() {
  int arr[6] = {25, 12, 65, 22, 11, 84};
  int max_number = recursive_max(arr, 6);
  cout << max_number;
  return 0;
}

int recursive_max(int arr[], int length) {
  if (length < 2) return arr[0];
  int new_length = length - 1;
  int new_arr[new_length];
  for (int i = 0; i < length - 1; i++)
    new_arr[i] = arr[i + 1];
  return max(arr[0], recursive_max(new_arr, new_length));
}