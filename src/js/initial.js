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
    title: "No Doubt - Don't Speak RUS COVER/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=qRLaYz4Azf8"
  },
  {
    title: "Motionless In White - Voices RUS COVER/КАВЕР НА РУССКОМ (feat. Ник Черников)",
    href: "https://www.youtube.com/watch?v=iTLK1gMf-LE"
  },
  {
    title: "LINKIN PARK - One More Light RUS COVER/КАВЕР НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=-v_MEQ6naJA"
  },
  {
    title: "Skillet - Hero RUS COVER/КАВЕР НА РУССКОМ (feat. BugaGamesTV)",
    href: "https://www.youtube.com/watch?v=a-1y-p52gwQ"
  },
  {title: "Rag'n'Bone Man - Human RUS COVER/ НА РУССКОМ КАВЕР", href: "https://www.youtube.com/watch?v=pYp9y2NZURc"},
  {title: "LINKIN PARK - GIVEN UP RUS/ НА РУССКОМ КАВЕР", href: "https://www.youtube.com/watch?v=m2leRAXFbAc"},
  {
    title: "Three Days Grace - Over and Over RUS COVER/ КАВЕР НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=-efKUN4XIoM"
  },
  {
    title: "BRING ME THE HORIZON  -  SHADOW MOSES RUS COVER/НА РУССКОМ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=r-X6ZNPqhbc"
  },
  // {title: "КАРАНТИНО (Веселая песня про карантин by Ai Mori) #карантиновидение2020", href: "https://www.youtube.com/watch?v=GOsa15ZPeNI"},
  {title: "The Killers - Mr. Brightside RUS/НА РУССКОМ", href: "https://www.youtube.com/watch?v=BbjdNQQpT7o"},
  {title: "Drowning Pool - Tear Away RUS/ РУССКИЙ КАВЕР", href: "https://www.youtube.com/watch?v=PosxJAVMCMo"},
  {title: "30  Seconds To Mars - The Kill RUS cover НА РУССКОМ", href: "https://www.youtube.com/watch?v=hz0bmNkyyUs"},
  {title: "The Rasmus - In the Shadows RUS/РУССКИЙ КАВЕР", href: "https://www.youtube.com/watch?v=KUz7SQaaxWc"},
  {title: "Tokio Hotel - Monsoon RUS/РУССКИЙ КАВЕР", href: "https://www.youtube.com/watch?v=lJlaZmL37kY"},
  {title: "The Pretty Reckless - Just Tonight RUS/РУССКИЙ КАВЕР", href: "https://www.youtube.com/watch?v=YbKMQJ1-xwE"},
  {
    title: "Open Door - Mike Shinoda feat. Ai Mori #SingOpenDoor",
    href: "https://www.youtube.com/watch?v=M6IachIhOb8"
  },
  {
    title: "Breaking The Habit - Linkin Park  НА РУССКОМ/ RUS COVER",
    href: "https://www.youtube.com/watch?v=9vdpNoarFJU"
  },
  {
    title: "My Heart Will Go On (Céline Dion RUS COVER / РУССКАЯ ВЕРСИЯ OST ТИТАНИК)",
    href: "https://www.youtube.com/watch?v=pEN2dCahQXg"
  },
  {
    title: "Architects - Royal Beggars RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=FRupDpVDJiQ"
  },
  {
    title: "Green Day - Boulevard Of Broken Dreams (RUS COVER/ НА РУССКОМ КАВЕР)",
    href: "https://www.youtube.com/watch?v=Mc62sKuhSLs"
  },
  {
    title: "Roxette - Listen To Your Heart (ROCK RUS COVER / НА РУССКОМ РОК )",
    href: "https://www.youtube.com/watch?v=NOCYGQaWCMM"
  },
  {title: "LINKIN PARK - CRAWLING RUS COVER / РУССКАЯ ВЕРСИЯ", href: "https://www.youtube.com/watch?v=rGy1UgqmBzQ"},
  {
    title: "BRITNEY SPEARS - TOXIC  РОК ВЕРСИЯ НА РУССКОМ/ ROCK RUSSIAN VERSION",
    href: "https://www.youtube.com/watch?v=A26wP9LqG84"
  },
  {title: "Flyleaf - I'm So Sick  RUS COVER / РУССКАЯ ВЕРСИЯ", href: "https://www.youtube.com/watch?v=5KCMOVjez64"},
  {
    title: "BRING ME THE HORIZON -  SLEEPWALKING | RUS COVER / НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=EmOdHWz-vtw"
  },
  {
    title: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ укулеле ( Ft. Глад Валакас, Геральт из Ривии)",
    href: "https://www.youtube.com/watch?v=vPVQZJwPLLo"
  },
  {title: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия", href: "https://www.youtube.com/watch?v=MfOvc50foQM"},
  {title: "MAD WORLD НА РУССКОМ (RUSSIAN VERSION)", href: "https://www.youtube.com/watch?v=DSwoYP90xRE"},
  {title: "EVANESCENCE НА РУССКОМ (RUSSIAN VERSION)", href: "https://www.youtube.com/watch?v=4_Pj9idMxGI"},
  {title: "LINKIN PARK НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ", href: "https://www.youtube.com/watch?v=1PCKOis6EQY"},
  {title: "KATY PERRY НА РУССКОМ ЯЗЫКЕ (ft. Женя Hawk)", href: "https://www.youtube.com/watch?v=jxcFI3Qnkus"},
  {title: "AVRIL LAVIGNE НА РУССКОМ ЯЗЫКЕ", href: "https://www.youtube.com/watch?v=UXlpXwP0LoU"},
  {title: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH", href: "https://www.youtube.com/watch?v=K7mXZXePMZ4"},
  {title: "Billie Eilish НА РУССКОМ ЯЗЫКЕ", href: "https://www.youtube.com/watch?v=FxaA4R4YHmo"},

  // Блогеры
  {title: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА", href: "https://www.youtube.com/watch?v=b__rJ_yAcSk"},
  {title: "Ai Mori и Глад Валакас (Feat. Midix)", href: "https://www.youtube.com/watch?v=PIh7aMRBaJI"},
  {title: "Ai Mori и olyashaa", href: "https://www.youtube.com/watch?v=ZwJ9G-nhRjU"},
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
        <div class="swiper-lazy-preloader"></div>
        <button type="button" data-id="${videoId}" class="videos__video-button">
          <img data-src="${PREVIEW_URL}/${videoId}/${SLIDE_IMAGE}" alt="${video.title}" class="swiper-lazy">
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

(function () {
  const player = new Playerjs({
    id: 'player',
    file: [
      {title: 'Пластилин', file: '/audio/AiMori-Plastilin.mp3', poster: 'images/covers/plastilin_thumb.jpg'},
      {title: 'Капелька летней грусти', file: '/audio/AiMori-Kapelka.mp3', poster: 'images/covers/kapelka_thumb.jpg'},
      {title: 'Электро', file: 'audio/AiMori-Elektro.mp3', poster: 'images/covers/electro_thumb.jpg'},
      {title: 'Тройничек', file: '/audio/AiMori-Troinichek.mp3', poster: 'images/covers/troinichek_thumb.jpg'},
    ]
  });
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
    slidesPerView: 3,
    spaceBetween: 5,
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
        spaceBetween: 15,
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

