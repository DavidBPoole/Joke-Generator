import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDom from '../utils/renderFunction';

// const joke = getRequest();
// console.warn(joke);

// Array to push new joke object into:
const joke = [];

// HTML DOM render structure to supply containers for information to be pushed to.
const renderHtmlStructure = () => {
  const domString = `
  <h1 id="jokeTitle">Joke Generator</h1>
  <div id="jokeContainer"></div>
  <div id="jokeBtnContainer">
    <button "type="button" id="getJoke" class="btn btn-dark">Get Joke</button>
  </div>
  `;
  renderToDom('#app', domString);
};

// Render for first button:
const renderJoke = () => {
  const domString = `
  <button "type="button" id="getJoke1" class="btn btn-dark">Get Joke</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

// Render for second button:
const punchline = () => {
  const domString = `
  <button type="button" id="getJoke2" class="btn btn-dark">Get Punchline</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

// Render for third button:
const returnNewJoke = () => {
  const domString = `
  <button type="button" id="getJoke3" class="btn btn-dark">Get New Joke</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

// Function to render joke setup (1st part of joke) and to also push the JSON object (Obj) with the new joke upon the third button case based on the switch case events within the event listeners.
const renderJokeText = (Obj) => {
  // console.warn(Obj);
  joke.push(Obj);
  const domString = `
  <h2>${Obj.setup}</h2>`;
  renderToDom('#jokeContainer', domString);
  // Punchline is immediately called following the above because we want it to render and display immediately following the setup from the joke Obj.
  punchline();
};

// Function to render the joke delivery and the 2nd button text before returning to the 1st button for a new joke and the subsequent new joke Obj which is pushed as an argument from the empty "joke" array. ${joke[0].delivery} is dropped in the h2 slot to reference the index of the array as 0 preventing an accumulation of jokes resetting back to the first index of the array.
const renderPunchline = () => {
  const domString = `
  <h2>${joke[0].delivery}</h2>`;
  renderToDom('#jokeContainer', domString);
  joke.length = 0;
  returnNewJoke();
};

// Event Listeners
const events = () => {
  document.querySelector('#jokeBtnContainer').addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case 'getJoke1':
        getRequest().then((value) => renderJokeText(value));
        break;
      case 'getJoke2':
        renderPunchline();
        break;
      case 'getJoke3':
        getRequest().then((value) => renderJokeText(value));
        break;
      default:
        break;
    }
  });
};

// startApp / Initialize function controlling sequence of renders to DOM.
const init = () => {
  renderHtmlStructure();
  renderJoke();
  events();
};
init();

// Below contains code that works, but became unnecessary once the event listener issue of being unable to "read properties of null" was resolved.

// fetchjoke will display jokes to the DOM, however does not control the sequence.
// const fetchJoke = () => {
//   getRequest().then((item) => {
//     renderToDom('#jokeContainer', item.setup);
//   });
// };
// fetchJoke();

// Below eventListeners do not work because they need to be contoled by logic that will allow only the first to be rendered and the remaining sequentially so they do not throw errors since they are all competing for the same div ID to render, which will cause them to return NULL.
// const getJokeEvent = () => {
//   document.querySelector('#getJoke').addEventListener('click', () => {
//     getJokeEvent.innerHTML = 'Button clicked';
//   });
// };

// const getPunchlinEvent = () => {
//   document.querySelector('#getJoke2').addEventListener('click', () => {
//     getRequest().then(console.warn);
//   });
// };

// const getNewJoke = () => {
//   document.querySelector('#getJoke3').addEventListener('click', () => {
//     getRequest().then(console.warn);
//   });
// };

// The order of functions being called within the startApp or init function matter since JS reads from top down. This is why the final event listener for the button above was read over the correct first button. Logic was needed to control which case would run first and then stop reading the remaining button texts.

// TEST AREA BELOW ONLY ***************

// const events = () => {
//   document.querySelector(renderJoke).addEventListener('click', () => {
//     getRequest().then(console.warn);
//   });
//   document.querySelector(punchline).addEventListener('click', () => {
//     getRequest().then(console.warn);
//   });
//   document.querySelector(returnNewJoke).addEventListener('click', () => {
//     getRequest().then(console.warn);
//   });
//   document.querySelector(fetchJoke).addEventListener('click', () => {
//     fetchJoke().then(console.warn);
//   });
// };
// events();

// init function call backs no longer needed due to event listener solution:
// getRequest();
// fetchJoke();
// punchline();
// returnNewJoke();
// getJokeEvent();
// getPunchlinEvent();
// getNewJoke();
