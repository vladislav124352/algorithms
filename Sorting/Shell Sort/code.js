//  -----------------------------------------------------------
// 
//  Shell Sort
// 
//  TIME COMPLEXITY: O(n^2)
//  MEMORY COMPLEXITY: O(n)
// 
//  The Shell sort algorithm is an advanced version of sorting.
//  inserts. The idea of the Shell method is to compare elements 
//  that are not only side by side, but also at a certain 
//  distance from each other. In other words, this insertion 
//  sorting with preliminary "rough" passes.
// 
//  The optimality of the algorithm depends on the choice of the
//  step Sorting shells. Find out the dependence of the efficiency 
//  of the algorithm on the method step selection, 
//  implementation code changed. Now the step calculation is 
//  done with using an external tool.
//  
//  The following methods are used to calculate the step:
//  - Donald Shell O(N2) 
//  - Knuth O(N3/2) - recommended
//  - Hibbard O(N3/2) 
//  - Sedgwick O(N4/3) 
//  - Prat O(N∙ln(N)2) 
//  
//  -----------------------------------------------------------


function shell_sort(arr) {
    // let power = 1;

    // while (parseInt((Math.pow(3, power) - 1) / 2)
    //     < parseInt(arr.length / 3))
    //     power++;

    // let step = parseInt((Math.pow(3, power) - 1) / 2);
    // power--;
    let step = parseInt(arr.length / 2);

    while (step > 0) {
        for (let i = step; i < arr.length; i++) {
            let j = i;

            while (j >= step && arr[j] < arr[j - step]) {
                let temp = arr[j];
                arr[j] = arr[j - step];
                arr[j - step] = temp;
                j -= step;
            }
        }

        step = parseInt(step / 2);
        // step = parseInt((Math.pow(3, power) - 1) / 2);
        // power--;
    }
}

const arr = [12, 5, 0, -5, 6, 16, 26, 7, 73, 57, 36];
shell_sort(arr);
console.log(arr);