var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://joke3.p.rapidapi.com/v1/joke?nsfw=false");
xhr.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a8b6dd0768msh1e6f6d88e2dff38p19821cjsn1e0357e0b724");

xhr.send(data);