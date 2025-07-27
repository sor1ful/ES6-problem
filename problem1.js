// efficient way to declare arrow function withouut return parameter

const mult= (x,y,z)=>(x*y*z);
const result = mult(7, 8, 9);
console.log(result);


// basic structure with Return parameter
const multiply = (a,b,c) =>{
    const result = (a*b*c);
    return result;
}
const res = multiply(1,2,3);
console.log(res);
