import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDom from '../utils/renderFunction';

const joke = getRequest();
console.warn(joke);

const renderHtmlStructure = () => {
  const domString = `
  <h1 id="jokeTitle">Joke Generator</h1>
  <div id="jokeContainer"></div>
  <div id="jokeBtnContainer"></div>
  `;
  renderToDom('#app', domString);
};

const renderJoke = () => {
  const domString = `
  <button "type="button" id="getJoke1" class="btn btn-dark">Get Joke</button>`;
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

const fetchJoke = () => {
  getRequest().then((item) => {
    renderToDom('#jokeContainer', item.setup);
  });
};

const getJokeEvent = () => {
  document.querySelector('#getJoke1').addEventListener('click', () => {
    getRequest().then(console.warn);
  });
};

const getPunchlinEvent = () => {
  document.querySelector('#getJoke2').addEventListener('click', () => {
    getRequest().then(console.warn);
  });
};

const getNewJoke = () => {
  document.querySelector('#getJoke3').addEventListener('click', () => {
    getRequest().then(console.warn);
  });
};

const init = () => {
  renderHtmlStructure();
  getRequest();
  renderJoke();
  fetchJoke();
  punchline();
  returnNewJoke();
  getJokeEvent();
  getPunchlinEvent();
  getNewJoke();
};
init();

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
