---
title: "Cálculo de envío en la página de producto muestra ID del punto de retirada"
id: 4NJrWgCGXSKe2aKWo4UYUY
status: PUBLISHED
createdAt: 2018-06-01T12:59:25.406Z
updatedAt: 2022-12-22T20:49:04.210Z
publishedAt: 2022-12-22T20:49:04.210Z
firstPublishedAt: 2018-06-01T13:03:09.960Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: calculo-de-envio-en-la-pagina-de-producto-muestra-id-del-punto-de-retirada
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Si la tienda tiene un punto de retirada registrado, la simulación de flete (cálculo de entrega) en la *página de producto* muestra el ID del punto de retirada utilizado para identificación en el módulo de logística.

## Simulación

1. Registre un punto de retirada en el módulo Logistics y asocie un producto para ser retirado en él;
2. Acceda a la URL de la página de este producto;
3. Simule el flete;
4. Al lado del nombre del punto de retirada aparecerá un valor entre paréntesis. Este valor es el ID del punto de retirada utilizado para identificación en el módulo de logística.

## Workaround

Es necesario que la tienda ajuste el front-end para no mostrar el valor entre paréntesis.

