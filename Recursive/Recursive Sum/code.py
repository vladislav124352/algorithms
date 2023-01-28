def recursive_sum(arr):
	if len(arr) < 2: return arr[0]
	return arr[0] + recursive_sum(arr[1:])

arr = [1, 7, 9, 2, 4]
sum = recursive_sum(arr)
print(sum)