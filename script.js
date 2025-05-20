let header_button = document.querySelector (".style-icon");
header_button.addEventListener("click", function() {
    let header = document.querySelector ("header");
    if (header.classList.contains("open")) {
        close_menushka();
    }
    else {
        header.classList.add("open");
        header_button.querySelector("img").src = "close.png";
    }
});


function close_menushka() {
    document.querySelector("header").classList.remove("open");
    header_button.querySelector("img").src = "free-icon-menu-10318107.png";
    
}

document.querySelector("#grid").addEventListener("click", close_menushka, false)

document.querySelector("header .menushka").addEventListener("click", close_menushka, false)

document.querySelector("#show_add_photo").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.remove("open");
});


document.querySelector("#add_photo").addEventListener("click", function() {
    let src = document.querySelector("#novoe_foto_kartinka").value;
    let text = document.querySelector("#novoe_foto_nekartinka").value;
    if (src) {
       let new_photo_div = document.createElement("div");
       new_photo_div.classList.add("foto");
       let new_img = document.createElement("img");
       new_img.src = src;
       new_photo_div.append(new_img);
       let new_p = document.createElement("p");
       new_p.innerText = text? text: "ПРОСТО КАКАЯТО ФОТОЧКА";
       new_photo_div.append(new_p);
       document.querySelector("#grid").prepend(new_photo_div);
       document.querySelector("#add_new_photo").classList.remove("open");
       document.querySelector("#novoe_foto_kartinka").value = "";
       document.querySelector("#novoe_foto_nekartinka").value = "";
       new_photo_div.addEventListener("click", open_foto, false);
    }
    else {
        if (!src) {
            document.querySelector("#novoe_foto_kartinka").classList.add("error");
        }
    }
});

function open_foto() {
    let src = this.querySelector("img").src,
    heroin_photo = document.querySelector("#heroin_photo")
    heroin_photo.querySelector("img").src = src;
    heroin_photo.classList.add("open")
}
let fotos = document.querySelectorAll(".foto");
for(let foto of fotos) {

foto.addEventListener("click", open_foto, false);
}

document.querySelector("#heroin_photo").addEventListener("click", function () {
     this.classList.remove("open");    
});
