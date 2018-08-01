var cp = require('child_process');
var os = require('os');

const LBASH = '$HOME/.nodef/.bashrc';
const LTEMP = '$HOME/.nodef/.bashrc-temp';
const LPATTERN = `source ${process.cwd()}/index.cmd`;
if(os.EOL==='\n') cp.execSync(
  `grep -v "${LPATTERN}" ${LBASH} > ${LTEMP} && `+
  `mv ${LTEMP} ${LBASH}`
);
