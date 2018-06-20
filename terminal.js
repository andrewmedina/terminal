var TreeModel = require('tree-model'), tree = new TreeModel,
    node = tree.parse({ name: 'root' }), path = node.getPath(), cds = [];
function exists(children, subdirectory) {
  var exists = false;
  for (var i = 0; i < path[0].children.length; i++) {
    if (children[i].model.name === subdirectory) exists = true;
  }
  return exists;
}
function processFile(inputFile) {
  var fs = require('fs'), readline = require('readline'),
      instream = fs.createReadStream(inputFile),
      outstream = new (require('stream'))(),
      rl = readline.createInterface(instream, outstream);
  rl.on('line', line => {
    var splitLine = line.split(' ');
    switch(splitLine[0]) {
      case "cd": {
        console.log(`Command: cd ${splitLine[1]}`);
        if (exists(path[0].children, splitLine[1])) {
          path = [path[0].first(node => node.model.name === splitLine[1])];
          cds.push(path[0].model.name);
        } else {
          console.log('Subdirectory does not exist');
        }
        break;
      };
      case "dir": {
        console.log(`Command: dir\nDirectory of root${cds.map(cd => `\\${cd}`).join('')}:`);
        if (path[0].hasChildren()) {
          var sortedChildren = path[0].children.map(child => child.model.name).sort();
          for (var i = 0; i < sortedChildren.length; i) console.log(`${sortedChildren.splice(i, 10).join(' ')}`);
        } else {
          console.log('No subdirectories');
        }
        break;
      };
      case "mkdir": {
        console.log(`Command: mkdir ${splitLine[1]}`);
        if (exists(path[0].children, splitLine[1])) {
          console.log('Subdirectory already exists');
        } else {
          path[0].addChild(tree.parse({ name: splitLine[1] }));
        }
        break;
      };
      case "up": {
        console.log('Command: up');
        if (path[0].isRoot()) {
          console.log('Cannot move up from root directory');
        } else {
          path = [path[0].parent];
          cds.pop();
        }
        break;
      };
      default:
        return "This command isn't available yet. Sorry about that!";
    }
  }).on('close', line => console.log('End of Directory Problem by Andrew Marten Medina'));
}
console.log('Directory Problem by Andrew Marten Medina')
processFile('./input.dat');
