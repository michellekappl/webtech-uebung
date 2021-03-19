let arr1 = [];

arr1[0] = 0;

arr1.push(1);

let arr2 = [2, 3, 4];

let arrmerge = arr1.concat(arr2)

let shift = arrmerge.shift()
console.log('shift removes first element of array and returns it');

let pop = arrmerge.pop()
console.log('pop removes last element of array and returns it');

let slice = arrmerge.slice(0,2)
console.log('slice returns a copy of a part of an array defined by its arguments');

let arr3 = [...Array(11).keys()]

let included = arr3.includes(3)
included

let includedf = arr3.includes(-2)
includedf

//another possibility would be:

let includedIdx = arr3.indexOf(4)
includedIdx

let includedfIdx = arr3.indexOf(-2)
includedfIdx

function person(name, age, student){
    this.name = name;
    this.age = age;
    this.student = student;
}

let anna = new person("Anna", 23, true)
anna

let Uni = {
    uni: "TU Berlin",
    grades: 2.3,
}

let studentAnna = {
    ...anna,
    ...Uni
}

for (let entry of Object.entries(studentAnna)){
    console.log(entry);
}

function exist(key, value, object){
    if(object[key] === value) return true;
    else return false;
}

let check = exist('name', 'Anna', studentAnna)
check 

//or

let test = studentAnna['name'] === 'Anna'
test

