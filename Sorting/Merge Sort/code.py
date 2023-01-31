#  -----------------------------------------------------------
# 
#  Merge Sort
# 
#  TIME COMPLEXITY: O(n log n)
#  MEMORY COMPLEXITY: O(n)
# 
#  Merge sort is a divide and conquer algorithm. It divides
#  the input array into two halves, calls itself for the two
#  halves, and then merges the two sorted halves. The merge()
#  function is used for merging two halves. There are two 
#  versions of merge sort: recursive and classic the recursive 
#  version is more elegant, but the classic version is more 
#  efficient 
# 
#  -----------------------------------------------------------

def merge(arr, l_start, l_end, r_start, r_end):
	support = [i for i in arr]
	left = l_start
	right = r_start
	for i in range(l_start, r_end + 1):
		if left > l_end:
			arr[i] = support[right]
			right += 1
		elif right > r_end:
			arr[i] = support[left]
			left += 1
		elif support[left] < support[right]:
			arr[i] = support[left]
			left += 1
		else:
			arr[i] = support[right]
			right += 1
	return None



''' Classic Merge Sort '''

def merge_sort(arr):
	size = 1
	length = len(arr)
	while size < length:
		start = 0
		while start < length - size:
			l_start = start
			l_end = start + size - 1
			r_start = start + size
			r_end = min(start + 2*size - 1, length - 1)
			merge(arr, l_start, l_end, r_start, r_end)
			start += 2*size
		size *= 2

arr = [5, 8, 10, -6, 0, 16, 3, -1, 11]
merge_sort(arr)
print(arr)



''' Recursive Merge Sort '''

def merge_sort(arr, start=None, end=None):
	if start is None: start = 0
	if end is None: end = len(arr) - 1
	if end <= start: return None
	h = start + (end - start) // 2
	l_start = start
	l_end = h
	r_start = h + 1
	r_end = end
	merge_sort(arr, l_start, l_end)
	merge_sort(arr, r_start, r_end)
	merge(arr, l_start, l_end, r_start, r_end)

arr = [5, 8, 10, -6, 0, 16, 3, -1, 11]
merge_sort(arr)
print(arr)
