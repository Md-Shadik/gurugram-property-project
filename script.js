function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}


let elements = document.getElementsByClassName("gallery");
let order = 0;
setInterval(() => {
    elements.item(order).style.opacity = "0";
    order + 1 == elements.length ? order = 0 : order+=1;
    elements.item(order).style.opacity = "1";
}, 3500)


window.addEventListener("load",function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".Popup").style.display = "block";
        },
        3000
    )
});
document.querySelector("#close").addEventListener
("click",function(){
    document.querySelector(".Popup").style.display = "none";
});

gsap.fromTo(
    ".loading-page",

    {opacity:1},
    {
        opacity:0,
        duration:1.5,
        delay:2.5,
    }
);
gsap.fromTo(".logo",
    {
         y:50,
        opacity:0,

    },
    {
        y:1,
        opacity:2,
        delay:0.5,
    }

);