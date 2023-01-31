# -----------------------------------------------------------
#
# Radix Sort
#
# TIME COMPLEXITY: O(n)
# MEMORY COMPLEXITY: O(n + k), k - number of digits
#
# Bitwise sorting is a sorting algorithm that does not use 
# comparison of elements among themselves. Designed to sort 
# data whose keys can be represented as a sequence of "bits", 
# each of which can be associated with an integer. For example, 
# it can be integers (numbers are written explicitly), strings 
# (each character is a digit). The algorithm boils down to 
# repeating the distribution account sorting algorithm for 
# each digit. An important point is the way the sort keys are 
# "aligned", that is, how to compare keys that have a 
# different number of digits. Depending on how to align the 
# sort keys, radix sort is divided into:
# 1) LSD (least significant digit)
# 2) MSD (most significant digit)
#
# -----------------------------------------------------------

# LSD (Least Significant Digit)
def get_number_of_digits_lsd(number):
    number_of_digits = 0
    while number > 0:
        number //= 10
        number_of_digits += 1
    return number_of_digits

def get_digit_lsd(number, i):
    return number % (10 ** (i + 1)) // (10 ** i)

def max_number_of_digits_lsd(numbers):
    number_of_digits = 1
    for number in numbers:
        current = get_number_of_digits_lsd(number)
        if current > number_of_digits:
            number_of_digits = current
    return number_of_digits

def counting_sort_lsd(arr, position):
    min_key = min([get_digit_lsd(number, position) for number in arr])
    max_key = max([get_digit_lsd(number, position) for number in arr])
    n = max_key - min_key + 1
    support = [0] * n
    for number in arr:
        support[get_digit_lsd(number, position) - min_key] += 1
    size = len(arr)
    for i in range(n - 1, -1, -1):
        size -= support[i]
        support[i] = size
    result = [0] * len(arr)
    for number in arr:
        result[support[get_digit_lsd(number, position) - min_key]] = number
        support[get_digit_lsd(number, position) - min_key] += 1
    return result

def radix_sort_lsd(arr):
    number_of_digits = max_number_of_digits_lsd(arr)
    for i in range(number_of_digits):
        arr = counting_sort_lsd(arr, i)
    return arr

arr_lsd = [12, 6, 29, 0, 2, 10, 8, 6, 17]
sorted_arr_lsd = radix_sort_lsd(arr_lsd)
print(sorted_arr_lsd)



# MSD (Most Significant Digit)
def get_number_of_digits_msd(number):
    number_of_digits = 0
    while number > 0:
        number //= 10
        number_of_digits += 1
    return number_of_digits

def get_digit_msd(number, i):
    return number % (10 ** (i + 1)) // (10 ** i)

def max_number_of_digits_msd(numbers):
    number_of_digits = 1
    for number in numbers:
        current = get_number_of_digits_msd(number)
        if current > number_of_digits:
            number_of_digits = current
    return number_of_digits

def counting_sort_msd(arr, position):
    min_key = min([get_digit_msd(number, position) for number in arr])
    max_key = max([get_digit_msd(number, position) for number in arr])
    n = max_key - min_key + 1
    support = [0] * n
    for number in arr:
        support[get_digit_msd(number, position) - min_key] += 1
    size = len(arr)
    for i in range(n - 1, -1, -1):
        size -= support[i]
        support[i] = size
    result = [0] * len(arr)
    for number in arr:
        result[support[get_digit_msd(number, position) - min_key]] = number
        support[get_digit_msd(number, position) - min_key] += 1
    return result

def radix_sort_msd(arr, position):
    if position == -1:
        return arr
    arr = counting_sort_msd(arr, position)
    return radix_sort_msd(arr, position - 1)

arr_msd = [12, 6, 29, 0, 2, 10, 8, 6, 17]
sorted_arr_msd = radix_sort_msd(arr_msd, max_number_of_digits_msd(arr_msd) - 1)
print(sorted_arr_msd)