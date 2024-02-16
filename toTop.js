var arrowUp=document.getElementById('arrowToTop');
var arrowDown=document.getElementById('arrowDown');

start();

window.onscroll = function () {
    scrollFunction();
};

function start(){
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
}

function scrollFunction() {
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        arrowDown.style.display = "none";
    } 
    else {
        arrowDown.style.display = "block";
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        arrowUp.style.display = "block";
    } 
    else {
        arrowUp.style.display = "none";
    }
}

arrowUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

arrowDown.addEventListener("click", function () {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

/*document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.querySelector(".custom-cursor");
  
    document.addEventListener("mousemove", function(e) {
        // Update cursor position based on mouse movement
        const mouseY = e.clientY - 15;
        const mouseX = e.clientX - 15;

        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  });*/