// Ex 1
// 1d 2a 3c 4b

// Ex 2
// Instead of using setTimeOut to create a timer, we can use setInterval for shorter code

// Ex 3
// a) can't
// b) can

// Ex 4
let li = document.getElementsByTagName("li")
for (let i=1; i<=3; i++){
    console.log(li[i]);
}


// Ex 5
let div = document.getElementsByTagName("div")
for (let i=1; i<=4; i++){
    console.log(div[i]);
}

// Ex 6
var el = document.getElementById('div-02');
el.remove()

// Ex 8
function LanTran() {
    alert("Tôi là Lân, 20 tuổi, đang bị chú đầu trọc săn đuổi");
}

// Ex 9
function LanTran2 (name,wish) {
    alert(`Tôi là ${name}, ước gì ${wish}`)
}

// Ex 10
function bai10(name, wish){
    if(wish == undefined){
        alert("Nhập vào anh ei");
    }else{
        alert(`Tôi là ${name}, ước gì ${wish}`);
    }
}

// Ex 11
// 11.1: Trong file index.html
// 11.2:
let name = document.getElementById("name");
let addButton = document.getElementById("add-btn");
let result = document.getElementById("result");

addButton.onclick = function () {
    result.innerText = name.value.toUpperCase();
}



