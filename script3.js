//Задание 3
let user = {
    name: "GachiBoy",
    avatar: "avat.png"
}

let acsepter = document.querySelector(".coments");
let sender = document.querySelector(".bot");

sender.addEventListener("click", addCommit);

function addCommit(e){
    let comit = document.getElementById("comit");
    comit.style.display = "flex";
    let date = new Date();
    
    let item = document.createElement("div");
    item.classList.add("items");
    
    let avat = document.createElement("img");
    avat.src = user.avatar;
    avat.style.width = '64px';
    avat.style.height = '64px';
    avat.style.borderTopLeftRadius = '20px';
    avat.style.borderTopRightRadius = '20px';
    
    let imya = document.createElement("h5");
    imya.style.display = "inlineBlock";
    imya.style.margin = '0';
    imya.style.padding = '5px';
    imya.innerText = user.name + "\n" + (((date.getUTCHours() + 3) < 10)? "0" + (date.getUTCHours() + 3): (date.getUTCHours() +3)) + ":" + ((date.getUTCMinutes() < 10)? "0" + date.getUTCMinutes():date.getUTCMinutes()) + "\n" + date.getUTCDate() + "." + (date.getUTCMonth() + 1) + "." + date.getUTCFullYear();
    
    
    let commit = document.querySelector(".memo");
    let com = document.createElement("P");
    com.style.display = "inlineBlock";
    com.style.margin = "0";
    com.innerText = commit.value;

    item.appendChild(avat);
    item.appendChild(imya);
    item.appendChild(com);

    acsepter.appendChild(item);
}