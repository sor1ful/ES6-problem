const three ={
    first : 'I am a web developer',
    second : 'I love coding ',
    third : 'i have no life'

}

// for (const key in three){
//     const value = three[key];
//     console.log(value)
// }


// we can use object.keys to get array from object

const getValue = Object.keys(three);
console.log(getValue);

for(const key of getValue){
    const value = three[key]
    console.log(key,value);
}