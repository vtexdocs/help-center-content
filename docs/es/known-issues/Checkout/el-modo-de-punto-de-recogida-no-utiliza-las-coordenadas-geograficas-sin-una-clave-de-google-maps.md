---
title: 'El modo de punto de recogida no utiliza las coordenadas geográficas sin una clave de Google Maps.'
id: 5aPNjLlsVVeyGe0Vywt0H9
status: PUBLISHED
createdAt: 2024-05-29T20:31:46.863Z
updatedAt: 2024-07-03T15:56:30.595Z
publishedAt: 2024-07-03T15:56:30.595Z
firstPublishedAt: 2024-05-29T20:31:47.737Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: pickup-point-modal-doesnt-utilize-geocoordinates-without-a-google-maps-key
locale: es
kiStatus: Backlog
internalReference: 1041462
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al insertar un código postal en el modal del selector de punto de recogida, se activa una solicitud para obtener los ANS disponibles para esa ubicación. Si la cuenta no tiene una clave de API de Google Maps definida en su configuración de Pago, esta solicitud no incluirá información de geoCoordenadas. Esto puede provocar que no se muestren los puntos de recogida dentro de un rango válido, como aquellos cuyas tablas de carga se basan en polígonos.



## Simulación



1. Utiliza una tienda que no tenga definida una clave API de Google Maps.
2. Configura un punto de recogida, y enlázalo a un transportista cuya tabla de carga esté basada en polígonos.
3. Añade un producto al carrito.
4. En la vista previa del envío, seleccione la opción de recogida e introduzca un código postal que tenga disponibilidad para el punto de recogida que ha creado.
5. 5. Inspeccione la solicitud shippingData generada por esta acción. No contendrá geoCoordenadas.




## Workaround


Establezca una clave de API de Google Maps en la configuración de pago de la tienda.





