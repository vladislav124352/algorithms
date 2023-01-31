//  -----------------------------------------------------------
//
//  Johnson - Trotter Algorithm
//
//  TIME COMPLEXITY: O(n!)
//  MEMORY COMPLEXITY: O(n)
//
//  The Johnson - Trotter algorithm is a permutation
//  generation algorithm that generates all permutations
//  of n elements using a bijective mapping.
//  It is based on the idea of finding and swapping adjacent
//  elements in a sequence to produce a new sequence until
//  all possible permutations have been generated.
//  The algorithm can be implemented in both the left - to - right
//  and right - to - left directions, with each direction
//  producing a different set of permutations.
//
//  -----------------------------------------------------------

#include <iostream>
using namespace std;

int find_max_mobile_index(int permutation[], int direction[], int n);
void change_direction(int permutation[], int direction[], int mobile_element, int n);
void swap(int arr[], int i, int j);
void generate_permutations(int n);

int main() {
    int n = 3;
    generate_permutations(n);
    return 0;
}

int find_max_mobile_index(int permutation[], int direction[], int n) {
    int index = -1;

    for (int i = 0; i < n; i++) {
        int next_index = i + direction[i];

        if (next_index >= 0 && next_index < n) {
            if (permutation[i] > permutation[next_index]) {
                if (index == -1)
                    index = i;
                else if (permutation[i] > permutation[index])
                    index = i;
                
            }
        }
    }

    return index;
}

void change_direction(int permutation[], int direction[], int mobile_element, int n) {

    for (int i = 0; i < n; i++)
        if (permutation[i] > mobile_element)
            direction[i] *= -1;
}

void swap(int arr[], int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

void generate_permutations(int n) {
    int permutation[n];
    int direction[n];

    for (int i = 0; i < n; i++) {
        permutation[i] = i + 1;
        direction[i] = -1;
    }
    
    for (int item : permutation)
        cout << item << " ";
    cout << endl;

    int mobile_element_index = find_max_mobile_index(permutation, direction, n);

    while (mobile_element_index != -1) {
        int mobile_element = permutation[mobile_element_index];
        int next_index = mobile_element_index + direction[mobile_element_index];
        swap(permutation, mobile_element_index, next_index);
        swap(direction, mobile_element_index, next_index);
        change_direction(permutation, direction, mobile_element, n);
        for (int i = 0; i < n; i++)
            cout << permutation[i] << " ";
        cout << endl;
        mobile_element_index = find_max_mobile_index(permutation, direction, n);
    }
}