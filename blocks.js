// Define blocks
Blockly.defineBlocksWithJsonArray([
  {
    "type": "event_whenrun",
    "message0": "when run clicked",
    "nextStatement": null,
    "colour": 20,
    "tooltip": "Run blocks when the Run button is clicked",
    "hat": "true"
  },
  {
    "type": "text_print",
    "message0": "say %1",
    "args0": [{ "type": "input_value", "name": "TEXT" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Say something"
  }
]);

// JavaScript generator for 'when run'
Blockly.JavaScript['event_whenrun'] = function(block) {
  const code = Blockly.JavaScript.statementToCode(block, 'DO');
  return code;
};

// JavaScript generator for 'say'
Blockly.JavaScript['text_print'] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  return `console.log(${text});\n`;
};

// (Optional) JavaScript generator for text block
Blockly.JavaScript['text'] = function(block) {
  return [`"${block.getFieldValue('TEXT')}"`, Blockly.JavaScript.ORDER_ATOMIC];
};
