const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    const [inserted] = arr.splice(i, 1)
                    arr.splice(j, 0, inserted)
                }
            }
        }
    }

    console.log(arr)
}

insertionSort(numbers)