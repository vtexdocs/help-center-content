---
title: 'Simulación de pago con una gran cantidad de la misma sku recibe un tiempo de espera Logística'
id: 753MDZbcyN9BTHAaSTpOlY
status: PUBLISHED
createdAt: 2024-06-18T12:42:44.404Z
updatedAt: 2024-06-18T12:42:45.419Z
publishedAt: 2024-06-18T12:42:45.419Z
firstPublishedAt: 2024-06-18T12:42:45.419Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: simulacion-de-pago-con-una-gran-cantidad-de-la-misma-sku-recibe-un-tiempo-de-espera-logistica
locale: es
kiStatus: No Fix
internalReference: 330775
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Tenemos un error en el servicio de Logística cuando intentamos simular una compra con miles de unidades del mismo SKU. Ese error se produce porque la solicitud para dividir el paquete tarda demasiado.

El detalle del error en la API es: "La operación fue cancelada".


##

## Simulación



1. Intenta hacer una **Simulación de caja** o una simulación en el **Carro de la compra** con miles de unidades del mismo SKU (como 50k).
2. Revisa los detalles en la respuesta de la API, y probablemente veas un error al procesar esa petición (**timeout**)



## Workaround


Recomendamos aumentar los límites de paquetes del transportista para acomodar las unidades en un solo paquete. Proporcionaría una solicitud más rápida y no devolvería un tiempo de espera.






