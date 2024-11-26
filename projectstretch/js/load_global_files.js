const loadHeader = () => {
    fetch('./global/header.html')
    .then(res => {
        return res.text()
    })
    .then(data => {
        document.querySelector('#header__part').innerHTML = data;
    })
    console.log('header');
}

loadHeader();

const loadFooter = () => {
    fetch('./global/footer.html')
    .then(res => {
        return res.text()
    })
    .then(data => {
        document.querySelector('#footer__part').innerHTML = data;
    })
    console.log('footer');
}

loadFooter();


// Active nav not working 
/*const navLinkEls = document.querySelectorAll(`.nav-link`);
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
	if (navLinkEl.href.includes(windowPathname)) {
		navLinkEl.classList.add(`active`);
    }
})*/