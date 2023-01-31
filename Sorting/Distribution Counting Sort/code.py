# -----------------------------------------------------------
#
# Distribution Counting Sort
#
# TIME COMPLEXITY: O(n)
# MEMORY COMPLEXITY: O(n + k), k - range of numbers
#
# Distributive counting sort is a variation of counting sort. 
# Used to sort arrays of data whose sort keys are represented 
# by integers and their values lie in a relatively narrow range. 
# For example, if you need to sort an array of cats by age, 
# then this algorithm will show very high performance. 
# The important and positive point is that it is a 
# stable sorting algorithm.
#
# -----------------------------------------------------------

def dist_counting_sort(arr):
	min_item = min(arr)
	max_item = max(arr)
	length = max_item - min_item + 1
	support = [0] * length
	for item in arr:
		support[item - min_item] += 1
	size = len(arr)
	for i in range(length - 1, -1, -1):
		size -= support[i]
		support[i] = size
	sorted_arr = [None] * len(arr)
	for item in arr:
		key = item - min_item
		sorted_arr[support[key]] = item
		support[key] += 1
	return sorted_arr

arr = [21, 6, 29, -2, -1, 0, 18, 10, 7, 5, 13, 16, 8, 6, 3]
result = dist_counting_sort(arr)
print(result)
