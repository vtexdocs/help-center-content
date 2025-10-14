const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const csv = require('csv-parser');
const csvFilePath = path.join(__dirname, '../redirects.csv'); // exported from https://vtexhelp.myvtex.com/admin/cms/redirects

// Parse CLI arguments
const args = process.argv.slice(2);

// Show help if requested
if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: node generateRedirects.js [options]

Options:
  --format <format>    Output format: json (default) or netlify
  --help, -h          Show this help message

Examples:
  node generateRedirects.js                    # Generate redirect.json (default)
  node generateRedirects.js --format json      # Generate redirect.json
  node generateRedirects.js --format netlify   # Generate netlify.toml
`);
    process.exit(0);
}

const outputFormat = args.includes('--format') ? args[args.indexOf('--format') + 1] : 'json';
const validFormats = ['json', 'netlify'];

if (!validFormats.includes(outputFormat)) {
    console.error('Invalid output format. Use --format json or --format netlify');
    console.error('Run with --help for usage information');
    process.exit(1);
}

// Sets to keep track of unique redirects
const csvRedirectsSet = new Set();
const legacySlugRedirectsSet = new Set();
let filesProcessed = 0;

// Arrays to store redirects for JSON output
const csvRedirectsArray = [];
const legacySlugRedirectsArray = [];

// Initial content for netlify.toml
let netlifyTomlContent = ``;

// Function to add a redirect if from and to are different
function addRedirect(from, to, redirectSet = csvRedirectsSet, redirectArray = csvRedirectsArray) {
    // Remove base URL if present
    const baseUrl = 'https://help.vtex.com';
    if (from.startsWith(baseUrl)) {
        from = from.replace(baseUrl, '');
    }
    if (to.startsWith(baseUrl)) {
        to = to.replace(baseUrl, '');
    }

    if (from !== to) {
        // For netlify format
        const redirectEntry = `
[[redirects]]
force = true
from = "${from}"
status = 308
to = "${to}"
`;
        redirectSet.add(redirectEntry);
        
        // For JSON format
        redirectArray.push({ from, to });
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
                addRedirect(`/tutorials/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`, legacySlugRedirectsSet, legacySlugRedirectsArray);
            } else {
                addRedirect(`/${contentType}/${legacySlug}`, `/${locale}/${contentTypeNew}/${localizedSlug}`, legacySlugRedirectsSet, legacySlugRedirectsArray);
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

// Function to generate JSON output
async function generateJsonOutput() {
    let existingManualInput = [];
    
    // Check if redirect.json exists and read existing manual input
    try {
        const redirectJsonPath = path.join(__dirname, '../redirect.json');
        if (fs.existsSync(redirectJsonPath)) {
            const existingData = JSON.parse(fs.readFileSync(redirectJsonPath, 'utf8'));
            if (existingData.redirects && existingData.redirects.fromManualInput) {
                existingManualInput = existingData.redirects.fromManualInput;
                console.log(`Found ${existingManualInput.length} existing manual input redirects to preserve.`);
            }
        }
    } catch (error) {
        console.log('No existing redirect.json found or error reading it. Proceeding with new generation.');
    }
    
    const jsonOutput = {
        redirects: {
            fromCsvExport: csvRedirectsArray,
            fromLegacySlugs: legacySlugRedirectsArray,
            fromManualInput: existingManualInput
        }
    };
    
    const outputPath = path.join(__dirname, '../redirect.json');
    await fs.promises.writeFile(outputPath, JSON.stringify(jsonOutput, null, 2), 'utf8');
    console.log('redirect.json has been generated.');
}

// Function to generate netlify output
async function generateNetlifyOutput() {
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
}

// Main function to run the tasks sequentially
async function main() {
    try {
        await processCsvFile(csvFilePath);
        console.log('CSV file has been processed.');
        
        await iterateDocsDirectory(path.join(__dirname, '../docs'));
        console.log(`Docs directory has been processed. Files processed: ${filesProcessed}`);

        // Generate output based on format
        if (outputFormat === 'json') {
            await generateJsonOutput();
        } else {
            await generateNetlifyOutput();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();