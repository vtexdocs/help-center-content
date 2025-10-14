const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const csv = require('csv-parser');
const csvFilePath = path.join(__dirname, '../redirects.csv'); // exported from https://vtexhelp.myvtex.com/admin/cms/redirects

// Sets to keep track of unique redirects
const csvRedirectsSet = new Set();
const legacySlugRedirectsSet = new Set();
let filesProcessed = 0;

// Initial content for netlify.toml
let netlifyTomlContent = ``;

// Function to add a redirect if from and to are different
function addRedirect(from, to, redirectSet = csvRedirectsSet) {
    // Remove base URL if present
    const baseUrl = 'https://help.vtex.com';
    if (from.startsWith(baseUrl)) {
        from = from.replace(baseUrl, '');
    }
    if (to.startsWith(baseUrl)) {
        to = to.replace(baseUrl, '');
    }

    if (from !== to) {
        const redirectEntry = `
[[redirects]]
force = true
from = "${from}"
status = 308
to = "${to}"
`;
        redirectSet.add(redirectEntry);
    }
}

// Function to process each markdown file for legacySlug redirects only
function processMarkdownFileLegacySlug(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);

        const relativePath = path.relative('docs', filePath);
        const parts = relativePath.split(path.sep);
        const locale = parts[0];
        let localizedSlug = path.basename(filePath, '.md');
        const legacySlug = data.legacySlug;
        let contentType = parts[1];
        let contentTypeNew = contentType;

        // For announcements, strip the date prefix from the slug for comparison
        if (contentType === 'announcements') {
            // Remove date prefix (yyyy-mm-dd-) from the beginning of the slug
            const datePattern = /^\d{4}-\d{2}-\d{2}-/;
            if (datePattern.test(localizedSlug)) {
                localizedSlug = localizedSlug.replace(datePattern, '');
            }
        }


        if (contentType === 'tutorials') {
            contentType = 'tutorial';
            contentTypeNew = 'docs/tutorials';
        }

        if (contentType === 'tracks') {
            contentTypeNew = 'docs/' + contentType;
        } else if (contentType === 'troubleshooting') {
            contentTypeNew = 'docs/troubleshooting';
        } else {
            contentTypeNew = 'docs/' + contentType;
        }

        // Only add legacySlug redirects if the legacy slug is different from the current slug
        // and the legacySlug is not undefined or the string "undefined"
        if (legacySlug && legacySlug !== 'undefined' && legacySlug !== localizedSlug) {
            if (contentType === 'troubleshooting') {
                addRedirect(`/tutorials/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`, legacySlugRedirectsSet);
            } else {
                addRedirect(`/${contentType}/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`, legacySlugRedirectsSet);
            }
        }
    } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
    }
}

// Function to recursively iterate through the docs directory
async function iterateDocsDirectory(directory) {
    const files = await fs.promises.readdir(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = await fs.promises.stat(filePath);

        if (stat.isDirectory()) {
            await iterateDocsDirectory(filePath);
        } else if (file.endsWith('.md')) {
            filesProcessed++;
            processMarkdownFileLegacySlug(filePath);
        }
    }
}

// Function to process each line of the CSV file
function processCsvLine(line) {
    const from = line.from;
    const to = line.to;

    addRedirect(from, to);
}

// Read and process the CSV file
function processCsvFile(filePath) {
    return new Promise((resolve, reject) => {
        // Add section header for CSV redirects
        netlifyTomlContent += `
# ==========================================
# REDIRECTS FROM CSV FILE (redirects.csv)
# ==========================================
`;
        
        fs.createReadStream(filePath)
            .pipe(csv({ separator: ';' }))
            .on('data', (line) => {
                processCsvLine(line);
            })
            .on('end', () => {
                resolve();
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

// Main function to run the tasks sequentially
async function main() {
    try {
        await processCsvFile(csvFilePath);
        console.log('CSV file has been processed.');
        
        await iterateDocsDirectory(path.join(__dirname, '../docs'));
        console.log(`Docs directory has been processed. Files processed: ${filesProcessed}`);

        // Add CSV redirects first
        netlifyTomlContent += Array.from(csvRedirectsSet).join('');
        
        // Add section header for legacySlug redirects
        netlifyTomlContent += `
# ==========================================
# REDIRECTS FROM LEGACY SLUGS (markdown files)
# ==========================================
`;

        // Add legacySlug redirects
        netlifyTomlContent += Array.from(legacySlugRedirectsSet).join('');
        
        // Write the netlify.toml content to a file
        await fs.promises.writeFile('./netlify.toml', netlifyTomlContent, 'utf8');
        console.log('netlify.toml has been generated.');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();