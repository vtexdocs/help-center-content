---
title: 'Campo E-mail de origen en el trigger no acepta placeholder'
id: 4EW6n1Ymus8CGSEW2CuK44
status: PUBLISHED
createdAt: 2017-12-12T17:50:04.943Z
updatedAt: 2022-12-22T20:48:42.548Z
publishedAt: 2022-12-22T20:48:42.548Z
firstPublishedAt: 2017-12-12T17:53:10.088Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: triggers-source-email-field-doesnt-accept-placeholder
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

En la configuración del trigger, es posible insertar un e-mail en el campo "E-mail de origen", pero este campo no acepta un placeholder, incluso si es del tipo e-mail.

## Simulación

1. Acceda o cree un trigger;
2. Haga clic en __acciones__ en caso positivo;
3. Rellene el campo "E-mail de origen" con un placeholcer. Por ejemplo: "{!email}";
4. Ejecute el trigger;
5. El e-mail no será enviado.

## Workaround

El campo "Nombre de visualización del e-mail de origen" acepta placeholders y se puede utilizar para cubrir la mayoría de los escenarios que necesitan placeholder en este campo.

