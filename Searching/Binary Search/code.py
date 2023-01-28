def binary_search(arr, item):
	start = 0
	end = len(arr) - 1
	while start <= end:
		mid = (start + end) // 2
		guess = arr[mid]
		if guess == item: return mid
		elif guess > item: end = mid - 1
		else: start = mid + 1
	return -1

arr = [2, 14, 16, 19, 52, 74, 126, 167, 178, 200, 1255]
print(binary_search(arr, 52))