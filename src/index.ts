import "./styles/styles.scss";

function main() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World!'
  return element;
}

document.body.appendChild(main());
