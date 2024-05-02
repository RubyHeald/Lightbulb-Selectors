const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");

const subTitle = document.querySelector(".subtitle");

let count = 0

function addOneToCount(event){
    console.log (event.target)
    count ++
    subTitle.innerHTML = "You've clicked the lights " + count + " times";
    event.target.classList.toggle ("active");
}

lightbulb1.addEventListener("click", addOneToCount)
lightbulb2.addEventListener("click", addOneToCount)
lightbulb3.addEventListener("click", addOneToCount)
