// === Custom Blocks (50 total) ===

Blockly.defineBlocksWithJsonArray([
  // MOTION
  {
    "type": "move_right",
    "message0": "move right %1 steps",
    "args0": [
      { "type": "field_number", "name": "STEPS", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "move_left",
    "message0": "move left %1 steps",
    "args0": [
      { "type": "field_number", "name": "STEPS", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "move_up",
    "message0": "move up %1 steps",
    "args0": [
      { "type": "field_number", "name": "STEPS", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "move_down",
    "message0": "move down %1 steps",
    "args0": [
      { "type": "field_number", "name": "STEPS", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },
  {
    "type": "set_position",
    "message0": "set sprite position x: %1 y: %2",
    "args0": [
      { "type": "field_number", "name": "X", "value": 100 },
      { "type": "field_number", "name": "Y", "value": 100 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210
  },

  // LOOKS
  {
    "type": "say_text",
    "message0": "say %1 for %2 seconds",
    "args0": [
      { "type": "field_input", "name": "TEXT", "text": "Hello!" },
      { "type": "field_number", "name": "SECONDS", "value": 2 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "change_color",
    "message0": "change sprite color (not implemented)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },

  // SOUND
  {
    "type": "play_sound",
    "message0": "play sound %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SOUND",
        "options": [
          ["meow", "meow.mp3"],
          ["pop", "pop.mp3"],
          ["jump", "jump.mp3"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20
  },

  // EVENTS
  {
    "type": "when_run",
    "message0": "when run",
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "broadcast",
    "message0": "broadcast message %1",
    "args0": [
      { "type": "field_input", "name": "MSG", "text": "start" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120
  },
  {
    "type": "when_receive",
    "message0": "when I receive %1",
    "args0": [
      { "type": "field_input", "name": "MSG", "text": "start" }
    ],
    "nextStatement": null,
    "colour": 120
  },

  // CONTROL (more in actual 50)
  {
    "type": "wait_seconds",
    "message0": "wait %1 seconds",
    "args0": [
      { "type": "field_number", "name": "SECONDS", "value": 1 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60
  }
]);

// === Code Generators ===

Blockly.JavaScript['move_right'] = (block) => {
  const steps = block.getFieldValue('STEPS');
  return `spriteX += ${steps}; drawStage();\n`;
};
Blockly.JavaScript['move_left'] = (block) => {
  const steps = block.getFieldValue('STEPS');
  return `spriteX -= ${steps}; drawStage();\n`;
};
Blockly.JavaScript['move_up'] = (block) => {
  const steps = block.getFieldValue('STEPS');
  return `spriteY -= ${steps}; drawStage();\n`;
};
Blockly.JavaScript['move_down'] = (block) => {
  const steps = block.getFieldValue('STEPS');
  return `spriteY += ${steps}; drawStage();\n`;
};
Blockly.JavaScript['set_position'] = (block) => {
  const x = block.getFieldValue('X');
  const y = block.getFieldValue('Y');
  return `spriteX = ${x}; spriteY = ${y}; drawStage();\n`;
};

Blockly.JavaScript['say_text'] = (block) => {
  const text = block.getFieldValue('TEXT');
  const seconds = block.getFieldValue('SECONDS');
  return `sayMessage("${text}", ${seconds});\n`;
};

Blockly.JavaScript['change_color'] = () => {
  return `// TODO: change sprite color\n`;
};

Blockly.JavaScript['play_sound'] = (block) => {
  const file = block.getFieldValue('SOUND');
  return `new Audio("assets/sounds/${file}").play();\n`;
};

Blockly.JavaScript['wait_seconds'] = (block) => {
  const seconds = block.getFieldValue('SECONDS');
  return `await new Promise(r => setTimeout(r, ${seconds * 1000}));\n`;
};

Blockly.JavaScript['broadcast'] = (block) => {
  const msg = block.getFieldValue('MSG');
  return `broadcast("${msg}");\n`;
};

Blockly.JavaScript['when_receive'] = (block) => {
  const msg = block.getFieldValue('MSG');
  return `// handler for receiving message: ${msg}\n`;
};

// === Extra Blocks ===

// ==== Pen Drawing ====
Blockly.defineBlocksWithJsonArray([
  {
    "type": "pen_down",
    "message0": "pen down",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "pen_up",
    "message0": "pen up",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "set_pen_color",
    "message0": "set pen color to %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "COLOR",
        "colour": "#ff0000"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  }
]);

Blockly.JavaScript['pen_down'] = () => `penDown = true;\n`;
Blockly.JavaScript['pen_up'] = () => `penDown = false;\n`;
Blockly.JavaScript['set_pen_color'] = (block) => {
  const color = block.getFieldValue('COLOR');
  return `penColor = "${color}";\n`;
};

// ==== Logic & Math ====
Blockly.defineBlocksWithJsonArray([
  {
    "type": "is_touching_edge",
    "message0": "sprite is touching edge?",
    "output": "Boolean",
    "colour": 210
  },
  {
    "type": "math_number",
    "message0": "%1",
    "args0": [{ "type": "field_number", "name": "NUM", "value": 0 }],
    "output": "Number",
    "colour": 230
  },
  {
    "type": "math_add",
    "message0": "%1 + %2",
    "args0": [
      { "type": "input_value", "name": "A" },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 230
  }
]);

Blockly.JavaScript['is_touching_edge'] = () => {
  return `(spriteX <= 0 || spriteX >= 432 || spriteY <= 0 || spriteY >= 312)`;
};
Blockly.JavaScript['math_number'] = (block) => {
  const num = block.getFieldValue('NUM');
  return [num, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['math_add'] = (block) => {
  const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ADDITION) || '0';
  const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ADDITION) || '0';
  return [`(${a} + ${b})`, Blockly.JavaScript.ORDER_ADDITION];
};

// ==== Variables ====
Blockly.defineBlocksWithJsonArray([
  {
    "type": "set_variable",
    "message0": "set %1 to %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "score"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "change_variable",
    "message0": "change %1 by %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "score"
      },
      {
        "type": "input_value",
        "name": "DELTA"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  }
]);

Blockly.JavaScript['set_variable'] = function(block) {
  const varName = block.getField('VAR').getText();
  const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return `${varName} = ${val};\n`;
};

Blockly.JavaScript['change_variable'] = function(block) {
  const varName = block.getField('VAR').getText();
  const delta = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  return `${varName} += ${delta};\n`;
};

// ==== Loops and Ifs ====
Blockly.JavaScript['controls_repeat_ext'] = function(block) {
  const repeats = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  const branch = Blockly.JavaScript.statementToCode(block, 'DO');
  return `for (let i = 0; i < ${repeats}; i++) {\n${branch}}\n`;
};

Blockly.JavaScript['controls_if'] = function(block) {
  const cond = Blockly.JavaScript.valueToCode(block, 'IF0', Blockly.JavaScript.ORDER_NONE) || 'false';
  const branch = Blockly.JavaScript.statementToCode(block, 'DO0');
  return `if (${cond}) {\n${branch}}\n`;
};

// ==== Clone Blocks ====
Blockly.defineBlocksWithJsonArray([
  {
    "type": "create_clone",
    "message0": "create clone of sprite",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 80
  },
  {
    "type": "when_clone_start",
    "message0": "when clone starts",
    "nextStatement": null,
    "colour": 80
  }
]);

Blockly.JavaScript['create_clone'] = () => {
  return `createClone();\n`;
};

Blockly.JavaScript['when_clone_start'] = () => {
  return `// clone start handler\n`;
};
