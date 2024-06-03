export const openModal = (evt) => {
  const popup = evt.target.closest('.popup');
  popup.classList.add('popup_is-opened');
}

export const closeModal = (evt) => {
  const popup = evt.target.closest('.popup');
  popup.classList.remove('popup_is-opened');
}

export const closeModalByEscape = (evt) => {
  if(evt.key === 'Escape') {
    const popup = evt.target.closest('.popup');
    popup.classList.remove('popup_is-opened');
  }
}

export const closeOverlay = (evt) => {
  if (evt.currentTarget === evt.target) {
    const popup = evt.target.closest('.popup');
    popup.classList.remove('popup_is-opened');
  }
}