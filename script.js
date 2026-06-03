document.addEventListener("DOMContentLoaded", () => {

    // カードホバー
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s";
        });
    });

    // ヘッダースクロール制御


    let lastScroll = 0;
    const header = document.querySelector("header");

    // ここがポイント：誤動作防止の余裕
    const threshold = 10;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        const diff = currentScroll - lastScroll;

        // ちょっと動いただけなら無視
        if (Math.abs(diff) < threshold) return;

        // 下スクロール → 隠す
        if (diff > 0 && currentScroll > 100) {
            header.classList.add("hide");
        }

        // 上スクロール → 出す
        else if (diff < 0) {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navMenu");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        });
    });

});
