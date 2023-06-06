let Foot = document.querySelector(".base");
let News = document.querySelector(".news");
let Join = document.querySelector(".join");
let Bak = document.getElementById("Back");
let email = document.getElementById("email");

console.log(email);
Join.onclick = function(){
    News.style.display="none"
    Foot.style.display="block"
}
Bak.onclick = function(){
    Foot.style.display="none"
    News.style.display="flex"
    email.value=" "


}