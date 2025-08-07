---
title: "Sistema de comentarios del CRM no funciona"
id: 6ND4BvFMWsCaMu6OuqaYqG
status: PUBLISHED
createdAt: 2019-01-07T17:54:17.690Z
updatedAt: 2022-12-22T20:48:59.020Z
publishedAt: 2022-12-22T20:48:59.020Z
firstPublishedAt: 2019-01-07T19:04:57.208Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slugEN: sistema-de-comentarios-del-crm-no-funciona
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

El sistema de comentarios del CRM no guarda la información introducida.

El uso del sistema de comentarios, tanto directamente como a través de triggers, queda comprometido.

## Simulación

1. Acceda a https://{{account}}.vtexcrm.com.br;
2. Seleccione un documento;
3. Escriba en el campo de comentario y haga clic en `Guardar`. El sistema responderá con "Su comentario fue guardado con éxito";
4. El comentario desaparece.

## Workaround

Una solución posible sería crear un campo del tipo `Text` y dejarlo visible en el formulario.

A continuación, usted puede crear o editar el valor del campo.

