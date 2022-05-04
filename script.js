document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return; //stop function from running
  audio.currentTime = 0;
  audio.play();
});
