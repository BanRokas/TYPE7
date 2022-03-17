export default class Input{
  constructor(
    location,
    type,
    attributes
  ){
    this.app = location;
    this.type = type;
    this.attributes = attributes;
    this.render();
  }
  render = () => {
    const inputas = document.createElement("input");
    inputas.setAttribute("type", this.type);
    this.attributes.forEach(
      item => inputas.setAttribute(item.name,item.value)
    );
    this.app.appendChild(inputas);
  }
}