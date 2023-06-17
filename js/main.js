'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const ARRAY_OF_PHOTO_URL = [
        'img/img/1.jpg',
        'img/img/2.jpg',
        'img/img/3.jpg',
        'img/img/4.jpg',
        'img/img/5.jpg',
        'img/img/6.jpg',
        'img/img/7.jpg',
        'img/img/8.jpg',
        'img/img/9.jpg',
        'img/img/10.jpg',
        'img/img/11.jpg',
        'img/img/12.jpg',
        'img/img/13.jpg',
        'img/img/14.jpg',
        'img/img/15.jpg',
        'img/img/16.jpg',
        'img/img/17.jpg',
        'img/img/18.jpg',
        'img/img/19.jpg',
        'img/img/20.jpg',
        'img/img/21.jpg',
        'img/img/22.jpg',
        'img/img/23.jpg',
        'img/img/24.jpg',
        'img/img/25.jpg',
    ]
    const ARRAY_OF_COMMENTS = [
        'Всё отлично!',
        'В целом всё неплохо. Но не всё.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
        'Отличная композиция!',
        'Великолепная фотография!',
        'Вы сделали очень красиво!',
        'Мне нравится игра света на фото.',
        'Какой потрясающий сюжет на этом снимке!',
        'Замечательный момент!',
        'Вы справились с задачей на отлично!',
        'Я в восторге от этой фотографии!',
        'Потрясающий уровень мастерства!',
        'Сильная и убедительная работа!',
        'Какая прекрасная цветовая гамма на снимке!',
        'Эмоционально и красиво!',
        'Ты непревзойденна, когда дело доходит до фотографий!',
        'Отличная работа!',
        'Я получаю удовольствие от рассмотрения этого кадра!',
        'Отличное восприятие света и цвета на фото!',
        'Удивительная экспозиция!',
        'Какой крутой ракурс на этой фотографии!',
        'Вы отчетливо видите свою жизнь!',
        'Такое прекрасное место для фотосессии!'
    ];
    const ARRAY_OF_USER_NAMES = [
        'Артем',
        'Маша',
        'Александра',
        'Николай',
        'Алексей',
        'Лера',
        'Артемий',
        'Виктория',
        'Константин',
        'Эда',
        'Данила',
        'Валерий',
        'Лиза',
        'Катерина',
        'Кирилл',
        'Аня',
        'Маргарита',
        'Дмитрий',
        'Юля',
        'Анастасия',
        'Оля',
        'Ира',
        'Максим',
        'Александр',
        'Стас'
    ];
    const ARRAY_OF_URL_OF_AVATARS = [
        'img/avatars/avatar-1.jpg',
        'img/avatars/avatar-2.jpg',
        'img/avatars/avatar-3.jpg',
        'img/avatars/avatar-4.jpg',
        'img/avatars/avatar-5.jpg',
        'img/avatars/avatar-6.jpg',
        'img/avatars/avatar-7.jpg',
        'img/avatars/avatar-8.jpg',
        'img/avatars/avatar-9.jpg',
        'img/avatars/avatar-10.jpg',
        'img/avatars/avatar-11.jpg',
        'img/avatars/avatar-12.jpg',
        'img/avatars/avatar-13.jpg',
        'img/avatars/avatar-14.jpg',
        'img/avatars/avatar-15.jpg',
        'img/avatars/avatar-16.jpg',
        'img/avatars/avatar-17.jpg',
        'img/avatars/avatar-18.jpg',
        'img/avatars/avatar-20.jpg',
        'img/avatars/avatar-21.jpg',
        'img/avatars/avatar-22.jpg',
        'img/avatars/avatar-23.jpg',
        'img/avatars/avatar-24.jpg',
        'img/avatars/avatar-25.jpg',
      
    ];
    const ARRAY_OF_DESCRIPTIONS = [
        'Тестим новую камеру!',
        'Затусили с друзьями на море',
        'Как же круто тут кормят',
        'Отдыхаем...',
        'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомнения. Не обижайте всех словами......',
        'Вот это тачка!',
        'Релаксирую на природе',
        'Смотрю на мир другими глазами',
        'Просто наслаждаюсь жизнью',
        'Иногда нужно просто остановиться и задуматься',
        'Подбадриваю себя этой красотой перед занятиями',
        'Ничто не придает сил как занятия спортом',
        'Мечты сбываются, нужно только верить',
        'Прокрастинация - мой главный враг, но я борюсь с ней!',
        'Лучшее время для новых начинаний - сейчас!',
        'Ммм. Счастье в мелочах',
        'Это тот момент, когда я решил стать лучше',
        'Что может быть лучше внутреннего умиротворения?',
        'Я счастлив, потому что я делаю то, что люблю',
        'Зацените эту красоту!',
        'Мое любимое место :)',
        'Каждый день я стараюсь быть лучше, чем вчера',
        'Наслаждаюсь этими каникулами до последней минуты',
        'Счастье есть - и это главное!'
    ];   
    const ARRAY_OF_USED_PHOTO_URL = []
    const ARRAY_OF_USED_COMMENTS = [];
    const ARRAY_OF_USED_USER_NAMES = [];
    const ARRAY_OF_USED_URL_OF_AVATARS = [];
    const ARRAY_OF_USED_DESCRIPTIONS = [];
    function getRandomSomething(array, arrayOfUsedElements) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * array.length);
        } while (arrayOfUsedElements.includes(randomIndex));
        arrayOfUsedElements.push(randomIndex);
        return array[randomIndex];
    }
    const descrOfPhotos = [];
    for (let i = 0; i < 10; i++) {
        descrOfPhotos[i] = {
            url: getRandomSomething(ARRAY_OF_PHOTO_URL, ARRAY_OF_USED_PHOTO_URL),
            likes: Math.floor(Math.random() * (200 - 15 + 1) + 15),
            comments: [
                {
                    avatar: getRandomSomething(ARRAY_OF_URL_OF_AVATARS, ARRAY_OF_USED_URL_OF_AVATARS),
                    message: getRandomSomething(ARRAY_OF_COMMENTS, ARRAY_OF_USED_COMMENTS),
                    name: getRandomSomething(ARRAY_OF_USER_NAMES, ARRAY_OF_USED_USER_NAMES)
                }
            ],
            description: getRandomSomething(ARRAY_OF_DESCRIPTIONS, ARRAY_OF_USED_DESCRIPTIONS)
        }
    }
    const mainWrapper = document.querySelector('.pictures');
    const arrayOfPictures = [];
    function createNewPost(obj) { 
        let comm = obj.comments[0];
        const wrapOfPicture = document.createElement('div');
        wrapOfPicture.classList.add('wrap-of-picture');
        wrapOfPicture.innerHTML = `
            <img class="picture" src="${obj.url}">
            <div class="content__wrapper">
                <div class="content__wr">
                    <div class="picture__description">${obj.description}</div>
                    <div class="like-wrapper">
                        <img class="like-icon" src="img/like_icon.png">
                        <div class="picture__likes">${obj.likes}</div>
                    </div>
                </div>
                <div class="comments__wrapper">
                    <div class="comments__descr-wr"></div>
                    <div class="comment___el">
                        <img class="comment__avatar" src="${comm.avatar}">
                        <div class="comment__text">${comm.message}</div>
                    </div>
                </div>
            </div>
        `;
        mainWrapper.append(wrapOfPicture);
        arrayOfPictures.push(wrapOfPicture);
    }
    for (let i = 0; i < descrOfPhotos.length; i++) {
        let j = descrOfPhotos[i];
        createNewPost(j);
    };
    function showBigPicture(element) { 
        const mainContainer = document.querySelector('main');
        const pictureImg = element.querySelector('.picture');
        const pictureLikes = element.querySelector('.picture__likes');
        const pictureDescr = element.querySelector('.picture__description');
        const pictureContent = element.querySelector('.content__wrapper');
        const commentsText = element.querySelector('.comment__text');
        const commentsAvatar = element.querySelector('.comment__avatar');
        const bigPictureTemplate = `
            <div class="wrapper-of-big-picture">
                <div class="big-picture">
                    <img class="big-picture__img" src="${pictureImg.src}"
                    <div class="big-picture__content ${pictureContent.classList}">
                        <div class="big-picture__content-descr">
                            <div class="big-picture__descr">${pictureDescr.textContent}</div>
                            <div class="big-picture__like-wrapper">
                                <img class="big-picture__like-icon" src="img/like_icon.png">
                                <div class="big-picture__likes">${pictureLikes.textContent}</div>
                            </div>
                        </div>
                        <div class="comments__wrapper">
                            <div class="comments__descr-wr">
                                <div>Комментарии:</div>
                            </div>
                            <div class="comment___el">
                                <img src="${commentsAvatar.src}" class="comment__avatar">
                                <div class="comment__text">${commentsText.textContent}</div>
                            </div>
                        </div>
                    </div>
                    <img class="btn-close" src="img/close.png" id="red-cross">
                </div>
            </div>
        `;
        mainContainer.insertAdjacentHTML('beforebegin', bigPictureTemplate);
        const wrapperOfBigPicture = document.querySelector('.wrapper-of-big-picture');
        wrapperOfBigPicture.classList.remove('hidden');
        function hideBigPicture() {
            document.querySelector('#red-cross').addEventListener('click', function(event) {
                if (event.target) {
                    let wrapperOfBigPicture = document.querySelector('.wrapper-of-big-picture');
                    wrapperOfBigPicture.remove(wrapperOfBigPicture);
                    arrayOfPictures.forEach(el => {
                        el.classList.remove('not-click');
                    })
                } else {
                    console.log('Error');
                }
            })
        }
        hideBigPicture();
    }
    arrayOfPictures.forEach(el => {
        el.addEventListener('click', (event) => {
            let index = arrayOfPictures.indexOf(el);
            if (event.target) {
                showBigPicture(arrayOfPictures[index]);
            } else {
                console.log('Error');
            }
        });
    });
})














