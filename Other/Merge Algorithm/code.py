# ---------------------------------------------
# 
# Merge Sort Algorithm
# 
# TIME COMPLEXITY: O(n + m)
# MEMORY COMPLEXITY: O(n + m)
# 
# Merge sort is a sorting algorithm that works 
# by dividing an unsorted list into n sublists, 
# each containing one element, and then repeatedly 
# merging sublists to produce new, sorted sublists 
# until there is only one sublist remaining. 
# It uses a divide-and-conquer approach, 
# has a time complexity of O(n log n), and is a stable sort.
# 
# ---------------------------------------------

''' Merge Two Arrays '''

def merge_two_arrays(arr1, arr2):
	result = [0] * (len(arr1) + len(arr2))
	left = 0
	right = 0
	for i in range(len(result)):
		if left >= len(arr1):
			result[i] = arr2[right]
			right += 1
		elif right >= len(arr2):
			rusult[i] = arr1[left]
			left += 1
		elif arr1[left] < arr2[right]:
			result[i] = arr1[left]
			left += 1
		else:
			result[i] = arr2[right]
			right += 1
	return result

arr1 = [5, 7, 9, 10]
arr2 = [2, 6, 8, 11]
merged = merge_two_arrays(arr1, arr2)
print(merged)



''' Merge Two Subarrays '''

def merge_subarrays(arr, l_start, l_end, r_start, r_end):
	result = [0] * len(arr)
	left = l_start
	right = r_start
	for i in range(len(result)):
		if left > l_end:
			result[i] = arr[right]
			right += 1
		elif right > r_end:
			result[i] = arr[left]
			left += 1
		elif arr[left] < arr[right]:
			result[i] = arr[left]
			left += 1
		else:
			result[i] = arr[right]
			right += 1
	return result

arr = [5, 7, 9, 10, 2, 6, 8, 11]
merged = merge_subarrays(arr, 0, 3, 4, 7)
print(merged)
