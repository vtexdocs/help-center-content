/**
 * Checks if the entry is archived.
 * An archived entry has `archivedVersion` in `sys`.
 */
function isArchived(entry) {
    return !!entry.sys.archivedVersion;
}

/**
 * Checks if the entry is in draft state.
 * A draft entry has never been published.
 */
function isDraft(entry) {
    return !entry.sys.publishedVersion;
}

/**
 * Checks if the entry has unpublished changes.
 * The version is >=2 versions ahead of the published version.
 */
function isChanged(entry) {
    return (
        !!entry.sys.publishedVersion &&
        entry.sys.version >= entry.sys.publishedVersion + 2
    );
}

/**
 * Checks if the entry is published without pending changes.
 * The version is exactly one ahead of the published version.
 */
function isPublished(entry) {
    return (
        !!entry.sys.publishedVersion &&
        entry.sys.version === entry.sys.publishedVersion + 1
    );
}

/**
 * Returns the current status as a string label: 
 * ARCHIVED, DRAFT, CHANGED, PUBLISHED, or UNKNOWN
 */
function getEntryStatus(sys) {
    if (!!sys.archivedVersion) return 'ARCHIVED';
    if (!sys.publishedVersion) return 'DRAFT';
    if (sys.version >= sys.publishedVersion + 2) return 'CHANGED';
    if (sys.version === sys.publishedVersion + 1) return 'PUBLISHED';
    return 'UNKNOWN';
}

module.exports = {
    isArchived,
    isDraft,
    isChanged,
    isPublished,
    getEntryStatus
};
