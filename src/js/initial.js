const PREVIEW_URL = 'https://img.youtube.com/vi';
const PreviewUrls = {
  DEFAULT: 'default.jpg', //
  HIGH: 'hqdefault.jpg', // For the high quality version of the thumbnail use a URL similar to this
  MEDIUM: 'mqdefault.jpg', //  There is also a medium quality version of the thumbnail, using a URL similar to the HQ
  STANDART: 'sddefault.jpg', // For the standard definition version of the thumbnail, use a URL similar to this
  MAX: 'maxresdefault.jpg', // For the maximum resolution version of the thumbnail use a URL similar to this
};

const SLIDE_IMAGE = PreviewUrls.MEDIUM;
const BACKGROUND_IMAGE = PreviewUrls.STANDART;
const ACTIVE_BUTTON_CLASS = 'videos__video-button--active';

const videos = [
  {
    shortTitle: "Bring Me The Horizon - Teardrops",
    title: "Bring Me The Horizon - Teardrops (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=79d_bXhij3I"
  },
  {
    shortTitle: "Limp Bizkit - My Way",
    title: "Limp Bizkit - My Way (RUS HOT COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=avcWtIj2utM"
  },
  {
    shortTitle: "Naruto Shippuden Opening 3 Blue Bird",
    title: "Naruto Shippuden Opening 3 Blue Bird ",
    href: "https://www.youtube.com/watch?v=MVflf25ykP8"
  },
  {
    shortTitle: "Slipknot - The Devil In I",
    title: "Slipknot - The Devil In I RUS COVER/КАВЕР НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=Mgr4WURCvTI"
  },
  {
    shortTitle: "SABATON - Bismarck",
    title: "SABATON - Bismarck RUS COVER/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=ISP-ZR2uzvA"
  },
  {
    shortTitle: "Nirvana - Rape me (ft. Violet Orlandi)",
    title: "Nirvana - Rape me cover (ft. Violet Orlandi)",
    href: "https://www.youtube.com/watch?v=_117HNT_Tvg"
  },
  {
    shortTitle: "No Doubt - Don't Speak",
    title: "No Doubt - Don't Speak RUS COVER/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=qRLaYz4Azf8"
  },
  {
    shortTitle: "Motionless In White - Voices (feat. Ник Черников)",
    title: "Motionless In White - Voices RUS COVER/КАВЕР НА РУССКОМ (feat. Ник Черников)",
    href: "https://www.youtube.com/watch?v=iTLK1gMf-LE"
  },
  {
    shortTitle: "LINKIN PARK - One More Light",
    title: "LINKIN PARK - One More Light RUS COVER/КАВЕР НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=-v_MEQ6naJA"
  },
  {
    shortTitle: "Skillet - Hero (feat. BugaGamesTV)",
    title: "Skillet - Hero RUS COVER/КАВЕР НА РУССКОМ (feat. BugaGamesTV)",
    href: "https://www.youtube.com/watch?v=a-1y-p52gwQ"
  },
  {
    shortTitle: "Rag'n'Bone Man - Human",
    title: "Rag'n'Bone Man - Human RUS COVER/ НА РУССКОМ КАВЕР",
    href: "https://www.youtube.com/watch?v=pYp9y2NZURc"},
  {
    shortTitle: "LINKIN PARK - GIVEN UP",
    title: "LINKIN PARK - GIVEN UP RUS/ НА РУССКОМ КАВЕР",
    href: "https://www.youtube.com/watch?v=m2leRAXFbAc"},
  {
    shortTitle: "Three Days Grace - Over and Over",
    title: "Three Days Grace - Over and Over RUS COVER/ КАВЕР НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=-efKUN4XIoM"
  },
  {
    shortTitle: "BRING ME THE HORIZON - SHADOW MOSES",
    title: "BRING ME THE HORIZON - SHADOW MOSES RUS COVER/НА РУССКОМ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=r-X6ZNPqhbc"
  },
  // {
  // title: "КАРАНТИНО (Веселая песня про карантин by Ai Mori) #карантиновидение2020",
  // href: "https://www.youtube.com/watch?v=GOsa15ZPeNI"},
  {
    shortTitle: "The Killers - Mr. Brightside",
    title: "The Killers - Mr. Brightside RUS/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=BbjdNQQpT7o"},
  {
    shortTitle: "Drowning Pool - Tear Away",
    title: "Drowning Pool - Tear Away RUS/ РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=PosxJAVMCMo"},
  {
    shortTitle: "30  Seconds To Mars - The Kill",
    title: "30  Seconds To Mars - The Kill RUS cover НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=hz0bmNkyyUs"},
  {
    shortTitle: "The Rasmus - In the Shadows",
    title: "The Rasmus - In the Shadows RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=KUz7SQaaxWc"},
  {
    shortTitle: "Tokio Hotel - Monsoon",
    title: "Tokio Hotel - Monsoon RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=lJlaZmL37kY"},
  {
    shortTitle: "The Pretty Reckless - Just Tonight",
    title: "The Pretty Reckless - Just Tonight RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=YbKMQJ1-xwE"},
  {
    shortTitle: "Mike Shinoda - Open Door feat. Ai Mori",
    title: "Open Door - Mike Shinoda feat. Ai Mori #SingOpenDoor",
    href: "https://www.youtube.com/watch?v=M6IachIhOb8"
  },
  {
    shortTitle: "Breaking The Habit - Linkin Park",
    title: "Breaking The Habit - Linkin Park  НА РУССКОМ/ RUS COVER",
    href: "https://www.youtube.com/watch?v=9vdpNoarFJU"
  },
  {
    shortTitle: "My Heart Will Go On (OST ТИТАНИК)",
    title: "My Heart Will Go On (Céline Dion RUS COVER / РУССКАЯ ВЕРСИЯ OST ТИТАНИК)",
    href: "https://www.youtube.com/watch?v=pEN2dCahQXg"
  },
  {
    shortTitle: "Architects - Royal Beggars",
    title: "Architects - Royal Beggars RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=FRupDpVDJiQ"
  },
  {
    shortTitle: "Green Day - Boulevard Of Broken Dreams",
    title: "Green Day - Boulevard Of Broken Dreams (RUS COVER/ НА РУССКОМ КАВЕР)",
    href: "https://www.youtube.com/watch?v=Mc62sKuhSLs"
  },
  {
    shortTitle: "Roxette - Listen To Your Heart",
    title: "Roxette - Listen To Your Heart (ROCK RUS COVER / НА РУССКОМ РОК )",
    href: "https://www.youtube.com/watch?v=NOCYGQaWCMM"
  },
  {
    shortTitle: "LINKIN PARK - CRAWLING",
    title: "LINKIN PARK - CRAWLING RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=rGy1UgqmBzQ"},
  {
    shortTitle: "BRITNEY SPEARS - TOXIC",
    title: "BRITNEY SPEARS - TOXIC  РОК ВЕРСИЯ НА РУССКОМ/ ROCK RUSSIAN VERSION",
    href: "https://www.youtube.com/watch?v=A26wP9LqG84"
  },
  {
    shortTitle: "Flyleaf - I'm So Sick",
    title: "Flyleaf - I'm So Sick  RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=5KCMOVjez64"},
  {
    shortTitle: "BRING ME THE HORIZON - SLEEPWALKING",
    title: "BRING ME THE HORIZON -  SLEEPWALKING | RUS COVER / НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=EmOdHWz-vtw"
  },
  {
    shortTitle: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ",
    title: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ укулеле ( Ft. Глад Валакас, Геральт из Ривии)",
    href: "https://www.youtube.com/watch?v=vPVQZJwPLLo"
  },
  {
    shortTitle: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
    title: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
    href: "https://www.youtube.com/watch?v=MfOvc50foQM"},
  {
    shortTitle: "MAD WORLD НА РУССКОМ",
    title: "MAD WORLD НА РУССКОМ (RUSSIAN VERSION)",
    href: "https://www.youtube.com/watch?v=DSwoYP90xRE"},
  {
    shortTitle: "EVANESCENCE",
    title: "EVANESCENCE НА РУССКОМ (RUSSIAN VERSION)",
    href: "https://www.youtube.com/watch?v=4_Pj9idMxGI"},
  {
    shortTitle: "LINKIN PARK - RUNAWAY",
    title: "LINKIN PARK НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=1PCKOis6EQY"},
  {
    shortTitle: "KATY PERRY (ft. Женя Hawk)",
    title: "KATY PERRY НА РУССКОМ ЯЗЫКЕ (ft. Женя Hawk)",
    href: "https://www.youtube.com/watch?v=jxcFI3Qnkus"},
  {
    shortTitle: "AVRIL LAVIGNE",
    title: "AVRIL LAVIGNE НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=UXlpXwP0LoU"},
  {
    shortTitle: "Billie Eilish",
    title: "Billie Eilish НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=FxaA4R4YHmo"},
  // Блогеры
  {
    shortTitle: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
    title: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
    href: "https://www.youtube.com/watch?v=K7mXZXePMZ4"
  },
  {
    shortTitle: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
    title: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
    href: "https://www.youtube.com/watch?v=b__rJ_yAcSk"},
  {
    shortTitle: "Ai Mori и Глад Валакас (Feat. Midix)",
    title: "Ai Mori и Глад Валакас (Feat. Midix)",
    href: "https://www.youtube.com/watch?v=PIh7aMRBaJI"},
  {
    shortTitle: "Ai Mori и olyashaa",
    title: "Ai Mori и olyashaa",
    href: "https://www.youtube.com/watch?v=ZwJ9G-nhRjU"},
];

