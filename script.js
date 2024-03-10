document.getElementById('yes-btn').addEventListener('click', function() {
  window.location.href = 'thankyou.html';
  playSound(); // Start playing the sound when Yes is clicked
});

document.getElementById('no-btn').addEventListener('mousemove', function(event) {
  moveButton(event); // Move the "No" button away from the cursor on mousemove
});

function playSound() {
  var audio = new Audio('crash_landing_soundtrack.mp3');
  audio.play();
}

function moveButton(event) {
  var button = document.getElementById('no-btn');
  var rect = button.getBoundingClientRect();
  var cursorX = event.clientX;
  var cursorY = event.clientY;
  var distanceX = window.innerWidth / 2 - cursorX; // Calculate distance from cursor to window center horizontally
  var distanceY = window.innerHeight / 2 - cursorY; // Calculate distance from cursor to window center vertically
  var offsetX = cursorX + distanceX * 0.1; // Move the button away from the cursor horizontally
  var offsetY = cursorY + distanceY * 0.1; // Move the button away from the cursor vertically
  button.style.left = offsetX + 'px';
  button.style.top = offsetY + 'px';
}
