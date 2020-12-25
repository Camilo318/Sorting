const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function bubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            const temp = arr[j]
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr)
}

bubble(numbers)