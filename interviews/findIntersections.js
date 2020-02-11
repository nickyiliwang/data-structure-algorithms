// Find the intersection of two arrays 
// [10, 5, 4, 3, 8, 25] and [25, 4, 11, 5, 56]
// common elements in both arrays 
// [25, 4, 5]

const findIntersection = (arr1, arr2) => {
    const commonElements = [];
    
  //     arr1.forEach(item => {
  //       if (arr2.find((item2) => {
  //         return item === item2
  //       })) {
  //         commonElements.push(item)
  //         } 
  //     })
    
  // return commonElements;
  
  const arronemap = {}
  
    for(let key of arr1) {
      arronemap[key] = true
    }
    
    arr2.forEach(item => {
      if (arronemap[item]) {
        commonElements.push(item)
      }
    })
    
    return commonElements;
  }
  
  // 2 n vs n^2
  
  console.log(findIntersection([10, 5, 4, 3, 8, 25], [25, 4, 11, 5, 56]))