const PREVIEW_URL = 'https://img.youtube.com/vi';
const PreviewUrls = {
  DEFAULT: 'default.jpg', //
  HIGH: 'hqdefault.jpg', // For the high quality version of the thumbnail use a URL similar to this
  MEDIUM: 'mqdefault.jpg', //  There is also a medium quality version of the thumbnail, using a URL similar to the HQ
  STANDART: 'sddefault.jpg', // For the standard definition version of the thumbnail, use a URL similar to this
  MAX: 'maxresdefault.jpg', // For the maximum resolution version of the thumbnail use a URL similar to this
};

const PLAYER_IMAGE = PreviewUrls.STANDART;
const SLIDE_IMAGE = PreviewUrls.MEDIUM;
const BACKGROUND_IMAGE = PreviewUrls.STANDART;
const ACTIVE_BUTTON_CLASS = 'videos__video-button--active';


const SONGS = [
  {title: 'Друг', file: 'audio/AiMori-Drug.mp3', poster: 'images/drug_small.jpg'},
  {
    title: 'TOXIC CANDY (Альбом 2021)', folder: [
      {title: 'Капитан Америка', file: '/audio/toxic-candy/01 - Капитан Америка.mp3', poster: 'images/tc_small.jpg'},
      {
        title: 'Капелька летней грусти',
        file: '/audio/toxic-candy/02 - Капелька летней грусти.mp3',
        poster: 'images/tc_small.jpg'
      },
      {title: 'Джин Тоник', file: '/audio/toxic-candy/03 - Джин-тоник.mp3', poster: 'images/tc_small.jpg'},
      {title: 'Фанфик', file: '/audio/toxic-candy/04 - Фанфик.mp3', poster: 'images/tc_small.jpg'},
      {title: 'Пластилин', file: '/audio/toxic-candy/05 - Пластилин.mp3', poster: 'images/tc_small.jpg'},
      {title: 'Невеста', file: '/audio/toxic-candy/06 - Невеста.mp3', poster: 'images/tc_small.jpg'},
    ]
  },
  {title: 'Электро', file: 'audio/AiMori-Elektro.mp3', poster: 'images/covers/electro_thumb.jpg'},
  {title: 'Тройничек', file: '/audio/AiMori-Troinichek.mp3', poster: 'images/covers/troinichek_thumb.jpg'},
  {title: 'Дым', file: '/audio/monada/dym.mp3', poster: 'images/covers/monada/dym_cover.jpg'},
  {title: 'Кислород', file: '/audio/monada/kislorod.mp3', poster: 'images/covers/monada/kislorod_cover.jpg'},
  {title: 'В моих венах', file: '/audio/monada/v_moih_venah.mp3', poster: 'images/covers/monada/v_venah_cover.jpg'},
  {
    title: 'Стример (Альбом 2020)', folder: [
      {title: 'Стример', file: '/audio/strimer/01_strimer.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Глад Валакас', file: '/audio/strimer/02_valakas.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Вове Братишкину', file: '/audio/strimer/03_bratishkin.mp3', poster: 'images/covers/strimer.jpg'},
      {title: '50 оттенков Шевцова', file: '/audio/strimer/04_shevcov.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Hardplay', file: '/audio/strimer/05_hardplay.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Бл*дский Twitch', file: '/audio/strimer/06_twitch.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Оляша', file: '/audio/strimer/07_olyasha.mp3', poster: 'images/covers/strimer.jpg'},
      {title: 'Бан', file: '/audio/strimer/08_ban.mp3', poster: 'images/covers/strimer.jpg'},
    ]
  },
  {
    title: 'Летели на юг (Альбом 2019)', folder: [
      {title: 'SOS', file: '/audio/monada/leteli_na_yug/01_sos.mp3', poster: 'images/covers/monada/leteli_na_yug.jpg'},
      {
        title: 'Все не так',
        file: '/audio/monada/leteli_na_yug/02_vse_ne_tak.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Стены знают',
        file: '/audio/monada/leteli_na_yug/03_steni_znayut.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Вакуум',
        file: '/audio/monada/leteli_na_yug/04_vakuum.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Летели на юг',
        file: '/audio/monada/leteli_na_yug/05_leteli_na_yug.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Молчим',
        file: '/audio/monada/leteli_na_yug/06_molchim.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Теплые ночи',
        file: '/audio/monada/leteli_na_yug/06_molchim.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
      {
        title: 'Чайф',
        file: '/audio/monada/leteli_na_yug/08_chayf.mp3',
        poster: 'images/covers/monada/leteli_na_yug.jpg'
      },
    ]
  },
];

const coversSection = document.querySelector('.videos--covers');
const videoPlayer = coversSection.querySelector('.video-container');
const playOverlay = coversSection.querySelector('.videos__play-overlay');
const videoPreloader = coversSection.querySelector('.videos__preloader');
const videoBackground = coversSection.querySelector('.videos__background');

function parseVideoId(video) {
  return video.href.split('v=').pop();
}

function generateSlides(videos) {
  return videos.reduce((acc, video) => {
    const videoId = parseVideoId(video);
    const url = `${PREVIEW_URL}/${videoId}/${SLIDE_IMAGE}`;
    return acc +
      `<div class="swiper-slide">
        <button type="button" data-id="${videoId}" class="videos__video-button">
          <span class="videos__image swiper-lazy" data-background="${url}">
            <span class="swiper-lazy-preloader"></span>
          </span>
          <span class="videos__description">${video.shortTitle}</span>
        </button>
      </div>`;
  }, '');
}

function fillVideoSlider(videos) {
  const slider = document.querySelector('.swiper-wrapper');
  const markup = generateSlides(videos);
  slider.insertAdjacentHTML('afterbegin', markup);
}

function initVideoSlider(videos) {
  const videosButtons = document.querySelectorAll('.videos__video-button');

  videosButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
      const target = event.currentTarget;
      const videoId = target.dataset.id;
      const title = target.querySelector('.videos__description').text;
      hideOverlay();
      if (activeButton) {
        activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
      }
      target.classList.add(ACTIVE_BUTTON_CLASS);
      runVideo(videoId, title);
    });
  });

  const DEFAULT_VIDEO_INDEX = 0;
  const defaultVideo = videos[DEFAULT_VIDEO_INDEX];
  videosButtons[DEFAULT_VIDEO_INDEX].classList.add(ACTIVE_BUTTON_CLASS);
  const url = `${PREVIEW_URL}/${parseVideoId(defaultVideo)}/${BACKGROUND_IMAGE}`;
  videoBackground.style.backgroundImage = `url(${url})`;
  playOverlay.addEventListener('click', () => {
    runVideo(parseVideoId(defaultVideo), defaultVideo.title);
    hideOverlay();
  });

  const mySwiper = new Swiper('.swiper-container', {
    preloadImages: false,
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 4,
    freeMode: false,
    slidesPerGroup: 2,
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 2,
        freeMode: true,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function runVideo(id, title) {
  const iframe = `<iframe title="${title || 'Youtube Video'}" src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>`;
  videoBackground.style.backgroundImage = `url(${PREVIEW_URL}/${id}/${BACKGROUND_IMAGE})`;
  videoPlayer.innerHTML = '';
  videoPlayer.insertAdjacentHTML('afterbegin', iframe);
}

function hideOverlay() {
  playOverlay.classList.add('videos__play-overlay--hidden');
  videoPreloader.classList.add('videos__preloader--visible');
}

function initPlayers(songs, videos) {
  /*
  function PlayerjsEvents(event, id, data) {
    if (event === "new") {
      console.log('new');
    }
    if (event === "audiotrack") {
      console.log('event -> ', event);
    }
  }

  window.playerCovers.api("playlist_id") // получаем проигрываем трек
  */

  window.playerSelf = new Playerjs({
    id: 'self',
    file: songs
  });


  window.playerCovers = new Playerjs({
    id: 'covers',
    file: videos.filter(video => video.file).map(video => {
      const videoId = parseVideoId(video);
      return {
        ...video,
        title: video.shortTitle,
        poster: `${PREVIEW_URL}/${videoId}/${PLAYER_IMAGE}`
      }
    })
  });

  const playerEl = document.getElementById('player');
}

const SONGS_LIST = '/audio/lists/songs.json';
const VIDEOS_LIST = '/audio/lists/videos.json';

(async function () {
  const loader = document.querySelector('.loader-wrapper');
  const main = document.querySelector('.main');
  const songsListFetch = fetch(SONGS_LIST).then(res => res.json());
  const videosListFetch = fetch(VIDEOS_LIST).then(res => res.json());
  await Promise.all([songsListFetch, videosListFetch]).then(([songsList, videosList]) => {
    loader.remove();
    main.classList.remove('main--initial');
    initPlayers(songsList, videosList);
    fillVideoSlider(videosList);
    initVideoSlider(videosList);
    jarallax(document.querySelectorAll('.jarallax'), {imgPosition: '50% 10%', speed: 0.5});
  })
})();

