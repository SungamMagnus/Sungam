(function () {
  // Items are ordered newest-first by release date across all types
  // (YouTube publish date for video/device, Bandcamp release date for
  // music) — video, music, and device entries are interleaved, not
  // grouped. Add new items here. `image` is optional — point it at
  // Pics/<type>/your-file.webp (e.g. "Pics/video/your-file.webp",
  // "Pics/visual/your-file.webp") and it takes priority. Video items
  // fall back to the real YouTube thumbnail when no image is set;
  // music/device items fall back to a plain icon.
  var PORTFOLIO_ITEMS = [
    {
      type: "video",
      artist: "Sungam",
      title: "In case of fire",
      link: "https://www.youtube.com/watch?v=Bao2R7quRUI",
      videoId: "Bao2R7quRUI",
      image: "Pics/video/Sungam - In case of fire.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Songs for dog and friend",
      link: "https://sungam.bandcamp.com/album/songs-for-dog-and-friend",
      image: "Pics/music/sungam - songs for dog and friend.webp"
    },
    {
      type: "device",
      artist: "Sungam",
      title: "Wordplay",
      link: "https://sungam.gumroad.com/l/qrgnn",
      image: "Pics/devices/Wordplay.webp",
      description: "A creative text-based MaxforLive sequencer — type a word or phrase and its letters become notes, with forward, backward, and ping-pong playback plus scale-aware sequencing."
    },
    {
      type: "device",
      artist: "Sungam",
      title: "if/maybe",
      link: "https://sungam.gumroad.com/l/xilyb",
      image: "Pics/devices/If:maybe.webp",
      description: "A two-channel MaxforLive probability randomizer that maps to any control. Set a custom range for each channel, then dial in the odds between them for controlled chaos."
    },
    {
      type: "device",
      artist: "Sungam",
      title: "PH-830",
      link: "https://sungam.gumroad.com/l/nqooz",
      image: "Pics/devices/PH-830.webp",
      description: "A MaxforLive emulation of the rare Roland PH-830 analog phase shifter, with added input drive, resonance boost, and L/R link controls on top of the original's quirky character."
    },
    {
      type: "device",
      artist: "Sungam",
      title: "Polysteps",
      link: "https://sungam.gumroad.com/l/wlced",
      image: "Pics/devices/polysteps.webp",
      description: "A polyrhythmic step sequencer for Max for Live with 6 independently configurable tracks — set note, octave, and velocity range per track, with per-track gate randomization for evolving rhythms and arpeggios."
    },
    {
      type: "music",
      artist: "Sungam",
      title: "trgr",
      link: "https://sungam.bandcamp.com/album/trgr",
      image: "Pics/music/sungam - trigger.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Slitch",
      link: "https://sungam.bandcamp.com/album/slitch",
      image: "Pics/music/sungam - slitch - album.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Sturta",
      link: "https://www.youtube.com/watch?v=9A_ymutY5LM",
      videoId: "9A_ymutY5LM",
      image: "Pics/video/Sungam - Sturta.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "opycra",
      link: "https://www.youtube.com/watch?v=AbNabTsCdzc",
      videoId: "AbNabTsCdzc",
      image: "Pics/video/Sungam - opycra.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Slitch",
      link: "https://www.youtube.com/watch?v=AqB0M7d1msY",
      videoId: "AqB0M7d1msY",
      image: "Pics/video/Sungam - Slitch.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "5̵̃͜ẗ̴̫́0̶̬̀c̶̨̒ḵ̴̊",
      link: "https://www.youtube.com/watch?v=-19FRYKPNdc",
      videoId: "-19FRYKPNdc",
      image: "Pics/video/Sungam - 5̵̃͜ẗ̴̫́0̶̬̀c̶̨̒ḵ̴̊.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "n̷3̴u̶r̶4̶!̴",
      link: "https://www.youtube.com/watch?v=yBGh4EL3rmo",
      videoId: "yBGh4EL3rmo",
      image: "Pics/video/Sungam - n̷3̴u̶r̶4̶!̴.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "0̷p̶3̷r̵a̸",
      link: "https://www.youtube.com/watch?v=tVLmQVM8Y5c",
      videoId: "tVLmQVM8Y5c",
      image: "Pics/video/Sungam - 0̷p̶3̷r̵a̸.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: ":̷_̶\\̴-̴3̴",
      link: "https://www.youtube.com/watch?v=IL1rlSL09Rs",
      videoId: "IL1rlSL09Rs",
      image: "Pics/video/Sungam - :̷_̶\\̴-̴3̴.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "7̸r̴v̴/̴n̷3̷u̷",
      link: "https://sungam.bandcamp.com/album/7-r-v-n-3-u",
      image: "Pics/music/sungam - 7̸r̴v̴:̴n̷3̷u̷.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Pels",
      link: "https://sungam.bandcamp.com/album/pels",
      image: "Pics/music/sungam - pels.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Long Exposure",
      link: "https://sungam.bandcamp.com/album/long-exposure",
      image: "Pics/music/sungam - long exposure.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "rigid",
      link: "https://www.youtube.com/watch?v=2R8njrjOS6Y",
      videoId: "2R8njrjOS6Y",
      image: "Pics/video/sungam - rigid.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "harsh",
      link: "https://www.youtube.com/watch?v=7IpZBybBcpY",
      videoId: "7IpZBybBcpY",
      image: "Pics/video/sungam - harsh .webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "maneuver",
      link: "https://www.youtube.com/watch?v=bJZA2nDX_SU",
      videoId: "bJZA2nDX_SU",
      image: "Pics/video/sungam - maneuver.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "powers that be",
      link: "https://sungam.bandcamp.com/album/powers-that-be",
      image: "Pics/music/sungam - powers that be.webp"
    },
    {
      type: "video",
      artist: "4411",
      title: "optimism",
      link: "https://www.youtube.com/watch?v=L84L1lRV6ug",
      videoId: "L84L1lRV6ug",
      image: "Pics/video/4411 - optimism.webp"
    },
    {
      type: "video",
      artist: "4411",
      title: "1872",
      link: "https://www.youtube.com/watch?v=mJHtHz7akyE",
      videoId: "mJHtHz7akyE",
      image: "Pics/video/4411 - 1872.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "occult atoms",
      link: "https://sungam.bandcamp.com/album/occult-atoms",
      image: "Pics/music/Sungam - Occult atoms.webp"
    },
    {
      type: "music",
      artist: "4411",
      title: "4411 by 4411",
      link: "https://sungam.bandcamp.com/album/4411-by-4411",
      image: "Pics/music/4411 - 4411.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Kalımoderıx",
      link: "https://www.youtube.com/watch?v=Rw42Z-WXrTI",
      videoId: "Rw42Z-WXrTI",
      image: "Pics/video/Sungam - Kalımoderıx.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "All the Rest",
      link: "https://sungam.bandcamp.com/album/all-the-rest",
      image: "Pics/music/Sungam - All the rest.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "MauA4",
      link: "https://www.youtube.com/watch?v=m8bp3Akqc7U",
      videoId: "m8bp3Akqc7U",
      image: "Pics/video/Sungam - MauA4.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Stim",
      link: "https://www.youtube.com/watch?v=30TtE5WJcfk",
      videoId: "30TtE5WJcfk",
      image: "Pics/video/Sungam - Stim.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Skogen",
      link: "https://sungam.bandcamp.com/album/skogen",
      image: "Pics/music/Sungam - Skogen.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "City Pops",
      link: "https://sungam.bandcamp.com/album/city-pops",
      image: "Pics/music/Sungam - City pops.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "606",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/606.webp",
      fullImage: "Pics/visual/Muted/606.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Ballbar",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/ballbar.webp",
      fullImage: "Pics/visual/Muted/ballbar.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Blurstreet",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/blurstreet.webp",
      fullImage: "Pics/visual/Muted/blurstreet.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Blurthoka",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/blurthoka.webp",
      fullImage: "Pics/visual/Muted/blurthoka.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Frosvogn",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/frosvogn.webp",
      fullImage: "Pics/visual/Muted/frosvogn.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Kjallarahurd",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/kjallarahurd.webp",
      fullImage: "Pics/visual/Muted/kjallarahurd.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Nattblokk",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/nattblokk.webp",
      fullImage: "Pics/visual/Muted/nattblokk.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Paleparade",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/paleparade.webp",
      fullImage: "Pics/visual/Muted/paleparade.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Rafbox",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/rafbox.webp",
      fullImage: "Pics/visual/Muted/rafbox.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Rennibraut",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/rennibraut.webp",
      fullImage: "Pics/visual/Muted/rennibraut.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Skilti",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/skilti.webp",
      fullImage: "Pics/visual/Muted/skilti.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Thokuhus",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/thokuhus.webp",
      fullImage: "Pics/visual/Muted/thokuhus.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Trethoka",
      style: "muted",
      image: "Pics/visual/Muted/thumbs/trethoka.webp",
      fullImage: "Pics/visual/Muted/trethoka.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Ammagangur",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/ammagangur.webp",
      fullImage: "Pics/visual/Pronounced/ammagangur.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Farlig",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/farlig.webp",
      fullImage: "Pics/visual/Pronounced/farlig.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Is",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/is.webp",
      fullImage: "Pics/visual/Pronounced/is.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Nattdog",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/nattdog.webp",
      fullImage: "Pics/visual/Pronounced/nattdog.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Nattstoler",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/nattstoler.webp",
      fullImage: "Pics/visual/Pronounced/nattstoler.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Prjonatre",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/prjonatre.webp",
      fullImage: "Pics/visual/Pronounced/prjonatre.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Rafbox",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/rafbox.webp",
      fullImage: "Pics/visual/Pronounced/rafbox.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Raudisandur",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/raudisandur.webp",
      fullImage: "Pics/visual/Pronounced/raudisandur.webp"
    },
    {
      type: "visual",
      artist: "Sungam",
      title: "Regnbogahus",
      style: "pronounced",
      image: "Pics/visual/Pronounced/thumbs/regnbogahus.webp",
      fullImage: "Pics/visual/Pronounced/regnbogahus.webp"
    }
  ];

  var TYPE_LABELS = { video: 'Video', music: 'Music', device: 'Device', visual: 'Visual' };
  var TYPE_ICONS = { video: 'icons/youtube.svg', music: 'icons/bandcamp.svg', device: 'icons/gumroad.svg', visual: 'icons/photo.svg' };

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.querySelector('.lightbox-close');
  var lightboxPrev = document.querySelector('.lightbox-prev');
  var lightboxNext = document.querySelector('.lightbox-next');

  var lightboxItems = [];
  var lightboxIndex = -1;

  function lightboxSrcFor(item) {
    return item.fullImage ? encodePath(item.fullImage) : thumbFor(item);
  }

  function showLightboxImage() {
    var item = lightboxItems[lightboxIndex];
    if (!item) return;
    lightboxImg.src = lightboxSrcFor(item);
    lightboxImg.alt = item.title || '';
    var hasMultiple = lightboxItems.length > 1;
    if (lightboxPrev) lightboxPrev.hidden = !hasMultiple;
    if (lightboxNext) lightboxNext.hidden = !hasMultiple;
  }

  function openLightboxAt(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    showLightboxImage();
    lightbox.hidden = false;
  }

  function navigateLightbox(delta) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
    showLightboxImage();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    lightboxItems = [];
    lightboxIndex = -1;
  }

  if (lightbox) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
    lightboxNext.addEventListener('click', function () { navigateLightbox(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  var grid = document.getElementById('portfolio-grid');
  var emptyState = document.getElementById('portfolio-empty');
  var filterPills = document.querySelectorAll('#type-filters > .filter-pill');
  var activeType = filterPills[0].dataset.type;

  // Filenames can contain spaces / colons / a literal backslash (macOS
  // substitutes ":" for "/" in filenames). Encode each path segment so the
  // browser doesn't misparse a raw "\\" or ":" as a URL separator.
  function encodePath(path) {
    return path.split('/').map(encodeURIComponent).join('/');
  }

  function thumbFor(item) {
    if (item.image) return encodePath(item.image);
    if (item.videoId) return 'https://img.youtube.com/vi/' + item.videoId + '/hqdefault.jpg';
    return null;
  }

  function renderCard(item, index, visualItems) {
    var isVisual = item.type === 'visual';
    var card = document.createElement(isVisual ? 'button' : 'a');
    card.className = 'card';
    if (isVisual) {
      card.type = 'button';
    } else {
      card.href = item.link;
      card.target = '_blank';
      card.rel = 'noopener';
    }
    card.dataset.type = item.type;
    card.setAttribute('aria-label', item.artist + ' - ' + item.title + ' (' + TYPE_LABELS[item.type] + ')');

    var thumbSrc = thumbFor(item);
    var fallbackIcon = TYPE_ICONS[item.type];

    card.innerHTML =
      '<div class="card-thumb">' +
        '<img class="card-thumb-fallback" src="' + fallbackIcon + '" alt="" width="28" height="28">' +
        (thumbSrc
          ? '<img class="card-thumb-img" src="' + thumbSrc + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
          : '') +
        (item.type === 'music' || item.type === 'video'
          ? '<div class="card-overlay"><span class="card-overlay-title">' + item.title + '</span></div>'
          : '') +
      '</div>';

    if (isVisual && thumbSrc) {
      card.addEventListener('click', function () {
        openLightboxAt(visualItems, index);
      });
    }

    return card;
  }

  function renderDeviceRow(item) {
    var row = document.createElement('a');
    row.className = 'device-row';
    row.href = item.link;
    row.target = '_blank';
    row.rel = 'noopener';
    row.dataset.type = item.type;

    var thumbSrc = thumbFor(item);
    var fallbackIcon = TYPE_ICONS[item.type];

    row.innerHTML =
      '<div class="device-photo">' +
        '<img class="card-thumb-fallback" src="' + fallbackIcon + '" alt="" width="28" height="28">' +
        (thumbSrc
          ? '<img class="card-thumb-img" src="' + thumbSrc + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
          : '') +
      '</div>' +
      '<div class="device-info">' +
        '<h3 class="device-title">' + item.title + '</h3>' +
        '<p class="device-description">' + item.description + '</p>' +
      '</div>';

    return row;
  }

  var styleFilterPills = document.querySelectorAll('.filter-pill--sub');
  var styleFiltersContainer = document.getElementById('visual-style-filters');
  var activeStyle = styleFilterPills.length ? styleFilterPills[0].dataset.style : null;

  function render() {
    grid.innerHTML = '';
    var isVisualView = activeType === 'visual';
    var isDeviceView = activeType === 'device';

    if (styleFiltersContainer) styleFiltersContainer.hidden = !isVisualView;
    grid.classList.toggle('grid--devices', isDeviceView);
    grid.classList.toggle('grid--visual', isVisualView);

    var visible = PORTFOLIO_ITEMS.filter(function (item) {
      if (item.type !== activeType) return false;
      if (isVisualView && activeStyle) return item.style === activeStyle;
      return true;
    });
    visible.forEach(function (item, index) {
      grid.appendChild(isDeviceView ? renderDeviceRow(item) : renderCard(item, index, visible));
    });
    emptyState.hidden = visible.length > 0;
  }

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      activeType = pill.dataset.type;
      filterPills.forEach(function (p) {
        p.setAttribute('aria-checked', String(p === pill));
      });
      render();
    });
  });

  styleFilterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      activeStyle = pill.dataset.style;
      styleFilterPills.forEach(function (p) {
        p.setAttribute('aria-checked', String(p === pill));
      });
      render();
    });
  });

  render();

  // Tabs (Portfolio / About)
  var tabs = document.querySelectorAll('[data-tab-link]');
  var panels = {
    portfolio: document.getElementById('panel-portfolio'),
    about: document.getElementById('panel-about')
  };

  function activateTab(name) {
    if (!panels[name]) return;
    Object.keys(panels).forEach(function (key) {
      panels[key].hidden = key !== name;
    });
    document.querySelectorAll('.tab').forEach(function (tab) {
      tab.setAttribute('aria-selected', String(tab.dataset.tabLink === name));
    });
  }

  tabs.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var name = el.dataset.tabLink;
      activateTab(name);
      history.replaceState(null, '', '#' + name);
    });
  });

  var initialTab = window.location.hash.replace('#', '');
  if (panels[initialTab]) activateTab(initialTab);
})();
