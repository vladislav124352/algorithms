//  -----------------------------------------------------------
//
//  Johnson - Trotter Algorithm
//
//  TIME COMPLEXITY: O(n!)
//  MEMORY COMPLEXITY: O(n)
//
//  The Johnson - Trotter algorithm is a permutation
//  generation algorithm that generates all permutations
//  of n elements using a bijective mapping.
//  It is based on the idea of finding and swapping adjacent
//  elements in a sequence to produce a new sequence until
//  all possible permutations have been generated.
//  The algorithm can be implemented in both the left - to - right
//  and right - to - left directions, with each direction
//  producing a different set of permutations.
//
//  -----------------------------------------------------------

function find_max_mobile_index(permutation, direction) {
    let index = -1;

    for (let i = 0; i < permutation.length; i++) {
        let next_index = i + direction[i];

        if (next_index >= 0 && next_index < permutation.length) {
            if (permutation[i] > permutation[next_index]) {
                if (index === -1)
                    index = i;
                else if (permutation[i] > permutation[index])
                    index = i;
            }
        }
    }

    return index;
}

function change_direction(permutation, direction, mobile_element) {
    for (let i = 0; i < permutation.length; i++)
        if (permutation[i] > mobile_element)
            direction[i] = -direction[i];
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function generate_permutations(n) {
    let permutation = new Array(n).fill(0).map((_, i) => ++i);
    let direction = new Array(n).fill(-1);
    console.log(permutation);
    let mobile_index = find_max_mobile_index(permutation, direction);

    while (mobile_index != -1) {
        let mobile_element = permutation[mobile_index];
        let next_index = mobile_index + direction[mobile_index];
        swap(permutation, mobile_index, next_index);
        swap(direction, mobile_index, next_index);
        change_direction(permutation, direction, mobile_element);
        console.log(permutation);
        mobile_index = find_max_mobile_index(permutation, direction);
    }
}

generate_permutations(3)