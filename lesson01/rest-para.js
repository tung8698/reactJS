//Các tham số còn lại
function sum(num1,num2,...other){
    console.log(num1);
    console.log(num2);
    other.forEach(element => {
        console.log(element)
    })
}

sum(1,2,3,4,5,6);
console.log("============");
sum(14,42,33,12,33);
console.log("=============");