const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

let isShownMenu = false;
const toggleMenu = () => {
    isShownMenu = !isShownMenu;
    let hc = document.getElementsByClassName("hero-container")[0];
    let logo = document.getElementsByClassName("logo")[0];
    let hbIcon = document.getElementsByClassName("hb-icon")[0];

    if (isShownMenu) {
        mobileMenu.style.display = "flex";
        hc.style.background = "white";

        logo.innerHTML = `<img
                            src="./img/logo/logo_text_black.png"
                            alt="main logo | Comfea"
                        />`;
        hbIcon.innerHTML = `<img src="./img/icon/hb-2.png" alt="menu icon shows in phone">`;
    } else {
        mobileMenu.style.display = "none";
        hc.style.background = `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 89.75%,
            rgba(0, 0, 0, 0.7) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.93) 107.96%
        )`;
        logo.innerHTML = `<img
                            src="./img/logo/logo_text.png"
                            alt="main logo | Comfea"
                        />`;
        hbIcon.innerHTML = `<img src="./img/icon/hb-1.png" alt="menu icon shows in phone">`;
    }
};
