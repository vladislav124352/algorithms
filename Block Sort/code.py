def insertion_sort(arr):
    for i in range(1, len(arr)):
        j = i - 1
        while j >= 0 and arr[j] > arr[i]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = arr[i]

def block_sort(arr, block_size):
    min_item = min(arr)
    max_item = max(arr)
    buckets = [[] for _ in range(block_size)]
    if min_item == max_item:
        return
    for item in arr:
        index = block_size * (item - min_item) // (max_item - min_item + 1)
        buckets[index].append(item)
    for bucket in buckets:
        if len(bucket) <= 32:
            insertion_sort(bucket)
        else:
            block_sort(bucket, block_size)
    insert_index = 0
    for bucket in buckets:
        for item in bucket:
            arr[insert_index] = item
            insert_index += 1

arr = [-1, 0, 16, 8, 5, 10, 3, 1, 15, 13]
block_sort(arr, 5)
print(arr)