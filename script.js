const musicFiles = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let currentIndex = 0;

const audioPlayer = document.getElementById('audio-player');
const playlist = document.getElementById('playlist');


musicFiles.forEach((file, index) => {
    const li = document.createElement('li');
    li.textContent = file;
    li.addEventListener('click', () => {
        playMusic(index);
    });
    playlist.appendChild(li);
});

function playMusic(index) {
    currentIndex = index;
    audioPlayer.src = `/music/${musicFiles[index]}`;
    audioPlayer.play();
}


document.getElementById('play').addEventListener('click', () => {
    audioPlayer.play();
});

document.getElementById('pause').addEventListener('click', () => {
    audioPlayer.pause();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + musicFiles.length) % musicFiles.length;
    playMusic(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % musicFiles.length;
    playMusic(currentIndex);
});


audioPlayer.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % musicFiles.length;
    playMusic(currentIndex);
});
