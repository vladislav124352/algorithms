# -----------------------------------------------------------
#
# Ternary Search
#
# TIME COMPLEXITY: O(log n)
# MEMORY COMPLEXITY: O(n)
#
# The ternary search algorithm is a divide and conquer algorithm
# that can be used to find an element in an array. It is similar
# to binary search where we divide the array into two parts but
# in this algorithm, we divide the given array into three parts
# and determine which has the key (searched element).
#
# -----------------------------------------------------------

def ternary_search(arr, item):
	left = 0
	right = len(arr) - 1
	while left <= right:
		h = (right - left) // 3
		m1 = left + h
		m2 = right - h
		if arr[m1] == item: return m1
		if arr[m2] == item: return m2
		if arr[m1] < item and arr[m2] > item:
			left = m1 + 1
			right = m2 - 1
		elif arr[m1] > item: right = m1 - 1
		else: left = m2 + 1
	return -1

arr = [-2, 0, 5, 6, 9, 10, 12, 15, 20]
index = ternary_search(arr, 6)
print(index)
