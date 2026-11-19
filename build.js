const fs = require('fs');
const os = require('os');
const cp = require('child_process');


// Read a text file.
function readTextFile(pth) {
  const txt = fs.readFileSync(pth, 'utf8');
  return txt.replace(/\r\n|\r/g, '\n');
}


// Write a text file.
function writeTextFile(pth, txt) {
  txt = txt.replace(/\r\n|\r|\n/g, os.EOL);
  fs.writeFileSync(pth, txt, 'utf8');
}


// Read a JSON file.
function readJsonFile(pth) {
  const txt = readTextFile(pth);
  return JSON.parse(txt);
}


// Write a JSON file.
function writeJsonFile(pth, obj) {
  const txt = JSON.stringify(obj, null, 2) + '\n';
  writeTextFile(pth, txt);
}


// Run a command line.
function runCommand(cmd) {
  cp.execSync(cmd, {stdio: 'inherit'});
}


// Restore original files.
function restoreFiles(_package, _npmignore, _readme) {
  writeTextFile('package.json', _package);
  writeTextFile('.npmignore',   _npmignore);
  writeTextFile('README.md',    _readme);
}


// Publish packages to NPM.
function publishPackages() {
  // Snapshot original files.
  const _package   = readTextFile('package.json');
  const _npmignore = readTextFile('.npmignore');
  const _readme    = readTextFile('README.md');
  // Publish bash package to NPM.
  let m = JSON.parse(_package);
  m.keywords = [...new Set([...m.keywords, 'shell', 'bash'])];
  writeJsonFile('package.json', m);
  let ignore = _npmignore;
  ignore += 'index.cmd\n';
  writeTextFile('.npmignore', ignore);
  runCommand('npm publish --access public');
  restoreFiles(_package, _npmignore, _readme);
  // Publish Windows package to NPM.
  m = JSON.parse(_package);
  m.name     = m.name.replace(/\.sh$/, '.cmd');
  m.keywords = [...new Set([...m.keywords, 'windows', 'console'])];
  m.main = 'index.cmd';
  m.bin  = {'extra-cd': 'index.cmd', 'xcd': 'index.cmd', 'ecd': 'index.cmd'};
  writeJsonFile('package.json', m);
  ignore = _npmignore;
  ignore += 'index.sh\n';
  writeTextFile('.npmignore', ignore);
  let txt = _readme;
  txt = txt.replace('https://unpkg.com/extra-cd.sh/', 'https://unpkg.com/extra-cd.cmd/');
  writeTextFile('README.md', txt);
  runCommand('npm publish --access public');
  restoreFiles(_package, _npmignore, _readme);
}


function main(a) {
  if (a[2] === 'publish-packages') publishPackages();
}
main(process.argv);
