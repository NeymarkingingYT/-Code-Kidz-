// Setup Blockly
const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
});

// Create a simple "say" block
Blockly.Blocks['say_message'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("say")
      .appendField(new Blockly.FieldTextInput("Hello!"), "MESSAGE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Says something.");
  }
};

Blockly.JavaScript['say_message'] = function (block) {
  const msg = block.getFieldValue('MESSAGE');
  return `alert("${msg}");\n`;
};

// Simple "when run" event block
Blockly.Blocks['when_run'] = {
  init: function () {
    this.appendDummyInput().appendField("when run");
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Runs the stack when clicked.");
  }
};

Blockly.JavaScript['when_run'] = function (block) {
  const next = Blockly.JavaScript.statementToCode(block, 'DO');
  return `${next}`;
};

// Upload Sprite
document.getElementById('uploadSprite').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const img = new Image();
    img.onload = () => {
      const ctx = document.getElementById('stage').getContext('2d');
      ctx.clearRect(0, 0, 480, 360);
      ctx.drawImage(img, 50, 50, 100, 100);
    };
    img.src = URL.createObjectURL(file);
  }
});

// Upload Backdrop
document.getElementById('uploadBackdrop').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const img = new Image();
    img.onload = () => {
      const ctx = document.getElementById('stage').getContext('2d');
      ctx.drawImage(img, 0, 0, 480, 360);
    };
    img.src = URL.createObjectURL(file);
  }
});

// Upload Sound
document.getElementById('uploadSound').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const audio = new Audio(URL.createObjectURL(file));
    audio.play();
  }
});
