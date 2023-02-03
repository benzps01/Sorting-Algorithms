/*
Bubble Sorting is a type of sorting algorithm which works on its neighbouring elements.
It checks whether the adjacent/next element is greater than the previous element. If yes then it swaps their places, or else it check the next pair.
This happens over multiple iterations/passes and when it doesn't find a unSorted array, it breaks out of the loop.

Lets take an example array*/
let unSorted = [6,4,0,3,-2,1];

//1st approach is using 2 for loops to sort the array
for(let i = 0; i < unSorted.length; i++){
    for(let j = 0; j < unSorted.length; j++){
        if (unSorted[j] > unSorted[j+1]){
            let temp = unSorted[j];
            unSorted[j] = unSorted[j+1];
            unSorted[j+1] = temp;
        }
    }
}

console.log(unSorted);