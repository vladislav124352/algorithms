def interpol_search(arr, item):
	left = 0
	right = len(arr) - 1
	while arr[left] < item and arr[right] > item:
		if arr[left] == arr[right]:
			break
		index = (item - arr[left]) * (left - right) // (arr[left] - arr[right]) + left
		if arr[index] > item:
			right = index - 1
		elif arr[index] < item:
			left = index + 1
		else:
			return index
	if arr[left] == item:
		return left
	if arr[right] == item:
		return right
	return -1

arr = [-2, 0, 3, 5, 7, 9, 11, 15, 18]
item = 5
index = interpol_search(arr, item)
print(index)
