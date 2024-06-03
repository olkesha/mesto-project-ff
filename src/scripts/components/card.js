import { closeModal, closeModalByEscape, closeOverlay } from './modal'

export const deleteCard = (evt) => {
  const parent = evt.target.closest('.places__item');
  parent.remove();
}

export const likeCard = (evt) => {
  const likeCardButton = evt.target.closest('.card__like-button');
  likeCardButton.classList.toggle('card__like-button_is-active');
}

export function createCard(cardTitle, cardURL, deleteCardFunction, likeCardFunction) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteCardButton = cardItem.querySelector('.card__delete-button');
  const likeButton = cardItem.querySelector('.card__like-button');
  const popupOpenImage = document.querySelector('.popup_type_image');
  const cardImage = cardItem.querySelector('.card__image');
  const cardCaption = cardItem.querySelector('.card__title');
  
  cardCaption.textContent = cardTitle;
  cardImage.src = cardURL;
  cardImage.alt = `На фотографии: ${cardTitle}`;

  deleteCardButton.addEventListener('click', deleteCardFunction);
  likeButton.addEventListener('click', likeCardFunction);
  cardImage.addEventListener('click', () => {
    popupOpenImage.classList.add('popup_is-opened');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupOpenImage.querySelector('.popup__close').focus(); // наверное норм делать крестик в фокусе, чтоб при enter попап закрывался
    
    popupImage.src = cardURL;
    popupCaption.textContent = cardTitle;
    popupOpenImage.querySelector('.popup__close').addEventListener('click', closeModal);
    popupOpenImage.addEventListener('keydown', closeModalByEscape);
    popupOpenImage.addEventListener('click', closeOverlay);
  });

  return cardItem;
}