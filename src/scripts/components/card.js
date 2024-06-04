import { openModal, closeModal } from './modal'
import { popupOpenImage } from '../index'

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
  const cardImage = cardItem.querySelector('.card__image');
  const cardCaption = cardItem.querySelector('.card__title');
  
  cardCaption.textContent = cardTitle;
  cardImage.src = cardURL;
  cardImage.alt = `На фотографии: ${cardTitle}`;

  deleteCardButton.addEventListener('click', deleteCardFunction);
  likeButton.addEventListener('click', likeCardFunction);
  cardImage.addEventListener('click', () => {
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    openModal(popupOpenImage);
    popupImage.src = cardURL; // передаем данные карточки в элементы popup'а popup_type_image
    popupCaption.textContent = cardTitle;
    popupOpenImage.querySelector('.popup__close').addEventListener('click', () => closeModal(popupOpenImage));
  });

  return cardItem;
}