const videoPlayer = document.querySelector('.video-container');
const playOverlay = document.querySelector('.videos__play-overlay');
const videoPreloader = document.querySelector('.videos__preloader');
const videoBackground = document.querySelector('.videos__background');

function parseVideoId(video) {
  return video.href.split('v=').pop();
}

function generateSlides(videos) {
  return videos.reduce((acc, video) => {
    const videoId = parseVideoId(video);
    return acc +
      `<div class="swiper-slide">
        <button type="button" data-id="${videoId}" class="videos__video-button">
          <span class="videos__image swiper-lazy" data-background="${PREVIEW_URL}/${videoId}/${SLIDE_IMAGE}">
            <span class="swiper-lazy-preloader"></span>
          </span>
          <span class="videos__description">${video.shortTitle}</span>
        </button>
      </div>`;
  }, '');
}

function fillSlider(videos) {
  const slider = document.querySelector('.swiper-wrapper');
  const markup = generateSlides(videos);
  slider.insertAdjacentHTML('afterbegin', markup);
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

const SONGS = [
  // {
  // title: 'Невеста', file: '/audio/AiMori-Nevesta.mp3', poster: 'images/covers/plastilin_thumb.jpg'},
  {id: 1, title: 'Джин Тоник', file: '/audio/AiMori-JinTonic.mp3', poster: 'images/covers/jin_thumb.jpg'},
  {id: 2, title: 'Пластилин', file: '/audio/AiMori-Plastilin.mp3', poster: 'images/covers/plastilin_thumb.jpg'},
  {
    id: 3,
    title: 'Капелька летней грусти',
    file: '/audio/AiMori-Kapelka.mp3',
    poster: 'images/covers/kapelka_thumb.jpg'
  },
  {id: 4, title: 'Электро', file: 'audio/AiMori-Elektro.mp3', poster: 'images/covers/electro_thumb.jpg'},
  {id: 5, title: 'Тройничек', file: '/audio/AiMori-Troinichek.mp3', poster: 'images/covers/troinichek_thumb.jpg'},
];


/*
function PlayerjsEvents(event, id, data) {
  if (event === "new") {
    console.log('new');
  }
  if (event === "audiotrack") {
    console.log('event -> ', event);
  }
}
*/

window.player = new Playerjs({
  id: 'player',
  file: SONGS
});

const playerEl = document.getElementById('player');

(function () {
  fillSlider(videos);

  const videosButtons = document.querySelectorAll('.videos__video-button');

  videosButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
      const target = event.currentTarget;
      const videoId = target.dataset.id;
      const title = target.querySelector('img').alt;
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
  videoBackground.style.backgroundImage = `url(${PREVIEW_URL}/${parseVideoId(defaultVideo)}/${BACKGROUND_IMAGE})`;
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

  jarallax(document.querySelectorAll('.jarallax'), {speed: 0.5});
})();

