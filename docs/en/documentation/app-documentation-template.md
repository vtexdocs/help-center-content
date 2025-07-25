---
title: 'App documentation'
id: edu0005
status: PUBLISHED
createdAt: 2024-12-03T19:24:22.388Z
updatedAt: 2025-02-03T11:11:00.388Z
publishedAt: 2024-12-03T19:24:22.388Z
firstPublishedAt: 2024-12-03T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugEN: app-documentation-template
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: app-documentation-template
---

An app documentation guide helps users understand [VTEX apps](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app), including installation and configuration.

> ℹ️ To add documentation to an app, you must use the [Docs builder](https://developers.vtex.com/docs/guides/vtex-io-documentation-docs-builder). The documentation is written in Markdown files, inside the app repository. By using the Docs builder, the documentation becomes publicly available on the [VTEX Developer Portal](https://developers.vtex.com/).

In this guide, you’ll learn about the available template, general guidelines, and examples of Onboarding articles. 

> ⚠️ This guide is part of the [App Store guidelines](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) and one of the requirements to submit an app to the homologation process and [make it available in the App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store).

## Writing app documentation

<details>
<summary><b>Target audience</b></summary>

**Description:** Identify your readers

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| Differentiate between developers and business users. | Assume a single audience. |

</details>

<details>
<summary><b>Learning objective</b></summary>

**Description:** Define the user's takeaway.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| Clearly state what users should learn. | Leave learning goals ambiguous. |

</details>

<details>
<summary><b>Title</b></summary>

**Description:** Use a clear and concise title.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ol><li>Use the app name and a verb describing the learning objective.</li><li>Capitalize the first letter of each word.</li></ol> | Include punctuation, version numbers, or the word `App`. |

</details>

<details>
<summary><b>Introduction</b></summary>

**Description:** Briefly introduce the app and its benefits.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ol><li>Summarize the app's purpose and user benefits.</li><li>Include an image and callouts for important notes.</li></ol>| Focus solely on technical details. |

</details>

<details>
<summary><b>Before you begin (optional)</b></summary>

**Description:** List requirements before installation.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ol><li>Use clear bullet points or checklists.</li><li>Use callouts if applicable.</li></ol> | Write lengthy paragraphs explaining prerequisites. |

</details>

<details>
<summary><b>Installation</b></summary>

**Description:** Provide a step-by-step guide with code snippets (if applicable).

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ul><li>Provide clear and concise steps.</li><li>Enhance clarity with code snippets.</li></ul> | Skip steps or lack specific instructions. |

</details>

<details>
<summary><b>Configuration</b></summary>

**Description:** Guide users through the app configuration.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| List all essential settings with detailed steps as defined in the [settingsSchema](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema). | Omit configuration details. |

</details>

<details>
<summary><b>How it works</b></summary>

**Description:** (Optional) Detail the app functions and provide steps for using the app.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ol><li>Use numbered lists for each operation, with clear and concise steps.</li><li>Use images to illustrate the UI.</li></ol> | Skip steps or lack specific instructions. |

</details>

<details>
<summary><b>Customization</b></summary>

**Description:** (Optional) Provide steps for customizing the app.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| <ul><li>Include [CSS handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) and a related table if applicable.</li><li>Reference external documentation for CSS customization.</li></ul> | Ignore customization options. |

</details>

<details>
<summary><b>Contributors</b></summary>

**Description:** (Optional) Acknowledge contributors.

| **✅ Do** | **❌ Don’t** |
| :--- | :--- |
| Follow the [All-Contributors specification](https://github.com/all-contributors/all-contributors). | Omit recognition of contributors. |

</details>

<details>
<summary><b>Callouts</b></summary>

**Description:** (Optional) Acknowledge contributors.

| ✅ Do | ❌ Don’t |
| :--- | :--- |
| Highlight information using callouts. | <ul><li>Use the provided callout types (Information, Warning, Danger) with appropriate messages.</li><li>Use generic text to highlight information.</li></ul> |

</details>

## App documentation template

<details>
<summary><b>App documentation template</b></summary>

```md
# `{Insert the app name}`

`{insert app name}` `{app's purpose starting with a verb}` so you can `{job to be done}`.

![insert-an-image-preview](/)

## Before you begin

You need to have `{insert what the user needs to have: an account in another platform, CLI, knowledge about another app, etc.}`.

If you don't have `{insert what the user needs to have and how to get it}`.

## Installation

1. [Install](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app) the `{insert app name}` app in the desired VTEX account by running `vtex install {appVendor}.{appName}` in your terminal.
2. (Optional, for frontend apps) Open the store Store Theme app directory in your code editor.
3. (Optional, for frontend apps) Open the app `manifest.json file` and add the `{insert app name}` app under the `peerDependencies` field.


      "peerDependencies": {
          "vtex.`{appName}`": "`{appVersion}`"
      }
      

4. (Optional, for frontend apps) Declare the `{insert app name}` app in the desired template. For example:

      "store.home": {
          "blocks": [
      +     "{app-name}",
          ]
      },

*![insert-an-image-preview](/)*

## Configuration

Once you have installed the app, you can `{describe the app's configuration in the VTEX Admin as defined in the settingsSchema[https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema], for example}`.

1. `First step`.
2. `Second step`.
3. `Third step`.

## Customization (Optional, for frontend apps)

To apply CSS customizations to this and other blocks, follow the instructions in [Using CSS Handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization).

| CSS Handles |
| ------------------ |
| csshandlesName |
| csshandlesName |
| csshandlesName |

## How the app works (optional)

Use this section for [Admin apps](https://learn.vtex.com/docs/course-admin-lang-en) when the app requires user interaction beyond the Admin configuration.

`{Detail what can be done with the app and provide the steps to perform each operation.}`

## Contributors

Thanks go to these wonderful people:

- `{insert the GitHub username}`

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome.
```

</details>

## Examples of app documentation articles

- [Breadcrumb](https://developers.vtex.com/docs/apps/vtex.breadcrumb)
- [SKU Selector](https://developers.vtex.com/docs/apps/vtex.store-components/skuselector)
- [Store Locator](https://developers.vtex.com/docs/apps/vtex.store-locator)
- [Store Sitemap](https://developers.vtex.com/docs/apps/vtex.store-sitemap)
- [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app)
- [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager)
- [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming)
- [Personal Shopper](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free)
- [Pinterest app](https://developers.vtex.com/docs/apps/pinterestpartnerbr.pinterest@1.x)