# -----------------------------------------------------------
#
# Gnome Sort
#
# TIME COMPLEXITY: O(n^2)
# MEMORY COMPLEXITY: O(n)
#
# Dwarf sorting is based on the technique used by the common 
# Dutch garden gnome (Dutch tuinkabouter). This is the method 
# a garden gnome sorts.) This is the method by which a garden 
# gnome sorts a line of flower pots. Essentially it looks at 
# the current and previous garden pots: if they are in the 
# correct order, it steps forward one pot, otherwise it swaps
# them and steps back one pot. Boundary conditions: if there 
# is no previous pot, it steps forward; if there is no next 
# pot, he is finished.
#
# -----------------------------------------------------------

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