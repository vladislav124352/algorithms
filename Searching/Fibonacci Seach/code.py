# -----------------------------------------------------------
#
# Fibonacci Search
#
# TIME COMPLEXITY: O(log n)
# MEMORY COMPLEXITY: O(n)
#
# The Fibonacci search is a comparison-based technique
# that uses Fibonacci numbers to search an element 
# in a sorted array. The idea is to first find the 
# smallest Fibonacci number that is greater 
# than or equal to the length of the given array.
#
# -----------------------------------------------------------

'''Classic Fibonacci Search'''

class FibonacciSearch:
	def __init__(self):
		self.i = 0

		self.p = 0
		self.q = 0
		self.stop = False

	def get_fibonacci_number(self, n):
		first = 0
		second = 1
		length = 0
		while length < n:
			temp = second
			second = first + second
			first = temp
			length += 1
		return first

	def start(self, arr):
		self.stop = False
		k = 0
		n = len(arr)
		while self.get_fibonacci_number(k + 1) < len(arr):
			k += 1
		m = self.get_fibonacci_number(k + 1) - (n + 1)
		self.i = self.get_fibonacci_number(k) - m
		self.p = self.get_fibonacci_number(k - 1)
		self.q = self.get_fibonacci_number(k - 2)

	def up_index(self):
		if self.p == 1:
			self.stop = True
		self.i = self.i + self.q
		self.p = self.p - self.q
		self.q = self.q - self.p

	def down_index(self):
		if self.q == 0:
			self.stop = True
		self.i = self.i - self.q
		temp = self.q
		self.q = self.p - self.q
		self.p = temp

	def search(self, arr, item):
		self.start(arr)
		result = -1
		while not self.stop:
			if self.i < 0:
				self.up_index()
			elif self.i >= len(arr):
				self.down_index()
			elif arr[self.i] == item:
				result = self.i
				break
			elif item < arr[self.i]:
				self.down_index()
			else:
				self.up_index()
		return result


	
'''Optimized Fibonacci Search'''
class FibonacciSearch2:
    def __init__(self):
        self.stop = False
        self.fib_numbers = {}
        self.fib_numbers[0] = 0
        self.fib_numbers[1] = 1

    def get_fibonacci_number(self, n):
        if n in self.fib_numbers:
            return self.fib_numbers[n]
        else:
            result = self.get_fibonacci_number(n-1) + self.get_fibonacci_number(n-2)
            self.fib_numbers[n] = result
            return result

    def start(self, arr):
        self.stop = False
        k = 0
        n = len(arr)
        while self.get_fibonacci_number(k + 1) < len(arr):
            k += 1
        m = self.get_fibonacci_number(k + 1) - (n + 1)
        self.i = self.get_fibonacci_number(k) - m

    def binary_search(self, arr, item, start, end):
        if start > end:
            return -1
        mid = (start + end) // 2
        if arr[mid] == item:
            return mid
        elif arr[mid] > item:
            return self.binary_search(arr, item, start, mid - 1)
        else:
            return self.binary_search(arr, item, mid + 1, end)

    def search(self, arr, item):
        self.start(arr)
        result = -1
        if self.i < len(arr) and arr[self.i] == item:
            return self.i
        elif self.i > 0:
            result = self.binary_search(arr, item, 0, self.i-1)
        if result == -1 and self.i < len(arr):
            result = self.binary_search(arr, item, self.i+1, len(arr)-1)
        return result

arr = [-2, 0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
fs = FibonacciSearch2()
item = 7
print(fs.search(arr, item))
