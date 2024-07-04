const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-17',
  headers: {
    authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
    'Content-Type': 'application/json'
  }
}

function getResponseData(res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${`Ошибка: ${res.status}`}`);
}

// загрузка информации о пользователе с сервера
export const fetchGetUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then((res) => getResponseData(res))
}

// получение начальных карточек
export const fetchGetInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
    .then((res) => getResponseData(res))
}

// изменение профиля
export const fetchEditProfile = (profileData) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: profileData.name,
      about: profileData.about
    })
  })
    .then((res) => getResponseData(res))
}

// загрузка новой карточки
export const fetchAddNewCard = (cardData) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link
    })
  })
    .then((res) => getResponseData(res));
}

// удаление карточки
export const fetchDeleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => getResponseData(res))
}

// лайкнуть карточку
export const fetchLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then((res) => getResponseData(res))
}

// убрать лайк с карточки
export const fetchUnlikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => getResponseData(res))
}

// обновление аватара
export const fetchUpdateAvatar = (data) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: data.owner.avatar,
    })
  })
    .then((res) => getResponseData(res))
}