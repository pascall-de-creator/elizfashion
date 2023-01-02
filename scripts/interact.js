// Stickey Nav
window.onscroll = () => sticky()

const navbar = document.getElementById("secondary-nav");

const sticky = () => {
  if (window.pageYOffset + 2 >= navbar.offsetTop) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const pan = (e, direction) => {
    let productSlide = document.getElementById(e)
    const cards = productSlide.getElementsByTagName("a");
    const cardWidth = cards[0].offsetWidth;
    const gapSize = 16;
    const viewWidth = ( cardWidth + gapSize ) * cards.length
    const scrollOffset = 20
    if ( direction === 'right' ) {
        if ( viewWidth - productSlide.scrollLeft > productSlide.offsetWidth + scrollOffset ) {
            productSlide.scrollLeft += productSlide.offsetWidth - scrollOffset
        }
        else {
            productSlide.scrollLeft += viewWidth - productSlide.scrollLeft
        }
    }
    else if ( direction === 'left' ) {
        if ( productSlide.offsetWidth + productSlide.scrollLeft > productSlide.offsetWidth ) {
            productSlide.scrollLeft -= productSlide.offsetWidth - scrollOffset
        }
        else {
            productSlide.scrollLeft -= productSlide.scrollLeft
        }
    }
}

if (localStorage.email) {
    primaryNavlink = document.getElementsByClassName("pnc")[0].style.display = "none"
    primaryNavlink = document.getElementsByClassName("pnc")[1].style.display = "none"
    primaryNavlink = document.getElementsByClassName("pnc")[2].style.display = "block"
    primaryNavlink = document.getElementsByClassName("pnc")[2].innerText = localStorage.email
} 
else {
    primaryNavlink = document.getElementsByClassName("pnc")[0].style.display = "block"
    primaryNavlink = document.getElementsByClassName("pnc")[1].style.display = "block"
    primaryNavlink = document.getElementsByClassName("pnc")[2].style.display = "none"
}
const logout = () => {
    localStorage.removeItem('email')
    location.href = "../index.html"
}