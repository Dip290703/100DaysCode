function transposeMatrix (matrix){
    let transposeMatrix = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < cols; i++) {
        transposeMatrix[i] = [];
        for (let j = 0; j < rows; j++) {
            transposeMatrix[i][j] = matrix[j][i];
           
        }
    }
    return transposeMatrix;
}
//console.log(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transposeMatrix([[1, 2], [3, 4], [5, 6]]));
function transposeMatrix2 (matrix){
    let transposeMatrix = []
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
       
        for (let j = 0; j < cols; j++) {
          if (!transposeMatrix[j]) {
            transposeMatrix[j] = [];
          }
           
            transposeMatrix[j][i] = matrix[i][j];
        }
    }
    return transposeMatrix;
}
//console.log(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transposeMatrix2([[1, 2], [3, 4], [5, 6]]));
