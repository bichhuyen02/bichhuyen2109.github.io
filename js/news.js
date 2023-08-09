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
    let headerNews = document.querySelectorAll('.header-new');

    headerNews.forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('active');
            // var headerNews = header.nextElementSibling;
            // if (headerNews.style.display === 'block') {
            //     headerNews.style.display = 'none';
            // } else {
            //     headerNews.style.display = 'block';
            // }
        });
    });

    headerClick();
    headerOnload();
}



