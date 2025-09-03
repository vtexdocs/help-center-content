---
title: 'Computer Interfaces'
id: formatting0003
status: PUBLISHED
createdAt: 2025-08-06T15:00:00.388Z
publishedAt: 2025-08-06T15:00:00.388Z
firstPublishedAt: 2025-08-06T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugEN: computer-interfaces
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: computer-interfaces
---

> ⚠️ The following content explains how to reference interfaces in tutorials and guides. To write copy for interfaces, see the [Interface copy](https://contentguide.vtex.com/docs/interface-copy) section.

## Placeholders
Placeholders indicate where dynamic or user-provided information should be added. They help ensure clarity and consistency when referring to variables, parameters, or customizable fields. When documenting placeholders, follow specific formatting rules to ensure readability and consistency.

For information that should be input by the user, such as URL variables, use placeholders contained in curly brackets.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| `{accountName}.myvtex.com/admin` | `{​{accountName}}.myvtex.com/admin` or `accountName.myvtex.com/admin` |

When mentioning a placeholder in a flowing text, format it as code without the curly brackets.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| The `accountName` should be replaced with the name of your store account. | The `{accountName}` should be replaced with the name of your store account. |

## Action labels
Active labels are interactive elements that trigger actions, such as buttons. Their naming and representation must be clear to avoid confusion during user interaction. When referencing buttons in guides or tutorials, use standardized formatting to differentiate them from the surrounding text.

When referring to action labels in a list, numbered procedure, flowing text, or bulleted list, format the button name as code.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| <ol><li>In the Marketplace module, click `Integrations`.</li><li>On the Google Shopping card, click `Integrate`.</li><li>Then click `Save`.</li></ol> | <ol><li>In the `Marketplace` module, click **Integrations**.</li><li>On the *Google Shopping card*, click `Integrate`.</li><li>Then click "Save configuration".</li></ol> |

## Content labels
Content labels, including titles, menus, and column headers, offer structure and navigation cues. Maintaining consistency in their presentation improves the user experience while navigating the interface. When mentioning content labels in guides or tutorials, use appropriate formatting to distinguish them from regular text and improve readability.

Use bold formatting in flowing text for interface elements like titles, module names, sequences involving content labels with angle brackets, and table elements.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| <ul><li>Select the **Status** column.</li><li>You will have to access the Admin page, and in the **Products** module, click **Store Setup** > **inStore** > **Customer Identification**.</li></ul> | <ul><li>Select the `Status` column.</li><li>You will have to access the Admin page, and in the **Products** module, click `Store Setup` > `inStore` > `Customer Identification`.</li></ul> |

## Icons
Icons convey functionality visually but must balance aesthetics with accessibility, so their usage requires careful consideration. When referencing icons in guides or tutorials, include descriptive labels and apply proper formatting.

Icons are included in text to indicate an interface icon that supports user recognition while reading the documentation. When including icons in text, remember to add a label describing them to enhance accessibility. For documentation, prefer adding the icon after the label. The icon needs to be the same as in the interface. If there isn't an icon in the interface, don't use it.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| Click the search 🔍 button. | <ul><li>Click the magnifying glass button.</li><li>Click the 🔍 search button.</li><li>Click the magnifying glass 🔍 button.</li></ul> |

When adding an icon in HTML, include the attribute `aria-hidden="true"` so that screen readers ignore the inline icon HTML tag.

> ℹ️ Screen readers might be interrupted by inline icons if `aria-hidden = false`, preventing them from finishing the sentence.

| ✅ Do | ❌ Don't |
| :--- | :--- |
| Click the search `<i class="fas fa-search" aria-hidden="true"></i>` button. | Click the search `<i class="fas fa-search"></i>` button. |