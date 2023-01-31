# -----------------------------------------------------------
#
# Insertion Sort
#
# TIME COMPLEXITY: O(n^2)
# MEMORY COMPLEXITY: O(n)
#
# The insertion sort algorithm is a simple sorting algorithm
# that builds the final sorted array (or list) one item at a time.
# It is much less efficient on large lists than more advanced
# algorithms such as quicksort, heapsort, or merge sort.
#
# -----------------------------------------------------------

def insertion_sort(arr):
	sorted_arr = arr
	for i in range(1, len(arr)):
		j = i
		while j > 0 and sorted_arr[j] < sorted_arr[j - 1]:
			temp = sorted_arr[j]
			sorted_arr[j] = sorted_arr[j - 1]
			sorted_arr[j - 1] = temp
			j -= 1
	return sorted_arr

sorted_arr = insertion_sort([12, 63, 7, 128, 274, 43, 19])
print(sorted_arr)