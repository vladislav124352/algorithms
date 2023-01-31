# -----------------------------------------------------------
#
# Counting Sort
#
# TIME COMPLEXITY: O(n), k - range of numbers
# MEMORY COMPLEXITY: O(n)
#
# Counting sort is used to sort arrays of integers whose values 
# lie within a relatively narrow range. For example, if there 
# is an array of integers of size 1,000,000, whose values lie 
# in the range [0..1000], then this algorithm will show very 
# good performance. Separately, it is worth noting such a 
# feature of this sorting algorithm as the absence of a key 
# comparison operation.
#
# -----------------------------------------------------------

def counting_sort(arr):
    min_item = min(arr)
    max_item = max(arr)
    support = [0] * (max_item - min_item + 1)
    index = 0
    for i in range(len(arr)): 
        support[arr[i] - min_item] += 1
    for i in range(len(support)):
        for j in range(support[i]):
            arr[index] = i + min_item
            index += 1

arr = [2, 63, 26, 92, -12, 26, -2, -6, 0, 5, 16]
counting_sort(arr)
print(arr)            