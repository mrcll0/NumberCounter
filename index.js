const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const span = document.getElementById("span")
let valor = 0;

decrease.addEventListener("click", () => {
    valor--;
    span.textContent = valor;
    document.body.style.backgroundImage= "url(https://preview.redd.it/templeos-realistic-elephant-wallpapers-both-in-pngs-and-v0-pj88xntjvnab1.png?auto=webp&s=a4f90a15d1fe62bf1a98bbfb9ec7835b50c5c916)"

});

increase.addEventListener("click", () =>{
    valor++;
    span.textContent = valor;
    document.body.style.backgroundImage= "url(https://64.media.tumblr.com/baf8f970f478668c421d575424287f5a/tumblr_p0m7ohTHGf1t2as4so1_540.gif)"
});

reset.addEventListener("click", () =>{
    valor = 0;
    span.textContent = valor;
    document.body.style.backgroundImage= "url(https://media2.giphy.com/media/XdE3y9BsX0ObDN3Wu4/giphy.gif)";
});