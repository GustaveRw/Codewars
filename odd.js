function findOdd(A) {
    for (var i = 0; i < A.length; i++){
        var count = 0;
    for (var l = 0; l < A.length; l++){
      if (A[i] === A[l]) count++;
    }
    if (count % 2 !== 0) return A[i];
  }
  
}
