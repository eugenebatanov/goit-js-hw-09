// 1.Create refs
// 2.Connect listeners
// 3.Add function to start changing background color
// 4.Add setInterval
// 5.Add function to stop changing background color
// 6.Make the button disabled

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', startChangeBackground);
refs.stop.addEventListener('click', stopChangeBackground);

let intervalId = null;

function changeBackgroundColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const newBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = newBackgroundColor;
}

function startChangeBackground() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
  // console.log(intervalId);
}

function stopChangeBackground() {
  // console.log(intervalId);
  clearInterval(intervalId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
}
