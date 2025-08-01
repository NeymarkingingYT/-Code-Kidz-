// Blockly setup
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

// Dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Save/load project
function saveProject() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const text = Blockly.Xml.domToText(xml);
  localStorage.setItem('codeKidzProject', text);
  alert('Project saved!');
}

function loadProject() {
  const text = localStorage.getItem('codeKidzProject');
  if (text) {
    const xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
    alert('Project loaded!');
  } else {
    alert('No saved project found.');
  }
}

// Sprite stage setup
const canvas = document.getElementById('stageCanvas');
const ctx = canvas.getContext('2d');
const spriteImg = new Image();
spriteImg.src = 'assets/sprites/cat.png';

let spriteX = 100, spriteY = 100;

spriteImg.onload = () => drawSprite();

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left, y = e.clientY - rect.top;
  if (
    x > spriteX && x < spriteX + 48 &&
    y > spriteY && y < spriteY + 48
  ) {
    dragging = true;
  }
});

let dragging = false;

canvas.addEventListener('mousemove', (e) => {
  if (dragging) {
    const rect = canvas.getBoundingClientRect();
    spriteX = e.clientX - rect.left - 24;
    spriteY = e.clientY - rect.top - 24;
    drawSprite();
  }
});

canvas.addEventListener('mouseup', () => {
  dragging = false;
});

function drawSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(spriteImg, spriteX, spriteY, 48, 48);
}

Blockly.defineBlocksWithJsonArray([
  {
    "type": "when_run",
    "message0": "when run",
    "nextStatement": null,
    "colour": 60,
    "tooltip": "Runs when the project starts",
    "hat": "cap"
  },
  {
    "type": "move_steps",
    "message0": "move %1 steps",
    "args0": [
      {
        "type": "field_number",
        "name": "STEPS",
        "value": 10
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Moves the sprite",
  }
]);
