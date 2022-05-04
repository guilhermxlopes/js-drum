document.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  console.log(audio);
  console.log(e.key);
});
