
const $navbar = document.querySelector("[data-navbar]")
const $Navtoggler = document.querySelector("[data-nav-toggler]")


$Navtoggler.addEventListener('click',()=> $navbar.classList.toggle('active'))


const $header = document.querySelector("[data-header]");
window.addEventListener("scroll", e=>{

    $header.classList[window.scrollY > 50 ? 'add': 'remove']("active")
})
 
const $btnToggel = document.querySelectorAll("[data-toggel-btn]");
$btnToggel.forEach($btnToggel => {
    $btnToggel.addEventListener("click", ()=>{
$btnToggel.classList.toggle('active')
    })
})