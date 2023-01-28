def counting_sort(arr):
    min_item = min(arr)
    max_item = max(arr)
    support = [0] * (max_item - min_item + 1)
    index = 0
    for i in range(len(arr)): 
        support[arr[i] - min_item] += 1
    for i in range(len(support)):
        for j in range(support[i]):
            arr[index] = i + min_item
            index += 1

arr = [2, 63, 26, 92, -12, 26, -2, -6, 0, 5, 16]
counting_sort(arr)
print(arr)            