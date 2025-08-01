let workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

Blockly.defineBlocksWithJsonArray([
  {
    "type": "when_run",
    "message0": "when run",
    "nextStatement": null,
    "colour": 60,
    "hat": "cap"
  },
  {
    "type": "say_message",
    "message0": "say %1 for %2 seconds",
    "args0": [
      { "type": "field_input", "name": "MSG", "text": "hello" },
      { "type": "field_number", "name": "TIME", "value": 2 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  }
]);

// Canvas logic
const stage = document.getElementById("stage");
const ctx = stage.getContext("2d");

let currentSprite = null;
let backdropImage = null;
let sounds = [];

function addSpriteFromImage(img) {
  currentSprite = img;
  renderStage();
}

function setStageBackdrop(img) {
  backdropImage = img;
  renderStage();
}

function addSoundToCurrentSprite(audio) {
  sounds.push(audio);
  audio.play(); // Optional: auto-play once
}

function renderStage() {
  ctx.clearRect(0, 0, stage.width, stage.height);
  if (backdropImage) {
    ctx.drawImage(backdropImage, 0, 0, stage.width, stage.height);
  }
  if (currentSprite) {
    ctx.drawImage(currentSprite, 150, 100, 100, 100);
  }
}

// Upload handlers
function loadImageFromFile(file, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = () => callback(img);
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

document.getElementById('uploadSprite').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    loadImageFromFile(file, addSpriteFromImage);
  }
});

document.getElementById('uploadBackdrop').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    loadImageFromFile(file, setStageBackdrop);
  }
});

document.getElementById('uploadSound').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const audio = new Audio(URL.createObjectURL(file));
    addSoundToCurrentSprite(audio);
  }
});
