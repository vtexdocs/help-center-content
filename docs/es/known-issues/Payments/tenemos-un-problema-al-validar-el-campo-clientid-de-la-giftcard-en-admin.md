---
title: 'Tenemos un problema al validar el campo ClientId de la Giftcard en admin'
id: 4S7CziQfj5P2NLAgUKnJnP
status: PUBLISHED
createdAt: 2022-03-28T00:29:38.482Z
updatedAt: 2024-02-16T20:24:40.988Z
publishedAt: 2024-02-16T20:24:40.988Z
firstPublishedAt: 2022-03-28T00:29:39.028Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: we-have-a-problem-validating-the-clientid-field-of-the-giftcard-on-admin
locale: es
kiStatus: No Fix
internalReference: 454388
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Tenemos un problema de validación en el campo ClientId en la pantalla de Giftcards. El campo que originalmente se llamaba CPF/CNPJ en portugués, fue traducido al inglés como clientId. Pero, cuando el usuario quiere crear una nueva Giftcard a través de la UI, el campo se formatea automáticamente insertando los caracteres ".", "-" y "/" para que los datos ingresados cumplan con los estándares CPF o CNPJ



## Simulación



1. Vaya a una cuenta de prueba y cambie el idioma a inglés y abra la página de Giftcards
2. Cree una nueva Giftcard rellenando cualquier número en el campo clientId y verá que los números se formatean automáticamente



## Workaround


La solución es crear giftCards a través de la API

