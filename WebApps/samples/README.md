# Samples

Audio files the web apps offer as one-click sources.

Drop files here, then register them in the `SAMPLES` array near the top of
`../cloudius-web.html` and `../colacut-web.html`:

```js
const SAMPLES = [
  { name: "Rhodes", file: "samples/rhodes.mp3" },
];
```

`name` is the button label; `file` is relative to the `WebApps/` folder.

Any format the browser can decode works — mp3, wav, ogg, m4a, flac. Keep them
short and small: they are fetched over the network on click, and the page is
served from GitHub Pages. A few seconds each, mono or stereo, is plenty.

Both apps also take a local file through **Load audio**, which needs nothing
registered here.
