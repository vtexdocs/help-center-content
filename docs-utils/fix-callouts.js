const fs = require('fs');
const path = require('path');

// The root folder to process
const rootFolder = 'docs';

// Maximum number of files to process simultaneously
const MAX_CONCURRENT_FILES = 100; // Adjust this based on your system's limit

// Array to keep track of currently processing files
let activeFiles = 0;
let fileQueue = [];

// Function to process the HTML content
function convertCallout(htmlCallout) {
    let markdownCallout = htmlCallout.trim();

    // Remove inline styles (e.g., style="color:red;")
    markdownCallout = markdownCallout.replace(/\s*style="[^"]*"/g, '');

    // Convert <br> and <br /> to new lines with `>` prefix
    markdownCallout = markdownCallout.replace(/<br\s*\/?>/g, '\n>\n> ');

    // Convert <p>...</p> only if it's NOT the first <p> element
    let firstParagraph = true;
    markdownCallout = markdownCallout.replace(/<p>(.*?)<\/p>/gs, (_, pContent) => {
        pContent = pContent.trim(); // Remove any extra whitespace around the paragraph content

        if (firstParagraph) {
            firstParagraph = false;
            return pContent;
        }

        // Ensure that any existing blank lines or spaces are cleaned up
        return `\n> ${pContent}`;
    });

    // Clean up any excessive blank lines that may have been introduced
    markdownCallout = markdownCallout.replace(/(\n\s*){2,}/g, '\n>\n');

    // Convert basic HTML tags to markdown
    markdownCallout = markdownCallout.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    markdownCallout = markdownCallout.replace(/<em>(.*?)<\/em>/g, '*$1*');
    markdownCallout = markdownCallout.replace(/<code>(.*?)<\/code>/g, '`$1`');  // Convert <code> to backticks
    markdownCallout = markdownCallout.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');

    return markdownCallout;
}

// Function to process each markdown file
function processFile(filePath) {
    activeFiles++;
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;

        // Replace HTML structures with corresponding markdown symbols
        const newData = data
            .replace(/<div class="alert alert-info">(.*?)<\/div>/gs, (match, p1) => `>ℹ️ ${convertCallout(p1)}`)
            .replace(/<div class="alert alert-warning">(.*?)<\/div>/gs, (match, p1) => `>⚠️ ${convertCallout(p1)}`)
            .replace(/<div class="alert alert-danger">(.*?)<\/div>/gs, (match, p1) => `>❗ ${convertCallout(p1)}`);

        // Write the modified content back to the file
        fs.writeFile(filePath, newData, 'utf8', (err) => {
            if (err) throw err;
            console.log(`Processed file: ${filePath}`);
            activeFiles--;

            // Process the next file in the queue if available
            if (fileQueue.length > 0) {
                const nextFile = fileQueue.shift();
                processFile(nextFile);
            }
        });
    });
}

// Recursive function to process all markdown files in the directory
function processDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) throw err;

                if (stats.isDirectory()) {
                    // Recursively process subdirectories
                    processDirectory(filePath);
                } else if (path.extname(file) === '.md') {
                    if (activeFiles < MAX_CONCURRENT_FILES) {
                        processFile(filePath);
                    } else {
                        fileQueue.push(filePath);
                    }
                }
            });
        });
    });
}

// Start processing from the root folder
processDirectory(rootFolder);
