//  -----------------------------------------------------------
//  
//  Radix Sort
//  
//  TIME COMPLEXITY: O(n)
//  MEMORY COMPLEXITY: O(n + k), k - number of digits
//  
//  Bitwise sorting is a sorting algorithm that does not use 
//  comparison of elements among themselves.Designed to sort 
//  data whose keys can be represented as a sequence of "bits", 
//  each of which can be associated with an integer.For example, 
//  it can be integers(numbers are written explicitly), strings 
//  (each character is a digit).The algorithm boils down to 
//  repeating the distribution account sorting algorithm for 
//  each digit.An important point is the way the sort keys are 
//  "aligned", that is, how to compare keys that have a 
//  different number of digits.Depending on how to align the 
//  sort keys, radix sort is divided into:
//  1) LSD(least significant digit)
//  2) MSD(most significant digit)
// 
//  -----------------------------------------------------------

// LSD (Least Significant Digit)
#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

int get_number_of_digits_lsd(int number);
int get_digit_lsd(int number, int position);
int get_max_number_of_digits_lsd(vector<int> numbers);
vector<int> counting_sort_lsd(vector<int> numbers, int position);
vector<int> radix_sort_lsd(vector<int> numbers);

int main() {
    vector<int> arr_lsd = {12, 6, 29, 0, 2, 10, 8, 6, 17};
    vector<int> sorted_arr_lsd = radix_sort_lsd(arr_lsd);
    for(int item : sorted_arr_lsd)
        cout << item << " ";
    return 0;
}

int get_number_of_digits_lsd(int number) {
    int digits = 0;

    while (number > 0) {
        number /= 10;
        digits++;
    }

    return digits;
}

int get_digit_lsd(int number, int position) {
    return (int)(fabs(number) / pow(10, position)) % 10;
}

int get_max_number_of_digits_lsd(vector<int> numbers) {
    int number_of_digits = 0;

    for (int number : numbers) {
        int current = get_number_of_digits_lsd(number);
        if (current > number_of_digits) number_of_digits = current;
    }

    return number_of_digits;
}

vector<int> counting_sort_lsd(vector<int> numbers, int position) {
    int min_key = INT16_MAX, max_key = INT16_MIN;

    for (int number : numbers) {
        int temp = get_digit_lsd(number, position);
        if (temp < min_key) min_key = temp;
        else if (temp > max_key) max_key = temp;
    }

    int n = max_key - min_key + 1;
    vector<int> support(n, 0);

    for (int number : numbers)
        support[get_digit_lsd(number, position) - min_key]++;

    int size = numbers.size();

    for (int i = n - 1; i > -1; i--) {
        size -= support[i];
        support[i] = size;
    }

    vector<int> sorted(numbers.size());

    for (int number : numbers) {
        int digit = get_digit_lsd(number, position);
        sorted[support[digit - min_key]] = number;
        support[digit - min_key]++;
    }

    return sorted;
}

vector<int> radix_sort_lsd(vector<int> numbers) {
    int max_number_of_digits = get_max_number_of_digits_lsd(numbers);

    for (int i = 0; i < max_number_of_digits; i++)
        numbers = counting_sort_lsd(numbers, i);

    return numbers;
}



// MSD (Most Significant Digit)
#include <iostream>
#include <cmath>
using namespace std;

int get_number_of_digits_msd(int number);
int get_digit_msd(int number, int position);
int get_max_number_of_digits_msd(int numbers[], int size);
void counting_sort_msd(int numbers[], int size, int position);
void radix_sort_msd(int numbers[], int size, int position);

int main() {
    int arr_msd[] = {12, 6, 29, 0, 2, 10, 8, 6, 17};
    int size = sizeof(arr_msd) / sizeof(arr_msd[0]);
    radix_sort_msd(arr_msd, size, get_max_number_of_digits_msd(arr_msd, size) - 1);
    for(int i=0;i<size;i++)
        cout << arr_msd[i] << " ";
    return 0;
}

int get_number_of_digits_msd(int number) {
    int digits = 0;

    while (number > 0) {
        number /= 10;
        digits++;
    }

    return digits;
}

int get_digit_msd(int number, int position) {
    return (int)(fabs(number) / pow(10, position)) % 10;
}

int get_max_number_of_digits_msd(int* numbers, int size) {
    int number_of_digits = 1;

    for (int i = 0; i < size; i++) {
        int current = get_number_of_digits_msd(numbers[i]);
        if (current > number_of_digits) number_of_digits = current;
    }

    return number_of_digits;
}

void counting_sort_msd(int* numbers, int size, int position) {
    int min_key = INT16_MAX, max_key = INT16_MIN;

    for (int i = 0; i < size; i++) {
        int temp = get_digit_msd(numbers[i], position);
        if (temp < min_key) min_key = temp;
        else if (temp > max_key) max_key = temp;
    }

    int n = max_key - min_key + 1;
    int support[n];
    for (int i = 0; i < n; i++) support[i] = 0;

    for (int i = 0; i < size; i++)
        support[get_digit_msd(numbers[i], position) - min_key]++;

    int size_sorted = size;

    for (int i = n - 1; i > -1; i--) {
        size_sorted -= support[i];
        support[i] = size_sorted;
    }

    int sorted[size];

    for (int i = 0; i < size; i++) {
        int digit = get_digit_msd(numbers[i], position);
        sorted[support[digit - min_key]] = numbers[i];
        support[digit - min_key]++;
    }
    
    for(int i = 0; i < size; i++)
        numbers[i] = sorted[i];
}

void radix_sort_msd(int* numbers, int size, int position) {
    if (position == -1)
        return;
    counting_sort_msd(numbers, size, position);
    radix_sort_msd(numbers, size, position - 1);
}