const fs = require('fs');
const os = require('os');

// I. global variables
const E = process.env;
const LBASH = `${E['HOME']}/.nodef/.bashrc`;
const LPATTERN = `source ${process.cwd()}/index.cmd\n`;

// II. linux: remove source
if(os.EOL==='\n') {
  if(!fs.existsSync(LBASH)) return;
  var lbash = fs.readFileSync(LBASH, 'utf8');
  fs.writeFileSync(LBASH, lbash.replace(LPATTERN, ''));
}
