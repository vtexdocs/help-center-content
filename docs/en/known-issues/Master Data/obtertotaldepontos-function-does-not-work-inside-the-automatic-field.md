---
title: "'ObterTotalDePontos' function does not work inside the Automatic Field"
id: 1iHy0tOPoUEIyGsYoq2Sqm
status: PUBLISHED
createdAt: 2018-12-10T18:08:19.476Z
updatedAt: 2022-12-22T20:43:26.978Z
publishedAt: 2022-12-22T20:43:26.978Z
firstPublishedAt: 2018-12-10T18:37:48.745Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: obtertotaldepontos-function-does-not-work-inside-the-automatic-field
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The function ObterTotalDePontos used inside "Calculated Fields" does not work as expected and gives the following error message: he name 'campoScore' does not exist in the current context

## Simulation

1.  Access MasterData and create an automatic field
2.  Create a simple function that uses ObterTotalDePontos.  Ex:

    if ( ObterTotalDePontos(campoScore) > 0 ) { 
    return 1; 
    } else { 
    return 0; 
    }
    
3. Error: The name 'campoScore' does not exist in the current context

## Workaround

Depending on the what the account is attempting to do, a solution could be as simple as implementing an external middleware to calculate the fields and handle condition flow alongside MasterData's triggers.

