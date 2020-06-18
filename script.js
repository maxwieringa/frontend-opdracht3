let data = null;
const header = document.querySelector('header');
const main = document.querySelector('main');
const section = document.getElementById('joke')
const upvote = document.getElementById('upvote');
const downvote = document.getElementById('downvote');
const newJoke = document.querySelector('button');
const upvoteImg = document.getElementById('upvoteimg');
const downvoteImg = document.getElementById('downvoteimg');

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

// Functies die worden uitgevoerd wanneer de pagina laadt.
xhr.onload = function() {
  const jokes = xhr.response;
  jokeParagraph(jokes);
  populateUpvotes(jokes);
  populateDownvotes(jokes);
}

// Maakt paragraaf element waarin de grap wordt gedaan die door de json verstuurd wordt
function jokeParagraph(jsonObj) {
  const myPara = document.createElement('p');
  myPara.textContent = jsonObj['content'];
  section.appendChild(myPara);
}

// Maakt een paragraaf aan zodat je het aantal upvotes ziet
function populateUpvotes(jsonObj) {
  const upvotePara = document.createElement('p');
  upvotePara.setAttribute('id', 'upvotePara');
  upvotePara.textContent = jsonObj['upvotes'];
  upvote.appendChild(upvotePara);
  return;
}

// Maakt een paragraaf aan zodat je het aantal downvotes ziet
function populateDownvotes(jsonObj) {
  const downvotePara = document.createElement('p');
  downvotePara.setAttribute('id', 'downvotePara');
  downvotePara.textContent = jsonObj['downvotes'];
  downvote.appendChild(downvotePara);
  return;
}

// Reload de pagina
function reload() {
  window.location.reload(true);
}

// Doet +1 op de huidge aantal upvotes
function upvoteAdd() {
  const upvotePara = document.getElementById('upvotePara');
  const downvotePara = document.getElementById('downvotePara');
  let upvoteTxt = upvotePara.textContent;
  let upvoteNumber = parseFloat(upvoteTxt);
  let downvoteTxt = downvotePara.textContent;
  let downvoteNumber = parseFloat(downvoteTxt);
  upvotePara.textContent = upvoteNumber + 1;
  downvotePara.textContent = downvoteNumber - 1;
  upvoteImg.removeEventListener('click', upvoteAdd);
}

// Doet +1 op de huidige aantal downvotes
function downvoteAdd() {
  const downvotePara = document.getElementById('downvotePara');
  const upvotePara = document.getElementById('upvotePara');
  let downvoteTxt = downvotePara.textContent;
  let downvoteNumber = parseFloat(downvoteTxt);
  let upvoteTxt = upvotePara.textContent;
  let upvoteNumber = parseFloat(upvoteTxt);
  downvotePara.textContent = downvoteNumber + 1;
  upvotePara.textContent = upvoteNumber - 1;
  downvoteImg.removeEventListener('click', downvoteAdd);
}

// Alle eventlisteners
newJoke.addEventListener('click', reload);
window.addEventListener("keydown", function(event) {
  if (event.keyCode == 32) {
    reload();
  }
});

upvoteImg.addEventListener('click', upvoteAdd);
downvoteImg.addEventListener('click', downvoteAdd);