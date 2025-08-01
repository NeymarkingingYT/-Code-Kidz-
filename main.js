// Blockly init
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  theme: Blockly.Themes.Classic
});

// Sprite canvas setup
const canvas = document.getElementById('stageCanvas');
const ctx = canvas.getContext('2d');
const spriteImg = new Image();
spriteImg.src = 'assets/sprites/cat.png';

let spriteX = 100, spriteY = 100;
let dragging = false;

spriteImg.onload = () => drawSprite();

function drawSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(spriteImg, spriteX, spriteY, 48, 48);
}

canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  if (x >= spriteX && x <= spriteX + 48 && y >= spriteY && y <= spriteY + 48) {
    dragging = true;
  }
});

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

// Theme switcher
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Save/load project
function saveProject() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const text = Blockly.Xml.domToText(xml);
  localStorage.setItem('codeKidzProject', text);
  alert("✅ Project saved!");
}

function loadProject() {
  const text = localStorage.getItem('codeKidzProject');
  if (text) {
    const xml = Blockly.Xml.textToDom(text);
    Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
    alert("✅ Project loaded!");
  } else {
    alert("⚠️ No saved project found.");
  }
}

// Custom blocks
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

function openModal() {
  document.getElementById('customBlockModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('customBlockModal').style.display = 'none';
  document.getElementById('procName').value = '';
}

function createCustomBlock() {
  const name = document.getElementById('procName').value.trim();
  if (!name) return alert('Block name required');

  Blockly.defineBlocksWithJsonArray([{
    type: `custom_${name}`,
    message0: `${name}`,
    nextStatement: null,
    previousStatement: null,
    colour: 290
  }]);

  const toolbox = workspace.options.languageTree;
  const customCat = toolbox.getElementsByTagName('category');
  let customSection = null;
  for (let cat of customCat) {
    if (cat.getAttribute('name') === 'Custom') {
      customSection = cat;
    }
  }

  if (!customSection) {
    const newCat = document.createElement('category');
    newCat.setAttribute('name', 'Custom');
    newCat.setAttribute('colour', '#00BCD4');
    document.getElementById('toolbox').appendChild(newCat);
  }

  const newBlock = document.createElement('block');
  newBlock.setAttribute('type', `custom_${name}`);
  document.querySelector('category[name="Custom"]').appendChild(newBlock);
  Blockly.Xml.domToWorkspace(document.getElementById('toolbox'), workspace);
  closeModal();
}

