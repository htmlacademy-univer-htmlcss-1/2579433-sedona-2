document.getElementById("modal-close").addEventListener('click', () => {
  document.querySelector(".modal-container").classList.add('visually-hidden');
});

document.getElementById('first-modal-trigger-button').addEventListener('click', () => {
  document.querySelector(".modal-container").classList.remove('visually-hidden');
});

document.getElementById('second-modal-trigger-button').addEventListener('click', () => {
  document.querySelector(".modal-container").classList.remove('visually-hidden');
});
