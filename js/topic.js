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

window.onload = function () {
    loadTopicCNSH();
    loadTopicCNTT();
    loadTopicQTKD();
    loadTopicXHH();

    let m = document.getElementById("menu-items");
    let d = document.getElementById("show-menu");
    d.addEventListener("click", function() {
        m.style.left = "65%";
    });

    let e = document.getElementById("esc");
    e.addEventListener("click", function() {
        m.style.left = "-100%";
    });
}