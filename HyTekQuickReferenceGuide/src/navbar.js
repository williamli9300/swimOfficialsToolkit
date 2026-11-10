// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_img")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

var modalcontent = document.getElementsByClassName("modal-content");

modal.onclick = function (e) {
    if (e.target.tagName != 'IMG' && window.getComputedStyle(e.target).cursor != 'text') {
        modal.style.display = "none";
    }
}

document.onkeydown = function (e) {
    e = e || window.event;
    var escape = false;
    if ("key" in e) {
        escape = (e.key === "Escape" || e.key === "Esc");
    } else {
        escape = (e.keyCode == 27);
    }
    if (escape) {
        modal.style.display = "none";
    }
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }
}   