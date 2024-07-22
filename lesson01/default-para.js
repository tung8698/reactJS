//tham số mặc định là tham số có giá trị mặc định và dc sử dụng khi gọi
//thực hiện hàm mà ko truyền giá trị

function add(num1, num2=100){
    console.log(num1, '+' ,num2 ,'=', num1+num2);
}

add(100);
add(100,200);

function display(name,company){
    company = company || 'Devmaster Academy';
    name = name || 'ABC';
    console.log("Name", name);
    console.log("Company", company);
}