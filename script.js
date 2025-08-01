// script.js — Blockly Workspace and Run Button Logic

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

let isRunning = false;

const runButton = document.getElementById("run-button");
runButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    runButton.textContent = "Stop";
    runCode();
  } else {
    isRunning = false;
    runButton.textContent = "Run";
    location.reload();
  }
});

// Dynamically add all 500 custom blocks to toolbox (JS only, HTML has 3 shown)
const toolboxCategory = document.querySelector('category[name="Custom Blocks"]');
for (let i = 3; i < 500; i++) {
  const block = document.createElement("block");
  block.setAttribute("type", `custom_block_${i}`);
  toolboxCategory.appendChild(block);
}
