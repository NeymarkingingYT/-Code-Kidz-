function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  eval(code);
}

// Simple game sprite state
let spriteX = 50;
let spriteY = 150;

function drawSprite() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw sprite as a square
  ctx.fillStyle = "#222";
  ctx.fillRect(spriteX, spriteY, 30, 30);
}

drawSprite();

// BLOCK DEFINITIONS
Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_forward",
    "message0": "move forward %1 steps",
    "args0": [
      { "type": "field_number", "name": "STEPS", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "say",
    "message0": "say %1",
    "args0": [
      { "type": "input_value", "name": "TEXT" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290
  }
]);

Blockly.JavaScript['move_forward'] = function(block) {
  const steps = block.getFieldValue('STEPS');
  return `
    spriteX += ${steps};
    drawSprite();
  `;
};

Blockly.JavaScript['say'] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `alert(${text});\n`;
};
