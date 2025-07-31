---
title: "Error on render the view page invalid xmlChar"
id: 21ppcawmC16fj0XoJkcIx1
status: PUBLISHED
createdAt: 2024-11-26T18:10:51.721Z
updatedAt: 2024-11-26T18:10:52.614Z
publishedAt: 2024-11-26T18:10:52.614Z
firstPublishedAt: 2024-11-26T18:10:52.614Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-on-render-the-view-page-invalid-xmlchar
locale: en
kiStatus: Backlog
internalReference: 1140738
---

## Summary


When rendering the view page, an error `error on line ... at column ...: xmlParseCharRef: invalid xmlChar value ...` occurs. This error happens because the form contains a character not interpreted by the XML parser, causing the page to fail during rendering.

 ![](https://vtexhelp.zendesk.com/attachments/token/vXtAkcFk2c2KKi0QNLO58P9dw/?name=Captura+de+Tela+2024-11-26+a%CC%80s+15.08.07.png)

This field was checked in the checkbox on the form List Fields.

 ![](https://vtexhelp.zendesk.com/attachments/token/LmZN49pwizGkuoR89Q7FWzA5n/?name=Captura+de+Tela+2024-11-26+a%CC%80s+14.59.02.png)


##

## Simulation



1. Access the view page in the system.
2. Load a form containing a field with a character not supported by the XML parser.
3. On Chrome dev tools observe that the page fails to render and displays the following

    error: error on line ... at column ...: xmlParseCharRef: invalid xmlChar value ...



##

## Workaround


Identify the field containing the unsupported character.
Remove the invalid character from the field's value using API.
Reload the page to verify that it renders correctly.

