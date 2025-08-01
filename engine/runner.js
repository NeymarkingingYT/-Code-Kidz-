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
