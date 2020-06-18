let data = null;
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.querySelector('section');
const newJoke = document.querySelector('button');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

/*xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});*/

xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke?nsfw=false");
xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a8b6dd0768msh1e6f6d88e2dff38p19821cjsn1e0357e0b724");
xhr.responseType = 'json';
xhr.send(data);

xhr.onload = function() {
  const jokes = xhr.response;
  jokeParagraph(jokes);
  populateUpvotes(jokes);
  populateDownvotes(jokes);
}

function jokeParagraph(jsonObj) {
  const myPara = document.createElement('p');
  myPara.textContent = jsonObj['content'];
  section.appendChild(myPara);
}

function populateUpvotes(jsonObj) {
  const upvotePara = document.createElement('p');
  upvotePara.textContent = jsonObj['upvotes'];
  section.appendChild(upvotePara);
}

function populateDownvotes(jsonObj) {
  const downvotePara = document.createElement('p');
  downvotePara.textContent = jsonObj['downvotes'];
  section.appendChild(downvotePara);
}

function reload() {
  window.location.reload(true);
}

newJoke.addEventListener('click', reload);
window.addEventListener("keydown", function(event) {
  if (event.keyCode == 32) {
    reload();
  }
});