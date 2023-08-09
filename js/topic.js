function loadTopicCNTT() {
    fetch("/data/topic.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-cntt");
        if (k !== null) {
            for (let t of data) {
                if (k.textContent === t.majors) {
                    h += `
                        <div class="topic  wow animate__slideInRight animate__slow">
                            <div>
                            <div class="image-topic">
                                <img src="${t.img}" alt="${t.name}">
                            </div>
                            <div class="info-topic">
                                <h1>${t.name}</h1>
                                <hr>
                                <p>Giảng viên hướng dẫn:</p>
                                <h4>${t.lecturer}</h4>
                                <hr>
                                <p>SV thực hiện: </p>
                                <h4>${t.leader} *</h4>
                                <h4>${t.member}</h4>
                            </div>
                            </div>
                        </div>`;
                }
            }
        }
        let e = document.getElementById("cntt");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadTopicCNSH() {
    fetch("/data/topic.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-cnsh");
        if (k !== null) {
            for (let t of data) {
                if (k.textContent === t.majors) {
                    h += `
                        <div class="topic  wow animate__slideInRight animate__slow">
                            <div>
                            <div class="image-topic">
                                <img src="${t.img}" alt="${t.name}">
                            </div>
                            <div class="info-topic">
                                <h1>${t.name}</h1>
                                <hr>
                                <p>Giảng viên hướng dẫn:</p>
                                <h4>${t.lecturer}</h4>
                                <hr>
                                <p>SV thực hiện: </p>
                                <h4>${t.leader} *</h4>
                                <h4>${t.member}</h4>
                            </div>
                            </div>
                        </div>`;
                }
            }
        }
        let e = document.getElementById("cnsh");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadTopicQTKD() {
    fetch("/data/topic.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-qtkd");
        if (k !== null) {
            for (let t of data) {
                if (k.textContent === t.majors) {
                    h += `
                        <div class="topic  wow animate__slideInRight animate__slow">
                            <div>
                            <div class="image-topic">
                                <img src="${t.img}" alt="${t.name}">
                            </div>
                            <div class="info-topic">
                                <h1>${t.name}</h1>
                                <hr>
                                <p>Giảng viên hướng dẫn:</p>
                                <h4>${t.lecturer}</h4>
                                <hr>
                                <p>SV thực hiện: </p>
                                <h4>${t.leader} *</h4>
                                <h4>${t.member}</h4>
                            </div>
                            </div>
                        </div>`;
                }
            }
        }
        let e = document.getElementById("qtkd");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadTopicXHH() {
    fetch("/data/topic.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-xhh");
        if (k !== null) {
            for (let t of data) {
                if (k.textContent === t.majors) {
                    h += `
                        <div class="topic wow animate__slideInRight animate__slow">
                            <div>
                            <div class="image-topic">
                                <img src="${t.img}" alt="${t.name}">
                            </div>
                            <div class="info-topic">
                                <h1>${t.name}</h1>
                                <hr>
                                <p>Giảng viên hướng dẫn:</p>
                                <h4>${t.lecturer}</h4>
                                <hr>
                                <p>SV thực hiện: </p>
                                <h4>${t.leader} *</h4>
                                <h4>${t.member}</h4>
                            </div>
                            </div>
                        </div>`;
                }
            }
        }
        let e = document.getElementById("xhh");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function headerOnload(){
    let loca = window.location.href;
  
    let item = document.querySelector(".menu-item>li:first-child");
   
    let link = item.querySelector("a");
    // Kiểm tra nếu đường dẫn của menu trùng với đường dẫn hiện tại
    if (link.href == loca) {
      // Thêm lớp 'active' vào phần tử menu tương ứng
      item.classList.add("action");
    }
  }
  
function headerClick(){
    let location = window.location.href;
  
    // Lặp qua các phần tử menu để kiểm tra đường dẫn
    let menu = document.querySelectorAll(".menu-item li");
    for(let itemMenu of menu){
      itemMenu.onclick = function(){
        let link = itemMenu.querySelector("a");
  
        // Kiểm tra nếu đường dẫn của menu trùng với đường dẫn hiện tại
        if (link.href == location) {
          // Thêm lớp 'active' vào phần tử menu tương ứng
          itemMenu.classList.add("action");
        }
      }
    }
}

window.onload = function () {
    loadTopicCNSH();
    loadTopicCNTT();
    loadTopicQTKD();
    loadTopicXHH();

    headerClick();
    headerOnload();
}