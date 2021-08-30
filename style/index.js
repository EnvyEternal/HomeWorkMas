let fan = () =>{
const array1 = [1,2,4,4,5,6,7,8,9,10];
const array2 = [2,4,6,7,9,4,1,5,2];
const array3 = array1.concat(array2);
const unique = Array.from(new Set(array3))
return unique
}
console.log(fan())


