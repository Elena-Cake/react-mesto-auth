//___________________________________
//  ЗАПРОСЫ СЕРВЕРУ
//___________________________________

class Api {
    constructor({ baseUrl, headers }) {
        this._startRequest = baseUrl
        this._headers = headers

        this._checkRes = (res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
        };
    }

    // загрузка данных пользователя
    startPageProfile() {
        return fetch(`${this._startRequest}/users/me`, {
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    // запрос карточек с сервера
    startPageCards() {
        return fetch(`${this._startRequest}/cards`, {
            headers: this._headers,
        })
            .then(this._checkRes)
    }

    // изменение профайла
    editUserInfo(dataUser) {
        return fetch(`${this._startRequest}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser)
        })
            .then(this._checkRes)
    }

    // изменение аватара в профиле
    editUserAvatar(avatar) {
        return fetch(`${this._startRequest}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        })
            .then(this._checkRes)
    }

    // сохранить карточку
    sendCard = (dataCard) => {
        return fetch(`${this._startRequest}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(dataCard)
        })
            .then(this._checkRes)
    }

    // удалить карточку
    deleteCard = (idCard) => {
        return fetch(`${this._startRequest}cards/${idCard}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    // поставить лайк
    sendLike = (idCard) => {
        return fetch(`${this._startRequest}cards/${idCard}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    // удалить лайк
    deleteLike = (idCard) => {
        return fetch(`${this._startRequest}cards/${idCard}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRes)
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54/',
    headers: {
        authorization: 'b54228be-8e0f-45cf-a3af-cf408891c36e',
        'Content-Type': 'application/json'
    }
})
