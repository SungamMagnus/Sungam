# Samples

Audio the web apps offer as one-click sources. Clicking one loads it and
starts it playing, looped.

- `piano.wav` — 8 s, shown as **Piano**
- `beat.wav` — 4 s, shown as **Beat**

Both are 48 kHz 16-bit stereo. The sources were 32-bit float; 16-bit halves
the download, decodes everywhere (Safari has been uneven on float WAV), and
loses nothing that matters here — Clouds quantises to 16 bits internally
anyway.

To add more, drop the file here and register it in the `SAMPLES` array near
the top of `../cloudius-web.html` and `../colacut-web.html`:

```js
const SAMPLES = [
  { name: "Piano", file: "samples/piano.wav" },
];
```

`name` is the button label; `file` is relative to `WebApps/`. Keep them short
— they are fetched on click from GitHub Pages.

Both apps also take a local file through **Load audio**, which needs nothing
registered here.
