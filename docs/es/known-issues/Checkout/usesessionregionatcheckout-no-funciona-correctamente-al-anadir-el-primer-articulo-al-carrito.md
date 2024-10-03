---
title: 'UseSessionRegionAtCheckout no funciona correctamente al añadir el primer artículo al carrito.'
id: 2NzgWTbaHF47f5dl49A2D5
status: PUBLISHED
createdAt: 2023-10-24T22:51:27.435Z
updatedAt: 2023-10-26T10:55:29.843Z
publishedAt: 2023-10-26T10:55:29.843Z
firstPublishedAt: 2023-10-24T22:51:28.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: usesessionregionatcheckout-doesnt-work-properly-when-adding-the-first-item-to-the-cart
locale: es
kiStatus: Backlog
internalReference: 925049
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Si una cuenta tiene configurado el toggle 'UseSessionRegionAtCheckout', al añadir un artículo y el orderForm no tiene 'shippingData', no se configura el vendedor, mostrando precios y disponibilidad diferentes.


##

## Simulación



- La cuenta debe estar usando UseSessionRegionAtCheckout;
- Establecer un regionId en la sesión;
- Añadir un artículo al carrito; puede mostrar diferentes precios y disponibilidad.



## Workaround


Actualice el orderForm (API Get current o cree un nuevo carrito) utilizando el parámetro `?refreshOutdatedData=true`.




