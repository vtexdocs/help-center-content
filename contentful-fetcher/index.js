const fetchEntries = require('./fetch/entries');
const minimist = require('minimist');
const {
  generateTrackMarkdown,
  generateTutorialMarkdown
} = require('./writers/markdownGenerator');
const { writeMarkdown } = require('./writers/fileWriter');
const { fetchLinkedEntry } = require('./fetch/linkedEntry');

async function main() {
  const args = minimist(process.argv.slice(2));
  const contentTypes = args.contentType?.split(',') ?? ['trackArticle', 'tutorial'];
  const locales = ['en', 'pt', 'es'];

  const entries = await fetchEntries({ contentTypes });

  for (const entry of entries) {
    const type = entry.sys.contentType.sys.id;

    for (const locale of locales) {
      if (type === 'trackArticle') {
        const { content, slug, trackSlug } = generateTrackMarkdown(entry, locale);
        await writeMarkdown({ content, slug, locale, folder: 'tracks', subfolder: trackSlug });

      } else if (type === 'tutorial') {
        const subcatRef = entry.fields.subcategory?.pt?.sys?.id;

        let categoryTitle = 'uncategorized';
        let subcategoryTitle = 'unknown-subcategory';

        if (subcatRef) {
          const subcategoryEntry = await fetchLinkedEntry(subcatRef);
          subcategoryTitle = subcategoryEntry?.fields?.title?.[locale] || subcategoryTitle;

          const catRef = subcategoryEntry?.fields?.category?.pt?.sys?.id;
          if (catRef) {
            const categoryEntry = await fetchLinkedEntry(catRef);
            categoryTitle = categoryEntry?.fields?.title?.[locale] || categoryTitle;
          }
        }

        const { content, slug } = generateTutorialMarkdown(
          entry,
          locale,
          categoryTitle,
          subcategoryTitle
        );

        await writeMarkdown({
          content,
          slug,
          locale,
          folder: 'tutorials',
          subfolder: categoryTitle,
          subcategoryFolder: subcategoryTitle
        });
      }
    }
  }
}

main();
