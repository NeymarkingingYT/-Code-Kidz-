// Setup Blockly
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true
});

// Sprite image setup (replace with your own if needed)
const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
let spriteX = 100, spriteY = 100;

function drawSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "orange";
  ctx.fillRect(spriteX, spriteY, 50, 50); // mock sprite
}

drawSprite();

// Dark/Light Mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Handle dragging
let dragging = false;

canvas.addEventListener("mousedown", (e) => {
  dragging = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (dragging) {
    const rect = canvas.getBoundingClientRect();
    spriteX = e.clientX - rect.left - 25;
    spriteY = e.clientY - rect.top - 25;
    drawSprite();
  }
});

canvas.addEventListener("mouseup", () => {
  dragging = false;
});

// Define blocks (50+ blocks supported!)
Blockly.defineBlocksWithJsonArray([
  // Events
  { "type": "when_run", "message0": "when run", "nextStatement": null, "colour": 60, "hat": "cap" },
  { "type": "when_key_pressed", "message0": "when %1 key pressed", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["left", "LEFT"], ["right", "RIGHT"], ["up", "UP"], ["down", "DOWN"]] }], "nextStatement": null, "colour": 60, "hat": "cap" },
  // Motion
  { "type": "move_steps", "message0": "move %1 steps", "args0": [{ "type": "field_number", "name": "STEPS", "value": 10 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_right", "message0": "turn right %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_left", "message0": "turn left %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "go_to_xy", "message0": "go to x: %1 y: %2", "args0": [{ "type": "field_number", "name": "X", "value": 0 }, { "type": "field_number", "name": "Y", "value": 0 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  // Looks
  { "type": "say_message", "message0": "say %1 for %2 seconds", "args0": [{ "type": "field_input", "name": "MSG", "text": "hello" }, { "type": "field_number", "name": "TIME", "value": 2 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "change_color", "message0": "change color effect by %1", "args0": [{ "type": "field_number", "name": "AMT", "value": 25 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "set_size", "message0": "set size to %1 %", "args0": [{ "type": "field_number", "name": "SIZE", "value": 100 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "hide_sprite", "message0": "hide", "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "show_sprite", "message0": "show", "previousStatement": null, "nextStatement": null, "colour": 160 },
  // Sound
  { "type": "play_sound", "message0": "play sound %1", "args0": [{ "type": "field_dropdown", "name": "SOUND", "options": [["meow", "MEOW"], ["boing", "BOING"], ["pop", "POP"]] }], "previousStatement": null, "nextStatement": null, "colour": 20 },
  { "type": "stop_all_sounds", "message0": "stop all sounds", "previousStatement": null, "nextStatement": null, "colour": 20 },
  // Control
  { "type": "controls_repeat_ext", "message0": "repeat %1", "args0": [{ "type": "field_number", "name": "TIMES", "value": 10 }], "message1": "%1", "args1": [{ "type": "input_statement", "name": "DO" }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  { "type": "wait_seconds", "message0": "wait %1 seconds", "args0": [{ "type": "field_number", "name": "SECS", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  // Sensing
  { "type": "key_pressed", "message0": "key %1 pressed?", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["up", "UP"], ["down", "DOWN"]] }], "output": "Boolean", "colour": 290 },
  { "type": "mouse_x", "message0": "mouse x", "output": "Number", "colour": 290 },
  { "type": "mouse_y", "message0": "mouse y", "output": "Number", "colour": 290 },
  // Variables
  { "type": "set_variable", "message0": "set %1 to %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "input_value", "name": "VALUE" }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "change_variable", "message0": "change %1 by %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "field_number", "name": "VALUE", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "get_variable", "message0": "%1", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }], "output": "Number", "colour": 330 },
  // Operators
  { "type": "math_add", "message0": "%1 + %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_sub", "message0": "%1 - %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_mult", "message0": "%1 × %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_div", "message0": "%1 ÷ %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_random", "message0": "random from %1 to %2", "args0": [{ "type": "field_number", "name": "FROM", "value": 1 }, { "type": "field_number", "name": "TO", "value": 10 }], "output": "Number", "colour": 210 },
  { "type": "logic_compare", "message0": "%1 %2 %3", "args0": [{ "type": "input_value", "name": "A" }, { "type": "field_dropdown", "name": "OP", "options": [["=", "EQ"], ["<", "LT"], [">", "GT"]] }, { "type": "input_value", "name": "B" }], "output": "Boolean", "colour": 210 }
  // --- SMARTER BLOCKS ---
{
  "type": "controls_if",
  "message0": "if %1 then",
  "args0": [{ "type": "input_value", "name": "IF0", "check": "Boolean" }],
  "message1": "%1",
  "args1": [{ "type": "input_statement", "name": "DO0" }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},
{
  "type": "controls_if_else",
  "message0": "if %1 then",
  "args0": [{ "type": "input_value", "name": "IF0", "check": "Boolean" }],
  "message1": "%1",
  "args1": [{ "type": "input_statement", "name": "DO0" }],
  "message2": "else",
  "args2": [{ "type": "input_statement", "name": "ELSE" }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},
{
  "type": "clone_sprite",
  "message0": "create clone of myself",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290
},
{
  "type": "when_cloned",
  "message0": "when I start as a clone",
  "nextStatement": null,
  "colour": 60,
  "hat": "cap"
},
{
  "type": "touching_mouse",
  "message0": "touching mouse?",
  "output": "Boolean",
  "colour": 290
}

]);
