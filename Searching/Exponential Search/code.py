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
