---
title: 'Las opciones de PUP no cambian al cambiar el código postal en las tiendas sin configuración de geoposicionamiento'
id: 6adZlmhb88zZsqifmWubO1
status: PUBLISHED
createdAt: 2022-08-30T20:06:15.411Z
updatedAt: 2022-11-25T21:50:10.149Z
publishedAt: 2022-11-25T21:50:10.149Z
firstPublishedAt: 2022-08-30T20:06:15.864Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: las-opciones-de-pup-no-cambian-al-cambiar-el-codigo-postal-en-las-tiendas-sin-configuracion-de-geoposicionamiento
locale: es
kiStatus: Fixed
internalReference: 648604
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Cuando la tienda no utiliza una configuración de geolocalización y el usuario cambia el código postal en el componente PUP, éste envía sólo el código postal a nuestro backend lo que no afecta a la distancia realmente, ya que este valor se calcula en base a las geoCoordenadas, por lo que, aunque el código postal sea diferente, se mantiene la misma pickupDistance calculada anteriormente.

Por otra parte, si el usuario elige el PUP y cambia el código postal, además de no calcular la nueva distancia como se ha mencionado, también permite pasar códigos postales que antes no se aceptaban.



## Simulación



Ve a una tienda sin configuración de geolocalización e introduce un código postal válido en el PUP. Después cambia el código postal por uno nuevo, para que veas que la distancia no cambia en la UI.



## Workaround



No hay solución.

