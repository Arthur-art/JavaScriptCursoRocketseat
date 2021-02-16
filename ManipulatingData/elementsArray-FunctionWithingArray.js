const array = ['a','b',{type:"array"},function(){return "FunctionWithinArray"}];

console.log(array[3]());
console.log(array.length);