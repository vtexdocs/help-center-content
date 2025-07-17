---
title: "“Confirm action” unavailable in Catalog, Sellers, CMS and Gift Card modules for Google Chrome"
id: 5UzVaWa63dPwPlbK3n2AH5
status: PUBLISHED
createdAt: 2021-07-27T22:29:39.402Z
updatedAt: 2022-12-14T22:44:54.580Z
publishedAt: 2022-12-14T22:44:54.580Z
firstPublishedAt: 2021-07-28T17:29:39.548Z
contentType: knownIssue
productTeam: Others
author: 0QBQws7rk0t5Mnu8fgfUv
tag: Catalog,Gift Card,Portal (CMS),Suggestions
slugEN: confirm-action-unavailable-in-catalog-sellers-cms-and-gift-card-modules-for
locale: en
kiStatus: Fixed
internalReference:  
---

## Summary

[Google Chrome’s update 92](https://chromestatus.com/feature/5148698084376576) removed the support for the `alert` and `confirm` Javascript functions on cross origin iframes. This will remove the “confirm action” prompt on your VTEX Admin for VTEX Catalog, Sellers, CMS and Gift Card modules, which will prevent some actions from being carried out.


## Simulation

The “confirm action” prompts in Gift Card, Sellers and Catalog modules are unavailable, due to Google Chrome’s update 92. Actions that users won’t be able to accomplish include, for example:

- __Gift Card:__ users cannot cancel a gift card.
- __Catalog:__ users are unable to delete SKU images, delete brands, remove list types, delete or enable attachments, edit XML collections, delete comercial conditions and remove providers/suppliers. 
- __Sellers (only the Management and SKU binding modules):__ users are unable to deactivate Sellers (Management module) and unable to remove SKU bindings (SKU binding module).
- __CMS (settings):__ users are unable to delete geographical areas on their CMS settings page.


## Workaround

To avoid this issue, users can:

- Access the VTEX Admin through another browser like Mozilla Firefox, Internet Explorer, Microsoft Edge, or Apple Safari browser.  
- Add the following flag to your Google Chrome Shortcut:     

`--disable-features="SuppressDifferentOriginSubframeJSDialogs"`   

Check out [Google Chrome’s documentation](https://support.google.com/chrome/a/answer/6271282?hl=en#zippy=%2Cwindows) to know how.   


