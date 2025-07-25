---
title: 'Messages'
id: ui0006
status: PUBLISHED
createdAt: 2024-12-05T19:24:22.388Z
updatedAt: 2024-12-05T19:24:22.388Z
publishedAt: 2024-12-05T19:24:22.388Z
firstPublishedAt: 2024-12-05T19:24:22.388Z
contentType: trackArticle
productTeam: Localization
slugEN: messages
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: messages
---

Messages consist of up to two sentences to communicate the system's current state and provide feedback on user actions. This pattern is commonly found in components like Inputs or Alerts.

## General

Keep it as short as possible while still being descriptive enough. Also, remember there’s a 240-character limit per message.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Provider couldn't be saved due to a technical issue</li><li>Check this option</li><li>Select at least one option</li><li>Products couldn't be imported because the CSV file is invalid</li></ul> | <ul><li>We faced an unexpected issue while attempting to save the provider. There might be several reasons for this, such as server downtime or network errors</li><li>Check this</li><li>Select at least one</li><li>Something went wrong</li></ul> |

Don't use technical language.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| Invoice couldn't be sent due to a technical issue | Error 298dx9283 prevented the invoice from being sent |

Reuse messages (or their structure) whenever possible.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Collection exported successfully</li><li>Provider couldn't be saved due to a technical issue</li><li>Enter this information</li><li>Check this option</li><li>Select at least one option</li></ul> | <ul><li>The collection was successfully exported.</li><li>A technical issue prevented the provider from being saved</li><li>This field is required</li><li>This option needs to be checked</li><li>At least one option needs to be selected</li></ul> |

Don't use personal pronouns.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Account created successfully</li><li>Double-check the password</li></ul> | <ul><li>Your account was successfully created</li><li>You entered the wrong password.</li></ul> |

Use an objective and neutral tone.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Invoice couldn't be sent due to a technical issue</li><li>Products couldn't be imported because the CSV file is invalid</li><li>Account created successfully</li><li>Log in to your Admin</li><li>Double-check the password</li><li>Enter this information</li></ul> | <ul><li>Oops, something went wrong, and the invoice could not be sent</li><li>Please upload a valid CSV file</li><li>Account successfully created!</li><li>Hello. Log in to your Admin</li><li>Unfortunately, the password is incorrect</li><li>Please enter this information</li></ul> |

Use common contractions.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| Provider couldn't be saved due to a technical issue | Provider could not be saved because of a technical issue |

Use punctuation only when a larger message is extremely necessary.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>The store is being edited live. Changes will have immediate effect.</li><li>File couldn't be processed because its size is larger than 10MB</li><li>Collection deleted successfully</li><li>Double-check the password</li><li>Upload an image up to 5 MB</li></ul> | <ul><li>The store is being edited live and changes will have immediate effect.</li><li>Sorry, your file is too large. To avoid errors, try files under 10 MB.</li><li>Collection deleted successfully!</li><li>The password is incorrect, please try again.</li><li>This file is too large, please upload an image with 5MB at most.</li></ul> |

Use sentence case, but capitalize proper nouns.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Collection exported successfully</li><li>Notifying Intelligent Search indexer</li></ul> | <ul><li>Collection Exported Successfully</li><li>Notifying intelligent search indexer</li></ul> |

## Specific

For the error texts in a form field, start with an imperative verb.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Complete this field</li><li>Check this option</li><li>Select at least one option</li></ul> | <ul><li>This field is required</li><li>This option needs to be checked</li><li>At least one option needs to be selected</li></ul> |

In modals that confirm actions, personal pronouns, and question marks can be used.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| This action can’t be undone. Are you sure you want to delete this product? | Do you want to delete this product? This can't be undone. |

For consistency, place the adverb “successfully” at the end of the phrase.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Order placed successfully</li><li>Collection exported successfully.</li></ul> | <ul><li>Your order was successfully placed</li><li>The collection was successfully exported</li></ul> |
