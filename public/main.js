import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDom from '../utils/renderFunction';

// const joke = getRequest();
// console.warn(joke);

const joke = [];

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

const renderJoke = () => {
  const domString = `
  <button "type="button" id="getJoke" class="btn btn-dark">Get Joke</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

const punchline = () => {
  const domString = `
  <button type="button" id="getJoke2" class="btn btn-dark">Get Punchline</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

const returnNewJoke = () => {
  const domString = `
  <button type="button" id="getJoke3" class="btn btn-dark">Get New Joke</button>`;
  renderToDom('#jokeBtnContainer', domString);
};

const renderJokeText = (Obj) => {
  // console.warn(Obj);
  joke.push(Obj);
  const domString = `
  <h2>${Obj.setup}</h2>`;
  renderToDom('#jokeContainer', domString);
  punchline();
};

const renderPunchline = () => {
  const domString = `
  <h2>${joke[0].delivery}</h2>`;
  renderToDom('#jokeContainer', domString);
  joke.length = 0;
  returnNewJoke();
};

// const fetchJoke = () => {
//   getRequest().then((item) => {
//     renderToDom('#jokeContainer', item.setup);
//   });
// };
// fetchJoke();

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

const init = () => {
  renderHtmlStructure();
  renderJoke();
  // getRequest();
  // fetchJoke();
  // punchline();
  // returnNewJoke();
  // getJokeEvent();
  // getPunchlinEvent();
  // getNewJoke();
};
init();

document.querySelector('#jokeBtnContainer').addEventListener('click', (e) => {
  e.preventDefault();
  switch (e.target.id) {
    case 'getJoke':
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
