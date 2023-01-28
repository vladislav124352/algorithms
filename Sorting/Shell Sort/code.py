def shell_sort(arr):
    # power = 1
    # while (3**power - 1) // 2 < len(arr) // 3:
    #     power += 1
    # step = (3**power - 1) // 2
    # power -= 1
    step = len(arr) // 2
    while step > 0:
        for i in range(step, len(arr)):
            j = i
            while j >= step and arr[j] < arr[j - step]:
                temp = arr[j]
                arr[j] = arr[j - step]
                arr[j - step] = temp
                j -= step
        step = step // 2
        # step = (3**power - 1) // 2
        # power -= 1

arr = [12, 5, 0, -5, 6, 16, 26, 7, 73, 57, 36]
shell_sort(arr)
print(arr)