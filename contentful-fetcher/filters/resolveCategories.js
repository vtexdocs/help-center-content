function resolveCategoryAndSubcategory(entry, locale) {
  const subcategoryName = entry.fields.subcategory?.pt?.fields?.title?.[locale] || 'unknown-subcategory';
  const categoryName = entry.fields.subcategory?.pt?.fields?.category?.pt?.fields?.title?.[locale] || 'uncategorized';
  return { categoryName, subcategoryName };
}
