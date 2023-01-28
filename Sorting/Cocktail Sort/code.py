def cocktail_sort(arr):
    left = 0
    right = len(arr) - 1
    control = right
    while left < right:
        for i in range(left, right):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                control = i
        right = control
        for i in range(right, left, -1):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                control = i
        left = control

arr = [12, 5, 16, -2, 9, 0]
cocktail_sort(arr)
print(arr)