# -----------------------------------------------------------
#
# Shell Sort
#
# TIME COMPLEXITY: O(n^2)
# MEMORY COMPLEXITY: O(n)
#
# The Shell sort algorithm is an advanced version of sorting.
# inserts. The idea of the Shell method is to compare elements 
# that are not only side by side, but also at a certain 
# distance from each other. In other words, this insertion 
# sorting with preliminary "rough" passes.
#
# The optimality of the algorithm depends on the choice of the
# step Sorting shells. Find out the dependence of the efficiency 
# of the algorithm on the method step selection, 
# implementation code changed. Now the step calculation is 
# done with using an external tool.
# 
# The following methods are used to calculate the step:
# - Donald Shell O(N2) 
# - Knuth O(N3/2) - recommended
# - Hibbard O(N3/2) 
# - Sedgwick O(N4/3) 
# - Prat O(N∙ln(N)2) 
# 
# -----------------------------------------------------------

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