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
let popup_close_profile = popup_profile.querySelector('.popup__btn_action_close')
let popup_close_cards = popup_cards.querySelector('.popup__btn_action_close')
let likebutton = document.querySelector('.card__like_btn')
let addCards_btn = document.querySelector('.profile__add_button')
let cardsContainer = document.querySelector('.elements__list')
let popup = document.querySelector('.popup');


function OpenPopup() {
  popup_profile.classList.add('popup_opened');
};

function OpenPopup_cards() {
  popup_cards.classList.add('popup_opened');
};

function ClosePopup_profile() {
    popup_profile.classList.remove('popup_opened');
};

function ClosePopup_cards() {
    popup_cards.classList.remove('popup_opened');
};

redact.addEventListener('click', OpenPopup);
popup_close_profile.addEventListener('click', ClosePopup_profile);
popup_close_cards.addEventListener('click', ClosePopup_cards);
likebutton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_btn_active');
});

addCards_btn.addEventListener('click', OpenPopup_cards);


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

let formElement = popup_profile.querySelector('.popup__form');
formElement.addEventListener('submit', formSubmitHandler);


let formElement1 = popup_cards.querySelector('.popup__form');
function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    let nameInput1 = formElement1.querySelector('.popup__item_type_title');
    let jobInput1 = formElement1.querySelector('.popup__item_type_src');
    addCard(nameInput1.value, jobInput1.value);
    popup_cards.classList.remove('popup_opened');
}
formElement1.addEventListener('submit', formSubmitHandlerCard);



function addCard(imgValue, paragraphValue) {
    const cardTemplate = document.querySelector('#cards_template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    cardElement.querySelector('.card__image').src = imgValue
    cardElement.querySelector('.card__paragraph').textContent = paragraphValue
    cardElement.querySelector('.card__like_btn').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card_like_btn_active');
    });
    cardElement.querySelector('.card__btn_action_del').addEventListener('click', function (evt) {
        evt.target.parentElement.remove();
    });
    cardsContainer.prepend(cardElement);
};

initialCards.forEach(function(item) {
    addCard(item.link, item.name);
});
