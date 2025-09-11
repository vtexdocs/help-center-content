const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const csv = require('csv-parser');
const csvFilePath = path.join(__dirname, '../redirects.csv'); // exported from https://vtexhelp.myvtex.com/admin/cms/redirects

// Set to keep track of unique redirects
const redirectsSet = new Set();

// Initial content for netlify.toml
let netlifyTomlContent = `
[functions]
external_node_modules = ["sharp"]
included_files = ["node_modules/sharp/**/*", "./github.pem"]

[[plugins]]
    package = "@netlify/plugin-nextjs"
`;

// Function to add a redirect if from and to are different
function addRedirect(from, to) {
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
        redirectsSet.add(redirectEntry);
    }
}

// Function to process each markdown file
function processMarkdownFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(content);

        const relativePath = path.relative('docs', filePath);
        const parts = relativePath.split(path.sep);
        const locale = parts[0];
        const localizedSlug = path.basename(filePath, '.md');
        const idContentful = data.id;
        const legacySlug = data.legacySlug;
        let contentType = parts[1];
        let contentTypeNew = contentType;

        if (contentType === 'tutorials') {
            contentType = 'tutorial';
            contentTypeNew = 'docs/tutorials';
        }

        if (contentType === 'tracks') {
            contentTypeNew = 'docs/' + contentType;
            let trackSlug = data.trackSlugEN || data.trackSlugPT || data.trackSlugES;
            let trackId = data.trackId;

            addRedirect(`/${locale}/${contentType}/${trackSlug}--${trackId}/${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${contentType}/${trackSlug}--${trackId}/${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
        } else if (contentType === 'troubleshooting') {
            addRedirect(`/${locale}/tutorials/${localizedSlug}--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/tutorials/--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorials/--${idContentful}`, `/en/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/tutorials/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorials/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorials/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
        } else {
            addRedirect(`/${locale}/${contentType}/${localizedSlug}--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/${contentType}/--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${contentType}/--${idContentful}`, `/en/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/${contentType}/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${contentType}/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${contentType}/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
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
            processMarkdownFile(filePath);
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
        // await iterateDocsDirectory(path.join('./docs'));
        // console.log('Docs directory has been processed.');

        // Convert the Set to a string and append to netlifyTomlContent
        netlifyTomlContent += Array.from(redirectsSet).join('');
        
        // Write the netlify.toml content to a file
        await fs.promises.writeFile('./netlify.toml', netlifyTomlContent, 'utf8');
        console.log('netlify.toml has been generated.');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();