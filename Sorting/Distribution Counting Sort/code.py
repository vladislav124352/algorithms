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
