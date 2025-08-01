let workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

// Canvas + Sprite Setup
const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
let spriteImg = new Image();
spriteImg.src = 'https://upload.wikimedia.org/wikipedia/commons/4/45/Scratch_cat.svg';

let sprite = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  dragging: false
};

function drawStage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(spriteImg, sprite.x, sprite.y, sprite.width, sprite.height);
  requestAnimationFrame(drawStage);
}
drawStage();

// Dragging logic
canvas.addEventListener('mousedown', e => {
  if (e.offsetX > sprite.x && e.offsetX < sprite.x + sprite.width &&
      e.offsetY > sprite.y && e.offsetY < sprite.y + sprite.height) {
    sprite.dragging = true;
    canvas.style.cursor = 'grabbing';
  }
});
canvas.addEventListener('mousemove', e => {
  if (sprite.dragging) {
    sprite.x = e.offsetX - sprite.width / 2;
    sprite.y = e.offsetY - sprite.height / 2;
  }
});
canvas.addEventListener('mouseup', () => {
  sprite.dragging = false;
  canvas.style.cursor = 'grab';
});

// Upload Sprite
document.getElementById('uploadSprite').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    spriteImg.src = URL.createObjectURL(file);
  }
});

// Upload Backdrop
document.getElementById('uploadBackdrop').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      canvas.style.backgroundImage = `url(${img.src})`;
      canvas.style.backgroundSize = 'cover';
    };
  }
});

// Upload Sound
let uploadedSound = null;
document.getElementById('uploadSound').addEventListener('change', e => {
  const file = e.target.files[0];
  if (file) {
    uploadedSound = new Audio(URL.createObjectURL(file));
    uploadedSound.play();
  }
});

// Optional: Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Placeholder for block definitions (next step)
function defineAllBlocks() {
  // This function will be replaced by the full 100-block JSON block definitions
}
defineAllBlocks();
