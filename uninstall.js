var cp = require('child_process');
var os = require('os');

const LBASH = '$HOME/.bashrc';
const LTEMP = '$HOME/.nodef/.bashrc-temp';
const PATTERN = 'source $PWD/index.cmd';
if(os.EOL==='\n') cp.execSync(
  `grep -v "${PATTERN}" ${LBASH} > ${LTEMP} && `+
  `cp ${LTEMP} ${LBASH}`
);
