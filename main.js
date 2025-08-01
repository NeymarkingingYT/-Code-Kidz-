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

Blockly.defineBlocksWithJsonArray([
  // --- EVENTS ---
  { "type": "when_run", "message0": "when run", "nextStatement": null, "colour": 60, "hat": "cap" },
  { "type": "when_key_pressed", "message0": "when %1 key pressed", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["left", "LEFT"], ["right", "RIGHT"], ["up", "UP"], ["down", "DOWN"]] }], "nextStatement": null, "colour": 60, "hat": "cap" },

  // --- MOTION ---
  { "type": "move_steps", "message0": "move %1 steps", "args0": [{ "type": "field_number", "name": "STEPS", "value": 10 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_right", "message0": "turn right %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_left", "message0": "turn left %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "go_to_xy", "message0": "go to x: %1 y: %2", "args0": [{ "type": "field_number", "name": "X", "value": 0 }, { "type": "field_number", "name": "Y", "value": 0 }], "previousStatement": null, "nextStatement": null, "colour": 230 },

  // --- LOOKS ---
  { "type": "say_message", "message0": "say %1 for %2 seconds", "args0": [{ "type": "field_input", "name": "MSG", "text": "hello" }, { "type": "field_number", "name": "TIME", "value": 2 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "change_color", "message0": "change color effect by %1", "args0": [{ "type": "field_number", "name": "AMT", "value": 25 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "set_size", "message0": "set size to %1 %", "args0": [{ "type": "field_number", "name": "SIZE", "value": 100 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "hide_sprite", "message0": "hide", "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "show_sprite", "message0": "show", "previousStatement": null, "nextStatement": null, "colour": 160 },

  // --- SOUND ---
  { "type": "play_sound", "message0": "play sound %1", "args0": [{ "type": "field_dropdown", "name": "SOUND", "options": [["meow", "MEOW"], ["boing", "BOING"], ["pop", "POP"]] }], "previousStatement": null, "nextStatement": null, "colour": 20 },
  { "type": "stop_all_sounds", "message0": "stop all sounds", "previousStatement": null, "nextStatement": null, "colour": 20 },

  // --- CONTROL ---
  { "type": "controls_repeat_ext", "message0": "repeat %1", "args0": [{ "type": "field_number", "name": "TIMES", "value": 10 }], "message1": "%1", "args1": [{ "type": "input_statement", "name": "DO" }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  { "type": "wait_seconds", "message0": "wait %1 seconds", "args0": [{ "type": "field_number", "name": "SECS", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 120 },

  // --- SENSING ---
  { "type": "key_pressed", "message0": "key %1 pressed?", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["up", "UP"], ["down", "DOWN"]] }], "output": "Boolean", "colour": 290 },
  { "type": "mouse_x", "message0": "mouse x", "output": "Number", "colour": 290 },
  { "type": "mouse_y", "message0": "mouse y", "output": "Number", "colour": 290 },

  // --- VARIABLES ---
  { "type": "set_variable", "message0": "set %1 to %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "input_value", "name": "VALUE" }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "change_variable", "message0": "change %1 by %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "field_number", "name": "VALUE", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "get_variable", "message0": "%1", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }], "output": "Number", "colour": 330 },

  // --- OPERATORS ---
  { "type": "math_add", "message0": "%1 + %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_sub", "message0": "%1 - %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_mult", "message0": "%1 × %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_div", "message0": "%1 ÷ %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_random", "message0": "random from %1 to %2", "args0": [{ "type": "field_number", "name": "FROM", "value": 1 }, { "type": "field_number", "name": "TO", "value": 10 }], "output": "Number", "colour": 210 },
  { "type": "logic_compare", "message0": "%1 %2 %3", "args0": [{ "type": "input_value", "name": "A" }, { "type": "field_dropdown", "name": "OP", "options": [["=", "EQ"], ["<", "LT"], [">", "GT"]] }, { "type": "input_value", "name": "B" }], "output": "Boolean", "colour": 210 },

  // more could be added here (I'll stop at ~30 due to length, but this is scalable to 50+ easily!)
]);

