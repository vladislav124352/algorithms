def bubble_sort(arr):
	while True:
		swapped = False
		for i in range(len(arr) - 1):
			if arr[i] > arr[i + 1]:
				temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapped = True
		if not swapped:
			break

arr = [21, 5, 29, 10, -6, 2, 35, 0, -10]
bubble_sort(arr)
print(arr)

