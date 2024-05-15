const form = document.querySelector('.popup__form[name=new-place]').addEventListener('submit', function(event) {
  const newCard = createCard(cardName.value, cardLink.value, deleteCard);
  cardContainer.prepend(newCard);
  popupCard.classList.remove('popup_is-opened');
  event.preventDefault();
  event.target.reset();
}); // чтобы страница не обновлялась при submit

// @todo: Темплейт карточки
// @todo: DOM узлы
// @todo: Функция создания карточки
// @todo: Функция удаления карточки
// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');
const saveNewCardButton = document.querySelector('.popup__button-new-card');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const deleteCard = (evt) => {
  const parent = evt.target.closest('.places__item');
  parent.remove();
}

function createCard(cardTitle, cardURL, deleteCardFunction) {
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteCardButton = cardItem.querySelector('.card__delete-button');
  const cardImage = cardItem.querySelector('.card__image');

  cardItem.querySelector('.card__title').textContent = cardTitle;
  cardImage.src = cardURL;
  cardImage.alt = `На фотографии: ${cardTitle}`;

  deleteCardButton.addEventListener('click', deleteCardFunction);

  return cardItem;
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData.name, cardData.link, deleteCard);
  cardContainer.append(card);
});


// открыть и закрыть popup
const popupCard = document.querySelector('.popup_type_new-card');
popupCard.classList.add('popup_is-animated');

document.querySelector('.profile__add-button').addEventListener('click', () => popupCard.classList.add('popup_is-opened'));

popupCard.querySelector('.popup__close').addEventListener('click', function() {
  popupCard.classList.remove('popup_is-opened');
});