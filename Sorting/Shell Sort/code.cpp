//  -----------------------------------------------------------
// 
//  Shell Sort
// 
//  TIME COMPLEXITY: O(n^2)
//  MEMORY COMPLEXITY: O(n)
// 
//  The Shell sort algorithm is an advanced version of sorting.
//  inserts. The idea of the Shell method is to compare elements 
//  that are not only side by side, but also at a certain 
//  distance from each other. In other words, this insertion 
//  sorting with preliminary "rough" passes.
// 
//  The optimality of the algorithm depends on the choice of the
//  step Sorting shells. Find out the dependence of the efficiency 
//  of the algorithm on the method step selection, 
//  implementation code changed. Now the step calculation is 
//  done with using an external tool.
//  
//  The following methods are used to calculate the step:
//  - Donald Shell O(N2) 
//  - Knuth O(N3/2) - recommended
//  - Hibbard O(N3/2) 
//  - Sedgwick O(N4/3) 
//  - Prat O(N∙ln(N)2) 
//  
//  -----------------------------------------------------------

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