const fs = require('fs');
const path = require('path');

// Path to the 'docs' directory
const docsDir = path.resolve(__dirname, '../docs');

// Function to process each Markdown file
const processFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');

  if (lines[1] && lines[1].startsWith('title:')) {
    let titleLine = lines[1].trim();
    const titleContentMatch = titleLine.match(/^title:\s*(['"])(.*)\1$/);

    if (titleContentMatch) {
      const currentOuterQuote = titleContentMatch[1];
      const originalTitleContent = titleContentMatch[2];
      let updatedTitleContent;
      let updatedTitleLine;

      if (currentOuterQuote === `'`) {
        // Outer quotes are single
        if (originalTitleContent.includes('"')) {
          // Inner double quotes present
          updatedTitleContent = originalTitleContent.replace(/"/g, "'");
          updatedTitleLine = `title: "${updatedTitleContent}"`;
        } else {
          // No inner double quotes
          updatedTitleLine = titleLine;
        }
      } else if (currentOuterQuote === `"`) {
        // Outer quotes are double
        if (originalTitleContent.includes('"')) {
          // Inner double quotes present
          updatedTitleContent = originalTitleContent.replace(/"(?![^"]*")/g, "'");
          updatedTitleLine = `title: "${updatedTitleContent}"`;
        } else {
          // No inner double quotes
          updatedTitleLine = titleLine;
        }
      }

      // Only update if necessary
      if (updatedTitleLine && updatedTitleLine !== titleLine) {
        lines[1] = updatedTitleLine;
        const newData = lines.join('\n');
        fs.writeFileSync(filePath, newData, 'utf8');
        console.log(`Updated file: ${filePath}`);
      }
    }
  }
};

// Function to recursively process files in directories
const processDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Unable to stat file:', err);
          return;
        }

        if (stats.isDirectory()) {
          processDirectory(filePath);
        } else if (path.extname(file) === '.md') {
          processFile(filePath);
        }
      });
    });
  });
};

// Start processing from the docs directory
processDirectory(docsDir);
