---
title: 'Version author "Note: Not found on VTEX ID." on the profile'
id: 0X6Aj6YdCXXfNweAkDS46
status: PUBLISHED
createdAt: 2023-10-04T21:48:14.699Z
updatedAt: 2023-10-04T22:14:45.195Z
publishedAt: 2023-10-04T22:14:45.195Z
firstPublishedAt: 2023-10-04T21:48:15.379Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: version-author-note-not-found-on-vtex-id-on-the-profile
locale: en
kiStatus: Scheduled
internalReference: 914314
---

## Summary


When the customer makes a purchase, the author of the version is given an user id (guid) or a service, followed by the login/name/description "`Note: Not found on VTEX ID.`" on the profile.
This behavior does not impact the profile or shopper experience, once this is only about the UI, and it is possible to check the information by version API.


##

## Simulation



- Access Master Data CRM (for example https://my-account-here.vtexcrm.com.br);
- Access CL (Clientes) Data Entity tab:
- Select a document and click on the eye icon to view the data;
- Click on "_Change Log_" button;
- Open a recent version;
- Check the "_Version author_", it will be an user id, and the name "`Note: Not found on VTEX ID.`", for example:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/version-author-note-not-found-on-vtex-id-on-the-profile_1.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/version-author-note-not-found-on-vtex-id-on-the-profile_2.png)

- Checking by Get version API:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Storage/version-author-note-not-found-on-vtex-id-on-the-profile_3.png)

    "updatedBy_USER": "{\"Id\":\"d6d8269f-e7cc-4e4b-8b89-3b46a1407937\",\"Login\":\"vtex-service::checkout::stable\",\"Name\":null}",



##

## Workaround


You can check the author using our APIs:

- List versions
- Get version




