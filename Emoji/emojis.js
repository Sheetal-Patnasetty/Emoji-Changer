const FaceClosed = document.querySelector('.closed');
FaceOpen = document.querySelector('.open');

FaceClosed.addEventListener('click', () => {
  if (FaceOpen.classList.contains('open')) {
    FaceOpen.classList.add('active');
    FaceClosed.classList.remove('active');
  }
});

FaceOpen.addEventListener('click', () => {
  if (FaceClosed.classList.contains('closed')) {
    FaceClosed.classList.add('active');
    FaceOpen.classList.remove('active');
  }
});