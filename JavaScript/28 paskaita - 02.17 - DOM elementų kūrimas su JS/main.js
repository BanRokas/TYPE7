let spalvos = ["red", "green", "blue", "yellow"];

document.querySelector("#spalva").addEventListener("click", e => {
  console.dir(e.target);
  e.target.style.color = spalvos[Math.floor(Math.random()*4)];
});

document.querySelector("#spalvos").addEventListener("click", e => {
  console.dir(e.target);
  let pirma = Math.floor(Math.random()*256);
  let antra = Math.floor(Math.random()*256);
  let trecia = Math.floor(Math.random()*256);
  e.target.style.color = `rgb(${pirma}, ${antra}, ${trecia})`;
});

