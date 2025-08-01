function runCode() {
  const workspace = Blockly.getMainWorkspace();
  const topBlocks = workspace.getTopBlocks(true);

  for (const block of topBlocks) {
    if (block.type === 'event_whenrun') {
      const code = Blockly.JavaScript.blockToCode(block);
      try {
        eval(code);
      } catch (e) {
        console.error("Error running block:", e);
      }
    }
  }
}

window.addEventListener('load', () => {
  Blockly.inject('blocklyDiv', {
    toolbox: {
      kind: 'flyoutToolbox',
      contents: [
        { kind: 'block', type: 'event_whenrun' },
        { kind: 'block', type: 'text_print' },
        { kind: 'block', type: 'text' }
      ]
    }
  });
});
