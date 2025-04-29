let age = 26;

age <= 25 ? console.log("U Can Play") : console.log("U Can't Play");


let name = "Amar Naam Niaz"
let address = "Ami #Dhaka Thaki"
let teams = "Mehedi, Ahad, Sumon. Rakib"
let cls = "MERN-2407 | JavaScript-05 | DOM"

console.log(name.split(""));
console.log(name.split(" "));
console.log(teams.split(","));
console.log(cls.split("|"));
console.log(address.split("#"));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log((name + " ").repeat(3));
console.log(name.replace("Niaz", "Mehedi"));
console.log(name.length);
console.log(name.split(" ")[2]);

let heading = document.querySelector("h1")
let heading2 = document.querySelector(".a")
let heading3 = document.querySelector(".b")
let heading4 = document.querySelectorAll("h2")
console.log(heading);
console.log(heading.innerHTML);
console.log(heading2.innerHTML);
console.log(heading3);
console.log(heading4);



let heading5 = document.querySelector("h3")
let button = document.querySelector("button")
let body = document.querySelector("body")

button.addEventListener("click", function () {
    heading5.style.color= "teal"
    heading5.style.fontSize= "50px"
    heading5.style.backgroundColor= "#000000"
    heading5.style.textAlign= "center"
    heading5.style.fontStyle= "italic"
    body.style.backgroundColor = "lightslategray"
    heading5.style.textTransform = "uppercase"
})







