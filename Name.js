/* function getName(name) {
  const perName = document.getElementById(name);
  const nameValue = perName.innerText;
  console.log(nameValue);
  return nameValue;
}

document.getElementById("delegate").addEventListener("click", function (event) {
  const elementValue = document.getElementById("add-name");
  getName("name-title");
}); */

document.getElementById("player").addEventListener("click", function () {
  const addName = document.getElementById("name-title");
  const nameValue = addName.innerText;
  const elementFiled = document.getElementById("add-name");
  elementFiled.innerText = nameValue;
});
document.getElementById("player-1").addEventListener("click", function () {
  const addName = document.getElementById("name-title-1");
  const nameValue = addName.innerText;
  const elementFiled = document.getElementById("add-name-1");
  elementFiled.innerText = nameValue;
});
document.getElementById("player-2").addEventListener("click", function () {
  const addName = document.getElementById("name-title-2");
  const nameValue = addName.innerText;
  const elementFiled = document.getElementById("add-name-2");
  elementFiled.innerText = nameValue;
});
document.getElementById("player-3").addEventListener("click", function () {
  const addName = document.getElementById("name-title-3");
  const nameValue = addName.innerText;
  const elementFiled = document.getElementById("add-name-3");
  elementFiled.innerText = nameValue;
});
document.getElementById("player-4").addEventListener("click", function () {
  const addName = document.getElementById("name-title-4");
  const nameValue = addName.innerText;
  const elementFiled = document.getElementById("add-name-4");
  elementFiled.innerText = nameValue;
});
