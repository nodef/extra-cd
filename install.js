var cp = require('child_process');
var os = require('os');

const GBASH = '$HOME/.bashrc';
const LBASH = '$HOME/.nodef/.bashrc';
const GPATTERN = 'source $HOME/.nodef/.bashrc';
const LPATTERN = `source ${process.cwd()}/index.cmd`;
if(os.EOL==='\n') cp.execSync(
  `tr -d '\r' <index.sh >index.cmd && `+
  'chmod +x index.cmd && rm index.sh && '+
  `mkdir -p "$HOME/.nodef" && touch ${LBASH} && `+
  `grep -q -F '${GPATTERN}' ${GBASH} || echo '${GPATTERN}' >> ${GBASH} && `+
  `grep -q -F '${LPATTERN}' ${LBASH} || echo '${LPATTERN}' >> ${LBASH}`
);
