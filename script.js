        //  pre loader

// Hide preloader after page loads
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  setTimeout(() => {
      preloader.classList.add("hidden");
      content.style.display = "block";
  }, 1000); // Delay for 2 seconds
});







let isPlaying = false;
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const albumImage = document.getElementById('albumImage');
const audioSource = document.getElementById('audioSource');

// List of songs (replace with your actual song files)
const songs = [
  { title: "song",  file: "audio/song1.mp3", image: "images/1.jpg" },
  // { title: "Song ",  file: "audio/song2.mp3", image: "images/2.jpg" },
  // { title: "Song ",  file: "audio/song3.mp3", image: "images/3.jpg" },
  { title: "Song ",  file: "audio/song4.mp3", image: "images/song2.jpg" }
];

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    albumImage.style.animationPlayState = 'paused';
  } else {
    audioPlayer.play();
    albumImage.style.animationPlayState = 'running';
  }
  isPlaying = !isPlaying;
  document.querySelector('button[onclick="togglePlay()"]').textContent = isPlaying ? 'Pause' : 'Play';
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Cycle backwards
  loadSong(currentSongIndex);
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Cycle forwards
  loadSong(currentSongIndex);
}

function loadSong(index) {
  audioSource.src = songs[index].file;
  albumImage.src = songs[index].image;
  document.querySelector('h3').textContent = songs[index].title;
  audioPlayer.load();
  if (isPlaying) {
    audioPlayer.play();
    albumImage.style.animationPlayState = 'running';
  }
}





// carousel


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,                // Show 1 item at a time
        loop: true,              // Infinite loop
        margin: 10,              // Space between items
        autoplay: true,          // Auto play the carousel
        autoplayTimeout: 2000,   // Time between slides in ms (2000ms = 2 seconds)
        autoplayHoverPause: true // Pause autoplay on hover
    });
});



document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video-id');
        const video = document.getElementById(videoId);
        video.play();
    });
});

document.querySelectorAll('.pause-btn').forEach(button => {
    button.addEventListener('click', function () {
        const videoId = this.getAttribute('data-video-id');
        const video = document.getElementById(videoId);
        video.pause();
    });
});




// Optional: Add a typewriter effect for a more romantic touch
const loveQuote = document.querySelector('.love-quote');
let text = loveQuote.innerText;
let index = 0;

loveQuote.innerText = ''; // Clear the text initially

function typeWriter() {
  if (index < text.length) {
    loveQuote.innerText += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Delay between each character
  }
}

window.onload = () => {
  typeWriter();
};



