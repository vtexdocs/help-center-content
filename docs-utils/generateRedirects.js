const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const csv = require('csv-parser');
const csvFilePath = path.join(__dirname, '../redirects-vtexhelp-20241024.csv'); // exported from https://vtexhelp.myvtex.com/admin/cms/redirects

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
        netlifyTomlContent += `
[[redirects]]
force = true
from = "${from}"
status = 308
to = "${to}"
`;
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
            contentTypeNew = 'docs/tutorial';
        }

        if (contentType === 'tracks') {
            contentTypeNew = 'docs/' + contentType;
            let trackSlug = data.trackSlugEN || data.trackSlugPT || data.trackSlugES;
            let trackId = data.trackId;

            addRedirect(`/${locale}/${contentType}/${trackSlug}--${trackId}/${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${contentType}/${trackSlug}--${trackId}/${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
        } else if (contentType === 'troubleshooting') {
            addRedirect(`/${locale}/tutorial/${localizedSlug}--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/tutorial/--${idContentful}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorial/--${idContentful}`, `/en/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/${locale}/tutorial/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorial/${localizedSlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
            addRedirect(`/tutorial/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`);
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
function iterateDocsDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
        iterateDocsDirectory(filePath);
        } else if (file.endsWith('.md')) {
        processMarkdownFile(filePath);
        }
    });
}

// Function to process each line of the CSV file
function processCsvLine(line) {
    const from = line.from;
    const to = line.to;

    addRedirect(from, to);
}

// Read and process the CSV file
function processCsvFile(filePath) {
    fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (line) => {
            processCsvLine(line);
    })
    .on('end', () => {
        // Write the netlify.toml content to a file
        fs.writeFileSync(path.join(__dirname, '../netlify.toml'), netlifyTomlContent, 'utf8');
        console.log('netlify.toml has been generated.');
    });
}

// Start processing the CSV file
processCsvFile(csvFilePath); // 11k

// Start processing markdown files
iterateDocsDirectory('./docs');

// Tests
// processMarkdownFile('./docs/en/announcements/2017-10-25-facebook-and-google-login-settings-have-changed.md');
// processMarkdownFile('./docs/en/tutorials/Authentication/Authentication basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google.md');
// processMarkdownFile('./docs/en/tracks/data-and-privacy/data-protection-roles.md');

// Write the netlify.toml content to a file
fs.writeFileSync('./netlify.toml', netlifyTomlContent, 'utf8');

console.log('netlify.toml has been generated.');