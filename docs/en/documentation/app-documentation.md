---
title: 'App documentation'
id: edu0006
status: PUBLISHED
createdAt: 2024-12-04T19:24:22.388Z
updatedAt: 2024-12-04T19:24:22.388Z
publishedAt: 2024-12-04T19:24:22.388Z
firstPublishedAt: 2024-12-04T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugEN: app-documentation
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: app-documentation
---

An App documentation guide helps users understand the [VTEX app](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app), the installation, and the configuration processes.

ℹ️ To add documentation in an app, you must use the [Docs builder](https://developers.vtex.com/docs/guides/vtex-io-documentation-docs-builder). The documentation is written in Markdown files, inside the app’s repository. By using the Docs builder, the documentation becomes publicly available at the [VTEX Developer Portal](https://developers.vtex.com/).

In this guide, you will learn about the available template, general guidelines, and see examples of Onboarding articles. 

> ⚠️ This guide is part of the [App Store guidelines](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) and one of the requirements to submit an app to the homologation process and [make it available in the App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store).

<details>
<summary><b>App documentation template</b></summary>

```md
# {Insert the app's name}

The `{insert app's name}` is responsible for `{app's purpose}` so you can `{job to be done}`.

![insert-an-image-preview](/)

## Before you begin

You need to have `{insert what the user needs to have: an account in another platform, CLI, knowledge in another app, etc}`.

If you do not have `{insert what the user needs to have and how to obtain it}`.

## Installation

1. [Install](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app) the `{insert app's name}` app in the desired VTEX account by running `vtex install {appVendor}.{appName}` in your terminal.
2. (Optional, for frontend apps) Open your store’s Store Theme app directory in your code editor.
3. (Optional, for frontend apps) Open your app's `manifest.json file` and add the `{insert app's name}` app under the `peerDependencies` field.


      "peerDependencies": {
          "vtex.{appName}": "{appVersion}"
      }
      

4. (Optional, for frontend apps) Declare the `{insert app's name}` app in the desired template. For example:

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

## Customization (optional, for frontend apps)

To apply CSS customizations to this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization).

| CSS Handles |
| ------------------ |
| csshandlesName |
| csshandlesName |
| csshandlesName |

## How the app works (Optional)

When the app requires user interaction beyond the Admin configuration. This section is recommended for [Admin apps](https://learn.vtex.com/docs/course-admin-lang-en).

`{Detail what can be done with the app and show the steps to perform each operation.}`

## Contributors

Thanks go to these wonderful people:

- `{insert the GitHub username}`

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome.
```
</details>

## General guidelines

| **Topic** | **Description** | ✅ Do | ❌ Don’t |
| :---- | :---- | :---- | :---- |
| **Target audience** | Identify your readers. | Differentiate between developers and business users. | Assume a single audience. |
| **Learning objectives** | Define the user's takeaway. | Clearly state what users should learn. | Leave learning goals ambiguous. |
| **Title** | A clear and concise title. | Use the app name and a verb describing the learning objective. Capitalize the first letter of each word. | Include punctuation, version numbers, or the word "App". |
| **Introduction** | Briefly introduce the app and its benefits. | Summarize the app's purpose and user benefits. Include an image and callouts for important notes. | Focus solely on technical details.  |
| **Before you begin (Optional)** | List requirements before installation. | Use clear bullet points or checklists. Utilize callouts if applicable. | Write lengthy paragraphs explaining prerequisites. |
| **Installation** | Provide a step-by-step guide with code snippets (if applicable) | Offer clear and concise steps. Enhance clarity with code snippets. | Skip steps or lack specific instructions. |
| **Configuration** | Guide users through configuring the app. | List all essential settings with detailed steps as defined in the [settingsSchema](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema). | Omit configuration details. |
| **How it works** | (Optional) Detail the app functions and provideoffer steps for usingutilizing the app. | Use numbered lists for each operation, with clear and concise steps. Use images to illustrate the UI. | Skip steps or lack specific instructions. |
| **Customization** | (Optional) ProvideOffer steps for customizing the app. | Include [CSS handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) and a related table if applicable. Reference external documentation for CSS customization. |  Ignore customization options. |
| **Contributors** | (Optional) Acknowledge contributors. | Follow the [All-Contributors specification](https://github.com/all-contributors/all-contributors). | Omit recognition of contributors. |
| **Callouts** | Highlight information using callouts. | Use the provided callout types (Information, Warning, Danger) with appropriate messages.:  | Use generic text to highlight information. |

## Examples of App documentation articles

* [Breadcrumb](https://developers.vtex.com/docs/apps/vtex.breadcrumb)  
* [SKU Selector](https://developers.vtex.com/docs/apps/vtex.store-components/skuselector)  
* [Store Locator](https://developers.vtex.com/docs/apps/vtex.store-locator)  
* [Store Sitemap](https://developers.vtex.com/docs/apps/vtex.store-sitemap)  
* [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app)  
* [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager)  
* [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming)  
* [Personal Shopper](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free)  
* [Pinterest app](https://developers.vtex.com/docs/apps/pinterestpartnerbr.pinterest@1.x)
