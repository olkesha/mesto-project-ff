document.querySelector('.popup__form[name=edit-profile]').addEventListener('submit', function(event) {
  event.preventDefault();
});
document.querySelector('.popup__form[name=new-place]').addEventListener('submit', function(event) {
  event.preventDefault();
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

function addNewCard(cardTitle, cardImage, deleteCardFunction) {
  const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteCardButton = cardItem.querySelector('.card__delete-button');

  cardItem.querySelector('.card__title').textContent = cardTitle;
  cardItem.querySelector('.card__image').src = cardImage;
  cardItem.querySelector('.card__image').alt = `На фотографии: ${cardTitle}`;

  deleteCardButton.addEventListener('click', deleteCardFunction);

  cardName.value = '';
  cardLink.value = '';
  return cardItem;
}

initialCards.forEach((cardData) => {
  const card = addNewCard(cardData.name, cardData.link, deleteCard);
  cardContainer.append(card);
});

saveNewCardButton.addEventListener('click', () => {
  const newCard = addNewCard(cardName.value, cardLink.value, deleteCard);
  cardContainer.prepend(newCard);
  popupCard.classList.remove('popup_is-opened');
});




// открыть и закрыть popup
const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_new-card');
popupProfile.classList.add('popup_is-animated');
popupCard.classList.add('popup_is-animated');

document.querySelector('.profile__add-button').addEventListener('click', () => popupCard.classList.add('popup_is-opened'));
document.querySelector('.profile__edit-button').addEventListener('click', () => popupProfile.classList.add('popup_is-opened'));

popupProfile.querySelector('.popup__close').addEventListener('click', function() {
  popupProfile.classList.remove('popup_is-opened');
  username.value = '';
  userOccupation.value = '';
});
popupCard.querySelector('.popup__close').addEventListener('click', function() {
  popupCard.classList.remove('popup_is-opened');
  cardName.value = '';
  cardLink.value = '';
});



// перезаписать значения профиля. Я сначала не заметил, что надо только карточки выводить))
const saveProfileSettingsButton = document.querySelector('.popup__button-edit');
let username = document.querySelector('.popup__input_type_name');
let userOccupation = document.querySelector('.popup__input_type_description');

saveProfileSettingsButton.addEventListener('click', function() {
  if (username.value === '' || userOccupation.value === '') {
    alert('Пожалуйста, заполните профиль!');
    return popupProfile.classList.add('popup_is-opened'); // не придумал как иначе не закрывать попап
  } else {
    document.querySelector('.profile__title').textContent = username.value;
    document.querySelector('.profile__description').textContent = userOccupation.value;
  }
  
  popupProfile.classList.remove('popup_is-opened');
  username.value = '';
  userOccupation.value = '';
})