---
title: 'La captura de solicitudes no registra nuevos eventos cuando se utilizan almacenes heredados'
id: 5at40vZVpqL3Xansc726uv
status: PUBLISHED
createdAt: 2022-06-23T21:38:07.187Z
updatedAt: 2022-11-25T22:09:52.067Z
publishedAt: 2022-11-25T22:09:52.067Z
firstPublishedAt: 2022-06-23T21:38:07.517Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: la-captura-de-solicitudes-no-registra-nuevos-eventos-cuando-se-utilizan-almacenes-heredados
locale: es
kiStatus: Backlog
internalReference: 604254
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se utilizan los almacenes VTEX del portal (almacenes IO no VTEX) la aplicación de captura de solicitudes no está registrando eventos específicamente para las visitas a la página del producto.






## Simulación



1. utilizando una tienda VTEX del portal, acceda a una página de productos cuando esté conectado
2. compruebe si la aplicación rc es funcional en su tienda (detallado aquí: https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740#my-trigger-settings-are-correct-but-the-test-email-address-is-not-receiving-emails-what-must-be-checked)


3. Compruebe la propiedad 'productVisitedTag' del documento relacionado en su aplicación de Datos Maestros, habrá quedado nula. Debería haber sido rellenada con datos.






## Workaround


Esta usabilidad funciona para los almacenes VTEX IO.

