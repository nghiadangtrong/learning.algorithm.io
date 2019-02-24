function makeMatrixEmpty(m, n){
  let c = [];
  for(let i = 0; i < m; i++){
    c[i] = [];
    for(let j = 0; j < n; j++){
     c[i][j] = 0;  
    }
  }
  return c;
}

// Nhân hai ma trận Amxn * Bnxp = Cmxp (m rows, n cols )
function multiplicationMatrix(a = [], b = []){
  let m = a.length;
  let n = a[0].length;
  let p = b[0].length;
  if(n !== b.length) return false;
  let c = makeMatrixEmpty(m,p)
  for(let m = 0; m < a.length; m++){
    for(let n = 0; n < a[m].length; n++){
      for(let p = 0; p < b[n].length; p++){
        c[m][p] += a[m][n] + b[n][p];
      }
    }
  }
  console.log(c)
}

multiplicationMatrix([[2,3,4],[1,0,0]], [[0,1000],[1,100],[0,10]])