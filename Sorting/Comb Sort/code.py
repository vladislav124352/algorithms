# -----------------------------------------------------------
#
# Comb Sort
#
# TIME COMPLEXITY: O(n^2)
# MEMORY COMPLEXITY: O(n)
#
# The comb sort algorithm is a variation of the bubble sort
# algorithm. The essence of the algorithm is to use a gap
# between the elements of the array, which is gradually
# reduced. The algorithm is based on the idea that the
# bubble sort algorithm is inefficient in the case when
# the array is sorted in the opposite direction.
#
# -----------------------------------------------------------

def comb_sort(arr):
    step = int(len(arr) / 1.247)
    swap = 0
    while step > 1 or swap > 0:
        swap = 0
        i = 0
        while i + step < len(arr):
            if arr[i] > arr[i + step]:
                temp = arr[i]
                arr[i] = arr[i + step]
                arr[i + step] = temp
                swap += 1
            i += 1
        if step > 1:
            step = int(step / 1.247)
            
arr = [12, 53, 9, 0, 2, -1, 5]
comb_sort(arr)
print(arr)