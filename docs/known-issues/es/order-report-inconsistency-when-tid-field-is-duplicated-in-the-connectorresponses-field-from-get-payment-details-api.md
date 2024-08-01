---
title: 'Incoherencia en el informe de pedido cuando el campo tid está duplicado en el campo connectorResponses de la API de detalles de pago GET.'
id: 4xXSp2RMyHMeHpEUXgmpAZ
status: PUBLISHED
createdAt: 2023-09-06T21:18:05.941Z
updatedAt: 2023-09-06T21:18:06.733Z
publishedAt: 2023-09-06T21:18:06.733Z
firstPublishedAt: 2023-09-06T21:18:06.733Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: incoherencia-en-el-informe-de-pedido-cuando-el-campo-tid-esta-duplicado-en-el-campo-connectorresponses-de-la-api-de-detalles-de-pago-get
locale: es
kiStatus: Backlog
internalReference: 895664
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Los conectores de esa lista necesitan guardar más campos para el conector que trabaja con "Venda direta" - Sales app. En concreto, para los conectores de la siguiente lista, y sólo para ellos, todo el contenido de la carga útil debe dirigirse al campo "`connectorResponses`". Esto resulta en una duplicación del campo "`tid`", que ya existe en el "`connectorResponses`". Aunque esta duplicación no plantea ningún problema en cuanto al ciclo de vida de la transacción, sí crea una incoherencia a la hora de generar informes desde la página de pedido.


- PagarMeV3
- PagarMeV3Stg
- Adyen V3


##

## Simulación



1. Accede a la página de pedidos del administrador.
2. Generar el informe del pedido.
3. Busque la columna `tId` donde se realizaron los pedidos utilizando uno de estos conectores



## Workaround


Utilice la ruta /payment o la API de pedidos GET para recuperar estos datos





