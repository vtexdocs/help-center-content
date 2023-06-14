---
title: '¿Por qué las imágenes de mi tienda se muestran con baja calidad?'
id: 5LxgbF8S2cIUOCaCO00GcK
status: PUBLISHED
createdAt: 2018-02-22T19:10:35.567Z
updatedAt: 2019-12-31T14:25:33.320Z
publishedAt: 2019-12-31T14:25:33.320Z
firstPublishedAt: 2018-02-22T22:03:18.347Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slug: imagenes-con-baja-calidad
locale: es
legacySlug: imagenes-con-baja-calidad
---

Si el problema se identificó al acceder a su tienda por __Google Chrome__, la respuesta a esto es probablemente el formato de compresión utilizado por este navegador para mostrar imágenes. 

Conocido como [__WebP__](/es/tutorial/como-funciona-la-compactacion-automatica-de-imagenes), fue creado por Google para disminuir el tiempo de carga de los sitios y evitar trabas. Para ello, utiliza un proceso que puede compactar la imagen de dos formas:

- __Lossy:__ comprime la imagen con reducción de calidad.
- __Lossless:__ comprime la imagen sin reducir la calidad.

En VTEX, el sistema que renderiza las imágenes en la pantalla hace la conversión de los archivos en __WebP__ automáticamente y en tiempo real, siempre y cuando se utilice un navegador compatible con el formato. Para los archivos _.jpg_, el proceso utilizado es __lossy__. Ya para los _.png_, aplicamos el proceso __lossless__. Cuando el navegador no reconoce __WebP__, las imágenes se renderizan en su formato original.

Si utiliza imágenes con la extensión _.jpg_ en su sitio web, es normal que pasen por alguna pérdida de calidad. Sin embargo, esta diferencia no debería ser muy sensible. Para corregirla, lo mejor es subir de nuevo los archivos, pero con una resolución un poco más grande.

Ahora, si es fundamental para su tienda mostrar imágenes con máxima calidad, le recomendamos que utilice el formato _.png_. Este formato cuentan con compresión automática __lossless__, que mantiene las cualidades del archivo original.

### Artículos relacionados
- [Cómo funciona la compactación automática de imágenes para el formato WebP](/es/tutorial/como-funciona-la-compactacion-automatica-de-imagenes)
