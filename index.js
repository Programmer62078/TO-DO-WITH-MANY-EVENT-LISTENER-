let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let showinpu_in_heading = document.querySelector("h2");

function additem() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  let space = document.createTextNode("      ");

  item.appendChild(space);
  item.appendChild(delbtn);
  ul.appendChild(item);
  inp.value = "";
  showinpu_in_heading.innerText = "";

  delbtn.addEventListener("click", function () {
    ul.removeChild(item);
  });
}

btn.addEventListener("click", additem);

inp.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    additem();
  }
});

inp.addEventListener("input", function () {
  showinpu_in_heading.innerText = inp.value;
});
