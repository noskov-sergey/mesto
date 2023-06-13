const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

let redact = document.querySelector('.profile__redact_btn');
let popup_profile = document.querySelector('.popup__container_profile');
let popup_cards = document.querySelector('.popup__container_cards');
let popopclose = document.querySelector('.popup__btn_action_close')
let likebutton = document.querySelector('.card__like_btn')
let addCards = document.querySelector('.profile__add_button')
let cardsContainer = document.querySelector('.elements__list')

function OpenPopup() {
  popup_profile.classList.add('popup_opened');
};
function OpenPopup_cards() {
  popup_cards.classList.add('popup_opened');
};

function ClosePopup() {
  popup_profile.classList.remove('popup_opened');
};

redact.addEventListener('click', OpenPopup);
popopclose.addEventListener('click', ClosePopup);
likebutton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_btn_active');
});

addCards.addEventListener('click', OpenPopup_cards);

let formElement = document.querySelector('.popup__form')

function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = formElement.querySelector('.popup__item_type_name');
    let jobInput = formElement.querySelector('.popup__item_type_info');
    let oldname = document.querySelector('.profile__name');
    let oldwork = document.querySelector('.profile__profession');
    oldname.textContent = nameInput.value;
    oldwork.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

function addCard(imgValue, paragraphValue) {
    const cardTemplate = document.querySelector('#cards_template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    cardElement.querySelector('.card__image').src = imgValue
    cardElement.querySelector('.card__paragraph').textContent = paragraphValue
    cardElement.querySelector('.card__like_btn').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card_like_btn_active');
    });
    cardsContainer.append(cardElement);
}

initialCards.forEach(function(item) {
    addCard(item.link, item.name);
});