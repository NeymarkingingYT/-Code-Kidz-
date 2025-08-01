// Code For All original blocks btw

Blockly.defineBlocksWithJsonArray([
  
  {
    "type": "move_forward",
    "message0": "move sprite forward 10px",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "Moves the sprite forward",
    "helpUrl": ""
  },
  
  {
    "type": "change_sprite_color",
    "message0": "will change sprites color",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Placeholder block",
    "helpUrl": ""
  }
]);

// Define Blocks Here

Blockly.JavaScript['move_forward'] = function(block) {
  return 'spriteX += 10; drawStage();\n';
};

Blockly.JavaScript['change_sprite_color'] = function(block) {
  return '// Change sprite color code goes here\n';
};

Blockly.JavaScript['say_hello'] = function(block) {
  const msg = block.getFieldValue('TEXT');
  return `alert("${msg}");\n`;
};

// extra blocks code

Blockly.defineBlocksWithJsonArray([
  {
    "type": "say_hello",
    "message0": "say %1",
    "args0": [
      {
        "type": "field_input",
        "name": "TEXT",
        "text": "Hello!"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Say something",
    "helpUrl": ""
  }
]);

// block definer

Blockly.JavaScript['say_hello'] = function(block) {
  const msg = block.getFieldValue('TEXT');
  return `alert("${msg}");\n`;
};

