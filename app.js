const formWrapper = document.querySelector("#form-wrapper");
const form = document.querySelector("#form"); 
const searchİnput = document.querySelector("#search-input");
const btnWrapper = document.querySelector("#btn-wrapper");
const searchbtn = document.querySelector("#search-btn");
const clearbtn = document.querySelector("#clear-btn");
const imagelistWrapper = document.querySelector("#imagelist-wrapper");

runEventsListener();

function runEventsListener() {
    form.addEventListener("submit" , search);
    clearbtn.addEventListener("click" , clear)
}

function clear() {
    searchİnput.value = "";
    Array.from(imagelistWrapper.children).forEach((child) => {
        child.remove();
    });
}

function search(e) {
    e.preventDefault();

    const input = searchİnput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${input}` , {
        method : "GET",
        headers : {
            Authorization : "Client-ID qu05cQthrxd72eX9IUQN1IOO-ek33mo9u9KeQO6660o"
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            Array.from(data.results).forEach((img) => {
                // console.log(img.urls.small)
                addToDoİmegeUrl(img.urls.small);
            })
        })
        .catch((err) => {
            console.error(err)
        })
}

function addToDoİmegeUrl(urls) {
    console.log(urls)
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src" , urls);
    img.height = "300";
    img.width = "300";
    div.appendChild(img);
    imagelistWrapper.append(div);
}