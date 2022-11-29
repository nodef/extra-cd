const build = require('extra-build');

const owner  = 'nodef';
const repo   = build.readMetadata('.').name.replace(/\..*/, '');


// Publish root package to NPM, GitHub.
function publishRootPackage(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var m = build.readMetadata('.');
  m.version  = ver;
  m.keywords = [...new Set([...m.keywords, 'shell', 'bash'])];
  build.writeMetadata('.', m);
  var _npmignore = build.readDocument('.npmignore');
  var ignore     = build.readFileText('.npmignore');
  ignore += 'index.cmd\n';
  build.writeFileText('.npmignore', ignore);
  build.publish('.');
  try { build.publishGithub(',', owner); }
  catch {}
  build.writeDocument(_npmignore);
  m.name     = m.name.replace(/\.sh$/, '.cmd');
  m.version  = ver;
  m.keywords = [...new Set([...m.keywords, 'windows', 'console'])];
  m.main = 'index.cmd';
  m.bin  = {'extra-cd': 'index.cmd', 'ecd': 'index.cmd'};
  build.writeMetadata('.', m);
  var _npmignore = build.readDocument('.npmignore');
  var ignore     = build.readFileText('.npmignore');
  ignore += 'index.sh\n';
  build.writeFileText('.npmignore', ignore);
  var _readme = build.readDocument('README.md');
  var txt     = build.readFileText('README.md');
  txt = txt.replace('https://unpkg.com/extra-cd.sh/', 'https://unpkg.com/extra-cd.cmd/');
  build.writeFileText('README.md', txt);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_readme);
  build.writeDocument(_npmignore);
  build.writeDocument(_package);
}


// Publish root package to NPM, GitHub.
function publishRootPackages(ds, ver) {
  publishRootPackage(ds, ver, '');
}


// Publish root, sub packages to NPM, GitHub.
function publishPackages(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  build.updateGithubRepoDetails({owner, repo, topics: m.keywords});
  publishRootPackages(ds, ver);
}


function main(a) {
  if (a[2] === 'publish-packages') publishPackages([]);
}
main(process.argv);
