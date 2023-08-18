function escape(){
    let btn = document.getElementById("btn_cancel");
    if(btn !== null){
        btn.addEventListener("click", function (){
            window.history.back();
        })
    }
}

function login(){
    let btn1 = document.getElementById("btn_login");
    if(btn1 !== null){
        btn1.addEventListener("click", function (){
            alert("Thông tin đăng nhập sai!");
        })
    }
}


window.onload = function () {
    escape();
    login();
}