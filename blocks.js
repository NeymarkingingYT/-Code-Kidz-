Blockly.defineBlocksWithJsonArray([
  // --- EVENTS ---
  { "type": "when_run", "message0": "when run", "nextStatement": null, "colour": 60, "hat": "cap" },
  { "type": "when_key_pressed", "message0": "when %1 key pressed", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["left", "LEFT"], ["right", "RIGHT"], ["up", "UP"], ["down", "DOWN"]] }], "nextStatement": null, "colour": 60, "hat": "cap" },

  // --- MOTION ---
  { "type": "move_steps", "message0": "move %1 steps", "args0": [{ "type": "field_number", "name": "STEPS", "value": 10 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_right", "message0": "turn right %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "turn_left", "message0": "turn left %1 °", "args0": [{ "type": "field_angle", "name": "ANGLE", "angle": 90 }], "previousStatement": null, "nextStatement": null, "colour": 230 },
  { "type": "go_to_xy", "message0": "go to x: %1 y: %2", "args0": [{ "type": "field_number", "name": "X", "value": 0 }, { "type": "field_number", "name": "Y", "value": 0 }], "previousStatement": null, "nextStatement": null, "colour": 230 },

  // --- LOOKS ---
  { "type": "say_message", "message0": "say %1 for %2 seconds", "args0": [{ "type": "field_input", "name": "MSG", "text": "hello" }, { "type": "field_number", "name": "TIME", "value": 2 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "change_color", "message0": "change color effect by %1", "args0": [{ "type": "field_number", "name": "AMT", "value": 25 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "set_size", "message0": "set size to %1 %", "args0": [{ "type": "field_number", "name": "SIZE", "value": 100 }], "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "hide_sprite", "message0": "hide", "previousStatement": null, "nextStatement": null, "colour": 160 },
  { "type": "show_sprite", "message0": "show", "previousStatement": null, "nextStatement": null, "colour": 160 },

  // --- SOUND ---
  { "type": "play_sound", "message0": "play sound %1", "args0": [{ "type": "field_dropdown", "name": "SOUND", "options": [["meow", "MEOW"], ["boing", "BOING"], ["pop", "POP"]] }], "previousStatement": null, "nextStatement": null, "colour": 20 },
  { "type": "stop_all_sounds", "message0": "stop all sounds", "previousStatement": null, "nextStatement": null, "colour": 20 },

  // --- CONTROL ---
  { "type": "controls_repeat_ext", "message0": "repeat %1", "args0": [{ "type": "field_number", "name": "TIMES", "value": 10 }], "message1": "%1", "args1": [{ "type": "input_statement", "name": "DO" }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  { "type": "wait_seconds", "message0": "wait %1 seconds", "args0": [{ "type": "field_number", "name": "SECS", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  { "type": "forever_loop", "message0": "forever", "message1": "%1", "args1": [{ "type": "input_statement", "name": "DO" }], "previousStatement": null, "nextStatement": null, "colour": 120 },
  { "type": "if_condition", "message0": "if %1 then", "args0": [{ "type": "input_value", "name": "COND" }], "message1": "%1", "args1": [{ "type": "input_statement", "name": "DO" }], "previousStatement": null, "nextStatement": null, "colour": 120 },

  // --- SENSING ---
  { "type": "key_pressed", "message0": "key %1 pressed?", "args0": [{ "type": "field_dropdown", "name": "KEY", "options": [["space", "SPACE"], ["up", "UP"], ["down", "DOWN"]] }], "output": "Boolean", "colour": 290 },
  { "type": "mouse_x", "message0": "mouse x", "output": "Number", "colour": 290 },
  { "type": "mouse_y", "message0": "mouse y", "output": "Number", "colour": 290 },
  { "type": "touching_mouse", "message0": "touching mouse?", "output": "Boolean", "colour": 290 },

  // --- VARIABLES ---
  { "type": "set_variable", "message0": "set %1 to %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "input_value", "name": "VALUE" }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "change_variable", "message0": "change %1 by %2", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }, { "type": "field_number", "name": "VALUE", "value": 1 }], "previousStatement": null, "nextStatement": null, "colour": 330 },
  { "type": "get_variable", "message0": "%1", "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }], "output": "Number", "colour": 330 },

  // --- OPERATORS ---
  { "type": "math_add", "message0": "%1 + %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_sub", "message0": "%1 - %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_mult", "message0": "%1 × %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 },
  { "type": "math_div", "message0": "%1 ÷ %2", "args0": [{ "type": "input_value", "name": "A" }, { "type": "input_value", "name": "B" }], "output": "Number", "colour": 210 }

  // --- LOGIC ---
  { "type": "logic_compare", "message0": "%1 %2 %3", "args0": [
    { "type": "input_value", "name": "A" },
    { "type": "field_dropdown", "name": "OP", "options": [["=", "EQ"], [">", "GT"], ["<", "LT"]] },
    { "type": "input_value", "name": "B" }
  ], "output": "Boolean", "colour": 210 },

  { "type": "logic_boolean", "message0": "%1", "args0": [
    { "type": "field_dropdown", "name": "BOOL", "options": [["true", "TRUE"], ["false", "FALSE"]] }
  ], "output": "Boolean", "colour": 210 },

  { "type": "logic_and", "message0": "%1 and %2", "args0": [
    { "type": "input_value", "name": "A" },
    { "type": "input_value", "name": "B" }
  ], "output": "Boolean", "colour": 210 },

  { "type": "logic_or", "message0": "%1 or %2", "args0": [
    { "type": "input_value", "name": "A" },
    { "type": "input_value", "name": "B" }
  ], "output": "Boolean", "colour": 210 },

  { "type": "logic_not", "message0": "not %1", "args0": [
    { "type": "input_value", "name": "BOOL" }
  ], "output": "Boolean", "colour": 210 },

  // --- COSTUMES (UI ONLY) ---
  { "type": "switch_costume", "message0": "switch costume to %1", "args0": [
    { "type": "field_input", "name": "COSTUME", "text": "costume1" }
  ], "previousStatement": null, "nextStatement": null, "colour": 160 },

  { "type": "next_costume", "message0": "next costume", "previousStatement": null, "nextStatement": null, "colour": 160 },

  // --- BACKDROPS (UI ONLY) ---
  { "type": "switch_backdrop", "message0": "switch backdrop to %1", "args0": [
    { "type": "field_input", "name": "BACKDROP", "text": "backdrop1" }
  ], "previousStatement": null, "nextStatement": null, "colour": 160 },

  { "type": "next_backdrop", "message0": "next backdrop", "previousStatement": null, "nextStatement": null, "colour": 160 },

  // --- CLONES ---
  { "type": "create_clone", "message0": "create clone of %1", "args0": [
    { "type": "field_dropdown", "name": "TARGET", "options": [["myself", "SELF"], ["sprite1", "SPRITE1"]] }
  ], "previousStatement": null, "nextStatement": null, "colour": 290 },

  { "type": "when_clone", "message0": "when I start as a clone", "nextStatement": null, "colour": 60, "hat": "cap" },

  { "type": "delete_clone", "message0": "delete this clone", "previousStatement": null, "nextStatement": null, "colour": 290 },

  // --- SENSING 2 ---
  { "type": "timer", "message0": "timer", "output": "Number", "colour": 290 },

  { "type": "reset_timer", "message0": "reset timer", "previousStatement": null, "nextStatement": null, "colour": 290 },

  { "type": "current_time", "message0": "current %1", "args0": [
    { "type": "field_dropdown", "name": "TIME", "options": [["year", "YEAR"], ["month", "MONTH"], ["day", "DAY"], ["hour", "HOUR"], ["minute", "MINUTE"], ["second", "SECOND"]] }
  ], "output": "Number", "colour": 290 },

  // --- CUSTOM BLOCK CALL ---
  { "type": "call_custom_block", "message0": "run custom block %1", "args0": [
    { "type": "field_input", "name": "NAME", "text": "my block" }
  ], "previousStatement": null, "nextStatement": null, "colour": 300 },

  // --- CUSTOM BLOCK DEF ---
  {
    "type": "define_custom_block",
    "message0": "define custom block %1",
    "args0": [
      { "type": "field_input", "name": "NAME", "text": "my block" }
    ],
    "message1": "%1",
    "args1": [{ "type": "input_statement", "name": "DO" }],
    "colour": 300,
    "nextStatement": null
  },

  // --- RANDOM ---
  {
    "type": "random_number",
    "message0": "pick random %1 to %2",
    "args0": [
      { "type": "field_number", "name": "FROM", "value": 1 },
      { "type": "field_number", "name": "TO", "value": 10 }
    ],
    "output": "Number",
    "colour": 210
  }

  {
    "type": "mouse_down",
    "message0": "mouse down?",
    "output": "Boolean",
    "colour": 290
  },
  {
    "type": "touching_mouse_pointer",
    "message0": "touching mouse pointer?",
    "output": "Boolean",
    "colour": 290
  },

  // --- PEN TOOL (DRAWING) ---
  {
    "type": "pen_down",
    "message0": "pen down",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20
  },
  {
    "type": "pen_up",
    "message0": "pen up",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20
  },
  {
    "type": "set_pen_color",
    "message0": "set pen color to %1",
    "args0": [{ "type": "field_colour", "name": "COLOR", "colour": "#ff0000" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20
  },
  {
    "type": "set_pen_size",
    "message0": "set pen size to %1",
    "args0": [{ "type": "field_number", "name": "SIZE", "value": 1 }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20
  },

  // --- LISTS ---
  {
    "type": "create_list",
    "message0": "create list %1",
    "args0": [{ "type": "field_input", "name": "LIST", "text": "myList" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "add_to_list",
    "message0": "add %1 to %2",
    "args0": [
      { "type": "input_value", "name": "ITEM" },
      { "type": "field_input", "name": "LIST", "text": "myList" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "delete_from_list",
    "message0": "delete %1 of %2",
    "args0": [
      { "type": "field_number", "name": "INDEX", "value": 1 },
      { "type": "field_input", "name": "LIST", "text": "myList" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "get_list_item",
    "message0": "item %1 of %2",
    "args0": [
      { "type": "input_value", "name": "INDEX" },
      { "type": "field_input", "name": "LIST", "text": "myList" }
    ],
    "output": "String",
    "colour": 330
  },
  {
    "type": "list_length",
    "message0": "length of %1",
    "args0": [
      { "type": "field_input", "name": "LIST", "text": "myList" }
    ],
    "output": "Number",
    "colour": 330
  },

  // --- ADVANCED MOTION ---
  {
    "type": "bounce_if_on_edge",
    "message0": "if on edge, bounce",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },
  {
    "type": "point_towards_mouse",
    "message0": "point towards mouse pointer",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230
  },

  // --- ADVANCED LOOKS ---
  {
    "type": "change_effect",
    "message0": "change %1 effect by %2",
    "args0": [
      { "type": "field_dropdown", "name": "EFFECT", "options": [["color", "COLOR"], ["ghost", "GHOST"], ["brightness", "BRIGHTNESS"]] },
      { "type": "field_number", "name": "AMOUNT", "value": 10 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "set_effect",
    "message0": "set %1 effect to %2",
    "args0": [
      { "type": "field_dropdown", "name": "EFFECT", "options": [["color", "COLOR"], ["ghost", "GHOST"], ["brightness", "BRIGHTNESS"]] },
      { "type": "field_number", "name": "AMOUNT", "value": 0 }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },
  {
    "type": "clear_graphics",
    "message0": "clear graphic effects",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160
  },

  // --- ADVANCED VARIABLES ---
  {
    "type": "show_variable",
    "message0": "show variable %1",
    "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  },
  {
    "type": "hide_variable",
    "message0": "hide variable %1",
    "args0": [{ "type": "field_input", "name": "VAR", "text": "score" }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330
  }
  
]);
