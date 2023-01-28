def selection_sort(arr):
	for i in range(len(arr) - 1):
		min_i = i
		for j in range(i + 1, len(arr)):
			if arr[min_i] > arr[j]:
				min_i = j
		if min_i != i:
			temp = arr[i]
			arr[i] = arr[min_i]
			arr[min_i] = temp

arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print(arr)