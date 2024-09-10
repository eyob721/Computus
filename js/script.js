import { ethiopianMonths, getWengel, getAbekete, getMetke, getMebagaHamer, getEthiopianEvents } from './computus.js';

// Build the output messages for all the events of the given year
// ---------------------------------------------------------------------------
function buildEventOutput (givenYear) {
  const currentWengel = getWengel(givenYear);
  console.log(`ወንጌላዊ = ${currentWengel}`);

  const currentAbekete = getAbekete(givenYear);
  console.log(`አበቅቴ = ${currentAbekete}`);

  const currentMetke = getMetke(givenYear, currentAbekete);
  console.log(`መጥቅዕ = ${(currentMetke.day)}`);

  const mebagaHamer = getMebagaHamer(currentMetke.day, currentMetke.month, currentMetke.elete);
  const currentEvents = getEthiopianEvents(givenYear, mebagaHamer);

  const eventsOutput = [
    { name: 'ወንጌላዊ', value: currentWengel },
    { name: 'አበቅቴ', value: currentAbekete },
    { name: 'መጥቅዕ', value: currentMetke.day }
  ];

  for (const event of currentEvents) {
    const eventName = event.name;
    const eventValue = `${ethiopianMonths[event.month]} ${event.day}, ${event.elete}`;

    eventsOutput.push({ name: eventName, value: eventValue });
  }

  return eventsOutput;
}

// Render the output messages to the DOM
// ---------------------------------------------------------------------------
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

function renderOutput (givenYear) {
  const eventsOutput = buildEventOutput(givenYear);
  console.log(eventsOutput);
  for (const event of eventsOutput) {
    addOutputElm(event.name, event.value);
  }
}

const currentYear = new Date().getFullYear() - 7;
console.log(`ዓመተ ምህረት = ${currentYear}`);

const goBtn = document.getElementById('go-button');
const outputContainerElm = document.getElementById('output-container');
const yearInputElm = document.getElementById('year-input');

yearInputElm.value = currentYear;
renderOutput(currentYear);

goBtn.addEventListener('click', function () {
  const givenYear = parseInt(yearInputElm.value);
  console.log(`ዓመተ ምህረት = ${givenYear}`);

  clearOutput();
  renderOutput(givenYear);
});
