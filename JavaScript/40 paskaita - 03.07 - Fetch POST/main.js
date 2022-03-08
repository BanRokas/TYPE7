fetch("duomenys/data.json")
  .then(res => res.json())
  .then(data => {
    data.posts.forEach(element =>{
      document.querySelector("#irasai").innerHTML += `
        <div class="irasas">
          <h2>${element.title}</h2>
          <p>${element.body}<p>
        </div>
      `;
    });
  });

const extraData = {
  title : "Labas rytas",
  body : "Graži šiandieną diena nusimato."
};
fetch("http://localhost:3000/posts",{
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': "application/json, text/plain */*"
  },
  body : JSON.stringify(extraData)
})