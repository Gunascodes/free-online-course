const header = document.querySelector('.header_secton')
const footer = document.querySelector('.footer_secton')
fetch('./header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data
})

fetch('./footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})