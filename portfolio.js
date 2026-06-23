(function () {
  // Items are ordered newest-first by release date across all types
  // (YouTube publish date for video/device, Bandcamp release date for
  // music) — video, music, and device entries are interleaved, not
  // grouped. Add new items here. `image` is optional — if you upload a
  // screenshot, point `image` at it (e.g. "Pics/your-file.webp") and it
  // takes priority. Video items fall back to the real YouTube thumbnail
  // when no image is set; music/device items fall back to a plain icon.
  var PORTFOLIO_ITEMS = [
    {
      type: "video",
      artist: "Sungam",
      title: "In case of fire",
      link: "https://www.youtube.com/watch?v=Bao2R7quRUI",
      videoId: "Bao2R7quRUI",
      image: "Pics/Sungam - In case of fire.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Songs for dog and friend",
      link: "https://sungam.bandcamp.com/album/songs-for-dog-and-friend",
      image: "Pics/music-pics/sungam - songs for dog and friend.webp"
    },
    {
      type: "device",
      artist: "Sungam",
      title: "Wordplay",
      link: "https://sungam.gumroad.com/l/qrgnn",
      image: "Pics/Wordplay.webp",
      description: "A creative text-based MIDI sequencer — type a word or phrase and its letters become notes, with forward, backward, and ping-pong playback plus scale-aware sequencing."
    },
    {
      type: "device",
      artist: "Sungam",
      title: "if/maybe",
      link: "https://sungam.gumroad.com/l/xilyb",
      image: "Pics/If:maybe.webp",
      description: "A two-channel probability randomizer that maps to any control. Set a custom range for each channel, then dial in the odds between them for controlled chaos."
    },
    {
      type: "device",
      artist: "Sungam",
      title: "PH-830",
      link: "https://sungam.gumroad.com/l/nqooz",
      image: "Pics/PH-830.webp",
      description: "An emulation of the rare Roland PH-830 analog phase shifter, with added input drive, resonance bite, and L/R link controls on top of the original's quirky character."
    },
    {
      type: "music",
      artist: "Sungam",
      title: "trgr",
      link: "https://sungam.bandcamp.com/album/trgr",
      image: "Pics/music-pics/sungam - trigger.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Slitch",
      link: "https://sungam.bandcamp.com/album/slitch",
      image: "Pics/music-pics/sungam - slitch - album.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Sturta",
      link: "https://www.youtube.com/watch?v=9A_ymutY5LM",
      videoId: "9A_ymutY5LM",
      image: "Pics/Sungam - Sturta.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "opycra",
      link: "https://www.youtube.com/watch?v=AbNabTsCdzc",
      videoId: "AbNabTsCdzc",
      image: "Pics/Sungam - opycra.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Slitch",
      link: "https://www.youtube.com/watch?v=AqB0M7d1msY",
      videoId: "AqB0M7d1msY",
      image: "Pics/Sungam - Slitch.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "5̵̃͜ẗ̴̫́0̶̬̀c̶̨̒ḵ̴̊",
      link: "https://www.youtube.com/watch?v=-19FRYKPNdc",
      videoId: "-19FRYKPNdc",
      image: "Pics/Sungam - 5̵̃͜ẗ̴̫́0̶̬̀c̶̨̒ḵ̴̊.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "n̷3̴u̶r̶4̶!̴",
      link: "https://www.youtube.com/watch?v=yBGh4EL3rmo",
      videoId: "yBGh4EL3rmo",
      image: "Pics/Sungam - n̷3̴u̶r̶4̶!̴.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "0̷p̶3̷r̵a̸",
      link: "https://www.youtube.com/watch?v=tVLmQVM8Y5c",
      videoId: "tVLmQVM8Y5c",
      image: "Pics/Sungam - 0̷p̶3̷r̵a̸.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: ":̷_̶\\̴-̴3̴",
      link: "https://www.youtube.com/watch?v=IL1rlSL09Rs",
      videoId: "IL1rlSL09Rs",
      image: "Pics/Sungam - :̷_̶\\̴-̴3̴.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "7̸r̴v̴/̴n̷3̷u̷",
      link: "https://sungam.bandcamp.com/album/7-r-v-n-3-u",
      image: "Pics/music-pics/sungam - 7̸r̴v̴:̴n̷3̷u̷.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Pels",
      link: "https://sungam.bandcamp.com/album/pels",
      image: "Pics/music-pics/sungam - pels.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Long Exposure",
      link: "https://sungam.bandcamp.com/album/long-exposure",
      image: "Pics/music-pics/sungam - long exposure.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "rigid",
      link: "https://www.youtube.com/watch?v=2R8njrjOS6Y",
      videoId: "2R8njrjOS6Y",
      image: "Pics/sungam - rigid.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "harsh",
      link: "https://www.youtube.com/watch?v=7IpZBybBcpY",
      videoId: "7IpZBybBcpY",
      image: "Pics/sungam - harsh .webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "maneuver",
      link: "https://www.youtube.com/watch?v=bJZA2nDX_SU",
      videoId: "bJZA2nDX_SU",
      image: "Pics/sungam - maneuver.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "powers that be",
      link: "https://sungam.bandcamp.com/album/powers-that-be",
      image: "Pics/music-pics/sungam - powers that be.webp"
    },
    {
      type: "video",
      artist: "4411",
      title: "optimism",
      link: "https://www.youtube.com/watch?v=L84L1lRV6ug",
      videoId: "L84L1lRV6ug",
      image: "Pics/4411 - optimism.webp"
    },
    {
      type: "video",
      artist: "4411",
      title: "1872",
      link: "https://www.youtube.com/watch?v=mJHtHz7akyE",
      videoId: "mJHtHz7akyE",
      image: "Pics/4411 - 1872.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "occult atoms",
      link: "https://sungam.bandcamp.com/album/occult-atoms",
      image: "Pics/music-pics/Sungam - Occult atoms.webp"
    },
    {
      type: "music",
      artist: "4411",
      title: "4411 by 4411",
      link: "https://sungam.bandcamp.com/album/4411-by-4411",
      image: "Pics/music-pics/4411 - 4411.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Kalımoderıx",
      link: "https://www.youtube.com/watch?v=Rw42Z-WXrTI",
      videoId: "Rw42Z-WXrTI",
      image: "Pics/Sungam - Kalımoderıx.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "All the Rest",
      link: "https://sungam.bandcamp.com/album/all-the-rest",
      image: "Pics/music-pics/Sungam - All the rest.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "MauA4",
      link: "https://www.youtube.com/watch?v=m8bp3Akqc7U",
      videoId: "m8bp3Akqc7U",
      image: "Pics/Sungam - MauA4.webp"
    },
    {
      type: "video",
      artist: "Sungam",
      title: "Stim",
      link: "https://www.youtube.com/watch?v=30TtE5WJcfk",
      videoId: "30TtE5WJcfk",
      image: "Pics/Sungam - Stim.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "Skogen",
      link: "https://sungam.bandcamp.com/album/skogen",
      image: "Pics/music-pics/Sungam - Skogen.webp"
    },
    {
      type: "music",
      artist: "Sungam",
      title: "City Pops",
      link: "https://sungam.bandcamp.com/album/city-pops",
      image: "Pics/music-pics/Sungam - City pops.webp"
    }
  ];

  var TYPE_LABELS = { video: 'Video', music: 'Music', device: 'Device' };
  var TYPE_ICONS = { video: 'icons/youtube.svg', music: 'icons/bandcamp.svg', device: 'icons/gumroad.svg' };

  var grid = document.getElementById('portfolio-grid');
  var emptyState = document.getElementById('portfolio-empty');
  var filterPills = document.querySelectorAll('.filter-pill');
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

  function renderCard(item) {
    var card = document.createElement('a');
    card.className = 'card';
    card.href = item.link;
    card.target = '_blank';
    card.rel = 'noopener';
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
      '</div>';

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

  function render() {
    grid.innerHTML = '';
    var visible = PORTFOLIO_ITEMS.filter(function (item) { return item.type === activeType; });
    var isDeviceView = activeType === 'device';
    grid.classList.toggle('grid--devices', isDeviceView);
    visible.forEach(function (item) {
      grid.appendChild(isDeviceView ? renderDeviceRow(item) : renderCard(item));
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
