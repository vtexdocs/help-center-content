// Required Node.js modules
const fs = require('fs');    // File system module for file operations
const path = require('path'); // Path module for handling file paths

/**
 * Recursively walks through a directory and its subdirectories to find GIF files
 * marked for deletion (ending with '_TO_BE_DELETED.gif')
 * 
 * @param {string} dir - The directory to start searching from
 * @param {Array} fileList - Accumulator array to store found files (used in recursion)
 * @returns {Array} - List of absolute paths to files marked for deletion
 */
const walkSync = (dir, fileList = []) => {
    // Read all files and directories in the current directory
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        // Create full path for the current file/directory
        const filePath = path.join(dir, file);
        // Get file/directory information
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            // If it's a directory, recursively search inside it
            walkSync(filePath, fileList);
        } else if (file.endsWith('_TO_BE_DELETED.gif')) {
            // If it's a file that ends with '_TO_BE_DELETED.gif', add it to our list
            fileList.push(filePath);
        }
    }
    
    return fileList;
};

/**
 * Main function that handles the cleanup of old GIF files
 * Searches through the docs directory and deletes any GIF files
 * that were marked for deletion
 */
const cleanupOldGifs = () => {
    // Construct path to the docs directory (one level up from current script location)
    const docsDir = path.join(__dirname, '..', 'docs');
    console.log('Searching for old GIF files to clean up...');
    
    try {
        // Get list of all files that need to be deleted
        const filesToDelete = walkSync(docsDir);
        
        // If no files found, log message and exit
        if (filesToDelete.length === 0) {
            console.log('No old GIF files found to delete.');
            return;
        }
        
        console.log(`Found ${filesToDelete.length} old GIF file(s) to delete:`);
        
        // Attempt to delete each file
        for (const file of filesToDelete) {
            try {
                // Delete the file
                fs.unlinkSync(file);
                console.log(`✓ Deleted: ${file}`);
            } catch (err) {
                // Log any errors that occur during deletion
                console.error(`× Error deleting ${file}:`, err.message);
            }
        }
        
        console.log('Cleanup completed.');
    } catch (err) {
        // Log any errors that occur during the overall process
        console.error('Error during cleanup:', err.message);
    }
};

// Check if this file is being run directly (not imported as a module)
if (require.main === module) {
    cleanupOldGifs(); // Execute the cleanup function
}

// Export the cleanup function so it can be used by other scripts
module.exports = { cleanupOldGifs };
