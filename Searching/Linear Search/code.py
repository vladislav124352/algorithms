# -----------------------------------------------------------
#
# Linear Search
#
# TIME COMPLEXITY: O(n)
# MEMORY COMPLEXITY: O(n)
#
# The linear search is a very simple search algorithm. It
# sequentially checks each element of the list until a match
# is found or the whole list has been searched.
#
# -----------------------------------------------------------

def linear_search(arr, item):
	for i in range(len(arr)):
		if arr[i] == item:
			return i
	return -1

arr = [-2, 0, 3, 5, 7, 9, 11, 15, 18, 21]
print(linear_search(arr, 7))
print(linear_search(arr, 6))
