let penDown = false;
let penColor = "#000000";
let clones = [];


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

function drawStage() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw clones
  clones.forEach(c => ctx.drawImage(spriteImage, c.x, c.y, 48, 48));

  // Draw main sprite
  ctx.drawImage(spriteImage, spriteX, spriteY, 48, 48);

  // Draw speech bubble if any
  if (speechText) {
    ctx.font = "16px sans-serif";
    const w = ctx.measureText(speechText).width;
    ctx.fillStyle = "white";
    ctx.fillRect(spriteX, spriteY - 30, w + 10, 24);
    ctx.strokeStyle = "black";
    ctx.strokeRect(spriteX, spriteY - 30, w + 10, 24);
    ctx.fillStyle = "black";
    ctx.fillText(speechText, spriteX + 5, spriteY - 13);
  }

  // Draw pen trail dot if down
  if (penDown) {
    ctx.fillStyle = penColor;
    ctx.fillRect(spriteX + 20, spriteY + 20, 2, 2);
  }
}


  

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

function createClone() {
  clones.push({ x: spriteX, y: spriteY });
  drawStage();
}

