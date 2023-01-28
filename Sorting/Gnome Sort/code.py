def gnome_sort(arr):
	current_index = 1
	base_index = 0
	while base_index < len(arr) - 1:
		if arr[base_index] <= arr[base_index + 1]:
			base_index = current_index
			current_index += 1
		else:
			temp = arr[base_index]
			arr[base_index] = arr[base_index + 1]
			arr[base_index + 1] = temp
			base_index -= 1
			if base_index < 0:
				base_index = current_index
				current_index -= 1

arr = [12, 62, 9, 0, -21, 6, 25]
gnome_sort(arr)
print(arr)