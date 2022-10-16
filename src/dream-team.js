const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
   if(!Array.isArray(arr)){
      return false
   }
   
   let arr1 = []
for( let i = 0; i < arr.length; i++){
   if(typeof arr[i] !== 'string'){
      continue;
   } else {
      arr1.push(arr[i])
   }
}
let arr2 = []
for( let j = 0; j < arr1.length; j++){
arr2.push(arr1[j].split(' ').join(''))
}

let arr3 = []
for( let k = 0; k < arr2.length; k++){
arr3.push( arr2[k][0].toUpperCase())
}

let arr4 = arr3.sort().join('')
return arr4
}

module.exports = {
  createDreamTeam
};
