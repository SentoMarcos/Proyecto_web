const menu = document.getElementById("menu-principal");

document.querySelector(".hamburguesa").addEventListener("click",() => {menu.classList.toggle("active");})

document.querySelectorAll("#open-menu ul a").forEach(
    (enlace)=>{
        enlace.addEventListener("click",()=>{
            menu.classList.remove("active")
        })
    }
)