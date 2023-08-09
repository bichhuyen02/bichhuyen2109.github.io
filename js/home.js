function loadTopic(){
    fetch("/data/topic.json").then(res => res.json()).then(data =>{
        let h = "";
        let flag = 0;
        for(let t of data){
            if(flag < 4)
            {
                h += `
                <div class="flex topic wow animate__fadeInRight animate__slow">
                    <div class="flex ">
                        <div class="image-topic"> <img src="${t.img}" alt="${t.name}"></div>
                        <div class="info-topic">
                            <div class="name-topic">
                                <p>Đề tài</p>
                                <h1>${t.name}</h1>
                            </div>
                            <div class="lecturer-topic">
                                <p>Giảng viên hướng dẫn </p>
                                <h1>${t.lecturer}</h1>
                            </div>
                            <div class="students">
                                <p>Nhóm sinh viên thực hiện</p>
                                <h5>${t.leader} *</h5>
                                <h5>${t.member}</h5>
                            </div>
                        </div>
                        <div class=" rating_5">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>`;
                flag++;
            }
        }
        let e = document.getElementById("tocpics");
        if(e !== null)
            e.innerHTML = h;
    })
}

function loadLecturer(){
    fetch("/data/lecturer.json").then(res => res.json()).then(data => {
        let h = "";
        let index = 0;
        for(let l of data){
            if(index < 4){
                h += `
                <div class="lecturer wow  animate__fadeInRight animate__slow">
                <div>
                        <div class="image-lecturer">
                            <img src="${l.img}" alt="${l.name}">
                        </div>
                        <div class="info-lecturer">
                            <h1 class="text-info">${l.name}</h1>
                            <h3 class="text-info">${l.degree}</h3>
                            <h3 class="text-info">${l.majors}</h3>
                            <a href="/html/lecturers.html">Chi tiết</a>
                        </div>
                </div>
                </div>
                `;
                index++;
            }
            
        }

        let e = document.getElementById("lecturers");
        if(e !== null){
            e.innerHTML = h
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


window.onload = function (){
    loadTopic();
    loadLecturer();
    headerClick();
    headerOnload();
}