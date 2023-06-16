// Add some styles for interface
// 1.Connect the library
// 2.Create refs and add listeners
// 3.Create current date

document.body.style.backgroundColor = 'rgb(210, 250, 190';
// ---1---
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const now = new Date().getTime();
console.log('now is:', now);

const options = {
  selectedDate: 0,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      options.selectedDate = selectedDates[0].getTime();
      console.log('selected is:', selectedDates[0].getTime());
      console.log(options.selectedDate);
      refs.button.disabled = false;
      // console.log(options.defaultDate);
    }
  },
};

// ---2---
const refs = {
  button: document.querySelector('button[data-start]'),
};

flatpickr('input#datetime-picker', options);

refs.button.addEventListener('click', runTimer);

function runTimer() {
  countdownTimer();
}

function countdownTimer() {
  const diff = options.selectedDate - new Date().getTime();
  console.log('diff is:', diff);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
