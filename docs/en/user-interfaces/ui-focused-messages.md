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

### Messages consist of up to two sentences to communicate the system's current state and provide feedback on user actions. This pattern is commonly found in components like Inputs or Alerts.

### General

#### Keep it as short as possible while still being descriptive enough. Also, remember there’s a 240-character limit per message.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Provider could not be saved due to a technical issue <br> • Check this option <br> • Select at least one option <br> • Products could not be imported because the CSV file is invalid | • We faced an unexpected issue while attempting to save the provider. There might be several reasons for this, such as server downtime or network errors. <br> • Check this <br> • Select at least one <br> • Something went wrong |

#### Don't use technical language.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Invoice could not be sent due to a technical issue | • Error 298dx9283 prevented the invoice from being sent |

#### Reuse messages (or their structure) whenever possible.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Collection exported successfully <br> • Provider could not be saved due to a technical issue <br> • Enter this information <br> • Check this option <br> • Select at least one option | • The collection was successfully exported. <br> • A technical issue prevented the provider from being saved <br> • This field is required <br> • This option needs to be checked <br> • At least one option needs to be selected |

#### Don't use personal pronouns.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Account created successfully <br> • Double-check the password | • Your account was successfully created <br> • You entered the wrong password. |

#### Use an objective and neutral tone.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Invoice could not be sent due to a technical issue <br> • Products could not be imported because the CSV file is invalid <br> • Account created successfully <br> • Log in to your Admin <br> • Double-check the password <br> • Enter this information | • Oops, something went wrong, and the invoice could not be sent <br> • Please upload a valid CSV file <br> • Account successfully created! <br> • Hello. Log in to your Admin <br> • Unfortunately, the password is incorrect <br> • Please enter this information |

#### Use common contractions.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Provider couldn't be saved due to a technical issue | • Provider could not be saved because of a technical issue |

#### Use punctuation only when a larger message is extremely necessary.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • The store is being edited live. Changes will have immediate effect. <br> • File could not be processed because its size is larger than 10MB <br> • Collection deleted successfully <br> • Double-check the password <br> • Upload an image up to 5 MB | • The store is being edited live and changes will have immediate effect. <br> • Sorry, your file is too large. To avoid errors, try files under 10 MB. <br> • Collection deleted successfully! <br> • The password is incorrect, please try again. <br> • This file is too large, please upload an image with 5MB at most. |

#### Use sentence case, but capitalize proper nouns.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Collection exported successfully <br> • Notifying Intelligent Search indexer | • Collection Exported Successfully <br> • Notifying intelligent search indexer |

### Specific

#### For the error texts in a form field, start with an imperative verb.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Complete this field <br> • Check this option <br> • Select at least one option | • This field is required <br> • This option needs to be checked <br> • At least one option needs to be selected |

#### In modals that confirm actions, personal pronouns, and question marks can be used.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • This action can’t be undone. Are you sure you want to delete this product? | • Do you want to delete this product? This can't be undone. |

#### For consistency, place the adverb “successfully” at the end of the phrase.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| • Order placed successfully <br> • Collection exported successfully. | • Your order was successfully placed <br> • The collection was successfully exported |
