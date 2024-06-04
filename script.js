// Lista de enlaces a los archivos de video
const videoUrls = [
  "assets/video1.mp4",
  "assets/video2.mp4",
  "assets/video3.mp4",
];

// Crear código HTML para los elementos <video>
let videoHtml = '';
videoUrls.forEach(url => {
  videoHtml += `
  <video controls class="video-container"><source class="video" src="${url}" type="video/mp4"></video>
  `;
});

// Insertar el código HTML en el contenedor deseado
const videoContainer = document.getElementById("videos");
videoContainer.innerHTML = videoHtml;