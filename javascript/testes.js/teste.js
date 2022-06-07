array = [1,2,3,4,5,6,7]

for (i = 0; i < 7 ;i = i +1){
    if (i == 3){
        temp = array[i]
        array[i] = array[i - 3]
        array[i - 3] = temp
    }else if (i ==5){
        temp = array[i]
        array[i] = array[i-2]
        array[i - 2] = temp
    }
}

console.log(array)