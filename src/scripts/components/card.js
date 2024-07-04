import { fetchDeleteCard, fetchLikeCard, fetchUnlikeCard } from "./api"

export const deleteCard = (card, cardElement) => {
  fetchDeleteCard(card._id)
    .then(() => {
      cardElement.remove();
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
}

export const likeCard = (card, likeButton, likeCount) => {
  fetchLikeCard(card._id)
    .then((updatedCard) => {
      likeButton.classList.add('card__like-button_is-active');
      likeCount.textContent = updatedCard.likes.length;
      card.likes = updatedCard.likes;
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
}

export const unlikeCard = (card, likeButton, likeCount) => {
  fetchUnlikeCard(card._id)
    .then((updatedCard) => {
      likeButton.classList.remove('card__like-button_is-active');
      likeCount.textContent = updatedCard.likes.length;
      card.likes = updatedCard.likes;
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
}

export function createCard(card, userId, deleteCardFunction, likeCardFunction, unlikeCardFunction, openImageFunction) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteCardButton = cardItem.querySelector('.card__delete-button');
  const likeCardButton = cardItem.querySelector('.card__like-button');
  const cardImage = cardItem.querySelector('.card__image');
  const cardCaption = cardItem.querySelector('.card__title');
  const cardNumberOfLikes = cardItem.querySelector('.card__like-number');

  cardCaption.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = `На фотографии: ${card.name}`;
  cardNumberOfLikes.textContent = card.likes.length;

  deleteCardButton.addEventListener('click', () => deleteCardFunction(card, cardItem));
  likeCardButton.addEventListener('click', () => {
    if(likeCardButton.classList.contains('card__like-button_is-active')) {
      unlikeCardFunction(card, likeCardButton, cardNumberOfLikes);
    } else {
      likeCardFunction(card, likeCardButton, cardNumberOfLikes);
    }
  });
  cardImage.addEventListener('click', () => openImageFunction(card.name, card.link));
  
  if (card.likes.some(like => like._id === userId)) {
    likeCardButton.classList.add('card__like-button_is-active');
  } else {
    likeCardButton.classList.remove('card__like-button_is-active');
  }
  
  if (card.owner._id === userId) {
    deleteCardButton.style.display = 'block';
  } else {
    deleteCardButton.style.display = 'none';
  }

  return cardItem;
}