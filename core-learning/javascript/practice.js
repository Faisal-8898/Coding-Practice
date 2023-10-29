const canvasSvg = "a link";


var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var canvas = document.createElement('canvas');

var ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);


var svg = document.createElementNS(canvasSvg, 'svg');
svg.width = 500;
svg.height = 50;    

var text = document.createElementNS(canvasSvg, 'text'); 
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = "Times New Roman";
text.style.fontSize = '50';

text.textContent = "hello mamu";
svg.appendChild(text);
document.body.appendChild(svg); 



console.log(typeof null); // object                                  
console.log(isNaN(Infinity)); //infinity is a number
console.log(isNaN(Date.now())); // date is also a number
console.log(isNaN([34])) // single number object converts to a number 
console.log(isNaN([])) // blank converts to 0 and consider it to a number 
console.log(typeof [] === 'number' && isNaN([])); // Outputs: false this is applicable for [34] also
console.log(Number.isNaN([])); // Outputs: false ,, -- modern js



console.log(Number.isNaN(NaN));  // this outcome true because its check to be number and also not a number ,, like the type needs to be number . but also not a number     




function foo() { return; }                                     
console.log('is undefined?', foo() === undefined); // when nothing returns its undefined

function foo(param) {
    console.log('is undefined?', param === undefined);
    }
    foo('a');
    foo();
    // is undefined? false // is undefined? true because you called the function with no params

;    // 1 / 0;  Infinity



Number.MAX_SAFE_INTEGER;                                         

console.time('any string'); //measure the executing time  
console.timeEnd('any string'); // you need to provide same string