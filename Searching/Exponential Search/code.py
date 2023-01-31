# -----------------------------------------------------------
#
# Exponential Search
#
# TIME COMPLEXITY: O(log k)
# MEMORY COMPLEXITY: O(1)
#
# Exponential search is a search algorithm for an 
# increasing and ordered sequence, typically 
# applied to an array or list. It is a combination 
# of binary search and linear search, with the aim 
# of reducing the number of elements to be examined. 
# It works by starting with a range that is larger 
# than the desired index, then repeatedly dividing 
# the range in half until the target value is found 
# or it is clear that the target value is not present 
# in the array. The time complexity of exponential 
# search is O(log k) where k is the index of the target value.
#
# For indexed arrays
# 
# -----------------------------------------------------------

def exp_search(arr, item):
	border = 1
	while border < len(arr) - 1 and arr[border] < item:
		border *= 2
	if border > len(arr) - 1:
		border = len(arr) - 1
	start = border // 2
	end = border
	while start <= end:
		mid = (start + end) // 2
		mid_item = arr[mid]
		if mid_item == item: return mid
		if mid_item < item: start = mid + 1
		else: end = mid - 1
	return -1

arr = [-2, -1, 0, 1, 6, 10, 16, 20, 25]
index = exp_search(arr, 16)
print(index)
