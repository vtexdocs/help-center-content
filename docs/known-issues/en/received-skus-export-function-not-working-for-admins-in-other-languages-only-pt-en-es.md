---
title: 'Received Skus: Export function not working for admins in other languages (only PT, EN, ES)'
id: 2fV4YP1dpdQRBYqT9S7Lzi
status: PUBLISHED
createdAt: 2022-09-29T14:23:38.774Z
updatedAt: 2023-05-08T18:23:20.798Z
publishedAt: 2023-05-08T18:23:20.798Z
firstPublishedAt: 2022-09-29T14:23:46.858Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: received-skus-export-function-not-working-for-admins-in-other-languages-only-pt-en-es
kiStatus: Fixed
internalReference: 668122
---

## Summary


The export feature to retrieve a spreadsheet with the pending, approved or rejected skus by seller is not working when the admin is set to any other language than PT, EN, ES.

The error message that appear is generic. A French message example is:
`Une erreur s’est produite lors de l’exportation de la feuille, veuillez réessayer.`


##

## Simulation



1. Set the admin to a language different than PT, EN or ES;
2. Go to Received Skus module;
3. Select a seller and export the skus on the pending, approved or rejected area;
4. Verify that a generic error will appear.


##

## Workaround


Change the admin language to PT, EN or ES and export the spreadsheet.






