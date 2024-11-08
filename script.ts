const moreInfoBtn = document.getElementById("more-info-btn");
const extraInfo = document.getElementById("extra-info");

moreInfoBtn?.addEventListener("click", () => {
    extraInfo?.classList.toggle("hidden");
});
