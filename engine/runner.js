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
    "message0": "change sprite color (not yet implemented)",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Placeholder block",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['move_forward'] = function(block) {
  return 'spriteX += 10; drawStage();\n';
};

Blockly.JavaScript['change_sprite_color'] = function(block) {
  return '// Change sprite color code goes here\n';
};
