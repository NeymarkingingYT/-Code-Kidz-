function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  try {
    eval(code);
  } catch (e) {
    console.error("Error running code:", e);
  }
}

window.addEventListener('load', () => {
  Blockly.inject('blocklyDiv', {
    toolbox: {
      kind: 'flyoutToolbox',
      contents: [
        { kind: 'block', type: 'text_print' },
        { kind: 'block', type: 'text' }
      ]
    }
  });
});
