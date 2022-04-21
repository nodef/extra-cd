const {fs} = require('extra-build');
const {github, package} = require('extra-build');

const owner  = 'nodef';




// Update GitHub details.
function updateGithub() {
  var m = package.read('.');
  var {name, description} = m;
  var name      = name.replace(/\..+/, '');
  var homepage  = `https://www.npmjs.com/package/${name}.sh`;
  var topics    = m.keywords;
  github.updateDetails(owner, name, {description, homepage, topics});
}


// Publish bin package to NPM, GitHub.
function publishBin(sym, ver) {
  fs.restoreFileSync('package.json', () => {
    var m = package.read();
    m.version  = ver;
    m.keywords = [...new Set([...m.keywords, 'shell', 'bash'])];
    package.write('.', m);
    fs.restoreFileSync('.npmignore', () => {
      var ignore = fs.readFileTextSync('.npmignore');
      ignore += 'index.cmd\n';
      fs.writeFileTextSync('.npmignore', ignore);
      package.publish('.');
      package.publishGithub('.', owner);
    });
    m.name     = m.name.replace(/\.sh$/, '.cmd');
    m.version  = ver;
    m.keywords = [...new Set([...m.keywords, 'windows', 'console'])];
    m.main = 'index.cmd';
    m.bin  = {'extra-cd': 'index.cmd', 'ecd': 'index.cmd'};
    package.write('.', m);
    fs.restoreFileSync('.npmignore', () => {
      var ignore = fs.readFileTextSync('.npmignore');
      ignore += 'index.sh\n';
      fs.writeFileTextSync('.npmignore', ignore);
      fs.restoreFileSync('README.md', () => {
        var txt = fs.readFileTextSync('README.md');
        txt = txt.replace('https://unpkg.com/extra-cd.sh/', 'https://unpkg.com/extra-cd.cmd/');
        fs.writeFileTextSync('README.md', txt);
        package.publish('.');
        package.publishGithub('.', owner);
      });
    });
  });
}


// Deploy root package to NPM, GitHub.
function deployRoot(ver) {
  publishBin('', ver);
}


// Deploy root, sub packages to NPM, GitHub.
function deployAll() {
  var m   = package.read();
  var ver = package.nextUnpublishedVersion(m.name, m.version);
  updateGithub();
  deployRoot(ver);
}


function main(a) {
  if (a[2] === 'deploy') deployAll();
}
main(process.argv);
