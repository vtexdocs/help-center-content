---
title: 'Website Binding with old License Manager details'
id: 1F8B0AD7IEGgmqWswAAkYe
status: PUBLISHED
createdAt: 2017-04-10T13:26:43.145Z
updatedAt: 2022-12-22T20:46:11.599Z
publishedAt: 2022-12-22T20:46:11.599Z
firstPublishedAt: 2017-04-10T13:43:26.648Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: License Manager
slugEN: website-binding-with-old-license-manager-details
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The __Website Binding__ tool is responsible for bridging the CMS (Portal) with the information given in the License Manager of a specific __storename__.

If at any time the store owner changes the details of a __storename__, the Portal will add this information to the existing Website Binding, instead of overwriting it.

Possible problems with this bug involve XMLs, which use the first domain encountered in the Binding when generated. 

The example of the __Delacasa__ store illustrates the bug:

Before it was called __delacasa__ the domain __decoramovel__ had been created. The Portal created the Binding and then added the new information to the new domain for the same Binding.

The new details entered in the LM:
![license-manager-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Identity/website-binding-with-old-license-manager-details_1.JPG) 

of the Website dictionary (mundinho) were shown as follows, making it clear what had happened:
![dictionary-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Identity/website-binding-with-old-license-manager-details_2.JPG) 

From the Website Binding showing the result:
![binding-delacasa](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Identity/website-binding-with-old-license-manager-details_3.JPG)

## Simulation

Creating a __storename__ in License Manager and then editing details of this storename in License Manager.

## Workaround

License Manager is saving the information in the data bank correctly, i.e. it overwrites the information. The Portal is updating the information wrongly when it extracts it.

The best solution would be to create a new Website Binding for this Website (mundinho).

The new Binding will have the new details.

After creating a new one, make the change and later, if necessary, delete the old one.

It is important to do things in this order, or the site will go off the air.
![2017-04-10 10 40 41-Index](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Identity/website-binding-with-old-license-manager-details_4.png)

