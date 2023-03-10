//  -----------------------------------------------------------
// 
//  Block Sort
// 
//  TIME COMPLEXITY: O(n - n^2/k), k - block size
//  MEMORY COMPLEXITY: O(n)
// 
//  This algorithm does not use comparison of elements 
//  among themselves.Purpose for sorting data, keys 
//  that can be given in the form or revealed numbers 
//  (algorithm for composed numbers[0, 1) but can also 
//  be given to determine numbers). It is based on the 
//  recursive splitting of keys into several blocks 
//  (subranges), as soon as the block size is less 
//  than or equal to a predetermined value(one of the 
//  optimal sizes is 32), then it is sorted by the 
//  entire optimal algorithm(for example, it is sorted 
//  by insertion). After that, the sorted blocks 
//  are combined into a sorted sequence.
// 
//  -----------------------------------------------------------

#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

void insertion_sort(vector<int>& arr);
void block_sort(vector<int>& arr, int block_size);

int main() {
    vector<int> arr = {12, 9, 2, 6, 4, 3, 5, 10, 8};
    block_sort(arr, 5);
    for (int item : arr) 
        cout << item << " ";
    return 0;
}

void insertion_sort(vector<int>& arr) {
    for (int i = 1; i < arr.size(); i++) {
        int key = arr[i];
        int j = i - 1;
 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
 
        arr[j + 1] = key;
    }
}

void block_sort(vector<int>& arr, int block_size) {
    int min_item = *min_element(arr.begin(), arr.end());
    int max_item = *max_element(arr.begin(), arr.end());
    if (min_item == max_item) return;

    vector<vector<int>> buckets(block_size);

    for (int item : arr) {
        int bucket_index = (block_size 
            * (item - min_item)) 
            / (max_item - min_item + 1);
        buckets[bucket_index].push_back(item);
    }

    for (vector<int>& bucket : buckets) {
        if (bucket.size() <= 32)
            insertion_sort(bucket);
        else
            block_sort(bucket, block_size);
    }

    int index = 0;

    for (vector<int>& bucket : buckets)
        for (int item : bucket)
            arr[index++] = item;
}