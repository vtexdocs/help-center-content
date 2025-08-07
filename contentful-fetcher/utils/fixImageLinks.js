function fixImageLinks(markdownContent) {
  const updated = markdownContent
    .replace(/\]\(\s*\/\/images\.contentful\.com/g, '](https://images.contentful.com')
    .replace(/src=["']\/\/images\.contentful\.com/g, 'src="https://images.contentful.com');
  if (updated !== markdownContent) {
    console.log('🖼️ Fixed image links');
  }
  return updated;
}


module.exports = { fixImageLinks };
