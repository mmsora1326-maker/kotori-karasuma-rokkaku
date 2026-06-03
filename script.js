document.addEventListener("DOMContentLoaded", () => {

    // カードホバー（これはそのままでOK）
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });

    // ヘッダー制御
    let lastScroll = 0;
    const header = document.querySelector("header");
    const threshold = 10;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        const diff = currentScroll - lastScroll;

        if (Math.abs(diff) < threshold) return;

        if (diff > 0 && currentScroll > 100) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

    // ハンバーガー
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navMenu");
    const overlay = document.getElementById("menuOverlay");

    const OPEN = "active";

    function openMenu() {
        hamburger.classList.add(OPEN);
        nav.classList.add(OPEN);
        overlay.classList.add(OPEN);
    }

    function closeMenu() {
        hamburger.classList.remove(OPEN);
        nav.classList.remove(OPEN);
        overlay.classList.remove(OPEN);
    }

    function toggleMenu() {
        hamburger.classList.contains(OPEN)
            ? closeMenu()
            : openMenu();
    }

    hamburger.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", closeMenu);

    // メニュー押したら閉じる（超重要）
    document.querySelectorAll("#navMenu a").forEach(a => {
        a.addEventListener("click", closeMenu);
    });
});