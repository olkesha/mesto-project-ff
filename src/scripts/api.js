// загрузка информации о пользователе с сервера
export const fetchGetUserData = () => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-17/users/me ', {
    method: 'GET',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// получение начальных карточек
export const fetchGetInitialCards = () => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-17/cards', {
    method: 'GET',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${`Ошибка: ${res.status}`}`);
    })
}

// изменение профиля
export const fetchEditProfile = (profileData) => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-17/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: profileData.name,
      about: profileData.about
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// загрузка новой карточки
export const fetchAddNewCard = (cardData) => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-17/cards', {
    method: 'POST',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: cardData.name,
      link: cardData.link
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
}

// удаление карточки
export const fetchDeleteCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-17/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4'
    },
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// лайкнуть карточку
export const fetchLikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-17/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// убрать лайк с карточки
export const fetchUnlikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/wff-cohort-17/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// обновление аватара
export const fetchUpdateAvatar = (data) => {
  return fetch('https://nomoreparties.co/v1/wff-cohort-17/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'e0f1dd7e-428e-4577-8452-86478473bdb4',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.owner.avatar,
    })
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}