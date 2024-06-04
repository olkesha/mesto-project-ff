export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  popup.addEventListener('click', closeModalByOverlay);
  document.addEventListener('keydown', closeModalByEscape);
}

export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  popup.removeEventListener('click', closeModalByOverlay);
  document.removeEventListener('keydown', closeModalByEscape);
}

export function closeModalByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    const popup = evt.target.closest('.popup');
    closeModal(popup);
  }
}

export function closeModalByEscape(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}