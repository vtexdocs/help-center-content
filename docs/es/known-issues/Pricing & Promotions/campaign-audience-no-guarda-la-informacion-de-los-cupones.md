---
title: 'Campaign Audience no guarda la información de los cupones'
id: 2UVQQVLSb0UjDmyWQ5xqEX
status: PUBLISHED
createdAt: 2022-10-13T18:18:40.484Z
updatedAt: 2022-11-25T22:11:35.532Z
publishedAt: 2022-11-25T22:11:35.532Z
firstPublishedAt: 2022-10-13T18:18:41.270Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: campaign-audience-doesnt-save-coupon-information
locale: es
kiStatus: Backlog
internalReference: 521601
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Campaign Audience no guarda la información de los cupones



## Simulación



1. Cree un público de campaña y utilice una condición de cupón;
2. Crea una Promoción de Campaña asociada a este Público de Campaña;
3. Compra un producto que tenga aplicada esta promoción;
4. Comprueba en la OMS este pedido;
5. Revise el OrderForm del pedido, el cupón no se guarda en el campo `marketingData`.



## Workaround


No hay ninguna solución. Si es posible, el cliente puede utilizar la condición de cupón en la Promoción si es una opción.

