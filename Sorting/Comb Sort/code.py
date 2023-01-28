def comb_sort(arr):
    step = int(len(arr) / 1.247)
    swap = 0
    while step > 1 or swap > 0:
        swap = 0
        i = 0
        while i + step < len(arr):
            if arr[i] > arr[i + step]:
                temp = arr[i]
                arr[i] = arr[i + step]
                arr[i + step] = temp
                swap += 1
            i += 1
        if step > 1:
            step = int(step / 1.247)
            
arr = [12, 53, 9, 0, 2, -1, 5]
comb_sort(arr)
print(arr)