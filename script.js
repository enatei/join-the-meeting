document.getElementById('playButton').addEventListener('click', function() {
    const audioFiles = [
        'assets/audio/audio1.mp3',
        'assets/audio/audio2.mp3',
        'assets/audio/audio3.mp3',
        'assets/audio/audio4.mp3',
        'assets/audio/audio5.mp3'
    ];

    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    const randomAudio = new Audio(audioFiles[randomIndex]);
    randomAudio.play();
});