document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  console.log(key);

  if (!audio) return; //stop function from running

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
});

document.addEventListener("click", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const button = document.querySelector(`.btn[id="${e.key}"]`);
  console.log(e);
  console.log(button);

  if (!audio) return; //stop function from running

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "font-weight") return; //skip it if it's not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
