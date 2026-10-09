---
title: 'Shopping Assistant: Suggested questions'
createdAt: 2026-09-03T21:30:00.000Z
updatedAt: 2026-09-10T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-suggested-questions
locale: en
---

**Suggested questions** are the entry point for the store Shopping Assistant in the [VTEX CX Platform](https://help.vtex.com/docs/tutorials/vtex-cx-platform-overview). On the product page, the chat displays up to 3 prewritten questions about the product. When the customer clicks one of them, the chat opens and the question is sent as if they had typed it themselves, starting the conversation with a clear intent instead of an empty chat.

In this article, you'll learn what suggested questions are, where they appear, how they're generated, what influences their quality, and how to enable or disable them in the VTEX CX Admin.

## Where the questions appear

Suggested questions display only on product details pages (PDPs). They aren't displayed on the homepage, category pages, search results, or checkout.

On the product page, the questions appear in two states:

- **Closed chat:** As compact buttons next to the chat launcher (opening) button.
- **Open chat:** In the chat's message list.

If the customer navigates to another product page, the current questions are removed, and a new set is generated for the new product.

## How questions are generated

Questions are generated automatically by artificial intelligence (AI) and require no manual configuration from the store. When the webchat loads on a product page, it reads the product data already published on that page — name, description, brand, and technical specifications — and requests three relevant questions based on that content.

The result is stored, so the next customer who views the same product sees the questions immediately.

When using this feature, keep the following behaviors in mind:

- **Questions are generated per product, not per variation.** All colors or sizes of the same product share the same three questions.
- **Question quality depends directly on catalog quality.** Products with complete descriptions and well-filled specifications generate specific, useful questions. Products with little content or empty fields result in generic questions.
- **Each store displays questions in a single language.** There's no automatic translation between locales.

> ℹ️ Improving your catalog content is the most effective way to improve suggested questions. Review product descriptions and specifications to get more relevant questions.

## Activation

Suggested questions are enabled by default. Accounts set up through [VTEX CX onboarding](https://help.vtex.com/docs/tutorials/introduction-to-cx) already have Shopping Assistant and suggested questions configured, so no action is needed to start using the feature.

## Activating or deactivating suggested questions

If you'd rather not display questions in your store, you can disable them in the VTEX CX Admin. Deactivating suggested questions doesn't affect Shopping Assistant: the chat remains available in the store, and customers can still start a conversation through the launcher.

To activate or deactivate suggested questions, follow the steps below:

1. Access the VTEX CX Admin.
2. Go to **Settings > Channels > My apps > Shopping Assistant > Preferences**.
3. Activate or deactivate the **Questions suggested by AI** option.
4. Click `Save changes`.
