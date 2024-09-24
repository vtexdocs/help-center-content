---
title: "VTEX IO's new translation system"
id: CLDXiPt21R0R4lklbksqF
status: ARCHIVED
createdAt: 2019-02-18T21:18:44.129Z
updatedAt: 2020-03-13T21:24:39.126Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: vtex-ios-new-translation-system
locale: en
legacySlug: vtex-ios-new-translation-system
announcementImageID: ''
announcementSynopsisEN: 'The new Messages App and the changes in the MessagesBuilder make the translation process easier and more complete.'
---

We've launched the new __Messages App__, followed by major changes in the `MessagesBuilder`. The new features meet the needs of developers interested in a more complete translation system, which adds multilingual support to their front-end apps and the responses of back-end apps.


## How it used to be
Developing multi-language apps has always been considered a time-consuming process, especially with back-end apps. While front-end apps can be translated with internationalization libraries such as `react-intl`, back-end apps still require every string to be translated into a JSON file inside the `/messages` folder.

Adding up to those issues, language support is often limited by the developer's knowledge: It rarely extends beyond English, Portuguese, Spanish, and their mother tongue.


## What's new
The __Messages App__ is responsible for translating the strings of the entire IO platform. It will first try to translate its content from the translations defined by the user, then the apps’ translations (defined in the `/messages` folder), and finally do a fallback to our automatic translation system. 


## Main advantages of the new Messages App 
- Allows both developer (human) and automatic (machine) translations for all strings throughout the VTEX IO platform.
- Supports every language available on the web.
- Lets you focus on the translation of the most critical strings, leaving the rest to our automatic system.
- Easier entry to new foreign markets.
- Faster development cycles with automatic translation.
 

Learn how to add the __Messages App__ on your VTEX IO app on [this VTEX Help article](/en/tutorial/how-to-use-messages-on-your-io-apps).
