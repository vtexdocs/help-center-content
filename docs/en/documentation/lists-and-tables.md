---
title: 'Lists and tables'
id: edu0013
status: PUBLISHED
createdAt: 2025-02-11T15:00:00.388Z
publishedAt: 2025-02-11T15:00:00.388Z
firstPublishedAt: 2025-02-06T15:00:00.388Z
contentType: trackArticle
productTeam: Education
slugEN: lists-and-tables
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: lists-and-tables
---

Tables and lists present structured content, but sometimes, it’s unclear when to use one over the other. Here are some rules you can follow when creating them:

<details>
<summary><b>Lists</b></summary>

Lists help organize the content and facilitate understanding. When you need to roll items that do not configure a sequence of steps, it could be helpful to format it as a list. Use lists to present a series of single items or steps. For example, a bulleted list can outline product features, and a numbered list can guide users through software installation steps.

See the [lists](#lists) guidelines for more information.

</details>

<br>

<details>
<summary><b>Tables</b></summary>

Use tables to organize data with multiple attributes. For example, a table can compare installation requirements for different operating systems, showing the minimum and recommended specifications.

See the [tables](#tables) guidelines for more information.

</details>

## General rules

When a list or table item contains a colon, the first word after it must be capitalized.

| Do ✅ | Don't ❌ |
| ------ |-------- |
| <ol><li><b>Authorized reservation:</b> After the order is placed.</li><li><b>Confirmed reservation:</b> After the order is placed.</li></ol> | <ol><li><b>Authorized reservation:</b> after the order is placed.</li><li><b>Confirmed reservation:</b> after payment is approved.</li></ol> |

Make sure the list or table structure is consistent. Start each item with the same verb or noun form.

| Do ✅ | Don't ❌ |
| ------ |-------- |
| Example 1: <br><ol><li><b>Control</b> search results using specific conditions.</li><li><b>Preview</b> how search results will be displayed to customers while navigating the store.</li><li><b>Change</b> the order of the items listed in search results.</li></ol> <br> Example 2: <br><ol><li><b>Indicates</b> the type of editing used in the merchandising rule.</li><li><b>Enables</b> or disables a merchandising rule.</li><li><b>Type</b> of editing used in the merchandising rule.</li><li><b>Option</b> to enable or disable a merchandising rule.</li></ol> | Example 1: <br><ol><li><b>Controls</b> search results using specific conditions.</li><li><b>You can change</b> the order of the items listed in search results.</li></ol> <br> Example 2: <br><li><b>Option</b> that enables or disables a merchandising rule.</li></ol> |

When a list or a word in the table is not a complete sentence, don't use punctuation.

| Do ✅ | Don't ❌ |
| ------ |-------- |
| Before cloning your store's repository, ensure that you have the following tools on your machine: <br><ol><li>Node.js</li><li>Yarn</li><li>Git</li><li>Visual Studio Code</li></ol> | Before cloning your store's repository, ensure that you have the following tools on your machine: <br><ol><li>Node.js.</li><li>Yarn.</li><li>Git.</li><li>Visual Studio Code.</li></ol> |

## Lists

There are two types of lists:

- **Ordered:** Presented in a specific sequence, typically numbered. Use for sequential steps (e.g., installation instructions):

    ```sh
    1. Go to the VTEX Admin and access **Storefront > Headless CMS**.
    2. Click **Create a new project**.
    3. …
    ```

- **Unordered:** Presented without a specific sequence, typically bulleted. Use for groups of items without a specific order (e.g., required tools):

    ```sh
    Before cloning your store repository, ensure that you have the following tools on your machine:
    - Node.js
    - Yarn
    - Git
    ```

### Ordered list

Use a **numbered list** for sequential steps.

| Do ✅ | Don't ❌ |
| ------ | -------- |
| Archiving a project disables the API and access to the content within the project. To archive a project, follow the steps below: <br> 1. Go to **Storefront > Projects.**<br>2. Choose the project you want to archive and click **Settings** (⚙️) to open a modal.<br>3. Click `Archive project` on the General page. A pop-up message will appear to confirm that you want to archive the project. | Archiving a project disables the API and access to the content within the project. To archive a project, follow the steps below: <br><ol><li>Go to <b>Storefront > Projects.</b></li><li>Choose the project you want to archive and click <b>Settings</b> (⚙️) to open a modal.</li><li>Click <code>Archive project</code> on the General page. A pop-up message will appear to confirm that you want to archive the project.</li></ol> |

| Do ✅ | Don't ❌ |
| ------ | -------- |
| The promotions applied to the cart follow the order below: <br> 1. Percentage<br>2. Nominal<br>3. Buy Together | The promotions applied to the cart follow the order below: <br><ol><li>Percentage</li><li>Nominal</li><li>Buy Together</li></ol> |

Write an introduction to the list providing context for the user. Use a colon at the end of the sentence if the list follows immediately after.

| Do ✅ | Don't ❌ |
| ------ | -------- |
| Follow the steps below to add a new collection: <br> 1. In the Admin, click <b>Catalog</b>.<br>2. Click <b>Collections</b>.<br> | Add a new collection: <br> 1. In the Admin, click <b>Catalog</b>.<br>2. Click <b>Collections</b>.<br> |

### Unordered list

Use a **bulleted list** of items with a common theme that doesn’t require a specific order.

| Do ✅ | Don't ❌ |
| ------ | -------- |
| The tool has features such as: <br> <ol><li>Autocomplete: Provides search and product suggestions based on the shopper's context.</li><li>Customizable filters: Help in the process of finding the desired product.</li><li>Dynamic results: Uses historical data on clicks and orders to improve the search results dynamically.</li><li>Autocorrect: Handles typos and spelling mistakes, such as plural and singular variations and gender variations in words that share the same radical.</li><li>Customization: Offers customizable features such as Relevance, Synonyms, and Merchandising Rules, which make it possible to improve the customer experience and meet the store's business needs.</li></ol> | The card Opens a modal that displays three tabs: <br> 1. Autocomplete: Provides search and product suggestions based on the shopper's context. <br> 2. Customizable filters: Help in the process of finding the desired product. <br> 3. Dynamic results: Uses historical data on clicks and orders to improve the search results dynamically. <br> 4. Autocorrect: Handles typos and spelling mistakes, such as plural and singular variations and gender variations in words that share the same radical. <br> 5. Customization: Offers customizable features such as Relevance, Synonyms, and Merchandising Rules, which make it possible to improve the customer experience and meet the store's business needs. |

For bullet list items consisting of complete sentences, use a period at the end of each sentence.

| Do ✅ | Don't ❌ |
| ------ | -------- |
| Promotion competition occurs in the following situations: <br><ol><li>Promotions with the same type of discount.</li><li>More than one promotion applied to the same item.</li></ol> | Promotion competition occurs in the following situations: <br><ol><li>Promotions with the same type of discount</li><li>More than one promotion applied to the same item</li></ol> |

Use a period if there are more elements, such as a callout, code example, or an image, between the introduction and the list.

| Do ✅ | Don't ❌ |
| ------ | -------- |
| When you send the request, be sure to include the following fields. <code>{ "skuId": {sku-identification-number}", "quantity": "{product-identification-number}", "price": "{sku-price}"}</code> <br> <ol><li><code>skuId</code>: SKU identification code corresponding to the item.</li><li><code>quantity</code>: Item quantity.</li><code>price</code>: Item price in cents.</ol> | When you send the request, be sure to include the following fields: <code>{ "skuId": {sku-identification-number}", "quantity": "{product-identification-number}", "price": "{sku-price}"}</code> <br> <ol><li><code>skuId</code>: SKU identification code corresponding to the item.</li><li><code>quantity</code>: Item quantity.</li><code>price</code>: Item price in cents.</ol> |

## Tables

Use tables for items with three or more related data points.

<details>
<summary><b>Do ✅</b></summary>

```sh
When creating a field, the following types are displayed:

| Field type | Description |
| ------ | ----------- |
| **Auto Increment** | Stores integers and is automatically incremented, which means that for each new record, this field receives the value of the previous record + 1. |
| **Boolean** | Stores true or false information, which means it will always be completed as `true` or `false`.  |
| **CEP** | Stores a CEP (postal code in Brazil). |
```

</details>

<br>

<details>
<summary><b>Don’t ❌</b></summary>

```sh
When creating a field, the following types are displayed:
| Field type | 
| ------ | 
| **Auto Increment** | 
| **Boolean** | 
| **CEP** | 
```

</details>

<details>
<summary><b>Do ✅</b></summary>

```sh
FastStore is a toolkit based on Jamstack that helps developers build high-performance stores. In the following table, see its main aspects:

| Aspect | Description |
| ------ | ----------- |
| **Performance** | Ensures fast-loading stores and provides a good user experience, focusing on achieving high scores in tests like [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) and [Web Vitals](https://web.dev/articles/vitals#core-web-vitals).  |
| **Stability** | Built to be stable and avoid crashes, so your store doesn't lose sales due to provider issues.  |
| **Analytics/SEO** | Works with analytics tools to understand store customers and with SEO tools to improve store visibility in search results. |
```

</details>

<br>

<details>
<summary><b>Don’t ❌</b></summary>

```sh
| Aspect | Description |
| ------ | ----------- |
| **Performance** | Ensures fast-loading stores and provides a good user experience, focusing on achieving high scores in tests like [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) and [Web Vitals](https://web.dev/articles/vitals#core-web-vitals).  |
| **Stability** | Built to be stable and avoid crashes, so your store doesn't lose sales due to provider issues.  |
| **Analytics/SEO** | Works with analytics tools to understand store customers and with SEO tools to improve store visibility in search results. |
```

</details>

> ⚠ The introductory sentence must be a complete sentence, and it can end with a colon or a period. Usually, a colon if it immediately precedes the table, and usually a period if there's more content (e.g., a callout) between the introduction and the table.

