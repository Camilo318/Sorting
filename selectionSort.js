const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currMin = i
        let temp = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currMin]) {
                currMin = j
            }
        }
        arr[i] = arr[currMin]
        arr[currMin] = temp
    }
    console.log(arr)
}

selection(numbers)