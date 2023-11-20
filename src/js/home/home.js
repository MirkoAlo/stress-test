
import Swiper from "swiper";

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

const nav = () => {
    return 1
}

const sidebar = () => {
    return 3
}


export const home = () => {
    return sidebar()
}

