(function () {
  var canvas = document.getElementById('logo-canvas');
  if (!canvas) return;

  function fallbackToText() {
    canvas.style.display = 'none';
    var label = canvas.parentElement.querySelector('.sr-only');
    if (label) label.classList.remove('sr-only');
  }

  var gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false }) ||
           canvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: false });
  if (!gl) { fallbackToText(); return; }

  var PALETTE_HEX = ['CDB4DB', 'FFC8DD', 'FFAFCC', 'BDE0FE', 'A2D2FF'];
  var paletteRgb = new Float32Array(PALETTE_HEX.length * 3);
  PALETTE_HEX.forEach(function (hex, i) {
    paletteRgb[i * 3] = parseInt(hex.slice(0, 2), 16) / 255;
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

  var fragSrc =
    'precision mediump float;' +
    'varying vec2 v_uv;' +
    'uniform sampler2D u_mask;' +
    'uniform float u_time;' +
    'uniform vec3 u_palette[5];' +
    'void main() {' +
    '  float mask = texture2D(u_mask, v_uv).a;' +
    '  if (mask < 0.02) { discard; }' +
    '  float n = 5.0;' +
    '  float t = fract(v_uv.x * 0.6 + u_time * 0.22) * n;' +
    '  vec3 col = vec3(0.0);' +
    '  for (int i = 0; i < 5; i++) {' +
    '    float center = float(i);' +
    '    float d = mod(t - center + n * 0.5, n) - n * 0.5;' +
    '    float w = max(0.0, 1.0 - abs(d));' +
    '    col += u_palette[i] * w;' +
    '  }' +
    '  gl_FragColor = vec4(col, mask);' +
    '}';

  function compile(type, src) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  var vertShader = compile(gl.VERTEX_SHADER, vertSrc);
  var fragShader = compile(gl.FRAGMENT_SHADER, fragSrc);
  if (!vertShader || !fragShader) { fallbackToText(); return; }

  var program = gl.createProgram();
  gl.attachShader(program, vertShader);
  gl.attachShader(program, fragShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { fallbackToText(); return; }
  gl.useProgram(program);

  var quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  var quadBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

  var posLoc = gl.getAttribLocation(program, 'a_pos');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  var maskLoc = gl.getUniformLocation(program, 'u_mask');
  var timeLoc = gl.getUniformLocation(program, 'u_time');
  var paletteLoc = gl.getUniformLocation(program, 'u_palette');
  gl.uniform3fv(paletteLoc, paletteRgb);

  var maskTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, maskTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  var maskCanvas = document.createElement('canvas');
  var maskCtx = maskCanvas.getContext('2d');

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
    maskCtx.font = '300 ' + Math.round(h * 0.9) + 'px "Helvetica Neue", Helvetica, Arial, sans-serif';
    maskCtx.fillText('sungam', w / 2, h / 2 + 1);

    gl.bindTexture(gl.TEXTURE_2D, maskTexture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, maskCanvas);

    gl.viewport(0, 0, w, h);
  }

  buildMask();
  window.addEventListener('resize', buildMask);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(timeMs) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(timeLoc, timeMs * 0.001);
    gl.uniform1i(maskLoc, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, maskTexture);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  if (reduceMotion) {
    render(0);
  } else {
    requestAnimationFrame(function loop(t) {
      render(t);
      requestAnimationFrame(loop);
    });
  }
})();
