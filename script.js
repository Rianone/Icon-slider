var divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover",function() {
        var element = divs[i].childNodes;
        element[3].style.display = "flex";
    });
    divs[i].addEventListener("mouseout",function() {
        var element = divs[i].childNodes;
        element[3].style.display = "none";
    });
}
