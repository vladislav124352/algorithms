# -----------------------------------------------------------
#
# Selection Sort
#
# TIME COMPLEXITY: O(n^2)
# MEMORY COMPLEXITY: O(n)
#
# The selection sort algorithm sorts an array by repeatedly
# finding the minimum element (considering ascending order)
# from unsorted part and putting it at the beginning. The
# algorithm maintains two subarrays in a given array.
#
# -----------------------------------------------------------

def selection_sort(arr):
	for i in range(len(arr) - 1):
		min_i = i
		for j in range(i + 1, len(arr)):
			if arr[min_i] > arr[j]:
				min_i = j
		if min_i != i:
			temp = arr[i]
			arr[i] = arr[min_i]
			arr[min_i] = temp

arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)