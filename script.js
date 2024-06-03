document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openLetter");
  const modal = document.getElementById("letterModal");
  const closeButton = document.querySelector(".close-button");
  const buttonMusic = document.getElementById("buttonMusic");
  const confettiButton = document.getElementById("confettiButton");
  const leftImages = [
    document.getElementById("leftImage1"),
    document.getElementById("leftImage2"),
    document.getElementById("leftImage3"),
  ];
  const rightImages = [
    document.getElementById("rightImage1"),
    document.getElementById("rightImage2"),
    document.getElementById("rightImage3"),
  ];

  confettiButton.addEventListener("click", () => {
    buttonConfetti();
    showConfetti();
  });

  openButton.addEventListener("click", () => {
    modal.style.display = "block";
    playConfetti();
    showSlidingImages();
    buttonConfetti();
    showConfetti();
  });

  closeButton.addEventListener("click", () => {
    closeModal(modal);
    fadeOutAudio(buttonMusic);
    hideSlidingImages();
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      closeModal(modal);
      fadeOutAudio(buttonMusic);
      hideSlidingImages();
    }
  });

  function createRose() {
    const roseContainer = document.getElementById("roseContainer");
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 3 + 2 + "s";
    roseContainer.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 5000);
  }

  setInterval(createRose, 500);

  function playConfetti() {
    buttonMusic.currentTime = 0;
    buttonMusic.play();
  }

  function closeModal(modal) {
    modal.classList.add("slide-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("slide-out");
    }, 500); // Match this duration to the slide-out animation
  }

  function fadeOutAudio(audio) {
    let fadeAudio = setInterval(() => {
      if (audio.volume > 0.1) {
        audio.volume -= 0.1;
      } else {
        clearInterval(fadeAudio);
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1; // Reset volume for next play
      }
    }, 100); // Adjust this interval to control the fade-out speed
  }

  function showSlidingImages() {
    leftImages.forEach((img, index) => {
      setTimeout(() => {
        img.classList.remove("hidden");
        img.classList.add("show");
      }, index * 100); // Staggered animation for each image
    });
    rightImages.forEach((img, index) => {
      setTimeout(() => {
        img.classList.remove("hidden");
        img.classList.add("show");
      }, index * 100); // Staggered animation for each image
    });
  }

  function hideSlidingImages() {
    leftImages.forEach((img) => {
      img.classList.remove("show");
      img.classList.add("hidden", "left");
    });
    rightImages.forEach((img) => {
      img.classList.remove("show");
      img.classList.add("hidden");
    });
  }
});

var typing = new Typed(".typing", {
  strings: ["Leizel", "baby ko", "my love", "Leizel Mae Ann Ticoy"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});

function buttonConfetti() {
  confetti({
    particleCount: 150,
    spread: 500,
  });
}

function playConfetti() {
  const audio = document.getElementById("confettiSound");
  audio.currentTime = 0;
  audio.play();
}

function showConfetti() {
  confetti({
    particleCount: 50,
    angle: 50,
    spread: 55,
    origin: { x: 0 },
  });
  confetti({
    particleCount: 50,
    angle: 130,
    spread: 55,
    origin: { x: 1 },
  });
}
