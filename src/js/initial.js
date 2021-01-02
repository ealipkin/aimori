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

const videos = [
  {
    shortTitle: "Linkin Park - Final Masquerade",
    title: "Linkin Park - Final Masquerade (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=48f-fqXrKIc",
    file: 'audio/covers/39 - Ai Mori - Final Masquerade (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "Dead by April - Calling",
    title: "Dead by April - Calling (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=tLN1rEbmkww",
    file: 'audio/covers/38 - Ai Mori - Calling (Dead by April rus cover).mp3'
  },
  {
    shortTitle: "Bring Me The Horizon - Teardrops",
    title: "Bring Me The Horizon - Teardrops (RUS COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=79d_bXhij3I",
    file: 'audio/covers/37 - Ai Mori - Teardrops (Bring Me The Horizon rus cover).mp3'
  },
  {
    shortTitle: "Limp Bizkit - My Way",
    title: "Limp Bizkit - My Way (RUS HOT COVER/КАВЕР НА РУССКОМ ЯЗЫКЕ)",
    href: "https://www.youtube.com/watch?v=avcWtIj2utM",
    file: 'audio/covers/36 - Ai Mori - My Way (Limp Bizkit rus cover).mp3'
  },
  {
    shortTitle: "Naruto Shippuden Opening 3 Blue Bird",
    title: "Naruto Shippuden Opening 3 Blue Bird ",
    href: "https://www.youtube.com/watch?v=MVflf25ykP8",
    file: 'audio/covers/35 - Ai Mori - Blue bird (Naruto Shippuden Opening 3 Blue Bird rus cover).mp3'
  },
  {
    shortTitle: "Slipknot - The Devil In I",
    title: "Slipknot - The Devil In I RUS COVER/КАВЕР НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=Mgr4WURCvTI",
    file: 'audio/covers/34 - Ai Mori - The Devil in I (Slipknot rus cover).mp3'
  },
  {
    shortTitle: "SABATON - Bismarck",
    title: "SABATON - Bismarck RUS COVER/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=ISP-ZR2uzvA",
    file: 'audio/covers/33 - Ai Mori - Bismark (Sabaton rus cover).mp3'
  },
  {
    shortTitle: "Disturbed - Down With The Sickness",
    title: "Disturbed - Down With The Sickness",
    href: "https://www.youtube.com/watch?v=ei3IaJDgZGk",
    file: 'audio/covers/32 - Ai Mori - Down With The Sickness (Disturbed cover feat. Violet Orlandi).mp3'
  },
  {
    shortTitle: "Nirvana - Rape me (ft. Violet Orlandi)",
    title: "Nirvana - Rape me cover (ft. Violet Orlandi)",
    href: "https://www.youtube.com/watch?v=_117HNT_Tvg",
    file: 'audio/covers/31 - Ai Mori - Rape me (Nirvana cover feat. Violet Orlandi).mp3'
  },
  {
    shortTitle: "No Doubt - Don't Speak",
    title: "No Doubt - Don't Speak RUS COVER/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=qRLaYz4Azf8",
    file: 'audio/covers/30 - Ai Mori - Dont Speak (No Doubt rus cover).mp3'
  },
  {
    shortTitle: "Motionless In White - Voices (feat. Ник Черников)",
    title: "Motionless In White - Voices RUS COVER/КАВЕР НА РУССКОМ (feat. Ник Черников)",
    href: "https://www.youtube.com/watch?v=iTLK1gMf-LE",
    file: 'audio/covers/29 - Ai Mori - Voices (Motionless In White rus cover feat. Ник Черников).mp3'
  },
  {
    shortTitle: "LINKIN PARK - One More Light",
    title: "LINKIN PARK - One More Light RUS COVER/КАВЕР НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=-v_MEQ6naJA",
    file: 'audio/covers/28 - Ai Mori - One more light (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "Skillet - Hero (feat. BugaGamesTV)",
    title: "Skillet - Hero RUS COVER/КАВЕР НА РУССКОМ (feat. BugaGamesTV)",
    href: "https://www.youtube.com/watch?v=a-1y-p52gwQ",
    file: 'audio/covers/27 - Ai Mori - Hero (Skillet rus cover feat. BugaGamesTV).mp3'
  },
  {
    shortTitle: "Rag'n'Bone Man - Human",
    title: "Rag'n'Bone Man - Human RUS COVER/ НА РУССКОМ КАВЕР",
    href: "https://www.youtube.com/watch?v=pYp9y2NZURc",
    file: 'audio/covers/25 - Ai Mori - Human (Rag\'n\'Bone Man rus cover).mp3'
  },
  {
    shortTitle: "LINKIN PARK - GIVEN UP",
    title: "LINKIN PARK - GIVEN UP RUS/ НА РУССКОМ КАВЕР",
    href: "https://www.youtube.com/watch?v=m2leRAXFbAc",
    file: 'audio/covers/26 - Ai Mori - Given up (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "Three Days Grace - Over and Over",
    title: "Three Days Grace - Over and Over RUS COVER/ КАВЕР НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=-efKUN4XIoM",
    file: 'audio/covers/24 - Ai Mori - Over and over (Three Days Grace rus cover).mp3'
  },
  {
    shortTitle: "BRING ME THE HORIZON - SHADOW MOSES",
    title: "BRING ME THE HORIZON - SHADOW MOSES RUS COVER/НА РУССКОМ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=r-X6ZNPqhbc",
    file: 'audio/covers/23 - Ai Mori - Shadow moses (Bring Me The Horizon rus cover).mp3'
  },
  // {
  // title: "КАРАНТИНО (Веселая песня про карантин by Ai Mori) #карантиновидение2020",
  // href: "https://www.youtube.com/watch?v=GOsa15ZPeNI"},
  {
    shortTitle: "The Killers - Mr. Brightside",
    title: "The Killers - Mr. Brightside RUS/НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=BbjdNQQpT7o",
    file: 'audio/covers/22 - Ai Mori - Mr. Brightside (The Killers rus cover).mp3'
  },
  {
    shortTitle: "Drowning Pool - Tear Away",
    title: "Drowning Pool - Tear Away RUS/ РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=PosxJAVMCMo",
    file: 'audio/covers/21 - Ai Mori - Tear away (Drowning Pool rus cover).mp3'
  },
  {
    shortTitle: "30  Seconds To Mars - The Kill",
    title: "30  Seconds To Mars - The Kill RUS cover НА РУССКОМ",
    href: "https://www.youtube.com/watch?v=hz0bmNkyyUs",
    file: 'audio/covers/20 - Ai Mori - The Kill (30  Seconds To Mars rus cover).mp3'
  },
  {
    shortTitle: "The Rasmus - In the Shadows",
    title: "The Rasmus - In the Shadows RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=KUz7SQaaxWc",
    file: 'audio/covers/19 - Ai Mori - In the shadows (The Rasmus rus cover).mp3'
  },
  {
    shortTitle: "Tokio Hotel - Monsoon",
    title: "Tokio Hotel - Monsoon RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=lJlaZmL37kY",
    file: 'audio/covers/18 - Ai Mori - Monsoon (Tokio Hotel rus cover).mp3'
  },
  {
    shortTitle: "The Pretty Reckless - Just Tonight",
    title: "The Pretty Reckless - Just Tonight RUS/РУССКИЙ КАВЕР",
    href: "https://www.youtube.com/watch?v=YbKMQJ1-xwE",
    file: 'audio/covers/17 - Ai Mori - Just Tonight (The Pretty Reckless rus cover).mp3'
  },
  {
    shortTitle: "Mike Shinoda - Open Door feat. Ai Mori",
    title: "Open Door - Mike Shinoda feat. Ai Mori #SingOpenDoor",
    href: "https://www.youtube.com/watch?v=M6IachIhOb8"
  },
  {
    shortTitle: "Breaking The Habit - Linkin Park",
    title: "Breaking The Habit - Linkin Park  НА РУССКОМ/ RUS COVER",
    href: "https://www.youtube.com/watch?v=9vdpNoarFJU",
    file: 'audio/covers/16 - Ai Mori - Breaking the habit (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "My Heart Will Go On (OST ТИТАНИК)",
    title: "My Heart Will Go On (Céline Dion RUS COVER / РУССКАЯ ВЕРСИЯ OST ТИТАНИК)",
    href: "https://www.youtube.com/watch?v=pEN2dCahQXg",
    file: 'audio/covers/15 - Ai Mori - My Heart Will Go On (OST Titanic rus cover).mp3'
  },
  {
    shortTitle: "Architects - Royal Beggars",
    title: "Architects - Royal Beggars RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=FRupDpVDJiQ",
    file: 'audio/covers/14 - Ai Mori - Royal Beggars (Architects rus cover).mp3'
  },
  {
    shortTitle: "Green Day - Boulevard Of Broken Dreams",
    title: "Green Day - Boulevard Of Broken Dreams (RUS COVER/ НА РУССКОМ КАВЕР)",
    href: "https://www.youtube.com/watch?v=Mc62sKuhSLs",
    file: 'audio/covers/13 - Ai Mori - Boulevard Of Broken Dreams (Green Day rus cover).mp3'
  },
  {
    shortTitle: "Roxette - Listen To Your Heart",
    title: "Roxette - Listen To Your Heart (ROCK RUS COVER / НА РУССКОМ РОК )",
    href: "https://www.youtube.com/watch?v=NOCYGQaWCMM",
    file: 'audio/covers/12 - Ai Mori - Listen to your heart (Roxette rus cover).mp3'
  },
  {
    shortTitle: "LINKIN PARK - CRAWLING",
    title: "LINKIN PARK - CRAWLING RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=rGy1UgqmBzQ",
    file: 'audio/covers/11 - Ai Mori - Crawling (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "BRITNEY SPEARS - TOXIC",
    title: "BRITNEY SPEARS - TOXIC  РОК ВЕРСИЯ НА РУССКОМ/ ROCK RUSSIAN VERSION",
    href: "https://www.youtube.com/watch?v=A26wP9LqG84",
    file: 'audio/covers/10 - Ai Mori - Toxic (Britney Spears rus cover).mp3'
  },
  {
    shortTitle: "Flyleaf - I'm So Sick",
    title: "Flyleaf - I'm So Sick  RUS COVER / РУССКАЯ ВЕРСИЯ",
    href: "https://www.youtube.com/watch?v=5KCMOVjez64",
    file: 'audio/covers/09 - Ai Mori - I\'m So Sick (Flyleaf).mp3'
  },
  {
    shortTitle: "BRING ME THE HORIZON - SLEEPWALKING",
    title: "BRING ME THE HORIZON -  SLEEPWALKING | RUS COVER / НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=EmOdHWz-vtw",
    file: 'audio/covers/08 - Ai Mori - Sleepwalking (Bring Me The Horizon rus cover).mp3'
  },
  {
    shortTitle: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ",
    title: "ВЕДЬМАКУ ЗАПЛАТИТЕ ЧЕКАННОЙ МОНЕТОЙ укулеле ( Ft. Глад Валакас, Геральт из Ривии)",
    href: "https://www.youtube.com/watch?v=vPVQZJwPLLo"
  },
  {
    shortTitle: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
    title: "В ЛЕСУ РОДИЛАСЬ ЕЛОЧКА| Rock версия",
    href: "https://www.youtube.com/watch?v=MfOvc50foQM",
    file: 'audio/covers/07 - Ai Mori - В лесу родилась елочка.mp3'
  },
  {
    shortTitle: "MAD WORLD НА РУССКОМ",
    title: "MAD WORLD НА РУССКОМ (RUSSIAN VERSION)",
    href: "https://www.youtube.com/watch?v=DSwoYP90xRE",
    file: 'audio/covers/06 - Ai Mori - Mad world (Gary Jules cover).mp3'
  },
  {
    shortTitle: "EVANESCENCE - Going under",
    title: "EVANESCENCE Going under НА РУССКОМ (RUSSIAN VERSION)",
    href: "https://www.youtube.com/watch?v=4_Pj9idMxGI",
    file: 'audio/covers/05 - Ai Mori - Going under (Evanescence rus cover).mp3'
  },
  {
    shortTitle: "LINKIN PARK - RUNAWAY",
    title: "LINKIN PARK НА РУССКОМ ЯЗЫКЕ В ЖЕНСКОЙ ВЕРСИИ",
    href: "https://www.youtube.com/watch?v=1PCKOis6EQY",
    file: 'audio/covers/04 - Ai Mori - Runaway (Linkin Park rus cover).mp3'
  },
  {
    shortTitle: "KATY PERRY (ft. Женя Hawk) - E.T.",
    title: "KATY PERRY E.T. НА РУССКОМ ЯЗЫКЕ (ft. Женя Hawk)",
    href: "https://www.youtube.com/watch?v=jxcFI3Qnkus",
    file: 'audio/covers/03 - Ai Mori - E.T. (Katy Perry rus cover feat. Женя Hawk).mp3'
  },
  {
    shortTitle: "AVRIL LAVIGNE - Losing grip",
    title: "AVRIL LAVIGNE Losing grip НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=UXlpXwP0LoU",
    file: 'audio/covers/02 - Ai Mori - Losing grip (Avril Lavigne rus cover).mp3'
  },
  {
    shortTitle: "Billie Eilish - Bellyache",
    title: "Billie Eilish Bellyache НА РУССКОМ ЯЗЫКЕ",
    href: "https://www.youtube.com/watch?v=FxaA4R4YHmo",
    file: 'audio/covers/01 - Ai Mori - Bellyache (Billie Eilish rus cover).mp3'
  },
  // Блогеры
  {
    shortTitle: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
    title: "Ai Mori ft. HEYLEE, ДНК, INS1DE - BAN TWITCH",
    href: "https://www.youtube.com/watch?v=K7mXZXePMZ4"
  },
  {
    shortTitle: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
    title: "itpedia : 50 ОТТЕНКОВ ШЕВЦОВА",
    href: "https://www.youtube.com/watch?v=b__rJ_yAcSk"
  },
  {
    shortTitle: "Ai Mori и Глад Валакас (Feat. Midix)",
    title: "Ai Mori и Глад Валакас (Feat. Midix)",
    href: "https://www.youtube.com/watch?v=PIh7aMRBaJI"
  },
  {
    shortTitle: "Ai Mori и olyashaa",
    title: "Ai Mori и olyashaa",
    href: "https://www.youtube.com/watch?v=ZwJ9G-nhRjU"
  },
];

