let activeVideo = null;

const playVideo = async videoElement => {
  if (activeVideo && activeVideo !== videoElement) {
    activeVideo.pause(); // Ставим на паузу предыдущее видео
  }

  try {
    await videoElement.play(); // Ждем, пока видео начнет воспроизводиться
    videoElement.controls = true; // Добавляем атрибут controls для текущего видео
    activeVideo = videoElement; // Обновляем активное видео
  } catch (err) {
    console.log(err);
  }
};

// Обработчик для каждого видео, чтобы запустить видео при клике
document.querySelectorAll('.present__video').forEach(videoItem => {
  videoItem.addEventListener('click', function () {
    const video = videoItem.querySelector('video');
    // Если видео не активно, запускаем его
    if (video !== activeVideo) {
      // Убираем кнопку, если она есть
      const button = videoItem.querySelector('.present__play');
      if (button) {
        button.style.display = 'none';
        videoItem.classList.add('bg-hidd');
      }

      // Запускаем текущее видео
      playVideo(video);
    }
  });
});
