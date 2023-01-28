def insertion_sort(arr):
	sorted_arr = arr
	for i in range(1, len(arr)):
		j = i
		while j > 0 and sorted_arr[j] < sorted_arr[j - 1]:
			temp = sorted_arr[j]
			sorted_arr[j] = sorted_arr[j - 1]
			sorted_arr[j - 1] = temp
			j -= 1
	return sorted_arr

sorted_arr = insertion_sort([12, 63, 7, 128, 274, 43, 19])
print(sorted_arr)