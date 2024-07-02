import '../pages/index.css'
import { deleteCard, likeCard, unlikeCard, createCard } from './components/card'
import { openModal, closeModal } from './components/modal'
import { enableValidation, clearValidation } from './components/validation'
import { fetchGetUserData, fetchGetInitialCards, fetchEditProfile, fetchAddNewCard, fetchUpdateAvatar } from './api'

Promise.all([fetchGetUserData(), fetchGetInitialCards()])
  .then(([userData, cards]) => {
    const userId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    displayCards(cards, userId);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });

// variables
let userId;
const formNewPlace = document.querySelector('.popup__form[name=new-place]');
const formEditProfile = document.querySelector('.popup__form[name=edit-profile]');
const formUpdateAvatar = document.querySelector('.popup__form[name=update-avatar]');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
const cardContainer = document.querySelector('.places__list');
const cardName = document.querySelector('.popup__input_type_card-name');
const cardLink = document.querySelector('.popup__input_type_url');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const avatarInput = document.querySelector('.popup__input_type_avatar-url');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

function renderLoading(isLoading, popup) {
  if(isLoading) {
    popup.querySelector('.popup__button').textContent = 'Сохранение...';
  } else {
    popup.querySelector('.popup__button').textContent = 'Сохранить';
  }
}

function displayCards(cards, userId) {
  cards.forEach(card => {
    const cardElement = createCard(
      card, 
      userId, 
      deleteCard, 
      likeCard, 
      unlikeCard, 
      openImage);
    cardContainer.append(cardElement);
  });
}

function openImage(cardTitle, cardURL) {
  openModal(popupOpenImage);
  popupCaption.textContent = cardTitle;
  popupImage.src = cardURL;
  popupImage.alt = `На фотографии: ${cardTitle}`;
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupEditProfile);
  
  fetchEditProfile({ name: nameInput.value, about: jobInput.value })
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = jobInput.value;
      closeModal(popupEditProfile);
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
    .finally(() => renderLoading(false, popupEditProfile))
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupNewCard);
  
  fetchAddNewCard({ name: cardName.value, link: cardLink.value })
    .then((newCardData) => {
      const newCard = createCard(
        newCardData, 
        userId, 
        deleteCard, 
        likeCard,
        unlikeCard, 
        openImage)
      
      cardContainer.prepend(newCard);
      closeModal(popupNewCard);
      evt.target.reset();
      clearValidation(popupNewCard);
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
    .finally(() => renderLoading(false, popupNewCard))
}

function handleUpdateAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupUpdateAvatar);

  fetchUpdateAvatar({ owner: { avatar: avatarInput.value} })
    .then((profileData) => {
      profileImage.style.backgroundImage = `url(${profileData.avatar})`;
      closeModal(popupUpdateAvatar);
      evt.target.reset();
      clearValidation(popupUpdateAvatar);
    })
    .catch(error => {
      console.error('Ошибка при загрузке данных:', error);
    })
    .finally(() => renderLoading(false, popupUpdateAvatar))
}

popupEditProfile.classList.add('popup_is-animated');
popupNewCard.classList.add('popup_is-animated');
popupOpenImage.classList.add('popup_is-animated');
popupUpdateAvatar.classList.add('popup_is-animated');

formNewPlace.addEventListener('submit', handleNewPlaceFormSubmit);
formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formUpdateAvatar.addEventListener('submit', handleUpdateAvatarFormSubmit);

// open popupUpdateAvatar
profileImage.addEventListener('click', () => {
  openModal(popupUpdateAvatar);
  avatarInput.value = '';
  avatarInput.focus();
  clearValidation(popupUpdateAvatar);
})

profileImage.addEventListener('mouseover', () => {
  profileImage.querySelector('.profile__image-overlay').style.opacity = '1';
  profileImage.querySelector('.profile__image-update-pen').style.opacity = '1';
})

profileImage.addEventListener('mouseout', () => {
  profileImage.querySelector('.profile__image-overlay').style.opacity = '0';
  profileImage.querySelector('.profile__image-update-pen').style.opacity = '0';
})

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
popupUpdateAvatar.querySelector('.popup__close').addEventListener('click', () => closeModal(popupUpdateAvatar));
popupOpenImage.querySelector('.popup__close').addEventListener('click', () => closeModal(popupOpenImage));
popupNewCard.querySelector('.popup__close').addEventListener('click', () => closeModal(popupNewCard));
popupEditProfile.querySelector('.popup__close').addEventListener('click', () => closeModal(popupEditProfile));

enableValidation();