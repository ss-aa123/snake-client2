const { connect } = require("./client");


let connection;

const moves = {
  'w' : 'Move: up',
  'a' : 'Move: left',
  's' : 'Move: down',
  'd' : 'Move: right',
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key);
  });

  return stdin;
};


const handleUserInput = function(key) {
  const stdout = process.stdout;

  if (key === '\u0003') {
    process.exit();
  }

  if (moves[key]) {
    connection.write(moves[key]);
  }



  
};

module.exports = {setupInput};