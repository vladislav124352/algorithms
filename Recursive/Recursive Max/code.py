def recursive_max(arr):
	if len(arr) < 2: return arr[0]
	return max(arr[0], recursive_max(arr[1:]))

max_number = recursive_max([12, 53, 1, 6, -1, 12])
print(max_number)