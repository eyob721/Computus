const currentYear = new Date().getFullYear() - 8;
console.log(currentYear);

const yearInputElm = document.getElementById('year-input');
yearInputElm.value = currentYear;

const goBtn = document.getElementById('go-button');
const outputContainerElm = document.getElementById('output-container');

function clearOutput () {
  outputContainerElm.textContent = '';
}

function addOutputElm (name, value) {
  const outputListItem = document.createElement('li');

  const outputNameElm = document.createElement('p');
  outputNameElm.setAttribute('class', 'output-name');
  outputNameElm.textContent = name;

  const outputValueElm = document.createElement('p');
  outputValueElm.setAttribute('class', 'output-value');
  outputValueElm.textContent = value;

  outputListItem.append(outputNameElm, outputValueElm);
  outputContainerElm.append(outputListItem);
}

goBtn.addEventListener('click', function () {
  addOutputElm('Name', 'Value');
});
