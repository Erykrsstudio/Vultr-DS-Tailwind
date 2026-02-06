import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src/assets/variables');
const destDir = path.resolve('dist/variables');
const entryFile = path.join(srcDir, 'variables.css');
const bundledFile = path.join(destDir, 'vultr-variables-bundle.css');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function bundleCSS(filePath, seenFiles = new Set()) {
  const absolutePath = path.resolve(filePath);
  if (seenFiles.has(absolutePath)) return '';
  seenFiles.add(absolutePath);

  if (!fs.existsSync(absolutePath)) {
    console.warn(`File not found for bundling: ${absolutePath}`);
    return '';
  }

  let content = fs.readFileSync(absolutePath, 'utf8');
  const dir = path.dirname(absolutePath);

  // Simple regex to find @import "path"; or @import 'path';
  const importRegex = /@import\s+["'](.+?)["'];/g;

  return content.replace(importRegex, (match, importPath) => {
    const fullImportPath = path.resolve(dir, importPath);
    return `/* BUNDLED: ${importPath} */\n` + bundleCSS(fullImportPath, seenFiles);
  });
}

// 1. Copy everything as before
if (fs.existsSync(srcDir)) {
  console.log(`Copying variables from ${srcDir} to ${destDir}...`);
  copyRecursiveSync(srcDir, destDir);
  console.log('Copy complete!');

  // 2. Create a bundled version
  if (fs.existsSync(entryFile)) {
    console.log(`Creating bundle from ${entryFile}...`);
    const bundleContent = bundleCSS(entryFile);
    fs.writeFileSync(bundledFile, bundleContent);
    console.log(`Bundle created at ${bundledFile}`);
  }
} else {
  console.error(`Source directory ${srcDir} does not exist.`);
}
