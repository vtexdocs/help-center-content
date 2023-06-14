---
title: Customizing your store’s typography
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2023-03-28T12:13:42.484Z
publishedAt: 2023-03-28T12:13:42.484Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slug: customizing-your-stores-typography
legacySlug: customizing-your-stores-typography
subcategory: 5HsDDU48ZP58JHWU3WbCPc
---

The typography of your store website is a tool to communicate your brand identity to your clients. 
In the Admin, you have the flexibility to customize your store’s typography to suit to your business needs.

<div class="alert alert-warning">
  <p>Keep in mind that changes to your store typography in the <b>Storefront</b> overwrite the typography changes made in your store code. Please contact your development team and make sure the changes will be done in the Storefront or through your store's code.</p>
</div>

## Adding custom font families

1. In the VTEX Admin, access **Storefront > Styles**.
2. Select the kebab menu icon (three dots).

![Styles - More Options](https://images.ctfassets.net/alneenqid6w5/7qhmfxaMzZ8Aw0F6mygs2i/3bc40e3e3a439475b4f0998a3af56854/styles-two-en.png)

3. Click **Edit > Typography > Font Family**.

4. Then, click **Add custom font** and upload the desired font file. In the **Font Family** input field, enter a name for the font.

<div class="alert alert-warning">
  <p>The font family file must be uploaded in the following file extensions: <i>.ttf</i> or <i>.woff</i>.</p>
</div>

5. Click `Save` to save your changes. 

## Changing the font style

After adding new font families, you can apply them to your store’s text content. However, before completing the steps for changing the font style of your store, you need to be familiar with **Type Tokens**.

Refer to the section [Type tokens](#type-tokens) for more information about them, and then check out the steps for changing the font style.

### Step-by-step

1. In the VTEX Admin, access **Storefront > Styles**.
2. Select the kebab menu icon (three dots).
3. Click on **Edit > Typography > Type Tokens**.

![Styles - Type tokens EN](https://images.ctfassets.net/alneenqid6w5/6kw7SMB36fZsS0SKX00Kss/dbb378f7b8e11fa1217276626dd6f008/styles-three-en.gif)

4. Choose the type token you want to customize, for example, **Heading 1**, and click it.

5. Then, choose which property of the type token you want to customize:

| Property | Description | Value available |
| ----------- | --------------- | ----------------- |
| __Font Family__ | Sets the font type of a type token. | `JosefinSans`, `Bold`, `Default` |
| __Font Weight__ | Sets how thick or thin characters in the type token should be displayed. | `Thin`, `Extra Light`, `Light`, `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
| __Font Size__ | Sets the font size of a type token. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`,  |
| __Text transform__ | Sets the capitalization of the type token. | `Initial`, `None`, `Capitalize`, `Uppercase`, `Lowercase`,  |
| __Letter Spacing__ | Sets the space between characters in a type token. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. After completing the changes in the type token, click `Save`, which will display the changes in your live store.

### Type tokens

The **Type Tokens** option displays all your store’s customizable text content. 

See what you can customize using the type tokens:

- **Headings**
These are the first elements that users read and give information most efficiently, using no more than the necessary number of words. There are six headings, `Heading 1` being the most prominent heading style and `Heading 6` the least prominent one.

- **Body**
The body is the text style defined to achieve paragraph legibility by adding height between the lines. There is one type of body.

- **Auxiliary (Small and mini)**
These are the secondary elements of an interface, such as captions and text on badges. There are two types of auxiliaries: Small and mini.

- **Action**
Action is the text style used on the page’s main action and interactive elements, such as the call to action (CTA), buttons, and tabs. There are three types: `Action`, `Action Small` and `Action Large`.

- **Code**
Code is the text style used to indicate technical terms, such as programming language, shipping estimate, and installment rules. There is one type of code. 

