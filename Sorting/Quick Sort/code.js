function quick_sort(array) {
    if (array.length < 2) return array;
    const pivot = array[Math.ceil(array.length / 2)];
    const arrayOfLess = array.filter((number) => number < pivot);
    const arrayOfGreater = array.filter((number) => number > pivot);
    return [...quick_sort(arrayOfLess), pivot, ...quick_sort(arrayOfGreater)];
}

console.log(quick_sort([25, 651, 2, 65, 12, 6, 1, 6, 89, 57]))