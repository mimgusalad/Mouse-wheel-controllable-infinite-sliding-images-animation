const container = document.querySelector('.container');

container.addEventListener('mousewheel', (e) => {
  // Normalize the wheel delta across browsers
  const normalizedWheelDelta = e.wheelDelta || -e.detail;

  // Adjust scroll position based on wheel delta
  container.scrollLeft += normalizedWheelDelta;
});