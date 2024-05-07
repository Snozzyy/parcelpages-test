import smileImgUrl from "./media/smile.png";
import anime from "animejs";

console.log("test");

const imgEl = document.querySelector("img");
imgEl.src = smileImgUrl;

anime({
    targets: imgEl,
    translateX: 300,
    direction: "alternate",
    loop: true
})