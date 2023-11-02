 function number () {
     return 10;
 }

let number = () => {
    return 10;
};

let number = () => 10; //return needs to be cancel short funtion

var javascript = {
    name : 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries : function() {
        this.libraries.forEach((element) => {
            console.log(`${this.name} loves ${element}`);
        });
    }
}

javascript.printLibraries();

const search = document.querySelector('.search');
const result = document.querySelector('.result');
const thanks = document.querySelector(".thanks")

function show() {
    result.innerHTML = this.value;
    setTimeout( () => {
        thanks.innerHTML = `you have typed ${this.value}`
    }, 2000);
}

search.addEventListener("keyup", show);

var myVar = []; //true



if (myVar) {
    console.log("he is truthy");
} else {
   ////// false = bool false, 0, NULL, undefined, Nan
    console.log("he is falsy");
}

// ternary operator
const type = age >= 18 ? "adult" : "child";
const beshitype = age >= 18 ? "adult" : age < 10 ? "child" : "young";


const numbers = [1, 2, 3, 4, 5, 6 ,7];

find itrates though all element , and give the current element index and arr in parap
var result = numbers.find((element ,index , arr) =>{
    // return true will break this;
    // it will return element
});

var resultt = numbers.findIndex((element ,index , arr) =>{
    // return true will break this;
    // it will return index
});

var resulttt = numbers.filter((element ,index , arr) =>{
    // it will return array with filter
});


var sum = numbers.reduce((prevValue, currentValue, crrentIndex, arr) => {
    return prevValue + currentValue;
}, 0 ); // 0 first value prevValue;

///////// for in = index or key of obj . for of is element retriver of obk