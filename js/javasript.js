document.querySelector(".services-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("services-items")) {
        document.querySelector(".services-list .active-service-item").classList.remove("active-service-item");
        event.target.classList.add("active-service-item");
        document.querySelector(".services-info-items .active").classList.add("d-none")
        document.querySelector(".services-info-items .active").classList.remove("active");
        document.querySelector(`.services-info-items div[data-service ="${event.target.dataset.service}"]`).classList.add("active");
    }
});
document.querySelector(".list-work-nav").addEventListener("click", (event) => {
    if (event.target.classList.contains("list-work-item")) {
        document.querySelector(".list-work-nav .active-work-item").classList.remove("active-work-item");
        event.target.classList.add("active-work-item");
    }
    const filterGallery = document.querySelectorAll(".work-item");
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.getAttribute('data-workItem');
    filterGallery.forEach(elem => {
        elem.classList.remove("d-none")
        if (!elem.classList.contains(filterClass) && filterClass !== "all") {
            elem.classList.add('d-none');
        };
    });

});
document.querySelector(".load-btn").addEventListener("click", function () {
    document.querySelector(".load-btn").innerHTML = "";
    document.querySelector(".spinner").classList.add("active");

    function loadSpinner() {
        document.querySelector(".spinner").classList.remove("active");
        document.querySelector(".load-btn").classList.add("d-none")
    }
    setTimeout(loadSpinner, 3000);
    document.querySelectorAll(".work-gallery .hide").forEach(el => {
        function loadWorkImg() {
            el.classList.remove("hide");
        }
        setTimeout(loadWorkImg, 3000)
    });
});

 $('.slider-for').slick({
        slidesToShow: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        infinite:true,
        arrows:true,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true
    });