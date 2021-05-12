var toggle = document.getElementById('toggle'),
  wrapper = document.querySelectorAll('.subscribe'),
  submit = document.getElementById('submit'),
  success = document.querySelectorAll('.subscribe__success'),
  content = document.querySelectorAll('.subscribe__wrapper');

toggle.addEventListener('click', function() {
  this.className += ' subscribe__toggle__hidden';
  wrapper[0].className += ' subscribe-1__active';
});

submit.addEventListener('click', function() {
  success[0].className += ' subscribe__success--active';
  wrapper[0].className += ' subscribe-1__success';
  content[0].style.display = 'none';
});