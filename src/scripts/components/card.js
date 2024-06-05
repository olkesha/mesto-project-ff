export const deleteCard = (evt) => {
  const parent = evt.target.closest('.places__item');
  parent.remove();
}

export const likeCard = (evt) => {
  const likeCardButton = evt.target.closest('.card__like-button');
  likeCardButton.classList.toggle('card__like-button_is-active');
}

export function createCard(cardTitle, cardURL, deleteCardFunction, likeCardFunction, openImageFunction) {
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
  cardImage.addEventListener('click', () => openImageFunction(cardTitle, cardURL));

  return cardItem;
}