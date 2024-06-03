import '../pages/index.css';
import { initialCards } from './cards';
import { deleteCard, likeCard, createCard } from './components/card';
import { closeModal, closeModalByEscape, closeOverlay } from './components/modal';

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupEditProfile.classList.remove('popup_is-opened');
}

// переменные
const formNewPlace = document.querySelector('.popup__form[name=new-place]');
const formEditProfile = document.querySelector('.popup__form[name=edit-profile]');
const cardContainer = document.querySelector('.places__list');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

formNewPlace.addEventListener('submit', function(event) {
  const newCard = createCard(cardName.value, cardLink.value, deleteCard, likeCard);
  cardContainer.prepend(newCard);
  popupNewCard.classList.remove('popup_is-opened');
  event.preventDefault();
  event.target.reset();
});
formEditProfile.addEventListener('submit', handleFormSubmit);

initialCards.forEach((cardData) => {
  const card = createCard(cardData.name, cardData.link, deleteCard, likeCard);
  cardContainer.append(card);
});


// popup'ы
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupOpenImage = document.querySelector('.popup_type_image');
popupEditProfile.classList.add('popup_is-animated');
popupNewCard.classList.add('popup_is-animated');
popupOpenImage.classList.add('popup_is-animated');

// новое место
document.querySelector('.profile__add-button').addEventListener('click', function () {
  popupNewCard.classList.add('popup_is-opened');
  cardName.focus();
  popupNewCard.querySelector('.popup__close').addEventListener('click', closeModal);
  popupNewCard.addEventListener('keydown', closeModalByEscape);
  popupNewCard.addEventListener('click', closeOverlay);
});

// редактировать профиль
document.querySelector('.profile__edit-button').addEventListener('click', function () {
  popupEditProfile.classList.add('popup_is-opened');
  nameInput.focus();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  popupEditProfile.querySelector('.popup__close').addEventListener('click', closeModal);
  popupEditProfile.addEventListener('keydown', closeModalByEscape);
  popupEditProfile.addEventListener('click', closeOverlay);
});
