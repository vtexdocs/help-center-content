---
title: 'Troubleshooting'
id: edu0010
status: PUBLISHED
createdAt: 2024-12-04T19:24:22.388Z
updatedAt: 2025-02-03T11:11:00.388Z
publishedAt: 2024-12-04T19:24:22.388Z
firstPublishedAt: 2024-12-04T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugEN: troubleshooting-template
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: troubleshooting-template
---

Troubleshooting articles help users find practical solutions to problems they may encounter when completing tasks on the platform.

In this guide, you’ll see the available templates, general guidelines, and examples of troubleshooting articles.

> ℹ️ Make sure to review the guidelines from the [Best practices for writing documentation](https://deploy-preview-4--language-hub.netlify.app/docs/documentation/best-practices-for-writing-documentation).

## Writing a troubleshooting article

| **Topic** | **Description** |
| ------------ | ---------------------- |
| **Title** | Clearly describe the issue in a concise and direct manner, using first-person language. |
| **Introduction** | Provide a brief overview of the problem scenario, including affected modules, error messages, and screenshots. |
| **Solution(s)** | Outline the steps to resolve the issue, including: <ol><li><b>Solution name:</b> Provide a clear and concise label for each solution.</li><li><b>Steps:</b> Break down the solution into numbered steps, using clear and concise language.</li></ol> |
| **Assets** | Include screenshots or other visual aids to enhance understanding (if applicable). |
| **User perspective** | Write from the user's point of view, focusing on the problem they are experiencing. |
| **Product tags and keywords** | **Include relevant product tags and keywords to improve search visibility.** |
| **Responsibility** | Indicate who is responsible for resolving the issue and taking necessary actions: VTEX, the user, or both. |
| **Root cause analysis** | Identify the underlying cause of the problem to provide effective solutions. |

## Troubleshooting templates

<details>
<summary><b>Template 1 - Error and problem groups</b></summary>

```md
# Title
Product tags: [Add products related to the problem. Example: Orders and Payments]

Keywords: [Words that help identify the article content in a search. Example: Unidentified order, SKU, etc.]

[Add a brief introduction describing the problem faced by the user. Whenever possible, limit this to 2 paragraphs.]

## Solution

To identify the meaning and determine the specific correction for each error message, see the table below:

Error type or message
Meaning
Required action
`{Add the error message}` or

Add the error type
[Describe the meaning of the message or the cause of the error type. Example: Order not found on VTEX (item removed from the catalog or incorrect information).]
[Guide the user with clear instructions. Example: provide a summary of the steps, mention another article, or recommend contacting support for further assistance.]
```

</details>

<details>
<summary><b>Template 2 - General articles</b></summary>

```md
# Title

Product tags: [Add products related to the problem. Example: Orders and Payments]

Keywords: [Words that help identify the article content in a search. Example: Unidentified order, SKU, etc.]

[Add a brief introduction describing the problem faced by the user. Limit this to 2 paragraphs.]

## Solution

[Describe possible solutions to solve the reported error. When there are multiple steps to fix the error, these should be divided into individual steps, see the next template, Template 3 - General articles: More than one step in the solution.]

To solve this problem, there are several solutions you can consider:

- [Solution name 1](#solution-name-1): [Describe the scenario for this problem. Example: "Site Editor doesn't open."]

- [Solution name 2](#solution-name-2): …

### Solution name 1

[Example title: "Checking roles"]

[Describe what needs to be done to solve the problem and the expected outcome.]

### Solution name 2

.
.
.
```

</details>

<details>
<summary><b>Template 3 - General articles: More than one step in the solution</b></summary>

```md
# Alternative title

### Solution name 1

[Example Title: Configure your VTEX account]

[Describe in investigative steps. Within each step, describe the necessary steps to solve the problem and the expected outcome.]

### Step 1 - Step name 1

.
.
.

#### Step 2 - Step name 2

.
.
.

### Solution name 2

.
.
.
#### Step 1 - Step name 1

.
.
.

#### Step 2 - Step name 2

.
.
.
```

</details>

## Examples of troubleshooting articles

- [Help Center](https://help.vtex.com/category/troubleshooting--39pDkp8qxSll6mGj0tWViz)
  - [My ad is not displayed on Mercado Livre](https://help.vtex.com/tutorial/my-ad-is-not-displayed-on-mercado-livre--2UpudfowEvG97e2lstj4qc)
  - [My store’s Site Editor is not working](https://help.vtex.com/tutorial/my-stores-site-editor-is-not-working--3A6Ois91zEZ8zpKJp1wsP2)
  - [Promotion not applied to the marketplace](https://help.vtex.com/tutorial/promotion-not-applied-to-the-marketplace--2pxlVpzgThuw2wTEISRwA2)

- [Developer Portal](https://developers.vtex.com/docs/troubleshooting)
  - [I can't update the EAN of my SKUs via API](https://developers.vtex.com/docs/troubleshooting/i-cant-update-the-ean-of-my-skus-via-api)
  - [Modal Layout closes when I click a SKU](https://developers.vtex.com/docs/troubleshooting/modal-layout-closes-when-i-click-a-sku)
  - [My store is slow or unavailable](https://developers.vtex.com/docs/troubleshooting/my-store-is-slow-or-unavailable)
