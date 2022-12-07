
const copyCon = document.getElementById("copy")
function back(){
    copyCon.classList.toggle("show")
}


document.getElementById("copiar").addEventListener("click", (event)=>{
    let content = "vanik.survival-zone.com"
    navigator.clipboard.writeText(content)
    copyCon.classList.toggle("show")
    setTimeout(back(), 1000)
    
})

const copyEmail = document.getElementById("email")

copyEmail.addEventListener("click", (event)=>{
   let content = "vanik.contact@gmail.com" 
   navigator.clipboard.writeText(content)
}) 

const redirectDiscord = document.getElementById("discord")

redirectDiscord.addEventListener("click", (event)=>{
    let content = "https://discord.gg/Zr2wJ3pSXT"
    window.open(content, '_blank')
})

const redirectTikTok = document.getElementById("tiktok")

redirectTikTok.addEventListener("click", (event)=>{
    let content = "https://www.tiktok.com/@vaniknet?lang=es"
    window.open(content, '_blank')
})

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animate", entry.isIntersecting)
    });
    
}

)

const banners = document.querySelectorAll(".banner_modals, .banner_rangos, .banner_contactanos")


banners.forEach(banner => {
    obs.observe(banner)
})

