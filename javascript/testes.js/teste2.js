mat = [
    [1,4,7],
    [2,5,8],
    [3,6,9],
]

for (i =0; i <3;i = i +1){
    for (j = 0; j<3; j = j +1){
        if(i == j){
            mat[i][j] = 0
        } else {
            mat[i][j]= 1
        }
    }
}

console.log(mat)