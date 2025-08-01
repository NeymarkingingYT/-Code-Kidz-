import './blocks.js';

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true,
  trashcan: true
});

// Sprite reference
const sprite = document.getElementById('sprite');
sprite.draggable = true;

let offsetX, offsetY, isDragging = false;

sprite.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener('mouseup', () => isDragging = false);

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    sprite.style.left = `${e.pageX - offsetX}px`;
    sprite.style.top = `${e.pageY - offsetY}px`;
  }
});

// Run the workspace code
document.getElementById('runButton').onclick = () => {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    console.error(e);
  }
};

// Upload sprite/costume
document.getElementById('uploadSprite').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    sprite.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Upload backdrop
document.getElementById('uploadBackdrop').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    document.body.style.backgroundImage = `url(${event.target.result})`;
    document.body.style.backgroundSize = 'cover';
  };
  reader.readAsDataURL(file);
});

// Upload sound (to play later in scripts)
let userSoundURL = null;
document.getElementById('uploadSound').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    userSoundURL = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Play uploaded sound
function playUserSound() {
  if (userSoundURL) {
    const audio = new Audio(userSoundURL);
    audio.play();
  }
}
window.playUserSound = playUserSound;
