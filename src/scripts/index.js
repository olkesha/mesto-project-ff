import '../pages/index.css'
import { initialCards } from './cards'
import { deleteCard, likeCard, createCard } from './components/card'
import { openModal, closeModal } from './components/modal'

import { enableValidation, clearValidation } from './components/validation'

// variables
const formNewPlace = document.querySelector('.popup__form[name=new-place]');
const formEditProfile = document.querySelector('.popup__form[name=edit-profile]');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const cardContainer = document.querySelector('.places__list');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function openImage(cardTitle, cardURL) {
  openModal(popupOpenImage);
  popupCaption.textContent = cardTitle;
  popupImage.src = cardURL;
  popupImage.alt = `На фотографии: ${cardTitle}`;
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEditProfile);
}

function handleNewPlaceFormSubmit(evt) {
  const newCard = createCard(cardName.value, cardLink.value, deleteCard, likeCard, openImage);
  cardContainer.prepend(newCard);
  closeModal(popupNewCard);
  evt.preventDefault();
  evt.target.reset();
  clearValidation(popupNewCard);
}

initialCards.forEach((cardData) => {
  const card = createCard(cardData.name, cardData.link, deleteCard, likeCard, openImage);
  cardContainer.append(card); 
});

popupEditProfile.classList.add('popup_is-animated');
popupNewCard.classList.add('popup_is-animated');
popupOpenImage.classList.add('popup_is-animated');

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);
formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);

// open popupNewCard
document.querySelector('.profile__add-button').addEventListener('click', () => {
  openModal(popupNewCard);
  cardName.focus(); // делаю поле в фокусе для удобства
});

// open popupEditProfile
document.querySelector('.profile__edit-button').addEventListener('click', () => {
  openModal(popupEditProfile);
  nameInput.focus(); // делаю поле в фокусе для удобства
  nameInput.value = profileTitle.textContent; // при открытии данные профиля сохраняется в форме
  jobInput.value = profileDescription.textContent;
  clearValidation(popupEditProfile);
});

// close popups
popupOpenImage.querySelector('.popup__close').addEventListener('click', () => closeModal(popupOpenImage));
popupNewCard.querySelector('.popup__close').addEventListener('click', () => closeModal(popupNewCard));
popupEditProfile.querySelector('.popup__close').addEventListener('click', () => closeModal(popupEditProfile));

enableValidation();