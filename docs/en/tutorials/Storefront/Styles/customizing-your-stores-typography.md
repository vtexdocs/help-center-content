---
title: 'Customizing your store’s typography'
id: 2R0ByIjvJtuz99RK3OL5WP
status: PUBLISHED
createdAt: 2022-01-17T20:32:00.917Z
updatedAt: 2024-09-03T16:02:42.101Z
publishedAt: 2024-09-03T16:02:42.101Z
firstPublishedAt: 2022-01-17T21:12:52.262Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slug: customizing-your-stores-typography
locale: en
legacySlug: customizing-your-stores-typography
subcategoryId: 5HsDDU48ZP58JHWU3WbCPc
---

The typography of your online store is a tool for showing your brand identity to your customers.
In the Admin, you have the flexibility to customize your store's typography to meet your business needs.

>⚠️ Keep in mind that changes made to your store's typography in the **Storefront** override typography changes made in the store's code. Please contact your development team and make sure that these changes will be set in the Storefront or in your store's code.

## Adding custom font families

1. In the VTEX Admin, go to **Storefront > Styles**.

2. Select the kebab menu icon (three dots).

3. Click **Edit > Typography > Font family**.

4. Click **Add custom font**.

5. In the **Font family** field, create a name for the font.

    ![familia-de-fontes-giff-en](//images.ctfassets.net/alneenqid6w5/5GVDDJvzXVmlkEbU1OHPoR/aa803a298788fc1b0a0304f5ab6cddeb/familia-de-fontes-giff-en.gif)

6. Click **Upload** to upload the desired font file.

>⚠️ The font family file must have one of the following extensions: <i>.ttf</i> or <i>.woff</i>.

7. Once the files have been uploaded, choose a font style. The accepted values are: `Thin`, `Extra Light`, `Light`, `Regular`, `Medium`, `Bold`, `Extra Bold`, `Black`, `Thin Italic`, `Extra Light Italic`, `Light Italic`, `Regular Italic`, `Medium Italic`, `Bold Italic`, `Extra Bold Italic` and `Black Italic`.

8. Click `Save`.

## Configuring type tokens

After adding new font families, you can apply them to your store's text content using **Type tokens**.

The **Type tokens** option displays all customizable text content in your store. Here's what you can customize using type tokens:

- **Headings:** These are the first elements that users read and give information most efficiently, using no more than the necessary number of words. There are six headings. `Heading 1` is the most prominent heading style, and `Heading 6` is the least one.

- **Body:** This is the text style designed to improve paragraph readability by adding spacing between the lines. There is one type of body.

- **Auxiliary small/mini:** These are secondary elements of an interface, such as subtitles and badge text. There are two types of auxiliary text: small and mini.

- **Action:** This is the text style used in the main action of the page and for interactive elements, such as call to action (CTA), buttons, and tabs. There are three types: `Action`, `Action Small`, and `Action Large`.

- **Code:** This is the text style used to indicate technical terms, such as programming languages, shipping estimates, and installment rules.

Follow the instructions below to configure type tokens:

1. In the VTEX Admin, go to **Storefront > Styles**.

2. Select the kebab menu icon (three dots).

3. Click **Edit > Typography > Type tokens**.

    ![tokens-tipo-giff-en](//images.ctfassets.net/alneenqid6w5/6O5G4MOA0vGlFLEzdcRQDa/c7bc0075e3df6e338a258baf8c9ca41f/tokens-tipo-giff-en.gif)

4. Choose the token you want to customize, such as **Heading 1**, and click it.

5. Then customize each property according to the table below:

    | Property | Description | Available values |
    | ----------- | --------------- | ----------------- |
    | __Font Family__ | Sets the font type of a type token. | `JosefinSans`, `Bold`, `Default` |
    | __Font Weight__ | Sets how thick or thin the token characters should be displayed. | `Thin`, `Extra Light`, `Light`, `Normal`, `Medium`, `Semi Bold`, `Bold`, `Extra Bold`, `Black`.   |
    | __Font Size__ | Sets the font size of a type token. | `48px`, `36px`, `24px`, `20px`, `16px`, `14px`, `12px`, |
    | __Text Transform__ | Sets the use of capital letters in the type token. | `Initial`, `None`, `Capitalize`, `Uppercase`, `Lowercase`, |
    | __Letter Spacing__ | Sets the space between characters in a type token. | `Normal`, `Tracked`, `Tracked Tight`, `Tracked Mega`, `Zero` |

6. Click `Save`.
