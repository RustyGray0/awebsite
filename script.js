const splash = document.querySelector("#splash");

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        document.getElementById("splash").style.opacity = "0";
        document.getElementById("splash").style.zIndex = "-100";
        document.getElementById("splash").style.transition = "all .7s";
    }, 2000);
})