const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0;
  document.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = e.key;
    if (key === alphabet[index]) {
      index++;
    if (index === alphabet.length) {
      alert("congrats!");
      index = 0;
     }
     } else {
    index = 0;
  }
}, false)}

  