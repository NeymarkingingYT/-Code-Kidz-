// engine/runner.js — Base Game Engine with Blockly Block Logic

function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (err) {
    console.error("Error running code:", err);
    alert("Error: " + err.message);
  }
}

let spriteX = 50;
let spriteY = 150;

function drawSprite() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222";
  ctx.fillRect(spriteX, spriteY, 30, 30);
}

drawSprite();

// BASIC BLOCK DEFINITIONS
const blockDefs = [];
const blockGenerators = {};

for (let i = 0; i < 500; i++) {
  const blockId = `custom_block_${i}`;
  blockDefs.push({
    type: blockId,
    message0: `custom block ${i}`,
    previousStatement: null,
    nextStatement: null,
    colour: (i % 360)
  });

  blockGenerators[blockId] = function () {
    return `console.log(\"Running block ${i}\");\n`;
  };
}

Blockly.defineBlocksWithJsonArray(blockDefs);
for (let blockId in blockGenerators) {
  Blockly.JavaScript[blockId] = blockGenerators[blockId];
}

// Manual key blocks
Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_forward",
    "message0": "move forward %1 steps",
    "args0": [ { "type": "field_number", "name": "STEPS", "value": 10 } ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "say",
    "message0": "say %1",
    "args0": [ { "type": "input_value", "name": "TEXT" } ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 290
  }
]);

Blockly.JavaScript['move_forward'] = function(block) {
  const steps = block.getFieldValue('STEPS');
  return `spriteX += ${steps};\ndrawSprite();\n`;
};

Blockly.JavaScript['say'] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC) || '""';
  return `alert(${text});\n`;
};
