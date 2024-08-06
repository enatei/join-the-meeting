document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('playButton');
    const placeholder = document.querySelector('.button-placeholder');

    function showButtonAfterDelay() {
        if (window.innerWidth < 800) {
            button.style.fontSize = '1.5rem';
            button.style.marginTop = '3.75rem';
            button.style.padding = '1.25rem 3.75rem';
            button.style.borderRadius = '0.5rem'; 
        }

        setTimeout(function() {
            button.classList.remove('hidden');
            placeholder.style.display = 'none'; 
        }, 12000);
    }

    showButtonAfterDelay();

    button.addEventListener('click', function() {
        const audioFiles = [
            'assets/audio/audio1.mp3',
            'assets/audio/audio2.mp3',
            'assets/audio/audio3.mp3',
            'assets/audio/audio4.mp3',
            'assets/audio/audio5.mp3',
            'assets/audio/audio6.mp3',
            'assets/audio/audio7.mp3',
            'assets/audio/audio8.mp3',
            'assets/audio/audio9.mp3',
            'assets/audio/audio10.mp3',
            'assets/audio/audio11.mp3',
            'assets/audio/audio12.mp3',
            'assets/audio/audio13.mp3',
            'assets/audio/audio14.mp3',
            'assets/audio/audio15.mp3',
            'assets/audio/audio16.mp3'
        ];

        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        const randomAudio = new Audio(audioFiles[randomIndex]);
        randomAudio.play();
    });
});