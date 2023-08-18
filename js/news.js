window.onload = function () {
  let headerNews = document.querySelectorAll('.header-new');

  headerNews.forEach(header => {
    header.addEventListener('click', () => {
      headerNews.forEach(item => {
        item.classList.remove('active');
      });
      header.classList.toggle('active');
    });
  });

  let m = document.getElementById("menu-items");
  let d = document.getElementById("show-menu");
  d.addEventListener("click", function () {
    m.style.left = "65%";
  });

  let e = document.getElementById("esc");
  e.addEventListener("click", function () {
    m.style.left = "-100%";
  });
}



