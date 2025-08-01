const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

let isRunning = false;

document.getElementById("run-button").addEventListener("click", () => {
  const btn = document.getElementById("run-button");

  if (!isRunning) {
    isRunning = true;
    btn.textContent = "Stop";
    try {
      runCode();
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  } else {
    isRunning = false;
    btn.textContent = "Run";
    location.reload();
  }
});
