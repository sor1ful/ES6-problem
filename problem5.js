const square= numbers =>{

const squareNo=[];

for(const num of numbers){
squareNo.push(num*num);


}
let getValue = 0;


for(const value of squareNo){
getValue += value;

}
const avgValue = (getValue/numbers.length);

console.log(avgValue);

return squareNo;
}

const number =square([1,2,5,6]);


