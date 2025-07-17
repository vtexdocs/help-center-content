---
title: "La geolocalización para buscar puntos de recogida se queda cargando"
id: 9HACCiPSeJY9174Qh9FQb
status: PUBLISHED
createdAt: 2021-09-08T18:11:35.333Z
updatedAt: 2021-10-19T13:09:47.890Z
publishedAt: 2021-10-19T13:09:47.890Z
firstPublishedAt: 2021-09-08T19:28:29.303Z
contentType: knownIssue
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slugEN: la-geolocalizacion-para-buscar-puntos-de-recogida-se-queda-cargando
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

Durante el checkout, si la ubicación del cliente se obtiene mediante el permiso de ubicación del navegador, el mapa se queda cargando y muestra el mensaje «Esperando permiso para obtener su ubicación actual».


## Simulación


Para simular un escenario que requiera cambiar la ubicación identificada por el navegador, recomendamos utilizar la sustitución de geolocalización del navegador.  Para realizar pruebas en Google Chrome, consulte el artículo sobre [Sustitución de la geolocalización en Chrome](https://developer.chrome.com/docs/devtools/device-mode/geolocation/).

Si la ubicación de su navegador satisface la condición anterior, siga los pasos a continuación:

1. Acceda a la tienda;
2. Añada productos al carrito;
3. Proceda al _checkout_;
4. Habilite la ubicación en el navegador;
5. Durante el _checkout_, seleccione la opción de entrega «punto de recogida». 
6. Observe que la página se queda cargando, mostrando el mensaje «Esperando permiso para obtener su ubicación actual».

![erro Es](//images.contentful.com/alneenqid6w5/4MVL2ctjpB3TRIfQt1ht3O/c9b547445063ca5893288590621944c9/erro_Es.png)

## Workaround

No hay ningún workaround para este escenario. 


