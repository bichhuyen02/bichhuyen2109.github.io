function loadLecturerCNTT() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-cntt");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
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

function loadLecturerCNSH() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-cnsh");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
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

function loadLecturerQTKD() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-qtkd");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
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

function loadLecturerTCNH() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-tcnh");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer  wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
                        </div>
                    </div>
                </div>`;
                }
            }
        }
        let e = document.getElementById("tcnh");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadLecturerLuat() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-luat");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer  wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
                        </div>
                    </div>
                </div>`;
                }
            }
        }
        let e = document.getElementById("luat");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadLecturerNN() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-nn");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer  wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
                        </div>
                    </div>
                </div>`;
                }
            }
        }
        let e = document.getElementById("nn");
        if (e !== null) {
            e.innerHTML = h;
        }
    })
}

function loadLecturerXHH() {
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let k = document.getElementById("title-xhh");
        if (k !== null) {
            for (let l of data) {
                if (k.textContent === l.majors) {
                    h += `
                    <div class="lecturer  wow animate__slideInRight animate__slow">
                    <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1>${l.name}</h1>
                            <p>Học vị: ${l.degree}</p>
                            <p>Chức vụ: ${l.position}</p>
                            <p>Email: ${l.email}</p>
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

window.onload = function(){
    loadLecturerCNSH();
    loadLecturerCNTT();
    loadLecturerLuat();
    loadLecturerNN();
    loadLecturerQTKD();
    loadLecturerTCNH();
    loadLecturerXHH();

    headerClick();
    headerOnload();
}