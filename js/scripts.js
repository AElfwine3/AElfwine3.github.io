
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};


let prevScrollpos = window.pageYOffset;
function scrollFunction(){
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	document.getElementById("navbar").classList.add("top-nav-collapse");
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


// Navbar mobile
let elements = document.querySelectorAll(".navbar-nav .nav-link");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});


/* Back To Top Button */
myButton = document.getElementById("myBtn");

function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}


function topFunction() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}