const SONGS = [
  {title: 'Невеста', file: '/audio/AiMori-Nevesta.mp3', poster: 'images/covers/nevesta_thumb.jpg'},
  {title: 'Джин Тоник', file: '/audio/AiMori-JinTonic.mp3', poster: 'images/covers/jin_thumb.jpg'},
  {title: 'Пластилин', file: '/audio/AiMori-Plastilin.mp3', poster: 'images/covers/plastilin_thumb.jpg'},
  {
    title: 'Капелька летней грусти',
    file: '/audio/AiMori-Kapelka.mp3',
    poster: 'images/covers/kapelka_thumb.jpg'
  },
  {title: 'Электро', file: 'audio/AiMori-Elektro.mp3', poster: 'images/covers/electro_thumb.jpg'},
  {title: 'Тройничек', file: '/audio/AiMori-Troinichek.mp3', poster: 'images/covers/troinichek_thumb.jpg'},
  {title: 'Дым', file: '/audio/monada/dym.mp3', poster: 'images/covers/monada/dym_cover.jpg'},
  {title: 'Кислород', file: '/audio/monada/kislorod.mp3', poster: 'images/covers/monada/kislorod_cover.jpg'},
  {title: 'В моих венах', file: '/audio/monada/v_moih_venah.mp3', poster: 'images/covers/monada/v_venah_cover.jpg'},
  {
    title: 'Летели на юг (Альбом)', folder: [
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

function fillVideoSlider(videos) {
  const slider = document.querySelector('.swiper-wrapper');
  const markup = generateSlides(videos);
  slider.insertAdjacentHTML('afterbegin', markup);
}

function initVideoSlider() {
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

function initPlayers() {
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
    file: SONGS
  });


  window.playerCovers = new Playerjs({
    id: 'covers',
    file: videos.map(video => {
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

(function () {
  initPlayers();
  fillVideoSlider(videos);
  initVideoSlider();
  jarallax(document.querySelectorAll('.jarallax'), {imgPosition: '50% 10%', speed: 0.5});
})();

