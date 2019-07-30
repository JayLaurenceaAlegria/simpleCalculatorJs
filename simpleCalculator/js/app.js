const solve = document.getElementById('solve');
solve.addEventListener('click', solution);
document.getElementById('res-container').style.visibility = 'hidden';

function Calculate(num1 , num2){
    this.num1 = num1;
    this.num2 = num2;
}
Calculate.prototype.add = function(){
    let sum = 0;
    sum = this.num1 + this.num2;
    console.log(sum);
    return sum;
}
Calculate.prototype.subtract = function(){
    let diff = 0; 
    diff = this.num1 - this.num2;
    console.log(diff);
    return diff;
}
Calculate.prototype.multiply = function(){
    let prod = 0; 
    prod = this.num1 * this.num2;
    console.log(prod);
    return prod;
}
Calculate.prototype.divide = function(){
    let quo = 0; 
    quo = this.num1 / this.num2;
    console.log(quo);
    return quo;
}



function solution(e){
    const num1 =parseFloat(document.getElementById('num1').value);
    const num2 =parseFloat(document.getElementById('num2').value);
    const add = document.getElementById('add');
    const sub = document.getElementById('subtract');
    const mul = document.getElementById('multiply')
    const div = document.getElementById('divide')
    const result = document.getElementById('result');   
    calculate = new Calculate(num1 , num2)

    if(add.checked === true){
        console.log(calculate.add());
        document.getElementById('res-container').style.visibility = 'visible';
        result.innerHTML= calculate.add();
    } else if (sub.checked === true){
        console.log(calculate.subtract());
        document.getElementById('res-container').style.visibility = 'visible';
        result.innerHTML= calculate.subtract();
    } else if (mul.checked === true){
        console.log(calculate.multiply());
        document.getElementById('res-container').style.visibility = 'visible';
        result.innerHTML= calculate.multiply();
    } else if (div.checked === true){
        console.log(calculate.divide());
        document.getElementById('res-container').style.visibility = 'visible';
        result.innerHTML= calculate.divide();
    }

    e.preventDefault();
}