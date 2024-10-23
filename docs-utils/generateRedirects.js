const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Initial content for netlify.toml
let netlifyTomlContent = `
[functions]
external_node_modules = ["sharp"]
included_files = ["node_modules/sharp/**/*", "./github.pem"]

[[plugins]]
    package = "@netlify/plugin-nextjs"
`;

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

            netlifyTomlContent += `
[[redirects]]
force = true
from = "/${locale}/${contentType}/${trackSlug}--${trackId}/${idContentful}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${contentType}/${trackSlug}--${trackId}/${idContentful}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"
`
        } else { 
            netlifyTomlContent += `
[[redirects]]
force = true
from = "/${locale}/${contentType}/${localizedSlug}--${idContentful}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${locale}/${contentType}/--${idContentful}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${contentType}/--${idContentful}"
status = 308
to = "/en/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${locale}/${contentType}/${localizedSlug}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${contentType}/${localizedSlug}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"

[[redirects]]
force = true
from = "/${contentType}/${legacySlug}"
status = 308
to = "/${locale}/${contentTypeNew}/${localizedSlug}"
`
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

// Start processing
iterateDocsDirectory('./docs');

// Tests
// processMarkdownFile('./docs/en/announcements/2017-10-25-facebook-and-google-login-settings-have-changed.md');
// processMarkdownFile('./docs/en/tutorials/Authentication/Authentication basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google.md');
// processMarkdownFile('./docs/en/tracks/data-and-privacy/data-protection-roles.md');

// Write the netlify.toml content to a file
fs.writeFileSync('./netlify.toml', netlifyTomlContent, 'utf8');

console.log('netlify.toml has been generated.');