//  uzduotis 1
fetch("data/data.json")
  .then(res => res.json())
  .then(data => data[0])
  .then(data => {
    console.log(data);
    document.querySelector("#uzd1").innerHTML = `
      <h1 style="text-align:center"> ${data.title} </h1>
      <div class="imagePlusPar">
        <img src="${data.image}">
        <p> ${data.paragraph} </p>
      </div>
    `;
  });

//  uzduotis 2
fetch("data/data.json")
  .then(res => res.json())
  .then(data => data[1])
  .then(data => {
    console.log(data);
    /*
    document.querySelector("#uzd2").innerHTML = `
      <h1> ${data.title} </h1>
      <div>
        ${
          data.images.map(img => `<img src="${img}">`)
        }
      </div>
    `;
    */
    let heading = document.createElement("h1");
    heading.append(data.title);
    
    let divas = document.createElement("div");
    data.images.forEach(data => {
      let image = document.createElement("img");
      image.setAttribute("src", data);
      divas.appendChild(image);
    });

    document.querySelector("#uzd2").append(heading, divas);
  });