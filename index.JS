// Obtener el elemento de audio y el botón de reproducción (imagen)
const audioPlayer = document.getElementById('audio-player');
const italyButton = document.getElementById('italy');

// Agregar un evento de clic al botón para reproducir la música al hacer clic en la imagen
italyButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play(); // Si la música está pausada, la reproducimos
  } else {
    audioPlayer.pause(); // Si la música está reproduciendo, la pausamos
  }
});

// Obtener el elemento del mensaje
const messageBox = document.getElementById('message-box');

// Mostrar el mensaje durante 6 segundos al cargar la página
messageBox.classList.remove('hidden');
setTimeout(() => {
  messageBox.classList.add('hidden');
}, 6000);


