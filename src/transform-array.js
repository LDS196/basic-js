const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr){
  
   if(Array.isArray(arr)) {
   
   let arr1 = []
  for( let i = 0; i < arr.length; i++){
   if( arr[i] !== '--discard-next' && arr[i] !== '--discard-prev'  && arr[i] !== '--double-next'  && arr[i] !== '--double-prev' ){
      arr1.push(arr[i])

   } else if( arr[i] === '--discard-next'){
      i++
      console.log(arr1)
   } else if(arr[i] === '--discard-prev'){
      arr1.splice( i - 1)

   }else if(arr[i] === '--double-next'){
      if(arr[i + 1] == undefined){
         continue
      } else arr1.push(arr[i + 1])

   } else if(arr[i] === '--double-prev'){
      if(arr1[i-1] == undefined ){
         continue
      } else arr1.push(arr1[i -1])
   }
}
return arr1;
   } else {
      throw new Error('\'arr\' parameter must be an instance of the Array!')
   }
}

module.exports = {
  transform
};
