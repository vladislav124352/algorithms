def linear_search(arr, item):
	for i in range(len(arr)):
		if arr[i] == item:
			return i
	return -1

arr = [-2, 0, 3, 5, 7, 9, 11, 15, 18, 21]
print(linear_search(arr, 7))
print(linear_search(arr, 6))
