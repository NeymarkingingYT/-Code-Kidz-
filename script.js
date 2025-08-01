let workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
let spriteX = 200;
let spriteY = 150;

function drawStage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.src = 'assets/sprites/cat.png';
  img.onload = () => ctx.drawImage(img, spriteX, spriteY, 48, 48);
}
drawStage();

canvas.addEventListener('click', () => {
  spriteX += 10;
  drawStage();
});

function runCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    alert("Error running code: " + e);
  }
}

function saveProject() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToText(xml);
  localStorage.setItem("code-kidz-project", xmlText);
  alert("Project saved!");
}

function loadProject() {
  const xmlText = localStorage.getItem("code-kidz-project");
  if (xmlText) {
    const xml = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, workspace);
    alert("Project loaded!");
  }
}
