const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'src');

const hexMapping = {
  '#04130f': '#000B18',  // Very dark green -> Very dark navy
  '#04130F': '#000B18', 
  '#06251d': '#001126',  // Dark green footer -> Dark navy footer
  '#06251D': '#001126', 
  '#064E3B': '#002147',  // Primary Green -> Navy
  '#064e3b': '#002147',
  '#fdfce8': '#F5F5F0',  // Cream -> Neutral Academic Cream
  '#FDFCE8': '#F5F5F0',
  '#fdfce8': '#F5F5F0'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (const [oldHex, newHex] of Object.entries(hexMapping)) {
        content = content.split(oldHex).join(newHex);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated hex codes in ${filePath}`);
    }
  }
});
