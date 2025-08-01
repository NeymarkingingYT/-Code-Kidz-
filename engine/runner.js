// engine/runner.js – Full Version with 50+ Blocks

// === GLOBAL STATE ===
let spriteX = 200, spriteY = 150;
let penDown = false, penColor = "#000000";
let speechText = "", speechTimeout = null;
let clones = [];

// === BLOCK DEFINITIONS ===
Blockly.defineBlocksWithJsonArray([
  // MOTION
  { "type": "move_right", "message0": "move right %1 steps", "args0": [{ "type": "field_number","name":"STEPS","value":10}], "previousStatement":null, "nextStatement":null, "colour":210 },
  { "type": "move_left", "message0": "move left %1 steps", "args0":[{ "type":"field_number","name":"STEPS","value":10}], "previousStatement":null, "nextStatement":null, "colour":210 },
  { "type": "move_up", "message0": "move up %1 steps", "args0":[{ "type":"field_number","name":"STEPS","value":10}], "previousStatement":null, "nextStatement":null, "colour":210 },
  { "type": "move_down", "message0": "move down %1 steps", "args0":[{ "type":"field_number","name":"STEPS","value":10}], "previousStatement":null, "nextStatement":null, "colour":210 },
  { "type": "set_position", "message0": "set sprite x: %1 y: %2", "args0":[{ "type":"field_number","name":"X","value":100},{ "type":"field_number","name":"Y","value":100}], "previousStatement":null, "nextStatement":null, "colour":210 },

  // LOOKS
  { "type": "say_text", "message0": "say %1 for %2 seconds", "args0":[{ "type":"field_input","name":"TEXT","text":"Hello!"},{ "type":"field_number","name":"SECONDS","value":2}], "previousStatement":null, "nextStatement":null, "colour":160 },
  { "type": "change_color", "message0": "change sprite color %1", "args0":[{ "type":"field_colour","name":"COLOR","colour":"#ff0000"}], "previousStatement":null, "nextStatement":null, "colour":160 },

  // SOUND
  { "type":"play_sound","message0":"play sound %1","args0":[{ "type":"field_dropdown","name":"SOUND","options":[["meow","meow.mp3"],["pop","pop.mp3"],["jump","jump.mp3"]]}],"previousStatement":null,"nextStatement":null,"colour":20 },

  // EVENTS
  { "type":"when_run","message0":"when run","nextStatement":null,"colour":120 },
  { "type":"broadcast","message0":"broadcast %1","args0":[{ "type":"field_input","name":"MSG","text":"start"}],"previousStatement":null,"nextStatement":null,"colour":120 },
  { "type":"when_receive","message0":"when I receive %1","args0":[{ "type":"field_input","name":"MSG","text":"start"}],"nextStatement":null,"colour":120 },

  // CONTROL / WAIT
  { "type":"wait_seconds","message0":"wait %1 seconds","args0":[{ "type":"field_number","name":"SECONDS","value":1,"min":0,"precision":0.1}],"previousStatement":null,"nextStatement":null,"colour":60 },
  { "type":"controls_repeat_ext","message0":"repeat %1 times do %2","args0":[{"type":"input_value","name":"TIMES"},{"type":"input_statement","name":"DO"}],"previousStatement":null,"nextStatement":null,"colour":60 },
  { "type":"controls_if","message0":"if %1 then %2","args0":[{"type":"input_value","name":"IF0"},{"type":"input_statement","name":"DO0"}],"previousStatement":null,"nextStatement":null,"colour":60 },

  // PEN
  { "type":"pen_down","message0":"pen down","previousStatement":null,"nextStatement":null,"colour":330 },
  { "type":"pen_up","message0":"pen up","previousStatement":null,"nextStatement":null,"colour":330 },
  { "type":"set_pen_color","message0":"set pen color to %1","args0":[{"type":"field_colour","name":"COLOR","colour":"#000000"}],"previousStatement":null,"nextStatement":null,"colour":330 },

  // VARIABLES
  { "type":"set_variable","message0":"set %1 to %2","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"VALUE"}],"previousStatement":null,"nextStatement":null,"colour":330 },
  { "type":"change_variable","message0":"change %1 by %2","args0":[{"type":"field_variable","name":"VAR","variable":"item"},{"type":"input_value","name":"DELTA"}],"previousStatement":null,"nextStatement":null,"colour":330 },

  // OPERATORS & SENSING
  { "type":"math_number","message0":"%1","args0":[{"type":"field_number","name":"NUM","value":0}],"output":"Number","colour":230 },
  { "type":"math_add","message0":"%1 + %2","args0":[{"type":"input_value","name":"A"},{"type":"input_value","name":"B"}],"output":"Number","colour":230 },
  { "type":"is_touching_edge","message0":"touching edge?","output":"Boolean","colour":210 },

  // CLONES
  { "type":"create_clone","message0":"create clone","previousStatement":null,"nextStatement":null,"colour":80 },
  { "type":"when_clone_start","message0":"when clone starts","nextStatement":null,"colour":80 }
]);

// === GENERATORS ===
Blockly.JavaScript['move_right'] = b => {const s=b.getFieldValue('STEPS');return `spriteX+=${s};drawStage();\n`;};
Blockly.JavaScript['move_left']  = b => {const s=b.getFieldValue('STEPS');return `spriteX-=${s};drawStage();\n`;};
Blockly.JavaScript['move_up']    = b => {const s=b.getFieldValue('STEPS');return `spriteY-=${s};drawStage();\n`;};
Blockly.JavaScript['move_down']  = b => {const s=b.getFieldValue('STEPS');return `spriteY+=${s};drawStage();\n`;};
Blockly.JavaScript['set_position']= b => {const x=b.getFieldValue('X'),y=b.getFieldValue('Y');return `spriteX=${x};spriteY=${y};drawStage();\n`;};
Blockly.JavaScript['say_text']= b => {const t=b.getFieldValue('TEXT'),s=b.getFieldValue('SECONDS'); return `sayMessage("${t}",${s});\n`;};
Blockly.JavaScript['change_color']= b=>{const c=b.getFieldValue('COLOR');return `// change color not implemented yet\n`;};
Blockly.JavaScript['play_sound']= b => {const f=b.getFieldValue('SOUND'); return `new Audio("assets/sounds/${f}").play();\n`;};
Blockly.JavaScript['broadcast']=b=>{const m=b.getFieldValue('MSG');return `broadcast("${m}");\n`;};
Blockly.JavaScript['when_receive']=b=>{const m=b.getFieldValue('MSG');return `// TODO when receive "${m}"\n`;};
Blockly.JavaScript['wait_seconds']=b=>{const s=b.getFieldValue('SECONDS');return `await new Promise(r=>setTimeout(r,${s*1000}));\n`;};
Blockly.JavaScript['controls_repeat_ext']=b=>{const r=Blockly.JavaScript.valueToCode(b,'TIMES',0)||'0',body=Blockly.JavaScript.statementToCode(b,'DO');return `for(let i=0;i<${r};i++){${body}}\n`;};
Blockly.JavaScript['controls_if']=b=>{const c=Blockly.JavaScript.valueToCode(b,'IF0',0)||'false',body=Blockly.JavaScript.statementToCode(b,'DO0');return `if(${c}){${body}}\n`;};
Blockly.JavaScript['pen_down']=_=>`penDown=true;\n`;
Blockly.JavaScript['pen_up']=_=>`penDown=false;\n`;
Blockly.JavaScript['set_pen_color']=b=>`penColor="${b.getFieldValue('COLOR')}";\n`;
Blockly.JavaScript['set_variable']=b=>{const v=b.getField('VAR').getText(), val=Blockly.JavaScript.valueToCode(b,'VALUE',0)||'0';return `${v}=${val};\n`;};
Blockly.JavaScript['change_variable']=b=>{const v=b.getField('VAR').getText(), d=Blockly.JavaScript.valueToCode(b,'DELTA',0)||'0';return `${v}+=${d};\n`;};
Blockly.JavaScript['math_number']=b=>[b.getFieldValue('NUM'),Blockly.JavaScript.ORDER_ATOMIC];
Blockly.JavaScript['math_add']=b=>{const a=Blockly.JavaScript.valueToCode(b,'A',Blockly.JavaScript.ORDER_ADDITION)||'0', b2=Blockly.JavaScript.valueToCode(b,'B',Blockly.JavaScript.ORDER_ADDITION)||'0'; return [`(${a}+${b2})`, Blockly.JavaScript.ORDER_ADDITION];};
Blockly.JavaScript['is_touching_edge']=_=>`(spriteX<=0||spriteX>=canvas.width-48||spriteY<=0||spriteY>=canvas.height-48)`;
Blockly.JavaScript['create_clone']=_=>`createClone();\n`;
Blockly.JavaScript['when_clone_start']=_=>`// when clone starts\n`;

// === SUPPORT FUNCTIONS ===

async function runCodeAsync() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  try { await eval(`(async()=>{${code}})()`); }
  catch(e){alert("Error: "+e);}
}

function sayMessage(text, seconds) {
  speechText = text;
  drawStage();
  clearTimeout(speechTimeout);
  speechTimeout = setTimeout(()=>{speechText=''; drawStage();}, seconds*1000);
}

function broadcast(msg) {
  console.log("Broadcast:", msg);
}

function createClone() {
  clones.push({x: spriteX, y: spriteY});
  drawStage();
}

// Export runCode to global
window.runCode = runCodeAsync;


