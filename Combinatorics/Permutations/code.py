# -----------------------------------------------------------
# 
# Johnson-Trotter Algorithm 
# 
# TIME COMPLEXITY: O(n!)
# MEMORY COMPLEXITY: O(n)
# 
# The Johnson-Trotter algorithm is a permutation 
# generation algorithm that generates all permutations 
# of n elements using a bijective mapping. 
# It is based on the idea of finding and swapping adjacent 
# elements in a sequence to produce a new sequence until 
# all possible permutations have been generated. 
# The algorithm can be implemented in both the left-to-right 
# and right-to-left directions, with each direction 
# producing a different set of permutations. 
#  
# -----------------------------------------------------------

def find_max_mobile_index(permutation, direction):
	index = -1
	for i in range(len(permutation)):
		next_index = i + direction[i]
		if next_index >= 0 and next_index < len(permutation):
			if permutation[i] > permutation[next_index]:
				if index == -1:
					index = i
				elif permutation[i] > permutation[index]:
					index = i
	return index

def change_direction(permutation, direction, mobile_element):
	for i in range(len(permutation)):
		if permutation[i] > mobile_element:
			direction[i] = -direction[i]

def swap(arr, i, j):
	arr[i], arr[j] = arr[j], arr[i]

def generate_permutations(n):
	permutation = list(range(1, n + 1))
	direction = [-1] * n
	print(permutation)
	mobile_index = find_max_mobile_index(permutation, direction)
	while mobile_index != -1:
		mobile_element = permutation[mobile_index]
		next_index = mobile_index + direction[mobile_index]
		swap(permutation, mobile_index, next_index)
		swap(direction, mobile_index, next_index)
		change_direction(permutation, direction, mobile_element)
		print(permutation)
		mobile_index = find_max_mobile_index(permutation, direction)

generate_permutations(3)
