document.body.style.backgroundColor = 'rgb(210, 250, 190';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  selectedDate: 0,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Lets start!');
      options.selectedDate = selectedDates[0].getTime();
      refs.startBtn.disabled = false;
    }
  },
};

let intervalId = null;

flatpickr('input#datetime-picker', options);

refs.startBtn.addEventListener('click', runTimer);

function runTimer() {
  intervalId = setInterval(countdownTimer, 1000);
  refs.startBtn.disabled = true;
}

function countdownTimer() {
  const diff = options.selectedDate - Date.now();
  console.log('different is:', diff);
  if (diff <= 999) {
    console.log('Time is up!');
    Notiflix.Notify.info('Time is up!');
    clearInterval(intervalId);
  }
  const { days, hours, minutes, seconds } = convertMs(diff);
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
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
