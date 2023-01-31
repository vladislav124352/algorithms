# -----------------------------------------------------------
#
# Quick Sort
#
# TIME COMPLEXITY: O(n log n)
# MEMORY COMPLEXITY: O(n)
#
# Quick sort is a divide and conquer algorithm. It picks an
# element as pivot and partitions the given array around the
# picked pivot. There are many different versions of quickSort
# that pick pivot in different ways.
#
# -----------------------------------------------------------

def quick_sort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

arr = [3, 6, 8, 10, 1, 2, 1]
new_arr = quick_sort(arr)
print(new_arr)