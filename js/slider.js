$(document).ready(function(){

    // tạo nút
    let n = $(".content-image > div").length;
    let h = "";
    for (let i = 0; i < n-1; i++)
        h += `
            <a href="javascript:;" class="digit">${i+2}</a>
        `;
    $(".btn-number>a").after(h);
    $(".image").height($(".image img").height() + 3);

    // chạy sidle
    let current = -1;

    let showSlider = (current) => {
        $(".content-image > div").animate({left: "-200%"});
        $(".content-image > div").eq(current).animate({left: 0 }, "slow");

        $("a.digit").removeClass("show");
        $("a.digit").eq(current).addClass("show");
    }

    // click nút số
    $("a.digit").click(function() {
        current = parseInt($(this).text()) - 1;
        showSlider(current);

        clearInterval(timer);
        runSlider();
    });

    // nút tới
    $(".next").click(function() {
        current++;
        if (current === n)
            current = 0;
        showSlider(current);
    });

    // nút lùi
    $(".prev").click(function() {
        current--;
        if (current < 0)
            current = n - 1;
        showSlider(current);
    });

    // tự chạy
    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 6000);
    }
    runSlider();
})