(function () {
  const snowflakes = [];
  const numFlakes = 55;

  for (let i = 0; i < numFlakes; i++) {
    snowflakes.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random(),
      speed: 1 + Math.random(),
    });
  }

  const snowContainer = document.createElement('div');
  snowContainer.className = 'snow-container';
  document.body.appendChild(snowContainer);

  snowflakes.forEach((flake) => {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = flake.x + 'px';
    snowflake.style.top = flake.y + 'px';
    snowflake.style.opacity = flake.opacity;
    snowContainer.appendChild(snowflake);

    // Animate the snowflake
    animateSnowflake(snowflake, flake);
  });

  function animateSnowflake(snowflake, flake) {
    setInterval(() => {
      flake.y += flake.speed;

      if (flake.y > window.innerHeight) {
        flake.y = 0;
      }

      snowflake.style.top = flake.y + 'px';
    }, 30);
  }
})();

// Show loading spinner while the page is loading
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loading-spinner").style.display = "flex";
});

// Hide loading spinner when the page is fully loaded
window.addEventListener("load", function () {
  document.getElementById("loading-spinner").style.display = "none";
});


