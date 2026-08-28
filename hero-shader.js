(function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var gl = canvas.getContext('webgl', { alpha: false }) ||
           canvas.getContext('experimental-webgl', { alpha: false });
  if (!gl) return;

  var PALETTE_HEX = ['CDB4DB', 'FFC8DD', 'FFAFCC', 'BDE0FE', 'A2D2FF'];
  var paletteRgb = new Float32Array(PALETTE_HEX.length * 3);
  PALETTE_HEX.forEach(function (hex, i) {
    paletteRgb[i * 3]     = parseInt(hex.slice(0, 2), 16) / 255;
    paletteRgb[i * 3 + 1] = parseInt(hex.slice(2, 4), 16) / 255;
    paletteRgb[i * 3 + 2] = parseInt(hex.slice(4, 6), 16) / 255;
  });

  var vertSrc =
    'attribute vec2 a_pos;' +
    'varying vec2 v_uv;' +
    'void main() {' +
    '  v_uv = a_pos * 0.5 + 0.5;' +
    '  gl_Position = vec4(a_pos, 0.0, 1.0);' +
    '}';

  // Two-layer shader: text (forward, full brightness) vs background (reverse, very dim)
  var fragSrc =
    'precision mediump float;' +
    'varying vec2 v_uv;' +
    'uniform sampler2D u_mask;' +
    'uniform float u_time;' +
    'uniform vec3 u_palette[5];' +
    'vec3 grad(float x, float t) {' +
    '  float n = 5.0;' +
    '  float val = fract(x * 0.6 + t) * n;' +
    '  vec3 col = vec3(0.0);' +
    '  for (int i = 0; i < 5; i++) {' +
    '    float center = float(i);' +
    '    float d = mod(val - center + n * 0.5, n) - n * 0.5;' +
    '    col += u_palette[i] * max(0.0, 1.0 - abs(d));' +
    '  }' +
    '  return col;' +
    '}' +
    'void main() {' +
    '  float mask = texture2D(u_mask, v_uv).a;' +
    '  vec3 textCol = grad(v_uv.x,  u_time * 0.22);' +
    '  vec3 bgCol   = grad(v_uv.x, -u_time * 0.07) * 0.18;' +
    '  gl_FragColor = vec4(mix(bgCol, textCol, mask), 1.0);' +
    '}';

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  }

  var vert = compile(gl.VERTEX_SHADER, vertSrc);
  var frag = compile(gl.FRAGMENT_SHADER, fragSrc);
  if (!vert || !frag) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vert);
  gl.attachShader(prog, frag);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

  var posLoc = gl.getAttribLocation(prog, 'a_pos');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var maskLoc    = gl.getUniformLocation(prog, 'u_mask');
  var timeLoc    = gl.getUniformLocation(prog, 'u_time');
  var paletteLoc = gl.getUniformLocation(prog, 'u_palette');
  gl.uniform3fv(paletteLoc, paletteRgb);

  var maskTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, maskTex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  var maskCanvas = document.createElement('canvas');
  var maskCtx = maskCanvas.getContext('2d');
  var family = '"Helvetica Neue", Helvetica, Arial, sans-serif';

  function buildMask() {
    var rect = canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(rect.width * dpr));
    var h = Math.max(1, Math.round(rect.height * dpr));

    canvas.width = w;
    canvas.height = h;
    maskCanvas.width = w;
    maskCanvas.height = h;

    maskCtx.clearRect(0, 0, w, h);
    maskCtx.fillStyle = '#fff';
    maskCtx.textAlign = 'center';
    maskCtx.textBaseline = 'middle';

    // Fit text to 94% of the canvas width
    var testSize = 500;
    maskCtx.font = '300 ' + testSize + 'px ' + family;
    var scale = (w * 0.94) / maskCtx.measureText('sungam').width;
    var fontSize = Math.floor(testSize * scale);
    maskCtx.font = '300 ' + fontSize + 'px ' + family;
    maskCtx.fillText('sungam', w / 2, h / 2);

    gl.bindTexture(gl.TEXTURE_2D, maskTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, maskCanvas);
    gl.viewport(0, 0, w, h);
  }

  buildMask();
  window.addEventListener('resize', buildMask);

  gl.clearColor(0.086, 0.11, 0.122, 1); // matches --bg #161c1f
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function draw(t) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(timeLoc, t * 0.001);
    gl.uniform1i(maskLoc, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, maskTex);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  if (reduceMotion) {
    draw(0);
  } else {
    requestAnimationFrame(function loop(t) { draw(t); requestAnimationFrame(loop); });
  }
})();
